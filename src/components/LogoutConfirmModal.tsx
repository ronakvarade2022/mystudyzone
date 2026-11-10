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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs overflow-y-auto overscroll-contain animate-in fade-in duration-150">
      {/* Backdrop click to close */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="bg-white w-full max-w-sm rounded-3xl shadow-2xl border border-rose-200 overflow-hidden m-auto animate-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-600 to-red-600 text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <LogOut className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-display font-bold leading-tight">
                Sign Out Confirmation
              </h3>
              <p className="text-[11px] text-rose-100 font-medium">
                {roleTitle} Session
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={isLoggingOut}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center cursor-pointer transition-colors shrink-0"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 space-y-3.5">
          <div className="flex items-start gap-2.5 p-3 bg-rose-50/80 rounded-2xl border border-rose-100 text-rose-950">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="text-xs space-y-0.5">
              <p className="font-extrabold text-slate-900">
                Are you sure you want to sign out?
              </p>
              <p className="text-slate-600 leading-normal text-[11px]">
                {accountName ? `${accountName}'s progress` : 'All your learning progress'}, points, and quiz attempts remain securely saved.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoggingOut}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer transition-colors text-center"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              disabled={isLoggingOut}
              className="w-full py-2.5 px-3 rounded-xl bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white font-extrabold text-xs shadow-md shadow-rose-600/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <LogOut className="w-3.5 h-3.5 text-white" />
              <span>{isLoggingOut ? 'Signing Out...' : 'Yes, Sign Out'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
