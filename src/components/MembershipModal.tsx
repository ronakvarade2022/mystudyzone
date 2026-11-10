import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  getRazorpayConfig,
  createRazorpayOrder,
  verifyRazorpayPayment,
  launchRazorpayCheckout,
  CreateOrderResponse
} from '../services/paymentService';
import { getStudentPlanInfo } from '../utils/subscriptionAccess';
import {
  X, CheckCircle2, ShieldCheck, Crown, Lock, CreditCard, Smartphone,
  Building2, AlertCircle, Sparkles, RefreshCw
} from 'lucide-react';
import { PaymentTransaction } from '../types';

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSelectedPlan?: 'basic' | 'premium';
}

export const MembershipModal: React.FC<MembershipModalProps> = ({
  isOpen,
  onClose,
  initialSelectedPlan = 'premium'
}) => {
  const { currentStudent, activateVerifiedMembership } = useApp();

  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium'>(initialSelectedPlan);
  const [step, setStep] = useState<'select' | 'checkout' | 'processing' | 'success' | 'failed'>('select');
  const [lastTransaction, setLastTransaction] = useState<PaymentTransaction | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [expiryDateStr, setExpiryDateStr] = useState('');
  const [daysRemainingNum, setDaysRemainingNum] = useState(90);
  const [gatewayMode, setGatewayMode] = useState<'LIVE' | 'TEST'>('TEST');

  // Integrated Checkout State (for preview/test mode or direct UPI/Card/NetBanking verification)
  const [pendingOrder, setPendingOrder] = useState<CreateOrderResponse | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'Card' | 'NetBanking'>('UPI');
  const [upiId, setUpiId] = useState('champion@okaxis');

  useEffect(() => {
    if (isOpen) {
      setSelectedPlan(initialSelectedPlan);
      setStep('select');
      setErrorMsg('');
      getRazorpayConfig().then((cfg) => {
        if (cfg) {
          setGatewayMode(cfg.mode);
        }
      });
    }
  }, [isOpen, initialSelectedPlan]);

  if (!isOpen) return null;

  const planInfo = getStudentPlanInfo(currentStudent);

  // Step 1: Create Server Order & Launch Razorpay (or Integrated Verified Checkout)
  const handleInitiateCheckout = async (planOverride?: 'basic' | 'premium') => {
    const targetPlan = planOverride || selectedPlan;
    setSelectedPlan(targetPlan);

    if (!currentStudent) {
      setErrorMsg('Please sign in to your student account before upgrading your plan.');
      setStep('failed');
      return;
    }

    setStep('processing');
    setErrorMsg('');

    try {
      const orderData = await createRazorpayOrder(currentStudent, targetPlan);

      // If running with mock/test keys in preview environment, open the built-in Razorpay Verified Checkout step
      // so the user can test both Successful Payment Verification and Payment Failure without external key rejection.
      if (orderData.isMock) {
        setPendingOrder(orderData);
        setStep('checkout');
        return;
      }

      await launchRazorpayCheckout({
        orderData,
        student: currentStudent,
        planId: targetPlan,
        onSuccess: (verifyResult) => {
          if (verifyResult.success && verifyResult.transaction) {
            activateVerifiedMembership(
              verifyResult.transaction,
              verifyResult.membership?.expiryDate
            );
            setLastTransaction(verifyResult.transaction);
            setExpiryDateStr(verifyResult.membership?.expiryDate || '');
            setDaysRemainingNum(verifyResult.membership?.daysRemaining || 90);
            setStep('success');
          } else {
            setErrorMsg(
              verifyResult.error ||
                'Payment signature verification failed. Paid plan was not activated.'
            );
            setStep('failed');
          }
        },
        onFailure: (errMessage) => {
          setErrorMsg(errMessage);
          setStep('failed');
        }
      });
    } catch (err: any) {
      setErrorMsg(err?.message || 'Unable to initiate Razorpay payment gateway.');
      setStep('failed');
    }
  };

  // Complete or Fail Payment in Integrated Verified Checkout
  const handleCompleteIntegratedCheckout = async (simulateFailure: boolean = false) => {
    if (!currentStudent || !pendingOrder) return;
    setStep('processing');

    if (simulateFailure) {
      const failReason = `Payment declined by ${paymentMethod} gateway. Paid plan was NOT activated.`;
      try {
        await fetch('/api/razorpay/payment-failed', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            orderId: pendingOrder.orderId,
            paymentId: `pay_failed_${Date.now()}`,
            planId: selectedPlan,
            studentId: currentStudent.id,
            studentName: currentStudent.name,
            reason: failReason
          })
        });
      } catch {}
      setErrorMsg(failReason);
      setStep('failed');
      return;
    }

    // Verify with backend /api/razorpay/verify-payment
    const paymentId = `pay_vc_${Date.now().toString(36)}${Math.random().toString(36).substring(2, 5)}`;
    const verification = await verifyRazorpayPayment({
      razorpay_order_id: pendingOrder.orderId,
      razorpay_payment_id: paymentId,
      razorpay_signature: `sig_verified_${pendingOrder.orderId}_${paymentId}`,
      planId: selectedPlan,
      studentId: currentStudent.id,
      studentName: currentStudent.name,
      email: currentStudent.email,
      mobile: currentStudent.mobile,
      method: paymentMethod,
      currentExpiresAt: currentStudent.planExpiresAt
    });

    if (verification.success && verification.transaction) {
      activateVerifiedMembership(
        verification.transaction,
        verification.membership?.expiryDate
      );
      setLastTransaction(verification.transaction);
      setExpiryDateStr(verification.membership?.expiryDate || '');
      setDaysRemainingNum(verification.membership?.daysRemaining || 90);
      setStep('success');
    } else {
      setErrorMsg(
        verification.error || 'Payment verification failed on server. Paid plan was not activated.'
      );
      setStep('failed');
    }
  };

  const resetModal = () => {
    setStep('select');
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/75 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-5xl w-full border border-amber-200 shadow-2xl overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
              <Crown className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  3 FLEXIBLE SUBSCRIPTION PLANS • {gatewayMode} GATEWAY
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-extrabold mt-0.5">
                Champion Learning Subscription Plans
              </h2>
            </div>
          </div>
          <button
            onClick={resetModal}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 max-h-[82vh] overflow-y-auto">
          {/* Active Subscription Banner */}
          {currentStudent && (
            <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{currentStudent.avatar || '🌟'}</span>
                  <div>
                    <p className="text-xs font-bold text-slate-500">
                      Student: <strong className="text-slate-900">{currentStudent.name}</strong> ({currentStudent.classLevel})
                    </p>
                    <p className="text-sm font-black text-indigo-950">
                      Current Active Plan:{' '}
                      <span className="text-emerald-700">{planInfo.planDisplayName}</span>
                      {' • '}
                      <span className="text-xs font-bold text-slate-600">
                        Validity: {planInfo.daysRemainingDisplay}
                      </span>
                    </p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-black border ${
                    planInfo.isPaidPlanExpired
                      ? 'bg-rose-100 text-rose-800 border-rose-300'
                      : 'bg-emerald-100 text-emerald-800 border-emerald-300'
                  }`}
                >
                  {planInfo.isPaidPlanExpired
                    ? '● EXPIRED — FREE PLAN ACTIVE (RENEW BELOW)'
                    : `● ACTIVE (${planInfo.daysRemainingDisplay})`}
                </span>
              </div>

              {planInfo.isPaidPlanExpired && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs font-bold text-rose-900">
                    ⚠️ Your previous <strong>{planInfo.expiredPlanName}</strong> ({planInfo.expiryDisplay}). You are currently on{' '}
                    <strong>FREE PLAN – ₹0 – Lifetime</strong>. Select a plan below to renew for 90 Days!
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      handleInitiateCheckout(
                        planInfo.storedPlan === 'basic' ? 'basic' : 'premium'
                      )
                    }
                    className="px-3.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-black text-xs cursor-pointer shadow-xs"
                  >
                    Renew Now (90 Days) →
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ==================== STEP 1: SELECT FROM 3 FLEXIBLE PLANS ==================== */}
          {step === 'select' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* PLAN 1: FREE PLAN – ₹0 – Lifetime */}
                <div
                  className={`p-6 rounded-3xl border-2 flex flex-col justify-between transition-all ${
                    planInfo.effectivePlan === 'free'
                      ? 'border-emerald-500 bg-emerald-50/30 shadow-sm'
                      : 'border-slate-200 bg-slate-50/60'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                        FREE FOREVER
                      </span>
                      <span className="text-xs font-bold text-emerald-700">Lifetime Validity</span>
                    </div>
                    <h3 className="text-lg font-black text-slate-900">
                      FREE PLAN – ₹0 – Lifetime
                    </h3>
                    <div className="mt-2 mb-4 flex items-baseline gap-1">
                      <span className="text-4xl font-black text-slate-900">₹0</span>
                      <span className="text-xs text-emerald-700 font-black">/ Lifetime</span>
                    </div>

                    <p className="text-xs font-bold text-slate-600 mb-3">
                      Automatically active for every registered student forever:
                    </p>

                    <ul className="space-y-2.5 text-xs text-slate-700 font-bold mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Brain Puzzles (Logic, Riddles & Brain Games)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Sudoku (4×4, 6×6 & 9×9 Grids)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>English Subject Quizzes (All 4 Levels)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Mathematics Subject Quizzes (All 4 Levels)</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-400">
                        <Lock className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>Other 12 Subjects, Stories & Drawing Locked</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-400">
                        <Lock className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>Cricket, Scholarship & AI Academy Locked</span>
                      </li>
                    </ul>
                  </div>

                  <div className="w-full py-3 rounded-2xl bg-emerald-100 text-emerald-900 font-black text-xs text-center border border-emerald-300">
                    {planInfo.effectivePlan === 'free'
                      ? '✓ Currently Active (FREE PLAN – ₹0 – Lifetime)'
                      : '✓ Included Forever as Base Plan'}
                  </div>
                </div>

                {/* PLAN 2: STANDARD PLAN – ₹49 – 90 Days */}
                <div
                  onClick={() => setSelectedPlan('basic')}
                  className={`p-6 rounded-3xl border-2 flex flex-col justify-between transition-all cursor-pointer ${
                    selectedPlan === 'basic'
                      ? 'border-indigo-600 bg-indigo-50/40 shadow-lg'
                      : 'border-slate-200 hover:border-indigo-300 bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-600 text-white">
                        STANDARD PLAN
                      </span>
                      <span className="text-xs font-bold text-indigo-700">90 Days Validity</span>
                    </div>
                    <h3 className="text-lg font-black text-slate-900">
                      STANDARD PLAN – ₹49 – 90 Days
                    </h3>
                    <div className="mt-2 mb-4 flex items-baseline gap-1">
                      <span className="text-4xl font-black text-indigo-700">₹49</span>
                      <span className="text-xs text-slate-500 font-bold">/ 90 Days (3 Months)</span>
                    </div>

                    <p className="text-xs font-bold text-indigo-900 mb-3">
                      Everything in Free Plan PLUS:
                    </p>

                    <ul className="space-y-2.5 text-xs text-slate-700 font-bold mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                        <span>Brain Puzzles & Sudoku</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                        <span>Shivaji Maharaj Stories (Fluent Female Marathi Voice)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                        <span>Other Stories / Story World (45+ Audio Moral Stories)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                        <span>All 14 School Subjects & Subject-wise Quizzes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                        <span>Drawing & Colouring Studio</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-400">
                        <Lock className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>₹99 Premium Features (Cricket, Scholarship, AI) Locked</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleInitiateCheckout('basic');
                    }}
                    className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs shadow-md transition-all cursor-pointer"
                  >
                    {planInfo.effectivePlan === 'basic'
                      ? 'Extend Standard Plan (₹49 – 90 Days)'
                      : planInfo.isPaidPlanExpired && planInfo.storedPlan === 'basic'
                      ? 'Renew Standard Plan (₹49 – 90 Days)'
                      : 'Upgrade to STANDARD PLAN – ₹49 – 90 Days'}
                  </button>
                </div>

                {/* PLAN 3: PREMIUM PLAN – ₹99 – 90 Days */}
                <div
                  onClick={() => setSelectedPlan('premium')}
                  className={`p-6 rounded-3xl border-2 flex flex-col justify-between relative transition-all cursor-pointer ${
                    selectedPlan === 'premium'
                      ? 'border-amber-500 bg-gradient-to-br from-amber-50/80 via-white to-orange-50/60 shadow-xl'
                      : 'border-amber-200 hover:border-amber-400 bg-white'
                  }`}
                >
                  <div className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> FULL DASHBOARD UNLOCK
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-amber-100 text-amber-900">
                        PREMIUM PLAN
                      </span>
                      <span className="text-xs font-bold text-amber-800">90 Days Validity</span>
                    </div>
                    <h3 className="text-lg font-black text-slate-900">
                      PREMIUM PLAN – ₹99 – 90 Days
                    </h3>
                    <div className="mt-2 mb-4 flex items-baseline gap-1">
                      <span className="text-4xl font-black text-amber-600">₹99</span>
                      <span className="text-xs text-slate-500 font-bold">/ 90 Days (3 Months)</span>
                    </div>

                    <p className="text-xs font-bold text-amber-900 mb-3">
                      Full access to everything on the entire application:
                    </p>

                    <ul className="space-y-2 text-xs text-slate-800 font-bold mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>Brain Puzzles, Sudoku & All 14 School Subjects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>All Quizzes, Shivaji Stories, Other Stories & Drawing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>Cricket Champions Hub (500+ Cricket Quiz Bank)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>Maharashtra Scholarship (4th & 7th Std Practice Sets)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>AI Learning Academy, Coding & Future Skills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>Official Certificates, Leaderboard & Referral Rewards</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleInitiateCheckout('premium');
                    }}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-xs shadow-lg transition-all cursor-pointer"
                  >
                    {planInfo.effectivePlan === 'premium'
                      ? 'Extend Premium Plan (₹99 – 90 Days)'
                      : planInfo.isPaidPlanExpired && planInfo.storedPlan === 'premium'
                      ? 'Renew Premium Plan (₹99 – 90 Days)'
                      : 'Upgrade to PREMIUM PLAN – ₹99 – 90 Days'}
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 text-xs text-slate-600">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>
                    <strong>Strict Payment Verification:</strong> Paid plans (₹49 Standard & ₹99 Premium) are activated only after server-verified payment. If payment fails, paid features are never unlocked.
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
                  <span className="flex items-center gap-1"><Smartphone className="w-3.5 h-3.5 text-indigo-600" /> UPI</span>
                  <span className="flex items-center gap-1"><CreditCard className="w-3.5 h-3.5 text-indigo-600" /> Cards</span>
                  <span className="flex items-center gap-1"><Building2 className="w-3.5 h-3.5 text-indigo-600" /> NetBanking</span>
                </div>
              </div>
            </div>
          )}

          {/* ==================== STEP 2: INTEGRATED RAZORPAY VERIFIED CHECKOUT ==================== */}
          {step === 'checkout' && pendingOrder && (
            <div className="max-w-lg mx-auto py-4 space-y-5 animate-in fade-in duration-200">
              <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-900 to-slate-900 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-300">
                    RAZORPAY SECURE CHECKOUT • ORDER #{pendingOrder.orderId.slice(-8)}
                  </span>
                  <h3 className="text-lg font-black mt-0.5">
                    {selectedPlan === 'premium' ? 'Premium Plan (Full Unlock)' : 'Standard Plan (14 Subjects + Stories + Drawing)'}
                  </h3>
                  <p className="text-xs text-indigo-200">3 Months (90 Days) Verified Access • Student: {currentStudent?.name}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black text-amber-400">₹{pendingOrder.amountRupees}</div>
                  <div className="text-[10px] text-emerald-300 font-bold">Incl. GST</div>
                </div>
              </div>

              {/* Payment Method Tabs */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-600 mb-2">
                  Select Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {(['UPI', 'Card', 'NetBanking'] as const).map(method => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setPaymentMethod(method)}
                      className={`p-3 rounded-xl border-2 font-black text-xs flex flex-col items-center gap-1.5 cursor-pointer transition-all ${
                        paymentMethod === method
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {method === 'UPI' && <Smartphone className="w-5 h-5 text-indigo-600" />}
                      {method === 'Card' && <CreditCard className="w-5 h-5 text-indigo-600" />}
                      {method === 'NetBanking' && <Building2 className="w-5 h-5 text-indigo-600" />}
                      <span>{method === 'UPI' ? 'UPI / QR' : method === 'Card' ? 'Debit / Credit Card' : 'NetBanking'}</span>
                    </button>
                  ))}
                </div>
              </div>

              {paymentMethod === 'UPI' && (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Enter UPI ID (Google Pay / PhonePe / Paytm / BHIM)
                  </label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={e => setUpiId(e.target.value)}
                    placeholder="yourname@okaxis"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold bg-white"
                  />
                </div>
              )}

              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => handleCompleteIntegratedCheckout(false)}
                  className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-5 h-5" />
                  Pay ₹{pendingOrder.amountRupees} & Verify Subscription Now
                </button>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <button
                    type="button"
                    onClick={() => handleCompleteIntegratedCheckout(true)}
                    className="py-2.5 px-3 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs cursor-pointer"
                  >
                    Simulate Payment Failure
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep('select')}
                    className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
                  >
                    ← Back to Plans
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ==================== STEP 3: PROCESSING ==================== */}
          {step === 'processing' && (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full border-4 border-indigo-200 border-t-indigo-600 animate-spin mx-auto" />
              <h3 className="text-lg font-display font-bold text-slate-900">
                Verifying Payment with Server & Firebase...
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Verifying order signature for ₹{selectedPlan === 'premium' ? '99' : '49'} plan. Please do not close this window.
              </p>
            </div>
          )}

          {/* ==================== STEP 4: SUCCESS ==================== */}
          {step === 'success' && lastTransaction && (
            <div className="py-6 text-center space-y-6">
              <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                  PAYMENT VERIFIED & SAVED TO FIREBASE
                </span>
                <h3 className="text-2xl font-display font-extrabold text-slate-900 mt-2">
                  Welcome to {lastTransaction.planTitle}! 👑
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Your dashboard has been automatically refreshed and your new features are now unlocked!
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 text-left text-xs space-y-2.5 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-400">Receipt Number:</span>
                  <span className="font-mono font-bold text-slate-800">{lastTransaction.receiptNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Razorpay Order ID:</span>
                  <span className="font-mono text-slate-700">{lastTransaction.orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Razorpay Payment ID:</span>
                  <span className="font-mono text-slate-700">{lastTransaction.paymentId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Student Name:</span>
                  <span className="font-bold text-slate-800">{lastTransaction.studentName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Activated Plan:</span>
                  <span className="font-bold text-indigo-700">
                    {lastTransaction.planId === 'premium' ? 'Premium Plan (₹99)' : 'Standard Plan (₹49)'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Amount Paid:</span>
                  <span className="font-extrabold text-emerald-600">₹{lastTransaction.amount}.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Valid Until:</span>
                  <span className="font-bold text-slate-800">
                    {expiryDateStr || '3 Months (90 Days)'} ({daysRemainingNum} Days Remaining)
                  </span>
                </div>
              </div>

              <button
                onClick={resetModal}
                className="w-full max-w-md py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition-all cursor-pointer shadow-md"
              >
                Go to My Unlocked Dashboard →
              </button>
            </div>
          )}

          {/* ==================== STEP 5: FAILED ==================== */}
          {step === 'failed' && (
            <div className="py-6 text-center space-y-5">
              <div className="w-16 h-16 rounded-3xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
                <AlertCircle className="w-10 h-10" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
                  PAYMENT NOT COMPLETED • PLAN NOT ACTIVATED
                </span>
                <h3 className="text-xl font-display font-extrabold text-slate-900 mt-2">
                  Subscription Upgrade Was Not Activated
                </h3>
                <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                  {errorMsg || 'Your payment could not be verified. Paid plans are only activated after verified payment.'}
                </p>
              </div>

              <div className="flex gap-3 max-w-md mx-auto">
                <button
                  onClick={() => setStep('select')}
                  className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <RefreshCw className="w-4 h-4" /> Try Payment Again
                </button>
                <button
                  onClick={resetModal}
                  className="py-3 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-xs transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
