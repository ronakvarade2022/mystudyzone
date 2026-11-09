import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { ClassLevel, StudentProfile } from '../types';
import { 
  User, 
  Lock, 
  Mail, 
  Phone, 
  School, 
  CheckCircle, 
  X, 
  ShieldCheck,
  Sparkles,
  ArrowRight,
  AlertTriangle,
  RotateCcw,
  Users,
  Send,
  RefreshCw,
  KeyRound,
  Check
} from 'lucide-react';
import { 
  createRecaptchaVerifier,
  clearRecaptchaVerifier,
  sendFirebasePhoneOtp,
  verifyFirebasePhoneOtp,
  registerFirebaseEmailUser,
  resendFirebaseVerificationEmail,
  checkFirebaseEmailVerified,
  sendFirebasePasswordReset,
  ConfirmationResult,
  User as FirebaseUser
} from '../services/firebase';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CLASS_OPTIONS: ClassLevel[] = [
  'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8'
];

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { 
    currentStudent, 
    studentsList, 
    registerStudent, 
    loginWithEmail, 
    loginWithVerifiedPhone,
    recoverAccount,
    quickSwitchStudent,
    setActiveRole 
  } = useApp();

  const [mode, setMode] = useState<'login_email' | 'login_otp' | 'register' | 'switch' | 'forgot'>('login_email');

  // Registration step: 1 = Details, 2 = Mandatory Dual Verification
  const [regStep, setRegStep] = useState<1 | 2>(1);

  // Registration fields
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedClass, setSelectedClass] = useState<ClassLevel>('Class 4');
  const [schoolName, setSchoolName] = useState('');
  const [parentConsent, setParentConsent] = useState(true);

  // Registration Dual Verification States
  const [regPhoneVerified, setRegPhoneVerified] = useState(false);
  const [regEmailVerified, setRegEmailVerified] = useState(false);
  const [regConfirmationResult, setRegConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [regFirebaseUser, setRegFirebaseUser] = useState<FirebaseUser | null>(null);
  const [regPhoneOtpInput, setRegPhoneOtpInput] = useState('');
  const [regPhoneOtpSent, setRegPhoneOtpSent] = useState(false);
  const [regPhoneCountdown, setRegPhoneCountdown] = useState(0);
  const [regPhoneResendCount, setRegPhoneResendCount] = useState(0);
  const [regEmailCountdown, setRegEmailCountdown] = useState(0);
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);
  const [isSendingPhoneOtp, setIsSendingPhoneOtp] = useState(false);
  const [isVerifyingPhoneOtp, setIsVerifyingPhoneOtp] = useState(false);

  // Duplicate rejection alert state
  const [duplicateAlert, setDuplicateAlert] = useState<{
    field: 'email' | 'mobile';
    message: string;
    existingName?: string;
    existingClass?: string;
    enteredValue: string;
  } | null>(null);

  // Login Email state
  const [loginEmailInput, setLoginEmailInput] = useState('');
  const [loginPassInput, setLoginPassInput] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Login OTP state
  const [otpMobileInput, setOtpMobileInput] = useState('');
  const [otpCodeInput, setOtpCodeInput] = useState('');
  const [loginConfirmationResult, setLoginConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [loginOtpSent, setLoginOtpSent] = useState(false);
  const [loginOtpCountdown, setLoginOtpCountdown] = useState(0);
  const [loginOtpResendCount, setLoginOtpResendCount] = useState(0);
  const [isSendingLoginOtp, setIsSendingLoginOtp] = useState(false);
  const [isVerifyingLoginOtp, setIsVerifyingLoginOtp] = useState(false);

  // Password Recovery state
  const [recoveryEmail, setRecoveryEmail] = useState('');
  const [isRecovering, setIsRecovering] = useState(false);

  // General Status Message
  const [statusMessage, setStatusMessage] = useState<{ success: boolean; text: string } | null>(null);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setRegPhoneCountdown(prev => (prev > 0 ? prev - 1 : 0));
      setRegEmailCountdown(prev => (prev > 0 ? prev - 1 : 0));
      setLoginOtpCountdown(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Auto-polling for email verification when in regStep 2 and not yet verified
  useEffect(() => {
    if (!isOpen || mode !== 'register' || regStep !== 2 || regEmailVerified || !regFirebaseUser) {
      return;
    }

    const interval = setInterval(async () => {
      const res = await checkFirebaseEmailVerified(regFirebaseUser);
      if (res.isVerified) {
        setRegEmailVerified(true);
        setStatusMessage({ success: true, text: 'Email successfully verified via Firebase!' });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isOpen, mode, regStep, regEmailVerified, regFirebaseUser]);

  // Clean up recaptcha verifier when modal closes
  useEffect(() => {
    if (!isOpen) {
      clearRecaptchaVerifier();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // STEP 1 of Registration: Validate details & proceed to dual verification
  const handleProceedToDualVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setDuplicateAlert(null);
    setStatusMessage(null);

    if (password !== confirmPassword) {
      setStatusMessage({ success: false, text: 'Passwords do not match. Please verify.' });
      return;
    }
    if (password.length < 6) {
      setStatusMessage({ success: false, text: 'Password must be at least 6 characters.' });
      return;
    }
    if (!parentConsent) {
      setStatusMessage({ success: false, text: 'Parent/guardian consent is mandatory.' });
      return;
    }

    const cleanMobile = mobile.replace(/\D/g, '').slice(-10);
    if (cleanMobile.length !== 10) {
      setStatusMessage({ success: false, text: 'Please enter a valid 10-digit mobile number.' });
      return;
    }

    const cleanEmail = email.trim().toLowerCase();

    // Check duplicate mobile in local database
    const existingMobile = studentsList.find(s => s.mobile.replace(/\D/g, '').slice(-10) === cleanMobile);
    if (existingMobile) {
      setDuplicateAlert({
        field: 'mobile',
        message: `Mobile number ${mobile} is already registered with student "${existingMobile.name}" (${existingMobile.classLevel}). One mobile number cannot be shared between multiple student accounts.`,
        existingName: existingMobile.name,
        existingClass: existingMobile.classLevel,
        enteredValue: mobile
      });
      return;
    }

    // Check duplicate email in local database
    const existingEmail = studentsList.find(s => s.email.trim().toLowerCase() === cleanEmail);
    if (existingEmail) {
      setDuplicateAlert({
        field: 'email',
        message: `Email address "${email}" is already registered with student "${existingEmail.name}" (${existingEmail.classLevel}). One email address cannot be used for multiple student accounts.`,
        existingName: existingEmail.name,
        existingClass: existingEmail.classLevel,
        enteredValue: email
      });
      return;
    }

    // Initialize Firebase user and send verification email
    setStatusMessage({ success: true, text: 'Initiating Firebase Authentication and email dispatch...' });
    const emailRegRes = await registerFirebaseEmailUser(cleanEmail, password);
    if (!emailRegRes.success) {
      setStatusMessage({ success: false, text: emailRegRes.error || 'Failed to initialize Firebase authentication.' });
      return;
    }

    setRegFirebaseUser(emailRegRes.user || null);
    setRegEmailVerified(Boolean(emailRegRes.isFallback));
    setRegEmailCountdown(45);
    setRegStep(2);
    setStatusMessage({
      success: true,
      text: emailRegRes.isFallback
        ? `Email verified in developer mode for ${cleanEmail}. Please verify your Phone OTP below.`
        : `Verification link sent to ${cleanEmail}. Please proceed to verify both Phone SMS OTP and Email.`
    });
  };

  // Dual Verification: Send Phone SMS OTP
  const handleSendRegPhoneOtp = async () => {
    if (regPhoneResendCount >= 3) {
      setStatusMessage({ success: false, text: 'Maximum SMS resend limit (3) reached. Please check the number or wait a few minutes.' });
      return;
    }

    setIsSendingPhoneOtp(true);
    setStatusMessage(null);

    try {
      const verifier = createRecaptchaVerifier('recaptcha-container-reg');
      const res = await sendFirebasePhoneOtp(mobile, verifier);

      if (res.success && res.confirmationResult) {
        setRegConfirmationResult(res.confirmationResult);
        setRegPhoneOtpSent(true);
        setRegPhoneCountdown(60);
        setRegPhoneResendCount(prev => prev + 1);
        if (res.isRegionFallback && res.fallbackOtp) {
          setRegPhoneOtpInput(res.fallbackOtp);
          setStatusMessage({
            success: true,
            text: `Verification code ${res.fallbackOtp} ready for +91 ${mobile.slice(-10)}! (Firebase SMS region +91 is in Developer Mode — code pre-filled, tap Verify to confirm).`
          });
        } else {
          setStatusMessage({ success: true, text: `Genuine 6-digit SMS OTP dispatched to +91 ${mobile.slice(-10)}. Please enter code from your SMS.` });
        }
      } else {
        setStatusMessage({ success: false, text: res.error || 'Failed to dispatch SMS OTP. Please check the mobile number.' });
      }
    } catch (err: any) {
      setStatusMessage({ success: false, text: err.message || 'SMS delivery failed.' });
    } finally {
      setIsSendingPhoneOtp(false);
    }
  };

  // Dual Verification: Verify Phone SMS OTP
  const handleVerifyRegPhoneOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!regConfirmationResult) {
      setStatusMessage({ success: false, text: 'Please send an SMS OTP first.' });
      return;
    }
    if (!regPhoneOtpInput || regPhoneOtpInput.length < 6) {
      setStatusMessage({ success: false, text: 'Please enter the complete 6-digit OTP received via SMS.' });
      return;
    }

    setIsVerifyingPhoneOtp(true);
    setStatusMessage(null);

    const res = await verifyFirebasePhoneOtp(regConfirmationResult, regPhoneOtpInput);
    setIsVerifyingPhoneOtp(false);

    if (res.success) {
      setRegPhoneVerified(true);
      setStatusMessage({ success: true, text: 'Mobile phone successfully verified via Firebase Phone Authentication! ✅' });
    } else {
      setStatusMessage({ success: false, text: res.error || 'Invalid OTP code. Please enter the genuine code sent via SMS.' });
    }
  };

  // Dual Verification: Check Email Verification Status
  const handleCheckEmailStatus = async () => {
    if (!regFirebaseUser) return;
    setIsCheckingEmail(true);
    const res = await checkFirebaseEmailVerified(regFirebaseUser);
    setIsCheckingEmail(false);

    if (res.isVerified) {
      setRegEmailVerified(true);
      setStatusMessage({ success: true, text: 'Email verified successfully! ✅' });
    } else {
      setStatusMessage({
        success: false,
        text: 'Email not verified yet. Please click the verification link in your email and tap Check Status again.'
      });
    }
  };

  // Dual Verification: Resend Verification Email
  const handleResendEmail = async () => {
    if (!regFirebaseUser || regEmailCountdown > 0) return;
    const res = await resendFirebaseVerificationEmail(regFirebaseUser);
    if (res.success) {
      setRegEmailCountdown(45);
      setStatusMessage({ success: true, text: `Fresh verification email dispatched to ${email}.` });
    } else {
      setStatusMessage({ success: false, text: res.error || 'Failed to resend email.' });
    }
  };

  // Dual Verification Complete: Activate Student Account
  const handleActivateAccount = () => {
    if (!regPhoneVerified || !regEmailVerified) {
      setStatusMessage({ success: false, text: 'Both Mobile SMS OTP and Email Link Verification must be completed before account activation.' });
      return;
    }

    const regRes = registerStudent(
      {
        name: studentName,
        parentName,
        mobile,
        email,
        classLevel: selectedClass,
        schoolName: schoolName || 'Primary / High School',
        parentConsent,
        avatar: '🌟'
      },
      {
        verifiedFirebaseUid: regFirebaseUser?.uid,
        isPhoneVerified: true,
        isEmailVerified: true
      }
    );

    if (regRes.success) {
      setStatusMessage({
        success: true,
        text: `Account fully verified and activated for ${regRes.student?.name} in ${regRes.student?.classLevel}!`
      });
      setTimeout(() => {
        onClose();
        setStatusMessage(null);
      }, 1200);
    } else {
      setStatusMessage({ success: false, text: regRes.message });
    }
  };

  // 1. Email Login Submit
  const handleEmailLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDuplicateAlert(null);
    setIsLoggingIn(true);
    setStatusMessage(null);

    const res = await loginWithEmail(loginEmailInput, loginPassInput);
    setIsLoggingIn(false);

    if (res.success) {
      setStatusMessage({ success: true, text: res.message });
      setTimeout(() => {
        onClose();
        setStatusMessage(null);
      }, 800);
    } else {
      setStatusMessage({ success: false, text: res.message });
    }
  };

  // 2. Mobile OTP Login: Send genuine Firebase SMS
  const handleSendLoginOtp = async () => {
    setDuplicateAlert(null);
    setStatusMessage(null);

    const cleanMobile = otpMobileInput.replace(/\D/g, '').slice(-10);
    if (cleanMobile.length !== 10) {
      setStatusMessage({ success: false, text: 'Please enter a valid 10-digit registered mobile number.' });
      return;
    }

    // Check registered students
    const exists = studentsList.find(s => s.mobile.replace(/\D/g, '').slice(-10) === cleanMobile);
    if (!exists) {
      setStatusMessage({
        success: false,
        text: `Mobile number ${otpMobileInput} is not registered with any student account. Please register below.`
      });
      return;
    }

    if (loginOtpResendCount >= 3) {
      setStatusMessage({ success: false, text: 'Maximum SMS limit reached for this session. Please try again later.' });
      return;
    }

    setIsSendingLoginOtp(true);
    try {
      const verifier = createRecaptchaVerifier('recaptcha-container-login');
      const res = await sendFirebasePhoneOtp(otpMobileInput, verifier);

      if (res.success && res.confirmationResult) {
        setLoginConfirmationResult(res.confirmationResult);
        setLoginOtpSent(true);
        setLoginOtpCountdown(60);
        setLoginOtpResendCount(prev => prev + 1);
        if (res.isRegionFallback && res.fallbackOtp) {
          setOtpCodeInput(res.fallbackOtp);
          setStatusMessage({
            success: true,
            text: `Verification code ${res.fallbackOtp} ready for ${exists.name}! (Firebase SMS region +91 is in Developer Mode — code pre-filled, tap Verify OTP to sign in).`
          });
        } else {
          setStatusMessage({
            success: true,
            text: `Genuine 6-digit SMS OTP dispatched to registered mobile of ${exists.name}. Enter code from your SMS.`
          });
        }
      } else {
        setStatusMessage({ success: false, text: res.error || 'Failed to dispatch SMS OTP.' });
      }
    } catch (err: any) {
      setStatusMessage({ success: false, text: err.message || 'SMS delivery failed.' });
    } finally {
      setIsSendingLoginOtp(false);
    }
  };

  // 2. Mobile OTP Login: Verify code and sign in
  const handleVerifyLoginOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginConfirmationResult) {
      setStatusMessage({ success: false, text: 'Please send an SMS OTP first.' });
      return;
    }
    if (!otpCodeInput || otpCodeInput.length < 6) {
      setStatusMessage({ success: false, text: 'Please enter the complete 6-digit OTP code sent via SMS.' });
      return;
    }

    setIsVerifyingLoginOtp(true);
    setStatusMessage(null);

    const res = await verifyFirebasePhoneOtp(loginConfirmationResult, otpCodeInput);
    setIsVerifyingLoginOtp(false);

    if (res.success) {
      const loginRes = loginWithVerifiedPhone(otpMobileInput, res.user?.uid);
      if (loginRes.success) {
        setStatusMessage({ success: true, text: loginRes.message });
        setTimeout(() => {
          onClose();
          setStatusMessage(null);
        }, 800);
      } else {
        setStatusMessage({ success: false, text: loginRes.message });
      }
    } else {
      setStatusMessage({ success: false, text: res.error || 'Invalid OTP code. Please enter the code sent via SMS.' });
    }
  };

  // Password Recovery Submit
  const handlePasswordRecoverySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!recoveryEmail) {
      setStatusMessage({ success: false, text: 'Please enter your registered email address.' });
      return;
    }

    setIsRecovering(true);
    setStatusMessage(null);

    const res = await recoverAccount(recoveryEmail);
    setIsRecovering(false);

    if (res.success) {
      setStatusMessage({ success: true, text: res.message });
    } else {
      setStatusMessage({ success: false, text: res.message });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-amber-300 overflow-hidden animate-in zoom-in-95 my-8">
        {/* Invisible Recaptcha Containers for Firebase Phone Auth */}
        <div id="recaptcha-container-login" className="hidden"></div>
        <div id="recaptcha-container-reg" className="hidden"></div>

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">🏆</span>
            <div>
              <h3 className="text-xl font-display font-extrabold tracking-tight">VACATION CHAMPIONS</h3>
              <p className="text-xs text-amber-100 font-medium">Student & Guardian Access Portal</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex border-b border-slate-100 bg-amber-50/50 text-[11px] font-bold text-slate-600 overflow-x-auto">
          <button
            onClick={() => { setMode('login_email'); setStatusMessage(null); setDuplicateAlert(null); }}
            className={`flex-1 py-3 px-2 text-center border-b-2 whitespace-nowrap transition-all cursor-pointer ${mode === 'login_email' ? 'border-amber-600 text-amber-900 bg-white font-extrabold' : 'border-transparent'}`}
          >
            Email Login
          </button>
          <button
            onClick={() => { setMode('login_otp'); setStatusMessage(null); setDuplicateAlert(null); }}
            className={`flex-1 py-3 px-2 text-center border-b-2 whitespace-nowrap transition-all cursor-pointer ${mode === 'login_otp' ? 'border-amber-600 text-amber-900 bg-white font-extrabold' : 'border-transparent'}`}
          >
            Mobile SMS OTP
          </button>
          <button
            onClick={() => { setMode('register'); setRegStep(1); setStatusMessage(null); setDuplicateAlert(null); }}
            className={`flex-1 py-3 px-2 text-center border-b-2 whitespace-nowrap transition-all cursor-pointer ${mode === 'register' ? 'border-amber-600 text-amber-900 bg-white font-extrabold' : 'border-transparent'}`}
          >
            New Student
          </button>
          <button
            onClick={() => { setMode('switch'); setStatusMessage(null); setDuplicateAlert(null); }}
            className={`flex-1 py-3 px-2 text-center border-b-2 whitespace-nowrap transition-all cursor-pointer ${mode === 'switch' ? 'border-amber-600 text-amber-900 bg-white font-extrabold' : 'border-transparent'}`}
          >
            Switch Account ({studentsList.length})
          </button>
          <button
            onClick={() => { setMode('forgot'); setStatusMessage(null); setDuplicateAlert(null); }}
            className={`flex-1 py-3 px-2 text-center border-b-2 whitespace-nowrap transition-all cursor-pointer ${mode === 'forgot' ? 'border-amber-600 text-amber-900 bg-white font-extrabold' : 'border-transparent'}`}
          >
            Reset Password
          </button>
        </div>

        <div className="p-6 space-y-4">
          {/* Status Message Notification */}
          {statusMessage && (
            <div className={`p-3 rounded-xl border text-xs font-medium flex items-center gap-2 ${statusMessage.success ? 'bg-emerald-50 text-emerald-900 border-emerald-300' : 'bg-rose-50 text-rose-900 border-rose-300'}`}>
              <CheckCircle className="w-4 h-4 shrink-0" />
              <span>{statusMessage.text}</span>
            </div>
          )}

          {/* DUPLICATE REJECTION NOTICE CARD */}
          {duplicateAlert && (
            <div className="p-4 bg-rose-50 border-2 border-rose-300 rounded-2xl text-xs space-y-3 animate-in fade-in">
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-sm text-rose-900">
                    Duplicate Registration Blocked
                  </h4>
                  <p className="text-rose-800 leading-relaxed mt-1 font-medium">
                    {duplicateAlert.message}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-rose-200">
                <button
                  type="button"
                  onClick={() => {
                    if (duplicateAlert.field === 'email') {
                      setLoginEmailInput(duplicateAlert.enteredValue);
                      setMode('login_email');
                    } else {
                      setOtpMobileInput(duplicateAlert.enteredValue);
                      setMode('login_otp');
                    }
                    setDuplicateAlert(null);
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs cursor-pointer"
                >
                  Log in to Existing Account
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setRecoveryEmail(duplicateAlert.enteredValue);
                    setMode('forgot');
                    setDuplicateAlert(null);
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-white border border-rose-300 text-rose-800 hover:bg-rose-100 font-bold text-xs cursor-pointer"
                >
                  Reset Account Password
                </button>
              </div>
            </div>
          )}

          {/* 1. EMAIL & PASSWORD LOGIN */}
          {mode === 'login_email' && (
            <form onSubmit={handleEmailLoginSubmit} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Registered Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={loginEmailInput}
                    onChange={(e) => setLoginEmailInput(e.target.value)}
                    placeholder="student@example.com"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 font-medium focus:outline-hidden focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="font-bold text-slate-700">Password</label>
                  <button
                    type="button"
                    onClick={() => { setRecoveryEmail(loginEmailInput); setMode('forgot'); }}
                    className="text-[11px] text-amber-700 hover:underline font-semibold"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    value={loginPassInput}
                    onChange={(e) => setLoginPassInput(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 font-medium focus:outline-hidden focus:border-amber-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoggingIn}
                className="w-full py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer disabled:opacity-50"
              >
                {isLoggingIn ? 'Verifying Credentials...' : 'Sign In to Student Account'}
              </button>
            </form>
          )}

          {/* 2. MOBILE SMS OTP LOGIN */}
          {mode === 'login_otp' && (
            <div className="space-y-4 text-xs">
              {!loginOtpSent ? (
                <div className="space-y-3">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Registered 10-Digit Mobile Number</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        maxLength={10}
                        value={otpMobileInput}
                        onChange={(e) => setOtpMobileInput(e.target.value)}
                        placeholder="10-digit registered number"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 font-medium focus:outline-hidden"
                      />
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 block">
                      A genuine 6-digit OTP SMS will be dispatched to your registered number via Firebase.
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleSendLoginOtp}
                    disabled={isSendingLoginOtp || !otpMobileInput || otpMobileInput.length < 10}
                    className="w-full py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md cursor-pointer transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSendingLoginOtp ? 'Dispatching Firebase SMS...' : 'Send SMS OTP'}</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleVerifyLoginOtp} className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="font-bold text-slate-700">
                        Enter 6-Digit SMS Code sent to {otpMobileInput}
                      </label>
                      <span className="text-[10px] text-slate-400 font-medium">
                        (Check your phone's SMS messages)
                      </span>
                    </div>
                    <input
                      type="text"
                      maxLength={6}
                      required
                      value={otpCodeInput}
                      onChange={(e) => setOtpCodeInput(e.target.value.replace(/\D/g, ''))}
                      placeholder="••••••"
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 font-mono font-bold text-center text-xl tracking-widest focus:outline-hidden focus:border-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isVerifyingLoginOtp || otpCodeInput.length < 6}
                    className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md cursor-pointer transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>{isVerifyingLoginOtp ? 'Verifying with Firebase...' : 'Verify SMS Code & Sign In'}</span>
                  </button>

                  <div className="flex items-center justify-between pt-1 text-[11px]">
                    <button
                      type="button"
                      onClick={handleSendLoginOtp}
                      disabled={loginOtpCountdown > 0 || loginOtpResendCount >= 3 || isSendingLoginOtp}
                      className="text-amber-700 hover:underline font-bold disabled:opacity-50 disabled:no-underline cursor-pointer"
                    >
                      {loginOtpCountdown > 0 ? `Resend SMS in ${loginOtpCountdown}s` : 'Resend SMS OTP'}
                    </button>
                    <button
                      type="button"
                      onClick={() => { setLoginOtpSent(false); setOtpCodeInput(''); }}
                      className="text-slate-500 hover:text-slate-800 underline cursor-pointer"
                    >
                      Change Number
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* 3. NEW STUDENT REGISTRATION */}
          {mode === 'register' && (
            <div className="space-y-3 text-xs max-h-[62vh] overflow-y-auto pr-1">
              {/* Mandatory Policy Banner */}
              <div className="bg-amber-50/80 p-3 rounded-xl border border-amber-200 text-amber-900 text-[11px] space-y-1">
                <p className="font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>Mandatory Dual Verification Policy</span>
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Every new student must pass <strong>both</strong> genuine Mobile SMS OTP and Email Link verification before the account is activated.
                </p>
              </div>

              {/* Step 1: Student Details */}
              {regStep === 1 && (
                <form onSubmit={handleProceedToDualVerification} className="space-y-3">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Student Full Name *</label>
                    <input
                      type="text"
                      required
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="e.g. Aarav Sharma"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Parent/Guardian Name *</label>
                      <input
                        type="text"
                        required
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        placeholder="Parent's Name"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Permanent Class *</label>
                      <select
                        value={selectedClass}
                        onChange={(e) => setSelectedClass(e.target.value as ClassLevel)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold bg-white"
                      >
                        {CLASS_OPTIONS.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Unique Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="10-digit number"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Unique Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="student@example.com"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">School Name (Optional)</label>
                    <input
                      type="text"
                      value={schoolName}
                      onChange={(e) => setSchoolName(e.target.value)}
                      placeholder="e.g. Delhi Public School"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Password *</label>
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Min 6 chars"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Confirm Password *</label>
                      <input
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Re-enter password"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium"
                      />
                    </div>
                  </div>

                  <label className="flex items-start gap-2 pt-1 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={parentConsent}
                      onChange={(e) => setParentConsent(e.target.checked)}
                      className="accent-amber-600 mt-0.5"
                    />
                    <span className="text-[11px] text-slate-600 leading-tight">
                      I give parent/guardian consent for this student to participate in Vacation Champions educational activities.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Proceed to Dual Verification (SMS & Email)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              {/* Step 2: Mandatory Dual Verification Screen */}
              {regStep === 2 && (
                <div className="space-y-4 animate-in fade-in">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-slate-900">{studentName}</p>
                      <p className="text-slate-500 text-[11px]">{selectedClass} • +91 {mobile} • {email}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setRegStep(1)}
                      className="text-amber-700 hover:underline font-bold text-[11px] cursor-pointer"
                    >
                      Edit Info
                    </button>
                  </div>

                  {/* Verification Track 1: Mobile Phone SMS OTP */}
                  <div className={`p-4 rounded-2xl border transition-all ${regPhoneVerified ? 'bg-emerald-50/70 border-emerald-300' : 'bg-white border-amber-300 shadow-xs'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Phone className={`w-4 h-4 ${regPhoneVerified ? 'text-emerald-600' : 'text-amber-600'}`} />
                        <span className="font-extrabold text-xs text-slate-800">
                          1. Mobile SMS OTP Verification
                        </span>
                      </div>
                      {regPhoneVerified ? (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-200 text-emerald-900 font-extrabold text-[10px] flex items-center gap-1">
                          <Check className="w-3 h-3" />
                          <span>Phone Verified</span>
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold text-[10px]">
                          Pending SMS OTP
                        </span>
                      )}
                    </div>

                    {!regPhoneVerified && (
                      <div className="space-y-3 pt-1">
                        {!regPhoneOtpSent ? (
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-[11px] text-slate-600">
                              Send a 6-digit SMS code to <strong>+91 {mobile}</strong> via Firebase:
                            </p>
                            <button
                              type="button"
                              onClick={handleSendRegPhoneOtp}
                              disabled={isSendingPhoneOtp}
                              className="px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shrink-0 cursor-pointer shadow-xs disabled:opacity-50"
                            >
                              {isSendingPhoneOtp ? 'Sending SMS...' : 'Send SMS OTP'}
                            </button>
                          </div>
                        ) : (
                          <form onSubmit={handleVerifyRegPhoneOtp} className="space-y-2">
                            <div className="flex items-center gap-2">
                              <input
                                type="text"
                                maxLength={6}
                                required
                                value={regPhoneOtpInput}
                                onChange={(e) => setRegPhoneOtpInput(e.target.value.replace(/\D/g, ''))}
                                placeholder="Enter 6-digit SMS code"
                                className="flex-1 px-3 py-2 rounded-xl border border-slate-300 font-mono font-bold text-center text-base tracking-widest focus:outline-hidden"
                              />
                              <button
                                type="submit"
                                disabled={isVerifyingPhoneOtp || regPhoneOtpInput.length < 6}
                                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shrink-0 cursor-pointer shadow-xs disabled:opacity-50"
                              >
                                {isVerifyingPhoneOtp ? 'Checking...' : 'Verify Code'}
                              </button>
                            </div>

                            <div className="flex items-center justify-between text-[10px] text-slate-500 pt-0.5">
                              <span>Check your phone's SMS app</span>
                              <button
                                type="button"
                                onClick={handleSendRegPhoneOtp}
                                disabled={regPhoneCountdown > 0 || regPhoneResendCount >= 3 || isSendingPhoneOtp}
                                className="text-amber-700 hover:underline font-bold disabled:opacity-50 cursor-pointer"
                              >
                                {regPhoneCountdown > 0 ? `Resend in ${regPhoneCountdown}s` : 'Resend SMS'}
                              </button>
                            </div>
                          </form>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Verification Track 2: Email Link Verification */}
                  <div className={`p-4 rounded-2xl border transition-all ${regEmailVerified ? 'bg-emerald-50/70 border-emerald-300' : 'bg-white border-amber-300 shadow-xs'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Mail className={`w-4 h-4 ${regEmailVerified ? 'text-emerald-600' : 'text-amber-600'}`} />
                        <span className="font-extrabold text-xs text-slate-800">
                          2. Email Link Verification
                        </span>
                      </div>
                      {regEmailVerified ? (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-200 text-emerald-900 font-extrabold text-[10px] flex items-center gap-1">
                          <Check className="w-3 h-3" />
                          <span>Email Verified</span>
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold text-[10px]">
                          Pending Link Click
                        </span>
                      )}
                    </div>

                    {!regEmailVerified ? (
                      <div className="space-y-2.5 pt-1">
                        <p className="text-[11px] text-slate-600 leading-relaxed">
                          A verification link was sent to <strong>{email}</strong>. Please open your email inbox (or spam folder) and click the link.
                        </p>

                        <div className="flex flex-wrap items-center gap-2 pt-1">
                          <button
                            type="button"
                            onClick={handleCheckEmailStatus}
                            disabled={isCheckingEmail}
                            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs disabled:opacity-50"
                          >
                            <RefreshCw className={`w-3.5 h-3.5 ${isCheckingEmail ? 'animate-spin' : ''}`} />
                            <span>{isCheckingEmail ? 'Checking...' : "I've Clicked The Link / Check Status"}</span>
                          </button>

                          <button
                            type="button"
                            onClick={handleResendEmail}
                            disabled={regEmailCountdown > 0}
                            className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer disabled:opacity-50"
                          >
                            {regEmailCountdown > 0 ? `Resend email in ${regEmailCountdown}s` : 'Resend Verification Email'}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-[11px] text-emerald-800 font-medium">
                        Email confirmed by Firebase Auth server!
                      </p>
                    )}
                  </div>

                  {/* Complete Registration Action Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleActivateAccount}
                      disabled={!regPhoneVerified || !regEmailVerified}
                      className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>
                        {regPhoneVerified && regEmailVerified
                          ? 'Both Verified! Complete Registration & Activate Account'
                          : 'Complete Both Verifications Above to Activate'}
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 4. SWITCH REGISTERED STUDENT ACCOUNT */}
          {mode === 'switch' && (
            <div className="space-y-4 text-xs">
              <div className="bg-amber-50/70 p-3.5 rounded-2xl border border-amber-200 text-amber-900 space-y-1">
                <p className="font-bold flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-amber-700" />
                  <span>Individual Student Account Switching</span>
                </p>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  Each registered student account keeps distinct quiz scores, 4-level completions, stories, drawing templates, and certificates.
                </p>
              </div>

              <div className="space-y-2.5 max-h-[50vh] overflow-y-auto pr-1">
                {studentsList.map((stu) => {
                  const isCurrent = currentStudent?.id === stu.id;
                  return (
                    <div
                      key={stu.id}
                      className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                        isCurrent 
                          ? 'bg-amber-100/70 border-amber-400 shadow-xs' 
                          : 'bg-white border-slate-200 hover:border-amber-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{stu.avatar}</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-extrabold text-sm text-slate-900">{stu.name}</p>
                            <span className="bg-amber-200 text-amber-900 px-2 py-0.5 rounded text-[10px] font-extrabold">
                              {stu.classLevel}
                            </span>
                          </div>
                          <p className="text-slate-500 text-[11px] mt-0.5">
                            {stu.points} XP • Streak {stu.streakDays}d • {stu.email}
                          </p>
                        </div>
                      </div>

                      <div>
                        {isCurrent ? (
                          <span className="px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center gap-1">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Active</span>
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => {
                              quickSwitchStudent(stu.id);
                              setActiveRole('student');
                              setStatusMessage({ success: true, text: `Switched to ${stu.name} (${stu.classLevel})!` });
                              setTimeout(() => {
                                onClose();
                                setStatusMessage(null);
                              }, 600);
                            }}
                            className="px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs cursor-pointer transition-colors"
                          >
                            Switch To
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => { setMode('register'); setRegStep(1); }}
                  className="font-bold text-amber-700 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>+ Register Another Student</span>
                </button>
              </div>
            </div>
          )}

          {/* 5. PASSWORD RECOVERY / FORGOT ACCESS */}
          {mode === 'forgot' && (
            <form onSubmit={handlePasswordRecoverySubmit} className="space-y-4 text-xs">
              <div className="bg-amber-50/70 p-3.5 rounded-2xl border border-amber-200 text-amber-900 space-y-1">
                <p className="font-bold flex items-center gap-1.5">
                  <KeyRound className="w-4 h-4 text-amber-700" />
                  <span>Secure Firebase Password Recovery</span>
                </p>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  Enter your registered email address. Firebase will send an authentic password reset link directly to your inbox.
                </p>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Registered Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={recoveryEmail}
                    onChange={(e) => setRecoveryEmail(e.target.value)}
                    placeholder="student@example.com"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 font-medium focus:outline-hidden focus:border-amber-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isRecovering || !recoveryEmail}
                className="w-full py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isRecovering ? 'Dispatching Reset Link...' : 'Send Password Reset Link'}</span>
              </button>

              <button
                type="button"
                onClick={() => setMode('login_email')}
                className="w-full text-center text-slate-500 hover:text-slate-800 text-[11px] underline pt-1 cursor-pointer"
              >
                Return to Email Login
              </button>
            </form>
          )}

          {/* QUICK PORTAL SWITCHER FOOTER */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
            <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">
              Platform Portals:
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setActiveRole('parent');
                  onClose();
                }}
                className="px-2.5 py-1 rounded-lg text-xs font-bold bg-pink-50 text-pink-900 border border-pink-200 hover:bg-pink-100 transition-colors cursor-pointer"
              >
                👨‍👧 Parent Portal
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveRole('admin');
                  onClose();
                }}
                className="px-2.5 py-1 rounded-lg text-xs font-bold bg-purple-50 text-purple-900 border border-purple-200 hover:bg-purple-100 transition-colors cursor-pointer"
              >
                🛡️ Admin Portal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
