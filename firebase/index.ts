import crypto from 'crypto';
import fs from 'fs';
import Razorpay from 'razorpay';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = JSON.parse(
  fs.readFileSync(new URL('../firebase-applet-config.json', import.meta.url), 'utf8')
);

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
 * Cloud Function / Backend Handler: Create a Razorpay LIVE Order for ₹49 (Standard - 90 Days) or ₹99 (Premium - 90 Days).
 * Enforces server-authoritative pricing in paise (4900 or 9900) and returns only the public Key ID.
 * Never creates dummy or simulated orders.
 */
export async function createRazorpayOrderBackend(params: {
  planId: 'basic' | 'premium';
  studentId: string;
  studentName?: string;
  email?: string;
  mobile?: string;
  referralCode?: string;
}) {
  const { planId, studentId, studentName, email, mobile, referralCode } = params;

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

  if (!rzp || !creds.isConfigured) {
    throw new Error(
      'Razorpay LIVE API Key ID and Key Secret are not configured on the server.'
    );
  }

  // Enforce a 15-second timeout when contacting Razorpay Orders API
  const orderPromise = rzp.orders.create({
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
      validityDays: '90',
      referralCode: String(referralCode || '').slice(0, 100)
    }
  });

  const timeoutPromise = new Promise<never>((_, reject) => {
    setTimeout(
      () =>
        reject(
          new Error(
            'Razorpay order creation timed out after 15 seconds. Please check your network and try again.'
          )
        ),
      15000
    );
  });

  const order = await Promise.race([orderPromise, timeoutPromise]);

  if (!order || !order.id) {
    throw new Error('Razorpay API did not return a valid order ID.');
  }

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

/**
 * Cloud Function / Backend Helper: Verify genuine Razorpay HMAC-SHA256 Payment Signature.
 */
export function verifyRazorpaySignatureBackend(params: {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}): boolean {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = params;
  const creds = getResolvedRazorpayCredentials();

  if (!creds.isConfigured || !creds.keySecret || !razorpay_signature) {
    return false;
  }

  const expectedSignature = crypto
    .createHmac('sha256', creds.keySecret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest('hex');

  const expectedBuf = Buffer.from(expectedSignature, 'utf8');
  const providedBuf = Buffer.from(String(razorpay_signature).trim(), 'utf8');

  if (expectedBuf.length !== providedBuf.length) {
    return false;
  }

  return crypto.timingSafeEqual(expectedBuf, providedBuf);
}

/**
 * Cloud Function / Backend Handler: Create a Razorpay LIVE Dynamic UPI QR Code
 * for ₹49 (Standard - 90 Days) or ₹99 (Premium - 90 Days).
 * Uses Razorpay QR Code API (POST /v1/payments/qr_codes).
 */
export async function createRazorpayQrCodeBackend(params: {
  planId: 'basic' | 'premium';
  studentId: string;
  studentName?: string;
  email?: string;
  mobile?: string;
  referralCode?: string;
}) {
  const { planId, studentId, studentName, email, mobile, referralCode } = params;
  if (!studentId) {
    throw new Error('Student authentication required.');
  }
  if (planId !== 'basic' && planId !== 'premium') {
    throw new Error('Invalid plan selected. Choose basic (₹49) or premium (₹99).');
  }

  const amountInPaise = planId === 'basic' ? 4900 : 9900;
  const amountInRupees = planId === 'basic' ? 49 : 99;
  const planTitle =
    planId === 'premium'
      ? 'PREMIUM PLAN – ₹99 – 90 Days'
      : 'STANDARD PLAN – ₹49 – 90 Days';
  const creds = getResolvedRazorpayCredentials();

  if (!creds.isConfigured || !creds.keySecret) {
    throw new Error('Razorpay LIVE API credentials are not configured on the server.');
  }

  const authHeader = 'Basic ' + Buffer.from(`${creds.keyId}:${creds.keySecret}`).toString('base64');

  // Request Razorpay official QR code API
  const qrRes = await fetch('https://api.razorpay.com/v1/payments/qr_codes', {
    method: 'POST',
    headers: {
      Authorization: authHeader,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      type: 'upi_qr',
      name: 'Vacation Champions',
      usage: 'single_use',
      fixed_amount: true,
      payment_amount: amountInPaise,
      description: `${planTitle} • ${studentName || 'Student'}`,
      notes: {
        studentId: String(studentId).slice(0, 250),
        studentName: String(studentName || 'Student').slice(0, 250),
        email: String(email || '').slice(0, 250),
        mobile: String(mobile || '').slice(0, 250),
        planId: String(planId),
        subscriptionTier: planId === 'premium' ? 'premium' : 'standard',
        validityDays: '90',
        referralCode: String(referralCode || '').slice(0, 100)
      }
    })
  });

  const qrData = await qrRes.json().catch(() => null);

  if (!qrRes.ok || !qrData || !qrData.id) {
    const errorDesc =
      qrData?.error?.description || `Razorpay QR Code API returned HTTP ${qrRes.status}`;
    console.warn('[Razorpay QR API Error]:', qrData?.error || errorDesc);
    throw new Error(
      `${errorDesc}. Note: If your Razorpay Live account does not have UPI QR enabled yet, please activate UPI QR Codes in Razorpay Dashboard → Account & Settings → Payment Methods → UPI QR.`
    );
  }

  return {
    success: true,
    qrId: qrData.id,
    imageUrl: qrData.image_url,
    amount: amountInPaise,
    amountRupees: amountInRupees,
    currency: 'INR',
    planId,
    planTitle,
    status: qrData.status || 'active',
    createdAt: qrData.created_at || Math.floor(Date.now() / 1000),
    expiresInSeconds: 600, // 10 minutes dynamic countdown
    keyId: creds.keyId,
    referralCode: referralCode || ''
  };
}

/**
 * Cloud Function / Backend Handler: Check the live payment status of a Razorpay QR Code.
 * Queries Razorpay Payments API for payments received on this QR code.
 * Upon successful payment, automatically activates the 90-day subscription in Firestore.
 */
export async function checkRazorpayQrCodeStatusBackend(params: {
  qrId: string;
  studentId: string;
  planId?: 'basic' | 'premium';
  studentName?: string;
  email?: string;
  mobile?: string;
  referralCode?: string;
}) {
  const { qrId, studentId, studentName, email, mobile, referralCode } = params;
  const creds = getResolvedRazorpayCredentials();

  if (!creds.isConfigured || !creds.keySecret) {
    throw new Error('Razorpay LIVE API credentials are not configured on the server.');
  }

  const authHeader = 'Basic ' + Buffer.from(`${creds.keyId}:${creds.keySecret}`).toString('base64');

  // 1. Fetch QR code status from Razorpay
  const qrRes = await fetch(
    `https://api.razorpay.com/v1/payments/qr_codes/${encodeURIComponent(qrId)}`,
    {
      headers: { Authorization: authHeader }
    }
  );
  const qrData = await qrRes.json().catch(() => null);

  if (!qrRes.ok || !qrData) {
    throw new Error('Unable to query QR code status from Razorpay API.');
  }

  const resolvedPlanId: 'basic' | 'premium' =
    params.planId ||
    (qrData?.notes?.planId === 'premium' || Number(qrData?.payment_amount) >= 9900
      ? 'premium'
      : 'basic');
  const expectedAmountPaise = resolvedPlanId === 'premium' ? 9900 : 4900;
  const amountRupees = resolvedPlanId === 'premium' ? 99 : 49;

  // 2. Fetch payments received on this QR Code
  const paymentsRes = await fetch(
    `https://api.razorpay.com/v1/payments/qr_codes/${encodeURIComponent(qrId)}/payments`,
    {
      headers: { Authorization: authHeader }
    }
  );
  const paymentsData = await paymentsRes.json().catch(() => null);
  const items = Array.isArray(paymentsData?.items) ? paymentsData.items : [];

  const successfulPayment = items.find(
    (item: any) =>
      (item.status === 'captured' || item.status === 'authorized') &&
      Number(item.amount) >= expectedAmountPaise
  );

  if (successfulPayment) {
    const paymentId = successfulPayment.id;
    const orderId = qrId;
    const method = String(successfulPayment.method || 'UPI').toUpperCase();

    // Auto-update student document and transactions ledger in Firestore for 90 days!
    const activation = await updateStudentSubscriptionInFirestoreBackend({
      studentId: String(studentId),
      studentName: String(studentName || qrData?.notes?.studentName || 'Student'),
      email: String(email || qrData?.notes?.email || ''),
      mobile: String(mobile || qrData?.notes?.mobile || ''),
      planId: resolvedPlanId,
      paymentId: String(paymentId),
      orderId: String(orderId),
      signature: `qr_verified_${paymentId}`,
      method,
      amountInr: amountRupees
    });

    return {
      success: true,
      paid: true,
      status: 'PAID' as const,
      paymentId,
      orderId,
      method,
      amount: amountRupees,
      transaction: {
        id: `tx_${paymentId}`,
        receiptNumber: activation.receiptNumber,
        studentId: String(studentId),
        studentName: String(studentName || 'Student'),
        parentEmail: String(email || ''),
        parentMobile: String(mobile || ''),
        planId: resolvedPlanId,
        planTitle: activation.planLabel,
        amount: amountRupees,
        currency: 'INR',
        orderId,
        paymentId,
        signature: `qr_verified_${paymentId}`,
        method,
        status: 'SUCCESS' as const,
        createdAt: new Date().toISOString(),
        membershipStartDate: activation.startDateIso,
        membershipExpiryDate: activation.expiryDateIso
      },
      membership: {
        membershipId: `mem_${paymentId}`,
        studentId: String(studentId),
        studentName: String(studentName || 'Student'),
        planId: resolvedPlanId,
        planTitle: activation.planLabel,
        amount: amountRupees,
        startDate: activation.startDateIso,
        expiryDate: activation.expiryDateIso,
        status: 'ACTIVE' as const,
        paymentId,
        orderId,
        daysRemaining: activation.daysRemaining
      },
      referralCode: referralCode || qrData?.notes?.referralCode || ''
    };
  }

  if (qrData.status === 'closed') {
    return {
      success: true,
      paid: false,
      status: 'EXPIRED' as const,
      message: 'QR code has expired. Please click "Generate New QR Code" to proceed.'
    };
  }

  return {
    success: true,
    paid: false,
    status: 'WAITING' as const,
    message: 'Waiting for UPI payment confirmation...'
  };
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
    Math.round((expiryDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
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
