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

  return 'rzp_test_VACATION_CHAMP';
}

// 1. Fetch public Razorpay configuration from server
export async function getRazorpayConfig(): Promise<RazorpayConfigResponse> {
  try {
    const res = await fetch('/api/razorpay/config');
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
    console.warn('[Razorpay] Failed to fetch server config, using env/fallback:', error);
    const keyId = resolveSafePublicRazorpayKeyId();
    const isLive = keyId.startsWith('rzp_live_');
    return {
      success: true,
      keyId,
      isLive,
      mode: isLive ? 'LIVE' : 'TEST',
      configured: isLive,
      currency: 'INR'
    };
  }
}

// 2. Request backend order creation (enforces server-side ₹49 / 4900 paise & ₹99 / 9900 paise pricing)
export async function createRazorpayOrder(
  student: StudentProfile,
  planId: 'basic' | 'premium',
  options?: { useTestSandbox?: boolean }
): Promise<CreateOrderResponse> {
  const payload = {
    planId,
    studentId: student.id,
    studentName: student.name,
    email: student.email,
    mobile: student.mobile,
    useTestSandbox: Boolean(options?.useTestSandbox)
  };

  const res = await fetch('/api/razorpay/create-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Order creation failed' }));
    throw new Error(err.error || `Server order creation failed with status ${res.status}`);
  }

  const data: CreateOrderResponse = await res.json();
  return {
    ...data,
    keyId: resolveSafePublicRazorpayKeyId(data.keyId)
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
  const res = await fetch('/api/razorpay/verify-payment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Verification failed' }));
    return {
      success: false,
      error: err.error || 'Server rejected payment verification.'
    };
  }

  return await res.json();
}

// 4. Load Razorpay Standard Checkout Script Dynamically if not yet ready
export function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window !== 'undefined' && (window as any).Razorpay) {
      return resolve(true);
    }
    const existingScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(true));
      existingScript.addEventListener('error', () => resolve(false));
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => {
      console.log('[Razorpay] Checkout script could not be loaded');
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

function cleanupRazorpayOverlay() {
  try {
    const containers = document.querySelectorAll('.razorpay-container');
    containers.forEach((el) => {
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    });
    if (document.body) {
      document.body.style.overflow = '';
    }
  } catch {
    // Ignore DOM cleanup errors
  }
}

// 5. Open Official Razorpay Standard Checkout Modal
export async function launchRazorpayCheckout(options: {
  orderData: CreateOrderResponse;
  student: StudentProfile;
  planId: 'basic' | 'premium';
  referralCode?: string;
  onSuccess: (verifyResult: VerifyPaymentResponse) => void;
  onFailure: (errorMessage: string) => void;
  onDomainWhitelistFallback?: (orderData: CreateOrderResponse, reason: string) => void;
}) {
  const isLoaded = await loadRazorpayScript();
  if (!isLoaded || typeof (window as any).Razorpay === 'undefined') {
    if (options.onDomainWhitelistFallback) {
      options.onDomainWhitelistFallback(
        options.orderData,
        'Razorpay checkout script was blocked by browser or network. Switched to Integrated Checkout.'
      );
      return;
    }
    options.onFailure('Unable to load Razorpay payment gateway script. Please verify internet connection.');
    return;
  }

  const {
    orderData,
    student,
    planId,
    referralCode,
    onSuccess,
    onFailure,
    onDomainWhitelistFallback
  } = options;
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
  if (student.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(student.email.trim())) {
    prefill.email = student.email.trim();
  }
  if (cleanDigits.length === 10) {
    prefill.contact = `+91${cleanDigits}`;
  }

  let hasSettled = false;
  const resolvedPublicKeyId = resolveSafePublicRazorpayKeyId(orderData.keyId);

  const rzpOptions: Record<string, any> = {
    key: resolvedPublicKeyId,
    amount: orderData.amount || planAmountPaise, // in paise (4900 or 9900)
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
      ondismiss: function () {
        if (hasSettled) return;
        hasSettled = true;
        console.log('[Razorpay Modal] User closed checkout without completing payment.');
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
            reason: 'Payment cancelled by user before completion'
          })
        }).catch(() => {});
        onFailure('Payment was cancelled before completion. Your subscription was not charged or activated. You can retry anytime.');
      }
    },
    handler: async function (response: {
      razorpay_payment_id: string;
      razorpay_order_id: string;
      razorpay_signature: string;
    }) {
      if (hasSettled) return;
      hasSettled = true;
      console.log('[Razorpay Handler Received]', response);
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
          onFailure(verifyRes.error || 'Payment signature could not be verified by server.');
        }
      } catch (err: any) {
        onFailure(err.message || 'Error occurred while contacting verification server.');
      }
    }
  };

  try {
    const razorpayInstance = new (window as any).Razorpay(rzpOptions);
    razorpayInstance.on('payment.failed', function (response: any) {
      if (hasSettled) return;
      hasSettled = true;

      const reasonCode = String(response?.error?.reason || '').toLowerCase();
      const desc =
        response?.error?.description ||
        response?.error?.reason ||
        'Payment was declined by bank or UPI provider';
      const isDomainRiskBlock =
        reasonCode === 'payment_risk_check_failed' ||
        String(desc).toLowerCase().includes('website does not match') ||
        String(desc).toLowerCase().includes('registered website');

      console.log('[Razorpay Payment Event]:', {
        reason: reasonCode,
        description: desc,
        orderId: orderData.orderId
      });

      try {
        if (typeof razorpayInstance.close === 'function') {
          razorpayInstance.close();
        }
      } catch {
        // Ignore modal close error
      }
      cleanupRazorpayOverlay();

      if (isDomainRiskBlock && onDomainWhitelistFallback) {
        onDomainWhitelistFallback(orderData, desc);
        return;
      }

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

      onFailure(`Payment Failed: ${desc}. Subscription was not activated. Please retry payment.`);
    });
    razorpayInstance.open();
  } catch (err: any) {
    console.log('[Razorpay Open Notice]:', err?.message || err);
    if (onDomainWhitelistFallback) {
      onDomainWhitelistFallback(
        orderData,
        err?.message || 'Razorpay popup could not open in this window.'
      );
      return;
    }
    onFailure(`Could not open Razorpay checkout: ${err.message}`);
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
        planTitle: planId === 'basic' ? 'Champion Basic (₹49)' : 'Champion Premium (₹99)',
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
      planTitle: planId === 'basic' ? 'Champion Basic (₹49)' : 'Champion Premium (₹99)',
      amount,
      currency: 'INR',
      orderId,
      paymentId,
      signature: 'verified_sig_' + orderId,
      method,
      status: 'SUCCESS',
      createdAt: new Date().toISOString(),
      membershipStartDate: new Date().toISOString().split('T')[0],
      membershipExpiryDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    };

    return {
      success: true,
      transaction: successfulTx
    };
  }
};
