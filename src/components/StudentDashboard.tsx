import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SubjectName } from '../types';
import { calculateLevel, ALL_BADGES } from '../data/badgesData';
import { 
  Trophy, 
  Flame, 
  Sparkles, 
  Target, 
  BookOpen, 
  Palette, 
  Puzzle, 
  Crown, 
  ArrowRight, 
  CheckCircle2, 
  Clock,
  Award,
  Zap,
  Play,
  Lock,
  X,
  Star,
  CheckCircle,
  ChevronRight,
  User,
  Phone,
  Mail,
  ShieldCheck,
  Users,
  CreditCard,
  Calendar,
  RefreshCw,
  Gift,
  Compass,
  Brain
} from 'lucide-react';
import { QuizLevel, SubjectLevelProgress } from '../types';
import { StudentMasteryChart } from './StudentMasteryChart';
import { getStudentPlanInfo, canAccessSubject, canAccessFeature } from '../utils/subscriptionAccess';

interface StudentDashboardProps {
  onNavigateTab: (tab: string, subjectParam?: SubjectName, levelParam?: QuizLevel) => void;
  onOpenMembership: (plan?: 'basic' | 'premium') => void;
}

const ALL_14_SUBJECTS: { name: SubjectName; icon: string; bgGradient: string }[] = [
  { name: 'Mathematics', icon: '📐', bgGradient: 'from-blue-500 to-indigo-600' },
  { name: 'English', icon: '📖', bgGradient: 'from-amber-500 to-orange-600' },
  { name: 'Hindi', icon: '🇮🇳', bgGradient: 'from-red-500 to-rose-600' },
  { name: 'Marathi', icon: '🚩', bgGradient: 'from-orange-500 to-amber-600' },
  { name: 'Science', icon: '🔬', bgGradient: 'from-emerald-500 to-teal-600' },
  { name: 'General Knowledge', icon: '🌍', bgGradient: 'from-sky-500 to-blue-600' },
  { name: 'Social Studies', icon: '🏛️', bgGradient: 'from-purple-500 to-indigo-600' },
  { name: 'History', icon: '⚔️', bgGradient: 'from-amber-700 to-stone-800' },
  { name: 'Geography', icon: '🗺️', bgGradient: 'from-teal-500 to-emerald-700' },
  { name: 'Computer Knowledge', icon: '💻', bgGradient: 'from-cyan-500 to-blue-700' },
  { name: 'Logical Reasoning', icon: '💡', bgGradient: 'from-violet-500 to-purple-700' },
  { name: 'Environmental Studies', icon: '🌱', bgGradient: 'from-green-500 to-emerald-700' },
  { name: 'Moral Education', icon: '🕊️', bgGradient: 'from-rose-500 to-pink-600' },
  { name: 'Vocabulary and Grammar', icon: '✍️', bgGradient: 'from-fuchsia-500 to-purple-600' }
];

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  onNavigateTab,
  onOpenMembership
}) => {
  const { 
    currentStudent, 
    allAttempts, 
    allStories, 
    savedDrawings, 
    getSubjectLevelProgress 
  } = useApp();
  const [selectedSubjectForLevels, setSelectedSubjectForLevels] = useState<SubjectName | null>(null);

  if (!currentStudent) return null;

  // Calculate statistics
  const studentAttempts = allAttempts.filter(a => a.studentId === currentStudent.id);
  const totalQuizzes = studentAttempts.length;
  const totalCorrect = studentAttempts.reduce((acc, a) => acc + a.correctCount, 0);
  const totalIncorrect = studentAttempts.reduce((acc, a) => acc + a.incorrectCount, 0);
  const totalAnswered = totalCorrect + totalIncorrect;
  const accuracyPercent = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  const levelInfo = calculateLevel(currentStudent.points);
  const xpInCurrentLevel = currentStudent.points - levelInfo.currentThreshold;
  const xpNeeded = levelInfo.nextThreshold - levelInfo.currentThreshold;
  const levelProgress = Math.min(100, Math.max(0, Math.round((xpInCurrentLevel / xpNeeded) * 100)));

  // Completed stories & drawings
  const storiesReadCount = currentStudent.completedStoryIds.length;
  const drawingsCount = savedDrawings.filter(d => d.studentId === currentStudent.id).length;
  const puzzlesSolvedCount = currentStudent.attemptedPuzzleIds.length;

  return (
    <div className="space-y-8 pb-16">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white p-6 sm:p-8 shadow-lg shadow-amber-500/15">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-3xl">{currentStudent.avatar}</span>
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-100 flex items-center gap-1.5 border border-white/20">
                <Lock className="w-3.5 h-3.5 text-amber-200" />
                <span>{currentStudent.classLevel} (Permanent)</span>
              </span>
              <span className="bg-black/25 px-2.5 py-1 rounded-full text-[11px] font-mono text-amber-200">
                UID: {currentStudent.id}
              </span>
              <span className="bg-black/20 px-3 py-1 rounded-full text-xs font-bold text-amber-200">
                🔥 {currentStudent.streakDays} Day Streak!
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight">
              Welcome back, {currentStudent.name}!
            </h1>
            <p className="text-amber-100 text-sm sm:text-base max-w-xl font-medium">
              Ready to conquer today's learning adventures? Practice quizzes with zero repeated questions, dive into 45 stories, and unlock champion badges!
            </p>
          </div>

          {/* Quick Play CTA Card */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={() => onNavigateTab('quizzes')}
              className="px-5 py-3 rounded-2xl bg-white text-amber-900 font-extrabold text-sm shadow-md hover:bg-amber-50 transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <Play className="w-4 h-4 fill-amber-900 text-amber-900 group-hover:scale-110 transition-transform" />
              <span>Start 10-Q Quiz</span>
            </button>
            <button
              onClick={() => onNavigateTab('stories')}
              className="px-5 py-3 rounded-2xl bg-amber-900/40 hover:bg-amber-900/60 backdrop-blur-md text-white font-extrabold text-sm border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Listen Stories</span>
            </button>
          </div>
        </div>

        {/* Level XP Bar inside Banner */}
        <div className="mt-6 pt-5 border-t border-white/20">
          <div className="flex items-center justify-between text-xs font-bold text-amber-100 mb-1.5">
            <span className="flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-amber-200" />
              {levelInfo.name}
            </span>
            <span>{currentStudent.points} / {levelInfo.nextThreshold} XP ({levelProgress}%)</span>
          </div>
          <div className="w-full bg-black/25 rounded-full h-3 overflow-hidden p-0.5">
            <div 
              className="bg-gradient-to-r from-amber-200 to-white h-full rounded-full transition-all duration-500 shadow-xs"
              style={{ width: `${levelProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* ========================================================
          DEDICATED PROFILE BAR & SIGN OUT / LOGIN ACCESS
          Clear spelling: "👤 Student Profile (विद्यार्थी प्रोफाइल)" with Icons & Direct Sign Out
          ======================================================== */}
      <div className="bg-gradient-to-r from-amber-50 via-white to-orange-50 rounded-3xl p-4 sm:p-5 border-2 border-amber-300 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center text-3xl shadow-md shadow-amber-500/25 shrink-0 border-2 border-white">
            {currentStudent.avatar || '🦁'}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-amber-500 text-white flex items-center justify-center">
                <User className="w-4 h-4" />
              </span>
              <h2 className="text-lg sm:text-xl font-display font-black text-slate-900 tracking-tight">
                Student Profile
              </h2>
              <span className="text-xs font-extrabold text-amber-900 bg-amber-100/90 px-2.5 py-0.5 rounded-full border border-amber-300">
                (माझी प्रोफाइल)
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 font-medium mt-1">
              <span className="font-bold text-slate-900">{currentStudent.name}</span>
              <span className="text-slate-300">•</span>
              <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md font-bold text-[11px]">
                {currentStudent.classLevel}
              </span>
              <span className="text-slate-300">•</span>
              <span className="font-mono text-slate-500 text-[11px]">
                UID: {currentStudent.id}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Account</span>
              </span>
            </div>
          </div>
        </div>

        {/* Action Button: View Full Profile */}
        <div className="flex items-center gap-2.5 w-full md:w-auto">
          <button
            type="button"
            onClick={() => onNavigateTab('profile')}
            className="w-full md:w-auto px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black text-xs shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02]"
            title="Open Student Profile page (विद्यार्थी प्रोफाइल उघडा)"
          >
            <User className="w-4 h-4 text-white" />
            <span>Open Profile (माझी प्रोफाइल)</span>
            <ChevronRight className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </div>

      {/* ========================================================
          TODAY'S DAILY LEARNING MISSIONS (3 Interactive Quests)
          ======================================================== */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-amber-200/80 shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-xs">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-display font-extrabold text-slate-900">
                  Today's Learning Missions
                </h3>
                <span className="text-[11px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-full">
                  (आजचे ध्येय)
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Complete daily missions to maintain your 🔥 {currentStudent.streakDays}-day streak and earn bonus points!
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 self-start sm:self-auto">
            ⭐ 3 Daily Quests Available
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {/* Mission 1: 10-Question Quiz */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-200 flex flex-col justify-between hover:shadow-md transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-2xl">📝</span>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-600 text-white">
                  +50 XP
                </span>
              </div>
              <h4 className="font-extrabold text-sm text-slate-900">Daily Quiz Challenge</h4>
              <p className="text-xs text-slate-600 font-medium">
                Practice 10 unique questions in your class syllabus with zero repeated questions.
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('quizzes')}
              className="mt-4 w-full py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Start Quiz (10 Qs)</span>
            </button>
          </div>

          {/* Mission 2: Shivaji / Story */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200 flex flex-col justify-between hover:shadow-md transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-2xl">🏰</span>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-600 text-white">
                  +30 XP
                </span>
              </div>
              <h4 className="font-extrabold text-sm text-slate-900">Story World & Shivaji Forts</h4>
              <p className="text-xs text-slate-600 font-medium">
                Listen or read inspiring historical tales of Chhatrapati Shivaji Maharaj and Panchatantra.
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('stories')}
              className="mt-4 w-full py-2 px-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs shadow-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Explore Stories (45)</span>
            </button>
          </div>

          {/* Mission 3: Brain Puzzle / Sudoku */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50/50 border border-emerald-200 flex flex-col justify-between hover:shadow-md transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-2xl">🧩</span>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                  +25 XP
                </span>
              </div>
              <h4 className="font-extrabold text-sm text-slate-900">Brain Puzzles & Sudoku</h4>
              <p className="text-xs text-slate-600 font-medium">
                Sharpen your memory and logical thinking with colorful 4×4, 6×6 and 9×9 grids.
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('sudoku')}
              className="mt-4 w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all"
            >
              <Brain className="w-3.5 h-3.5" />
              <span>Solve Sudoku</span>
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 10: ATTRACTIVE DASHBOARD SUBSCRIPTION BANNER & 3 PLANS OVERVIEW (Mobile, Tablet & Desktop) */}
      {(() => {
        const planInfo = getStudentPlanInfo(currentStudent);
        const statusLabel = planInfo.statusLabel;
        const planName = planInfo.planDisplayName;
        const paymentAmount = planInfo.priceLabel;

        return (
          <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-amber-200/90 shadow-md space-y-5">
            {/* Top Subscription Status Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center text-xl shrink-0 shadow-sm">
                  <Crown className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base sm:text-lg font-display font-extrabold text-slate-900">
                      Active Subscription: <span className="text-amber-700">{planName}</span>
                    </h3>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${
                        planInfo.isPaidPlanExpired
                          ? 'bg-rose-100 text-rose-800 border-rose-300'
                          : 'bg-emerald-100 text-emerald-800 border-emerald-300'
                      }`}
                    >
                      ● {planInfo.isPaidPlanExpired ? 'EXPIRED • FREE PLAN ACTIVE' : `${statusLabel} (${planInfo.daysRemainingDisplay})`}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium mt-1">
                    {planInfo.isPaidPlanExpired
                      ? `Your previous ${planInfo.expiredPlanName} has expired. You are currently on FREE PLAN – ₹0 – Lifetime. Renew below for 90 Days access!`
                      : planInfo.effectivePlan === 'free'
                      ? 'FREE PLAN – ₹0 – Lifetime active forever (Brain Puzzles, Sudoku, English & Maths). Upgrade to ₹49 (90 Days) or ₹99 (90 Days) anytime!'
                      : planInfo.effectivePlan === 'basic'
                      ? `STANDARD PLAN – ₹49 – 90 Days active • Validity: ${planInfo.daysRemainingDisplay} (Expires: ${planInfo.expiryDisplay})`
                      : `PREMIUM PLAN – ₹99 – 90 Days active • Full Dashboard Unlocked • Validity: ${planInfo.daysRemainingDisplay} (Expires: ${planInfo.expiryDisplay})`}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 self-start lg:self-center">
                {planInfo.isPaidPlanExpired ? (
                  <button
                    type="button"
                    onClick={() => onOpenMembership(planInfo.storedPlan === 'basic' ? 'basic' : 'premium')}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-700 hover:to-orange-700 text-white font-extrabold text-xs shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Renew Subscription (90 Days)</span>
                  </button>
                ) : planInfo.effectivePlan === 'free' ? (
                  <>
                    <button
                      type="button"
                      onClick={() => onOpenMembership('basic')}
                      className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow-xs transition-all cursor-pointer"
                    >
                      Upgrade ₹49 (90 Days)
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenMembership('premium')}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs shadow-xs transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Upgrade ₹99 (90 Days)</span>
                    </button>
                  </>
                ) : planInfo.effectivePlan === 'basic' ? (
                  <button
                    type="button"
                    onClick={() => onOpenMembership('premium')}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs shadow-xs transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Upgrade to ₹99 Premium (90 Days)</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => onOpenMembership('premium')}
                    className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-extrabold text-xs shadow-xs transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Extend 90-Day Validity</span>
                  </button>
                )}
              </div>
            </div>

            {/* 6 Key Subscription Status Fields (Synchronized with Firebase) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-400 uppercase text-[10px] block">Active Plan</span>
                <span className="font-extrabold text-xs sm:text-sm text-slate-900 block mt-0.5">{planName}</span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-400 uppercase text-[10px] block">Subscription Status</span>
                <span className={`font-extrabold text-xs sm:text-sm block mt-0.5 ${planInfo.isPaidPlanExpired ? 'text-rose-700' : 'text-emerald-700'}`}>
                  {planInfo.isPaidPlanExpired ? 'EXPIRED (Free Active)' : planInfo.isLifetimeFree ? 'ACTIVE (Lifetime)' : 'ACTIVE (Verified)'}
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-400 uppercase text-[10px] block">Plan Price</span>
                <span className="font-extrabold text-xs sm:text-sm text-slate-900 block mt-0.5">{paymentAmount}</span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-400 uppercase text-[10px] block">Activation Date</span>
                <span className="font-bold text-xs text-slate-700 block mt-0.5">
                  {currentStudent.planPurchasedAt || (currentStudent.registeredAt ? currentStudent.registeredAt.split('T')[0] : 'Active')}
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-400 uppercase text-[10px] block">Expiry Date</span>
                <span className="font-bold text-xs text-emerald-700 block mt-0.5">
                  {planInfo.expiryDisplay}
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-400 uppercase text-[10px] block">Remaining Validity</span>
                <span className="font-extrabold text-xs sm:text-sm text-amber-900 block mt-0.5">
                  {planInfo.daysRemainingDisplay}
                </span>
              </div>
            </div>

            {/* 3 Subscription Plans Cards (Visible on Mobile, Tablet & Desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
              {/* 1. FREE PLAN – ₹0 – Lifetime */}
              <div
                className={`p-4 rounded-2xl border-2 flex flex-col justify-between transition-all ${
                  planInfo.effectivePlan === 'free'
                    ? 'border-emerald-500 bg-emerald-50/40'
                    : 'border-slate-200 bg-slate-50/70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      FREE PLAN – ₹0 – Lifetime
                    </span>
                    <span className="text-[11px] font-extrabold text-emerald-700">Lifetime</span>
                  </div>
                  <p className="text-lg font-black text-slate-900">
                    ₹0 <span className="text-xs font-bold text-emerald-700">• Lifetime Validity</span>
                  </p>
                  <p className="text-[11px] text-slate-600 font-medium mt-1">
                    Brain Puzzles, Sudoku (4×4, 6×6, 9×9), English &amp; Mathematics Quizzes.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-emerald-200/60 flex items-center justify-between text-[11px] font-extrabold text-emerald-800">
                  <span>{planInfo.effectivePlan === 'free' ? '✓ Active Plan (Never Expires)' : '✓ Included Forever'}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>

              {/* 2. STANDARD PLAN – ₹49 – 90 Days */}
              <div
                onClick={() => onOpenMembership('basic')}
                className={`p-4 rounded-2xl border-2 flex flex-col justify-between transition-all cursor-pointer ${
                  planInfo.effectivePlan === 'basic'
                    ? 'border-indigo-600 bg-indigo-50/50 shadow-sm'
                    : 'border-indigo-200 hover:border-indigo-400 bg-indigo-50/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-600 text-white">
                      STANDARD PLAN – ₹49 – 90 Days
                    </span>
                    <span className="text-[11px] font-extrabold text-indigo-700">90 Days</span>
                  </div>
                  <p className="text-lg font-black text-indigo-900">
                    ₹49 <span className="text-xs font-bold text-indigo-700">• 90 Days (3 Months)</span>
                  </p>
                  <p className="text-[11px] text-slate-600 font-medium mt-1">
                    Free Plan + All 14 School Subjects, Shivaji Stories, Story World &amp; Drawing Studio.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-indigo-200/60 flex items-center justify-between text-[11px] font-extrabold text-indigo-700">
                  <span>
                    {planInfo.effectivePlan === 'basic'
                      ? `✓ Active (${planInfo.daysRemainingDisplay})`
                      : planInfo.isPaidPlanExpired && planInfo.storedPlan === 'basic'
                      ? 'Renew Standard Plan (₹49 – 90 Days)'
                      : 'Choose ₹49 Plan (90 Days)'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* 3. PREMIUM PLAN – ₹99 – 90 Days */}
              <div
                onClick={() => onOpenMembership('premium')}
                className={`p-4 rounded-2xl border-2 flex flex-col justify-between transition-all cursor-pointer ${
                  planInfo.effectivePlan === 'premium'
                    ? 'border-amber-500 bg-gradient-to-br from-amber-50 to-orange-50/70 shadow-md'
                    : 'border-amber-300 hover:border-amber-500 bg-gradient-to-br from-amber-50/60 to-orange-50/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white">
                      PREMIUM PLAN – ₹99 – 90 Days
                    </span>
                    <span className="text-[11px] font-extrabold text-amber-800">90 Days</span>
                  </div>
                  <p className="text-lg font-black text-amber-900">
                    ₹99 <span className="text-xs font-bold text-amber-800">• 90 Days (3 Months)</span>
                  </p>
                  <p className="text-[11px] text-slate-700 font-medium mt-1">
                    Full Dashboard Unlock: Cricket, Scholarship (4th &amp; 7th), AI Academy, Certificates &amp; All 14 Subjects.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-amber-200/80 flex items-center justify-between text-[11px] font-extrabold text-amber-900">
                  <span>
                    {planInfo.effectivePlan === 'premium'
                      ? `✓ Active (${planInfo.daysRemainingDisplay})`
                      : planInfo.isPaidPlanExpired
                      ? 'Renew Premium Plan (₹99 – 90 Days)'
                      : 'Unlock Everything (₹99 – 90 Days)'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-orange-600" />
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Key Metric Highlights Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
        {/* Total Points */}
        <div className="bg-white rounded-2xl p-4 border border-amber-200/80 shadow-xs flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-xl shrink-0">
            🪙
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Total Points</p>
            <p className="text-xl sm:text-2xl font-extrabold text-slate-800">{currentStudent.points}</p>
          </div>
        </div>

        {/* Quizzes Taken */}
        <div className="bg-white rounded-2xl p-4 border border-amber-200/80 shadow-xs flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl shrink-0">
            📝
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Quizzes Done</p>
            <p className="text-xl sm:text-2xl font-extrabold text-slate-800">{totalQuizzes}</p>
          </div>
        </div>

        {/* Overall Accuracy */}
        <div className="bg-white rounded-2xl p-4 border border-amber-200/80 shadow-xs flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl shrink-0">
            🎯
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Accuracy</p>
            <p className="text-xl sm:text-2xl font-extrabold text-slate-800">{accuracyPercent}%</p>
          </div>
        </div>

        {/* Correct Answers */}
        <div className="bg-white rounded-2xl p-4 border border-amber-200/80 shadow-xs flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-xl shrink-0">
            ✅
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Right Answers</p>
            <p className="text-xl sm:text-2xl font-extrabold text-slate-800">{totalCorrect}</p>
          </div>
        </div>

        {/* Plan Status */}
        <div 
          onClick={() => onOpenMembership()}
          className="col-span-2 lg:col-span-1 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 border border-amber-300 shadow-xs flex items-center gap-3 cursor-pointer hover:border-amber-400 transition-colors"
        >
          <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center text-xl shrink-0">
            👑
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Active Plan</p>
            <p className="text-xs sm:text-sm font-extrabold text-amber-900 truncate">
              {getStudentPlanInfo(currentStudent).planDisplayName}
            </p>
            <p className="text-[10px] font-bold text-emerald-700 truncate">
              {getStudentPlanInfo(currentStudent).daysRemainingDisplay}
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================
          CATEGORY A: ACADEMIC LEARNING ZONE (14 Subjects × 4 Levels = 560 Unique Questions)
          ======================================================== */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-xs shrink-0">
              A
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
                ACADEMIC LEARNING ZONE (14 Subjects)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                40 Unique Questions Per Subject (10 per Level × 4 Levels) • Zero Question Repetition Guarantee
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigateTab('quizzes')}
            className="text-xs font-extrabold text-amber-700 hover:text-amber-900 bg-amber-100/80 px-3.5 py-2 rounded-xl border border-amber-200 flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
          >
            <span>Open Full Quiz Arena</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 14 Subjects Grid with Visible 4-Level Indicators & Plan Lock Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {ALL_14_SUBJECTS.map((sub) => {
            const subjectProgress = getSubjectLevelProgress(sub.name);
            const subjectAttempts = studentAttempts.filter(a => a.subject === sub.name);
            const bestScore = subjectAttempts.length > 0 
              ? Math.max(...subjectAttempts.map(a => a.correctCount)) 
              : 0;

            const maxUnlocked = subjectProgress.maxUnlockedLevel;
            const subjAccess = canAccessSubject(currentStudent, sub.name);
            const isSubLocked = !subjAccess.allowed;

            return (
              <div
                key={sub.name}
                onClick={() => {
                  if (isSubLocked) {
                    onNavigateTab('quizzes', sub.name, 1);
                  } else {
                    setSelectedSubjectForLevels(sub.name);
                  }
                }}
                className={`group rounded-2xl p-3.5 border shadow-xs transition-all cursor-pointer flex flex-col justify-between ${
                  isSubLocked
                    ? 'bg-slate-50/90 border-slate-200 hover:border-indigo-400'
                    : 'bg-white border-amber-200/80 hover:shadow-md hover:border-amber-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${sub.bgGradient} flex items-center justify-center text-lg text-white shadow-xs group-hover:scale-105 transition-transform`}>
                      {sub.icon}
                    </div>
                    {isSubLocked ? (
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200 flex items-center gap-0.5">
                        <Lock className="w-2.5 h-2.5" /> ₹49
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                        Unlocked
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-xs text-slate-800 leading-tight mb-1.5 truncate">
                    {sub.name}
                  </h3>
                  
                  {/* Level 1-4 Mini Progress Indicators */}
                  <div className="flex items-center gap-1 mb-2">
                    {([1, 2, 3, 4] as QuizLevel[]).map(lvl => {
                      const isCompleted = subjectProgress.completedLevels.includes(lvl);
                      const isUnlocked = !isSubLocked && lvl <= maxUnlocked;
                      return (
                        <span 
                          key={lvl} 
                          title={`Level ${lvl}: ${isSubLocked ? 'Requires ₹49 Plan' : isCompleted ? 'Passed' : isUnlocked ? 'Unlocked' : 'Locked'}`}
                          className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded ${
                            isCompleted 
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                              : isUnlocked 
                                ? 'bg-blue-100 text-blue-800 border border-blue-300' 
                                : 'bg-slate-100 text-slate-400 border border-slate-200'
                          }`}
                        >
                          L{lvl}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-amber-700">
                  {isSubLocked ? (
                    <>
                      <span className="text-indigo-700">Unlock (₹49)</span>
                      <Lock className="w-3 h-3 text-indigo-600" />
                    </>
                  ) : (
                    <>
                      <span>{subjectAttempts.length > 0 ? `${bestScore}/10 Best` : '4 Levels'}</span>
                      <Play className="w-3 h-3 fill-amber-700 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          CATEGORY B: COMPETITIVE LEARNING ZONE
          ======================================================== */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-amber-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">
            B
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
              COMPETITIVE LEARNING ZONE
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              State-Level MSCE Scholarship Tests & National Cricket Champions Arena
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* CRICKET CHAMPIONS CARD */}
        <div 
          onClick={() => onNavigateTab('cricket')}
          className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 text-white p-7 shadow-md hover:shadow-xl transition-all cursor-pointer"
        >
          <div className="flex items-start justify-between">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              🏏
            </div>
            <div className="flex items-center gap-2">
              {!canAccessFeature(currentStudent, 'cricket').allowed ? (
                <span className="text-xs font-extrabold uppercase bg-amber-400 text-slate-950 px-3 py-1 rounded-full flex items-center gap-1 shadow-xs">
                  <Lock className="w-3.5 h-3.5" /> ₹99 Premium Plan
                </span>
              ) : (
                <span className="text-xs font-extrabold uppercase bg-white/20 px-3 py-1 rounded-full">
                  ✓ Unlocked • 4 Levels
                </span>
              )}
            </div>
          </div>
          <h2 className="text-2xl font-display font-extrabold tracking-tight mb-2">
            CRICKET CHAMPIONS
          </h2>
          <p className="text-emerald-100 text-sm leading-relaxed mb-6 font-medium">
            Daily cricket current affairs, IPL updates, World Cup legends, match records, player statistics, and terminology across 4 difficulty levels.
          </p>
          <div className="flex items-center text-xs font-bold tracking-wide uppercase text-white gap-2 group-hover:gap-3 transition-all">
            <span>{canAccessFeature(currentStudent, 'cricket').allowed ? "Play Today's Cricket Quiz" : 'Click to Unlock with ₹99 Plan'}</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* MAHARASHTRA MSCE SCHOLARSHIP CARD */}
        <div 
          onClick={() => onNavigateTab('scholarship')}
          className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 text-white p-7 shadow-md hover:shadow-xl transition-all cursor-pointer"
        >
          <div className="flex items-start justify-between">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              🏆
            </div>
            <div className="flex items-center gap-2">
              {!canAccessFeature(currentStudent, 'scholarship').allowed ? (
                <span className="text-xs font-extrabold uppercase bg-slate-950/80 text-amber-300 px-3 py-1 rounded-full flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5" /> ₹99 Premium Plan
                </span>
              ) : (
                <span className="text-xs font-extrabold uppercase bg-white/20 px-3 py-1 rounded-full">
                  ✓ Unlocked • Std 4th & 7th
                </span>
              )}
            </div>
          </div>
          <h2 className="text-2xl font-display font-extrabold tracking-tight mb-2">
            MAHARASHTRA SCHOLARSHIP
          </h2>
          <p className="text-amber-100 text-sm leading-relaxed mb-6 font-medium">
            Official MSCE Scholarship examination practice: 10 tests for Std 4th & 10 tests for Std 7th, full 90m mock papers, and 7 official languages.
          </p>
          <div className="flex items-center text-xs font-bold tracking-wide uppercase text-white gap-2 group-hover:gap-3 transition-all">
            <span>{canAccessFeature(currentStudent, 'scholarship').allowed ? 'Start Scholarship Practice' : 'Click to Unlock with ₹99 Plan'}</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* ========================================================
          CATEGORY C: KNOWLEDGE AND ENTERTAINMENT ZONE
          ======================================================== */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-orange-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">
            C
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
              KNOWLEDGE & ENTERTAINMENT ZONE
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Chhatrapati Shivaji Maharaj Saga • 45 Audio Stories • 52+ Brain Puzzles • Sudoku Master • Drawing Studio
            </p>
          </div>
        </div>
      </div>

      {/* Historic Chhatrapati Shivaji Maharaj 50 Stories Feature Card */}
      <div 
        onClick={() => onNavigateTab('shivaji')}
        className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-600 via-amber-600 to-amber-700 text-white p-7 shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-amber-400/40"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-3xl">👑</span>
              {!canAccessFeature(currentStudent, 'shivaji').allowed ? (
                <span className="text-xs font-extrabold uppercase bg-slate-950/80 px-3 py-1 rounded-full text-amber-300 border border-amber-400/40 flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5" /> Unlocked in ₹49 Standard & ₹99 Premium
                </span>
              ) : (
                <span className="text-xs font-extrabold uppercase bg-emerald-500/30 px-3 py-1 rounded-full text-white border border-white/30">
                  ✓ Unlocked • 50 Stories
                </span>
              )}
              <span className="text-xs font-extrabold uppercase bg-black/25 px-3 py-1 rounded-full text-amber-200 border border-white/20">
                Natural Female Marathi & English Voice
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
              छत्रपती शिवाजी महाराज: ५० ऐतिहासिक अमृतकथा
            </h2>
            <p className="text-amber-100 text-xs sm:text-sm leading-relaxed font-medium">
              From birth at Shivneri Fort (1630) to the Grand Coronation at Raigad (1674). Experience the thrilling journey of Hindavi Swarajya with continuous full-story Female Marathi voice narration, moral lessons, and historical insights!
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider bg-white text-amber-950 px-5 py-3 rounded-2xl shadow-md group-hover:scale-105 transition-all self-start md:self-auto">
            <span>{canAccessFeature(currentStudent, 'shivaji').allowed ? 'Listen & Read 50 Stories' : 'Unlock Shivaji Stories (₹49)'}</span>
            <ArrowRight className="w-4 h-4 text-orange-600" />
          </div>
        </div>
      </div>

      {/* SUDOKU MASTER, PUZZLE CHAMPIONS & DRAWING STUDIO ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* SUDOKU MASTER CARD (FREE FOREVER) */}
        <div 
          onClick={() => onNavigateTab('sudoku')}
          className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 text-white p-6 shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                🧩
              </div>
              <span className="text-[11px] font-extrabold uppercase bg-white/25 px-2.5 py-1 rounded-full">
                ✓ Free Forever • 4×4, 6×6 & 9×9
              </span>
            </div>
            <h2 className="text-xl font-display font-extrabold tracking-tight mb-2">
              CHAMPION SUDOKU
            </h2>
            <p className="text-amber-100 text-xs sm:text-sm leading-relaxed mb-5 font-medium">
              Verified puzzles across Easy, Medium & Hard with live row, column, and box duplicate checking, pencil notes, and hints.
            </p>
          </div>
          <div className="flex items-center text-xs font-bold tracking-wide uppercase text-white gap-2 group-hover:gap-3 transition-all">
            <span>Play Interactive Sudoku</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* PUZZLE CHAMPIONS CARD (FREE FOREVER) */}
        <div 
          onClick={() => onNavigateTab('puzzles')}
          className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-6 shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                💡
              </div>
              <span className="text-[11px] font-extrabold uppercase bg-white/25 px-2.5 py-1 rounded-full">
                ✓ Free Forever • 52+ Puzzles
              </span>
            </div>
            <h2 className="text-xl font-display font-extrabold tracking-tight mb-2">
              BRAIN PUZZLES ARENA
            </h2>
            <p className="text-indigo-100 text-xs sm:text-sm leading-relaxed mb-5 font-medium">
              Solve logic riddles, clock geometry, prime numbers, sequences, word anagrams, and memory match cards with explanations.
            </p>
          </div>
          <div className="flex items-center text-xs font-bold tracking-wide uppercase text-white gap-2 group-hover:gap-3 transition-all">
            <span>Enter Puzzle Arena</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* DRAWING CHAMPIONS CARD (STANDARD ₹49 & PREMIUM ₹99) */}
        <div 
          onClick={() => onNavigateTab('drawing')}
          className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-500 via-pink-500 to-amber-500 text-white p-6 shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                🎨
              </div>
              {!canAccessFeature(currentStudent, 'drawing').allowed ? (
                <span className="text-[11px] font-extrabold uppercase bg-slate-950/80 text-amber-300 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Lock className="w-3 h-3" /> ₹49 Standard Plan
                </span>
              ) : (
                <span className="text-[11px] font-extrabold uppercase bg-white/25 px-2.5 py-1 rounded-full">
                  ✓ Unlocked • {drawingsCount} Saved
                </span>
              )}
            </div>
            <h2 className="text-xl font-display font-extrabold tracking-tight mb-2">
              DRAWING CHAMPIONS
            </h2>
            <p className="text-rose-100 text-xs sm:text-sm leading-relaxed mb-5 font-medium">
              Create, colour, and showcase your creativity! Digital canvas with pencil, brush, paint bucket, and coloring templates.
            </p>
          </div>
          <div className="flex items-center text-xs font-bold tracking-wide uppercase text-white gap-2 group-hover:gap-3 transition-all">
            <span>{canAccessFeature(currentStudent, 'drawing').allowed ? 'Open Drawing Studio' : 'Unlock Drawing Studio (₹49)'}</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* ========================================================
          CATEGORY D: TECHNOLOGY AND FUTURE SKILLS ZONE
          ======================================================== */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-purple-700 text-white font-bold flex items-center justify-center text-sm shadow-xs">
            D
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
              TECHNOLOGY & FUTURE SKILLS ZONE
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Artificial Intelligence • Computer Science • Microsoft Excel • Coding & Python
            </p>
          </div>
        </div>
      </div>

      {/* AI LEARNING ACADEMY PROMINENT FEATURE CARD */}
      <div 
        onClick={() => onNavigateTab('future-skills')}
        className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-900 to-amber-900 text-white p-7 sm:p-8 shadow-xl hover:shadow-2xl transition-all cursor-pointer border-2 border-purple-400/40"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-3xl">🤖</span>
              <span className="text-xs font-extrabold uppercase bg-amber-400 text-amber-950 px-3 py-1 rounded-full shadow-xs">
                ₹99 PREMIUM PLAN EXCLUSIVE
              </span>
              <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full text-purple-200">
                8 Modules • 24 Interactive Lessons
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
              AI LEARNING ACADEMY
            </h2>
            <p className="text-purple-200 text-xs sm:text-sm leading-relaxed font-medium">
              Learn Artificial Intelligence from Beginner to Advanced: Neural Networks, Machine Learning, Computer Vision, Speech Recognition, Generative Art, Robotics, and Responsible Ethics!
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider bg-white text-purple-950 px-5 py-3 rounded-2xl shadow-md group-hover:scale-105 transition-all self-start md:self-auto">
            <span>Explore AI Academy</span>
            <ArrowRight className="w-4 h-4 text-purple-600" />
          </div>
        </div>
      </div>

      {/* 🎓 LEARN • SHARE • GROW • EARN: AMBASSADOR & REFERRALS PROMINENT CARD */}
      <div 
        onClick={() => onNavigateTab('referrals')}
        className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white p-7 sm:p-8 shadow-xl hover:shadow-2xl transition-all cursor-pointer border-2 border-amber-300/40"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-3xl">🎁</span>
              <span className="text-xs font-extrabold uppercase bg-white text-orange-950 px-3 py-1 rounded-full shadow-xs">
                KNOWLEDGE AMBASSADOR PROGRAM
              </span>
              <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full text-amber-100">
                EARN ₹5 OR ₹10 CASH PER FRIEND
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
              LEARN • SHARE • GROW • EARN
            </h2>
            <p className="text-amber-100 text-xs sm:text-sm leading-relaxed font-medium">
              &quot;Learn More, Share Knowledge, Grow Together and Earn Exciting Rewards!&quot; Invite classmates & friends to Vacation Champions. Unlock the Diamond Ambassador Crown and withdraw earnings instantly to UPI or Bank!
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider bg-white text-orange-900 px-5 py-3 rounded-2xl shadow-md group-hover:scale-105 transition-all self-start md:self-auto">
            <span>Open Ambassador Hub</span>
            <ArrowRight className="w-4 h-4 text-orange-600" />
          </div>
        </div>
      </div>

      {/* ========================================================
          CATEGORY E: STUDENT ACCOUNT & MASTERY ZONE
          ======================================================== */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">
            E
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
              STUDENT ACCOUNT & MASTERY ZONE
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              30-Day Performance Graph • 45 Stories • Badges • Profile & Account Settings
            </p>
          </div>
        </div>
      </div>

      {/* 30-DAY VISUAL SUBJECT MASTERY & IMPROVEMENT CHART (RECHARTS) */}
      <StudentMasteryChart
        currentStudent={currentStudent}
        allAttempts={allAttempts}
        onSelectSubject={(subj) => onNavigateTab('quizzes', subj, 1)}
      />

      {/* STORY WORLD HIGHLIGHT (Section 7) */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50/60 rounded-3xl p-6 sm:p-8 border border-amber-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">📚</span>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-800">
                Story World (45 Original Audio Stories)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              15 English • 15 Hindi • 15 Marathi stories with continuous natural voice narration, vocabulary & comprehension questions.
            </p>
          </div>

          <button
            onClick={() => onNavigateTab('stories')}
            className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs transition-colors self-start sm:self-auto cursor-pointer flex items-center gap-1.5"
          >
            <span>Open Library ({storiesReadCount}/45 Read)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Featured Story Samples (1 English, 1 Hindi, 1 Marathi) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {allStories.filter(s => ['ENG-01', 'HIN-01', 'MAR-01'].includes(s.id)).map(story => (
            <div 
              key={story.id}
              onClick={() => onNavigateTab('stories')}
              className="bg-white rounded-2xl p-5 border border-amber-200/80 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                    {story.language}
                  </span>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {story.estimatedReadMinutes} mins
                  </span>
                </div>
                <h4 className="font-bold text-sm text-slate-800 mb-1">{story.title}</h4>
                <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">
                  {story.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700">
                <span>{currentStudent.completedStoryIds.includes(story.id) ? 'Completed ✅' : 'Listen Full Audio 🎧'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Badges & Achievements Shelf (Section 10) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-800">
              Your Champion Badges & Trophies
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Earned by mastering quizzes, reading stories, drawing, and maintaining daily streaks!
            </p>
          </div>
          <span className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
            {currentStudent.badges.length} of {ALL_BADGES.length} Unlocked
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {ALL_BADGES.map((b) => {
            const isUnlocked = currentStudent.badges.includes(b.id);
            return (
              <div
                key={b.id}
                className={`rounded-2xl p-3.5 text-center border transition-all ${isUnlocked ? 'bg-amber-50/60 border-amber-300 shadow-xs' : 'bg-slate-50 border-slate-200 opacity-50'}`}
              >
                <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center text-xl mb-2 ${isUnlocked ? 'bg-amber-400 text-white shadow-xs' : 'bg-slate-200 text-slate-400'}`}>
                  {isUnlocked ? '🏆' : '🔒'}
                </div>
                <h4 className="font-bold text-xs text-slate-800 leading-tight mb-1">{b.name}</h4>
                <p className="text-[10px] text-slate-500 line-clamp-2 leading-relaxed">{b.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. MY PROFILE & CREDENTIALS CARD (NAVIGATES TO PROFILE SECTION) */}
      <div 
        onClick={() => onNavigateTab('profile')}
        className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-200/80 shadow-xs hover:border-amber-300 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
      >
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-3xl shrink-0 group-hover:scale-105 transition-transform">
            {currentStudent.avatar || '🦁'}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-display font-extrabold text-slate-900 group-hover:text-amber-800 transition-colors">
                {currentStudent.name}'s Profile & Settings
              </h3>
              <span className="bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-full text-xs font-bold">
                {currentStudent.classLevel}
              </span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                currentStudent.isPhoneVerified
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                  : 'bg-slate-100 text-slate-600 border-slate-200'
              }`}>
                {currentStudent.isPhoneVerified ? 'Phone OTP Verified' : 'Phone Registered (Not OTP-Verified)'}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Mobile: +91 {currentStudent.mobile.slice(-10)} • Email: {currentStudent.email}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-amber-800 group-hover:translate-x-1 transition-transform self-start sm:self-auto">
          <span>Manage Profile & Account</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      {/* 4-LEVEL ROADMAP MODAL WHEN A SUBJECT IS CLICKED */}
      {selectedSubjectForLevels && (() => {
        const activeSubjData = ALL_14_SUBJECTS.find(s => s.name === selectedSubjectForLevels);
        const subjProgress = getSubjectLevelProgress(selectedSubjectForLevels);
        const maxUnlocked = subjProgress.maxUnlockedLevel;

        const LEVEL_META: { level: QuizLevel; title: string; subtitle: string; difficulty: string; diffBadge: string; description: string }[] = [
          { 
            level: 1, 
            title: 'Level 1 – Easy', 
            subtitle: 'Basic Foundation',
            difficulty: 'Easy', 
            diffBadge: 'bg-emerald-100 text-emerald-800 border-emerald-300',
            description: '10 unique foundational questions covering core concepts, vocabulary, and direct recall.'
          },
          { 
            level: 2, 
            title: 'Level 2 – Moderate', 
            subtitle: 'Concept Application',
            difficulty: 'Moderate', 
            diffBadge: 'bg-blue-100 text-blue-800 border-blue-300',
            description: '10 completely different questions applying concepts to multi-step problems and matching.'
          },
          { 
            level: 3, 
            title: 'Level 3 – Difficult', 
            subtitle: 'Analytical Thinking',
            difficulty: 'Difficult', 
            diffBadge: 'bg-amber-100 text-amber-800 border-amber-300',
            description: '10 completely different analytical questions, word problems, and spotting incorrect statements.'
          },
          { 
            level: 4, 
            title: 'Level 4 – Advanced', 
            subtitle: 'Higher-Order Mastery',
            difficulty: 'Advanced', 
            diffBadge: 'bg-purple-100 text-purple-800 border-purple-300',
            description: '10 completely different higher-order & tricky mastery questions with option shuffling.'
          }
        ];

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div 
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-amber-200 overflow-hidden flex flex-col max-h-[90vh]"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header Banner */}
              <div className={`p-6 bg-gradient-to-r ${activeSubjData?.bgGradient || 'from-amber-500 to-orange-600'} text-white relative`}>
                <button
                  onClick={() => setSelectedSubjectForLevels(null)}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl">
                    {activeSubjData?.icon || '🎯'}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-white/25 text-white border border-white/20">
                        {currentStudent.classLevel}
                      </span>
                      <span className="text-xs font-bold text-white/90">
                        4 Levels • 40 Questions Total
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold mt-1">
                      {selectedSubjectForLevels} Quiz Levels
                    </h3>
                  </div>
                </div>
              </div>

              {/* Modal Body: 4 Levels List */}
              <div className="p-6 overflow-y-auto space-y-4">
                <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-3.5 text-xs text-amber-900 font-medium flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Each level has <strong>strictly 10 unique questions</strong>. Score <strong>60% or higher</strong> to unlock the next level!
                  </span>
                </div>

                <div className="space-y-3">
                  {LEVEL_META.map((meta) => {
                    const isUnlocked = meta.level <= maxUnlocked;
                    const isCompleted = subjProgress.completedLevels.includes(meta.level);
                    const bestScore = subjProgress.bestScores[meta.level];

                    return (
                      <div
                        key={meta.level}
                        className={`rounded-2xl p-4 border transition-all ${
                          isUnlocked 
                            ? 'bg-white border-amber-200 hover:border-amber-400 shadow-xs' 
                            : 'bg-slate-50 border-slate-200 opacity-70'
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="font-extrabold text-sm sm:text-base text-slate-800">
                                {meta.title}
                              </span>
                              <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${meta.diffBadge}`}>
                                {meta.difficulty}
                              </span>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                                10 Questions
                              </span>
                              {isCompleted && (
                                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1">
                                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                                  <span>Passed {bestScore ? `(${bestScore}/10)` : ''}</span>
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-600 font-medium">
                              {meta.description}
                            </p>
                          </div>

                          {/* CTA or Locked State */}
                          <div className="shrink-0">
                            {isUnlocked ? (
                              <button
                                onClick={() => {
                                  const subj = selectedSubjectForLevels;
                                  setSelectedSubjectForLevels(null);
                                  onNavigateTab('quizzes', subj, meta.level);
                                }}
                                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                              >
                                <Play className="w-3.5 h-3.5 fill-white" />
                                <span>{isCompleted ? 'Play Again (10 Qs)' : `Start Level ${meta.level}`}</span>
                              </button>
                            ) : (
                              <div className="px-3.5 py-2 rounded-xl bg-slate-200/80 text-slate-500 text-xs font-bold flex items-center gap-1.5 cursor-not-allowed">
                                <Lock className="w-3.5 h-3.5" />
                                <span>Unlock at Level {meta.level - 1}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">
                  Class: <strong>{currentStudent.classLevel}</strong>
                </span>
                <button
                  onClick={() => {
                    const subj = selectedSubjectForLevels;
                    setSelectedSubjectForLevels(null);
                    onNavigateTab('quizzes', subj, 1);
                  }}
                  className="font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Open Full Quiz Arena</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
};
