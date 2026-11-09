import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Wallet, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  AlertCircle, 
  TrendingUp, 
  Sliders, 
  ShieldCheck, 
  RefreshCw, 
  School, 
  GraduationCap, 
  Award, 
  ArrowUpRight,
  IndianRupee,
  Sparkles,
  Search,
  ExternalLink
} from 'lucide-react';
import { referralService, AdminStatsResponse } from '../services/referralService';
import { TeacherCertificateModal } from './TeacherCertificateModal';

export const AdminReferralPanel: React.FC = () => {
  const [data, setData] = useState<AdminStatsResponse['stats'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [activeSubTab, setActiveSubTab] = useState<'teachers' | 'payouts' | 'config' | 'transactions'>('teachers');

  // Config Form
  const [budgetCap, setBudgetCap] = useState(50000);
  const [plan49Referrer, setPlan49Referrer] = useState(5);
  const [plan49Buyer, setPlan49Buyer] = useState(5);
  const [plan99Referrer, setPlan99Referrer] = useState(10);
  const [plan99Buyer, setPlan99Buyer] = useState(10);
  const [minPayout, setMinPayout] = useState(50);
  const [programEnabled, setProgramEnabled] = useState(true);
  const [configSaving, setConfigSaving] = useState(false);
  const [configFeedback, setConfigFeedback] = useState<string | null>(null);

  // Payout action
  const [payoutProcessingId, setPayoutProcessingId] = useState<string | null>(null);
  const [txnRefInput, setTxnRefInput] = useState('');

  // Selected teacher for certificate preview
  const [certTeacher, setCertTeacher] = useState<{ name: string; school: string; count: number } | null>(null);

  const fetchStats = async () => {
    try {
      setRefreshing(true);
      const res = await referralService.getAdminStats();
      if (res.success && res.stats) {
        setData(res.stats);
        setBudgetCap(res.stats.config.budgetCap);
        setPlan49Referrer(res.stats.config.plan49ReferrerReward);
        setPlan49Buyer(res.stats.config.plan49BuyerReward);
        setPlan99Referrer(res.stats.config.plan99ReferrerReward);
        setPlan99Buyer(res.stats.config.plan99BuyerReward);
        setMinPayout(res.stats.config.minPayoutAmount);
        setProgramEnabled(res.stats.config.programEnabled);
      }
    } catch (err) {
      console.error('Error fetching admin referral stats:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const handleTeacherAction = async (userId: string, status: 'VERIFIED' | 'REJECTED') => {
    try {
      await referralService.reviewTeacher(userId, status, status === 'VERIFIED' ? 'State educator credentials confirmed' : 'Insufficient institutional documentation');
      await fetchStats();
    } catch (err) {
      console.error(err);
    }
  };

  const handlePayoutAction = async (payoutId: string, action: 'APPROVE' | 'REJECT') => {
    setPayoutProcessingId(payoutId);
    try {
      await referralService.processPayout(
        payoutId, 
        action, 
        txnRefInput || `UPI-${Date.now().toString().slice(-6)}`,
        action === 'APPROVE' ? 'Bank transfer processed' : 'Rejected by administrator'
      );
      setTxnRefInput('');
      await fetchStats();
    } catch (err) {
      console.error(err);
    } finally {
      setPayoutProcessingId(null);
    }
  };

  const handleSaveConfig = async (e: React.FormEvent) => {
    e.preventDefault();
    setConfigSaving(true);
    setConfigFeedback(null);
    try {
      const res = await referralService.updateConfig({
        programEnabled,
        budgetCap,
        plan49ReferrerReward: plan49Referrer,
        plan49BuyerReward: plan49Buyer,
        plan99ReferrerReward: plan99Referrer,
        plan99BuyerReward: plan99Buyer,
        minPayoutAmount: minPayout
      });
      if (res.success) {
        setConfigFeedback('Configuration updated successfully!');
        setTimeout(() => setConfigFeedback(null), 3000);
        await fetchStats();
      }
    } catch (err: any) {
      setConfigFeedback(`Error saving config: ${err.message}`);
    } finally {
      setConfigSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* 1. HEADER & CONTROLS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 p-6 rounded-3xl text-white border border-amber-500/30">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LEARN • SHARE • GROW • EARN</span>
          </div>
          <h2 className="text-2xl font-black text-white">Referral & Rewards Management</h2>
          <p className="text-xs text-amber-200/80 mt-1">
            Student & Teacher Ambassadors, Teacher Verification Queue, Payout Disbursements, and Fraud Rules.
          </p>
        </div>

        <button
          onClick={fetchStats}
          disabled={refreshing}
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 transition-all cursor-pointer self-start sm:self-auto"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin' : ''}`} />
          <span>Refresh Ledger</span>
        </button>
      </div>

      {/* 2. 6 KEY KPI CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        {/* Total Ambassadors */}
        <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-sm">
          <div className="text-[11px] font-bold text-slate-500 uppercase">Total Ambassadors</div>
          <div className="text-2xl font-black text-slate-900 mt-1">
            {data?.totalAmbassadors ?? 0}
          </div>
          <div className="text-[10px] text-slate-500 mt-1">
            {data?.studentAmbassadors ?? 0} Stu • {data?.teacherAmbassadors ?? 0} Tch • {data?.diamondAmbassadors ?? 0} 💎
          </div>
        </div>

        {/* Paid Referrals */}
        <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-sm">
          <div className="text-[11px] font-bold text-slate-500 uppercase">Paid Referrals</div>
          <div className="text-2xl font-black text-orange-600 mt-1">
            {data?.totalPaidReferrals ?? 0}
          </div>
          <div className="text-[10px] text-emerald-600 font-semibold mt-1">
            Verified Paid Purchases
          </div>
        </div>

        {/* Total Earned Distributed */}
        <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-sm">
          <div className="text-[11px] font-bold text-slate-500 uppercase">Total Rewarded</div>
          <div className="text-2xl font-black text-emerald-600 mt-1">
            ₹{data?.totalEarnedDistributed ?? 0}
          </div>
          <div className="text-[10px] text-slate-400 mt-1">
            Cashback + Commissions
          </div>
        </div>

        {/* Total Withdrawn */}
        <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-sm">
          <div className="text-[11px] font-bold text-slate-500 uppercase">Total Paid Out</div>
          <div className="text-2xl font-black text-slate-900 mt-1">
            ₹{data?.totalWithdrawn ?? 0}
          </div>
          <div className="text-[10px] text-slate-400 mt-1">
            Via UPI & Bank Transfer
          </div>
        </div>

        {/* Pending Payouts */}
        <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-sm">
          <div className="text-[11px] font-bold text-slate-500 uppercase">Pending Payouts</div>
          <div className="text-2xl font-black text-amber-600 mt-1">
            {data?.pendingPayoutCount ?? 0}
          </div>
          <div className="text-[10px] text-amber-700 font-bold mt-1">
            ₹{data?.totalPendingPayoutAmount ?? 0} pending
          </div>
        </div>

        {/* Pending Teacher Verifications */}
        <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-sm">
          <div className="text-[11px] font-bold text-slate-500 uppercase">Teacher Queue</div>
          <div className="text-2xl font-black text-blue-600 mt-1">
            {data?.pendingTeacherCount ?? 0}
          </div>
          <div className="text-[10px] text-blue-600 font-semibold mt-1">
            Awaiting Verification
          </div>
        </div>
      </div>

      {/* 3. SUB NAVIGATION */}
      <div className="flex items-center space-x-2 border-b border-gray-200 pb-2">
        <button
          onClick={() => setActiveSubTab('teachers')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeSubTab === 'teachers'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'text-gray-600 hover:bg-amber-50'
          }`}
        >
          <School className="w-4 h-4" />
          <span>Teacher Queue ({data?.pendingTeacherCount ?? 0})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('payouts')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeSubTab === 'payouts'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'text-gray-600 hover:bg-amber-50'
          }`}
        >
          <Wallet className="w-4 h-4" />
          <span>Payout Requests ({data?.pendingPayoutCount ?? 0})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('config')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeSubTab === 'config'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'text-gray-600 hover:bg-amber-50'
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>Reward Rates & Budget Caps</span>
        </button>

        <button
          onClick={() => setActiveSubTab('transactions')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeSubTab === 'transactions'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'text-gray-600 hover:bg-amber-50'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Attribution Ledger & Anti-Fraud</span>
        </button>
      </div>

      {/* 4. SUB TAB CONTENTS */}

      {/* 4.1 TEACHER VERIFICATION QUEUE */}
      {activeSubTab === 'teachers' && (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-extrabold text-gray-900 text-base">Teacher Verification Requests</h3>
              <p className="text-xs text-gray-500">Verify educators to grant Educator Excellence Ambassador credentials and certificate generation</p>
            </div>
          </div>

          {(!data?.pendingTeachers || data.pendingTeachers.length === 0) ? (
            <div className="text-center py-10 text-gray-400 text-sm">
              <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-500 mb-2" />
              <span>All educator requests have been processed. No pending verifications in queue.</span>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 text-gray-600 uppercase border-b">
                  <tr>
                    <th className="py-2.5 px-3">Educator Name</th>
                    <th className="py-2.5 px-3">School / Institution</th>
                    <th className="py-2.5 px-3">Teacher ID / Code</th>
                    <th className="py-2.5 px-3">Referral Code</th>
                    <th className="py-2.5 px-3">Status</th>
                    <th className="py-2.5 px-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {data.pendingTeachers.map((tch) => (
                    <tr key={tch.userId} className="hover:bg-amber-50/40">
                      <td className="py-3 px-3 font-bold text-gray-900">{tch.name}</td>
                      <td className="py-3 px-3 text-gray-700">{tch.schoolName || 'Partner School'}</td>
                      <td className="py-3 px-3 font-mono text-gray-500">{tch.teacherIdNumber || 'N/A'}</td>
                      <td className="py-3 px-3 font-mono font-bold text-orange-600">{tch.referralCode}</td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">
                          {tch.verificationStatus}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right space-x-2">
                        <button
                          onClick={() => setCertTeacher({ name: tch.name, school: tch.schoolName || 'Vidya Mandir School', count: tch.stats.paidReferralsCount })}
                          className="px-2.5 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-lg text-[11px] cursor-pointer"
                        >
                          Preview Cert
                        </button>
                        <button
                          onClick={() => handleTeacherAction(tch.userId, 'VERIFIED')}
                          className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-[11px] cursor-pointer"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleTeacherAction(tch.userId, 'REJECTED')}
                          className="px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-lg text-[11px] cursor-pointer"
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* 4.2 PAYOUT REQUESTS */}
      {activeSubTab === 'payouts' && (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-extrabold text-gray-900 text-base">Ambassador Payout Requests</h3>
              <p className="text-xs text-gray-500">Approve disbursements via UPI or direct bank account transfer</p>
            </div>
          </div>

          {(!data?.payoutRequests || data.payoutRequests.length === 0) ? (
            <div className="text-center py-10 text-gray-400 text-sm">
              <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-500 mb-2" />
              <span>No payout requests recorded.</span>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 text-gray-600 uppercase border-b">
                  <tr>
                    <th className="py-2.5 px-3">Date</th>
                    <th className="py-2.5 px-3">User</th>
                    <th className="py-2.5 px-3">Type</th>
                    <th className="py-2.5 px-3">Amount</th>
                    <th className="py-2.5 px-3">Method & Details</th>
                    <th className="py-2.5 px-3">Status</th>
                    <th className="py-2.5 px-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {data.payoutRequests.map((p) => (
                    <tr key={p.id} className="hover:bg-amber-50/40">
                      <td className="py-3 px-3 text-gray-500 font-mono text-[11px]">
                        {new Date(p.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                      </td>
                      <td className="py-3 px-3 font-bold text-gray-900">{p.userName}</td>
                      <td className="py-3 px-3 uppercase text-[10px] font-bold text-slate-500">{p.userType}</td>
                      <td className="py-3 px-3 font-black text-emerald-600 text-sm">₹{p.amount}</td>
                      <td className="py-3 px-3 font-mono text-[11px] text-gray-700">
                        {p.method === 'UPI' ? (
                          <span>UPI: {p.upiId}</span>
                        ) : (
                          <span>A/C: {p.bankDetails?.accountNumber} ({p.bankDetails?.ifscCode})</span>
                        )}
                      </td>
                      <td className="py-3 px-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          p.status === 'COMPLETED'
                            ? 'bg-emerald-100 text-emerald-800'
                            : p.status === 'PENDING'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}>
                          {p.status}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right">
                        {p.status === 'PENDING' ? (
                          <div className="flex items-center justify-end space-x-1.5">
                            <button
                              onClick={() => handlePayoutAction(p.id, 'APPROVE')}
                              disabled={payoutProcessingId === p.id}
                              className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-[11px] cursor-pointer"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => handlePayoutAction(p.id, 'REJECT')}
                              disabled={payoutProcessingId === p.id}
                              className="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-lg text-[11px] cursor-pointer"
                            >
                              Reject
                            </button>
                          </div>
                        ) : (
                          <span className="text-[11px] text-gray-400 font-mono">
                            {p.transactionReference || 'Processed'}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* 4.3 REWARD RATES & BUDGET SETTINGS */}
      {activeSubTab === 'config' && (
        <form onSubmit={handleSaveConfig} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-6">
          <div className="flex items-center justify-between border-b pb-3">
            <div>
              <h3 className="font-extrabold text-gray-900 text-base">Referral Campaign Controls</h3>
              <p className="text-xs text-gray-500">Configure exact reward rates, monthly budget caps, and minimum payouts</p>
            </div>
            <label className="flex items-center space-x-2 text-xs font-bold text-gray-800 cursor-pointer">
              <input
                type="checkbox"
                checked={programEnabled}
                onChange={(e) => setProgramEnabled(e.target.checked)}
                className="w-4 h-4 text-amber-600 rounded"
              />
              <span>Program Active</span>
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                Monthly Reward Pool Cap (₹)
              </label>
              <input
                type="number"
                value={budgetCap}
                onChange={(e) => setBudgetCap(Number(e.target.value))}
                className="w-full px-4 py-2 border rounded-xl font-bold text-sm"
              />
              <span className="text-[11px] text-gray-500">
                Current Pool Spent: ₹{data?.config.currentBudgetSpent ?? 0}
              </span>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                Minimum Withdrawal Threshold (₹)
              </label>
              <input
                type="number"
                value={minPayout}
                onChange={(e) => setMinPayout(Number(e.target.value))}
                className="w-full px-4 py-2 border rounded-xl font-bold text-sm"
              />
              <span className="text-[11px] text-gray-500">Default: ₹50</span>
            </div>

            {/* Plan 49 settings */}
            <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-200 space-y-3">
              <h4 className="font-extrabold text-xs text-amber-900 uppercase">Plan 1: Basic (₹49)</h4>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-600">Referrer Reward (₹)</label>
                  <input
                    type="number"
                    value={plan49Referrer}
                    onChange={(e) => setPlan49Referrer(Number(e.target.value))}
                    className="w-full px-3 py-1.5 border rounded-lg font-bold text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-600">Buyer Cashback (₹)</label>
                  <input
                    type="number"
                    value={plan49Buyer}
                    onChange={(e) => setPlan49Buyer(Number(e.target.value))}
                    className="w-full px-3 py-1.5 border rounded-lg font-bold text-sm bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Plan 99 settings */}
            <div className="p-4 bg-orange-50/60 rounded-2xl border border-orange-200 space-y-3">
              <h4 className="font-extrabold text-xs text-orange-900 uppercase">Plan 2: Premium (₹99)</h4>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-600">Referrer Reward (₹)</label>
                  <input
                    type="number"
                    value={plan99Referrer}
                    onChange={(e) => setPlan99Referrer(Number(e.target.value))}
                    className="w-full px-3 py-1.5 border rounded-lg font-bold text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-600">Buyer Cashback (₹)</label>
                  <input
                    type="number"
                    value={plan99Buyer}
                    onChange={(e) => setPlan99Buyer(Number(e.target.value))}
                    className="w-full px-3 py-1.5 border rounded-lg font-bold text-sm bg-white"
                  />
                </div>
              </div>
            </div>
          </div>

          {configFeedback && (
            <div className="p-3 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-xl">
              {configFeedback}
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={configSaving}
              className="px-6 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-xs rounded-xl shadow cursor-pointer"
            >
              {configSaving ? 'Saving...' : 'Save Configuration'}
            </button>
          </div>
        </form>
      )}

      {/* 4.4 ATTRIBUTION LEDGER & ANTI-FRAUD */}
      {activeSubTab === 'transactions' && (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-extrabold text-gray-900 text-base">Verified Referral Attribution Ledger</h3>
              <p className="text-xs text-gray-500">Live ledger of rewarded paid purchases with anti-fraud auditing</p>
            </div>
            <div className="flex items-center space-x-1.5 text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Zero Self-Referral Active</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-50 text-gray-600 uppercase border-b">
                <tr>
                  <th className="py-2.5 px-3">Date</th>
                  <th className="py-2.5 px-3">Referrer</th>
                  <th className="py-2.5 px-3">Buyer Student</th>
                  <th className="py-2.5 px-3">Plan Enrolled</th>
                  <th className="py-2.5 px-3">Referrer Reward</th>
                  <th className="py-2.5 px-3">Buyer Cashback</th>
                  <th className="py-2.5 px-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data?.recentTransactions?.map((tx) => (
                  <tr key={tx.id} className="hover:bg-amber-50/40">
                    <td className="py-3 px-3 text-gray-500 font-mono text-[11px]">
                      {new Date(tx.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                    </td>
                    <td className="py-3 px-3">
                      <div className="font-bold text-gray-900">{tx.referrerName}</div>
                      <div className="font-mono text-[10px] text-orange-600">{tx.referralCode}</div>
                    </td>
                    <td className="py-3 px-3">
                      <div className="font-bold text-gray-800">{tx.buyerStudentName}</div>
                      <div className="font-mono text-[10px] text-gray-400">{tx.buyerStudentId}</div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="font-bold text-gray-900">₹{tx.planAmount} ({tx.buyerPlan.toUpperCase()})</span>
                    </td>
                    <td className="py-3 px-3 font-extrabold text-emerald-600">
                      +₹{tx.referrerReward}
                    </td>
                    <td className="py-3 px-3 font-extrabold text-emerald-600">
                      +₹{tx.buyerReward}
                    </td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        tx.status === 'CREDITED'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}>
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* CERTIFICATE MODAL PREVIEW */}
      {certTeacher && (
        <TeacherCertificateModal
          isOpen={Boolean(certTeacher)}
          onClose={() => setCertTeacher(null)}
          teacherName={certTeacher.name}
          schoolName={certTeacher.school}
          referralCount={certTeacher.count || 100}
        />
      )}
    </div>
  );
};
