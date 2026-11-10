import React, { useState, useEffect } from 'react';
import {
  X, User, Lock, Phone, Mail, School, GraduationCap, ShieldAlert,
  Sparkles, CheckCircle2, Eye, EyeOff, ArrowLeft, KeyRound, Gift, MapPin
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ClassLevel } from '../types';
import {
  registerFirebaseEmailUser,
  saveStudentProfileToFirestore,
} from '../services/firebase';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'login' | 'register' | 'parent' | 'admin' | 'forgot';
  initialEmail?: string;
  onSuccess?: () => void;
}

const CLASS_LEVELS: ClassLevel[] = [
  'Class 2',
  'Class 3',
  'Class 4',
  'Class 5',
  'Class 6',
  'Class 7',
  'Class 8',
];

const AVATARS = ['🦁', '🐯', '🐼', '🦊', '🚀', '🌟', '🦋', '🐬'];

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'login',
  initialEmail = '',
  onSuccess,
}) => {
  const {
    studentsList,
    registerStudent,
    loginWithEmail,
    loginWithVerifiedPhone,
    loginAsParent,
    loginAsAdmin,
    loginAsSampleAccount,
    recoverAccount,
  } = useApp();

  const [tab, setTab] = useState<'login' | 'register' | 'parent' | 'admin' | 'forgot'>(defaultTab);
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');

  // Student Login State
  const [loginEmail, setLoginEmail] = useState(initialEmail);
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loginPhoneInput, setLoginPhoneInput] = useState('');

  // Forgot Password State (Registered Email Address)
  const [resetEmail, setResetEmail] = useState(initialEmail);
  const [resetEmailSentCount, setResetEmailSentCount] = useState(0);

  // Register State (Email Auth + Compulsory Unique 10-Digit Mobile, NO OTP, NO CAPTCHA)
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regMobile, setRegMobile] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [regClass, setRegClass] = useState<ClassLevel>('Class 5');
  const [regAvatar, setRegAvatar] = useState('🌟');
  const [regSchool, setRegSchool] = useState('');
  const [regParentName, setRegParentName] = useState('');
  const [regCity, setRegCity] = useState('Pune');
  const [regReferralCode, setRegReferralCode] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get('ref') || localStorage.getItem('vc_pending_ref_code') || '';
    } catch {
      return '';
    }
  });
  const [regRoleType, setRegRoleType] = useState<'student' | 'teacher'>('student');

  // Parent & Admin Login State
  const [parentEmail, setParentEmail] = useState('rajesh.sharma@parent.com');
  const [parentPassword, setParentPassword] = useState('');
  const [adminEmail, setAdminEmail] = useState('ronakvarade2022@gmail.com');
  const [adminPassword, setAdminPassword] = useState('');

  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTab(defaultTab);
    if (initialEmail) {
      setLoginEmail(initialEmail);
      setResetEmail(initialEmail);
    }
    setError('');
    setSuccessMsg('');
  }, [defaultTab, initialEmail, isOpen]);

  if (!isOpen) return null;

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const isValidMobile = (mobile: string) => /^[6-9]\d{9}$/.test(mobile.trim());

  // --- 1. Student Login via Email & Password ---
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    if (!isValidEmail(loginEmail)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!loginPassword) {
      setError('Please enter your password.');
      return;
    }

    setIsLoading(true);
    const res = await loginWithEmail(loginEmail.trim(), loginPassword);
    setIsLoading(false);

    if (!res.success) {
      setError(res.message);
      return;
    }

    onSuccess?.();
    onClose();
  };

  // --- 2. Student Login via Registered 10-Digit Mobile Number (No OTP, No CAPTCHA) ---
  const handleMobileLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    const cleanMobile = loginPhoneInput.replace(/\D/g, '').slice(-10);
    if (!isValidMobile(cleanMobile)) {
      setError('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    const res = loginWithVerifiedPhone(cleanMobile);
    if (!res.success) {
      setError(res.message);
      return;
    }

    onSuccess?.();
    onClose();
  };

  // --- 3. Student Registration (Email Auth + Compulsory Unique 10-Digit Mobile, NO OTP, NO CAPTCHA) ---
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    if (!regName.trim() || regName.trim().length < 2) {
      setError('Please enter the student full name.');
      return;
    }

    const cleanEmail = regEmail.trim().toLowerCase();
    if (!isValidEmail(cleanEmail)) {
      setError('Please enter a valid email address.');
      return;
    }

    const cleanMobile = regMobile.replace(/\D/g, '').slice(-10);
    if (!isValidMobile(cleanMobile)) {
      setError('Mobile number is compulsory. Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    // Strict Unique Mobile Check (One mobile number = One account)
    const duplicateMobile = studentsList.find(
      s => s.mobile.replace(/\D/g, '').slice(-10) === cleanMobile
    );
    if (duplicateMobile) {
      setError(
        `One mobile number = One account. Mobile number ${cleanMobile} is already registered with "${duplicateMobile.name}" (${duplicateMobile.classLevel}).`
      );
      return;
    }

    // Strict Unique Email Check (One email = One account)
    const duplicateEmail = studentsList.find(
      s => s.email.trim().toLowerCase() === cleanEmail
    );
    if (duplicateEmail) {
      setError(
        `Email address "${cleanEmail}" is already registered with "${duplicateEmail.name}". Please sign in instead.`
      );
      return;
    }

    if (regPassword.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (regPassword !== regConfirmPassword) {
      setError('Passwords do not match. Please re-enter.');
      return;
    }

    if (!regSchool.trim()) {
      setError('Please enter your school name.');
      return;
    }

    setIsLoading(true);

    // 1. Create Firebase Email Auth User
    const fbReg = await registerFirebaseEmailUser(cleanEmail, regPassword);
    if (!fbReg.success && fbReg.error?.includes('already registered')) {
      setIsLoading(false);
      setError(fbReg.error);
      return;
    }

    // 2. Register Student in AppContext (Automatically grants Lifetime Free Plan ₹0)
    const regResult = registerStudent(
      {
        name: regName.trim(),
        email: cleanEmail,
        mobile: cleanMobile,
        classLevel: regClass,
        avatar: regAvatar,
        schoolName: regSchool.trim(),
        parentName: regParentName.trim() || 'Parent',
        parentConsent: true,
      },
      {
        verifiedFirebaseUid: fbReg.user?.uid,
        isEmailVerified: true,
        isPhoneVerified: false, // No OTP required
        password: regPassword,
      }
    );

    if (!regResult.success) {
      setIsLoading(false);
      setError(regResult.message);
      return;
    }

    // 3. Persist Profile & Lifetime Free Subscription to Firebase Firestore
    if (regResult.student) {
      await saveStudentProfileToFirestore(regResult.student);

      // 4. Register in Referral Hub
      try {
        await fetch('/api/referrals/register-user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            studentId: regResult.student.id,
            name: regResult.student.name,
            email: regResult.student.email,
            phone: regResult.student.mobile,
            schoolName: regResult.student.schoolName || regSchool.trim(),
            role: regRoleType,
            referredByCode: regReferralCode.trim() || undefined,
          }),
        });
        localStorage.removeItem('vc_pending_ref_code');
      } catch {
        // Non-blocking referral registration
      }
    }

    setIsLoading(false);
    onSuccess?.();
    onClose();
  };

  // --- 4. Forgot Password / Reset Password via Firebase Authentication ---
  const sendResetLinkToRegisteredEmail = async () => {
    setError('');
    setSuccessMsg('');

    const cleanEmail = resetEmail.trim().toLowerCase();
    if (!cleanEmail) {
      setError('Please enter your registered email address.');
      return;
    }

    if (!isValidEmail(cleanEmail)) {
      setError('Friendly Notice: Please enter a valid email address (for example, student@example.com).');
      return;
    }

    setIsLoading(true);
    const res = await recoverAccount(cleanEmail);
    setIsLoading(false);

    if (!res.success) {
      setError(res.message);
      return;
    }

    setResetEmailSentCount((prev) => prev + 1);
    setSuccessMsg(res.message);
  };

  const handleRecoverPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendResetLinkToRegisteredEmail();
  };

  // --- 5. Parent Login ---
  const handleParentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    const res = await loginAsParent(parentEmail, parentPassword);
    setIsLoading(false);
    if (!res.success) {
      setError(res.message);
      return;
    }
    onSuccess?.();
    onClose();
  };

  // --- 6. Admin Login ---
  const handleAdminSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    const res = await loginAsAdmin(adminEmail, adminPassword);
    setIsLoading(false);
    if (!res.success) {
      setError(res.message);
      return;
    }
    onSuccess?.();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-indigo-100 animate-in fade-in zoom-in-95 duration-200 my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" /> Champion Learning • Lifetime Free Plan Included
          </div>
          <h2 className="text-2xl font-black">
            {tab === 'login' && 'Welcome Back, Champion!'}
            {tab === 'register' && 'Create Student Account'}
            {tab === 'forgot' && 'Forgot / Reset Password'}
            {tab === 'parent' && 'Parent Monitoring Portal'}
            {tab === 'admin' && 'Platform Admin Console'}
          </h2>
          <p className="text-indigo-100 text-xs sm:text-sm mt-1">
            {tab === 'login' && 'Sign in with your Email & Password or Registered 10-Digit Mobile Number'}
            {tab === 'register' && 'Get instant Lifetime Free access to Brain Puzzles, Sudoku, English & Maths!'}
            {tab === 'forgot' && 'Enter your registered email address to receive a secure Firebase password reset link'}
            {tab === 'parent' && 'Monitor your linked child’s daily progress, scores, and reports'}
            {tab === 'admin' && 'Manage questions, stories, memberships & platform settings'}
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap border-b border-slate-200 bg-slate-50 px-4 pt-3 gap-1.5">
          <button
            type="button"
            onClick={() => { setTab('login'); setError(''); setSuccessMsg(''); }}
            className={`px-3.5 py-2 text-xs font-bold rounded-t-xl transition-colors cursor-pointer ${
              tab === 'login' || tab === 'forgot'
                ? 'bg-white text-indigo-600 border-t border-x border-slate-200 -mb-px'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Student Login
          </button>
          <button
            type="button"
            onClick={() => { setTab('register'); setError(''); setSuccessMsg(''); }}
            className={`px-3.5 py-2 text-xs font-bold rounded-t-xl transition-colors cursor-pointer ${
              tab === 'register'
                ? 'bg-white text-indigo-600 border-t border-x border-slate-200 -mb-px'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            New Registration
          </button>
          <button
            type="button"
            onClick={() => { setTab('parent'); setError(''); setSuccessMsg(''); }}
            className={`px-3.5 py-2 text-xs font-bold rounded-t-xl transition-colors cursor-pointer ${
              tab === 'parent'
                ? 'bg-white text-emerald-700 border-t border-x border-slate-200 -mb-px'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Parent
          </button>
          <button
            type="button"
            onClick={() => { setTab('admin'); setError(''); setSuccessMsg(''); }}
            className={`px-3.5 py-2 text-xs font-bold rounded-t-xl transition-colors ml-auto cursor-pointer ${
              tab === 'admin'
                ? 'bg-white text-rose-600 border-t border-x border-slate-200 -mb-px'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Admin
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[78vh] overflow-y-auto">
          {error && (
            <div className="mb-4 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{error}</span>
            </div>
          )}

          {successMsg && (
            <div className="mb-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* ==================== STUDENT LOGIN TAB ==================== */}
          {tab === 'login' && (
            <div>
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl mb-5">
                <button
                  type="button"
                  onClick={() => { setLoginMethod('email'); setError(''); setSuccessMsg(''); }}
                  className={`py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    loginMethod === 'email'
                      ? 'bg-white text-indigo-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Mail className="w-3.5 h-3.5" /> Email & Password
                </button>
                <button
                  type="button"
                  onClick={() => { setLoginMethod('phone'); setError(''); setSuccessMsg(''); }}
                  className={`py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    loginMethod === 'phone'
                      ? 'bg-white text-indigo-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Phone className="w-3.5 h-3.5" /> Mobile Number
                </button>
              </div>

              {loginMethod === 'email' ? (
                <form onSubmit={handleEmailLogin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Registered Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        placeholder="student@example.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:outline-none text-sm font-medium"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type={showLoginPassword ? 'text' : 'password'}
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:outline-none text-sm font-medium"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                      >
                        {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {/* Requirement 1: Forgot Password? option directly below the login password field */}
                    <div className="mt-2 flex items-center justify-end">
                      <button
                        type="button"
                        onClick={() => {
                          setTab('forgot');
                          setResetEmail(loginEmail);
                          setError('');
                          setSuccessMsg('');
                        }}
                        className="text-xs font-bold text-indigo-600 hover:text-indigo-800 hover:underline inline-flex items-center gap-1 cursor-pointer"
                      >
                        <KeyRound className="w-3.5 h-3.5" />
                        <span>Forgot Password?</span>
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-60 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all cursor-pointer"
                  >
                    {isLoading ? 'Signing In...' : 'Sign In to My Learning Hub'}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleMobileLogin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Registered 10-Digit Mobile Number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        maxLength={10}
                        value={loginPhoneInput}
                        onChange={(e) => setLoginPhoneInput(e.target.value.replace(/\D/g, ''))}
                        placeholder="e.g. 9876543210"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:outline-none text-sm font-medium"
                        required
                      />
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1.5">
                      Direct login using your unique 10-digit registered mobile number (No OTP required).
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all cursor-pointer"
                  >
                    Sign In with Mobile Number
                  </button>
                </form>
              )}

              {/* Quick Sample Account Switcher */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 text-center">
                  Quick Test Accounts
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={async () => {
                      await loginAsSampleAccount('student1');
                      onClose();
                    }}
                    className="p-2 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 text-xs font-bold text-slate-700 cursor-pointer"
                  >
                    🦁 Aarav (Class 5)
                  </button>
                  <button
                    type="button"
                    onClick={async () => {
                      await loginAsSampleAccount('student2');
                      onClose();
                    }}
                    className="p-2 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 text-xs font-bold text-slate-700 cursor-pointer"
                  >
                    🦋 Ananya (Class 7)
                  </button>
                </div>
              </div>

              <p className="text-center text-xs text-slate-500 mt-4">
                New to Champion Learning?{' '}
                <button
                  type="button"
                  onClick={() => { setTab('register'); setError(''); setSuccessMsg(''); }}
                  className="text-indigo-600 font-bold hover:underline cursor-pointer"
                >
                  Create your Free Lifetime Account
                </button>
              </p>
            </div>
          )}

          {/* ==================== FORGOT PASSWORD TAB ==================== */}
          {tab === 'forgot' && (
            <form onSubmit={handleRecoverPassword} className="space-y-4">
              <button
                type="button"
                onClick={() => { setTab('login'); setError(''); setSuccessMsg(''); }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:underline mb-1 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Login
              </button>

              <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-xs text-indigo-950 space-y-1">
                <p className="font-bold">Secure Firebase Password Reset</p>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Enter your registered email address below. We will send a secure password reset link via Firebase Authentication. Your existing account, subscription plan, payment history, and saved learning progress will be preserved.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Registered Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    placeholder="Enter your registered email (e.g. aarav.sharma@example.com)"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:outline-none text-sm font-medium"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-60 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all cursor-pointer"
              >
                {isLoading
                  ? 'Sending Secure Reset Link...'
                  : resetEmailSentCount > 0
                  ? 'Send Another Password Reset Link'
                  : 'Send Password Reset Link'}
              </button>

              {resetEmailSentCount > 0 && (
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs">
                  <p className="text-slate-700 font-semibold leading-relaxed">
                    Didn’t receive the email or did your previous reset link expire? You can request another reset link at any time or return to sign in once you’ve updated your password.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      type="button"
                      disabled={isLoading}
                      onClick={sendResetLinkToRegisteredEmail}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-white hover:bg-indigo-50 text-indigo-700 font-bold border border-indigo-200 transition-colors cursor-pointer"
                    >
                      Request Another Reset Link
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setLoginEmail(resetEmail.trim());
                        setTab('login');
                        setError('');
                        setSuccessMsg('You can now sign in using your new password.');
                      }}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-colors cursor-pointer"
                    >
                      Proceed to Login
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}

          {/* ==================== NEW REGISTRATION TAB ==================== */}
          {tab === 'register' && (
            <form onSubmit={handleRegister} className="space-y-3.5">
              {/* Free Lifetime Plan Banner */}
              <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-emerald-900">
                  Includes <strong>FREE PLAN (₹0 – Lifetime)</strong>: Brain Puzzles, Sudoku, English & Maths!
                </span>
              </div>

              {/* Avatar Picker */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Choose Champion Avatar
                </label>
                <div className="flex gap-2 flex-wrap">
                  {AVATARS.map(av => (
                    <button
                      key={av}
                      type="button"
                      onClick={() => setRegAvatar(av)}
                      className={`w-10 h-10 rounded-xl text-xl flex items-center justify-center border-2 transition-all cursor-pointer ${
                        regAvatar === av
                          ? 'border-indigo-600 bg-indigo-50 scale-110'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      {av}
                    </button>
                  ))}
                </div>
              </div>

              {/* 1. Student Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Student Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    placeholder="e.g. Aarav Patil"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-600 focus:outline-none text-sm"
                    required
                  />
                </div>
              </div>

              {/* 2. Email Address */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    placeholder="student@example.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-600 focus:outline-none text-sm"
                    required
                  />
                </div>
              </div>

              {/* 3. Compulsory Unique 10-Digit Mobile Number (No OTP Required) */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    10-Digit Mobile Number (Compulsory) *
                  </label>
                  <span className="text-[10px] font-bold text-indigo-600">
                    One Mobile Number = One Account
                  </span>
                </div>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    maxLength={10}
                    value={regMobile}
                    onChange={(e) => setRegMobile(e.target.value.replace(/\D/g, ''))}
                    placeholder="9876543210"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-600 focus:outline-none text-sm"
                    required
                  />
                </div>
              </div>

              {/* 4. Password & Confirm Password */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Create Password *
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showRegPassword ? 'text' : 'password'}
                      value={regPassword}
                      onChange={(e) => setRegPassword(e.target.value)}
                      placeholder="Min 6 chars"
                      className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-600 focus:outline-none text-sm"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowRegPassword(!showRegPassword)}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      {showRegPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showRegPassword ? 'text' : 'password'}
                      value={regConfirmPassword}
                      onChange={(e) => setRegConfirmPassword(e.target.value)}
                      placeholder="Re-enter password"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-600 focus:outline-none text-sm"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* 5. Class & City */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Student Class *
                  </label>
                  <div className="relative">
                    <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                      value={regClass}
                      onChange={(e) => setRegClass(e.target.value as ClassLevel)}
                      className="w-full pl-9 pr-2 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-600 focus:outline-none text-sm bg-white"
                    >
                      {CLASS_LEVELS.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    City / District *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={regCity}
                      onChange={(e) => setRegCity(e.target.value)}
                      placeholder="Pune"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-600 focus:outline-none text-sm"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* 6. School Name & Parent Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    School Name *
                  </label>
                  <div className="relative">
                    <School className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={regSchool}
                      onChange={(e) => setRegSchool(e.target.value)}
                      placeholder="e.g. Vidya Bhavan"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-600 focus:outline-none text-sm"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Parent / Guardian Name
                  </label>
                  <input
                    type="text"
                    value={regParentName}
                    onChange={(e) => setRegParentName(e.target.value)}
                    placeholder="e.g. Rajesh Patil"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-600 focus:outline-none text-sm"
                  />
                </div>
              </div>

              {/* 7. Role & Optional Referral Code */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-indigo-50/60 p-3 rounded-xl border border-indigo-100">
                <div>
                  <label className="block text-xs font-bold text-indigo-900 uppercase tracking-wider mb-1">
                    Ambassador Role
                  </label>
                  <select
                    value={regRoleType}
                    onChange={(e) => setRegRoleType(e.target.value as 'student' | 'teacher')}
                    className="w-full px-3 py-2 rounded-lg border border-indigo-200 focus:border-indigo-600 focus:outline-none text-xs font-bold bg-white text-slate-800"
                  >
                    <option value="student">🎓 Student (Knowledge Ambassador)</option>
                    <option value="teacher">🏆 Teacher (Educator Ambassador)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-indigo-900 uppercase tracking-wider mb-1">
                    Referral Code (Optional)
                  </label>
                  <div className="relative">
                    <Gift className="w-3.5 h-3.5 text-indigo-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={regReferralCode}
                      onChange={(e) => setRegReferralCode(e.target.value.toUpperCase())}
                      placeholder="e.g. CLSTD4829"
                      className="w-full pl-8 pr-3 py-2 rounded-lg border border-indigo-200 focus:border-indigo-600 focus:outline-none text-xs font-mono font-bold uppercase bg-white"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-60 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all cursor-pointer"
              >
                {isLoading ? 'Creating Account...' : 'Create Account & Activate Free Lifetime Plan'}
              </button>
            </form>
          )}

          {/* ==================== PARENT TAB ==================== */}
          {tab === 'parent' && (
            <form onSubmit={handleParentSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Registered Parent Email
                </label>
                <input
                  type="email"
                  value={parentEmail}
                  onChange={(e) => setParentEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:outline-none text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Password (Optional for Demo Parent)
                </label>
                <input
                  type="password"
                  value={parentPassword}
                  onChange={(e) => setParentPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:outline-none text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg cursor-pointer"
              >
                Sign In to Parent Portal
              </button>
            </form>
          )}

          {/* ==================== ADMIN TAB ==================== */}
          {tab === 'admin' && (
            <form onSubmit={handleAdminSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Authorized Administrator Email
                </label>
                <input
                  type="email"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rose-500 focus:outline-none text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Admin Password
                </label>
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rose-500 focus:outline-none text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-lg transition-all cursor-pointer"
              >
                Unlock Admin Dashboard
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
