import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  LifeBuoy, 
  Bot, 
  ShieldCheck, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';

interface ContactUsViewProps {
  onNavigateTab?: (tab: string) => void;
}

export const ContactUsView: React.FC<ContactUsViewProps> = ({ onNavigateTab }) => {
  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-amber-100 text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-amber-200" />
            <span>Connect With Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight leading-tight">
            Contact & Support Centre
          </h1>
          <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed font-medium">
            We are here to assist students, parents, and educators. Reach out for technical queries, account help, or academic feedback.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email Support */}
        <div className="bg-white rounded-3xl p-6 border border-amber-200/80 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="font-display font-extrabold text-base text-slate-900">
            Email Support
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            For all inquiries, payment confirmations, and account verifications:
          </p>
          <div className="pt-1 text-xs space-y-1">
            <a 
              href="mailto:support@mystudyzone.in" 
              className="font-bold text-amber-800 hover:underline block break-all"
            >
              support@mystudyzone.in
            </a>
            <a 
              href="mailto:ronakvarade2022@gmail.com" 
              className="text-[11px] text-slate-500 hover:underline block break-all"
            >
              ronakvarade2022@gmail.com
            </a>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="bg-white rounded-3xl p-6 border border-amber-200/80 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="font-display font-extrabold text-base text-slate-900">
            Response Timelines
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Our support desk operates 6 days a week to ensure your children keep learning without interruption:
          </p>
          <div className="pt-1 text-xs space-y-0.5 text-slate-800 font-bold">
            <p>Monday to Saturday</p>
            <p className="text-[11px] text-slate-500 font-medium">9:00 AM – 7:00 PM IST</p>
            <p className="text-[11px] text-emerald-700 font-bold mt-1">✓ Response within 24–48 hours</p>
          </div>
        </div>

        {/* Registered Location */}
        <div className="bg-white rounded-3xl p-6 border border-amber-200/80 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-display font-extrabold text-base text-slate-900">
            Headquarters
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Vacation Champions Digital Learning Arena (mystudyzone.in)
          </p>
          <div className="pt-1 text-xs text-slate-700 leading-relaxed font-medium">
            <p>Maharashtra, India</p>
            <p className="text-[11px] text-slate-500">Official Educational Portal</p>
          </div>
        </div>
      </div>

      {/* Immediate Interactive Action Options */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-6 sm:p-8 border border-amber-200 space-y-4">
        <h2 className="text-lg font-display font-bold text-slate-900">
          Need Faster Resolution?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => onNavigateTab?.('help-support')}
            className="p-4 rounded-2xl bg-white hover:bg-amber-100/50 border border-amber-200 transition-all cursor-pointer flex items-center justify-between shadow-2xs group text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <LifeBuoy className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-xs text-slate-900">Submit a Help Ticket</p>
                <p className="text-[11px] text-slate-500">Get a unique trackable ticket ID (TKT-VC-XXXXX)</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={() => onNavigateTab?.('grievance')}
            className="p-4 rounded-2xl bg-white hover:bg-indigo-50/50 border border-slate-200 transition-all cursor-pointer flex items-center justify-between shadow-2xs group text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-xs text-slate-900">Lodge Official Grievance</p>
                <p className="text-[11px] text-slate-500">Academic review for incorrect questions/answers</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-indigo-600 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
