import { PaymentTransaction, StudentProfile } from '../types';

export interface RazorpayConfigResponse {
  success: boolean;
  keyId: string;
  isLive: boolean;
  mode: 'LIVE' | 'TEST';
  configured: boolean;
  currency: string;
}

export interface CreateOrderResponse {
  success: boolean;
  orderId: string;
  amount: number; // in paise (4900 or 9900)
  amountRupees: number;
  currency: string;
  keyId: string;
  receiptNumber: string;
  planId: 'basic' | 'premium';
  isMock?: boolean;
  mode?: 'LIVE' | 'TEST';
  error?: string;
}

export interface VerifyPaymentResponse {
  success: boolean;
  alreadyProcessed?: boolean;
  message?: string;
  transaction?: PaymentTransaction;
  membership?: {
    membershipId: string;
    studentId: string;
    studentName: string;
    planId: 'basic' | 'premium';
    planTitle: string;
    amount: number;
    startDate: string;
    expiryDate: string;
    status: 'ACTIVE' | 'EXPIRED' | 'PENDING PAYMENT' | 'PAYMENT FAILED';
    daysRemaining: number;
  };
  referral?: {
    credited: boolean;
    referrerReward?: number;
    buyerReward?: number;
    referrerName?: string;
    reason?: string;
  };
  error?: string;
}

// Helper: Fetch with explicit timeout so network stalls never cause Unhandled Promise Rejections
async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeoutMs: number = 15000
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal
    });
  } catch (err: any) {
    if (err?.name === 'AbortError') {
      throw new Error(
        'Request to payment server timed out after 15 seconds. Please check your internet connection and try again.'
      );
    }
    throw new Error(
      err?.message || 'Network error while communicating with payment server.'
    );
  } finally {
    clearTimeout(timer);
  }
}

// Helper: Safely resolve public Razorpay Key ID (never accepts secret keys)
export function resolveSafePublicRazorpayKeyId(serverKeyId?: string): string {
  const candidateFromServer = (serverKeyId || '').trim();
  if (
    candidateFromServer.startsWith('rzp_live_') ||
    candidateFromServer.startsWith('rzp_test_')
  ) {
    return candidateFromServer;
  }

  const envKey = String(
    (import.meta as any).env?.VITE_RAZORPAY_KEY_ID || ''
  ).trim();
  if (envKey.startsWith('rzp_live_') || envKey.startsWith('rzp_test_')) {
    return envKey;
  }

  return '';
}

// 1. Fetch public Razorpay configuration from server
export async function getRazorpayConfig(): Promise<RazorpayConfigResponse> {
  try {
    const res = await fetchWithTimeout('/api/razorpay/config', {}, 10000);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    const keyId = resolveSafePublicRazorpayKeyId(data?.keyId);
    const isLive = keyId.startsWith('rzp_live_');
    return {
      ...data,
      keyId,
      isLive,
      mode: isLive ? 'LIVE' : 'TEST'
    };
  } catch (error) {
    console.info('[Razorpay] Config check notice:', error);
    const keyId = resolveSafePublicRazorpayKeyId();
    const isLive = keyId.startsWith('rzp_live_');
    return {
      success: Boolean(keyId),
      keyId,
      isLive,
      mode: isLive ? 'LIVE' : 'TEST',
      configured: Boolean(keyId),
      currency: 'INR'
    };
  }
}

// 2. Request backend LIVE order creation (enforces server-side ₹49 / 4900 paise & ₹99 / 9900 paise pricing)
export async function createRazorpayOrder(
  student: StudentProfile,
  planId: 'basic' | 'premium'
): Promise<CreateOrderResponse> {
  const payload = {
    planId,
    studentId: student.id,
    studentName: student.name,
    email: student.email,
    mobile: student.mobile
  };

  console.info(
    `[Razorpay] Creating LIVE order for plan '${planId}' (₹${planId === 'premium' ? 99 : 49} / ${planId === 'premium' ? 9900 : 4900} paise)...`
  );

  const res = await fetchWithTimeout(
    '/api/razorpay/create-order',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    },
    15000
  );

  let data: any = null;
  try {
    data = await res.json();
  } catch {
    throw new Error(
      `Payment server returned an invalid response (HTTP ${res.status}). Please retry.`
    );
  }

  if (!res.ok || !data?.success || !data?.orderId) {
    const reason =
      data?.error || `Server order creation failed with status ${res.status}`;
    console.info('[Razorpay] Order creation failed:', reason);
    throw new Error(reason);
  }

  const resolvedKeyId = resolveSafePublicRazorpayKeyId(data.keyId);
  if (!resolvedKeyId) {
    throw new Error(
      'Razorpay public Key ID (rzp_live_...) was not returned by the server.'
    );
  }

  console.info(
    `[Razorpay] LIVE order created successfully: ${data.orderId} (${data.amount} paise)`
  );

  return {
    ...data,
    keyId: resolvedKeyId
  };
}

// 3. Cryptographic server-side payment verification
export async function verifyRazorpayPayment(payload: {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
  planId: 'basic' | 'premium';
  studentId: string;
  studentName: string;
  email: string;
  mobile: string;
  method?: string;
  currentExpiresAt?: string;
  referralCode?: string;
}): Promise<VerifyPaymentResponse> {
  try {
    const res = await fetchWithTimeout(
      '/api/razorpay/verify-payment',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      },
      15000
    );

    const data = await res.json().catch(() => ({
      success: false,
      error: 'Invalid verification response from server.'
    }));

    if (!res.ok || !data?.success) {
      return {
        success: false,
        error: data?.error || 'Server rejected payment signature verification.'
      };
    }

    return data;
  } catch (err: any) {
    return {
      success: false,
      error:
        err?.message ||
        'Network error while verifying payment with server. If amount was debited, your plan will be activated automatically via webhook.'
    };
  }
}

// 4. Singleton Razorpay Checkout Script Loader (loads once, never hangs)
let razorpayScriptLoadPromise: Promise<boolean> | null = null;

export function loadRazorpayScript(): Promise<boolean> {
  if (
    typeof window !== 'undefined' &&
    typeof (window as any).Razorpay === 'function'
  ) {
    return Promise.resolve(true);
  }

  if (razorpayScriptLoadPromise) {
    return razorpayScriptLoadPromise;
  }

  razorpayScriptLoadPromise = new Promise<boolean>((resolve) => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      razorpayScriptLoadPromise = null;
      return resolve(false);
    }

    if (typeof (window as any).Razorpay === 'function') {
      return resolve(true);
    }

    let settled = false;
    const finish = (ok: boolean, reason?: string) => {
      if (settled) return;
      settled = true;
      if (!ok) {
        console.info(
          '[Razorpay] Checkout script load failed:',
          reason || 'unknown'
        );
        razorpayScriptLoadPromise = null;
      }
      resolve(ok);
    };

    const injectFreshScript = () => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      const timer = setTimeout(() => {
        finish(
          typeof (window as any).Razorpay === 'function',
          'Timed out loading https://checkout.razorpay.com/v1/checkout.js'
        );
      }, 8000);

      script.onload = () => {
        clearTimeout(timer);
        finish(
          typeof (window as any).Razorpay === 'function',
          'Script loaded but window.Razorpay is undefined'
        );
      };
      script.onerror = () => {
        clearTimeout(timer);
        finish(false, 'Network error loading checkout.razorpay.com');
      };
      document.head.appendChild(script);
    };

    const existingScript = document.querySelector(
      'script[src^="https://checkout.razorpay.com/v1/checkout.js"]'
    ) as HTMLScriptElement | null;

    if (existingScript) {
      // Poll briefly in case the script in index.html is still finishing execution
      let elapsed = 0;
      const pollInterval = setInterval(() => {
        elapsed += 100;
        if (typeof (window as any).Razorpay === 'function') {
          clearInterval(pollInterval);
          finish(true);
        } else if (elapsed >= 2500) {
          clearInterval(pollInterval);
          // Existing script tag did not expose window.Razorpay; inject a fresh one
          injectFreshScript();
        }
      }, 100);

      existingScript.addEventListener(
        'load',
        () => {
          if (typeof (window as any).Razorpay === 'function') {
            clearInterval(pollInterval);
            finish(true);
          }
        },
        { once: true }
      );
      existingScript.addEventListener(
        'error',
        () => {
          clearInterval(pollInterval);
          injectFreshScript();
        },
        { once: true }
      );
      return;
    }

    injectFreshScript();
  });

  return razorpayScriptLoadPromise;
}

// Active Razorpay checkout instance reference (never remove .razorpay-container from DOM!)
let activeRazorpayInstance: any = null;

function closeExistingRazorpayInstance() {
  if (activeRazorpayInstance) {
    try {
      if (typeof activeRazorpayInstance.close === 'function') {
        activeRazorpayInstance.close();
      }
    } catch {
      // Ignore close error on stale instance
    }
    activeRazorpayInstance = null;
  }
  try {
    if (typeof document !== 'undefined' && document.body) {
      document.body.style.overflow = '';
    }
  } catch {
    // Ignore style reset error
  }
}

// 5. Open Official Razorpay Standard Checkout Modal
export async function launchRazorpayCheckout(options: {
  orderData: CreateOrderResponse;
  student: StudentProfile;
  planId: 'basic' | 'premium';
  referralCode?: string;
  onCheckoutOpened?: () => void;
  onVerifyingStart?: () => void;
  onSuccess: (verifyResult: VerifyPaymentResponse) => void;
  onFailure: (errorMessage: string, metadata?: { isDomainMismatch?: boolean; reasonCode?: string; orderId?: string }) => void;
}): Promise<void> {
  const {
    orderData,
    student,
    planId,
    referralCode,
    onCheckoutOpened,
    onVerifyingStart,
    onSuccess,
    onFailure
  } = options;

  const isLoaded = await loadRazorpayScript();
  const RazorpayConstructor =
    typeof window !== 'undefined' ? (window as any).Razorpay : undefined;

  if (!isLoaded || typeof RazorpayConstructor !== 'function') {
    const msg =
      'Razorpay Checkout SDK (checkout.razorpay.com) could not be loaded. Please check your internet connection or ad-blocker settings and try again.';
    console.info('[Razorpay Checkout] Failed to open:', msg);
    onFailure(msg, { reasonCode: 'script_load_failed', orderId: orderData.orderId });
    return;
  }

  const resolvedPublicKeyId = resolveSafePublicRazorpayKeyId(orderData.keyId);
  if (!resolvedPublicKeyId) {
    const msg =
      'Missing valid Razorpay LIVE Key ID. Cannot initialize checkout.';
    console.info('[Razorpay Checkout] Failed to open:', msg);
    onFailure(msg, { reasonCode: 'missing_key_id', orderId: orderData.orderId });
    return;
  }

  if (!orderData.orderId || !String(orderData.orderId).startsWith('order_')) {
    const msg = `Invalid Razorpay Order ID (${orderData.orderId || 'empty'}). Please retry payment.`;
    console.info('[Razorpay Checkout] Failed to open:', msg);
    onFailure(msg, { reasonCode: 'invalid_order_id', orderId: orderData.orderId });
    return;
  }

  const planTitle =
    planId === 'premium'
      ? 'PREMIUM PLAN – ₹99 – 90 Days'
      : 'STANDARD PLAN – ₹49 – 90 Days';
  const planAmountPaise = planId === 'premium' ? 9900 : 4900;

  // Sanitize prefill fields so Razorpay Live Checkout never fails prefill validation
  const cleanDigits = (student.mobile || '').replace(/\D/g, '').slice(-10);
  const prefill: Record<string, string> = {};
  if (student.name && student.name.trim()) {
    prefill.name = student.name.trim();
  }
  if (
    student.email &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(student.email.trim())
  ) {
    prefill.email = student.email.trim();
  }
  if (cleanDigits.length === 10) {
    prefill.contact = `+91${cleanDigits}`;
  }

  // Ensure any previous Razorpay modal instance is cleanly closed before creating a new one
  closeExistingRazorpayInstance();

  let hasSettled = false;

  const rzpOptions: Record<string, any> = {
    key: resolvedPublicKeyId,
    amount: Number(orderData.amount) || planAmountPaise, // in paise (4900 or 9900)
    currency: orderData.currency || 'INR',
    name: 'Vacation Champions',
    description: `${planTitle} • ${student.name}`,
    order_id: orderData.orderId,
    prefill,
    notes: {
      studentId: String(student.id),
      studentName: String(student.name),
      classLevel: String(student.classLevel),
      planId: String(planId),
      subscriptionTier: planId === 'premium' ? 'premium' : 'standard',
      validityDays: '90',
      referralCode: referralCode || ''
    },
    retry: {
      enabled: true,
      max_count: 3
    },
    theme: {
      color: '#ea580c'
    },
    modal: {
      confirm_close: false,
      escape: true,
      backdropclose: false,
      ondismiss: function () {
        activeRazorpayInstance = null;
        if (hasSettled) return;
        hasSettled = true;
        console.info(
          `[Razorpay Checkout] Dismissed by user for order ${orderData.orderId}`
        );
        fetch('/api/razorpay/payment-failed', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            orderId: orderData.orderId,
            paymentId: `cancelled_${Date.now()}`,
            planId,
            studentId: student.id,
            studentName: student.name,
            email: student.email,
            mobile: student.mobile,
            reason: 'Payment window closed by user before completing payment'
          })
        }).catch(() => {});
        onFailure(
          'Payment was cancelled before completion. Your account was not charged and the paid plan was not activated. You can click Retry Payment anytime.',
          { reasonCode: 'user_cancelled', orderId: orderData.orderId }
        );
      }
    },
    handler: async function (response: {
      razorpay_payment_id: string;
      razorpay_order_id: string;
      razorpay_signature: string;
    }) {
      activeRazorpayInstance = null;
      if (hasSettled) return;
      hasSettled = true;
      console.info('[Razorpay Checkout] Payment completed, verifying signature on backend:', {
        orderId: response.razorpay_order_id || orderData.orderId,
        paymentId: response.razorpay_payment_id
      });

      if (onVerifyingStart) {
        onVerifyingStart();
      }

      try {
        const verifyRes = await verifyRazorpayPayment({
          razorpay_order_id: response.razorpay_order_id || orderData.orderId,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          planId,
          studentId: student.id,
          studentName: student.name,
          email: student.email,
          mobile: student.mobile,
          currentExpiresAt: student.planExpiresAt,
          referralCode
        });

        if (verifyRes.success) {
          onSuccess(verifyRes);
        } else {
          const reason =
            verifyRes.error ||
            'Payment signature could not be verified by server.';
          console.info('[Razorpay Checkout] Backend verification rejected:', reason);
          onFailure(reason, {
            reasonCode: 'verification_failed',
            orderId: orderData.orderId
          });
        }
      } catch (err: any) {
        const reason =
          err?.message ||
          'Error occurred while contacting payment verification server.';
        console.info('[Razorpay Checkout] Verification exception:', reason);
        onFailure(reason, {
          reasonCode: 'verification_exception',
          orderId: orderData.orderId
        });
      }
    }
  };

  try {
    console.info(
      `[Razorpay Checkout] Opening Razorpay LIVE modal for Order ${orderData.orderId} (₹${planId === 'premium' ? 99 : 49} / ${planAmountPaise} paise)`
    );
    const razorpayInstance = new RazorpayConstructor(rzpOptions);
    activeRazorpayInstance = razorpayInstance;

    razorpayInstance.on('payment.failed', function (response: any) {
      if (hasSettled) return;
      hasSettled = true;

      const reasonCode = String(response?.error?.reason || 'payment_failed').toLowerCase();
      const desc =
        response?.error?.description ||
        response?.error?.reason ||
        'Payment was declined by bank or UPI provider';
      const isDomainMismatch =
        reasonCode === 'payment_risk_check_failed' ||
        String(desc).toLowerCase().includes('website does not match') ||
        String(desc).toLowerCase().includes('registered website');

      console.info('[Razorpay Checkout] payment.failed event:', {
        code: response?.error?.code,
        reason: reasonCode,
        description: desc,
        step: response?.error?.step,
        orderId: orderData.orderId
      });

      closeExistingRazorpayInstance();

      const failedPaymentId =
        response?.error?.metadata?.payment_id || `pay_failed_${Date.now()}`;
      const failedOrderId =
        response?.error?.metadata?.order_id || orderData.orderId;

      fetch('/api/razorpay/payment-failed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId: failedOrderId,
          paymentId: failedPaymentId,
          planId,
          studentId: student.id,
          studentName: student.name,
          email: student.email,
          mobile: student.mobile,
          reason: desc
        })
      }).catch(() => {});

      onFailure(
        `Payment Failed: ${desc}. Subscription was not activated.`,
        {
          isDomainMismatch,
          reasonCode,
          orderId: failedOrderId
        }
      );
    });

    razorpayInstance.open();
    if (onCheckoutOpened) {
      onCheckoutOpened();
    }
  } catch (err: any) {
    activeRazorpayInstance = null;
    const reason =
      err?.message || 'Razorpay Checkout window failed to initialize.';
    console.info('[Razorpay Checkout] Exception calling razorpayInstance.open():', reason);
    onFailure(`Could not open Razorpay Checkout: ${reason}`, {
      reasonCode: 'open_exception',
      orderId: orderData.orderId
    });
  }
}

// Backwards-compatible paymentGateway bridge
export const paymentGateway = {
  createOrder(student: StudentProfile, planId: 'basic' | 'premium') {
    const amount = planId === 'basic' ? 49 : 99;
    const receiptNumber = `REC-VC-${Date.now().toString().slice(-6)}`;
    const orderId = `order_vc_${Date.now()}_${Math.floor(Math.random() * 899 + 100)}`;
    return { orderId, amount, receiptNumber };
  },

  processAndVerify(
    student: StudentProfile,
    planId: 'basic' | 'premium',
    orderId: string,
    receiptNumber: string,
    method: 'UPI' | 'Card' | 'NetBanking' | string = 'UPI',
    simulateFailure: boolean = false
  ): { success: boolean; transaction: PaymentTransaction; error?: string } {
    const amount = planId === 'basic' ? 49 : 99;
    const paymentId = `pay_vc_${Date.now().toString().slice(-8)}${Math.floor(Math.random() * 89 + 10)}`;

    if (simulateFailure) {
      const failedTx: PaymentTransaction = {
        id: `tx_${Date.now()}`,
        receiptNumber,
        studentId: student.id,
        studentName: student.name,
        parentEmail: student.email,
        parentMobile: student.mobile,
        planId,
        planTitle:
          planId === 'basic'
            ? 'STANDARD PLAN – ₹49 – 90 Days'
            : 'PREMIUM PLAN – ₹99 – 90 Days',
        amount,
        currency: 'INR',
        orderId,
        paymentId: 'failed_' + paymentId,
        signature: 'invalid_sig',
        method,
        status: 'FAILED',
        createdAt: new Date().toISOString()
      };
      return {
        success: false,
        transaction: failedTx,
        error: 'Payment declined by bank issuer.'
      };
    }

    const successfulTx: PaymentTransaction = {
      id: `tx_${Date.now()}`,
      receiptNumber,
      studentId: student.id,
      studentName: student.name,
      parentEmail: student.email,
      parentMobile: student.mobile,
      planId,
      planTitle:
        planId === 'basic'
          ? 'STANDARD PLAN – ₹49 – 90 Days'
          : 'PREMIUM PLAN – ₹99 – 90 Days',
      amount,
      currency: 'INR',
      orderId,
      paymentId,
      signature: 'verified_sig_' + orderId,
      method,
      status: 'SUCCESS',
      createdAt: new Date().toISOString(),
      membershipStartDate: new Date().toISOString().split('T')[0],
      membershipExpiryDate: new Date(
        Date.now() + 90 * 24 * 60 * 60 * 1000
      )
        .toISOString()
        .split('T')[0]
    };

    return {
      success: true,
      transaction: successfulTx
    };
  }
};
