import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import {
  getRazorpayConfig,
  createRazorpayOrder,
  launchRazorpayCheckout,
  loadRazorpayScript
} from '../services/paymentService';
import { getStudentPlanInfo } from '../utils/subscriptionAccess';
import {
  X, CheckCircle2, ShieldCheck, Crown, Lock, CreditCard, Smartphone,
  Building2, AlertCircle, Sparkles, RefreshCw, Copy, Check, Loader2
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
  const [step, setStep] = useState<'select' | 'processing' | 'success' | 'failed'>('select');
  const [creatingOrderForPlan, setCreatingOrderForPlan] = useState<'basic' | 'premium' | null>(null);
  const [lastTransaction, setLastTransaction] = useState<PaymentTransaction | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [failedOrderId, setFailedOrderId] = useState('');
  const [isDomainMismatchError, setIsDomainMismatchError] = useState(false);
  const [copiedDomainUrl, setCopiedDomainUrl] = useState(false);
  const [expiryDateStr, setExpiryDateStr] = useState('');
  const [daysRemainingNum, setDaysRemainingNum] = useState(90);
  const [gatewayMode, setGatewayMode] = useState<'LIVE' | 'TEST'>('LIVE');

  // Synchronous lock to prevent duplicate rapid clicks on ₹49 or ₹99 buttons
  const isCheckoutBusyRef = useRef<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setSelectedPlan(initialSelectedPlan);
      setStep('select');
      setCreatingOrderForPlan(null);
      isCheckoutBusyRef.current = false;
      setErrorMsg('');
      setFailedOrderId('');
      setIsDomainMismatchError(false);
      setCopiedDomainUrl(false);

      // Preload Razorpay Checkout script immediately when modal opens so button click is fast
      loadRazorpayScript().catch((err) => {
        console.info('[Razorpay] Preload notice:', err);
      });

      getRazorpayConfig()
        .then((cfg) => {
          if (cfg && cfg.mode) {
            setGatewayMode(cfg.mode);
          }
        })
        .catch(() => {});
    }
  }, [isOpen, initialSelectedPlan]);

  if (!isOpen) return null;

  const planInfo = getStudentPlanInfo(currentStudent);
  const isCreatingOrder = creatingOrderForPlan !== null;

  // Create Server LIVE Order & Immediately Open Official Razorpay Checkout
  const handleInitiateCheckout = async (planOverride?: 'basic' | 'premium') => {
    if (isCheckoutBusyRef.current) {
      console.info('[Razorpay] Ignoring duplicate click while order/checkout is initializing.');
      return;
    }

    const targetPlan: 'basic' | 'premium' = planOverride || selectedPlan;
    setSelectedPlan(targetPlan);
    setErrorMsg('');
    setFailedOrderId('');
    setIsDomainMismatchError(false);

    if (!currentStudent || !currentStudent.id) {
      const authErr = 'Please sign in to your student account before purchasing a subscription plan.';
      console.info('[Razorpay Checkout] Blocked:', authErr);
      setErrorMsg(authErr);
      setStep('failed');
      return;
    }

    isCheckoutBusyRef.current = true;
    setCreatingOrderForPlan(targetPlan);

    try {
      // Ensure Razorpay script is loaded in parallel with order creation
      const [scriptReady, orderData] = await Promise.all([
        loadRazorpayScript(),
        createRazorpayOrder(currentStudent, targetPlan)
      ]);

      if (!scriptReady || typeof (window as any).Razorpay !== 'function') {
        isCheckoutBusyRef.current = false;
        setCreatingOrderForPlan(null);
        const sdkErr =
          'Razorpay Checkout script (checkout.razorpay.com) failed to load. Please check your internet connection or disable any ad-blocker and click Retry Payment.';
        console.info('[Razorpay Checkout] Failed to open:', sdkErr);
        setErrorMsg(sdkErr);
        setFailedOrderId(orderData?.orderId || '');
        setStep('failed');
        return;
      }

      if (orderData.mode) {
        setGatewayMode(orderData.mode);
      }

      await launchRazorpayCheckout({
        orderData,
        student: currentStudent,
        planId: targetPlan,
        onCheckoutOpened: () => {
          // Release button busy state once Razorpay modal is visible on screen
          isCheckoutBusyRef.current = false;
          setCreatingOrderForPlan(null);
        },
        onVerifyingStart: () => {
          // Show server signature & capture verification screen after user completes payment
          isCheckoutBusyRef.current = true;
          setCreatingOrderForPlan(null);
          setStep('processing');
        },
        onSuccess: (verifyResult) => {
          isCheckoutBusyRef.current = false;
          setCreatingOrderForPlan(null);
          if (verifyResult.success && verifyResult.transaction) {
            if (!verifyResult.alreadyProcessed) {
              activateVerifiedMembership(
                verifyResult.transaction,
                verifyResult.membership?.expiryDate
              );
            }
            setLastTransaction(verifyResult.transaction);
            setExpiryDateStr(verifyResult.membership?.expiryDate || '');
            setDaysRemainingNum(verifyResult.membership?.daysRemaining || 90);
            setStep('success');
          } else {
            const verifyErr =
              verifyResult.error ||
              'Payment signature verification failed on server. Subscription was not activated.';
            setErrorMsg(verifyErr);
            setFailedOrderId(orderData.orderId);
            setStep('failed');
          }
        },
        onFailure: (errMessage, metadata) => {
          isCheckoutBusyRef.current = false;
          setCreatingOrderForPlan(null);
          setErrorMsg(errMessage);
          setFailedOrderId(metadata?.orderId || orderData.orderId || '');
          setIsDomainMismatchError(Boolean(metadata?.isDomainMismatch));
          setStep('failed');
        }
      });
    } catch (err: any) {
      isCheckoutBusyRef.current = false;
      setCreatingOrderForPlan(null);
      const message =
        err?.message ||
        'Could not create Razorpay LIVE payment order. Please check your internet connection and try again.';
      console.info('[Razorpay] Order initiation error:', message);
      setErrorMsg(message);
      setStep('failed');
    }
  };

  const resetModal = () => {
    isCheckoutBusyRef.current = false;
    setCreatingOrderForPlan(null);
    setStep('select');
    setErrorMsg('');
    setFailedOrderId('');
    setIsDomainMismatchError(false);
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
            type="button"
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
                    disabled={isCreatingOrder}
                    onClick={() =>
                      handleInitiateCheckout(
                        planInfo.storedPlan === 'basic' ? 'basic' : 'premium'
                      )
                    }
                    className="px-3.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 disabled:opacity-60 text-white font-black text-xs cursor-pointer shadow-xs flex items-center gap-1.5"
                  >
                    {isCreatingOrder ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Opening Checkout...</span>
                      </>
                    ) : (
                      <span>Renew Now (90 Days) →</span>
                    )}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ==================== STEP 1: SELECT FROM 3 FLEXIBLE PLANS ==================== */}
          {step === 'select' && (
            <div className="space-y-6">
              {/* Order Creation Loading Banner */}
              {isCreatingOrder && (
                <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center gap-3 text-indigo-950 animate-in fade-in duration-150">
                  <Loader2 className="w-5 h-5 text-indigo-600 animate-spin shrink-0" />
                  <span className="text-xs sm:text-sm font-black">
                    Creating Razorpay {gatewayMode} Order for{' '}
                    {creatingOrderForPlan === 'premium'
                      ? 'PREMIUM PLAN – ₹99 (90 Days)'
                      : 'STANDARD PLAN – ₹49 (90 Days)'}
                    ... Opening secure payment window...
                  </span>
                </div>
              )}

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
                  onClick={() => {
                    if (!isCreatingOrder) setSelectedPlan('basic');
                  }}
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
                    disabled={isCreatingOrder}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleInitiateCheckout('basic');
                    }}
                    className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-black text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {creatingOrderForPlan === 'basic' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Creating ₹49 Order...</span>
                      </>
                    ) : planInfo.effectivePlan === 'basic' ? (
                      <span>Extend Standard Plan (₹49 – 90 Days)</span>
                    ) : planInfo.isPaidPlanExpired && planInfo.storedPlan === 'basic' ? (
                      <span>Renew Standard Plan (₹49 – 90 Days)</span>
                    ) : (
                      <span>Upgrade to STANDARD PLAN – ₹49 – 90 Days</span>
                    )}
                  </button>
                </div>

                {/* PLAN 3: PREMIUM PLAN – ₹99 – 90 Days */}
                <div
                  onClick={() => {
                    if (!isCreatingOrder) setSelectedPlan('premium');
                  }}
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
                    disabled={isCreatingOrder}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleInitiateCheckout('premium');
                    }}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-black text-xs shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {creatingOrderForPlan === 'premium' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Creating ₹99 Order...</span>
                      </>
                    ) : planInfo.effectivePlan === 'premium' ? (
                      <span>Extend Premium Plan (₹99 – 90 Days)</span>
                    ) : planInfo.isPaidPlanExpired && planInfo.storedPlan === 'premium' ? (
                      <span>Renew Premium Plan (₹99 – 90 Days)</span>
                    ) : (
                      <span>Upgrade to PREMIUM PLAN – ₹99 – 90 Days</span>
                    )}
                  </button>
                </div>
              </div>

              {/* Prominent Pay Now Action Bar for Selected Plan */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div className="text-center sm:text-left">
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-300">
                    SELECTED SUBSCRIPTION PLAN • RAZORPAY {gatewayMode} CHECKOUT
                  </span>
                  <h4 className="text-base sm:text-lg font-extrabold mt-0.5">
                    {selectedPlan === 'premium'
                      ? 'PREMIUM PLAN – ₹99 – 90 Days (Full Dashboard Unlock)'
                      : 'STANDARD PLAN – ₹49 – 90 Days (14 Subjects + Stories + Drawing)'}
                  </h4>
                </div>
                <button
                  type="button"
                  disabled={isCreatingOrder}
                  onClick={() => handleInitiateCheckout(selectedPlan)}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-black text-sm shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0"
                >
                  {isCreatingOrder ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>
                        Opening Razorpay (₹{creatingOrderForPlan === 'premium' ? '99' : '49'})...
                      </span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-5 h-5" />
                      <span>
                        Pay Now – ₹{selectedPlan === 'premium' ? '99' : '49'} (90 Days)
                      </span>
                    </>
                  )}
                </button>
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

          {/* ==================== STEP 2: PROCESSING (SERVER SIGNATURE & CAPTURE VERIFICATION) ==================== */}
          {step === 'processing' && (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full border-4 border-indigo-200 border-t-indigo-600 animate-spin mx-auto" />
              <h3 className="text-lg font-display font-bold text-slate-900">
                Verifying Payment Signature & Activating 90-Day Subscription...
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Confirming cryptographic payment signature and capture status with Razorpay & Firebase for your ₹{selectedPlan === 'premium' ? '99' : '49'} plan. Please do not close this window.
              </p>
            </div>
          )}

          {/* ==================== STEP 3: SUCCESS ==================== */}
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
                  Your dashboard has been automatically refreshed and your new features are now unlocked for 90 Days!
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
                    {lastTransaction.planId === 'premium' ? 'Premium Plan (₹99 – 90 Days)' : 'Standard Plan (₹49 – 90 Days)'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Amount Paid:</span>
                  <span className="font-extrabold text-emerald-600">₹{lastTransaction.amount}.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Valid Until:</span>
                  <span className="font-bold text-slate-800">
                    {expiryDateStr || '90 Days'} ({daysRemainingNum} Days Remaining)
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={resetModal}
                className="w-full max-w-md py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition-all cursor-pointer shadow-md"
              >
                Go to My Unlocked Dashboard →
              </button>
            </div>
          )}

          {/* ==================== STEP 4: FAILED / CANCELLED ==================== */}
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
                <p className="text-xs text-slate-600 mt-1.5 max-w-md mx-auto leading-relaxed font-medium">
                  {errorMsg || 'Your payment could not be completed or verified. Paid plans are only activated after a verified payment.'}
                </p>
                {failedOrderId && (
                  <p className="text-[11px] font-mono text-slate-400 mt-1">
                    Order Ref: {failedOrderId}
                  </p>
                )}
              </div>

              {isDomainMismatchError && typeof window !== 'undefined' && (
                <div className="max-w-lg mx-auto p-4 rounded-2xl bg-amber-50 border border-amber-300 text-left space-y-2.5">
                  <p className="text-xs font-black uppercase tracking-wider text-amber-900">
                    ⚠️ Razorpay Live Website Whitelist Required
                  </p>
                  <p className="text-xs text-amber-900 leading-relaxed">
                    Razorpay Live Mode blocked this domain because{' '}
                    <code className="font-mono font-bold bg-amber-100 px-1.5 py-0.5 rounded">
                      {window.location.origin}
                    </code>{' '}
                    is not yet added under your{' '}
                    <strong>Razorpay Dashboard → Account &amp; Settings → Website and app settings</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard?.writeText(window.location.origin);
                      setCopiedDomainUrl(true);
                      setTimeout(() => setCopiedDomainUrl(false), 2500);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-amber-200/80 hover:bg-amber-300 text-amber-950 font-black text-[11px] flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    {copiedDomainUrl ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Copied Website URL ({window.location.origin})</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Website URL for Razorpay Settings</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              <div className="flex flex-wrap gap-3 max-w-md mx-auto">
                <button
                  type="button"
                  disabled={isCreatingOrder}
                  onClick={() => {
                    setStep('select');
                    handleInitiateCheckout(selectedPlan);
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  {isCreatingOrder ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Opening...</span>
                    </>
                  ) : (
                    <>
                      <RefreshCw className="w-4 h-4" />
                      <span>Retry Payment (₹{selectedPlan === 'premium' ? '99' : '49'})</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setErrorMsg('');
                    setStep('select');
                  }}
                  className="py-3 px-4 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs transition-all cursor-pointer"
                >
                  Change Plan
                </button>
                <button
                  type="button"
                  onClick={resetModal}
                  className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-xs transition-all cursor-pointer"
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
