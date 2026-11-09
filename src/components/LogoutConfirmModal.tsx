import React, { useState } from 'react';
import { LogOut, X, AlertCircle } from 'lucide-react';

interface LogoutConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void> | void;
  accountName?: string;
  roleTitle?: string;
}

export const LogoutConfirmModal: React.FC<LogoutConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  accountName,
  roleTitle = 'Account'
}) => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = async () => {
    setIsLoggingOut(true);
    try {
      await onConfirm();
      onClose();
    } catch (err) {
      console.error('Error during sign out:', err);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-rose-200 overflow-hidden animate-in zoom-in-95 my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-600 to-red-600 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
              <LogOut className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-display font-bold">Sign Out Confirmation</h3>
              <p className="text-xs text-rose-100 font-medium">{roleTitle} Session Termination</p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={isLoggingOut}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-start gap-3 p-3.5 bg-rose-50 rounded-2xl border border-rose-200 text-rose-950">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <p className="font-extrabold text-sm text-rose-900">
                Are you sure you want to sign out?
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                This will securely end your Firebase authentication session{accountName ? ` for ${accountName}` : ''} and clear your active session cache.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-slate-600 text-xs space-y-1">
            <p className="font-bold text-slate-800">What happens next:</p>
            <ul className="list-disc pl-4 space-y-1 text-slate-600">
              <li>You will be returned to the <strong>Student & Guardian Login</strong> screen.</li>
              <li>You can switch to another registered student account or log in with fresh credentials.</li>
              <li>All scores, completed stories, drawing studio art, and quiz levels remain securely saved.</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-2.5 pt-2">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoggingOut}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              disabled={isLoggingOut}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white font-extrabold text-xs shadow-md shadow-rose-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <LogOut className="w-4 h-4 text-white" />
              <span>{isLoggingOut ? 'Signing Out...' : 'Yes, Sign Out'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
