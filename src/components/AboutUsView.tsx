import React from 'react';
import { 
  Trophy, 
  BookOpen, 
  Sparkles, 
  ShieldCheck, 
  Star, 
  Award, 
  Users, 
  HeartHandshake,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface AboutUsViewProps {
  onNavigateTab?: (tab: string) => void;
  onOpenMembership?: () => void;
}

export const AboutUsView: React.FC<AboutUsViewProps> = ({ 
  onNavigateTab,
  onOpenMembership 
}) => {
  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden text-center sm:text-left">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-amber-100 text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5 text-amber-200" />
            <span>Empowering Young Minds</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight leading-tight">
            Read • Play • Learn • Become a Champion!
          </h1>
          <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed font-medium">
            Vacation Champions (mystudyzone.in) is Maharashtra's premier educational gaming and curriculum practice arena, specially crafted for curious learners in Classes 2 through 8.
          </p>
        </div>
      </div>

      {/* Our Mission & Core Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-6 border border-amber-200/80 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-2xl">
            🎯
          </div>
          <h3 className="font-display font-extrabold text-base text-slate-900">
            Our Purpose
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            To replace passive, aimless screen time with structured, rewarding educational adventures that build rock-solid fundamentals in math, science, language, and moral character.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-amber-200/80 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-800 flex items-center justify-center text-2xl">
            🧠
          </div>
          <h3 className="font-display font-extrabold text-base text-slate-900">
            Zero-Repetition Quizzes
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Our intelligent question engine tracks every attempt per student, delivering unique practice challenges across 14 school curriculum subjects without frustrating duplicates.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-amber-200/80 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-2xl">
            🛡️
          </div>
          <h3 className="font-display font-extrabold text-base text-slate-900">
            Safety & Child Privacy
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            100% ad-free, child-friendly design with strict state-compliant data privacy, encrypted Razorpay LIVE payments, and complete parent supervision portals.
          </p>
        </div>
      </div>

      {/* What Makes Us Different */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl font-display font-bold text-slate-900">
            Comprehensive Learning Ecosystem
          </h2>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Everything your child needs to excel academically and spark a lifelong love for knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-slate-900">14 Full Curriculum Subjects</p>
              <p className="text-slate-600 text-[11px] mt-0.5">
                Math, English, Science, Marathi, Hindi, Social Studies, History, Geography, Computers, and Reasoning.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-slate-900">45+ Bilingual Moral Audio Stories</p>
              <p className="text-slate-600 text-[11px] mt-0.5">
                Narrated in gentle, natural Marathi and English female voices with synchronized highlighted text.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-slate-900">Chhatrapati Shivaji Maharaj Legacy</p>
              <p className="text-slate-600 text-[11px] mt-0.5">
                50 authentic chapters celebrating forts, valor, swarajya, and leadership for inspiring character growth.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-slate-900">MSCE Scholarship Exam Focus</p>
              <p className="text-slate-600 text-[11px] mt-0.5">
                Targeted practice modules for Class 4 (Pre-Upper Primary) and Class 7 (Pre-Secondary) examination papers.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
          <div className="text-xs text-slate-600">
            <p className="font-bold text-slate-800">Affordable Learning Plans for Every Student</p>
            <p className="text-[11px] text-slate-500">FREE Lifetime Plan • Standard ₹49 (90 Days) • Premium ₹99 (90 Days)</p>
          </div>
          <button
            type="button"
            onClick={onOpenMembership}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Explore Subscription Plans</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
