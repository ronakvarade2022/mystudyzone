import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { PaymentTransaction } from '../types';
import { 
  getRazorpayConfig, 
  createRazorpayOrder, 
  launchRazorpayCheckout,
  verifyRazorpayPayment,
  RazorpayConfigResponse
} from '../services/paymentService';
import confetti from 'canvas-confetti';
import { referralService } from '../services/referralService';
import { 
  Crown, 
  Check, 
  ShieldCheck, 
  X, 
  Download, 
  AlertCircle,
  Lock,
  ArrowRight,
  RotateCcw,
  Printer,
  Sparkles,
  ExternalLink,
  Gift,
  Tag
} from 'lucide-react';

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: 'basic' | 'premium';
}

export const MembershipModal: React.FC<MembershipModalProps> = ({ 
  isOpen, 
  onClose,
  defaultPlan = 'premium'
}) => {
  const { 
    currentStudent, 
    activateVerifiedMembership, 
    openAuthModal, 
    setActiveRole 
  } = useApp();

  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium'>(defaultPlan);
  const [paymentStep, setPaymentStep] = useState<'plans' | 'initiating' | 'success' | 'failed'>('plans');
  const [completedTx, setCompletedTx] = useState<PaymentTransaction | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [rzpConfig, setRzpConfig] = useState<RazorpayConfigResponse | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Referral Code State
  const [referralCodeInput, setReferralCodeInput] = useState<string>('');
  const [appliedReferral, setAppliedReferral] = useState<string>('');
  const [referralValidation, setReferralValidation] = useState<{
    valid: boolean;
    message?: string;
    referrerName?: string;
    cashbackAmount?: number;
    error?: string;
  } | null>(null);
  const [validatingReferral, setValidatingReferral] = useState<boolean>(false);
  const [referralCashbackCredited, setReferralCashbackCredited] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      getRazorpayConfig().then(setRzpConfig).catch(console.error);
      setSelectedPlan(defaultPlan);
      setPaymentStep('plans');
      setErrorMessage('');
      setCompletedTx(null);
      setReferralCashbackCredited(null);

      // Auto-detect referral code from URL if present (?ref=...)
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const refParam = urlParams.get('ref');
        if (refParam) {
          setReferralCodeInput(refParam.toUpperCase());
          handleValidateReferral(refParam.toUpperCase());
        }
      } catch (e) {}
    }
  }, [isOpen, defaultPlan]);

  const handleValidateReferral = async (codeToTest?: string) => {
    const code = (codeToTest || referralCodeInput).trim().toUpperCase();
    if (!code) return;

    setValidatingReferral(true);
    try {
      const res = await referralService.validateCode(code, currentStudent?.id);
      if (res.valid) {
        setAppliedReferral(code);
        setReferralValidation({
          valid: true,
          referrerName: res.referrerName,
          cashbackAmount: selectedPlan === 'premium' ? 10 : 5,
          message: res.message
        });
      } else {
        setAppliedReferral('');
        setReferralValidation({
          valid: false,
          error: res.error || 'Invalid referral code.'
        });
      }
    } catch (err: any) {
      setReferralValidation({
        valid: false,
        error: 'Could not validate referral code at this moment.'
      });
    } finally {
      setValidatingReferral(false);
    }
  };

  if (!isOpen) return null;

  // 1. Initiate Razorpay Standard Checkout Flow
  const handleStartCheckout = async (planId: 'basic' | 'premium') => {
    if (!currentStudent) {
      onClose();
      openAuthModal();
      return;
    }

    setSelectedPlan(planId);
    setIsProcessing(true);
    setPaymentStep('initiating');
    setErrorMessage('');

    try {
      // Step A: Server-authoritative Order Creation
      const orderData = await createRazorpayOrder(currentStudent, planId);
      const activeRefCode = appliedReferral || referralCodeInput.trim().toUpperCase() || undefined;

      // Step B: Launch Official Razorpay Checkout Modal
      await launchRazorpayCheckout({
        orderData,
        student: currentStudent,
        planId,
        referralCode: activeRefCode,
        onSuccess: (verifyResult) => {
          setIsProcessing(false);
          if (verifyResult.success && verifyResult.transaction) {
            activateVerifiedMembership(verifyResult.transaction, verifyResult.membership?.expiryDate);
            setCompletedTx(verifyResult.transaction);
            if (verifyResult.referral?.credited) {
              setReferralCashbackCredited(verifyResult.referral.buyerReward || (planId === 'premium' ? 10 : 5));
            }
            setPaymentStep('success');
            try {
              confetti({ particleCount: 90, spread: 70 });
            } catch (e) {}
          } else {
            setErrorMessage(verifyResult.error || 'Server payment verification failed.');
            setPaymentStep('failed');
          }
        },
        onFailure: (errorText) => {
          setIsProcessing(false);
          setErrorMessage(errorText);
          setPaymentStep('failed');
        }
      });
    } catch (err: any) {
      console.error('[Checkout Start Error]:', err);
      setIsProcessing(false);
      setErrorMessage(err.message || 'Unable to connect to Razorpay payment service.');
      setPaymentStep('failed');
    }
  };

  // 2. Instant Development Sandbox Verification (for testing when live credentials are in sandbox)
  const handleTestSandboxPayment = async (planId: 'basic' | 'premium', forceDecline = false) => {
    if (!currentStudent) return;
    setIsProcessing(true);
    setPaymentStep('initiating');

    try {
      if (forceDecline) {
        setTimeout(() => {
          setIsProcessing(false);
          setErrorMessage('Card declined by issuing bank (Test Simulation: Insufficient Funds / Invalid OTP).');
          setPaymentStep('failed');
        }, 800);
        return;
      }

      // Create order on server
      const orderData = await createRazorpayOrder(currentStudent, planId);
      const testPaymentId = `pay_test_${Date.now().toString().slice(-8)}`;
      const testSignature = `sig_test_${Date.now().toString(16)}`;
      const activeRefCode = appliedReferral || referralCodeInput.trim().toUpperCase() || undefined;

      // Verify on server
      const verifyRes = await verifyRazorpayPayment({
        razorpay_order_id: orderData.orderId,
        razorpay_payment_id: testPaymentId,
        razorpay_signature: testSignature,
        planId,
        studentId: currentStudent.id,
        studentName: currentStudent.name,
        email: currentStudent.email,
        mobile: currentStudent.mobile,
        method: 'UPI',
        currentExpiresAt: currentStudent.planExpiresAt,
        referralCode: activeRefCode
      });

      setIsProcessing(false);
      if (verifyRes.success && verifyRes.transaction) {
        activateVerifiedMembership(verifyRes.transaction, verifyRes.membership?.expiryDate);
        setCompletedTx(verifyRes.transaction);
        if (verifyRes.referral?.credited) {
          setReferralCashbackCredited(verifyRes.referral.buyerReward || (planId === 'premium' ? 10 : 5));
        }
        setPaymentStep('success');
        try {
          confetti({ particleCount: 90, spread: 70 });
        } catch (e) {}
      } else {
        setErrorMessage(verifyRes.error || 'Verification declined.');
        setPaymentStep('failed');
      }
    } catch (err: any) {
      setIsProcessing(false);
      setErrorMessage(err.message || 'Payment processing error.');
      setPaymentStep('failed');
    }
  };

  const handlePrintConfirmation = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-amber-300 overflow-hidden animate-in zoom-in-95 my-8">
        
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white p-6 sm:p-7 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-200 uppercase tracking-wider mb-1">
              <Crown className="w-4 h-4 text-amber-200" />
              <span>Official Champion Learning Memberships</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight">
              Razorpay Live Payment Gateway
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* STEP 1: PLANS SELECTION & PRICING VIEW */}
        {paymentStep === 'plans' && (
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Student UID & Class Binding Banner */}
            {currentStudent ? (
              <div className="bg-amber-50/80 rounded-2xl border border-amber-300 p-4 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                      {currentStudent.avatar || '🎓'}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                        <span>{currentStudent.name}</span>
                        <span className="text-[11px] font-bold bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Lock className="w-3 h-3 text-amber-700" />
                          {currentStudent.classLevel}
                        </span>
                      </h4>
                      <p className="text-[11px] font-mono text-slate-600">
                        UID: <span className="text-amber-950 font-bold">{currentStudent.id}</span> • Registered: {currentStudent.email}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                      Authenticated Student
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-amber-200/80 text-[11px] text-amber-950 flex items-start gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Strict 30-Day Individual Membership:</strong> This purchase activates exclusively for <strong>{currentStudent.name}</strong> (UID: <code className="bg-white/80 px-1 py-0.5 rounded font-mono">{currentStudent.id}</code>). If you have an active plan, remaining days are preserved and extended by 30 days.
                  </span>
                </div>
              </div>
            ) : (
              <div className="bg-rose-50 border border-rose-300 rounded-2xl p-4 text-xs text-rose-900 flex items-center justify-between">
                <span>Please sign in with a registered student account to purchase a membership.</span>
                <button
                  onClick={() => { onClose(); openAuthModal(); }}
                  className="px-3 py-1.5 rounded-xl bg-rose-600 text-white font-bold"
                >
                  Sign In
                </button>
              </div>
            )}

            {/* Gateway Status Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-xs">
              <div className="flex items-center gap-2 text-slate-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Standard Razorpay Live Checkout (UPI, Debit/Credit Cards, Net Banking)</span>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                rzpConfig?.isLive 
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                  : 'bg-amber-100 text-amber-900 border border-amber-300'
              }`}>
                {rzpConfig?.isLive ? '● Live Merchant Mode' : '● Razorpay Sandbox Mode'}
              </span>
            </div>

            {/* Have a Referral Code? Claim Instant Cashback Box */}
            <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200 rounded-2xl p-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Gift className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-xs text-gray-900 flex items-center gap-1.5">
                      <span>Have a Referral Code?</span>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        Get ₹5 (Basic) or ₹10 (Premium) Cashback!
                      </span>
                    </h5>
                    <p className="text-[11px] text-gray-600">
                      Enter your friend&apos;s or teacher&apos;s ambassador code to receive wallet cashback.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Tag className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={referralCodeInput}
                      onChange={(e) => setReferralCodeInput(e.target.value.toUpperCase())}
                      placeholder="e.g. VC-STU-AARAV4"
                      className="pl-8 pr-3 py-1.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 font-mono text-xs uppercase w-44 font-bold"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => handleValidateReferral()}
                    disabled={validatingReferral || !referralCodeInput.trim()}
                    className="px-3.5 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {validatingReferral ? 'Checking...' : appliedReferral ? 'Applied' : 'Apply'}
                  </button>
                </div>
              </div>

              {referralValidation && (
                <div className={`mt-2.5 text-xs font-medium flex items-center space-x-1.5 ${
                  referralValidation.valid ? 'text-emerald-700' : 'text-red-600'
                }`}>
                  {referralValidation.valid ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{referralValidation.message}</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{referralValidation.error}</span>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Plans Grid: Exactly Two Plans */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* PLAN 1: CHAMPION BASIC – ₹49 */}
              <div className="rounded-3xl border-2 border-amber-200 bg-amber-50/40 p-6 flex flex-col justify-between space-y-6 hover:border-amber-400 transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-200/80 px-2.5 py-0.5 rounded-full">
                      Plan 1 • 30 Days
                    </span>
                    <span className="text-[11px] font-bold text-slate-500">Duration: 30 Days</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-display font-extrabold text-slate-900">
                      CHAMPION BASIC
                    </h3>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-3xl font-extrabold text-slate-900">₹49</span>
                      <span className="text-xs text-slate-500 font-medium">/ 30 days</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Access to core learning programme</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Subject-wise quizzes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Daily challenges and brain games</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Story World access (45 audio stories)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Basic performance reports for parents</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Points, streak tracking and badges</span>
                    </li>
                  </ul>
                </div>

                {/* EXACT REQUIRED BUTTON: Choose Basic Plan (₹49) */}
                <button
                  type="button"
                  onClick={() => handleStartCheckout('basic')}
                  disabled={isProcessing || !currentStudent}
                  className="w-full py-3.5 rounded-2xl bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Choose Basic Plan (₹49)</span>
                </button>
              </div>

              {/* PLAN 2: CHAMPION PREMIUM – ₹99 (RECOMMENDED) */}
              <div className="relative rounded-3xl border-2 border-orange-500 bg-gradient-to-b from-orange-50/90 to-amber-50/50 p-6 flex flex-col justify-between space-y-6 shadow-lg shadow-orange-500/10 hover:border-orange-600 transition-all">
                <span className="absolute -top-3 right-6 bg-gradient-to-r from-orange-600 to-amber-600 text-white text-[10px] font-extrabold uppercase px-3.5 py-0.5 rounded-full shadow-xs tracking-wider">
                  ⭐ RECOMMENDED • FULL SUITE
                </span>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-950 bg-orange-200/90 px-2.5 py-0.5 rounded-full">
                      Plan 2 • All Features
                    </span>
                    <span className="text-[11px] font-bold text-orange-800">Duration: 30 Days</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-display font-extrabold text-slate-900">
                      CHAMPION PREMIUM
                    </h3>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-3xl font-extrabold text-orange-700">₹99</span>
                      <span className="text-xs text-slate-500 font-medium">/ 30 days</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-800 font-medium">
                    <li className="flex items-center gap-2 font-bold text-orange-950">
                      <Check className="w-4 h-4 text-orange-600 shrink-0" />
                      <span>Everything included in Champion Basic</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-orange-600 shrink-0" />
                      <span>Daily Cricket Current Affairs (4 levels)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-orange-600 shrink-0" />
                      <span>Maharashtra MSCE Scholarship preparation (Std 4th and 7th)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-orange-600 shrink-0" />
                      <span>All 10 practice tests across 7 official MSCE languages</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-orange-600 shrink-0" />
                      <span>Complete Story Audio with Natural Indian Voices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-orange-600 shrink-0" />
                      <span>Instant Official Payment Confirmation Document</span>
                    </li>
                  </ul>
                </div>

                {/* EXACT REQUIRED BUTTON: Choose Premium Plan (₹99) */}
                <button
                  type="button"
                  onClick={() => handleStartCheckout('premium')}
                  disabled={isProcessing || !currentStudent}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 active:from-orange-800 active:to-amber-800 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Choose Premium Plan (₹99)</span>
                </button>
              </div>
            </div>

            {/* Test Simulation Controls (for developer / sandbox verification) */}
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="text-slate-600">
                <p className="font-bold text-slate-800">Developer Testing Sandbox</p>
                <p className="text-[11px]">Instant server verification simulation for evaluation:</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleTestSandboxPayment('basic', false)}
                  className="px-3 py-1 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-[11px] cursor-pointer"
                >
                  Test ₹49 Success
                </button>
                <button
                  type="button"
                  onClick={() => handleTestSandboxPayment('premium', false)}
                  className="px-3 py-1 rounded-xl bg-orange-100 hover:bg-orange-200 text-orange-900 font-bold text-[11px] cursor-pointer"
                >
                  Test ₹99 Success
                </button>
                <button
                  type="button"
                  onClick={() => handleTestSandboxPayment('premium', true)}
                  className="px-3 py-1 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-900 font-bold text-[11px] cursor-pointer"
                >
                  Test Decline
                </button>
              </div>
            </div>

          </div>
        )}

        {/* STEP 2: INITIATING CHECKOUT OVERLAY */}
        {paymentStep === 'initiating' && (
          <div className="p-12 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-3xl animate-spin">
              ⏳
            </div>
            <h3 className="text-xl font-display font-extrabold text-slate-900">
              Opening Razorpay Secure Checkout...
            </h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Contacting server to generate verified Razorpay order for {selectedPlan === 'premium' ? '₹99' : '₹49'}. Please complete payment in the Razorpay window.
            </p>
          </div>
        )}

        {/* STEP 3: EXACT REQUIRED PAYMENT SUCCESS PAGE (Section 8) */}
        {paymentStep === 'success' && completedTx && (
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Header: Congratulations! Payment Successful */}
            <div className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl shadow-sm">
                ✅
              </div>
              <h3 className="text-2xl font-display font-extrabold text-slate-900">
                Congratulations! Payment Successful
              </h3>
              <p className="text-sm font-medium text-slate-700">
                Your Champion Learning membership has been activated successfully.
              </p>
            </div>

            {/* Required Payment Details Card */}
            <div className="bg-amber-50/70 p-6 rounded-3xl border-2 border-amber-300 space-y-4 text-xs">
              <div className="flex items-center justify-between border-b border-amber-200 pb-3">
                <span className="font-sans font-extrabold text-sm text-amber-950 uppercase tracking-wider">
                  PAYMENT CONFIRMATION
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-[11px] border border-emerald-300">
                  {completedTx.status}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-slate-700">
                <div>
                  <p className="text-slate-400 text-[10px] uppercase font-bold">Student Name</p>
                  <p className="font-extrabold text-sm text-slate-900">{completedTx.studentName}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] uppercase font-bold">Student Account ID</p>
                  <p className="font-mono font-bold text-slate-900">{completedTx.studentId}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] uppercase font-bold">Selected Plan</p>
                  <p className="font-extrabold text-sm text-amber-900">{completedTx.planTitle}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] uppercase font-bold">Amount Paid</p>
                  <p className="font-extrabold text-base text-slate-900">₹{completedTx.amount}.00 INR</p>
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] uppercase font-bold">Razorpay Payment ID</p>
                  <p className="font-mono font-bold text-slate-900 text-[11px]">{completedTx.paymentId}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] uppercase font-bold">Razorpay Order ID</p>
                  <p className="font-mono font-bold text-slate-900 text-[11px]">{completedTx.orderId}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] uppercase font-bold">Membership Start Date</p>
                  <p className="font-bold text-slate-900">{completedTx.membershipStartDate || new Date().toISOString().split('T')[0]}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] uppercase font-bold">Membership Expiry Date</p>
                  <p className="font-bold text-emerald-700">{completedTx.membershipExpiryDate || '30 days from activation'}</p>
                </div>
                {referralCashbackCredited && (
                  <div className="col-span-1 sm:col-span-2 p-3 bg-emerald-100/90 border border-emerald-300 rounded-2xl flex items-center justify-between text-emerald-900">
                    <div className="flex items-center space-x-2">
                      <Gift className="w-5 h-5 text-emerald-700" />
                      <div>
                        <div className="font-extrabold text-xs">₹{referralCashbackCredited} Referral Cashback Credited!</div>
                        <div className="text-[11px] text-emerald-800">Added to your Vacation Champions Referral Wallet.</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider bg-white px-2 py-0.5 rounded-full text-emerald-800 border border-emerald-300">
                      CASHBACK ACTIVE
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Required Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={handlePrintConfirmation}
                className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save Confirmation</span>
              </button>

              {/* EXACT REQUIRED BUTTON: Start Learning Now */}
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Start Learning Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: EXACT REQUIRED PAYMENT FAILURE PAGE (Section 9) */}
        {paymentStep === 'failed' && (
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-3xl shadow-sm">
              ❌
            </div>

            <div className="space-y-2">
              {/* EXACT REQUIRED HEADING */}
              <h3 className="text-2xl font-display font-extrabold text-slate-900">
                Payment Not Completed
              </h3>
              {/* EXACT REQUIRED MESSAGE */}
              <p className="text-sm font-medium text-rose-700">
                Your payment could not be completed. No membership has been activated.
              </p>
              {errorMessage && (
                <p className="text-xs text-slate-500 max-w-md mx-auto bg-slate-50 p-3 rounded-xl border border-slate-200">
                  Reason: {errorMessage}
                </p>
              )}
            </div>

            {/* EXACT REQUIRED BUTTONS: Try Again & Return to Learning Dashboard */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setPaymentStep('plans')}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs shadow-md cursor-pointer transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Try Again</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer transition-all"
              >
                <span>Return to Learning Dashboard</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
