import React, { useState, useEffect } from 'react';
import { 
  HelpCircle, 
  LifeBuoy, 
  Send, 
  Search, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  FileText, 
  Paperclip, 
  X, 
  ArrowRight,
  ShieldCheck,
  Phone,
  Mail,
  ChevronRight,
  RefreshCw,
  ExternalLink
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { 
  SupportCategory, 
  SupportTicket 
} from '../types/support';
import { 
  createSupportTicket, 
  getSupportTickets, 
  getSupportTicketByNumber 
} from '../services/supportService';

const PROBLEM_CATEGORIES: SupportCategory[] = [
  'Registration & Login',
  'Password Reset',
  'Payment & Subscription',
  'Educational Material Access',
  'Notes & Study Material Downloads',
  'Technical Errors',
  'Incorrect Questions or Answers',
  'Website Navigation',
  'General Queries'
];

interface HelpSupportViewProps {
  onNavigateTab?: (tab: string) => void;
  onOpenMembership?: (plan?: 'basic' | 'premium') => void;
}

export const HelpSupportView: React.FC<HelpSupportViewProps> = ({ 
  onNavigateTab,
  onOpenMembership 
}) => {
  const { currentStudent } = useApp();

  const [activeSubTab, setActiveSubTab] = useState<'create' | 'track' | 'faqs'>('create');

  // Form State
  const [studentName, setStudentName] = useState(currentStudent?.name || '');
  const [email, setEmail] = useState(currentStudent?.email || '');
  const [mobile, setMobile] = useState(currentStudent?.mobile || '');
  const [category, setCategory] = useState<SupportCategory>('Payment & Subscription');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [screenshotData, setScreenshotData] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdTicket, setCreatedTicket] = useState<SupportTicket | null>(null);

  // Tracking State
  const [searchTicketQuery, setSearchTicketQuery] = useState('');
  const [searchedTicket, setSearchedTicket] = useState<SupportTicket | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState('');

  // Student's recent tickets
  const [myTickets, setMyTickets] = useState<SupportTicket[]>([]);
  const [loadingTickets, setLoadingTickets] = useState(false);

  useEffect(() => {
    if (currentStudent?.id) {
      loadMyTickets();
    }
  }, [currentStudent?.id]);

  const loadMyTickets = async () => {
    setLoadingTickets(true);
    try {
      const tickets = await getSupportTickets(currentStudent?.id);
      setMyTickets(tickets);
    } catch (err) {
      console.warn('Failed to load tickets', err);
    } finally {
      setLoadingTickets(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert('Screenshot size must be under 2MB.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setScreenshotData(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmitTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !email.trim() || !subject.trim() || !description.trim()) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      const ticket = await createSupportTicket({
        studentId: currentStudent?.id || 'guest',
        studentName: studentName.trim(),
        email: email.trim(),
        mobile: mobile.trim(),
        category,
        subject: subject.trim(),
        description: description.trim(),
        screenshotUrl: screenshotData || undefined
      });

      setCreatedTicket(ticket);
      // Reset form fields
      setSubject('');
      setDescription('');
      setScreenshotData('');
      loadMyTickets();
    } catch (err: any) {
      console.error('Error submitting ticket:', err);
      alert('Failed to submit ticket. Please check connection and retry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSearchTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchTicketQuery.trim();
    if (!query) return;

    setIsSearching(true);
    setSearchError('');
    setSearchedTicket(null);

    try {
      const result = await getSupportTicketByNumber(query);
      if (result) {
        setSearchedTicket(result);
      } else {
        setSearchError(`No support ticket found matching ID "${query}". Please check your Ticket ID.`);
      }
    } catch (err) {
      setSearchError('Error fetching ticket status. Please retry.');
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Top Hero Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-amber-100 text-xs font-bold uppercase tracking-wider">
            <LifeBuoy className="w-3.5 h-3.5 text-amber-200" />
            <span>Official Student Help & Support Centre</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight leading-tight">
            How can we help your learning journey today?
          </h1>
          <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed font-medium">
            Submit a support ticket for rapid assistance with accounts, password resets, Razorpay payments, notes, or quiz questions. Every inquiry receives a trackable ID.
          </p>
        </div>

        {/* Action Tabs Bar */}
        <div className="mt-6 pt-4 border-t border-white/20 flex flex-wrap items-center gap-2 relative z-10">
          <button
            type="button"
            onClick={() => setActiveSubTab('create')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'create'
                ? 'bg-white text-amber-900 shadow-md'
                : 'bg-black/20 hover:bg-black/30 text-white'
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit New Ticket</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('track')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'track'
                ? 'bg-white text-amber-900 shadow-md'
                : 'bg-black/20 hover:bg-black/30 text-white'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Track Ticket Status</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigateTab?.('grievance')}
            className="px-4 py-2 rounded-xl text-xs font-extrabold bg-black/20 hover:bg-black/30 text-white transition-all cursor-pointer flex items-center gap-1.5"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
            <span>Grievance Redressal</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigateTab?.('terms')}
            className="px-4 py-2 rounded-xl text-xs font-extrabold bg-black/20 hover:bg-black/30 text-white transition-all cursor-pointer flex items-center gap-1.5 ml-auto hidden sm:flex"
          >
            <span>Terms & Policy</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* SUB-TAB 1: CREATE NEW TICKET */}
      {activeSubTab === 'create' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form (2 cols) */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-600" />
                <span>Submit Support Ticket</span>
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Our support team reviews tickets 7 days a week (Response within 24–48 hours).
              </p>
            </div>

            {createdTicket ? (
              <div className="p-6 rounded-3xl bg-emerald-50 border-2 border-emerald-300 space-y-4 animate-in zoom-in-95">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-2xl shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800">
                      Ticket Created Successfully!
                    </span>
                    <h3 className="font-display font-extrabold text-xl text-emerald-950">
                      {createdTicket.ticketNumber}
                    </h3>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-emerald-200 text-xs space-y-2">
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Student:</span>
                    <span className="font-bold text-slate-800">{createdTicket.studentName}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Email:</span>
                    <span className="font-bold text-slate-800">{createdTicket.email}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Category:</span>
                    <span className="font-bold text-amber-700">{createdTicket.category}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Subject:</span>
                    <span className="font-bold text-slate-800">{createdTicket.subject}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Initial Status:</span>
                    <span className="font-black px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                      ● {createdTicket.status}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-emerald-900 leading-relaxed">
                  Please save your ticket ID <strong>{createdTicket.ticketNumber}</strong>. You can switch to the <strong>Track Ticket Status</strong> tab anytime to inspect live admin responses.
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSearchTicketQuery(createdTicket.ticketNumber);
                      setSearchedTicket(createdTicket);
                      setActiveSubTab('track');
                    }}
                    className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-xs cursor-pointer transition-all"
                  >
                    View Status in Tracker
                  </button>
                  <button
                    type="button"
                    onClick={() => setCreatedTicket(null)}
                    className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitTicket} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Student Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Student Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="Enter student full name"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-slate-50/50"
                    />
                  </div>

                  {/* Registered Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Registered Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="student@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Mobile Number */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Mobile / WhatsApp Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="10-digit mobile number"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-slate-50/50"
                    />
                  </div>

                  {/* Problem Category */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Problem Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as SupportCategory)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                    >
                      {PROBLEM_CATEGORIES.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">
                    Subject / Summary <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Brief summary of the issue (e.g. ₹99 Payment captured but plan showing pending)"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-slate-50/50"
                  />
                </div>

                {/* Detailed Description */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">
                    Detailed Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Provide details: date, transaction ID (if payment issue), question topic, or error message..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-slate-50/50"
                  />
                </div>

                {/* Optional Screenshot Attachment */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Paperclip className="w-3.5 h-3.5 text-slate-400" />
                      <span>Optional Screenshot Attachment (Max 2MB)</span>
                    </span>
                    {screenshotData && (
                      <button
                        type="button"
                        onClick={() => setScreenshotData('')}
                        className="text-red-600 hover:text-red-700 text-[11px] font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                        <span>Remove Screenshot</span>
                      </button>
                    )}
                  </label>

                  {screenshotData ? (
                    <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-center gap-3">
                      <img
                        src={screenshotData}
                        alt="Screenshot Preview"
                        className="w-16 h-16 object-cover rounded-xl border border-slate-300"
                      />
                      <div className="text-xs text-slate-600">
                        <p className="font-bold text-slate-800">Screenshot Attached</p>
                        <p className="text-[11px] text-slate-500">Will be securely stored for admin review.</p>
                      </div>
                    </div>
                  ) : (
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-amber-100 file:text-amber-800 hover:file:bg-amber-200 cursor-pointer"
                      />
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-sm shadow-md shadow-orange-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>{isSubmitting ? 'Submitting Support Ticket...' : 'Submit Support Ticket'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Sidebar Info & Helplines (1 col) */}
          <div className="space-y-4">
            {/* Quick Contact Card */}
            <div className="bg-white rounded-3xl p-5 border border-amber-200/80 shadow-xs space-y-4">
              <h3 className="font-display font-bold text-sm text-slate-900 flex items-center gap-2">
                <LifeBuoy className="w-4 h-4 text-amber-600" />
                <span>Direct Support Channels</span>
              </h3>
              
              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Official Support Email</span>
                  <a 
                    href="mailto:support@mystudyzone.in" 
                    className="font-bold text-amber-900 hover:underline flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-600" />
                    <span>support@mystudyzone.in</span>
                  </a>
                  <p className="text-[10px] text-slate-500">Also CC: ronakvarade2022@gmail.com</p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Operating Hours</span>
                  <p className="font-bold text-slate-800">Monday to Saturday</p>
                  <p className="text-[10px] text-slate-500">9:00 AM – 7:00 PM IST</p>
                </div>

                <div className="p-3 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1">
                  <span className="text-[10px] font-black uppercase text-amber-900 block">Response Commitment</span>
                  <p className="text-[11px] text-slate-700 leading-normal">
                    Initial response within <strong>24 hours</strong>. Payment resolutions expedited within 4 to 12 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Subscription renewal reminder */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-5 border border-amber-200 space-y-2.5 text-xs">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-800">
                Official Plan Details
              </span>
              <h4 className="font-extrabold text-sm text-slate-900">
                Subscription Activations (₹49 & ₹99)
              </h4>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Both Standard (₹49) and Premium (₹99) activate for exactly <strong>90 Days</strong>. If you experience a payment delay, submit a ticket with your Razorpay Payment ID.
              </p>
              <button
                type="button"
                onClick={() => onOpenMembership?.('premium')}
                className="w-full py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs shadow-xs transition-all cursor-pointer text-center"
              >
                View Subscription Plans
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 2: TRACK TICKET STATUS */}
      {activeSubTab === 'track' && (
        <div className="space-y-6">
          {/* Tracker Search Box */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs space-y-4">
            <div>
              <h2 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2">
                <Search className="w-5 h-5 text-amber-600" />
                <span>Track Support Ticket by ID</span>
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Enter your unique ticket number (e.g., TKT-VC-12345) to view status, assigned officer, and responses.
              </p>
            </div>

            <form onSubmit={handleSearchTicket} className="flex flex-col sm:flex-row gap-2 max-w-xl">
              <input
                type="text"
                required
                value={searchTicketQuery}
                onChange={(e) => setSearchTicketQuery(e.target.value)}
                placeholder="Enter Ticket ID (e.g. TKT-VC-12345)"
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-xs text-slate-800 font-mono focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-slate-50/50 uppercase"
              />
              <button
                type="submit"
                disabled={isSearching}
                className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs shadow-xs transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Search className="w-3.5 h-3.5" />
                <span>{isSearching ? 'Checking...' : 'Check Status'}</span>
              </button>
            </form>

            {searchError && (
              <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{searchError}</span>
              </div>
            )}

            {/* Searched Ticket Result Card */}
            {searchedTicket && (
              <div className="p-6 rounded-3xl bg-slate-50 border-2 border-amber-300 space-y-4 animate-in fade-in">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Ticket Record
                    </span>
                    <h3 className="font-display font-extrabold text-lg text-slate-900">
                      {searchedTicket.ticketNumber}
                    </h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-black uppercase ${
                    searchedTicket.status === 'RESOLVED' || searchedTicket.status === 'CLOSED'
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : searchedTicket.status === 'IN_PROGRESS'
                      ? 'bg-blue-100 text-blue-800 border border-blue-300'
                      : 'bg-amber-100 text-amber-800 border border-amber-300'
                  }`}>
                    ● {searchedTicket.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Category</span>
                    <span className="font-bold text-amber-900 block mt-0.5">{searchedTicket.category}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Submitted At</span>
                    <span className="font-bold text-slate-700 block mt-0.5">
                      {new Date(searchedTicket.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Priority</span>
                    <span className="font-black text-xs text-orange-700 block mt-0.5">{searchedTicket.priority}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 text-xs">
                  <h4 className="font-extrabold text-slate-800">Subject: {searchedTicket.subject}</h4>
                  <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">{searchedTicket.description}</p>
                </div>

                {searchedTicket.adminResponse ? (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 space-y-1.5 text-xs">
                    <span className="font-black text-[11px] uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Official Support Response</span>
                    </span>
                    <p className="text-emerald-950 font-medium whitespace-pre-wrap leading-relaxed">
                      {searchedTicket.adminResponse}
                    </p>
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 shrink-0 text-amber-600" />
                    <span>Your ticket is currently queued with our support team. Expect an update within 24 hours.</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Student's Recent Tickets List */}
          {currentStudent && (
            <div className="bg-white rounded-3xl p-6 border border-amber-200/80 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-base text-slate-900">
                  My Recent Tickets ({myTickets.length})
                </h3>
                <button
                  type="button"
                  onClick={loadMyTickets}
                  className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Refresh</span>
                </button>
              </div>

              {loadingTickets ? (
                <div className="p-6 text-center text-xs text-slate-500">Loading your tickets...</div>
              ) : myTickets.length === 0 ? (
                <div className="p-6 text-center text-xs text-slate-500 bg-slate-50 rounded-2xl border border-slate-200">
                  You have not submitted any support tickets yet.
                </div>
              ) : (
                <div className="space-y-2.5">
                  {myTickets.map(t => (
                    <div
                      key={t.id}
                      onClick={() => {
                        setSearchedTicket(t);
                        setSearchTicketQuery(t.ticketNumber);
                      }}
                      className="p-3.5 rounded-2xl bg-slate-50 hover:bg-amber-50/50 border border-slate-200 hover:border-amber-300 transition-all cursor-pointer flex flex-wrap items-center justify-between gap-3 text-xs"
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-extrabold text-amber-950">{t.ticketNumber}</span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-700">
                            {t.category}
                          </span>
                        </div>
                        <p className="font-bold text-slate-800">{t.subject}</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                          t.status === 'RESOLVED'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          ● {t.status}
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
