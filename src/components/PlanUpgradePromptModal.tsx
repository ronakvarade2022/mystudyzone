import React from 'react';
import { Lock, Crown, Check, X, Sparkles, Play } from 'lucide-react';
import { StudentProfile } from '../types';
import { getStudentPlanInfo } from '../utils/subscriptionAccess';

interface PlanUpgradePromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureTitle: string;
  upgradeMessage: string;
  requiredPlan: 'basic' | 'premium';
  currentStudent: StudentProfile | null;
  onSelectUpgradePlan: (planId: 'basic' | 'premium') => void;
  onTryDemo?: () => void;
}

export const PlanUpgradePromptModal: React.FC<PlanUpgradePromptModalProps> = ({
  isOpen,
  onClose,
  featureTitle,
  upgradeMessage,
  requiredPlan,
  currentStudent,
  onSelectUpgradePlan,
  onTryDemo
}) => {
  if (!isOpen) return null;

  const planInfo = getStudentPlanInfo(currentStudent);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto overscroll-contain animate-in fade-in duration-150">
      <div
        className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border-2 border-amber-300 overflow-hidden animate-in zoom-in-95 m-auto my-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
              <Lock className="w-6 h-6 text-amber-200" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider bg-black/25 px-2.5 py-0.5 rounded-full text-amber-200">
                Subscription Upgrade Required
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold mt-1">
                Unlock {featureTitle}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Current Plan Status & Reason */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <p className="text-xs font-extrabold text-amber-950">
                Your Current Active Plan:{' '}
                <span className="px-2 py-0.5 rounded bg-amber-200 text-amber-950">
                  {planInfo.planDisplayName}
                </span>{' '}
                • <span className="text-slate-600">Validity: {planInfo.daysRemainingDisplay}</span>
              </p>
              {planInfo.isPaidPlanExpired && (
                <p className="text-[11px] font-extrabold text-rose-700">
                  ⚠️ Your previous {planInfo.expiredPlanName} ({planInfo.expiryDisplay}). Renew below for 90 Days access!
                </p>
              )}
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                {upgradeMessage}
              </p>
            </div>
            {onTryDemo && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onTryDemo();
                }}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-extrabold text-xs shrink-0 flex items-center gap-1.5 cursor-pointer self-start sm:self-center"
              >
                <Play className="w-3.5 h-3.5 fill-amber-300" />
                <span>Test Free in Demo Section</span>
              </button>
            )}
          </div>

          {/* 3 Flexible Plans Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {/* 1. FREE PLAN – ₹0 – Lifetime */}
            <div className={`rounded-2xl p-5 border-2 flex flex-col justify-between space-y-4 ${
              planInfo.effectivePlan === 'free'
                ? 'border-emerald-400 bg-emerald-50/30'
                : 'border-slate-200 bg-slate-50/60'
            }`}>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-800">
                    Free Plan
                  </span>
                  {planInfo.effectivePlan === 'free' && (
                    <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                      Current Plan
                    </span>
                  )}
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-sm text-slate-900">
                    FREE PLAN – ₹0 – Lifetime
                  </h4>
                  <p className="text-2xl font-extrabold text-slate-900 mt-0.5">
                    ₹0 <span className="text-[11px] font-medium text-emerald-700">/ Lifetime</span>
                  </p>
                </div>
                <ul className="space-y-1.5 text-slate-700">
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Brain Puzzles</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Sudoku (4×4, 6×6, 9×9)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>English Subject Quizzes</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Mathematics Subject Quizzes</span>
                  </li>
                  <li className="flex items-center gap-1.5 text-emerald-700 font-bold">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Never Expires (Lifetime)</span>
                  </li>
                </ul>
              </div>
              <div className="pt-2 border-t border-slate-200 text-center font-bold text-slate-500 text-[11px]">
                Included Free Forever
              </div>
            </div>

            {/* 2. STANDARD PLAN – ₹49 – 90 Days */}
            <div className={`rounded-2xl p-5 border-2 flex flex-col justify-between space-y-4 ${
              requiredPlan === 'basic'
                ? 'border-amber-500 bg-amber-50/60 shadow-md'
                : 'border-amber-200 bg-amber-50/30'
            }`}>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-950">
                    Standard Plan
                  </span>
                  {planInfo.effectivePlan === 'basic' ? (
                    <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                      Current Plan
                    </span>
                  ) : (
                    <span className="text-[10px] font-extrabold text-amber-800">90 Days</span>
                  )}
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-sm text-slate-900">
                    STANDARD PLAN – ₹49 – 90 Days
                  </h4>
                  <p className="text-2xl font-extrabold text-amber-800 mt-0.5">
                    ₹49 <span className="text-[11px] font-medium text-slate-500">/ 90 Days</span>
                  </p>
                </div>
                <ul className="space-y-1.5 text-slate-700">
                  <li className="flex items-center gap-1.5 font-bold text-amber-950">
                    <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Everything in Free Plan</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Shivaji Maharaj 50 Stories</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Other Stories (45 Audio Stories)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>All 14 Subjects & Quizzes</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Drawing Champions Studio</span>
                  </li>
                </ul>
              </div>

              {planInfo.effectivePlan === 'basic' || planInfo.effectivePlan === 'premium' ? (
                <div className="py-2.5 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold text-center">
                  ✓ Unlocked on Your Plan
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onSelectUpgradePlan('basic');
                  }}
                  className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs shadow-sm cursor-pointer transition-all"
                >
                  {planInfo.isPaidPlanExpired && planInfo.storedPlan === 'basic'
                    ? 'Renew ₹49 Plan (90 Days)'
                    : 'Upgrade to ₹49 Plan (90 Days)'}
                </button>
              )}
            </div>

            {/* 3. PREMIUM PLAN – ₹99 – 90 Days */}
            <div className="rounded-2xl p-5 border-2 border-orange-500 bg-gradient-to-b from-orange-50 to-amber-50/60 shadow-lg flex flex-col justify-between space-y-4 relative">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full bg-orange-600 text-white flex items-center gap-1">
                    <Crown className="w-3 h-3" />
                    <span>Premium Plan</span>
                  </span>
                  <span className="text-[10px] font-extrabold text-orange-800">90 Days</span>
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-sm text-slate-900">
                    PREMIUM PLAN – ₹99 – 90 Days
                  </h4>
                  <p className="text-2xl font-extrabold text-orange-700 mt-0.5">
                    ₹99 <span className="text-[11px] font-medium text-slate-500">/ 90 Days</span>
                  </p>
                </div>
                <ul className="space-y-1.5 text-slate-800 font-medium">
                  <li className="flex items-center gap-1.5 font-bold text-orange-950">
                    <Check className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                    <span>Everything in Free + ₹49 Plan</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                    <span>Cricket Champions Arena</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                    <span>MSCE Scholarship (4th & 7th Std)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                    <span>AI Learning Academy (24 Lessons)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                    <span>All Games, Puzzles & Certificates</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onSelectUpgradePlan('premium');
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-extrabold text-xs shadow-md cursor-pointer transition-all flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {planInfo.isPaidPlanExpired && planInfo.storedPlan === 'premium'
                    ? 'Renew ₹99 Plan (90 Days)'
                    : 'Upgrade to ₹99 Plan (90 Days)'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
