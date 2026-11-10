import React, { useState } from 'react';
import { 
  AlertTriangle, 
  X, 
  Send, 
  CheckCircle2, 
  BookOpen, 
  ShieldAlert 
} from 'lucide-react';
import { QuestionIssueType } from '../types/support';
import { createQuestionReport } from '../services/supportService';

interface ReportQuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  questionId: string;
  questionText: string;
  subject: string;
  classLevel: string;
  selectedAnswer?: string;
  correctAnswer?: string;
  studentId: string;
  studentName: string;
  studentEmail: string;
}

const ISSUE_TYPES: QuestionIssueType[] = [
  'Wrong Answer Key',
  'Factual Inaccuracy',
  'Spelling / Typo',
  'Image / Diagram Missing',
  'Explanation Unclear',
  'Other'
];

export const ReportQuestionModal: React.FC<ReportQuestionModalProps> = ({
  isOpen,
  onClose,
  questionId,
  questionText,
  subject,
  classLevel,
  selectedAnswer,
  correctAnswer,
  studentId,
  studentName,
  studentEmail
}) => {
  const [issueType, setIssueType] = useState<QuestionIssueType>('Wrong Answer Key');
  const [details, setDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reportSuccess, setReportSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!details.trim()) {
      alert('Please explain what appears incorrect in this question.');
      return;
    }

    setIsSubmitting(true);
    try {
      const rep = await createQuestionReport({
        questionId,
        questionText,
        subject,
        classLevel,
        selectedAnswer,
        correctAnswer,
        issueType,
        details: details.trim(),
        studentId: studentId || 'guest',
        studentName: studentName || 'Student',
        studentEmail: studentEmail || 'student@example.com'
      });

      setReportSuccess(rep.reportNumber);
    } catch (err) {
      console.error('Failed to submit question report:', err);
      alert('Failed to submit report. Please retry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150">
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border-2 border-amber-300 overflow-hidden m-auto animate-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-base leading-tight">
                Report Question or Answer Error
              </h3>
              <p className="text-[11px] text-amber-100 font-medium">
                Academic Review Panel Notification
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4 text-xs">
          {reportSuccess ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-600 text-white flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-base text-emerald-950">
                Report Submitted! (Ref: {reportSuccess})
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Thank you for helping us maintain accuracy! Our subject teachers will review question <strong>#{questionId}</strong> against Maharashtra State Board textbooks and update the question bank.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-xs cursor-pointer transition-all"
              >
                Close & Return to Quiz
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Question Preview Box */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <span>{subject} • {classLevel}</span>
                  <span className="font-mono">ID: {questionId}</span>
                </div>
                <p className="font-bold text-slate-900 leading-snug">
                  "{questionText}"
                </p>
              </div>

              {/* Issue Type */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">
                  Type of Error / Inaccuracy <span className="text-red-500">*</span>
                </label>
                <select
                  value={issueType}
                  onChange={(e) => setIssueType(e.target.value as QuestionIssueType)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                >
                  {ISSUE_TYPES.map(it => (
                    <option key={it} value={it}>{it}</option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">
                  Please Explain What is Incorrect <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Explain why this answer or explanation seems incorrect, or provide the textbook page/reference..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-slate-50/50"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs shadow-xs transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5 text-white" />
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Report'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
