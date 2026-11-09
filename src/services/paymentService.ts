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
  amount: number; // in paise
  amountRupees: number;
  currency: string;
  keyId: string;
  receiptNumber: string;
  planId: 'basic' | 'premium';
  isMock?: boolean;
  error?: string;
}

export interface VerifyPaymentResponse {
  success: boolean;
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

// 1. Fetch public Razorpay configuration from server
export async function getRazorpayConfig(): Promise<RazorpayConfigResponse> {
  try {
    const res = await fetch('/api/razorpay/config');
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    return await res.json();
  } catch (error) {
    console.warn('[Razorpay] Failed to fetch server config, using fallback:', error);
    return {
      success: true,
      keyId: 'rzp_test_VACATION_CHAMP',
      isLive: false,
      mode: 'TEST',
      configured: false,
      currency: 'INR'
    };
  }
}

// 2. Request backend order creation (enforces server-side ₹49 / ₹99 pricing)
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

  const res = await fetch('/api/razorpay/create-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Order creation failed' }));
    throw new Error(err.error || `Server order creation failed with status ${res.status}`);
  }

  return await res.json();
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
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => {
      console.error('[Razorpay] Failed to load checkout.js');
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

// 5. Open Official Razorpay Standard Checkout Modal
export async function launchRazorpayCheckout(options: {
  orderData: CreateOrderResponse;
  student: StudentProfile;
  planId: 'basic' | 'premium';
  referralCode?: string;
  onSuccess: (verifyResult: VerifyPaymentResponse) => void;
  onFailure: (errorMessage: string) => void;
}) {
  const isLoaded = await loadRazorpayScript();
  if (!isLoaded || typeof (window as any).Razorpay === 'undefined') {
    options.onFailure('Unable to load Razorpay payment gateway script. Please verify internet connection.');
    return;
  }

  const { orderData, student, planId, referralCode, onSuccess, onFailure } = options;
  const planTitle = planId === 'premium' ? 'Champion Premium' : 'Champion Basic';
  const planAmountRupees = planId === 'premium' ? 99 : 49;

  const rzpOptions = {
    key: orderData.keyId,
    amount: orderData.amount, // in paise
    currency: 'INR',
    name: 'Champion Learning',
    description: `${planTitle} (₹${planAmountRupees}) • 30 Days Access for ${student.name}`,
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    order_id: orderData.orderId,
    prefill: {
      name: student.name,
      email: student.email,
      contact: student.mobile ? `+91${student.mobile.replace(/\D/g, '').slice(-10)}` : ''
    },
    notes: {
      studentId: student.id,
      studentName: student.name,
      classLevel: student.classLevel,
      planId,
      referralCode: referralCode || ''
    },
    theme: {
      color: '#ea580c' // Champion Learning primary orange
    },
    modal: {
      ondismiss: function () {
        console.log('[Razorpay Modal] User closed checkout without completing payment.');
        onFailure('Payment was cancelled before completion. No membership was activated.');
      }
    },
    handler: async function (response: {
      razorpay_payment_id: string;
      razorpay_order_id: string;
      razorpay_signature: string;
    }) {
      console.log('[Razorpay Handler Received]', response);
      try {
        const verifyRes = await verifyRazorpayPayment({
          razorpay_order_id: response.razorpay_order_id,
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
      console.error('[Razorpay Payment Failed Callback]:', response.error);
      const desc = response.error?.description || response.error?.reason || 'Payment failed';
      onFailure(`Payment Failed: ${desc} (Code: ${response.error?.code || 'UNKNOWN'})`);
    });
    razorpayInstance.open();
  } catch (err: any) {
    console.error('[Razorpay Open Error]:', err);
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
      membershipExpiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    };

    return {
      success: true,
      transaction: successfulTx
    };
  }
};
