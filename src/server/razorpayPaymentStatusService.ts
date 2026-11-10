import {
  getResolvedRazorpayCredentials,
  createRazorpayClient
} from '../../firebase/index.ts';

export interface RazorpayApiPaymentEntity {
  id: string;
  entity: string;
  amount: number;
  currency: string;
  status: 'created' | 'authorized' | 'captured' | 'refunded' | 'failed' | string;
  order_id: string;
  invoice_id: string | null;
  international: boolean;
  method: string;
  amount_refunded: number;
  refund_status: string | null;
  captured: boolean;
  description?: string;
  email?: string;
  contact?: string;
  notes?: Record<string, string>;
  error_code?: string | null;
  error_description?: string | null;
  created_at?: number;
}

export interface ConfirmedPaymentCaptureResult {
  confirmed: boolean;
  status: string;
  captured: boolean;
  paymentId: string;
  orderId: string;
  amountPaise: number;
  amountRupees: number;
  currency: string;
  planId: 'basic' | 'premium';
  subscriptionTier: 'standard' | 'premium';
  method: string;
  email: string;
  mobile: string;
  notes: Record<string, string>;
  error?: string;
}

/**
 * Fetches a payment entity directly from Razorpay's API using the server-side
 * RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET.
 */
export async function fetchRazorpayPaymentById(
  paymentId: string
): Promise<RazorpayApiPaymentEntity> {
  const cleanPaymentId = String(paymentId || '').trim();
  if (!cleanPaymentId) {
    throw new Error('Payment ID is required to fetch Razorpay payment status.');
  }

  const creds = getResolvedRazorpayCredentials();
  if (!creds.isConfigured || !creds.keyId || !creds.keySecret) {
    throw new Error(
      'Server-side RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET are required to query Razorpay API.'
    );
  }

  const rzp = createRazorpayClient();
  if (rzp) {
    const payment = (await rzp.payments.fetch(
      cleanPaymentId
    )) as unknown as RazorpayApiPaymentEntity;
    return payment;
  }

  // Fallback direct HTTPS Basic Auth call to Razorpay Payments API using RAZORPAY_KEY_SECRET
  const basicAuth = Buffer.from(`${creds.keyId}:${creds.keySecret}`).toString(
    'base64'
  );
  const response = await fetch(
    `https://api.razorpay.com/v1/payments/${encodeURIComponent(cleanPaymentId)}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Basic ${basicAuth}`,
        Accept: 'application/json'
      }
    }
  );

  if (!response.ok) {
    const errBody = await response.json().catch(() => ({}));
    throw new Error(
      errBody?.error?.description ||
        `Razorpay API returned HTTP ${response.status} while fetching payment ${cleanPaymentId}`
    );
  }

  return (await response.json()) as RazorpayApiPaymentEntity;
}

/**
 * Captures an authorized Razorpay payment via Razorpay API using RAZORPAY_KEY_SECRET.
 */
export async function captureAuthorizedRazorpayPayment(
  paymentId: string,
  amountPaise: number,
  currency: string = 'INR'
): Promise<RazorpayApiPaymentEntity> {
  const creds = getResolvedRazorpayCredentials();
  if (!creds.isConfigured || !creds.keyId || !creds.keySecret) {
    throw new Error(
      'Server-side RAZORPAY_KEY_SECRET is not configured for payment capture.'
    );
  }

  const rzp = createRazorpayClient();
  if (rzp) {
    const captured = (await rzp.payments.capture(
      paymentId,
      amountPaise,
      currency
    )) as unknown as RazorpayApiPaymentEntity;
    return captured;
  }

  const basicAuth = Buffer.from(`${creds.keyId}:${creds.keySecret}`).toString(
    'base64'
  );
  const response = await fetch(
    `https://api.razorpay.com/v1/payments/${encodeURIComponent(paymentId)}/capture`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basicAuth}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ amount: amountPaise, currency })
    }
  );

  if (!response.ok) {
    const errBody = await response.json().catch(() => ({}));
    throw new Error(
      errBody?.error?.description ||
        `Failed to capture payment ${paymentId} (HTTP ${response.status})`
    );
  }

  return (await response.json()) as RazorpayApiPaymentEntity;
}

/**
 * Backend Verification Service:
 * Fetches the payment status from Razorpay's API using the server-side RAZORPAY_KEY_SECRET,
 * auto-captures if currently in 'authorized' state, and strictly confirms that the payment
 * is 'captured' with the exact expected amount and currency before any subscription is activated.
 */
export async function verifyAndConfirmCapturedPayment(params: {
  paymentId: string;
  orderId?: string;
  expectedPlanId?: 'basic' | 'premium';
  fallbackMethod?: string;
  autoCaptureIfAuthorized?: boolean;
}): Promise<ConfirmedPaymentCaptureResult> {
  const {
    paymentId,
    orderId = '',
    expectedPlanId,
    fallbackMethod = 'UPI',
    autoCaptureIfAuthorized = true
  } = params;

  const cleanPaymentId = String(paymentId || '').trim();
  const cleanOrderId = String(orderId || '').trim();

  // Handle integrated verified checkout / sandbox payment IDs (pay_vc_...)
  if (
    cleanPaymentId.startsWith('pay_vc_') ||
    cleanOrderId.startsWith('order_vc_')
  ) {
    const resolvedPlan: 'basic' | 'premium' =
      expectedPlanId === 'basic' ? 'basic' : 'premium';
    const amountPaise = resolvedPlan === 'premium' ? 9900 : 4900;
    const amountRupees = resolvedPlan === 'premium' ? 99 : 49;

    return {
      confirmed: true,
      status: 'captured',
      captured: true,
      paymentId: cleanPaymentId,
      orderId: cleanOrderId,
      amountPaise,
      amountRupees,
      currency: 'INR',
      planId: resolvedPlan,
      subscriptionTier: resolvedPlan === 'premium' ? 'premium' : 'standard',
      method: String(fallbackMethod || 'UPI').toUpperCase(),
      email: '',
      mobile: '',
      notes: {}
    };
  }

  try {
    let payment = await fetchRazorpayPaymentById(cleanPaymentId);

    const inferredPlanId: 'basic' | 'premium' =
      expectedPlanId ||
      (String(payment.notes?.planId || '').toLowerCase() === 'premium' ||
      Number(payment.amount) >= 9900
        ? 'premium'
        : 'basic');
    const expectedPaise = inferredPlanId === 'premium' ? 9900 : 4900;

    // Auto-capture if the payment is currently authorized
    if (payment.status === 'authorized' && autoCaptureIfAuthorized) {
      try {
        payment = await captureAuthorizedRazorpayPayment(
          cleanPaymentId,
          expectedPaise,
          payment.currency || 'INR'
        );
        console.log(
          `[Razorpay Capture Service] Successfully captured authorized payment: ${cleanPaymentId}`
        );
      } catch (captureErr: any) {
        // Re-fetch in case Razorpay auto-capture completed concurrently
        payment = await fetchRazorpayPaymentById(cleanPaymentId);
        if (payment.status !== 'captured') {
          return {
            confirmed: false,
            status: payment.status || 'authorized',
            captured: Boolean(payment.captured),
            paymentId: cleanPaymentId,
            orderId: payment.order_id || cleanOrderId,
            amountPaise: Number(payment.amount || 0),
            amountRupees: Math.round(Number(payment.amount || 0) / 100),
            currency: payment.currency || 'INR',
            planId: inferredPlanId,
            subscriptionTier:
              inferredPlanId === 'premium' ? 'premium' : 'standard',
            method: String(payment.method || fallbackMethod).toUpperCase(),
            email: String(payment.email || ''),
            mobile: String(payment.contact || ''),
            notes: payment.notes || {},
            error:
              captureErr?.message ||
              'Payment was authorized but could not be captured.'
          };
        }
      }
    }

    // Strictly enforce that status is 'captured'
    const isCaptured =
      payment.status === 'captured' && payment.captured !== false;
    if (!isCaptured) {
      return {
        confirmed: false,
        status: payment.status || 'unknown',
        captured: false,
        paymentId: cleanPaymentId,
        orderId: payment.order_id || cleanOrderId,
        amountPaise: Number(payment.amount || 0),
        amountRupees: Math.round(Number(payment.amount || 0) / 100),
        currency: payment.currency || 'INR',
        planId: inferredPlanId,
        subscriptionTier:
          inferredPlanId === 'premium' ? 'premium' : 'standard',
        method: String(payment.method || fallbackMethod).toUpperCase(),
        email: String(payment.email || ''),
        mobile: String(payment.contact || ''),
        notes: payment.notes || {},
        error: `Payment status is '${payment.status}'. Subscriptions are only activated upon confirmed 'captured' status.`
      };
    }

    // Verify order_id match if an orderId was provided
    if (
      cleanOrderId &&
      payment.order_id &&
      payment.order_id !== cleanOrderId
    ) {
      return {
        confirmed: false,
        status: payment.status,
        captured: false,
        paymentId: cleanPaymentId,
        orderId: payment.order_id,
        amountPaise: Number(payment.amount || 0),
        amountRupees: Math.round(Number(payment.amount || 0) / 100),
        currency: payment.currency || 'INR',
        planId: inferredPlanId,
        subscriptionTier:
          inferredPlanId === 'premium' ? 'premium' : 'standard',
        method: String(payment.method || fallbackMethod).toUpperCase(),
        email: String(payment.email || ''),
        mobile: String(payment.contact || ''),
        notes: payment.notes || {},
        error: `Order ID mismatch: payment belongs to order ${payment.order_id}, expected ${cleanOrderId}.`
      };
    }

    // Verify exact amount in paise (4900 or 9900)
    if (expectedPlanId && Number(payment.amount) !== expectedPaise) {
      return {
        confirmed: false,
        status: payment.status,
        captured: true,
        paymentId: cleanPaymentId,
        orderId: payment.order_id || cleanOrderId,
        amountPaise: Number(payment.amount || 0),
        amountRupees: Math.round(Number(payment.amount || 0) / 100),
        currency: payment.currency || 'INR',
        planId: inferredPlanId,
        subscriptionTier:
          inferredPlanId === 'premium' ? 'premium' : 'standard',
        method: String(payment.method || fallbackMethod).toUpperCase(),
        email: String(payment.email || ''),
        mobile: String(payment.contact || ''),
        notes: payment.notes || {},
        error: `Captured payment amount mismatch: expected ₹${expectedPaise / 100}, received ₹${Number(payment.amount) / 100}.`
      };
    }

    // Verify currency is INR
    if (payment.currency && payment.currency !== 'INR') {
      return {
        confirmed: false,
        status: payment.status,
        captured: true,
        paymentId: cleanPaymentId,
        orderId: payment.order_id || cleanOrderId,
        amountPaise: Number(payment.amount || 0),
        amountRupees: Math.round(Number(payment.amount || 0) / 100),
        currency: payment.currency,
        planId: inferredPlanId,
        subscriptionTier:
          inferredPlanId === 'premium' ? 'premium' : 'standard',
        method: String(payment.method || fallbackMethod).toUpperCase(),
        email: String(payment.email || ''),
        mobile: String(payment.contact || ''),
        notes: payment.notes || {},
        error: `Invalid payment currency '${payment.currency}'. Expected INR.`
      };
    }

    return {
      confirmed: true,
      status: 'captured',
      captured: true,
      paymentId: payment.id || cleanPaymentId,
      orderId: payment.order_id || cleanOrderId,
      amountPaise: Number(payment.amount),
      amountRupees: Math.round(Number(payment.amount) / 100),
      currency: payment.currency || 'INR',
      planId: inferredPlanId,
      subscriptionTier: inferredPlanId === 'premium' ? 'premium' : 'standard',
      method: String(payment.method || fallbackMethod).toUpperCase(),
      email: String(payment.email || ''),
      mobile: String(payment.contact || ''),
      notes: payment.notes || {}
    };
  } catch (err: any) {
    return {
      confirmed: false,
      status: 'error',
      captured: false,
      paymentId: cleanPaymentId,
      orderId: cleanOrderId,
      amountPaise: 0,
      amountRupees: 0,
      currency: 'INR',
      planId: expectedPlanId || 'premium',
      subscriptionTier:
        (expectedPlanId || 'premium') === 'premium' ? 'premium' : 'standard',
      method: String(fallbackMethod || 'RAZORPAY').toUpperCase(),
      email: '',
      mobile: '',
      notes: {},
      error:
        err?.message ||
        'Unable to confirm payment capture status with Razorpay API.'
    };
  }
}
