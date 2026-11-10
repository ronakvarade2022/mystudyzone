import crypto from 'crypto';
import type { Request, Response } from 'express';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';
import {
  getResolvedRazorpayCredentials,
  sanitizeEnvValue,
  isPlaceholderValue
} from '../firebase/index.ts';

// Initialize Firebase & Firestore connection to the project's provisioned database
const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const firestoreDb = getFirestore(
  firebaseApp,
  firebaseConfig.firestoreDatabaseId
);

export interface WebhookVerificationResult {
  valid: boolean;
  reason?: string;
}

/**
 * Verifies the 'X-Razorpay-Signature' header using RAZORPAY_WEBHOOK_SECRET
 * via HMAC-SHA256 and timing-safe comparison.
 */
export function verifyWebhookSignature(
  rawBody: Buffer | string,
  signatureHeader: string | undefined
): WebhookVerificationResult {
  if (!signatureHeader || typeof signatureHeader !== 'string') {
    return { valid: false, reason: 'Missing X-Razorpay-Signature header.' };
  }

  const rawWebhookSecret = sanitizeEnvValue(process.env.RAZORPAY_WEBHOOK_SECRET);
  const creds = getResolvedRazorpayCredentials();

  const candidateSecrets: string[] = [];
  if (rawWebhookSecret && !isPlaceholderValue(rawWebhookSecret)) {
    candidateSecrets.push(rawWebhookSecret);
  }
  if (creds.webhookSecret && !candidateSecrets.includes(creds.webhookSecret)) {
    candidateSecrets.push(creds.webhookSecret);
  }
  if (creds.keySecret && !candidateSecrets.includes(creds.keySecret)) {
    candidateSecrets.push(creds.keySecret);
  }

  if (candidateSecrets.length === 0) {
    return {
      valid: false,
      reason: 'RAZORPAY_WEBHOOK_SECRET is not configured on the server.'
    };
  }

  const bodyBuffer = Buffer.isBuffer(rawBody)
    ? rawBody
    : Buffer.from(String(rawBody), 'utf8');
  const providedSigBuffer = Buffer.from(signatureHeader.trim(), 'utf8');

  for (const secret of candidateSecrets) {
    const expectedHex = crypto
      .createHmac('sha256', secret)
      .update(bodyBuffer)
      .digest('hex');
    const expectedSigBuffer = Buffer.from(expectedHex, 'utf8');

    if (
      providedSigBuffer.length === expectedSigBuffer.length &&
      crypto.timingSafeEqual(providedSigBuffer, expectedSigBuffer)
    ) {
      return { valid: true };
    }
  }

  return {
    valid: false,
    reason: 'X-Razorpay-Signature verification failed.'
  };
}

export interface CapturedPaymentSubscriptionResult {
  success: boolean;
  alreadyProcessed: boolean;
  studentId: string;
  studentName: string;
  planId: 'basic' | 'premium';
  subscriptionTier: 'standard' | 'premium';
  planLabel: string;
  amountInr: number;
  paymentId: string;
  orderId: string;
  method: string;
  startDateIso: string;
  expiryDateIso: string;
  daysRemaining: number;
  receiptNumber: string;
}

/**
 * Retrieves the user document from Firestore (/students/{studentId}) and updates
 * their subscription status ('premium' or 'standard'/'basic') with a new expiration
 * date set to 90 days from the current date (or +90 days if renewing an active plan).
 */
export async function processPaymentCapturedEvent(params: {
  paymentEntity: Record<string, any>;
  orderEntity?: Record<string, any>;
  signature: string;
}): Promise<CapturedPaymentSubscriptionResult> {
  const { paymentEntity, orderEntity, signature } = params;

  const paymentId = String(paymentEntity?.id || '').trim();
  if (!paymentId) {
    throw new Error('Missing payment.entity.id in payment.captured event.');
  }

  const orderId = String(
    paymentEntity?.order_id || orderEntity?.id || `order_webhook_${Date.now()}`
  ).trim();
  const amountPaise = Number(
    paymentEntity?.amount || orderEntity?.amount || 0
  );
  const notes = {
    ...(orderEntity?.notes || {}),
    ...(paymentEntity?.notes || {})
  };

  const studentId = String(notes.studentId || notes.userId || '').trim();
  if (!studentId) {
    throw new Error(
      'Missing studentId in payment notes. Cannot associate payment with a Firestore user document.'
    );
  }

  const rawPlanNote = String(
    notes.planId || notes.subscriptionTier || ''
  ).toLowerCase();
  const planId: 'basic' | 'premium' =
    rawPlanNote === 'premium' || amountPaise >= 9900 ? 'premium' : 'basic';
  const subscriptionTier: 'standard' | 'premium' =
    planId === 'premium' ? 'premium' : 'standard';
  const planLabel =
    planId === 'premium'
      ? 'PREMIUM PLAN – ₹99 – 90 Days'
      : 'STANDARD PLAN – ₹49 – 90 Days';
  const amountInr = planId === 'premium' ? 99 : 49;
  const method = String(paymentEntity?.method || 'RAZORPAY').toUpperCase();

  // 1. Retrieve existing user document from Firestore (/students/{studentId})
  const studentRef = doc(firestoreDb, 'students', studentId);
  const existingSnap = await getDoc(studentRef);
  const existingData = existingSnap.exists() ? existingSnap.data() : null;

  const studentName = String(
    notes.studentName || existingData?.name || 'Student'
  ).trim();
  const email = String(
    notes.email || paymentEntity?.email || existingData?.email || ''
  ).trim();
  const mobile = String(
    notes.mobile || paymentEntity?.contact || existingData?.mobile || ''
  ).trim();

  const now = new Date();
  const startDateIso = now.toISOString().split('T')[0];

  // Idempotency protection: if this paymentId was already applied to the user document
  if (existingData?.lastPaymentId && existingData.lastPaymentId === paymentId) {
    const existingExpiryIso =
      existingData.planExpiresAt ||
      new Date(now.getTime() + 90 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0];
    const daysRemaining = Math.max(
      1,
      Math.ceil(
        (new Date(existingExpiryIso).getTime() - now.getTime()) /
          (1000 * 60 * 60 * 24)
      )
    );
    return {
      success: true,
      alreadyProcessed: true,
      studentId,
      studentName,
      planId,
      subscriptionTier,
      planLabel,
      amountInr,
      paymentId,
      orderId,
      method,
      startDateIso: existingData.planPurchasedAt || startDateIso,
      expiryDateIso: existingExpiryIso,
      daysRemaining,
      receiptNumber: `REC-VC-${paymentId.slice(-6).toUpperCase()}`
    };
  }

  // 2. Calculate new expiration date set to 90 days from current date (or +90 days if active)
  let baseDate = new Date(now);
  if (
    existingData?.planExpiresAt &&
    new Date(existingData.planExpiresAt) > now &&
    (existingData?.plan === 'basic' ||
      existingData?.plan === 'standard' ||
      existingData?.plan === 'premium')
  ) {
    baseDate = new Date(existingData.planExpiresAt);
  }

  const expiryDate = new Date(baseDate);
  expiryDate.setDate(expiryDate.getDate() + 90);
  const expiryDateIso = expiryDate.toISOString().split('T')[0];
  const daysRemaining = Math.max(
    1,
    Math.ceil((expiryDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
  );
  const receiptNumber = `REC-VC-${Date.now().toString().slice(-6)}`;

  // 3. Update the user's Firestore document with the new subscription status and 90-day expiry date
  await setDoc(
    studentRef,
    {
      id: studentId,
      plan: planId,
      subscriptionTier,
      planLabel,
      isLifetimeFree: false,
      planPurchasedAt: startDateIso,
      planExpiresAt: expiryDateIso,
      subscriptionValidityDays: 90,
      subscriptionStatus: 'ACTIVE',
      lastPaymentId: paymentId,
      lastOrderId: orderId,
      lastPaymentAmountInr: amountInr,
      subscriptionUpdatedAt: now.toISOString()
    },
    { merge: true }
  );

  // 4. Record the verified payment transaction in Firestore (/transactions/tx_{paymentId})
  const safePaymentId = paymentId.replace(/[^a-zA-Z0-9_-]/g, '_');
  const txDocId = safePaymentId.startsWith('tx_')
    ? safePaymentId
    : `tx_${safePaymentId}`;
  const txRef = doc(firestoreDb, 'transactions', txDocId);

  await setDoc(
    txRef,
    {
      id: txDocId,
      receiptNumber,
      studentId: studentId.slice(0, 128),
      studentName: studentName.slice(0, 100),
      parentEmail: email.slice(0, 150),
      parentMobile: mobile.slice(0, 20),
      planId,
      subscriptionTier,
      planTitle: planLabel,
      amount: amountInr,
      currency: 'INR',
      orderId,
      paymentId,
      signature,
      method,
      status: 'SUCCESS',
      createdAt: now.toISOString(),
      verifiedAt: now.toISOString(),
      membershipStartDate: startDateIso,
      membershipExpiryDate: expiryDateIso,
      savedToFirestoreAt: now.toISOString()
    },
    { merge: true }
  );

  return {
    success: true,
    alreadyProcessed: false,
    studentId,
    studentName,
    planId,
    subscriptionTier,
    planLabel,
    amountInr,
    paymentId,
    orderId,
    method,
    startDateIso,
    expiryDateIso,
    daysRemaining,
    receiptNumber
  };
}

/**
 * Express / Cloud Function HTTP Handler for Razorpay Webhooks.
 * Verifies 'X-Razorpay-Signature', extracts 'payment.captured', retrieves the
 * user document from Firestore, and updates their subscription with a 90-day expiry date.
 */
export async function handleRazorpayWebhook(req: Request, res: Response) {
  try {
    const signature =
      (req.headers['x-razorpay-signature'] as string) ||
      (req.headers['X-Razorpay-Signature'] as string);

    const rawBody = Buffer.isBuffer((req as any).body)
      ? ((req as any).body as Buffer)
      : Buffer.from(
          typeof (req as any).body === 'string'
            ? (req as any).body
            : JSON.stringify((req as any).body || {}),
          'utf8'
        );

    const verification = verifyWebhookSignature(rawBody, signature);
    if (!verification.valid) {
      return res.status(400).json({
        status: 'error',
        message: verification.reason || 'Invalid X-Razorpay-Signature.'
      });
    }

    const event = JSON.parse(rawBody.toString('utf8'));
    const eventType = String(event?.event || '');

    if (eventType === 'payment.captured' || eventType === 'order.paid') {
      const paymentEntity = event?.payload?.payment?.entity;
      const orderEntity = event?.payload?.order?.entity;

      if (!paymentEntity || !paymentEntity.id) {
        return res.status(400).json({
          status: 'error',
          message: 'Missing payment.entity in webhook payload.'
        });
      }

      const result = await processPaymentCapturedEvent({
        paymentEntity,
        orderEntity,
        signature: signature || 'verified_webhook_signature'
      });

      return res.status(200).json({
        status: 'ok',
        event: eventType,
        studentId: result.studentId,
        plan: result.planId,
        subscriptionTier: result.subscriptionTier,
        planExpiresAt: result.expiryDateIso,
        validityDays: 90,
        alreadyProcessed: result.alreadyProcessed
      });
    }

    return res.status(200).json({ status: 'ok', event: eventType });
  } catch (error: any) {
    console.error('[functions/webhook.ts Error]:', error);
    return res.status(500).json({
      status: 'error',
      message: error?.message || 'Internal webhook processing error.'
    });
  }
}

export default handleRazorpayWebhook;
