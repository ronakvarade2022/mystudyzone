import React, { useState, useEffect } from 'react';
import {
  X,
  Lock,
  Mail,
  Eye,
  EyeOff,
  CheckCircle2,
  ShieldAlert,
  ShieldCheck,
  RefreshCw,
  ArrowRight,
  KeyRound,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { verifyFirebasePasswordResetCode } from '../services/firebase';

interface PasswordResetModalProps {
  isOpen: boolean;
  oobCode: string;
  onClose: () => void;
  onRequestAnotherLink: (email?: string) => void;
  onProceedToLogin: (email?: string) => void;
}

export const PasswordResetModal: React.FC<PasswordResetModalProps> = ({
  isOpen,
  oobCode,
  onClose,
  onRequestAnotherLink,
  onProceedToLogin,
}) => {
  const { studentsList, completePasswordReset } = useApp();

  const [verifying, setVerifying] = useState<boolean>(true);
  const [linkValid, setLinkValid] = useState<boolean>(false);
  const [verifiedEmail, setVerifiedEmail] = useState<string>('');
  const [linkError, setLinkError] = useState<string>('');

  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [resetSuccessMessage, setResetSuccessMessage] = useState<string>('');

  useEffect(() => {
    if (!isOpen) return;

    let cancelled = false;
    setVerifying(true);
    setLinkValid(false);
    setLinkError('');
    setFormError('');
    setResetSuccessMessage('');
    setNewPassword('');
    setConfirmPassword('');

    verifyFirebasePasswordResetCode(oobCode).then((res) => {
      if (cancelled) return;
      setVerifying(false);
      if (res.valid && res.email) {
        setLinkValid(true);
        setVerifiedEmail(res.email);
      } else {
        setLinkValid(false);
        setLinkError(
          res.error ||
            'This password reset link is invalid or has expired. Please request a new reset link.'
        );
      }
    });

    return () => {
      cancelled = true;
    };
  }, [isOpen, oobCode]);

  if (!isOpen) return null;

  const matchedStudent = verifiedEmail
    ? studentsList.find((s) => s.email.trim().toLowerCase() === verifiedEmail.trim().toLowerCase())
    : undefined;

  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (newPassword.length < 6) {
      setFormError('Your new password must be at least 6 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setFormError('New password and confirm password do not match. Please re-enter.');
      return;
    }

    setIsSubmitting(true);
    const result = await completePasswordReset(oobCode, newPassword);
    setIsSubmitting(false);

    if (!result.success) {
      setFormError(result.message);
      return;
    }

    setResetSuccessMessage(result.message);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-indigo-100 my-6 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-5 sm:p-6 text-white relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer"
            aria-label="Close password reset page"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
            <KeyRound className="w-4 h-4" /> Firebase Authentication Security
          </div>
          <h2 className="text-xl sm:text-2xl font-black">Create New Password</h2>
          <p className="text-indigo-100 text-xs sm:text-sm mt-1">
            Securely update your password while keeping your account and progress intact
          </p>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 space-y-4">
          {verifying ? (
            <div className="py-10 text-center space-y-3">
              <RefreshCw className="w-8 h-8 text-indigo-600 animate-spin mx-auto" />
              <p className="text-sm font-bold text-slate-700">
                Verifying your secure Firebase password reset link...
              </p>
            </div>
          ) : resetSuccessMessage ? (
            <div className="space-y-4 py-2">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2">
                <div className="flex items-center gap-2 font-black text-sm text-emerald-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Password Changed Successfully!</span>
                </div>
                <p className="text-xs leading-relaxed text-emerald-800">{resetSuccessMessage}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-xs text-indigo-950 space-y-1">
                <p className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
                  Existing Account Preserved
                </p>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  No new account was created. Your subscription plan, payment history, badges, and
                  saved learning progress are untouched.
                </p>
              </div>

              <button
                type="button"
                onClick={() => onProceedToLogin(verifiedEmail)}
                className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Log In with New Password</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : !linkValid ? (
            <div className="space-y-4 py-2">
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 space-y-2">
                <div className="flex items-center gap-2 font-black text-sm text-rose-700">
                  <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>Reset Link Expired or Invalid</span>
                </div>
                <p className="text-xs leading-relaxed">{linkError}</p>
              </div>

              <button
                type="button"
                onClick={() => onRequestAnotherLink(verifiedEmail)}
                className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Request Another Reset Link</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleResetSubmit} className="space-y-4">
              {/* Verified Account Banner */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span className="truncate">{verifiedEmail}</span>
                </div>
                {matchedStudent && (
                  <p className="text-[11px] text-emerald-700 font-semibold">
                    ✓ Verified Student: {matchedStudent.name} ({matchedStudent.classLevel}) • Plan,
                    payments &amp; progress preserved
                  </p>
                )}
              </div>

              {formError && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>{formError}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  New Password *
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Minimum 6 characters"
                    className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:outline-none text-sm font-medium"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Confirm New Password *
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter your new password"
                    className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:outline-none text-sm font-medium"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-60 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all cursor-pointer"
              >
                {isSubmitting ? 'Updating Password...' : 'Save New Password'}
              </button>

              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={() => onRequestAnotherLink(verifiedEmail)}
                  className="text-xs font-bold text-indigo-600 hover:underline cursor-pointer"
                >
                  Need another reset link? Request a new one
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
