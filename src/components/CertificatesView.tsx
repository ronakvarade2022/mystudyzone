import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Trophy, 
  Award, 
  Download, 
  Printer, 
  Sparkles, 
  ShieldCheck, 
  Crown,
  Medal,
  Calendar
} from 'lucide-react';

interface CertificateTemplate {
  id: string;
  title: string;
  subtitle: string;
  badgeName: string;
  themeGradient: string;
  sealColor: string;
}

const CERTIFICATE_TEMPLATES: CertificateTemplate[] = [
  {
    id: 'cert-quiz-master',
    title: 'VACATION QUIZ CHAMPION',
    subtitle: 'For outstanding subject mastery and academic accuracy with zero repetition',
    badgeName: 'Academic Excellence Seal',
    themeGradient: 'from-amber-600 via-yellow-500 to-amber-700',
    sealColor: 'border-amber-400 bg-amber-50 text-amber-700'
  },
  {
    id: 'cert-creative-artist',
    title: 'CREATIVE DRAWING CHAMPION',
    subtitle: 'For exceptional artistic creativity and imagination on the digital canvas',
    badgeName: 'Master Piccolo Seal',
    themeGradient: 'from-rose-600 via-pink-500 to-amber-600',
    sealColor: 'border-rose-400 bg-rose-50 text-rose-700'
  },
  {
    id: 'cert-brain-puzzle',
    title: 'BRAIN PUZZLE CHAMPION',
    subtitle: 'For sharp logical reasoning, problem solving, and intellectual agility',
    badgeName: 'Brainiac Gold Seal',
    themeGradient: 'from-indigo-700 via-purple-600 to-pink-600',
    sealColor: 'border-indigo-400 bg-indigo-50 text-indigo-700'
  }
];

export const CertificatesView: React.FC = () => {
  const { currentStudent, studentsList } = useApp();

  const [activeTab, setActiveTab] = useState<'certificates' | 'leaderboard'>('certificates');
  const [selectedCert, setSelectedCert] = useState<CertificateTemplate>(CERTIFICATE_TEMPLATES[0]);
  const [leaderboardTimeframe, setLeaderboardTimeframe] = useState<'daily' | 'weekly' | 'monthly' | 'class'>('weekly');

  if (!currentStudent) return null;

  const handlePrintCertificate = () => {
    window.print();
  };

  // Safe leaderboard rankings sorted by points (No private PII exposed)
  const rankedStudents = [...studentsList]
    .filter(s => leaderboardTimeframe !== 'class' || s.classLevel === currentStudent.classLevel)
    .sort((a, b) => b.points - a.points);

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-16">
      {/* Top Banner and Navigation */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏆</span>
            <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
              Leaderboards & Official Certificates
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
            Privacy-safe leaderboards and printable vacation achievement certificates.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-amber-50 p-1.5 rounded-2xl border border-amber-200 text-xs font-bold self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('certificates')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${activeTab === 'certificates' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:text-amber-900'}`}
          >
            Milestone Certificates
          </button>
          <button
            onClick={() => setActiveTab('leaderboard')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${activeTab === 'leaderboard' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:text-amber-900'}`}
          >
            Hall of Fame Leaderboard
          </button>
        </div>
      </div>

      {/* TAB 1: MILESTONE CERTIFICATES (Section 11 & 21.E) */}
      {activeTab === 'certificates' && (
        <div className="space-y-6">
          {/* Certificate Selection Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {CERTIFICATE_TEMPLATES.map((tmpl) => (
              <button
                key={tmpl.id}
                onClick={() => setSelectedCert(tmpl)}
                className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${selectedCert.id === tmpl.id ? 'bg-amber-50 border-amber-500 shadow-md scale-102' : 'bg-white border-slate-200 hover:border-amber-300'}`}
              >
                <div className="flex items-center gap-2 font-bold text-xs text-amber-900 mb-1">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>{tmpl.badgeName}</span>
                </div>
                <h4 className="font-display font-bold text-sm text-slate-900">{tmpl.title}</h4>
              </button>
            ))}
          </div>

          {/* Printable Official Certificate Canvas Layout */}
          <div 
            id="printable-certificate"
            className="relative bg-white rounded-3xl p-8 sm:p-14 border-8 border-double border-amber-400 shadow-2xl space-y-6 text-center max-w-4xl mx-auto overflow-hidden"
          >
            {/* Corner Decorative Ribbons */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-amber-400 to-transparent opacity-30 rounded-br-full" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-400 to-transparent opacity-30 rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-400 to-transparent opacity-30 rounded-tr-full" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-amber-400 to-transparent opacity-30 rounded-tl-full" />

            {/* Header Crest */}
            <div className="space-y-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 text-white flex items-center justify-center text-3xl shadow-lg">
                🏅
              </div>
              <h2 className="text-xs font-extrabold tracking-[0.25em] uppercase text-amber-800">
                VACATION CHAMPIONS EDUCATIONAL ACADEMY
              </h2>
              <h3 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
                CERTIFICATE OF ACHIEVEMENT
              </h3>
              <p className="text-xs text-slate-500 italic">
                {selectedCert.subtitle}
              </p>
            </div>

            {/* Recipient Details */}
            <div className="space-y-3 py-6 border-y-2 border-amber-100 max-w-xl mx-auto">
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                This honor is proudly awarded to:
              </p>
              <h4 className="text-3xl sm:text-4xl font-display font-black bg-gradient-to-r from-amber-800 via-orange-800 to-amber-900 bg-clip-text text-transparent">
                {currentStudent.name}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Grade: <strong>{currentStudent.classLevel}</strong> • Points Earned: <strong>{currentStudent.points} XP</strong>
              </p>
              <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                For demonstrating dedication, curiosity, and completing the educational learning program with distinction.
              </p>
            </div>

            {/* Signatures & Seal Footer */}
            <div className="pt-6 grid grid-cols-3 items-end max-w-xl mx-auto text-xs text-slate-600">
              <div className="space-y-1">
                <div className="font-serif italic font-bold text-slate-800 border-b border-slate-300 pb-1">
                  Dr. R. K. Mukherjee
                </div>
                <p className="text-[10px] text-slate-400 uppercase">Director of Education</p>
              </div>

              {/* Gold Verification Seal */}
              <div className="w-20 h-20 mx-auto rounded-full border-4 border-amber-400 bg-amber-50 flex flex-col items-center justify-center text-center shadow-inner p-1">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <span className="text-[8px] font-extrabold uppercase text-amber-900 tracking-wider">
                  VERIFIED
                </span>
                <span className="text-[7px] text-slate-400 font-mono">VC-2026</span>
              </div>

              <div className="space-y-1">
                <div className="font-serif italic font-bold text-slate-800 border-b border-slate-300 pb-1">
                  {new Date().toLocaleDateString()}
                </div>
                <p className="text-[10px] text-slate-400 uppercase">Awarded Date</p>
              </div>
            </div>
          </div>

          {/* Download / Print Actions */}
          <div className="flex justify-center gap-3">
            <button
              onClick={handlePrintCertificate}
              className="px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print or Save as PDF</span>
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: PRIVACY-SAFE LEADERBOARD (Section 11) */}
      {activeTab === 'leaderboard' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-display font-bold text-slate-900">
                Vacation Champions Hall of Fame
              </h2>
              <p className="text-xs text-slate-500">
                Privacy-guaranteed nicknames and student avatars. No private contact info is displayed.
              </p>
            </div>

            {/* Timeframe Filter */}
            <div className="flex items-center gap-1.5 bg-amber-50 p-1 rounded-xl border border-amber-200 text-xs font-bold">
              {(['daily', 'weekly', 'monthly', 'class'] as const).map((tf) => (
                <button
                  key={tf}
                  onClick={() => setLeaderboardTimeframe(tf)}
                  className={`px-3 py-1.5 rounded-lg capitalize transition-all cursor-pointer ${leaderboardTimeframe === tf ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:text-amber-900'}`}
                >
                  {tf === 'class' ? `${currentStudent.classLevel} Only` : `${tf}`}
                </button>
              ))}
            </div>
          </div>

          {/* Leaderboard Table */}
          <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden">
            {rankedStudents.map((stu, index) => {
              const isCurrentUser = stu.id === currentStudent.id;
              return (
                <div 
                  key={stu.id}
                  className={`p-4 flex items-center justify-between gap-4 text-xs ${isCurrentUser ? 'bg-amber-50/80 font-bold' : 'hover:bg-slate-50'}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center font-extrabold text-xs ${index === 0 ? 'bg-amber-400 text-white shadow-xs' : index === 1 ? 'bg-slate-300 text-slate-700' : index === 2 ? 'bg-amber-600 text-white' : 'text-slate-400'}`}>
                      {index + 1}
                    </span>
                    <span className="text-2xl">{stu.avatar}</span>
                    <div>
                      <p className="font-bold text-sm text-slate-900">
                        {stu.name} {isCurrentUser && '(You)'}
                      </p>
                      <p className="text-[11px] text-slate-400">{stu.classLevel}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-right">
                    <div>
                      <p className="font-extrabold text-sm text-amber-900">{stu.points} XP</p>
                      <p className="text-[10px] text-orange-600">🔥 {stu.streakDays} Day Streak</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
