import React, { useState, useEffect } from 'react';
import { 
  Award, 
  Share2, 
  Copy, 
  Check, 
  Wallet, 
  ArrowUpRight, 
  Users, 
  Sparkles, 
  Trophy, 
  GraduationCap, 
  School, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight, 
  Send, 
  Building2, 
  IndianRupee,
  Star,
  FileCheck,
  TrendingUp,
  RefreshCw,
  Gift
} from 'lucide-react';
import { referralService } from '../services/referralService';
import { 
  ReferralAccount, 
  ReferralTransaction, 
  ReferralLeaderboardEntry,
  AmbassadorCategory 
} from '../types/referral';
import { TeacherCertificateModal } from './TeacherCertificateModal';

interface ReferralHubViewProps {
  currentUserId?: string;
  userName?: string;
  userEmail?: string;
  userMobile?: string;
  initialRole?: 'student' | 'teacher' | 'parent';
  onNavigateUpgrade?: () => void;
}

export const ReferralHubView: React.FC<ReferralHubViewProps> = ({
  currentUserId = 'student1',
  userName = 'Student Champion',
  userEmail = '',
  userMobile = '',
  initialRole = 'student',
  onNavigateUpgrade
}) => {
  // State
  const [activeTab, setActiveTab] = useState<'student' | 'teacher' | 'leaderboard'>(
    initialRole === 'teacher' ? 'teacher' : 'student'
  );
  const [account, setAccount] = useState<ReferralAccount | null>(null);
  const [transactions, setTransactions] = useState<ReferralTransaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // Leaderboard data
  const [leaderboard, setLeaderboard] = useState<{
    students: ReferralLeaderboardEntry[];
    teachers: ReferralLeaderboardEntry[];
    diamonds: ReferralLeaderboardEntry[];
  }>({ students: [], teachers: [], diamonds: [] });

  // Payout Modal
  const [showPayoutModal, setShowPayoutModal] = useState(false);
  const [payoutMethod, setPayoutMethod] = useState<'UPI' | 'BANK'>('UPI');
  const [payoutAmount, setPayoutAmount] = useState<number>(50);
  const [payoutUpi, setPayoutUpi] = useState('');
  const [bankHolder, setBankHolder] = useState(userName);
  const [bankAccount, setBankAccount] = useState('');
  const [bankIfsc, setBankIfsc] = useState('');
  const [bankName, setBankName] = useState('');
  const [payoutSubmitting, setPayoutSubmitting] = useState(false);
  const [payoutMessage, setPayoutMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Teacher Verification Form
  const [schoolNameInput, setSchoolNameInput] = useState('');
  const [teacherIdInput, setTeacherIdInput] = useState('');
  const [verifySubmitting, setVerifySubmitting] = useState(false);
  const [verifySuccess, setVerifySuccess] = useState(false);

  // Certificate Modal
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  const loadData = async () => {
    try {
      setRefreshing(true);
      const userType = activeTab === 'teacher' ? 'teacher' : 'student';
      const res = await referralService.getAccount(currentUserId, userType, userName, userEmail, userMobile);
      if (res.success && res.account) {
        setAccount(res.account);
        setTransactions(res.transactions || []);
        if (res.account.schoolName) {
          setSchoolNameInput(res.account.schoolName);
        }
      }

      // Load Leaderboard
      const lb = await referralService.getLeaderboard();
      if (lb.success) {
        setLeaderboard({
          students: lb.students || [],
          teachers: lb.teachers || [],
          diamonds: lb.diamonds || []
        });
      }
    } catch (err) {
      console.error('Error loading referral hub data:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [activeTab, currentUserId]);

  const handleCopyCode = () => {
    if (!account) return;
    navigator.clipboard.writeText(account.referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getShareUrl = () => {
    if (!account) return window.location.origin;
    return `${window.location.origin}/?ref=${encodeURIComponent(account.referralCode)}`;
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(getShareUrl());
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleWhatsAppShare = () => {
    if (!account) return;
    const isTeacher = account.userType === 'teacher';
    const text = isTeacher
      ? `🏆 *Special Invitation from Educator ${account.name}!*\n\nEmpower your child with *Vacation Champions* - complete with daily quizzes, 45 audio stories, and modern AI Learning Academy.\n\nUse my Educator Referral Code: *${account.referralCode}* to claim ₹5/₹10 instant cashback on enrollment!\n\n👉 Join here: ${getShareUrl()}`
      : `🎓 *Learn • Share • Grow • Earn with Vacation Champions!*\n\nHey! I'm learning on Vacation Champions with fun quizzes, story adventures, and AI Academy.\n\nUse my Referral Code *${account.referralCode}* to receive ₹5 (Basic) or ₹10 (Premium) instant cashback!\n\n👉 Join now: ${getShareUrl()}`;

    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handlePayoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!account) return;

    if (payoutAmount < 50) {
      setPayoutMessage({ type: 'error', text: 'Minimum withdrawal amount is ₹50.' });
      return;
    }

    if (payoutAmount > account.wallet.availableBalance) {
      setPayoutMessage({ type: 'error', text: `Insufficient balance. Available: ₹${account.wallet.availableBalance}` });
      return;
    }

    if (payoutMethod === 'UPI' && !payoutUpi.trim()) {
      setPayoutMessage({ type: 'error', text: 'Please enter a valid UPI ID (e.g. mobile@upi).' });
      return;
    }

    if (payoutMethod === 'BANK' && (!bankAccount.trim() || !bankIfsc.trim())) {
      setPayoutMessage({ type: 'error', text: 'Please provide Bank Account Number and IFSC Code.' });
      return;
    }

    setPayoutSubmitting(true);
    setPayoutMessage(null);

    try {
      const res = await referralService.requestPayout({
        userId: account.userId,
        amount: payoutAmount,
        method: payoutMethod,
        upiId: payoutMethod === 'UPI' ? payoutUpi.trim() : undefined,
        bankDetails: payoutMethod === 'BANK' ? {
          accountHolderName: bankHolder,
          accountNumber: bankAccount,
          ifscCode: bankIfsc.toUpperCase(),
          bankName: bankName || 'Bank'
        } : undefined
      });

      if (res.success) {
        setPayoutMessage({ type: 'success', text: res.message });
        setTimeout(() => {
          setShowPayoutModal(false);
          setPayoutMessage(null);
          loadData();
        }, 2200);
      } else {
        setPayoutMessage({ type: 'error', text: res.message });
      }
    } catch (err: any) {
      setPayoutMessage({ type: 'error', text: err.message || 'Error submitting payout request.' });
    } finally {
      setPayoutSubmitting(false);
    }
  };

  const handleTeacherVerifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!schoolNameInput.trim()) return;

    setVerifySubmitting(true);
    try {
      const res = await referralService.submitTeacherVerification({
        userId: currentUserId,
        schoolName: schoolNameInput.trim(),
        teacherIdNumber: teacherIdInput.trim() || undefined
      });

      if (res.success) {
        setVerifySuccess(true);
        loadData();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setVerifySubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      {/* 1. BRAND HERO HEADER */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-amber-950 border border-amber-500/30 p-8 sm:p-12 mb-8 text-white">
        {/* Decorative Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            {/* Tagline */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>LEARN • SHARE • GROW • EARN</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-3">
              Champion Ambassador Hub
            </h1>
            <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed font-medium">
              &quot;Learn More, Share Knowledge, Grow Together and Earn Exciting Rewards!&quot;
            </p>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Invite students & fellow learners to Vacation Champions. When they enroll in <strong className="text-amber-300">Basic (₹49)</strong> or <strong className="text-amber-300">Premium (₹99)</strong>, you earn cash rewards directly to your wallet — and they get instant cashback!
            </p>
          </div>

          {/* Quick Category Badges */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 min-w-[240px]">
            <div className="flex items-center space-x-3 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <span className="text-2xl">🎁</span>
              <div>
                <div className="text-xs font-bold text-amber-300 uppercase">Students</div>
                <div className="text-xs text-white font-medium">Knowledge Ambassador</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <span className="text-2xl">🏆</span>
              <div>
                <div className="text-xs font-bold text-orange-300 uppercase">Teachers</div>
                <div className="text-xs text-white font-medium">Educator Excellence</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <span className="text-2xl">💎</span>
              <div>
                <div className="text-xs font-bold text-cyan-300 uppercase">Top Performers</div>
                <div className="text-xs text-white font-medium">Diamond Ambassador</div>
              </div>
            </div>
          </div>
        </div>

        {/* Reward Formula Banner */}
        <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <div className="text-xs text-slate-300">Basic Plan (₹49)</div>
            <div className="text-lg font-black text-amber-300">Referrer: ₹5</div>
            <div className="text-[11px] text-emerald-400 font-semibold">+ ₹5 Buyer Cashback</div>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <div className="text-xs text-slate-300">Premium Plan (₹99)</div>
            <div className="text-lg font-black text-amber-300">Referrer: ₹10</div>
            <div className="text-[11px] text-emerald-400 font-semibold">+ ₹10 Buyer Cashback</div>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <div className="text-xs text-slate-300">Withdrawal Method</div>
            <div className="text-base font-bold text-white">Instant UPI & Bank</div>
            <div className="text-[11px] text-slate-400">Min. ₹50 threshold</div>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <div className="text-xs text-slate-300">Fraud Protection</div>
            <div className="text-base font-bold text-emerald-300">Verified Paid Only</div>
            <div className="text-[11px] text-slate-400">Strict zero self-referral</div>
          </div>
        </div>
      </div>

      {/* 2. TAB CONTROLS */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-8">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={() => setActiveTab('student')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
              activeTab === 'student'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Student Ambassador</span>
          </button>

          <button
            onClick={() => setActiveTab('teacher')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
              activeTab === 'teacher'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <School className="w-4 h-4" />
            <span>Teacher Portal</span>
          </button>

          <button
            onClick={() => setActiveTab('leaderboard')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
              activeTab === 'leaderboard'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>Leaderboard & Hall of Fame</span>
          </button>
        </div>

        <button
          onClick={loadData}
          disabled={refreshing}
          className="flex items-center space-x-1 text-xs text-gray-500 hover:text-orange-600 font-semibold px-2 py-1 rounded transition-colors cursor-pointer"
          title="Refresh Data"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin' : ''}`} />
          <span className="hidden sm:inline">Refresh</span>
        </button>
      </div>

      {/* 3. MAIN TAB CONTENT */}
      {activeTab === 'leaderboard' ? (
        /* LEADERBOARD VIEW */
        <div className="space-y-8 animate-fadeIn">
          {/* Diamond Hall of Fame */}
          <div className="bg-gradient-to-r from-sky-950 via-slate-900 to-cyan-950 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 text-white shadow-xl">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl">💎</span>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-cyan-300">Diamond Ambassador Hall of Fame</h3>
                <p className="text-xs sm:text-sm text-slate-300">Elite Champions who have successfully inspired 50+ paid learners</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {leaderboard.diamonds.length > 0 ? (
                leaderboard.diamonds.map((ambassador, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-cyan-400/20 flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-black text-lg shadow-lg">
                      #{idx + 1}
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">{ambassador.name}</div>
                      <div className="text-xs text-cyan-200">{ambassador.schoolName || 'Champion Scholar'}</div>
                      <div className="text-xs text-amber-300 font-bold mt-1">
                        {ambassador.paidReferrals} Paid • ₹{ambassador.totalEarned} Earned
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-6 text-slate-400 text-sm">
                  Be the first champion to reach 50 paid referrals and claim your spot in the Diamond Hall of Fame!
                </div>
              )}
            </div>
          </div>

          {/* Side by side Leaderboards: Students and Teachers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top Student Ambassadors */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-md p-6">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Top Knowledge Ambassadors</h4>
                    <p className="text-xs text-gray-500">Student monthly rankings</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200">
                  Students
                </span>
              </div>

              <div className="divide-y divide-gray-100">
                {leaderboard.students.map((entry, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        idx === 0 ? 'bg-amber-400 text-white' : idx === 1 ? 'bg-gray-300 text-gray-700' : idx === 2 ? 'bg-amber-600 text-white' : 'text-gray-400'
                      }`}>
                        {idx + 1}
                      </span>
                      <div>
                        <div className="font-semibold text-sm text-gray-900">{entry.name}</div>
                        <div className="text-[11px] text-gray-400">{entry.badge}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-gray-900">{entry.paidReferrals} referrals</div>
                      <div className="text-xs font-semibold text-emerald-600">₹{entry.totalEarned} earned</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Teacher Ambassadors */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-md p-6">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                    <School className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Top Educator Ambassadors</h4>
                    <p className="text-xs text-gray-500">Verified Teachers & Mentors</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                  Teachers
                </span>
              </div>

              <div className="divide-y divide-gray-100">
                {leaderboard.teachers.map((entry, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        idx === 0 ? 'bg-amber-400 text-white' : idx === 1 ? 'bg-gray-300 text-gray-700' : idx === 2 ? 'bg-amber-600 text-white' : 'text-gray-400'
                      }`}>
                        {idx + 1}
                      </span>
                      <div>
                        <div className="font-semibold text-sm text-gray-900">{entry.name}</div>
                        <div className="text-[11px] text-gray-500 font-medium">{entry.schoolName || 'Partner School'}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-gray-900">{entry.paidReferrals} students</div>
                      <div className="text-xs font-semibold text-emerald-600">₹{entry.totalEarned} earned</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* STUDENT OR TEACHER DASHBOARD VIEW */
        <div className="space-y-8 animate-fadeIn">
          {/* TEACHER VERIFICATION NOTICE CARD (If teacher tab) */}
          {activeTab === 'teacher' && (
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-300 rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
                    <School className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-extrabold text-gray-900 text-lg">Educator Excellence Ambassador Portal</h3>
                      {account?.verificationStatus === 'VERIFIED' ? (
                        <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>STATE VERIFIED</span>
                        </span>
                      ) : account?.verificationStatus === 'PENDING' ? (
                        <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
                          <Clock className="w-3.5 h-3.5 text-amber-600" />
                          <span>VERIFICATION PENDING</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-100 text-gray-700 border border-gray-300">
                          <span>REGISTRATION REQUIRED</span>
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      Certified teachers receive exclusive classroom passes, school honor badges, and the official <strong className="text-amber-800">State Educator Excellence Award</strong> at 100 students!
                    </p>
                  </div>
                </div>

                {account?.verificationStatus === 'VERIFIED' ? (
                  <button
                    onClick={() => setShowCertificateModal(true)}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    <Award className="w-4 h-4" />
                    <span>View Official Certificate</span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      const el = document.getElementById('teacher-verify-form');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow transition-colors cursor-pointer"
                  >
                    Submit School Credentials
                  </button>
                )}
              </div>
            </div>
          )}

          {/* 3.1 TOP CARDS GRID: 1. Referral Code Card, 2. Referral Wallet Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* CARD 1: Unique Code & WhatsApp Sharing */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                      <Share2 className="w-4 h-4" />
                    </div>
                    <h3 className="font-extrabold text-gray-900 text-lg">Your Unique Referral Code</h3>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                    {account?.ambassadorCategory === 'diamond_ambassador' ? '💎 Diamond' : activeTab === 'teacher' ? '🏆 Educator' : '🎁 Knowledge Ambassador'}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 mb-6">
                  Share this code or link with friends, classmates, or school students. When they upgrade to Basic (₹49) or Premium (₹99), you receive ₹5 or ₹10 cash rewards, and they get instant cashback!
                </p>

                {/* Big Referral Code Display */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border-2 border-dashed border-orange-400 mb-4">
                  <div>
                    <div className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">Active Code</div>
                    <div className="text-2xl sm:text-3xl font-mono font-black text-gray-900 tracking-wider">
                      {account?.referralCode || 'VC-STU-CHAMP'}
                    </div>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center space-x-1 px-4 py-2 bg-white hover:bg-orange-50 text-orange-600 font-bold text-xs rounded-xl border border-orange-200 shadow-sm transition-all cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                </div>

                {/* Direct Tracking Link */}
                <div className="flex items-center space-x-2 p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-600 mb-6">
                  <span className="truncate flex-1 font-mono text-[11px]">{getShareUrl()}</span>
                  <button
                    onClick={handleCopyLink}
                    className="p-1.5 text-gray-500 hover:text-orange-600 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
                    title="Copy Link"
                  >
                    {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Action Buttons: WhatsApp and Link Sharing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                <button
                  onClick={handleWhatsAppShare}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 fill-white" />
                  <span>Share on WhatsApp</span>
                </button>

                <button
                  onClick={handleCopyLink}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-gray-900 hover:bg-black text-white font-bold text-sm rounded-xl shadow transition-all cursor-pointer"
                >
                  <Copy className="w-4 h-4" />
                  <span>{copiedLink ? 'Link Copied!' : 'Copy Direct Link'}</span>
                </button>
              </div>
            </div>

            {/* CARD 2: Referral Wallet Card */}
            <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-950 text-white rounded-3xl border border-gray-800 shadow-xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                      <Wallet className="w-4 h-4" />
                    </div>
                    <h3 className="font-extrabold text-white text-lg">Referral Earnings Wallet</h3>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    Live Balance
                  </span>
                </div>

                {/* Balances Display */}
                <div className="grid grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-xs text-slate-400 font-medium">Available to Withdraw</div>
                    <div className="text-3xl font-black text-emerald-400 flex items-baseline space-x-1 mt-1">
                      <span>₹{account?.wallet.availableBalance ?? 0}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">Min. ₹50 threshold</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-xs text-slate-400 font-medium">Total Lifetime Earned</div>
                    <div className="text-3xl font-black text-amber-300 flex items-baseline space-x-1 mt-1">
                      <span>₹{account?.wallet.totalEarned ?? 0}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      ₹{account?.wallet.totalWithdrawn ?? 0} withdrawn
                    </div>
                  </div>
                </div>

                {/* Stats Breakdown */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-white/5 border border-white/5 text-center my-4">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Paid Referrals</div>
                    <div className="text-base font-bold text-white mt-0.5">{account?.stats.paidReferralsCount ?? 0}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">₹49 Basic (₹5)</div>
                    <div className="text-base font-bold text-amber-300 mt-0.5">{account?.stats.plan49Referrals ?? 0}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">₹99 Premium (₹10)</div>
                    <div className="text-base font-bold text-emerald-400 mt-0.5">{account?.stats.plan99Referrals ?? 0}</div>
                  </div>
                </div>
              </div>

              {/* Withdraw Button */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="text-xs text-slate-400">
                  {account && account.wallet.availableBalance < 50
                    ? `Earn ₹${50 - account.wallet.availableBalance} more to unlock withdrawal`
                    : 'Ready for withdrawal to UPI or Bank'}
                </div>
                <button
                  onClick={() => setShowPayoutModal(true)}
                  disabled={!account || account.wallet.availableBalance < 50}
                  className={`flex items-center space-x-1 px-5 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                    account && account.wallet.availableBalance >= 50
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/20'
                      : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                  <span>Withdraw Funds</span>
                </button>
              </div>
            </div>
          </div>

          {/* 3.2 MILESTONES & REWARDS TRACKER */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-md p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <div className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-amber-500" />
                  <h3 className="font-extrabold text-gray-900 text-lg">
                    {activeTab === 'teacher' ? 'Educator Excellence Milestones' : 'Knowledge Ambassador Milestones'}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-500">
                  Unlock prestigious badges, free subscription extensions, and official honor awards as your referrals grow!
                </p>
              </div>

              <div className="text-xs font-bold text-gray-700 bg-gray-100 px-3 py-1.5 rounded-xl self-start sm:self-auto">
                Current: <span className="text-orange-600">{account?.stats.paidReferralsCount ?? 0}</span> Paid Referrals
              </div>
            </div>

            {/* Milestone Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {account?.milestones.map((m) => {
                const count = account?.stats.paidReferralsCount ?? 0;
                const isUnlocked = m.unlocked || count >= m.count;
                const progressPct = Math.min(100, Math.round((count / m.count) * 100));

                return (
                  <div
                    key={m.id}
                    className={`rounded-2xl p-5 border transition-all ${
                      isUnlocked
                        ? 'bg-gradient-to-b from-amber-50 to-orange-50 border-amber-300 shadow-sm'
                        : 'bg-gray-50 border-gray-200 opacity-80'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-white border border-gray-200 text-gray-800">
                        {m.count} Referrals
                      </span>
                      {isUnlocked ? (
                        <span className="flex items-center space-x-1 text-[11px] font-bold text-emerald-600">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Unlocked</span>
                        </span>
                      ) : (
                        <span className="text-[11px] font-bold text-gray-400">
                          {m.count - count} more to go
                        </span>
                      )}
                    </div>

                    <div className="font-extrabold text-gray-900 text-sm mb-1">{m.title}</div>
                    <p className="text-xs text-gray-600 mb-4">{m.rewardDescription}</p>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          isUnlocked ? 'bg-amber-500' : 'bg-orange-400'
                        }`}
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3.3 TEACHER VERIFICATION FORM (Only visible in Teacher Tab) */}
          {activeTab === 'teacher' && account?.verificationStatus !== 'VERIFIED' && (
            <div id="teacher-verify-form" className="bg-white rounded-3xl border border-amber-200 shadow-md p-6 sm:p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Building2 className="w-6 h-6 text-amber-600" />
                <div>
                  <h3 className="font-extrabold text-gray-900 text-lg">School & Educator Verification</h3>
                  <p className="text-xs text-gray-500">Provide your institution details to unlock Educator Excellence perks</p>
                </div>
              </div>

              {verifySuccess ? (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Verification request submitted successfully! Our academic team will verify your school details within 24 hours.</span>
                </div>
              ) : (
                <form onSubmit={handleTeacherVerifySubmit} className="space-y-4 max-w-2xl">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      School or Institution Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={schoolNameInput}
                      onChange={(e) => setSchoolNameInput(e.target.value)}
                      placeholder="e.g. St. Xavier's High School, Pune"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Teacher ID / Employee Code (Optional)
                    </label>
                    <input
                      type="text"
                      value={teacherIdInput}
                      onChange={(e) => setTeacherIdInput(e.target.value)}
                      placeholder="e.g. TCH-2026-981"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={verifySubmitting || !schoolNameInput.trim()}
                    className="px-6 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-sm rounded-xl shadow transition-all cursor-pointer"
                  >
                    {verifySubmitting ? 'Submitting...' : 'Submit Verification'}
                  </button>
                </form>
              )}
            </div>
          )}

          {/* 3.4 RECENT ATTRIBUTED TRANSACTIONS */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-md p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-extrabold text-gray-900 text-lg">Recent Referral Activity</h3>
                <p className="text-xs text-gray-500">Live ledger of rewarded paid enrollments</p>
              </div>
              <span className="text-xs font-semibold text-gray-500">
                {transactions.length} record(s)
              </span>
            </div>

            {transactions.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <Users className="w-10 h-10 mx-auto text-gray-300 mb-2" />
                <p className="text-sm font-medium">No referral purchases recorded yet.</p>
                <p className="text-xs text-gray-400 mt-1">
                  Share your unique referral code or link with friends to get your first ₹5/₹10 reward!
                </p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {transactions.map((tx) => (
                  <div key={tx.id} className="py-3.5 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                        +₹{tx.referrerReward}
                      </div>
                      <div>
                        <div className="font-bold text-sm text-gray-900">
                          {tx.buyerStudentName || 'Student'} enrolled in {tx.buyerPlan.toUpperCase()} (₹{tx.planAmount})
                        </div>
                        <div className="text-[11px] text-gray-400 font-mono">
                          {new Date(tx.createdAt).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })} • Tx ID: {tx.id.slice(0, 14)}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      CREDITED
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 4. WITHDRAWAL PAYOUT MODAL */}
      {showPayoutModal && account && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl overflow-hidden border border-gray-100">
            <div className="px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Wallet className="w-5 h-5" />
                <h3 className="font-bold text-base">Withdraw Referral Earnings</h3>
              </div>
              <button
                onClick={() => setShowPayoutModal(false)}
                className="text-white/80 hover:text-white p-1 rounded-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handlePayoutSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Available Balance
                </label>
                <div className="text-2xl font-black text-emerald-600">
                  ₹{account.wallet.availableBalance}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Withdrawal Amount (₹) *
                </label>
                <input
                  type="number"
                  min={50}
                  max={account.wallet.availableBalance}
                  value={payoutAmount}
                  onChange={(e) => setPayoutAmount(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-bold"
                  required
                />
                <span className="text-[11px] text-gray-400">Minimum withdrawal: ₹50</span>
              </div>

              {/* Method Selector */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Payment Method
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPayoutMethod('UPI')}
                    className={`py-2 px-3 rounded-xl font-bold text-xs border text-center transition-all cursor-pointer ${
                      payoutMethod === 'UPI'
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                        : 'border-gray-200 text-gray-600'
                    }`}
                  >
                    UPI ID (GPay / PhonePe)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPayoutMethod('BANK')}
                    className={`py-2 px-3 rounded-xl font-bold text-xs border text-center transition-all cursor-pointer ${
                      payoutMethod === 'BANK'
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                        : 'border-gray-200 text-gray-600'
                    }`}
                  >
                    Direct Bank Transfer
                  </button>
                </div>
              </div>

              {payoutMethod === 'UPI' ? (
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    UPI ID *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 9876543210@upi or name@okaxis"
                    value={payoutUpi}
                    onChange={(e) => setPayoutUpi(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-mono"
                  />
                </div>
              ) : (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Account Holder Name
                    </label>
                    <input
                      type="text"
                      required
                      value={bankHolder}
                      onChange={(e) => setBankHolder(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-gray-300 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Bank Account Number
                    </label>
                    <input
                      type="text"
                      required
                      value={bankAccount}
                      onChange={(e) => setBankAccount(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-gray-300 text-sm font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        IFSC Code
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="SBIN0001234"
                        value={bankIfsc}
                        onChange={(e) => setBankIfsc(e.target.value.toUpperCase())}
                        className="w-full px-3 py-1.5 rounded-lg border border-gray-300 text-sm font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Bank Name
                      </label>
                      <input
                        type="text"
                        placeholder="SBI, HDFC..."
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg border border-gray-300 text-sm"
                      />
                    </div>
                  </div>
                </div>
              )}

              {payoutMessage && (
                <div className={`p-3 rounded-xl text-xs font-medium flex items-center space-x-2 ${
                  payoutMessage.type === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-800'
                }`}>
                  {payoutMessage.type === 'success' ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <AlertCircle className="w-4 h-4 text-red-600" />}
                  <span>{payoutMessage.text}</span>
                </div>
              )}

              <div className="pt-2 flex items-center justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowPayoutModal(false)}
                  className="px-4 py-2 rounded-xl text-gray-600 hover:bg-gray-100 text-xs font-bold transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={payoutSubmitting}
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow transition-colors cursor-pointer"
                >
                  {payoutSubmitting ? 'Submitting...' : 'Confirm Withdrawal'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 5. TEACHER CERTIFICATE MODAL */}
      <TeacherCertificateModal
        isOpen={showCertificateModal}
        onClose={() => setShowCertificateModal(false)}
        teacherName={account?.name || userName}
        schoolName={account?.schoolName || 'Vidya Mandir Partner School'}
        referralCount={account?.stats.paidReferralsCount || 100}
      />
    </div>
  );
};
