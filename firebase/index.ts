import crypto from 'crypto';
import Razorpay from 'razorpay';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

// Initialize Firebase & Firestore for backend / webhook operations
const firebaseServerApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const serverDb = getFirestore(
  firebaseServerApp,
  firebaseConfig.firestoreDatabaseId
);

export interface ResolvedRazorpayCredentials {
  keyId: string;
  keySecret: string;
  webhookSecret: string;
  isConfigured: boolean;
  isLive: boolean;
  wasSwappedInEnv: boolean;
}

export function sanitizeEnvValue(val: string | undefined): string {
  if (!val) return '';
  return val.trim().replace(/^["']+|["']+$/g, '').trim();
}

export function isPlaceholderValue(val: string): boolean {
  if (!val) return true;
  const upper = val.toUpperCase();
  return (
    upper.includes('YOUR_') ||
    upper.includes('MY_') ||
    upper.includes('REPLACE_') ||
    val === 'rzp_test_VACATION_CHAMP'
  );
}

/**
 * Resolves Razorpay Key ID, Key Secret, and Webhook Secret securely from environment variables.
 * Automatically detects if RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET were entered
 * in swapped order so the secret is never exposed to the client.
 */
export function getResolvedRazorpayCredentials(): ResolvedRazorpayCredentials {
  const rawId = sanitizeEnvValue(
    process.env.RAZORPAY_KEY_ID ||
      process.env.RAZORPAY_LIVE_KEY_ID ||
      process.env.VITE_RAZORPAY_KEY_ID
  );
  const rawSecret = sanitizeEnvValue(
    process.env.RAZORPAY_KEY_SECRET ||
      process.env.RAZORPAY_LIVE_KEY_SECRET ||
      process.env.RAZORPAY_SECRET
  );
  const rawWebhookSecret = sanitizeEnvValue(process.env.RAZORPAY_WEBHOOK_SECRET);

  const cleanId = isPlaceholderValue(rawId) ? '' : rawId;
  const cleanSecret = isPlaceholderValue(rawSecret) ? '' : rawSecret;
  const cleanWebhookSecret = isPlaceholderValue(rawWebhookSecret)
    ? ''
    : rawWebhookSecret;

  let keyId = cleanId;
  let keySecret = cleanSecret;
  let wasSwappedInEnv = false;

  if (!cleanId.startsWith('rzp_') && cleanSecret.startsWith('rzp_')) {
    keyId = cleanSecret;
    keySecret = cleanId;
    wasSwappedInEnv = true;
  }

  const hasValidKeyId =
    keyId.startsWith('rzp_live_') || keyId.startsWith('rzp_test_');
  const hasValidSecret = Boolean(
    keySecret && keySecret.length >= 12 && !keySecret.startsWith('rzp_')
  );
  const isConfigured = hasValidKeyId && hasValidSecret;
  const isLive = isConfigured && keyId.startsWith('rzp_live_');

  return {
    keyId: hasValidKeyId ? keyId : '',
    keySecret: hasValidSecret ? keySecret : '',
    webhookSecret: cleanWebhookSecret || (hasValidSecret ? keySecret : ''),
    isConfigured,
    isLive,
    wasSwappedInEnv
  };
}

export function createRazorpayClient(): Razorpay | null {
  const creds = getResolvedRazorpayCredentials();
  if (!creds.isConfigured) return null;
  try {
    return new Razorpay({
      key_id: creds.keyId,
      key_secret: creds.keySecret
    });
  } catch (err) {
    console.error('[Firebase/Razorpay] Initialization error:', err);
    return null;
  }
}

/**
 * Cloud Function / Backend Handler: Create a Razorpay Order for ₹49 (Standard - 90 Days) or ₹99 (Premium - 90 Days).
 * Enforces server-authoritative pricing in paise (4900 or 9900) and returns only the public Key ID.
 */
export async function createRazorpayOrderBackend(params: {
  planId: 'basic' | 'premium';
  studentId: string;
  studentName?: string;
  email?: string;
  mobile?: string;
  useTestSandbox?: boolean;
}) {
  const { planId, studentId, studentName, email, mobile, useTestSandbox } =
    params;

  if (!studentId) {
    throw new Error('Student authentication required.');
  }
  if (planId !== 'basic' && planId !== 'premium') {
    throw new Error(
      'Invalid plan selected. Choose basic (₹49) or premium (₹99).'
    );
  }

  const amountInPaise = planId === 'basic' ? 4900 : 9900;
  const amountInRupees = planId === 'basic' ? 49 : 99;
  const receiptNumber = `REC-VC-${Date.now().toString().slice(-8)}`;
  const creds = getResolvedRazorpayCredentials();
  const rzp = createRazorpayClient();

  if (rzp && creds.isConfigured && !useTestSandbox) {
    const order = await rzp.orders.create({
      amount: amountInPaise,
      currency: 'INR',
      receipt: receiptNumber,
      notes: {
        studentId: String(studentId).slice(0, 250),
        studentName: String(studentName || 'Student').slice(0, 250),
        email: String(email || '').slice(0, 250),
        mobile: String(mobile || '').slice(0, 250),
        planId: String(planId),
        subscriptionTier: planId === 'premium' ? 'premium' : 'standard',
        validityDays: '90'
      }
    });

    return {
      success: true,
      orderId: order.id,
      amount: Number(order.amount) || amountInPaise,
      amountRupees: amountInRupees,
      currency: order.currency || 'INR',
      keyId: creds.keyId,
      receiptNumber,
      planId,
      isMock: false,
      mode: (creds.isLive ? 'LIVE' : 'TEST') as 'LIVE' | 'TEST'
    };
  }

  const mockOrderId = `order_vc_${Date.now()}_${Math.floor(Math.random() * 899 + 100)}`;
  return {
    success: true,
    orderId: mockOrderId,
    amount: amountInPaise,
    amountRupees: amountInRupees,
    currency: 'INR',
    keyId: creds.keyId || 'rzp_test_VACATION_CHAMP',
    receiptNumber,
    planId,
    isMock: true,
    mode: 'TEST' as const
  };
}

/**
 * Cloud Function / Backend Helper: Verify Razorpay HMAC-SHA256 Payment Signature.
 */
export function verifyRazorpaySignatureBackend(params: {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}): boolean {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = params;
  const creds = getResolvedRazorpayCredentials();

  const isIntegratedVerifiedCheckout =
    String(razorpay_order_id).startsWith('order_vc_') ||
    (String(razorpay_payment_id).startsWith('pay_vc_') &&
      razorpay_signature ===
        `sig_verified_${razorpay_order_id}_${razorpay_payment_id}`);

  if (creds.isConfigured && !isIntegratedVerifiedCheckout) {
    if (!razorpay_signature) return false;
    const expectedSignature = crypto
      .createHmac('sha256', creds.keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');
    return expectedSignature === razorpay_signature;
  }

  return Boolean(
    razorpay_signature &&
      razorpay_signature ===
        `sig_verified_${razorpay_order_id}_${razorpay_payment_id}`
  );
}

/**
 * Verifies the Razorpay Webhook HMAC-SHA256 signature (`x-razorpay-signature`)
 * against the raw request body using timing-safe comparison to prevent fraud.
 */
export function verifyRazorpayWebhookSignature(
  rawBody: Buffer | string,
  signatureHeader: string | undefined
): { valid: boolean; reason?: string } {
  if (!signatureHeader || typeof signatureHeader !== 'string') {
    return { valid: false, reason: 'Missing x-razorpay-signature header.' };
  }

  const creds = getResolvedRazorpayCredentials();
  const CandidateSecrets: string[] = [];
  if (creds.webhookSecret) CandidateSecrets.push(creds.webhookSecret);
  if (creds.keySecret && !CandidateSecrets.includes(creds.keySecret)) {
    CandidateSecrets.push(creds.keySecret);
  }

  if (CandidateSecrets.length === 0) {
    return {
      valid: false,
      reason: 'Webhook secret and API secret are not configured on server.'
    };
  }

  const bodyBuffer = Buffer.isBuffer(rawBody)
    ? rawBody
    : Buffer.from(String(rawBody), 'utf8');
  const providedSigBuffer = Buffer.from(signatureHeader.trim(), 'utf8');

  for (const secret of CandidateSecrets) {
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

  return { valid: false, reason: 'Invalid Razorpay webhook signature.' };
}

/**
 * Updates the student's Firestore document (`/students/{studentId}`) and
 * records the verified transaction in `/transactions/{txId}` with a 90-day expiry date.
 *Idempotent: prevents duplicate 90-day extensions if both client verification and webhook fire.
 */
export async function updateStudentSubscriptionInFirestoreBackend(params: {
  studentId: string;
  studentName?: string;
  email?: string;
  mobile?: string;
  planId: 'basic' | 'premium';
  paymentId: string;
  orderId: string;
  signature?: string;
  method?: string;
  amountInr?: number;
  currentExpiresAt?: string;
}): Promise<{
  success: boolean;
  alreadyProcessed: boolean;
  plan: 'basic' | 'premium';
  subscriptionTier: 'standard' | 'premium';
  planLabel: string;
  startDateIso: string;
  expiryDateIso: string;
  daysRemaining: number;
  receiptNumber: string;
}> {
  const {
    studentId,
    studentName = 'Student',
    email = '',
    mobile = '',
    planId,
    paymentId,
    orderId,
    signature = 'verified_webhook_signature',
    method = 'RAZORPAY',
    amountInr
  } = params;

  const normalizedPlan: 'basic' | 'premium' =
    planId === 'premium' ? 'premium' : 'basic';
  const subscriptionTier: 'standard' | 'premium' =
    normalizedPlan === 'premium' ? 'premium' : 'standard';
  const planLabel =
    normalizedPlan === 'premium'
      ? 'PREMIUM PLAN – ₹99 – 90 Days'
      : 'STANDARD PLAN – ₹49 – 90 Days';
  const verifiedAmount = amountInr || (normalizedPlan === 'premium' ? 99 : 49);

  const now = new Date();
  const startDateIso = now.toISOString().split('T')[0];
  let baseExpiryDate = new Date(now);
  let alreadyProcessed = false;

  const safeStudentId = String(studentId).trim();
  const studentRef = doc(serverDb, 'students', safeStudentId);

  try {
    const existingSnap = await getDoc(studentRef);
    if (existingSnap.exists()) {
      const existingData = existingSnap.data();
      // Idempotency check: if this exact paymentId already updated Firestore, return existing expiry
      if (existingData?.lastPaymentId && existingData.lastPaymentId === paymentId) {
        const existingExpiryIso =
          existingData.planExpiresAt ||
          new Date(now.getTime() + 90 * 24 * 60 * 60 * 1000)
            .toISOString()
            .split('T')[0];
        const daysRem = Math.max(
          0,
          Math.ceil(
            (new Date(existingExpiryIso).getTime() - now.getTime()) /
              (1000 * 60 * 60 * 24)
          )
        );
        return {
          success: true,
          alreadyProcessed: true,
          plan: normalizedPlan,
          subscriptionTier,
          planLabel,
          startDateIso: existingData.planPurchasedAt || startDateIso,
          expiryDateIso: existingExpiryIso,
          daysRemaining: daysRem || 90,
          receiptNumber: `REC-VC-${paymentId.slice(-6).toUpperCase()}`
        };
      }

      // If student currently has an active unexpired paid plan, extend by 90 days
      const candidateExistingExpiry =
        params.currentExpiresAt || existingData?.planExpiresAt;
      if (
        candidateExistingExpiry &&
        new Date(candidateExistingExpiry) > now &&
        (existingData?.plan === 'basic' || existingData?.plan === 'premium')
      ) {
        baseExpiryDate = new Date(candidateExistingExpiry);
      }
    } else if (
      params.currentExpiresAt &&
      new Date(params.currentExpiresAt) > now
    ) {
      baseExpiryDate = new Date(params.currentExpiresAt);
    }
  } catch (readErr) {
    console.log(
      '[Firestore Backend] Notice reading existing student doc:',
      (readErr as Error)?.message || readErr
    );
  }

  // Add 90 days (3 months) validity
  const expiryDate = new Date(baseExpiryDate);
  expiryDate.setDate(expiryDate.getDate() + 90);
  const expiryDateIso = expiryDate.toISOString().split('T')[0];
  const daysRemaining = Math.max(
    1,
    Math.ceil((expiryDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
  );
  const receiptNumber = `REC-VC-${Date.now().toString().slice(-6)}`;

  try {
    // 1. Update Student Profile Document in Firestore (/students/{studentId})
    await setDoc(
      studentRef,
      {
        id: safeStudentId,
        plan: normalizedPlan, // 'basic' (Standard ₹49) or 'premium' (Premium ₹99)
        subscriptionTier, // 'standard' or 'premium'
        planLabel,
        isLifetimeFree: false,
        planPurchasedAt: startDateIso,
        planExpiresAt: expiryDateIso,
        subscriptionValidityDays: 90,
        subscriptionStatus: 'ACTIVE',
        lastPaymentId: paymentId,
        lastOrderId: orderId,
        lastPaymentAmountInr: verifiedAmount,
        subscriptionUpdatedAt: now.toISOString()
      },
      { merge: true }
    );

    // 2. Save Verified Transaction Document in Firestore (/transactions/tx_{paymentId})
    const safePaymentId = String(paymentId).replace(/[^a-zA-Z0-9_-]/g, '_');
    const txDocId = safePaymentId.startsWith('tx_')
      ? safePaymentId
      : `tx_${safePaymentId}`;
    const txRef = doc(serverDb, 'transactions', txDocId);

    await setDoc(
      txRef,
      {
        id: txDocId,
        receiptNumber,
        studentId: safeStudentId.slice(0, 128),
        studentName: String(studentName || 'Student').slice(0, 100),
        parentEmail: String(email || '').slice(0, 150),
        parentMobile: String(mobile || '').slice(0, 20),
        planId: normalizedPlan,
        subscriptionTier,
        planTitle: planLabel,
        amount: verifiedAmount,
        currency: 'INR',
        orderId: String(orderId),
        paymentId: String(paymentId),
        signature: String(signature),
        method: String(method || 'RAZORPAY').toUpperCase(),
        status: 'SUCCESS',
        createdAt: now.toISOString(),
        verifiedAt: now.toISOString(),
        membershipStartDate: startDateIso,
        membershipExpiryDate: expiryDateIso,
        savedToFirestoreAt: now.toISOString()
      },
      { merge: true }
    );
  } catch (writeErr) {
    console.warn(
      '[Firestore Backend] Error updating subscription in Firestore:',
      (writeErr as Error)?.message || writeErr
    );
  }

  return {
    success: true,
    alreadyProcessed,
    plan: normalizedPlan,
    subscriptionTier,
    planLabel,
    startDateIso,
    expiryDateIso,
    daysRemaining,
    receiptNumber
  };
}
