import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const FIREBASE_PROJECT_ID = 'gen-lang-client-0860728359';
const FIRESTORE_DATABASE_ID =
  'ai-studio-vacationchampion-cedf2d74-0d25-42f6-8aaa-1a9e2fb4514d';

const processedPaymentIds = new Set();
const processedOrderIds = new Set();
const transactionLedger = [];

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

function jsonResponse(statusCode, payload) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers':
        'Content-Type, Authorization, X-Razorpay-Signature',
      'Cache-Control': 'no-store, no-cache, must-revalidate'
    },
    body: JSON.stringify(payload)
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
    console.warn(`[Netlify Firestore Sync Notice] (${collectionName}/${docId}):`, err?.message || err);
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

async function verifyAndCaptureRazorpayPayment(creds, paymentId, expectedAmountPaise) {
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

export async function handler(event) {
  if (event.httpMethod === 'OPTIONS') {
    return jsonResponse(200, { ok: true });
  }

  const rawPath =
    event.queryStringParameters?.path ||
    event.path ||
    (event.rawUrl ? new URL(event.rawUrl).pathname : '');

  // Normalize path whether called via /api/... or /.netlify/functions/api/...
  const normalizedPath = rawPath
    .replace(/^\/\.netlify\/functions\/api/, '')
    .replace(/^\/api/, '');

  const method = (event.httpMethod || 'GET').toUpperCase();

  // 1. GET /api/razorpay/config
  if (method === 'GET' && normalizedPath === '/razorpay/config') {
    const creds = getResolvedRazorpayCredentials();
    return jsonResponse(200, {
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
  }

  // 2. POST /api/razorpay/create-order
  if (method === 'POST' && normalizedPath === '/razorpay/create-order') {
    try {
      const body = JSON.parse(event.body || '{}');
      const { planId, studentId, studentName, email, mobile } = body;

      if (!studentId) {
        return jsonResponse(400, {
          success: false,
          error: 'Student authentication required.'
        });
      }

      if (planId !== 'basic' && planId !== 'premium') {
        return jsonResponse(400, {
          success: false,
          error: 'Invalid plan selected. Choose basic (₹49) or premium (₹99).'
        });
      }

      const creds = getResolvedRazorpayCredentials();
      if (!creds.isConfigured) {
        return jsonResponse(500, {
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
        return jsonResponse(502, {
          success: false,
          error:
            orderData?.error?.description ||
            'Razorpay order creation failed. Please verify LIVE API credentials.'
        });
      }

      return jsonResponse(200, {
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
      return jsonResponse(500, {
        success: false,
        error: err?.message || 'Internal server error during order creation.'
      });
    }
  }

  // 3. POST /api/razorpay/verify-payment
  if (method === 'POST' && normalizedPath === '/razorpay/verify-payment') {
    try {
      const body = JSON.parse(event.body || '{}');
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
        return jsonResponse(400, {
          success: false,
          error:
            'Incomplete transaction information. Missing order ID, payment ID, or signature.'
        });
      }

      if (!studentId) {
        return jsonResponse(400, {
          success: false,
          error: 'Student identification missing.'
        });
      }

      if (planId !== 'basic' && planId !== 'premium') {
        return jsonResponse(400, {
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
        return jsonResponse(200, {
          success: true,
          alreadyProcessed: true,
          transaction: existingTx,
          message: 'This payment has already been verified and activated.'
        });
      }

      const creds = getResolvedRazorpayCredentials();
      if (!creds.isConfigured || !creds.keySecret) {
        return jsonResponse(500, {
          success: false,
          error: 'Razorpay LIVE API credentials are not configured on the server.'
        });
      }

      // Cryptographic HMAC-SHA256 verification
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
        return jsonResponse(400, {
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
        return jsonResponse(400, {
          success: false,
          error:
            captureCheck.error ||
            'Payment was not confirmed as captured by Razorpay API.'
        });
      }

      // Compute exact 90-day expiry date
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

      // Update Firestore student & transaction documents
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

      return jsonResponse(200, {
        success: true,
        alreadyProcessed: false,
        transaction: transactionRecord,
        membership: membershipRecord
      });
    } catch (err) {
      return jsonResponse(500, {
        success: false,
        error: err?.message || 'Internal server error during payment verification.'
      });
    }
  }

  // 4. POST /api/razorpay/payment-failed
  if (method === 'POST' && normalizedPath === '/razorpay/payment-failed') {
    try {
      const body = JSON.parse(event.body || '{}');
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
      return jsonResponse(200, {
        success: true,
        recorded: true,
        transaction: failedTx
      });
    } catch (err) {
      return jsonResponse(500, {
        success: false,
        error: err?.message || 'Error recording failed payment.'
      });
    }
  }

  // 5. POST /api/razorpay/webhook or /functions/webhook
  if (
    method === 'POST' &&
    (normalizedPath === '/razorpay/webhook' || normalizedPath === '/webhook')
  ) {
    try {
      const signature =
        event.headers?.['x-razorpay-signature'] ||
        event.headers?.['X-Razorpay-Signature'];
      const rawBody = event.body || '';
      const creds = getResolvedRazorpayCredentials();

      if (!signature || (!creds.webhookSecret && !creds.keySecret)) {
        return jsonResponse(400, {
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
        return jsonResponse(400, {
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

          return jsonResponse(200, {
            status: 'ok',
            event: eventType,
            studentId,
            plan: planId,
            planExpiresAt: expiryDateIso,
            validityDays: 90
          });
        }
      }

      return jsonResponse(200, { status: 'ok', event: eventType });
    } catch (err) {
      return jsonResponse(500, {
        status: 'error',
        message: err?.message || 'Webhook processing error.'
      });
    }
  }

  // 6. POST /api/subscription/sync
  if (method === 'POST' && normalizedPath === '/subscription/sync') {
    try {
      const body = JSON.parse(event.body || '{}');
      return jsonResponse(200, {
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
      return jsonResponse(500, { success: false, error: err?.message });
    }
  }

  // 7. GET /api/subscription/status/:studentId
  if (method === 'GET' && normalizedPath.startsWith('/subscription/status/')) {
    const studentId = normalizedPath.replace('/subscription/status/', '');
    const docData = await getFirestoreDocument('students', studentId);
    return jsonResponse(200, {
      success: true,
      subscription: {
        studentId,
        plan: docData?.plan || 'free',
        planPurchasedAt: docData?.planPurchasedAt || null,
        planExpiresAt: docData?.planExpiresAt || null,
        status: 'ACTIVE'
      }
    });
  }

  // 8. GET /api/payments/history
  if (method === 'GET' && normalizedPath === '/payments/history') {
    return jsonResponse(200, {
      success: true,
      transactions: transactionLedger
    });
  }

  return jsonResponse(404, {
    success: false,
    error: `API route not found: ${method} ${rawPath}`
  });
}
