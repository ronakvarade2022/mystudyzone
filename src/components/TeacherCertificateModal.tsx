import React, { useRef } from 'react';
import { Award, Download, Printer, X, ShieldCheck, Sparkles, Star } from 'lucide-react';

interface TeacherCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  teacherName: string;
  schoolName?: string;
  certificateNumber?: string;
  referralCount?: number;
}

export const TeacherCertificateModal: React.FC<TeacherCertificateModalProps> = ({
  isOpen,
  onClose,
  teacherName,
  schoolName = 'Partner Educational Institution',
  certificateNumber = `CERT-EDU-${Math.floor(100000 + Math.random() * 900000)}`,
  referralCount = 100
}) => {
  const certificateRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8 border border-amber-200">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white">
          <div className="flex items-center space-x-2">
            <Award className="w-6 h-6 text-amber-200" />
            <h3 className="font-bold text-lg">State Educator Excellence Award</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1 px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Canvas / Body */}
        <div 
          ref={certificateRef}
          className="p-8 sm:p-12 bg-[#fffdf9] border-[12px] border-double border-amber-600/60 m-4 rounded-xl text-center relative selection:bg-amber-100"
        >
          {/* Subtle Corner Accents */}
          <div className="absolute top-3 left-3 text-amber-500 font-serif text-2xl select-none">✦</div>
          <div className="absolute top-3 right-3 text-amber-500 font-serif text-2xl select-none">✦</div>
          <div className="absolute bottom-3 left-3 text-amber-500 font-serif text-2xl select-none">✦</div>
          <div className="absolute bottom-3 right-3 text-amber-500 font-serif text-2xl select-none">✦</div>

          {/* Org Header */}
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold tracking-wider uppercase mb-3 border border-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Vacation Champions Educational Foundation</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-serif font-black tracking-wide text-gray-900 mt-2 mb-1">
            CERTIFICATE OF EXCELLENCE
          </h1>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-amber-700 mb-6">
            IN INSPIRATIONAL TEACHING & KNOWLEDGE AMBASSADORSHIP
          </p>

          <p className="text-sm text-gray-600 italic mb-2">
            This distinguished state honor is proudly conferred upon
          </p>

          <div className="my-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-800 tracking-wide font-serif border-b-2 border-amber-400 inline-block px-8 pb-1">
              {teacherName || 'Distinguished Educator'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 font-medium">
              {schoolName}
            </p>
          </div>

          <p className="max-w-xl mx-auto text-xs sm:text-sm text-gray-700 leading-relaxed mt-4 mb-6">
            In recognition of outstanding dedication to empowering young minds, fostering self-learning, 
            and actively guiding <strong className="text-gray-900 font-bold">{referralCount}+ verified students</strong> into 
            holistic academic champion mastery on the Vacation Champions Digital Learning Platform.
          </p>

          {/* Badge & Signatures */}
          <div className="pt-6 border-t border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 px-4">
            <div className="text-center sm:text-left">
              <div className="text-xs font-bold text-gray-800 uppercase tracking-wider">Dr. R. K. Varade</div>
              <div className="text-[11px] text-gray-500">Director of Academic Affairs</div>
              <div className="text-[10px] text-gray-400 font-mono mt-0.5">Vacation Champions Foundation</div>
            </div>

            {/* Gold Seal Emblem */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 p-1 shadow-lg border-2 border-white flex flex-col items-center justify-center text-white text-center">
              <ShieldCheck className="w-6 h-6 text-white mb-0.5" />
              <span className="text-[8px] font-black uppercase tracking-tighter">STATE GOLD</span>
              <span className="text-[7px] text-amber-100 font-bold">VERIFIED</span>
            </div>

            <div className="text-center sm:text-right">
              <div className="text-xs font-bold text-gray-800 uppercase tracking-wider">Cert ID: {certificateNumber}</div>
              <div className="text-[11px] text-gray-500">Date of Connotation: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
              <div className="text-[10px] text-emerald-600 font-bold flex items-center justify-center sm:justify-end space-x-1 mt-0.5">
                <Star className="w-3 h-3 fill-emerald-600 text-emerald-600" />
                <span>Digitally Authenticated</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span>Official Educator Excellence Certificate • Vacation Champions Platform</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
