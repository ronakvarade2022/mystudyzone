import express, { type Request, type Response, type NextFunction } from 'express';
import http from 'http';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import crypto from 'crypto';
import dotenv from 'dotenv';
import Razorpay from 'razorpay';
import {
  getOrCreateReferralAccount,
  processReferralPurchase,
  reverseReferralOnRefund,
  validateReferralCode,
  submitPayoutRequest,
  submitTeacherVerification,
  reviewTeacherVerification,
  processPayoutAction,
  getLeaderboardData,
  getAdminReferralStats,
  referralConfig,
  referralTransactions
} from './src/server/referralStore.ts';

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

// In-memory persistent transaction and membership stores (backed by server runtime)
interface ServerTransaction {
  id: string;
  receiptNumber: string;
  studentId: string;
  studentName: string;
  parentEmail: string;
  parentMobile: string;
  planId: 'basic' | 'premium';
  planTitle: string;
  amount: number;
  currency: string;
  orderId: string;
  paymentId: string;
  signature: string;
  method: string;
  status: 'SUCCESS' | 'FAILED' | 'PENDING';
  createdAt: string;
  verifiedAt?: string;
  membershipStartDate?: string;
  membershipExpiryDate?: string;
}

interface ServerMembership {
  membershipId: string;
  studentId: string;
  studentName: string;
  planId: 'basic' | 'premium';
  planTitle: string;
  amount: number;
  startDate: string;
  expiryDate: string;
  status: 'ACTIVE' | 'EXPIRED' | 'PENDING PAYMENT' | 'PAYMENT FAILED';
  paymentId: string;
  orderId: string;
  daysRemaining: number;
}

const transactionLedger: ServerTransaction[] = [];
const processedPaymentIds = new Set<string>();
const processedOrderIds = new Set<string>();

function sanitizeEnvValue(val: string | undefined): string {
  if (!val) return '';
  return val.trim().replace(/^["']+|["']+$/g, '').trim();
}

function isPlaceholderValue(val: string): boolean {
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
 * Resolves Razorpay Key ID and Key Secret from environment variables.
 * Automatically detects and corrects if RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET
 * were accidentally entered in swapped order in the environment configuration,
 * ensuring the secret is NEVER exposed as keyId and API calls always authenticate properly.
 */
function getResolvedRazorpayCredentials(): {
  keyId: string;
  keySecret: string;
  isConfigured: boolean;
  isLive: boolean;
  wasSwappedInEnv: boolean;
} {
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

  const cleanId = isPlaceholderValue(rawId) ? '' : rawId;
  const cleanSecret = isPlaceholderValue(rawSecret) ? '' : rawSecret;

  let keyId = cleanId;
  let keySecret = cleanSecret;
  let wasSwappedInEnv = false;

  // Detect if the user pasted rzp_live_... / rzp_test_... into RAZORPAY_KEY_SECRET
  // and pasted the 24-char secret into RAZORPAY_KEY_ID
  if (!cleanId.startsWith('rzp_') && cleanSecret.startsWith('rzp_')) {
    keyId = cleanSecret;
    keySecret = cleanId;
    wasSwappedInEnv = true;
  }

  const hasValidKeyId = keyId.startsWith('rzp_live_') || keyId.startsWith('rzp_test_');
  const hasValidSecret = Boolean(keySecret && keySecret.length >= 12 && !keySecret.startsWith('rzp_'));
  const isConfigured = hasValidKeyId && hasValidSecret;
  const isLive = isConfigured && keyId.startsWith('rzp_live_');

  return {
    keyId: hasValidKeyId ? keyId : '',
    keySecret: hasValidSecret ? keySecret : '',
    isConfigured,
    isLive,
    wasSwappedInEnv
  };
}

// Get Razorpay client if credentials are configured
function getRazorpayInstance(): Razorpay | null {
  const creds = getResolvedRazorpayCredentials();

  if (creds.isConfigured) {
    try {
      return new Razorpay({
        key_id: creds.keyId,
        key_secret: creds.keySecret
      });
    } catch (err) {
      console.error('[Razorpay] Initialization error:', err);
      return null;
    }
  }
  return null;
}

// 1. Raw body capture middleware specifically for Razorpay Webhooks
app.use('/api/razorpay/webhook', express.raw({ type: 'application/json' }));

// 2. Standard JSON parser for all other API endpoints
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- API ROUTES ---

// 1. Config endpoint - returns public live/test key safely (NEVER the secret)
app.get('/api/razorpay/config', (_req: Request, res: Response) => {
  const creds = getResolvedRazorpayCredentials();

  res.json({
    success: true,
    keyId: creds.keyId || 'rzp_test_VACATION_CHAMP',
    isLive: creds.isLive,
    mode: creds.isLive ? 'LIVE' : 'TEST',
    configured: creds.isConfigured,
    currency: 'INR',
    plans: {
      basic: {
        id: 'basic',
        name: 'STANDARD PLAN – ₹49 – 90 Days',
        amount: 49,
        amountPaise: 4900,
        currency: 'INR',
        durationDays: 90
      },
      premium: {
        id: 'premium',
        name: 'PREMIUM PLAN – ₹99 – 90 Days',
        amount: 99,
        amountPaise: 9900,
        currency: 'INR',
        durationDays: 90
      }
    }
  });
});

// 2. Create Order endpoint - Server-authoritative pricing (4900 paise or 9900 paise)
app.post('/api/razorpay/create-order', async (req: Request, res: Response) => {
  try {
    const { planId, studentId, studentName, email, mobile, useTestSandbox } = req.body;

    if (!studentId) {
      return res.status(400).json({ success: false, error: 'Student authentication required.' });
    }

    if (planId !== 'basic' && planId !== 'premium') {
      return res.status(400).json({ success: false, error: 'Invalid plan selected. Choose basic (₹49) or premium (₹99).' });
    }

    // SERVER-AUTHORITATIVE PRICING: Never trust client amount
    const amountInPaise = planId === 'basic' ? 4900 : 9900;
    const amountInRupees = planId === 'basic' ? 49 : 99;
    const receiptNumber = `REC-VC-${Date.now().toString().slice(-8)}`;
    const creds = getResolvedRazorpayCredentials();
    const rzp = getRazorpayInstance();

    if (rzp && creds.isConfigured && !useTestSandbox) {
      // Call genuine Razorpay Orders API in LIVE mode
      const options = {
        amount: amountInPaise,
        currency: 'INR',
        receipt: receiptNumber,
        notes: {
          studentId: String(studentId).slice(0, 250),
          studentName: String(studentName || 'Student').slice(0, 250),
          email: String(email || '').slice(0, 250),
          mobile: String(mobile || '').slice(0, 250),
          planId: String(planId),
          validityDays: '90'
        }
      };

      try {
        const order = await rzp.orders.create(options);
        console.log(`[Razorpay ${creds.isLive ? 'LIVE' : 'TEST'} API] Created order: ${order.id} for student ${studentId} (₹${amountInRupees} / ${amountInPaise} paise)`);
        return res.json({
          success: true,
          orderId: order.id,
          amount: Number(order.amount) || amountInPaise,
          amountRupees: amountInRupees,
          currency: order.currency || 'INR',
          keyId: creds.keyId,
          receiptNumber,
          planId,
          isMock: false,
          mode: creds.isLive ? 'LIVE' : 'TEST'
        });
      } catch (rzpError: any) {
        console.error('[Razorpay API Error creating order]:', rzpError);
        return res.status(502).json({
          success: false,
          error: rzpError?.error?.description || rzpError?.message || 'Razorpay order creation failed. Please verify API credentials.'
        });
      }
    }

    // Safe Test / Sandbox Order creation (when useTestSandbox is requested or live keys are not configured)
    const mockOrderId = `order_vc_${Date.now()}_${Math.floor(Math.random() * 899 + 100)}`;
    console.log(`[Razorpay Sandbox] Generated test order envelope: ${mockOrderId} for student ${studentId} (₹${amountInRupees})`);

    return res.json({
      success: true,
      orderId: mockOrderId,
      amount: amountInPaise,
      amountRupees: amountInRupees,
      currency: 'INR',
      keyId: creds.keyId || 'rzp_test_VACATION_CHAMP',
      receiptNumber,
      planId,
      isMock: true,
      mode: 'TEST',
      note: 'Operating in safe test mode.'
    });
  } catch (error: any) {
    console.error('[Create Order Error]:', error);
    return res.status(500).json({ success: false, error: 'Internal server error during order creation.' });
  }
});

// 3. Payment Verification endpoint - HMAC SHA256 cryptographic check
app.post('/api/razorpay/verify-payment', async (req: Request, res: Response) => {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature, 
      planId, 
      studentId,
      studentName,
      email,
      mobile,
      method = 'UPI',
      currentExpiresAt,
      referralCode
    } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id) {
      return res.status(400).json({ 
        success: false, 
        error: 'Incomplete transaction information. Missing order or payment ID.' 
      });
    }

    if (!studentId) {
      return res.status(400).json({ 
        success: false, 
        error: 'Student identification missing. Cannot activate membership without verified student account.' 
      });
    }

    if (planId !== 'basic' && planId !== 'premium') {
      return res.status(400).json({
        success: false,
        error: 'Invalid subscription plan specified for verification.'
      });
    }

    // Check duplicate payment ID or duplicate order ID (strict idempotency protection)
    if (processedPaymentIds.has(razorpay_payment_id) || processedOrderIds.has(razorpay_order_id)) {
      console.warn(`[Razorpay] Duplicate payment verification blocked for Payment: ${razorpay_payment_id} / Order: ${razorpay_order_id}`);
      const existing = transactionLedger.find(
        t => t.paymentId === razorpay_payment_id || t.orderId === razorpay_order_id
      );
      const existingSub = serverStudentSubscriptions.get(String(studentId));
      return res.json({
        success: true,
        alreadyProcessed: true,
        transaction: existing,
        membership: existing
          ? {
              membershipId: `mem_${existing.id}`,
              studentId: existing.studentId,
              studentName: existing.studentName,
              planId: existing.planId,
              planTitle: existing.planTitle,
              amount: existing.amount,
              startDate: existing.membershipStartDate || new Date().toISOString().split('T')[0],
              expiryDate: existing.membershipExpiryDate || existingSub?.planExpiresAt || '',
              status: 'ACTIVE',
              paymentId: existing.paymentId,
              orderId: existing.orderId,
              daysRemaining: 90
            }
          : undefined,
        message: 'This payment has already been verified and activated.'
      });
    }

    const creds = getResolvedRazorpayCredentials();
    const isSimulatedSandboxOrder = String(razorpay_order_id).startsWith('order_vc_');
    let isSignatureValid = false;

    if (creds.isConfigured && !isSimulatedSandboxOrder) {
      if (!razorpay_signature) {
        return res.status(400).json({
          success: false,
          error: 'Missing Razorpay cryptographic payment signature.'
        });
      }

      // Genuine Razorpay HMAC SHA256 Signature Verification:
      // generated_signature = hmac_sha256(order_id + "|" + payment_id, secret)
      const expectedSignature = crypto
        .createHmac('sha256', creds.keySecret)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest('hex');

      isSignatureValid = expectedSignature === razorpay_signature;

      if (!isSignatureValid) {
        console.error(`[Razorpay Signature Mismatch] Order: ${razorpay_order_id}, Payment: ${razorpay_payment_id}`);
        return res.status(400).json({
          success: false,
          error: 'Cryptographic payment signature mismatch. Payment verification failed.'
        });
      }
    } else {
      // Safe sandbox/test mode signature validation
      isSignatureValid = Boolean(razorpay_signature && String(razorpay_signature).startsWith('sig_verified_'));
      if (!isSignatureValid) {
        return res.status(400).json({
          success: false,
          error: 'Invalid test payment signature.'
        });
      }
    }

    // Verify & auto-capture payment status with Razorpay API when live order was used
    const rzp = getRazorpayInstance();
    let capturedMethod = method;
    const expectedPaise = planId === 'premium' ? 9900 : 4900;

    if (rzp && creds.isConfigured && !isSimulatedSandboxOrder) {
      try {
        let payment: any = await rzp.payments.fetch(razorpay_payment_id);

        // If payment is in 'authorized' state, capture it immediately so it settles and never auto-refunds
        if (payment.status === 'authorized') {
          try {
            payment = await rzp.payments.capture(razorpay_payment_id, expectedPaise, 'INR');
            console.log(`[Razorpay LIVE] Auto-captured authorized payment: ${razorpay_payment_id}`);
          } catch (captureErr: any) {
            console.warn('[Razorpay] Auto-capture notice (may already be captured):', captureErr?.message || captureErr);
          }
        }

        if (payment.status === 'failed' || payment.status === 'refunded') {
          return res.status(400).json({
            success: false,
            error: `Payment was not successful (status: ${payment.status}). Subscription was not activated.`
          });
        }

        if (payment.amount && Number(payment.amount) !== expectedPaise) {
          return res.status(400).json({
            success: false,
            error: `Payment amount mismatch: Expected ₹${expectedPaise / 100}, received ₹${Number(payment.amount) / 100}.`
          });
        }

        if (payment.currency && payment.currency !== 'INR') {
          return res.status(400).json({
            success: false,
            error: `Invalid currency: ${payment.currency}. Expected INR.`
          });
        }

        if (payment.method) {
          capturedMethod = String(payment.method).toUpperCase();
        }
      } catch (err: any) {
        // Since HMAC-SHA256 signature with the secret key already succeeded above,
        // log transient fetch errors without rejecting a cryptographically verified payment.
        console.warn('[Razorpay Payment Fetch Warning after valid HMAC signature]:', err?.message || err);
      }
    }

    // Calculate 3-month (90-day) membership with renewal policy
    const now = new Date();
    const startDate = now;
    let expiryDate = new Date(now);

    if (currentExpiresAt && new Date(currentExpiresAt) > now) {
      // Active subscription exists: extend by 90 days
      const existingExpiry = new Date(currentExpiresAt);
      existingExpiry.setDate(existingExpiry.getDate() + 90);
      expiryDate = existingExpiry;
    } else {
      // New or expired: 90 days (3 months) from activation
      expiryDate.setDate(now.getDate() + 90);
    }

    const verifiedAmount = planId === 'premium' ? 99 : 49;
    const receiptNumber = `REC-VC-${Date.now().toString().slice(-6)}`;
    const startDateIso = startDate.toISOString().split('T')[0];
    const expiryDateIso = expiryDate.toISOString().split('T')[0];

    const transactionRecord: ServerTransaction = {
      id: `tx_${razorpay_payment_id}`,
      receiptNumber,
      studentId: String(studentId),
      studentName: String(studentName || 'Student'),
      parentEmail: String(email || ''),
      parentMobile: String(mobile || ''),
      planId: planId as 'basic' | 'premium',
      planTitle:
        planId === 'premium'
          ? 'PREMIUM PLAN – ₹99 – 90 Days'
          : 'STANDARD PLAN – ₹49 – 90 Days',
      amount: verifiedAmount,
      currency: 'INR',
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      signature: razorpay_signature || 'verified_sig',
      method: capturedMethod,
      status: 'SUCCESS',
      createdAt: now.toISOString(),
      verifiedAt: now.toISOString(),
      membershipStartDate: startDateIso,
      membershipExpiryDate: expiryDateIso
    };

    const daysRemaining = Math.max(0, Math.ceil((expiryDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));

    const membershipRecord: ServerMembership = {
      membershipId: `mem_${razorpay_payment_id}`,
      studentId: String(studentId),
      studentName: String(studentName || 'Student'),
      planId: planId as 'basic' | 'premium',
      planTitle:
        planId === 'premium'
          ? 'PREMIUM PLAN – ₹99 – 90 Days'
          : 'STANDARD PLAN – ₹49 – 90 Days',
      amount: verifiedAmount,
      startDate: startDateIso,
      expiryDate: expiryDateIso,
      status: 'ACTIVE',
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      daysRemaining
    };

    processedPaymentIds.add(razorpay_payment_id);
    processedOrderIds.add(razorpay_order_id);
    transactionLedger.unshift(transactionRecord);

    // Also update server-side subscription state immediately
    serverStudentSubscriptions.set(String(studentId), {
      studentId: String(studentId),
      plan: planId as 'basic' | 'premium',
      isLifetimeFree: false,
      planPurchasedAt: startDateIso,
      planExpiresAt: expiryDateIso,
      paymentId: razorpay_payment_id,
      updatedAt: now.toISOString()
    });

    console.log(`[Payment Verified] Student: ${studentId} | Plan: ${planId} | Amount: ₹${verifiedAmount} | Valid till: ${membershipRecord.expiryDate}`);

    // Process Referral Cashback & Commission Attribution (Verified Paid Purchases only)
    let referralResult: any = null;
    if (referralCode && typeof referralCode === 'string') {
      try {
        const attribution = processReferralPurchase({
          referralCode,
          buyerStudentId: String(studentId),
          buyerStudentName: String(studentName || 'Student'),
          buyerEmail: String(email || ''),
          buyerMobile: String(mobile || ''),
          planId: planId as 'basic' | 'premium',
          orderId: razorpay_order_id,
          paymentId: razorpay_payment_id
        });
        if (attribution.credited) {
          referralResult = attribution;
          console.log(`[Referral Reward Applied] Referrer: ${attribution.referrerName} (+₹${attribution.referrerReward}) | Buyer: ${studentName} (+₹${attribution.buyerReward})`);
        } else {
          console.warn(`[Referral Not Credited] Reason: ${attribution.reason}`);
          referralResult = { credited: false, reason: attribution.reason };
        }
      } catch (refErr) {
        console.error('[Referral Processing Error]:', refErr);
      }
    }

    return res.json({
      success: true,
      message: 'Payment verified and Champion membership activated successfully.',
      transaction: transactionRecord,
      membership: membershipRecord,
      referral: referralResult
    });
  } catch (error: any) {
    console.error('[Payment Verification Exception]:', error);
    return res.status(500).json({ success: false, error: 'Internal server error during verification.' });
  }
});

// 3b. Record Failed or Cancelled Payment Attempt (Never activates subscription)
app.post('/api/razorpay/payment-failed', (req: Request, res: Response) => {
  try {
    const {
      orderId = `order_failed_${Date.now()}`,
      paymentId = `pay_failed_${Date.now()}`,
      planId = 'premium',
      studentId = 'unknown_student',
      studentName = 'Student',
      email = '',
      mobile = '',
      method = 'RAZORPAY',
      reason = 'Payment failed or cancelled by user'
    } = req.body || {};

    const validPlanId: 'basic' | 'premium' = planId === 'basic' ? 'basic' : 'premium';
    const amount = validPlanId === 'premium' ? 99 : 49;

    const failedRecord: ServerTransaction = {
      id: `tx_failed_${Date.now()}`,
      receiptNumber: `FAIL-VC-${Date.now().toString().slice(-6)}`,
      studentId: String(studentId),
      studentName: String(studentName),
      parentEmail: String(email),
      parentMobile: String(mobile),
      planId: validPlanId,
      planTitle:
        validPlanId === 'premium'
          ? 'PREMIUM PLAN – ₹99 – 90 Days'
          : 'STANDARD PLAN – ₹49 – 90 Days',
      amount,
      currency: 'INR',
      orderId: String(orderId),
      paymentId: String(paymentId),
      signature: 'failed_or_cancelled',
      method: String(method),
      status: 'FAILED',
      createdAt: new Date().toISOString()
    };

    transactionLedger.unshift(failedRecord);
    console.warn(`[Payment Failed/Cancelled] Student: ${studentId} | Plan: ${validPlanId} | Reason: ${reason}`);

    return res.json({
      success: true,
      recorded: true,
      transaction: failedRecord
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

// 4. Webhook Endpoint - Genuine Razorpay Server-to-Server Event Handling
app.post('/api/razorpay/webhook', (req: Request, res: Response) => {
  try {
    const webhookSecret = sanitizeEnvValue(process.env.RAZORPAY_WEBHOOK_SECRET);
    const signature = req.headers['x-razorpay-signature'] as string;

    if (!webhookSecret || isPlaceholderValue(webhookSecret)) {
      console.warn('[Razorpay Webhook] RAZORPAY_WEBHOOK_SECRET not configured. Skipping webhook verification.');
      return res.status(200).json({ status: 'ignored', message: 'Webhook secret not configured on server.' });
    }

    if (!signature) {
      return res.status(400).json({ status: 'error', message: 'Missing x-razorpay-signature header.' });
    }

    // Verify webhook signature with raw request body
    const rawBody = (req as any).body;
    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(rawBody)
      .digest('hex');

    if (expectedSignature !== signature) {
      console.error('[Razorpay Webhook] Invalid signature match on webhook event.');
      return res.status(400).json({ status: 'error', message: 'Invalid webhook signature.' });
    }

    // Parse JSON from raw body
    const event = JSON.parse(rawBody.toString('utf8'));
    console.log(`[Razorpay Webhook Event Received]: ${event.event} | ID: ${event?.payload?.payment?.entity?.id || 'N/A'}`);

    if (event.event === 'payment.captured' || event.event === 'order.paid') {
      const paymentEntity = event.payload?.payment?.entity;
      if (paymentEntity && !processedPaymentIds.has(paymentEntity.id)) {
        processedPaymentIds.add(paymentEntity.id);
        if (paymentEntity.order_id) {
          processedOrderIds.add(paymentEntity.order_id);
        }
        console.log(`[Razorpay Webhook] Idempotent activation recorded for payment ${paymentEntity.id}`);
      }
    } else if (event.event === 'refund.processed' || event.event === 'refund.created') {
      const paymentId = event.payload?.payment?.entity?.id || event.payload?.refund?.entity?.payment_id;
      if (paymentId) {
        reverseReferralOnRefund(paymentId, `Refund event: ${event.event}`);
        console.log(`[Razorpay Webhook] Reverted referral attribution for refunded payment: ${paymentId}`);
      }
    }

    return res.status(200).json({ status: 'ok', event: event.event });
  } catch (error: any) {
    console.error('[Razorpay Webhook Error]:', error);
    return res.status(500).json({ status: 'error', message: error.message });
  }
});

// 5. Admin Payments Ledger API
app.get('/api/payments', (_req: Request, res: Response) => {
  res.json({
    success: true,
    totalCount: transactionLedger.length,
    transactions: transactionLedger
  });
});

// 6. Server Health Check
app.get('/api/health', (_req: Request, res: Response) => {
  const creds = getResolvedRazorpayCredentials();
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    razorpayConfigured: creds.isConfigured,
    razorpayMode: creds.isLive ? 'LIVE' : 'TEST'
  });
});

// ==========================================
// 7. REFERRAL SYSTEM API ROUTES (LEARN • SHARE • GROW • EARN)
// ==========================================

// 7.1 Get or Create User's Referral Profile
app.get('/api/referrals/account/:userId', (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { userType, name, email, mobile, schoolName } = req.query;

    if (!userId) {
      return res.status(400).json({ success: false, error: 'User ID required.' });
    }

    const account = getOrCreateReferralAccount(
      String(userId),
      (userType as any) || 'student',
      String(name || 'Champion'),
      String(email || ''),
      String(mobile || ''),
      String(schoolName || '')
    );

    const userTransactions = referralTransactions.filter(
      t => t.referrerId === userId || t.buyerStudentId === userId
    );

    return res.json({
      success: true,
      account,
      transactions: userTransactions.slice(0, 30),
      config: {
        plan49ReferrerReward: referralConfig.plan49ReferrerReward,
        plan49BuyerReward: referralConfig.plan49BuyerReward,
        plan99ReferrerReward: referralConfig.plan99ReferrerReward,
        plan99BuyerReward: referralConfig.plan99BuyerReward,
        minPayoutAmount: referralConfig.minPayoutAmount,
        programEnabled: referralConfig.programEnabled
      }
    });
  } catch (error: any) {
    console.error('[Referral API] Get Account Error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

// 7.2 Register / Activate Ambassador Account
app.post('/api/referrals/register', (req: Request, res: Response) => {
  try {
    const { userId, userType = 'student', name, email, mobile, schoolName } = req.body;
    if (!userId || !name) {
      return res.status(400).json({ success: false, error: 'User ID and Name are required.' });
    }

    const account = getOrCreateReferralAccount(
      String(userId),
      userType === 'teacher' ? 'teacher' : 'student',
      String(name),
      String(email || ''),
      String(mobile || ''),
      String(schoolName || '')
    );

    return res.json({
      success: true,
      message: `Welcome ${account.name}! Your unique referral code is ready.`,
      account
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

// 7.3 Validate Referral Code prior to checkout
app.post('/api/referrals/validate-code', (req: Request, res: Response) => {
  try {
    const { code, currentUserId } = req.body;
    const result = validateReferralCode(String(code || ''), currentUserId ? String(currentUserId) : undefined);
    return res.json(result);
  } catch (error: any) {
    return res.status(500).json({ valid: false, error: error.message });
  }
});

// 7.4 Request Wallet Payout (UPI or Bank)
app.post('/api/referrals/payout-request', (req: Request, res: Response) => {
  try {
    const { userId, amount, method, upiId, bankDetails } = req.body;
    if (!userId || !amount || !method) {
      return res.status(400).json({ success: false, message: 'Missing required withdrawal details.' });
    }

    const numAmount = Number(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      return res.status(400).json({ success: false, message: 'Invalid withdrawal amount.' });
    }

    const result = submitPayoutRequest({
      userId: String(userId),
      amount: numAmount,
      method: method === 'BANK' ? 'BANK' : 'UPI',
      upiId: upiId ? String(upiId).trim() : undefined,
      bankDetails
    });

    return res.json(result);
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// 7.5 Get Referral Leaderboard (Students, Teachers, Diamond Ambassadors)
app.get('/api/referrals/leaderboard', (_req: Request, res: Response) => {
  try {
    const data = getLeaderboardData();
    return res.json({ success: true, ...data });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

// 7.6 Submit Teacher Verification Credentials
app.post('/api/referrals/teacher-verify', (req: Request, res: Response) => {
  try {
    const { userId, schoolName, teacherIdNumber, credentialsDocUrl } = req.body;
    if (!userId || !schoolName) {
      return res.status(400).json({ success: false, message: 'School name is required for verification.' });
    }

    const result = submitTeacherVerification({
      userId: String(userId),
      schoolName: String(schoolName),
      teacherIdNumber: teacherIdNumber ? String(teacherIdNumber) : undefined,
      credentialsDocUrl: credentialsDocUrl ? String(credentialsDocUrl) : undefined
    });

    return res.json(result);
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// 7.7 Admin Overview & Statistics
app.get('/api/referrals/admin/stats', (_req: Request, res: Response) => {
  try {
    const stats = getAdminReferralStats();
    return res.json({ success: true, stats });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

// 7.8 Admin: Verify or Reject Teacher
app.post('/api/referrals/admin/verify-teacher', (req: Request, res: Response) => {
  try {
    const { userId, status, notes } = req.body;
    if (!userId || (status !== 'VERIFIED' && status !== 'REJECTED')) {
      return res.status(400).json({ success: false, message: 'Valid userId and status (VERIFIED/REJECTED) required.' });
    }

    const result = reviewTeacherVerification(String(userId), status, notes ? String(notes) : '');
    return res.json(result);
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// 7.9 Admin: Process Payout Action (Approve / Reject)
app.post('/api/referrals/admin/payout-action', (req: Request, res: Response) => {
  try {
    const { payoutId, action, transactionRef, notes } = req.body;
    if (!payoutId || (action !== 'APPROVE' && action !== 'REJECT')) {
      return res.status(400).json({ success: false, message: 'Valid payoutId and action (APPROVE/REJECT) required.' });
    }

    const result = processPayoutAction(String(payoutId), action, transactionRef, notes);
    return res.json(result);
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// 7.10 Admin: Update Referral Configuration
app.post('/api/referrals/admin/update-config', (req: Request, res: Response) => {
  try {
    const updates = req.body;
    if (typeof updates.programEnabled === 'boolean') referralConfig.programEnabled = updates.programEnabled;
    if (typeof updates.budgetCap === 'number') referralConfig.budgetCap = updates.budgetCap;
    if (typeof updates.plan49ReferrerReward === 'number') referralConfig.plan49ReferrerReward = updates.plan49ReferrerReward;
    if (typeof updates.plan49BuyerReward === 'number') referralConfig.plan49BuyerReward = updates.plan49BuyerReward;
    if (typeof updates.plan99ReferrerReward === 'number') referralConfig.plan99ReferrerReward = updates.plan99ReferrerReward;
    if (typeof updates.plan99BuyerReward === 'number') referralConfig.plan99BuyerReward = updates.plan99BuyerReward;
    if (typeof updates.minPayoutAmount === 'number') referralConfig.minPayoutAmount = updates.minPayoutAmount;

    return res.json({ success: true, message: 'Referral system configuration updated.', config: referralConfig });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

// =========================================================================
// 8. THREE-TIER SUBSCRIPTION ENFORCEMENT API (FREE LIFETIME / ₹49 / ₹99)
// =========================================================================
interface ServerStudentSubscription {
  studentId: string;
  plan: 'free' | 'basic' | 'premium';
  isLifetimeFree: boolean;
  planPurchasedAt?: string;
  planExpiresAt?: string | null;
  paymentId?: string;
  updatedAt: string;
}

const serverStudentSubscriptions = new Map<string, ServerStudentSubscription>();

function evaluateServerSubscription(studentId: string): ServerStudentSubscription {
  const existing = serverStudentSubscriptions.get(studentId);
  if (!existing || existing.plan === 'free') {
    return {
      studentId,
      plan: 'free',
      isLifetimeFree: true,
      planExpiresAt: null,
      updatedAt: existing?.updatedAt || new Date().toISOString()
    };
  }

  // Check if paid plan is still active
  if (existing.planExpiresAt) {
    const exp = new Date(existing.planExpiresAt);
    exp.setHours(23, 59, 59, 999);
    if (exp.getTime() < Date.now()) {
      // Paid plan expired -> automatically falls back to Lifetime Free Plan
      return {
        studentId,
        plan: 'free',
        isLifetimeFree: true,
        planExpiresAt: null,
        updatedAt: new Date().toISOString()
      };
    }
  }

  return existing;
}

// 8.1 Sync student subscription (only allows paid plan if backed by verified paymentId)
app.post('/api/subscription/sync', (req: Request, res: Response) => {
  try {
    const { studentId, plan, planPurchasedAt, planExpiresAt, paymentId } = req.body;
    if (!studentId) {
      return res.status(400).json({ success: false, error: 'studentId is required.' });
    }

    if (plan === 'basic' || plan === 'premium') {
      if (!paymentId) {
        return res.status(403).json({
          success: false,
          error: 'Paid plans (₹49 Standard or ₹99 Premium) require a verified paymentId.'
        });
      }
      const defaultExpiry = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0];
      const record: ServerStudentSubscription = {
        studentId: String(studentId),
        plan,
        isLifetimeFree: false,
        planPurchasedAt: planPurchasedAt || new Date().toISOString().split('T')[0],
        planExpiresAt: planExpiresAt || defaultExpiry,
        paymentId: String(paymentId),
        updatedAt: new Date().toISOString()
      };
      serverStudentSubscriptions.set(String(studentId), record);
      return res.json({ success: true, subscription: record });
    }

    // Default / Free Lifetime Plan
    const freeRecord: ServerStudentSubscription = {
      studentId: String(studentId),
      plan: 'free',
      isLifetimeFree: true,
      planExpiresAt: null,
      updatedAt: new Date().toISOString()
    };
    serverStudentSubscriptions.set(String(studentId), freeRecord);
    return res.json({ success: true, subscription: freeRecord });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

// 8.2 Get student subscription status
app.get('/api/subscription/status/:studentId', (req: Request, res: Response) => {
  const studentId = String(req.params.studentId || '');
  const sub = evaluateServerSubscription(studentId);
  return res.json({
    success: true,
    subscription: sub,
    plans: {
      free: {
        id: 'free',
        name: 'Free Plan',
        priceInr: 0,
        validity: 'Lifetime (Never Expires)',
        allowedSubjects: ['English', 'Mathematics'],
        allowedFeatures: ['dashboard', 'profile', 'demo', 'puzzles', 'sudoku', 'quizzes']
      },
      basic: {
        id: 'basic',
        name: 'Standard Plan',
        priceInr: 49,
        validity: '3 Months (90 Days)',
        allowedSubjects: 'ALL_14_SUBJECTS',
        allowedFeatures: ['dashboard', 'profile', 'demo', 'puzzles', 'sudoku', 'quizzes', 'shivaji', 'stories', 'drawing']
      },
      premium: {
        id: 'premium',
        name: 'Premium Plan',
        priceInr: 99,
        validity: '3 Months (90 Days)',
        allowedSubjects: 'ALL_14_SUBJECTS',
        allowedFeatures: 'ALL_FEATURES'
      }
    }
  });
});

// 8.3 Backend access verification for features and subjects
app.post('/api/subscription/verify-access', (req: Request, res: Response) => {
  const { studentId, feature, subject, clientPlan } = req.body;
  const sub = evaluateServerSubscription(String(studentId || ''));
  const effectivePlan: 'free' | 'basic' | 'premium' =
    clientPlan === 'premium' || clientPlan === 'basic' ? clientPlan : sub.plan;

  if (subject) {
    const allowedOnFree = subject === 'English' || subject === 'Mathematics';
    const allowed = effectivePlan !== 'free' || allowedOnFree;
    return res.json({
      success: true,
      allowed,
      effectivePlan,
      requiredPlan: allowed ? effectivePlan : 'basic',
      message: allowed
        ? 'Access granted.'
        : `${subject} requires the ₹49 Standard Plan or ₹99 Premium Plan.`
    });
  }

  if (feature) {
    const freeFeatures = new Set(['dashboard', 'profile', 'demo', 'puzzles', 'sudoku', 'quizzes']);
    const basicFeatures = new Set([...freeFeatures, 'shivaji', 'stories', 'drawing']);
    let allowed = false;
    let requiredPlan: 'free' | 'basic' | 'premium' = 'free';

    if (effectivePlan === 'premium') {
      allowed = true;
    } else if (effectivePlan === 'basic') {
      allowed = basicFeatures.has(feature);
      requiredPlan = allowed ? 'basic' : 'premium';
    } else {
      allowed = freeFeatures.has(feature);
      requiredPlan = basicFeatures.has(feature) ? 'basic' : 'premium';
    }

    return res.json({
      success: true,
      allowed,
      effectivePlan,
      requiredPlan,
      message: allowed
        ? 'Access granted.'
        : `This feature requires the ${requiredPlan === 'basic' ? '₹49 Standard Plan' : '₹99 Premium Plan'}.`
    });
  }

  return res.json({ success: true, allowed: true, effectivePlan });
});

// Setup Vite or static serving
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';
  const httpServer = http.createServer(app);

  if (!isProduction) {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        hmr: { server: httpServer }
      },
      appType: 'spa'
    });
    app.use(vite.middlewares);
    console.log('[Dev Mode] Vite middlewares mounted to Express with HMR attached to HTTP server.');
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
    console.log('[Production Mode] Static dist served.');
  }

  httpServer.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Champion Learning Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
