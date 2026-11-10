import React, { useState } from 'react';
import { 
  FileText, 
  ShieldCheck, 
  AlertTriangle, 
  Lock, 
  CheckCircle2, 
  Scale, 
  BookOpen, 
  CreditCard, 
  HelpCircle,
  ExternalLink
} from 'lucide-react';

interface TermsAndPrivacyViewProps {
  initialTab?: 'terms' | 'privacy' | 'disclaimer';
  onNavigateTab?: (tab: string) => void;
}

export const TermsAndPrivacyView: React.FC<TermsAndPrivacyViewProps> = ({ 
  initialTab = 'terms',
  onNavigateTab 
}) => {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy' | 'disclaimer'>(initialTab);

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5" />
            <span>Legal, Privacy & Educational Policies</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight leading-tight">
            Information Centre & Compliance
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
            Vacation Champions (mystudyzone.in) is committed to child data protection, academic integrity, and transparent governance for students and parents.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2 relative z-10">
          <button
            type="button"
            onClick={() => setActiveTab('terms')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'terms'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Terms & Conditions</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('privacy')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'privacy'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Privacy Policy</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('disclaimer')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'disclaimer'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 text-amber-300" />
            <span>Educational Disclaimer</span>
          </button>
        </div>
      </div>

      {/* TAB 1: TERMS & CONDITIONS */}
      {activeTab === 'terms' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-8">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
              Last Updated: November 2026
            </span>
            <h2 className="text-xl font-display font-bold text-slate-900 mt-1">
              Terms & Conditions of Service
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
              Please read these terms carefully before enrolling in or using Vacation Champions (mystudyzone.in). By creating an account or subscribing, you and your guardian agree to these terms.
            </p>
          </div>

          {/* Explicit 7-Point Educational Disclaimer Section */}
          <div className="p-6 rounded-3xl bg-amber-50/70 border-2 border-amber-300 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-base text-amber-950">
                  Official 7-Point Educational Disclaimer
                </h3>
                <p className="text-[11px] text-amber-800 font-medium">
                  Mandatory notice regarding practice materials and syllabus coverage
                </p>
              </div>
            </div>

            <ol className="space-y-3 text-xs text-slate-700 leading-relaxed list-decimal list-inside pl-1 font-medium">
              <li className="p-2.5 bg-white/80 rounded-xl border border-amber-200">
                <strong>Educational Purpose Only:</strong> This website provides educational materials, practice questions, answers, notes, stories and other learning resources strictly for educational enrichment and supplementary self-practice.
              </li>
              <li className="p-2.5 bg-white/80 rounded-xl border border-amber-200">
                <strong>Accuracy & Potential Inaccuracies:</strong> Although we try our best to maintain the highest accuracy across all 14 subjects, some questions, answers, explanations or educational materials may occasionally contain unintentional typographical errors, spelling mistakes or inaccuracies.
              </li>
              <li className="p-2.5 bg-white/80 rounded-xl border border-amber-200">
                <strong>Textbook & Official Syllabus Verification:</strong> Students and guardians are strongly advised to verify important information through prescribed school textbooks, Maharashtra State Board official references, and authorized educational sources.
              </li>
              <li className="p-2.5 bg-white/80 rounded-xl border border-amber-200">
                <strong>Non-Liability Clause:</strong> The website owner, teachers, content contributors, and management are not liable or responsible for any direct, indirect, incidental, or consequential loss resulting from errors, omissions, or the use of educational materials.
              </li>
              <li className="p-2.5 bg-white/80 rounded-xl border border-amber-200">
                <strong>No Guaranteed Exam Outcomes:</strong> All content is formulated to support general school curriculum and competitive examination readiness (such as MSCE 4th & 7th Std Scholarship), but does not guarantee specific exam outcomes, ranks, or scores.
              </li>
              <li className="p-2.5 bg-white/80 rounded-xl border border-amber-200">
                <strong>Intellectual Property & Copyright:</strong> All questions, quizzes, audio moral story recordings, illustrations, coding modules, and software architecture are proprietary intellectual property. Content may not be copied, reproduced, redistributed, scraped, or sold without prior written permission.
              </li>
              <li className="p-2.5 bg-white/80 rounded-xl border border-amber-200">
                <strong>Fair Use & Strict Prohibition on Misuse:</strong> Rules strictly prohibit system abuse, reverse engineering, unauthorized account sharing across non-family members, automated bot access, or fraudulent payment attempts. Violations will result in immediate termination without refund.
              </li>
            </ol>
          </div>

          {/* Subscription and Payment Policy */}
          <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
            <h3 className="text-sm font-display font-bold text-slate-900 flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-emerald-600" />
              <span>Subscription Duration, Pricing & Razorpay LIVE Payments</span>
            </h3>
            <p>
              Vacation Champions provides digital educational access through two paid subscription tiers alongside our Lifetime Free Plan:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-700">
              <li><strong>Free Plan (₹0):</strong> Lifetime access to basic quizzes, 2 demo stories, and sample puzzles.</li>
              <li><strong>Standard Plan (₹49):</strong> Valid for exactly <strong>90 Days (3 Months)</strong> from capture time. Unlocks all 14 curriculum subjects.</li>
              <li><strong>Premium Plan (₹99):</strong> Valid for exactly <strong>90 Days (3 Months)</strong> from capture time. Full unlock of 45+ audio stories, Shivaji Maharaj stories, drawing, cricket, and scholarship prep.</li>
            </ul>
            <p className="mt-2 text-[11px] text-slate-500">
              Payments are processed securely via Razorpay LIVE. Once digital access is activated, subscription fees are non-refundable except in confirmed duplicate billing cases.
            </p>
          </div>

          {/* Student Account Integrity */}
          <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
            <h3 className="text-sm font-display font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-600" />
              <span>Enrolled Class Lock & Single-Student Policy</span>
            </h3>
            <p>
              To maintain academic consistency and comply with state assessment tracking, enrolled grade levels are permanently locked. Students are prohibited from sharing credentials or attempting to bypass grade restrictions. If grade adjustment is required, an official request must be filed through Help & Support.
            </p>
          </div>
        </div>
      )}

      {/* TAB 2: PRIVACY POLICY */}
      {activeTab === 'privacy' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-8">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
              Privacy & Child Safety Policy
            </span>
            <h2 className="text-xl font-display font-bold text-slate-900 mt-1">
              Student Data Protection & Parental Oversight
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
              We hold child privacy sacred. Vacation Champions does not display third-party advertisements, sell student behavioral data, or solicit unauthorized child communications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Information We Collect</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                We only collect basic student profile information required for educational administration: student name, grade level (Classes 2 to 8), guardian email, mobile number for authentication, and quiz progress logs.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <CreditCard className="w-4 h-4 text-indigo-600" />
                <span>Razorpay Payment Security</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                We <strong>never</strong> store debit/credit card numbers, CVVs, netbanking passwords, or UPI PINs. All financial transactions are processed by RBI-licensed payment gateway Razorpay using 256-bit SSL encryption.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Zero Advertising Policy</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Vacation Champions is 100% ad-free. We do not use third-party advertising networks, commercial tracking cookies, or cross-site profiling on children.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Lock className="w-4 h-4 text-purple-600" />
                <span>Guardian Rights & Account Deletion</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Parents may review their child's learning history, request data corrections, or request complete account erasure at any time by lodging a ticket via Help & Support.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: EDUCATIONAL DISCLAIMER */}
      {activeTab === 'disclaimer' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-600 font-bold">
              Important Academic Notice
            </span>
            <h2 className="text-xl font-display font-bold text-slate-900 mt-1">
              Comprehensive Educational Disclaimer
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
              This disclaimer applies to all practice modules, quiz questions, answer keys, explanations, and audio stories hosted on mystudyzone.in.
            </p>
          </div>

          <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
              <h3 className="font-extrabold text-sm text-amber-950">
                Notice to Parents, Teachers and Students:
              </h3>
              <p>
                1. <strong>Supplementary Nature:</strong> Vacation Champions is designed as a fun, gamified practice platform to supplement classroom instruction and textbook reading for students in Classes 2 to 8. It is not an accredited school or degree-granting entity.
              </p>
              <p>
                2. <strong>Error Reporting Protocol:</strong> We maintain a rigorous question-curation process aligned with Maharashtra State Board syllabus. However, should you discover any ambiguity or discrepancy in any quiz or explanation, please use our inline <strong>"Report Issue"</strong> button or submit a grievance. Our teachers will verify and correct valid issues immediately.
              </p>
              <p>
                3. <strong>Exam Outcomes:</strong> Practice scores and championship ranks on Vacation Champions reflect engagement with practice quizzes and do not guarantee official school or MSCE scholarship exam results.
              </p>
              <p>
                4. <strong>Independent References:</strong> For state scholarship examinations and board evaluations, the syllabi and answer keys published by the Maharashtra State Council of Examination (MSCE) Pune remain the sole authoritative reference.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-bold text-slate-900">Have a concern or spotted an incorrect question?</p>
                <p className="text-[11px] text-slate-500">Submit a direct inquiry to our academic verification desk.</p>
              </div>
              <button
                type="button"
                onClick={() => onNavigateTab?.('help-support')}
                className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs shadow-xs cursor-pointer transition-all"
              >
                Open Help & Support
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
