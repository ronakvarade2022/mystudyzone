import express from 'express';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const FIREBASE_PROJECT_ID = 'gen-lang-client-0860728359';
const FIRESTORE_DATABASE_ID =
  'ai-studio-vacationchampion-cedf2d74-0d25-42f6-8aaa-1a9e2fb4514d';

const processedPaymentIds = new Set();
const processedOrderIds = new Set();
const transactionLedger = [];

// Middleware to capture raw body for HMAC signature verification on webhooks
app.use(
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    }
  })
);
app.use(express.urlencoded({ extended: true }));

// Global CORS & Response Headers Middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, X-Razorpay-Signature'
  );
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');

  if (req.method === 'OPTIONS') {
    return res.status(200).json({ ok: true });
  }
  next();
});

function jsonResponse(res, statusCode, payload) {
  return res.status(statusCode).json(payload);
}

function sanitizeEnvValue(val) {
  if (!val) return '';
  return String(val).trim().replace(/^["']+|["']+$/g, '').trim();
}

function isPlaceholderValue(val) {
  if (!val) return true;
  const upper = String(val).toUpperCase();
  return (
    upper.includes('YOUR_') ||
    upper.includes('MY_') ||
    upper.includes('REPLACE_') ||
    val === 'rzp_test_VACATION_CHAMP'
  );
}

function getResolvedRazorpayCredentials() {
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
  const rawWebhookSecret = sanitizeEnvValue(
    process.env.RAZORPAY_WEBHOOK_SECRET
  );

  const cleanId = isPlaceholderValue(rawId) ? '' : rawId;
  const cleanSecret = isPlaceholderValue(rawSecret) ? '' : rawSecret;
  const cleanWebhookSecret = isPlaceholderValue(rawWebhookSecret)
    ? ''
    : rawWebhookSecret;

  let keyId = cleanId;
  let keySecret = cleanSecret;

  // Auto-correct if Key ID and Key Secret were entered in swapped order
  if (!cleanId.startsWith('rzp_') && cleanSecret.startsWith('rzp_')) {
    keyId = cleanSecret;
    keySecret = cleanId;
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
    isLive
  };
}

function toFirestoreValue(val) {
  if (val === null || val === undefined) return { nullValue: null };
  if (typeof val === 'boolean') return { booleanValue: val };
  if (typeof val === 'number') {
    return Number.isInteger(val)
      ? { integerValue: String(val) }
      : { doubleValue: val };
  }
  return { stringValue: String(val) };
}

async function patchFirestoreDocument(collectionName, docId, fieldsObj) {
  try {
    const safeDocId = encodeURIComponent(String(docId).trim());
    const fieldKeys = Object.keys(fieldsObj);
    const updateMask = fieldKeys
      .map((k) => `updateMask.fieldPaths=${encodeURIComponent(k)}`)
      .join('&');
    const url = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/${FIRESTORE_DATABASE_ID}/documents/${collectionName}/${safeDocId}?${updateMask}`;

    const firestoreFields = {};
    for (const [k, v] of Object.entries(fieldsObj)) {
      firestoreFields[k] = toFirestoreValue(v);
    }

    await fetch(url, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fields: firestoreFields })
    });
  } catch (err) {
    console.warn(
      `[Firestore Sync Notice] (${collectionName}/${docId}):`,
      err?.message || err
    );
  }
}

async function getFirestoreDocument(collectionName, docId) {
  try {
    const safeDocId = encodeURIComponent(String(docId).trim());
    const url = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/${FIRESTORE_DATABASE_ID}/documents/${collectionName}/${safeDocId}`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const docData = await res.json();
    if (!docData || !docData.fields) return null;
    const parsed = {};
    for (const [k, v] of Object.entries(docData.fields)) {
      if ('stringValue' in v) parsed[k] = v.stringValue;
      else if ('integerValue' in v) parsed[k] = Number(v.integerValue);
      else if ('doubleValue' in v) parsed[k] = Number(v.doubleValue);
      else if ('booleanValue' in v) parsed[k] = Boolean(v.booleanValue);
      else if ('nullValue' in v) parsed[k] = null;
    }
    return parsed;
  } catch {
    return null;
  }
}

async function verifyAndCaptureRazorpayPayment(
  creds,
  paymentId,
  expectedAmountPaise
) {
  const authHeader =
    'Basic ' +
    Buffer.from(`${creds.keyId}:${creds.keySecret}`).toString('base64');

  const res = await fetch(
    `https://api.razorpay.com/v1/payments/${encodeURIComponent(paymentId)}`,
    {
      method: 'GET',
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json'
      }
    }
  );

  const paymentData = await res.json().catch(() => null);
  if (!res.ok || !paymentData || !paymentData.id) {
    return {
      confirmed: false,
      error:
        paymentData?.error?.description ||
        `Unable to verify payment ${paymentId} with Razorpay API (HTTP ${res.status}).`
    };
  }

  let status = String(paymentData.status || '').toLowerCase();
  const amount = Number(paymentData.amount || 0);
  const method = String(paymentData.method || 'RAZORPAY').toUpperCase();

  if (expectedAmountPaise && amount > 0 && amount < expectedAmountPaise) {
    return {
      confirmed: false,
      error: `Payment amount mismatch: expected ${expectedAmountPaise} paise, received ${amount} paise.`
    };
  }

  if (status === 'authorized') {
    const captureRes = await fetch(
      `https://api.razorpay.com/v1/payments/${encodeURIComponent(paymentId)}/capture`,
      {
        method: 'POST',
        headers: {
          Authorization: authHeader,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: amount || expectedAmountPaise,
          currency: paymentData.currency || 'INR'
        })
      }
    );
    const capturedData = await captureRes.json().catch(() => null);
    if (captureRes.ok && capturedData?.status === 'captured') {
      status = 'captured';
    }
  }

  if (status !== 'captured') {
    return {
      confirmed: false,
      error: `Payment status is '${status}'. Subscription is only activated for captured payments.`
    };
  }

  return {
    confirmed: true,
    status: 'captured',
    method,
    amount
  };
}

// ==========================================
// API ROUTES
// ==========================================

// 1. GET /api/razorpay/config
app.get(['/api/razorpay/config', '/razorpay/config'], (req, res) => {
  const creds = getResolvedRazorpayCredentials();
  return jsonResponse(res, 200, {
    success: true,
    keyId: creds.keyId || '',
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

// 2. POST /api/razorpay/create-order
app.post(['/api/razorpay/create-order', '/razorpay/create-order'], async (req, res) => {
  try {
    const body = req.body || {};
    const rawPlan = body.planId || body.plan;
    const planId = rawPlan === 'basic' || rawPlan === 'premium' ? rawPlan : null;
    const { studentId, studentName, email, mobile } = body;

    if (!studentId) {
      return jsonResponse(res, 400, {
        success: false,
        error: 'Student authentication required.'
      });
    }

    if (!planId) {
      return jsonResponse(res, 400, {
        success: false,
        error: 'Invalid plan selected. Choose basic (₹49) or premium (₹99).'
      });
    }

    const creds = getResolvedRazorpayCredentials();
    if (!creds.isConfigured) {
      return jsonResponse(res, 500, {
        success: false,
        error:
          'Razorpay LIVE API credentials (RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET) are not configured in production environment variables.'
      });
    }

    const amountInPaise = planId === 'basic' ? 4900 : 9900;
    const amountInRupees = planId === 'basic' ? 49 : 99;
    const receiptNumber = `REC-VC-${Date.now().toString().slice(-8)}`;
    const authHeader =
      'Basic ' +
      Buffer.from(`${creds.keyId}:${creds.keySecret}`).toString('base64');

    const orderRes = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
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
      })
    });

    const orderData = await orderRes.json().catch(() => null);
    if (!orderRes.ok || !orderData || !orderData.id) {
      return jsonResponse(res, 502, {
        success: false,
        error:
          orderData?.error?.description ||
          'Razorpay order creation failed. Please verify LIVE API credentials.'
      });
    }

    return jsonResponse(res, 200, {
      success: true,
      orderId: orderData.id,
      amount: Number(orderData.amount) || amountInPaise,
      amountRupees: amountInRupees,
      currency: orderData.currency || 'INR',
      keyId: creds.keyId,
      receiptNumber,
      planId,
      isMock: false,
      mode: creds.isLive ? 'LIVE' : 'TEST'
    });
  } catch (err) {
    return jsonResponse(res, 500, {
      success: false,
      error: err?.message || 'Internal server error during order creation.'
    });
  }
});

// 2.1 POST /api/razorpay/create-qr
app.post(['/api/razorpay/create-qr', '/razorpay/create-qr'], async (req, res) => {
  try {
    const body = req.body || {};
    const rawPlan = body.planId || body.plan;
    const planId = rawPlan === 'basic' || rawPlan === 'premium' ? rawPlan : null;
    const { studentId, studentName, email, mobile } = body;

    if (!studentId) {
      return jsonResponse(res, 400, { success: false, error: 'Student authentication required.' });
    }

    if (!planId) {
      return jsonResponse(res, 400, { success: false, error: 'Invalid plan selected. Choose basic (₹49) or premium (₹99).' });
    }

    const creds = getResolvedRazorpayCredentials();
    if (!creds.isConfigured || !creds.keySecret) {
      return jsonResponse(res, 500, {
        success: false,
        error: 'Razorpay LIVE API credentials are not configured in production environment variables.'
      });
    }

    const amountInPaise = planId === 'basic' ? 4900 : 9900;
    const amountInRupees = planId === 'basic' ? 49 : 99;
    const planTitle = planId === 'premium' ? 'PREMIUM PLAN – ₹99 – 90 Days' : 'STANDARD PLAN – ₹49 – 90 Days';
    const authHeader = 'Basic ' + Buffer.from(`${creds.keyId}:${creds.keySecret}`).toString('base64');

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
          validityDays: '90'
        }
      })
    });

    const qrData = await qrRes.json().catch(() => null);

    if (!qrRes.ok || !qrData || !qrData.id) {
      const errorDesc = qrData?.error?.description || `Razorpay QR Code API returned HTTP ${qrRes.status}`;
      return jsonResponse(res, 502, {
        success: false,
        error: `${errorDesc}. (To enable UPI QR Codes, go to Razorpay Dashboard → Account & Settings → Payment Methods → Enable UPI QR Code).`
      });
    }

    return jsonResponse(res, 200, {
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
      expiresInSeconds: 600,
      keyId: creds.keyId
    });
  } catch (err) {
    return jsonResponse(res, 500, {
      success: false,
      error: err?.message || 'Error generating Razorpay QR code.'
    });
  }
});

// 2.2 GET /api/razorpay/qr-status/:qrId
app.get(['/api/razorpay/qr-status/:qrId', '/razorpay/qr-status/:qrId'], async (req, res) => {
  try {
    const qrId = req.params.qrId;
    const params = req.query || {};
    const { studentId, planId, studentName, email, mobile } = params;

    const creds = getResolvedRazorpayCredentials();
    if (!creds.isConfigured || !creds.keySecret) {
      return jsonResponse(res, 500, { success: false, error: 'Razorpay credentials not configured.' });
    }

    const authHeader = 'Basic ' + Buffer.from(`${creds.keyId}:${creds.keySecret}`).toString('base64');

    const qrRes = await fetch(`https://api.razorpay.com/v1/payments/qr_codes/${encodeURIComponent(qrId)}`, {
      headers: { Authorization: authHeader }
    });
    const qrData = await qrRes.json().catch(() => null);

    if (!qrRes.ok || !qrData) {
      return jsonResponse(res, 502, { success: false, error: 'Unable to query QR code status from Razorpay.' });
    }

    const resolvedPlanId = planId || (qrData?.notes?.planId === 'premium' || Number(qrData?.payment_amount) >= 9900 ? 'premium' : 'basic');
    const expectedAmountPaise = resolvedPlanId === 'premium' ? 9900 : 4900;
    const amountRupees = resolvedPlanId === 'premium' ? 99 : 49;

    const paymentsRes = await fetch(`https://api.razorpay.com/v1/payments/qr_codes/${encodeURIComponent(qrId)}/payments`, {
      headers: { Authorization: authHeader }
    });
    const paymentsData = await paymentsRes.json().catch(() => null);
    const items = Array.isArray(paymentsData?.items) ? paymentsData.items : [];

    const successfulPayment = items.find(
      (item) => (item.status === 'captured' || item.status === 'authorized') && Number(item.amount) >= expectedAmountPaise
    );

    if (successfulPayment) {
      const paymentId = successfulPayment.id;
      const now = new Date();
      const startDateIso = now.toISOString().split('T')[0];
      const expiryDate = new Date(now);
      expiryDate.setDate(expiryDate.getDate() + 90);
      const expiryDateIso = expiryDate.toISOString().split('T')[0];
      const planTitle = resolvedPlanId === 'premium' ? 'PREMIUM PLAN – ₹99 – 90 Days' : 'STANDARD PLAN – ₹49 – 90 Days';
      const receiptNumber = `REC-VC-${Date.now().toString().slice(-6)}`;

      await Promise.all([
        patchFirestoreDocument('students', String(studentId), {
          id: String(studentId),
          plan: resolvedPlanId,
          subscriptionTier: resolvedPlanId === 'premium' ? 'premium' : 'standard',
          planLabel: planTitle,
          isLifetimeFree: false,
          planPurchasedAt: startDateIso,
          planExpiresAt: expiryDateIso,
          subscriptionValidityDays: 90,
          subscriptionStatus: 'ACTIVE',
          lastPaymentId: paymentId,
          lastOrderId: qrId,
          lastPaymentAmountInr: amountRupees,
          subscriptionUpdatedAt: now.toISOString()
        }),
        patchFirestoreDocument('transactions', `tx_${paymentId}`, {
          id: `tx_${paymentId}`,
          receiptNumber,
          studentId: String(studentId),
          studentName: String(studentName || 'Student'),
          parentEmail: String(email || ''),
          parentMobile: String(mobile || ''),
          planId: resolvedPlanId,
          planTitle,
          amount: amountRupees,
          currency: 'INR',
          orderId: qrId,
          paymentId,
          signature: `qr_verified_${paymentId}`,
          method: 'UPI',
          status: 'SUCCESS',
          createdAt: now.toISOString(),
          membershipStartDate: startDateIso,
          membershipExpiryDate: expiryDateIso
        })
      ]);

      return jsonResponse(res, 200, {
        success: true,
        paid: true,
        status: 'PAID',
        paymentId,
        orderId: qrId,
        method: 'UPI',
        amount: amountRupees,
        transaction: {
          id: `tx_${paymentId}`,
          receiptNumber,
          studentId: String(studentId),
          studentName: String(studentName || 'Student'),
          planId: resolvedPlanId,
          planTitle,
          amount: amountRupees,
          orderId: qrId,
          paymentId,
          method: 'UPI',
          status: 'SUCCESS',
          membershipStartDate: startDateIso,
          membershipExpiryDate: expiryDateIso
        },
        membership: {
          membershipId: `mem_${paymentId}`,
          studentId: String(studentId),
          studentName: String(studentName || 'Student'),
          planId: resolvedPlanId,
          planTitle,
          amount: amountRupees,
          startDate: startDateIso,
          expiryDate: expiryDateIso,
          status: 'ACTIVE',
          paymentId,
          orderId: qrId,
          daysRemaining: 90
        }
      });
    }

    if (qrData.status === 'closed') {
      return jsonResponse(res, 200, {
        success: true,
        paid: false,
        status: 'EXPIRED',
        message: 'QR code has expired. Please generate a new QR code.'
      });
    }

    return jsonResponse(res, 200, {
      success: true,
      paid: false,
      status: 'WAITING',
      message: 'Waiting for UPI payment confirmation...'
    });
  } catch (err) {
    return jsonResponse(res, 500, { success: false, error: err?.message || 'Error checking QR status.' });
  }
});

// 3. POST /api/razorpay/verify-payment
app.post(['/api/razorpay/verify-payment', '/razorpay/verify-payment'], async (req, res) => {
  try {
    const body = req.body || {};
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      planId,
      studentId,
      studentName,
      email,
      mobile,
      method: payMethod = 'UPI',
      currentExpiresAt
    } = body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return jsonResponse(res, 400, {
        success: false,
        error:
          'Incomplete transaction information. Missing order ID, payment ID, or signature.'
      });
    }

    if (!studentId) {
      return jsonResponse(res, 400, {
        success: false,
        error: 'Student identification missing.'
      });
    }

    if (planId !== 'basic' && planId !== 'premium') {
      return jsonResponse(res, 400, {
        success: false,
        error: 'Invalid subscription plan specified for verification.'
      });
    }

    if (
      processedPaymentIds.has(razorpay_payment_id) ||
      processedOrderIds.has(razorpay_order_id)
    ) {
      const existingTx = transactionLedger.find(
        (t) =>
          t.paymentId === razorpay_payment_id ||
          t.orderId === razorpay_order_id
      );
      return jsonResponse(res, 200, {
        success: true,
        alreadyProcessed: true,
        transaction: existingTx,
        message: 'This payment has already been verified and activated.'
      });
    }

    const creds = getResolvedRazorpayCredentials();
    if (!creds.isConfigured || !creds.keySecret) {
      return jsonResponse(res, 500, {
        success: false,
        error: 'Razorpay LIVE API credentials are not configured on the server.'
      });
    }

    const expectedSignature = crypto
      .createHmac('sha256', creds.keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    const expectedBuf = Buffer.from(expectedSignature, 'utf8');
    const providedBuf = Buffer.from(String(razorpay_signature).trim(), 'utf8');
    const isSignatureValid =
      expectedBuf.length === providedBuf.length &&
      crypto.timingSafeEqual(expectedBuf, providedBuf);

    if (!isSignatureValid) {
      return jsonResponse(res, 400, {
        success: false,
        error:
          'Cryptographic payment signature mismatch. Payment verification failed.'
      });
    }

    const expectedAmountPaise = planId === 'premium' ? 9900 : 4900;
    const captureCheck = await verifyAndCaptureRazorpayPayment(
      creds,
      razorpay_payment_id,
      expectedAmountPaise
    );

    if (!captureCheck.confirmed) {
      return jsonResponse(res, 400, {
        success: false,
        error:
          captureCheck.error ||
          'Payment was not confirmed as captured by Razorpay API.'
      });
    }

    const now = new Date();
    const startDateIso = now.toISOString().split('T')[0];
    let baseDate = new Date(now);

    if (currentExpiresAt && new Date(currentExpiresAt) > now) {
      baseDate = new Date(currentExpiresAt);
    }

    const expiryDate = new Date(baseDate);
    expiryDate.setDate(expiryDate.getDate() + 90);
    const expiryDateIso = expiryDate.toISOString().split('T')[0];
    const daysRemaining = Math.max(
      1,
      Math.round((expiryDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    );

    const verifiedAmount = planId === 'premium' ? 99 : 49;
    const planTitle =
      planId === 'premium'
        ? 'PREMIUM PLAN – ₹99 – 90 Days'
        : 'STANDARD PLAN – ₹49 – 90 Days';
    const subscriptionTier = planId === 'premium' ? 'premium' : 'standard';
    const receiptNumber = `REC-VC-${Date.now().toString().slice(-6)}`;
    const resolvedMethod = captureCheck.method || payMethod || 'RAZORPAY';

    const transactionRecord = {
      id: `tx_${razorpay_payment_id}`,
      receiptNumber,
      studentId: String(studentId),
      studentName: String(studentName || 'Student'),
      parentEmail: String(email || ''),
      parentMobile: String(mobile || ''),
      planId,
      planTitle,
      amount: verifiedAmount,
      currency: 'INR',
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      signature: razorpay_signature,
      method: resolvedMethod,
      status: 'SUCCESS',
      createdAt: now.toISOString(),
      verifiedAt: now.toISOString(),
      membershipStartDate: startDateIso,
      membershipExpiryDate: expiryDateIso
    };

    const membershipRecord = {
      membershipId: `mem_${razorpay_payment_id}`,
      studentId: String(studentId),
      studentName: String(studentName || 'Student'),
      planId,
      planTitle,
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

    await Promise.all([
      patchFirestoreDocument('students', String(studentId), {
        id: String(studentId),
        plan: planId,
        subscriptionTier,
        planLabel: planTitle,
        isLifetimeFree: false,
        planPurchasedAt: startDateIso,
        planExpiresAt: expiryDateIso,
        subscriptionValidityDays: 90,
        subscriptionStatus: 'ACTIVE',
        lastPaymentId: razorpay_payment_id,
        lastOrderId: razorpay_order_id,
        lastPaymentAmountInr: verifiedAmount,
        subscriptionUpdatedAt: now.toISOString()
      }),
      patchFirestoreDocument('transactions', `tx_${razorpay_payment_id}`, {
        ...transactionRecord,
        subscriptionTier,
        savedToFirestoreAt: now.toISOString()
      })
    ]);

    return jsonResponse(res, 200, {
      success: true,
      alreadyProcessed: false,
      transaction: transactionRecord,
      membership: membershipRecord
    });
  } catch (err) {
    return jsonResponse(res, 500, {
      success: false,
      error: err?.message || 'Internal server error during payment verification.'
    });
  }
});

// 4. POST /api/razorpay/payment-failed
app.post(['/api/razorpay/payment-failed', '/razorpay/payment-failed'], async (req, res) => {
  try {
    const body = req.body || {};
    const {
      orderId,
      paymentId,
      planId = 'premium',
      studentId = 'unknown',
      studentName = 'Student',
      email = '',
      mobile = '',
      reason = 'Payment cancelled or declined'
    } = body;

    const failedTx = {
      id: `tx_failed_${Date.now()}`,
      receiptNumber: `FAIL-VC-${Date.now().toString().slice(-6)}`,
      studentId: String(studentId),
      studentName: String(studentName),
      parentEmail: String(email),
      parentMobile: String(mobile),
      planId: planId === 'basic' ? 'basic' : 'premium',
      planTitle:
        planId === 'basic'
          ? 'STANDARD PLAN – ₹49 – 90 Days'
          : 'PREMIUM PLAN – ₹99 – 90 Days',
      amount: planId === 'basic' ? 49 : 99,
      currency: 'INR',
      orderId: orderId || `ord_failed_${Date.now()}`,
      paymentId: paymentId || `pay_failed_${Date.now()}`,
      signature: 'failed_or_cancelled',
      method: 'RAZORPAY',
      status: 'FAILED',
      createdAt: new Date().toISOString(),
      reason
    };

    transactionLedger.unshift(failedTx);
    return jsonResponse(res, 200, {
      success: true,
      recorded: true,
      transaction: failedTx
    });
  } catch (err) {
    return jsonResponse(res, 500, {
      success: false,
      error: err?.message || 'Error recording failed payment.'
    });
  }
});

// 5. POST /api/razorpay/webhook
app.post(
  ['/api/razorpay/webhook', '/razorpay/webhook', '/api/webhook', '/webhook'],
  async (req, res) => {
    try {
      const signature =
        req.headers['x-razorpay-signature'] ||
        req.headers['X-Razorpay-Signature'];
      const rawBody = req.rawBody || '';
      const creds = getResolvedRazorpayCredentials();

      if (!signature || (!creds.webhookSecret && !creds.keySecret)) {
        return jsonResponse(res, 400, {
          status: 'error',
          message: 'Missing webhook signature or secret.'
        });
      }

      const secrets = [creds.webhookSecret, creds.keySecret].filter(Boolean);
      let validSig = false;
      for (const sec of secrets) {
        const expected = crypto
          .createHmac('sha256', sec)
          .update(rawBody)
          .digest('hex');
        if (
          expected.length === signature.trim().length &&
          crypto.timingSafeEqual(
            Buffer.from(expected, 'utf8'),
            Buffer.from(signature.trim(), 'utf8')
          )
        ) {
          validSig = true;
          break;
        }
      }

      if (!validSig) {
        return jsonResponse(res, 400, {
          status: 'error',
          message: 'Invalid X-Razorpay-Signature.'
        });
      }

      const payload = JSON.parse(rawBody);
      const eventType = String(payload?.event || '');

      if (eventType === 'payment.captured' || eventType === 'order.paid') {
        const paymentEntity = payload?.payload?.payment?.entity || {};
        const orderEntity = payload?.payload?.order?.entity || {};
        const notes = {
          ...(orderEntity.notes || {}),
          ...(paymentEntity.notes || {})
        };
        const studentId = String(notes.studentId || '').trim();
        const paymentId = String(paymentEntity.id || '').trim();
        const orderId = String(
          paymentEntity.order_id || orderEntity.id || ''
        ).trim();
        const amountPaise = Number(
          paymentEntity.amount || orderEntity.amount || 0
        );
        const planId =
          String(notes.planId || '').toLowerCase() === 'premium' ||
          amountPaise >= 9900
            ? 'premium'
            : 'basic';

        if (studentId && paymentId) {
          const now = new Date();
          const startDateIso = now.toISOString().split('T')[0];
          const expiryDate = new Date(now);
          expiryDate.setDate(expiryDate.getDate() + 90);
          const expiryDateIso = expiryDate.toISOString().split('T')[0];
          const amountInr = planId === 'premium' ? 99 : 49;
          const planTitle =
            planId === 'premium'
              ? 'PREMIUM PLAN – ₹99 – 90 Days'
              : 'STANDARD PLAN – ₹49 – 90 Days';

          await patchFirestoreDocument('students', studentId, {
            id: studentId,
            plan: planId,
            subscriptionTier: planId === 'premium' ? 'premium' : 'standard',
            planLabel: planTitle,
            isLifetimeFree: false,
            planPurchasedAt: startDateIso,
            planExpiresAt: expiryDateIso,
            subscriptionValidityDays: 90,
            subscriptionStatus: 'ACTIVE',
            lastPaymentId: paymentId,
            lastOrderId: orderId,
            lastPaymentAmountInr: amountInr,
            subscriptionUpdatedAt: now.toISOString()
          });

          return jsonResponse(res, 200, {
            status: 'ok',
            event: eventType,
            studentId,
            plan: planId,
            planExpiresAt: expiryDateIso,
            validityDays: 90
          });
        }
      }

      return jsonResponse(res, 200, { status: 'ok', event: eventType });
    } catch (err) {
      return jsonResponse(res, 500, {
        status: 'error',
        message: err?.message || 'Webhook processing error.'
      });
    }
  }
);

// 6. POST /api/subscription/sync
app.post(['/api/subscription/sync', '/subscription/sync'], async (req, res) => {
  try {
    const body = req.body || {};
    return jsonResponse(res, 200, {
      success: true,
      subscription: {
        studentId: body.studentId,
        plan: body.plan || 'free',
        planPurchasedAt: body.planPurchasedAt,
        planExpiresAt: body.planExpiresAt,
        status: 'ACTIVE',
        updatedAt: new Date().toISOString()
      }
    });
  } catch (err) {
    return jsonResponse(res, 500, { success: false, error: err?.message });
  }
});

// 7. GET /api/subscription/status/:studentId
app.get(['/api/subscription/status/:studentId', '/subscription/status/:studentId'], async (req, res) => {
  const studentId = req.params.studentId;
  const docData = await getFirestoreDocument('students', studentId);
  return jsonResponse(res, 200, {
    success: true,
    subscription: {
      studentId,
      plan: docData?.plan || 'free',
      planPurchasedAt: docData?.planPurchasedAt || null,
      planExpiresAt: docData?.planExpiresAt || null,
      status: 'ACTIVE'
    }
  });
});

// 8. GET /api/payments/history
app.get(['/api/payments/history', '/payments/history'], (req, res) => {
  return jsonResponse(res, 200, {
    success: true,
    transactions: transactionLedger
  });
});

// 9. POST /api/ai/chat
app.post(['/api/ai/chat', '/ai/chat'], async (req, res) => {
  try {
    const body = req.body || {};
    const message = body.message || '';
    const language = body.language || 'en';
    let reply =
      'Welcome to Vacation Champions! We provide 14 school curriculum subjects, 45+ audio moral stories, and scholarship practice.';
    const q = message.toLowerCase();
    if (
      q.includes('plan') ||
      q.includes('price') ||
      q.includes('subscription') ||
      q.includes('49') ||
      q.includes('99') ||
      q.includes('शुल्क')
    ) {
      reply =
        language === 'mr'
          ? 'व्हेकेशन चॅम्पियन्सवर ३ प्लॅन्स आहेत: १) मोफत प्लॅन (₹०) २) स्टँडर्ड प्लॅन (₹४९, पूर्ण ९० दिवस) ३) प्रीमियम प्लॅन (₹९९, पूर्ण ९० दिवस - सर्व फिचर्स अनलॉक).'
          : language === 'hi'
          ? 'वेकेशन चैंपियंस में ३ प्लान हैं: १) फ्री प्लान (₹०) २) स्टैंडर्ड प्लान (₹४९, ९० दिन) ३) प्रीमियम प्लान (₹९९, ९० दिन - सभी फीचर्स).'
          : 'Vacation Champions offers: 1) FREE Plan (₹0) 2) Standard Plan (₹49 for 90 days) 3) Premium Plan (₹99 for 90 days with full unlock).';
    } else if (
      q.includes('pay') ||
      q.includes('qr') ||
      q.includes('razorpay') ||
      q.includes('पेमेंट')
    ) {
      reply =
        language === 'mr'
          ? 'तुम्ही अधिकृत Razorpay किंवा UPI QR कोड द्वारे Google Pay, PhonePe किंवा Paytm ने सुरक्षित पेमेंट करू शकता.'
          : language === 'hi'
          ? 'आप Razorpay ऑनलाइन या UPI QR कोड से Google Pay, PhonePe या Paytm द्वारा भुगतान कर सकते हैं।'
          : 'You can pay securely via Razorpay Checkout or Dynamic UPI QR Code using Google Pay, PhonePe, or Paytm.';
    } else if (
      q.includes('help') ||
      q.includes('support') ||
      q.includes('ticket') ||
      q.includes('तक्रार') ||
      q.includes('मदत')
    ) {
      reply =
        language === 'mr'
          ? 'मदतीसाठी हेल्प अँड सपोर्ट विभागात तिकीट (TKT-VC-XXXXX) किंवा तक्रार निवारण विभागात तक्रार नोंदवा.'
          : language === 'hi'
          ? 'सहायता के लिए हेल्प एंड सपोर्ट पेज पर टिकट या ग्रीवेंस रिड्रेसल में शिकायत दर्ज करें।'
          : 'For assistance, create a support ticket (TKT-VC-XXXXX) or lodge a formal grievance (GRV-VC-XXXXX).';
    }
    return jsonResponse(res, 200, {
      success: true,
      reply,
      source: 'knowledge_base_fallback',
      language
    });
  } catch (err) {
    return jsonResponse(res, 500, { success: false, error: err?.message });
  }
});

// 404 Fallback
app.use((req, res) => {
  return jsonResponse(res, 404, {
    success: false,
    error: `API route not found: ${req.method} ${req.originalUrl}`
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


          
