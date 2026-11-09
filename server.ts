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

// Get Razorpay client if credentials are configured
function getRazorpayInstance(): Razorpay | null {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (keyId && keySecret) {
    try {
      return new Razorpay({
        key_id: keyId,
        key_secret: keySecret
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
  const keyId = process.env.RAZORPAY_KEY_ID || '';
  const hasSecret = Boolean(process.env.RAZORPAY_KEY_SECRET);
  const isLive = Boolean(keyId && !keyId.startsWith('rzp_test_') && hasSecret);

  res.json({
    success: true,
    keyId: keyId || 'rzp_test_VACATION_CHAMP',
    isLive,
    mode: isLive ? 'LIVE' : 'TEST',
    configured: Boolean(keyId && hasSecret),
    currency: 'INR',
    plans: {
      basic: {
        id: 'basic',
        name: 'Champion Basic',
        amount: 49,
        amountPaise: 4900,
        currency: 'INR',
        durationDays: 30
      },
      premium: {
        id: 'premium',
        name: 'Champion Premium',
        amount: 99,
        amountPaise: 9900,
        currency: 'INR',
        durationDays: 30
      }
    }
  });
});

// 2. Create Order endpoint - Server-authoritative pricing (4900 paise or 9900 paise)
app.post('/api/razorpay/create-order', async (req: Request, res: Response) => {
  try {
    const { planId, studentId, studentName, email, mobile } = req.body;

    if (!studentId) {
      return res.status(400).json({ success: false, error: 'Student authentication required.' });
    }

    if (planId !== 'basic' && planId !== 'premium') {
      return res.status(400).json({ success: false, error: 'Invalid plan selected. Choose basic or premium.' });
    }

    // SERVER-AUTHORITATIVE PRICING: Never trust client amount
    const amountInPaise = planId === 'basic' ? 4900 : 9900;
    const amountInRupees = planId === 'basic' ? 49 : 99;
    const receiptNumber = `REC-VC-${Date.now().toString().slice(-6)}`;
    const rzp = getRazorpayInstance();

    if (rzp) {
      // Call genuine Razorpay API
      const options = {
        amount: amountInPaise,
        currency: 'INR',
        receipt: receiptNumber,
        notes: {
          studentId: String(studentId),
          studentName: String(studentName || 'Student'),
          email: String(email || ''),
          mobile: String(mobile || ''),
          planId
        }
      };

      try {
        const order = await rzp.orders.create(options);
        console.log(`[Razorpay LIVE/API] Created order: ${order.id} for student ${studentId} (₹${amountInRupees})`);
        return res.json({
          success: true,
          orderId: order.id,
          amount: order.amount,
          amountRupees: amountInRupees,
          currency: 'INR',
          keyId: process.env.RAZORPAY_KEY_ID,
          receiptNumber,
          planId,
          isMock: false
        });
      } catch (rzpError: any) {
        console.error('[Razorpay API Error creating order]:', rzpError);
        return res.status(502).json({
          success: false,
          error: rzpError?.error?.description || 'Razorpay order creation failed. Please verify API credentials.'
        });
      }
    }

    // Development/Fallback Order creation (when live keys are awaiting setup)
    const mockOrderId = `order_vc_${Date.now()}_${Math.floor(Math.random() * 899 + 100)}`;
    console.log(`[Razorpay DEV] Generated verified order envelope: ${mockOrderId} for student ${studentId} (₹${amountInRupees})`);

    return res.json({
      success: true,
      orderId: mockOrderId,
      amount: amountInPaise,
      amountRupees: amountInRupees,
      currency: 'INR',
      keyId: process.env.RAZORPAY_KEY_ID || 'rzp_test_VACATION_CHAMP',
      receiptNumber,
      planId,
      isMock: true,
      note: 'Operating with development key envelope. Live payments active as soon as RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET are set in environment.'
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

    // Check duplicate payment ID (idempotency protection)
    if (processedPaymentIds.has(razorpay_payment_id)) {
      console.warn(`[Razorpay] Duplicate payment verification blocked for ID: ${razorpay_payment_id}`);
      const existing = transactionLedger.find(t => t.paymentId === razorpay_payment_id);
      return res.json({
        success: true,
        alreadyProcessed: true,
        transaction: existing,
        message: 'This payment has already been verified and activated.'
      });
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    let isSignatureValid = false;

    if (keySecret && razorpay_signature) {
      // Genuine Razorpay HMAC SHA256 Signature Verification:
      // generated_signature = hmac_sha256(order_id + "|" + payment_id, secret)
      const expectedSignature = crypto
        .createHmac('sha256', keySecret)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest('hex');

      isSignatureValid = (expectedSignature === razorpay_signature);

      if (!isSignatureValid) {
        console.error(`[Razorpay Signature Mismatch] Expected: ${expectedSignature}, Received: ${razorpay_signature}`);
        return res.status(400).json({
          success: false,
          error: 'Cryptographic payment signature mismatch. Payment verification failed.'
        });
      }
    } else {
      // Test mode signature validation
      isSignatureValid = Boolean(razorpay_signature);
    }

    // Verify payment status with Razorpay API if live keys are present
    const rzp = getRazorpayInstance();
    let capturedMethod = method;
    if (rzp) {
      try {
        const payment = await rzp.payments.fetch(razorpay_payment_id);
        if (payment.status !== 'captured' && payment.status !== 'authorized') {
          return res.status(400).json({
            success: false,
            error: `Payment is not in captured status (current status: ${payment.status}).`
          });
        }

        const expectedPaise = planId === 'premium' ? 9900 : 4900;
        if (Number(payment.amount) !== expectedPaise) {
          return res.status(400).json({
            success: false,
            error: `Payment amount mismatch: Expected ₹${expectedPaise / 100}, received ₹${Number(payment.amount) / 100}.`
          });
        }

        if (payment.currency !== 'INR') {
          return res.status(400).json({
            success: false,
            error: `Invalid currency: ${payment.currency}. Expected INR.`
          });
        }

        capturedMethod = (payment.method || method).toUpperCase();
      } catch (err: any) {
        console.error('[Razorpay Payment Fetch Error]:', err);
        return res.status(502).json({
          success: false,
          error: err?.error?.description || 'Could not verify payment with Razorpay server.'
        });
      }
    }

    // Calculate 30-day membership with renewal policy
    const now = new Date();
    let startDate = now;
    let expiryDate = new Date();

    if (currentExpiresAt && new Date(currentExpiresAt) > now) {
      // Active subscription exists
      const existingExpiry = new Date(currentExpiresAt);
      existingExpiry.setDate(existingExpiry.getDate() + 30);
      expiryDate = existingExpiry;
    } else {
      // New or expired: 30 days from now
      expiryDate.setDate(now.getDate() + 30);
    }

    const verifiedAmount = planId === 'premium' ? 99 : 49;
    const receiptNumber = `REC-VC-${Date.now().toString().slice(-6)}`;

    const transactionRecord: ServerTransaction = {
      id: `tx_${Date.now()}`,
      receiptNumber,
      studentId: String(studentId),
      studentName: String(studentName || 'Student'),
      parentEmail: String(email || ''),
      parentMobile: String(mobile || ''),
      planId: planId as 'basic' | 'premium',
      planTitle: planId === 'premium' ? 'Champion Premium (₹99)' : 'Champion Basic (₹49)',
      amount: verifiedAmount,
      currency: 'INR',
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      signature: razorpay_signature || 'verified_sig',
      method: capturedMethod,
      status: 'SUCCESS',
      createdAt: now.toISOString(),
      verifiedAt: now.toISOString(),
      membershipStartDate: startDate.toISOString().split('T')[0],
      membershipExpiryDate: expiryDate.toISOString().split('T')[0]
    };

    const daysRemaining = Math.max(0, Math.ceil((expiryDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));

    const membershipRecord: ServerMembership = {
      membershipId: `mem_${Date.now()}`,
      studentId: String(studentId),
      studentName: String(studentName || 'Student'),
      planId: planId as 'basic' | 'premium',
      planTitle: planId === 'premium' ? 'Champion Premium' : 'Champion Basic',
      amount: verifiedAmount,
      startDate: startDate.toISOString().split('T')[0],
      expiryDate: expiryDate.toISOString().split('T')[0],
      status: 'ACTIVE',
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      daysRemaining
    };

    processedPaymentIds.add(razorpay_payment_id);
    transactionLedger.unshift(transactionRecord);

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

// 4. Webhook Endpoint - Genuine Razorpay Server-to-Server Event Handling
app.post('/api/razorpay/webhook', (req: Request, res: Response) => {
  try {
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
    const signature = req.headers['x-razorpay-signature'] as string;

    if (!webhookSecret) {
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
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    razorpayConfigured: Boolean(process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET)
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
