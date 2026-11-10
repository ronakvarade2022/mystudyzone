import React, { useState, useEffect } from 'react';
import { 
  LifeBuoy, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  MessageSquare, 
  FileText, 
  Send, 
  RefreshCw, 
  Check, 
  X, 
  ChevronRight, 
  ShieldCheck, 
  HelpCircle, 
  Plus, 
  Trash2,
  ExternalLink
} from 'lucide-react';
import { 
  SupportTicket, 
  GrievanceRecord, 
  QuestionReport, 
  FaqItem 
} from '../types/support';
import { 
  getSupportTickets, 
  updateSupportTicketStatus,
  getGrievances,
  updateGrievanceStatus,
  getQuestionReports,
  updateQuestionReportStatus,
  getSiteFaqs,
  saveSiteFaq,
  deleteSiteFaq
} from '../services/supportService';

export const AdminSupportPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tickets' | 'grievances' | 'reports' | 'faqs'>('tickets');

  // 1. Tickets State
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null);
  const [ticketReplyText, setTicketReplyText] = useState('');
  const [ticketStatusSelect, setTicketStatusSelect] = useState<SupportTicket['status']>('IN_PROGRESS');
  const [ticketFilter, setTicketFilter] = useState<string>('ALL');
  const [ticketSearch, setTicketSearch] = useState<string>('');

  // 2. Grievances State
  const [grievances, setGrievances] = useState<GrievanceRecord[]>([]);
  const [selectedGrievance, setSelectedGrievance] = useState<GrievanceRecord | null>(null);
  const [grievanceResolutionText, setGrievanceResolutionText] = useState('');
  const [grievanceStatusSelect, setGrievanceStatusSelect] = useState<GrievanceRecord['status']>('In Progress');
  const [grievanceFilter, setGrievanceFilter] = useState<string>('ALL');

  // 3. Question Reports State
  const [reports, setReports] = useState<QuestionReport[]>([]);
  const [selectedReport, setSelectedReport] = useState<QuestionReport | null>(null);
  const [reportNotes, setReportNotes] = useState('');
  const [reportStatusSelect, setReportStatusSelect] = useState<QuestionReport['status']>('RESOLVED');

  // 4. FAQs State
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [editingFaq, setEditingFaq] = useState<FaqItem | null>(null);
  const [isAddingFaq, setIsAddingFaq] = useState(false);
  const [faqQuestion, setFaqQuestion] = useState('');
  const [faqAnswer, setFaqAnswer] = useState('');
  const [faqCategory, setFaqCategory] = useState('Plans & Pricing');

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = async () => {
    setIsLoading(true);
    try {
      const [tList, gList, rList, fList] = await Promise.all([
        getSupportTickets(),
        getGrievances(),
        getQuestionReports(),
        getSiteFaqs()
      ]);
      setTickets(tList);
      setGrievances(gList);
      setReports(rList);
      setFaqs(fList);
    } catch (err) {
      console.warn('Failed to load support data', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateTicket = async () => {
    if (!selectedTicket) return;
    await updateSupportTicketStatus(selectedTicket.id, ticketStatusSelect, ticketReplyText);
    alert('Ticket updated successfully.');
    setSelectedTicket(null);
    setTicketReplyText('');
    loadAllData();
  };

  const handleUpdateGrievance = async () => {
    if (!selectedGrievance) return;
    await updateGrievanceStatus(selectedGrievance.id, grievanceStatusSelect, grievanceResolutionText);
    alert('Grievance updated successfully.');
    setSelectedGrievance(null);
    setGrievanceResolutionText('');
    loadAllData();
  };

  const handleUpdateReport = async () => {
    if (!selectedReport) return;
    await updateQuestionReportStatus(selectedReport.id, reportStatusSelect, reportNotes);
    alert('Report status updated.');
    setSelectedReport(null);
    setReportNotes('');
    loadAllData();
  };

  const handleSaveFaq = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!faqQuestion.trim() || !faqAnswer.trim()) return;
    const newFaq: FaqItem = {
      id: editingFaq?.id || `faq-${Date.now()}`,
      category: faqCategory,
      question: faqQuestion.trim(),
      answer: faqAnswer.trim()
    };
    await saveSiteFaq(newFaq);
    setIsAddingFaq(false);
    setEditingFaq(null);
    setFaqQuestion('');
    setFaqAnswer('');
    loadAllData();
  };

  const handleDeleteFaq = async (id: string) => {
    if (!confirm('Are you sure you want to delete this FAQ?')) return;
    await deleteSiteFaq(id);
    loadAllData();
  };

  // Filtered lists
  const filteredTickets = tickets.filter(t => {
    const matchesStatus = ticketFilter === 'ALL' || t.status === ticketFilter;
    const q = ticketSearch.toLowerCase().trim();
    if (!q) return matchesStatus;
    const matchesSearch = 
      t.ticketNumber.toLowerCase().includes(q) || 
      t.studentName.toLowerCase().includes(q) || 
      t.email.toLowerCase().includes(q) ||
      t.subject.toLowerCase().includes(q);
    return matchesStatus && matchesSearch;
  });

  const filteredGrievances = grievances.filter(g => {
    return grievanceFilter === 'ALL' || g.status === grievanceFilter;
  });

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 text-white shadow-lg flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
            Administrative Desk
          </span>
          <h2 className="text-xl sm:text-2xl font-display font-extrabold">
            Student Support & Grievance Control Centre
          </h2>
          <p className="text-xs text-slate-300 font-medium mt-0.5">
            Manage inquiries, dispute resolutions, question corrections, and public FAQs.
          </p>
        </div>

        <button
          type="button"
          onClick={loadAllData}
          disabled={isLoading}
          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
          <span>Refresh Records</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
        <button
          type="button"
          onClick={() => setActiveTab('tickets')}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'tickets'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'text-slate-700 hover:bg-amber-50'
          }`}
        >
          <LifeBuoy className="w-3.5 h-3.5" />
          <span>Support Tickets ({tickets.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('grievances')}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'grievances'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'text-slate-700 hover:bg-amber-50'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Grievances ({grievances.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('reports')}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'reports'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'text-slate-700 hover:bg-amber-50'
          }`}
        >
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Question Reports ({reports.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('faqs')}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'faqs'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'text-slate-700 hover:bg-amber-50'
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Manage FAQs ({faqs.length})</span>
        </button>
      </div>

      {/* 1. SUPPORT TICKETS TAB */}
      {activeTab === 'tickets' && (
        <div className="space-y-4">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200">
            <div className="flex-1 w-full sm:max-w-xs relative">
              <input
                type="text"
                value={ticketSearch}
                onChange={(e) => setTicketSearch(e.target.value)}
                placeholder="Search ticket #, name, or email..."
                className="w-full px-3.5 py-2 pl-9 rounded-xl border border-slate-200 text-xs text-slate-800"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <span className="text-xs font-bold text-slate-500">Status:</span>
              <select
                value={ticketFilter}
                onChange={(e) => setTicketFilter(e.target.value)}
                className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-white text-slate-800"
              >
                <option value="ALL">All Statuses</option>
                <option value="OPEN">Open</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="RESOLVED">Resolved</option>
                <option value="CLOSED">Closed</option>
              </select>
            </div>
          </div>

          {/* Tickets Table / List */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
            {filteredTickets.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-500">
                No tickets matching current filters.
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {filteredTickets.map(ticket => (
                  <div
                    key={ticket.id}
                    onClick={() => {
                      setSelectedTicket(ticket);
                      setTicketStatusSelect(ticket.status);
                      setTicketReplyText(ticket.adminResponse || '');
                    }}
                    className="p-4 hover:bg-amber-50/50 transition-colors cursor-pointer flex flex-wrap items-center justify-between gap-3 text-xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-black text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                          {ticket.ticketNumber}
                        </span>
                        <span className="font-bold text-slate-800">{ticket.studentName}</span>
                        <span className="text-slate-400 font-mono text-[11px]">&lt;{ticket.email}&gt;</span>
                      </div>
                      <p className="font-extrabold text-slate-900">{ticket.subject}</p>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{ticket.description}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-700">
                        {ticket.category}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                        ticket.status === 'RESOLVED' || ticket.status === 'CLOSED'
                          ? 'bg-emerald-100 text-emerald-800'
                          : ticket.status === 'IN_PROGRESS'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        ● {ticket.status}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Ticket Detail & Reply Modal */}
          {selectedTicket && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
              <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border-2 border-amber-300 p-6 space-y-4 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-400">
                      Ticket Detail
                    </span>
                    <h3 className="font-display font-extrabold text-lg text-slate-900">
                      {selectedTicket.ticketNumber}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedTicket(null)}
                    className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Student:</span>
                    <span className="font-bold text-slate-800">{selectedTicket.studentName} ({selectedTicket.email})</span>
                  </div>
                  {selectedTicket.mobile && (
                    <div className="flex justify-between">
                      <span className="text-slate-500">Mobile:</span>
                      <span className="font-bold text-slate-800">{selectedTicket.mobile}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-slate-500">Category:</span>
                    <span className="font-bold text-amber-800">{selectedTicket.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Date Logged:</span>
                    <span className="font-bold text-slate-700">{new Date(selectedTicket.createdAt).toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs">
                  <h4 className="font-bold text-slate-900">Subject: {selectedTicket.subject}</h4>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 whitespace-pre-wrap leading-relaxed">
                    {selectedTicket.description}
                  </div>
                </div>

                {selectedTicket.screenshotUrl && (
                  <div className="space-y-1 text-xs">
                    <span className="font-bold text-slate-700">Attached Screenshot:</span>
                    <img
                      src={selectedTicket.screenshotUrl}
                      alt="Attachment"
                      className="max-h-56 rounded-xl border border-slate-300 object-contain"
                    />
                  </div>
                )}

                {/* Status and Reply Form */}
                <div className="space-y-3 pt-2 border-t border-slate-100 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-700">Update Status:</span>
                    <select
                      value={ticketStatusSelect}
                      onChange={(e) => setTicketStatusSelect(e.target.value as any)}
                      className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white font-bold text-slate-800"
                    >
                      <option value="OPEN">Open</option>
                      <option value="IN_PROGRESS">In Progress</option>
                      <option value="RESOLVED">Resolved</option>
                      <option value="CLOSED">Closed</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Official Admin Response (Visible to student):</label>
                    <textarea
                      rows={3}
                      value={ticketReplyText}
                      onChange={(e) => setTicketReplyText(e.target.value)}
                      placeholder="Type response to student..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedTicket(null)}
                      className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleUpdateTicket}
                      className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs shadow-xs cursor-pointer"
                    >
                      Save Ticket Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 2. GRIEVANCES TAB */}
      {activeTab === 'grievances' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200">
            <span className="text-xs font-bold text-slate-600">
              Total Grievances Registered: {grievances.length}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500">Filter Status:</span>
              <select
                value={grievanceFilter}
                onChange={(e) => setGrievanceFilter(e.target.value)}
                className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-white text-slate-800"
              >
                <option value="ALL">All Statuses</option>
                <option value="Submitted">Submitted</option>
                <option value="Under Review">Under Review</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
            {filteredGrievances.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-500">
                No grievances registered under this filter.
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {filteredGrievances.map(grv => (
                  <div
                    key={grv.id}
                    onClick={() => {
                      setSelectedGrievance(grv);
                      setGrievanceStatusSelect(grv.status);
                      setGrievanceResolutionText(grv.adminResolution || '');
                    }}
                    className="p-4 hover:bg-indigo-50/40 transition-colors cursor-pointer flex flex-wrap items-center justify-between gap-3 text-xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-black text-indigo-900 bg-indigo-100 px-2 py-0.5 rounded">
                          {grv.grievanceNumber}
                        </span>
                        <span className="font-bold text-slate-800">{grv.studentName}</span>
                        <span className="text-slate-400 font-mono text-[11px]">&lt;{grv.email}&gt;</span>
                      </div>
                      <p className="font-extrabold text-slate-900">{grv.subject}</p>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{grv.description}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-700">
                        {grv.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-purple-100 text-purple-900">
                        ● {grv.status}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Grievance Resolution Modal */}
          {selectedGrievance && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
              <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border-2 border-indigo-300 p-6 space-y-4 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-400">
                      Grievance Review Desk
                    </span>
                    <h3 className="font-display font-extrabold text-lg text-slate-900">
                      {selectedGrievance.grievanceNumber}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedGrievance(null)}
                    className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Complainant:</span>
                    <span className="font-bold text-slate-800">{selectedGrievance.studentName} ({selectedGrievance.email})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Category:</span>
                    <span className="font-bold text-indigo-800">{selectedGrievance.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Date Logged:</span>
                    <span className="font-bold text-slate-700">{new Date(selectedGrievance.createdAt).toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs">
                  <h4 className="font-bold text-slate-900">Grievance Subject: {selectedGrievance.subject}</h4>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 whitespace-pre-wrap leading-relaxed">
                    {selectedGrievance.description}
                  </div>
                </div>

                {/* Status and Council Resolution Form */}
                <div className="space-y-3 pt-2 border-t border-slate-100 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-700">Update Lifecycle Status:</span>
                    <select
                      value={grievanceStatusSelect}
                      onChange={(e) => setGrievanceStatusSelect(e.target.value as any)}
                      className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white font-bold text-slate-800"
                    >
                      <option value="Submitted">Submitted</option>
                      <option value="Under Review">Under Review</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Formal Council Resolution (Published to student):</label>
                    <textarea
                      rows={3}
                      value={grievanceResolutionText}
                      onChange={(e) => setGrievanceResolutionText(e.target.value)}
                      placeholder="Detail findings, action taken, and resolution..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedGrievance(null)}
                      className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleUpdateGrievance}
                      className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow-xs cursor-pointer"
                    >
                      Save Council Resolution
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 3. QUESTION REPORTS TAB */}
      {activeTab === 'reports' && (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
            <span>Inline Student Question Reports: <strong>{reports.length} total</strong></span>
            <span className="text-[11px] text-amber-800 font-bold">Academic Verification Desk</span>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
            {reports.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-500">
                No question inaccuracies reported yet.
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {reports.map(rep => (
                  <div
                    key={rep.id}
                    onClick={() => {
                      setSelectedReport(rep);
                      setReportStatusSelect(rep.status);
                      setReportNotes(rep.adminNotes || '');
                    }}
                    className="p-4 hover:bg-amber-50/40 transition-colors cursor-pointer flex flex-wrap items-center justify-between gap-3 text-xs"
                  >
                    <div className="space-y-1 max-w-xl">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-black text-rose-800 bg-rose-100 px-2 py-0.5 rounded">
                          {rep.reportNumber}
                        </span>
                        <span className="font-bold text-slate-900">{rep.subject} ({rep.classLevel})</span>
                        <span className="font-mono text-slate-400 text-[11px]">QID: {rep.questionId}</span>
                      </div>
                      <p className="font-bold text-slate-800 italic">"{rep.questionText}"</p>
                      <p className="text-[11px] text-slate-600"><strong>Report:</strong> {rep.details}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900">
                        {rep.issueType}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-slate-100 text-slate-800">
                        ● {rep.status}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Report Detail Modal */}
          {selectedReport && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
              <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border-2 border-amber-300 p-6 space-y-4 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-400">
                      Question Verification
                    </span>
                    <h3 className="font-display font-extrabold text-lg text-slate-900">
                      {selectedReport.reportNumber} (QID: {selectedReport.questionId})
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedReport(null)}
                    className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 space-y-1.5 text-xs">
                  <p className="font-bold text-slate-800">Question Text:</p>
                  <p className="text-slate-700 italic">"{selectedReport.questionText}"</p>
                  {selectedReport.correctAnswer && (
                    <p className="text-emerald-800 pt-1 font-bold">
                      Published Correct Answer: {selectedReport.correctAnswer}
                    </p>
                  )}
                  {selectedReport.selectedAnswer && (
                    <p className="text-slate-600 font-bold">
                      Student Choice: {selectedReport.selectedAnswer}
                    </p>
                  )}
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 space-y-1 text-xs">
                  <p className="font-black text-amber-900">Student Remarks ({selectedReport.issueType}):</p>
                  <p className="text-slate-800 leading-relaxed">{selectedReport.details}</p>
                  <p className="text-[10px] text-slate-500 pt-1">
                    Reported by {selectedReport.studentName} ({selectedReport.studentEmail})
                  </p>
                </div>

                <div className="space-y-3 pt-2 border-t border-slate-100 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-700">Verification Status:</span>
                    <select
                      value={reportStatusSelect}
                      onChange={(e) => setReportStatusSelect(e.target.value as any)}
                      className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white font-bold text-slate-800"
                    >
                      <option value="PENDING_REVIEW">Pending Review</option>
                      <option value="VERIFIED_CORRECT">Verified Correct (No Change)</option>
                      <option value="NEEDS_CORRECTION">Needs Correction</option>
                      <option value="RESOLVED">Resolved in Question Bank</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Academic Notes / Textbook Citation:</label>
                    <textarea
                      rows={2}
                      value={reportNotes}
                      onChange={(e) => setReportNotes(e.target.value)}
                      placeholder="Add reference notes..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedReport(null)}
                      className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleUpdateReport}
                      className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs shadow-xs cursor-pointer"
                    >
                      Update Verification Record
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 4. FAQS MANAGEMENT TAB */}
      {activeTab === 'faqs' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200">
            <div>
              <h3 className="font-display font-bold text-sm text-slate-900">
                Public FAQ Knowledge Base ({faqs.length})
              </h3>
              <p className="text-[11px] text-slate-500">
                These FAQs power the student FAQ page and the offline fallback of the AI Assistant.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setEditingFaq(null);
                setFaqQuestion('');
                setFaqAnswer('');
                setFaqCategory('Plans & Pricing');
                setIsAddingFaq(true);
              }}
              className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs shadow-xs cursor-pointer flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Add New FAQ</span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {faqs.map(faq => (
              <div
                key={faq.id}
                className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-2 text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-100 text-amber-900">
                    {faq.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setEditingFaq(faq);
                        setFaqQuestion(faq.question);
                        setFaqAnswer(faq.answer);
                        setFaqCategory(faq.category);
                        setIsAddingFaq(true);
                      }}
                      className="text-amber-800 hover:text-amber-950 font-bold cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteFaq(faq.id)}
                      className="text-red-600 hover:text-red-700 font-bold cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <h4 className="font-extrabold text-sm text-slate-900">{faq.question}</h4>
                <p className="text-slate-600 whitespace-pre-wrap leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Add / Edit FAQ Modal */}
          {isAddingFaq && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
              <form
                onSubmit={handleSaveFaq}
                className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border-2 border-amber-300 p-6 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="font-display font-extrabold text-base text-slate-900">
                    {editingFaq ? 'Edit FAQ Item' : 'Add New FAQ Item'}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setIsAddingFaq(false)}
                    className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-1 text-xs">
                  <label className="font-bold text-slate-700">Category</label>
                  <select
                    value={faqCategory}
                    onChange={(e) => setFaqCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200"
                  >
                    <option value="Plans & Pricing">Plans & Pricing</option>
                    <option value="Payment & Activation">Payment & Activation</option>
                    <option value="Learning & Quizzes">Learning & Quizzes</option>
                    <option value="Audio Stories & Media">Audio Stories & Media</option>
                    <option value="Scholarship Exam Prep">Scholarship Exam Prep</option>
                    <option value="Help & Complaints">Help & Complaints</option>
                    <option value="Account & Safety">Account & Safety</option>
                  </select>
                </div>

                <div className="space-y-1 text-xs">
                  <label className="font-bold text-slate-700">Question</label>
                  <input
                    type="text"
                    required
                    value={faqQuestion}
                    onChange={(e) => setFaqQuestion(e.target.value)}
                    placeholder="e.g. How does the 90-day validity work?"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200"
                  />
                </div>

                <div className="space-y-1 text-xs">
                  <label className="font-bold text-slate-700">Answer</label>
                  <textarea
                    required
                    rows={4}
                    value={faqAnswer}
                    onChange={(e) => setFaqAnswer(e.target.value)}
                    placeholder="Type the comprehensive answer..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-200"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsAddingFaq(false)}
                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs shadow-xs cursor-pointer"
                  >
                    Save FAQ
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
