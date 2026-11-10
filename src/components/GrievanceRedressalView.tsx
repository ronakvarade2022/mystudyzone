import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  Send, 
  Search, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  FileText, 
  ChevronRight,
  RefreshCw,
  Scale,
  Building,
  UserCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { 
  GrievanceCategory, 
  GrievanceRecord, 
  GrievanceStatus 
} from '../types/support';
import { 
  createGrievance, 
  getGrievances, 
  getGrievanceByNumber 
} from '../services/supportService';

const GRIEVANCE_CATEGORIES: GrievanceCategory[] = [
  'Incorrect Questions',
  'Incorrect Answers',
  'Missing Materials',
  'Payment / Subscription Issues',
  'Technical Glitches',
  'Misleading or Inappropriate Content',
  'Other Complaints'
];

interface GrievanceRedressalViewProps {
  onNavigateTab?: (tab: string) => void;
}

export const GrievanceRedressalView: React.FC<GrievanceRedressalViewProps> = ({ onNavigateTab }) => {
  const { currentStudent } = useApp();

  const [activeTab, setActiveTab] = useState<'lodge' | 'track'>('lodge');

  // Form State
  const [studentName, setStudentName] = useState(currentStudent?.name || '');
  const [email, setEmail] = useState(currentStudent?.email || '');
  const [mobile, setMobile] = useState(currentStudent?.mobile || '');
  const [category, setCategory] = useState<GrievanceCategory>('Incorrect Questions');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdGrievance, setCreatedGrievance] = useState<GrievanceRecord | null>(null);

  // Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedGrievance, setSearchedGrievance] = useState<GrievanceRecord | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState('');

  // Student's recent grievances
  const [myGrievances, setMyGrievances] = useState<GrievanceRecord[]>([]);
  const [loadingList, setLoadingList] = useState(false);

  useEffect(() => {
    if (currentStudent?.id) {
      loadMyGrievances();
    }
  }, [currentStudent?.id]);

  const loadMyGrievances = async () => {
    setLoadingList(true);
    try {
      const records = await getGrievances(currentStudent?.id);
      setMyGrievances(records);
    } catch (err) {
      console.warn('Failed to fetch grievances', err);
    } finally {
      setLoadingList(false);
    }
  };

  const handleLodgeGrievance = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !email.trim() || !subject.trim() || !description.trim()) {
      alert('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      const grv = await createGrievance({
        studentId: currentStudent?.id || 'guest',
        studentName: studentName.trim(),
        email: email.trim(),
        mobile: mobile.trim(),
        category,
        subject: subject.trim(),
        description: description.trim()
      });

      setCreatedGrievance(grv);
      setSubject('');
      setDescription('');
      loadMyGrievances();
    } catch (err) {
      console.error('Failed to lodge grievance:', err);
      alert('Failed to register grievance. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSearchGrievance = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;

    setIsSearching(true);
    setSearchError('');
    setSearchedGrievance(null);

    try {
      const result = await getGrievanceByNumber(query);
      if (result) {
        setSearchedGrievance(result);
      } else {
        setSearchError(`No grievance record found for Reference ID "${query}". Please check your Reference ID.`);
      }
    } catch (err) {
      setSearchError('Error fetching grievance record. Please retry.');
    } finally {
      setIsSearching(false);
    }
  };

  const getStatusBadge = (status: GrievanceStatus) => {
    switch (status) {
      case 'Resolved':
      case 'Closed':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Under Review':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      default:
        return 'bg-amber-100 text-amber-800 border-amber-300';
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5" />
            <span>Statutory Grievance Redressal Mechanism</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight leading-tight">
            Transparent Grievance Redressal
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
            In accordance with Indian Digital Education Standards, we ensure an impartial, recorded grievance system. Every grievance is investigated by our academic review council.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2 relative z-10">
          <button
            type="button"
            onClick={() => setActiveTab('lodge')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'lodge'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Lodge a Grievance</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('track')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'track'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Track Grievance Status</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigateTab?.('help-support')}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer flex items-center gap-1.5 ml-auto"
          >
            <span>General Help & Support</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* TAB 1: LODGE GRIEVANCE */}
      {activeTab === 'lodge' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-600" />
                <span>Formal Grievance Submission</span>
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Every grievance is assigned a permanent Reference ID (GRV-VC-XXXXX) for audit and tracking.
              </p>
            </div>

            {createdGrievance ? (
              <div className="p-6 rounded-3xl bg-indigo-50 border-2 border-indigo-200 space-y-4 animate-in zoom-in-95">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-2xl shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-indigo-800">
                      Grievance Lodged Successfully
                    </span>
                    <h3 className="font-display font-extrabold text-xl text-indigo-950">
                      {createdGrievance.grievanceNumber}
                    </h3>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-indigo-100 text-xs space-y-2">
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Student:</span>
                    <span className="font-bold text-slate-800">{createdGrievance.studentName}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Category:</span>
                    <span className="font-bold text-indigo-700">{createdGrievance.category}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Subject:</span>
                    <span className="font-bold text-slate-800">{createdGrievance.subject}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Status:</span>
                    <span className="font-black px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                      ● {createdGrievance.status}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-indigo-950 leading-relaxed">
                  Your grievance reference number is <strong>{createdGrievance.grievanceNumber}</strong>. The Grievance Officer will investigate and post formal findings within 48 to 72 hours.
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery(createdGrievance.grievanceNumber);
                      setSearchedGrievance(createdGrievance);
                      setActiveTab('track');
                    }}
                    className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow-xs cursor-pointer transition-all"
                  >
                    Track in Grievance Portal
                  </button>
                  <button
                    type="button"
                    onClick={() => setCreatedGrievance(null)}
                    className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs cursor-pointer"
                  >
                    Lodge Another Grievance
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleLodgeGrievance} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Student / Complainant Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="Full Name"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 bg-slate-50/50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Mobile Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="10-digit mobile number"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 bg-slate-50/50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Grievance Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as GrievanceCategory)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 bg-white"
                    >
                      {GRIEVANCE_CATEGORIES.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">
                    Subject / Concern Summary <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Specific grievance subject (e.g. Class 5 Mathematics Q.14 wrong formula)"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 bg-slate-50/50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">
                    Detailed Grievance Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="State the facts clearly, citing page/chapter or transaction details..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 bg-slate-50/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 hover:from-black hover:to-indigo-950 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>{isSubmitting ? 'Registering Grievance...' : 'Lodge Official Grievance'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Grievance Officer & Statutory Info */}
          <div className="space-y-4">
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs space-y-4">
              <h3 className="font-display font-bold text-sm text-slate-900 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-indigo-600" />
                <span>Grievance Officer Information</span>
              </h3>

              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Designated Officer</span>
                  <p className="font-extrabold text-slate-900">Academic Review Council</p>
                  <p className="text-[11px] text-slate-500">Vacation Champions / mystudyzone.in</p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Statutory Email</span>
                  <a href="mailto:ronakvarade2022@gmail.com" className="font-bold text-indigo-700 hover:underline">
                    ronakvarade2022@gmail.com
                  </a>
                </div>

                <div className="p-3 rounded-2xl bg-indigo-50/60 border border-indigo-200 space-y-1">
                  <span className="text-[10px] font-black uppercase text-indigo-900 block">SLA Commitment</span>
                  <p className="text-[11px] text-indigo-950 leading-relaxed">
                    Acknowledgment within <strong>24 hours</strong>. Investigation and final redressal within <strong>48 to 72 hours</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-100 to-amber-50 rounded-3xl p-5 border border-slate-200 text-xs space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                Resolution Timeline
              </span>
              <div className="space-y-1.5 pt-1 text-[11px] text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span><strong>1. Submitted:</strong> Logged with Reference ID.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  <span><strong>2. Under Review:</strong> Verified with syllabus panel.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span><strong>3. In Progress:</strong> Action initiated.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span><strong>4. Resolved / Closed:</strong> Formal reply posted.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: TRACK GRIEVANCE */}
      {activeTab === 'track' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
            <div>
              <h2 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2">
                <Search className="w-5 h-5 text-indigo-600" />
                <span>Track Grievance Status by Reference ID</span>
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Enter your Grievance Reference ID (e.g. GRV-VC-82910) to inspect real-time progress.
              </p>
            </div>

            <form onSubmit={handleSearchGrievance} className="flex flex-col sm:flex-row gap-2 max-w-xl">
              <input
                type="text"
                required
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter Reference ID (e.g. GRV-VC-82910)"
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-xs text-slate-800 font-mono focus:outline-hidden focus:ring-2 focus:ring-indigo-500 bg-slate-50/50 uppercase"
              />
              <button
                type="submit"
                disabled={isSearching}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-black text-white font-extrabold text-xs shadow-xs transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Search className="w-3.5 h-3.5" />
                <span>{isSearching ? 'Tracking...' : 'Track Grievance'}</span>
              </button>
            </form>

            {searchError && (
              <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{searchError}</span>
              </div>
            )}

            {searchedGrievance && (
              <div className="p-6 rounded-3xl bg-slate-50 border-2 border-indigo-300 space-y-4 animate-in fade-in">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Grievance Record
                    </span>
                    <h3 className="font-display font-extrabold text-lg text-slate-900">
                      {searchedGrievance.grievanceNumber}
                    </h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-black uppercase border ${getStatusBadge(searchedGrievance.status)}`}>
                    ● {searchedGrievance.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Category</span>
                    <span className="font-bold text-indigo-900 block mt-0.5">{searchedGrievance.category}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Lodged On</span>
                    <span className="font-bold text-slate-700 block mt-0.5">
                      {new Date(searchedGrievance.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Complainant</span>
                    <span className="font-bold text-slate-700 block mt-0.5">{searchedGrievance.studentName}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 text-xs">
                  <h4 className="font-extrabold text-slate-800">Subject: {searchedGrievance.subject}</h4>
                  <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">{searchedGrievance.description}</p>
                </div>

                {searchedGrievance.adminResolution ? (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 space-y-1.5 text-xs">
                    <span className="font-black text-[11px] uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Formal Council Resolution</span>
                    </span>
                    <p className="text-emerald-950 font-medium whitespace-pre-wrap leading-relaxed">
                      {searchedGrievance.adminResolution}
                    </p>
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 shrink-0 text-amber-600" />
                    <span>This grievance is actively under review. Formal resolution will be updated here.</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Student's recent grievances */}
          {currentStudent && (
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-base text-slate-900">
                  My Lodged Grievances ({myGrievances.length})
                </h3>
                <button
                  type="button"
                  onClick={loadMyGrievances}
                  className="text-xs font-bold text-indigo-700 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Refresh</span>
                </button>
              </div>

              {loadingList ? (
                <div className="p-6 text-center text-xs text-slate-500">Loading grievances...</div>
              ) : myGrievances.length === 0 ? (
                <div className="p-6 text-center text-xs text-slate-500 bg-slate-50 rounded-2xl border border-slate-200">
                  No grievances lodged by your account.
                </div>
              ) : (
                <div className="space-y-2.5">
                  {myGrievances.map(g => (
                    <div
                      key={g.id}
                      onClick={() => {
                        setSearchedGrievance(g);
                        setSearchQuery(g.grievanceNumber);
                      }}
                      className="p-3.5 rounded-2xl bg-slate-50 hover:bg-indigo-50/50 border border-slate-200 hover:border-indigo-300 transition-all cursor-pointer flex flex-wrap items-center justify-between gap-3 text-xs"
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-extrabold text-indigo-950">{g.grievanceNumber}</span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-700">
                            {g.category}
                          </span>
                        </div>
                        <p className="font-bold text-slate-800">{g.subject}</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase border ${getStatusBadge(g.status)}`}>
                          ● {g.status}
                        </span>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
