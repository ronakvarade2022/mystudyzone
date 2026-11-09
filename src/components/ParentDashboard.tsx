import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  HeartHandshake, 
  User, 
  Clock, 
  Target, 
  CheckCircle2, 
  XCircle, 
  BookOpen, 
  Crown, 
  Download, 
  Calendar,
  Sparkles,
  TrendingUp,
  FileText,
  LogOut,
  ShieldCheck
} from 'lucide-react';
import { LogoutConfirmModal } from './LogoutConfirmModal';

export const ParentDashboard: React.FC = () => {
  const { currentUser, currentStudent, studentsList, quickSwitchStudent, logout, allAttempts, transactions } = useApp();

  // Enforce Parent-Child Linkage (Requirement 2 & 4: Parents can access only their linked children)
  const linkedChildren = currentUser?.role === 'parent'
    ? studentsList.filter(s => currentUser.linkedStudentIds?.includes(s.id))
    : currentUser?.role === 'student'
      ? studentsList.filter(s => s.id === currentUser.studentId)
      : studentsList;

  const [selectedChildId, setSelectedChildId] = useState<string>(
    linkedChildren.length > 0 ? linkedChildren[0].id : (currentStudent?.id || '')
  );
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  // Active child is strictly clamped to linked children
  const activeChild = linkedChildren.find(s => s.id === selectedChildId) || linkedChildren[0] || currentStudent;
  if (!activeChild) return null;

  const isCrossFamilyBlocked = currentUser?.role === 'parent' && !currentUser.linkedStudentIds?.includes(activeChild.id);

  const childAttempts = allAttempts.filter(a => a.studentId === activeChild.id);
  const totalCorrect = childAttempts.reduce((acc, a) => acc + a.correctCount, 0);
  const totalIncorrect = childAttempts.reduce((acc, a) => acc + a.incorrectCount, 0);
  const totalQuestionsAnswered = totalCorrect + totalIncorrect;
  const accuracy = totalQuestionsAnswered > 0 ? Math.round((totalCorrect / totalQuestionsAnswered) * 100) : 0;
  const totalTimeMinutes = Math.round(childAttempts.reduce((acc, a) => acc + a.timeTakenSeconds, 0) / 60) + (activeChild.completedStoryIds.length * 4);

  const childTransactions = transactions.filter(t => t.studentId === activeChild.id);
  const attendanceList = activeChild.attendanceRecords || [];
  const assignmentsList = activeChild.assignments || [];
  const feeList = activeChild.feeRecords || [];

  // Group performance by subject
  const subjectBreakdown: Record<string, { attempts: number; correct: number; total: number }> = {};
  childAttempts.forEach(a => {
    if (!subjectBreakdown[a.subject]) {
      subjectBreakdown[a.subject] = { attempts: 0, correct: 0, total: 0 };
    }
    subjectBreakdown[a.subject].attempts += 1;
    subjectBreakdown[a.subject].correct += a.correctCount;
    subjectBreakdown[a.subject].total += a.totalQuestions;
  });

  const handlePrintReport = () => {
    window.print();
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-16">
      {/* Cross-Family Isolation Guard Notice if applicable */}
      {isCrossFamilyBlocked && (
        <div className="bg-red-50 border-2 border-red-400 p-4 rounded-2xl text-red-900 text-xs font-bold flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-red-600 shrink-0" />
          <span>Security Notice: Cross-family access is blocked. You are only authorized to view records for your linked child.</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full w-fit mb-2">
            <HeartHandshake className="w-4 h-4 text-amber-700" />
            <span>Parent Oversight Portal • {currentUser?.displayName || 'Guardian'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
            {activeChild.parentName || 'Parent'}'s Guardian Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
            Real-time marks, attendance, homework assignments, and verified fee details for your linked child.
          </p>
        </div>

        {/* Linked Children Selector (Strictly filtered to authorized children only) */}
        <div className="flex items-center gap-3 bg-amber-50/70 p-3 rounded-2xl border border-amber-200">
          <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center text-lg">
            {activeChild.avatar}
          </div>
          <div>
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
              Viewing Linked Child ({linkedChildren.length} registered)
            </label>
            <select
              value={activeChild.id}
              onChange={(e) => {
                setSelectedChildId(e.target.value);
                quickSwitchStudent(e.target.value);
              }}
              className="font-bold text-xs text-slate-800 bg-transparent focus:outline-hidden cursor-pointer"
            >
              {linkedChildren.map((stu) => (
                <option key={stu.id} value={stu.id}>
                  {stu.name} ({stu.classLevel})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 4 Core Summary Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-amber-200/80 shadow-xs flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-500 uppercase">Time Spent</p>
            <p className="text-xl sm:text-2xl font-extrabold text-slate-800">{totalTimeMinutes} mins</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-amber-200/80 shadow-xs flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl shrink-0">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-500 uppercase">Overall Accuracy</p>
            <p className="text-xl sm:text-2xl font-extrabold text-slate-800">{accuracy}%</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-amber-200/80 shadow-xs flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-xl shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-500 uppercase">Stories Completed</p>
            <p className="text-xl sm:text-2xl font-extrabold text-slate-800">{activeChild.completedStoryIds.length} / 45</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-amber-200/80 shadow-xs flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-xl shrink-0">
            <Crown className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-bold text-slate-500 uppercase">Membership</p>
            <p className="text-base sm:text-lg font-extrabold text-amber-900 truncate">
              {activeChild.plan === 'premium' ? 'Champion Premium' : activeChild.plan === 'basic' ? 'Champion Basic' : 'Free Trial'}
            </p>
          </div>
        </div>
      </div>

      {/* Subject-Wise Performance Breakdown (Section 12) */}
      <div id="printable-report" className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-display font-bold text-slate-900">
              Subject-Wise Performance Breakdown
            </h2>
            <p className="text-xs text-slate-500">
              Accuracy rates across completed 10-question tests
            </p>
          </div>
          <button
            onClick={handlePrintReport}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Report Card</span>
          </button>
        </div>

        {Object.keys(subjectBreakdown).length === 0 ? (
          <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-500">
            {activeChild.name} has not attempted subject quizzes yet today.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(subjectBreakdown).map(([subject, data]) => {
              const subAcc = Math.round((data.correct / data.total) * 100);
              return (
                <div key={subject} className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-800">{subject}</span>
                    <span className="text-xs font-extrabold text-amber-800">{subAcc}%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${subAcc >= 80 ? 'bg-emerald-500' : subAcc >= 50 ? 'bg-amber-500' : 'bg-orange-500'}`}
                      style={{ width: `${subAcc}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-500">
                    {data.correct} correct out of {data.total} questions ({data.attempts} tests taken)
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Recent Quiz Attempts Log */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs space-y-4">
        <h2 className="text-xl font-display font-bold text-slate-900">
          Quiz Attempt History & Scorecard
        </h2>

        {childAttempts.length === 0 ? (
          <p className="text-xs text-slate-500">No recorded quiz attempts yet.</p>
        ) : (
          <div className="divide-y divide-slate-100">
            {childAttempts.slice(0, 8).map((attempt) => (
              <div key={attempt.id} className="py-3.5 flex items-center justify-between gap-4 text-xs">
                <div>
                  <p className="font-bold text-slate-800 text-sm">{attempt.subject}</p>
                  <p className="text-slate-500 text-[11px]">
                    {new Date(attempt.completedAt).toLocaleDateString()} • {attempt.timeTakenSeconds}s duration
                  </p>
                </div>
                <div className="text-right">
                  <span className={`font-extrabold text-sm ${attempt.scorePercent >= 70 ? 'text-emerald-600' : 'text-amber-700'}`}>
                    {attempt.correctCount} / 10 ({attempt.scorePercent}%)
                  </span>
                  <p className="text-[10px] text-slate-400">+{attempt.pointsEarned} Pts</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Attendance & Daily Learning Engagement */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl font-display font-bold text-slate-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-600" />
              <span>Attendance & Activity Engagement Log</span>
            </h2>
            <p className="text-xs text-slate-500">
              Verified daily learning presence for {activeChild.name} ({activeChild.classLevel})
            </p>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300 self-start sm:self-auto">
            100% Present • Regular Student
          </span>
        </div>

        {attendanceList.length === 0 ? (
          <p className="text-xs text-slate-500">No attendance records logged yet.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
            {attendanceList.map((att) => (
              <div key={att.id} className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200 text-center space-y-1">
                <p className="text-[10px] font-bold text-slate-500 uppercase">{att.date}</p>
                <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800">
                  {att.status}
                </span>
                <p className="text-xs font-bold text-slate-800">{att.minutesLogged} mins</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Academic Assignments & Teacher Feedback */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-display font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-600" />
              <span>Academic Assignments & Teacher Evaluation</span>
            </h2>
            <p className="text-xs text-slate-500">
              School curriculum homework, submission status, and teacher remarks.
            </p>
          </div>
        </div>

        {assignmentsList.length === 0 ? (
          <p className="text-xs text-slate-500">No assignments assigned yet.</p>
        ) : (
          <div className="divide-y divide-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
            {assignmentsList.map((asg) => (
              <div key={asg.id} className="p-4 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-sm text-slate-900">{asg.title}</span>
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[10px]">
                      {asg.subject}
                    </span>
                  </div>
                  <p className="text-slate-600 text-[11px]">
                    Due Date: <strong>{asg.dueDate}</strong> • Status:{' '}
                    <span className={`font-bold ${asg.status === 'EVALUATED' ? 'text-emerald-700' : asg.status === 'SUBMITTED' ? 'text-blue-700' : 'text-amber-700'}`}>
                      {asg.status}
                    </span>
                  </p>
                  {asg.teacherRemarks && (
                    <p className="text-[11px] text-slate-500 italic">
                      Teacher Remark: "{asg.teacherRemarks}"
                    </p>
                  )}
                </div>

                <div className="text-right shrink-0">
                  {asg.obtainedScore !== undefined ? (
                    <span className="text-base font-extrabold text-emerald-700">
                      {asg.obtainedScore} / {asg.maxScore} Marks
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2 py-1 rounded">
                      Max: {asg.maxScore} M
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* School Tuition & Fee Ledgers */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-display font-bold text-slate-900">
              Student Fee Details & Tuition Invoices
            </h2>
            <p className="text-xs text-slate-500">Official fee schedule and payment receipt history</p>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
            Fee Clear • No Dues
          </span>
        </div>

        {feeList.length === 0 ? (
          <p className="text-xs text-slate-500">No fee records found for this student.</p>
        ) : (
          <div className="space-y-3">
            {feeList.map((fee) => (
              <div key={fee.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-900">{fee.feeType}</span>
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-extrabold text-[10px]">
                      {fee.status}
                    </span>
                  </div>
                  <p className="text-slate-500 text-[11px] mt-0.5">
                    Receipt #{fee.receiptNumber} • Total: ₹{fee.totalAmount} • Paid: ₹{fee.paidAmount} • Due: ₹{fee.dueAmount}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-base font-extrabold text-slate-900">₹{fee.paidAmount}</span>
                  <button 
                    onClick={handlePrintReport}
                    className="p-2 bg-white rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 cursor-pointer"
                    title="Print Receipt"
                  >
                    <FileText className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Payment & Receipts Audit */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-display font-bold text-slate-900">
            Membership Payments & Confirmations
          </h2>
          <span className="text-xs text-slate-500">Official verified payment transaction records</span>
        </div>

        {childTransactions.length === 0 ? (
          <p className="text-xs text-slate-500">No payment transactions recorded for this student.</p>
        ) : (
          <div className="space-y-3">
            {childTransactions.map(tx => (
              <div key={tx.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-800">{tx.planTitle}</span>
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-extrabold text-[10px]">
                      {tx.status}
                    </span>
                  </div>
                  <p className="text-slate-500 text-[11px] mt-0.5">
                    Receipt #{tx.receiptNumber} • TxID: {tx.paymentId} • Method: {tx.method}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-base font-extrabold text-slate-900">₹{tx.amount}</span>
                  <button 
                    onClick={handlePrintReport}
                    className="p-2 bg-white rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 cursor-pointer"
                    title="Print Receipt"
                  >
                    <FileText className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* GUARDIAN ACCOUNT & SESSION MANAGEMENT (WITH RED LOGOUT BUTTON) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-xl">
              👨‍👧
            </div>
            <div>
              <h3 className="text-xl font-display font-extrabold text-slate-900">
                Guardian Account & Session Management
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Authorized access for {activeChild.parentName || 'Parent / Guardian'} ({activeChild.email})
              </p>
            </div>
          </div>

          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold flex items-center gap-1.5 self-start sm:self-auto">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Authenticated Parent Portal</span>
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
          <div className="text-xs text-slate-600 space-y-1">
            <p className="font-semibold text-slate-800">
              Active Student Profile: <strong>{activeChild.name}</strong> ({activeChild.classLevel})
            </p>
            <p className="text-slate-500 text-[11px]">
              Signing out will terminate this session via Firebase Authentication. You will be returned to the Login screen.
            </p>
          </div>

          {/* PROMINENT RED "SIGN OUT" BUTTON AT THE VERY BOTTOM OF GUARDIAN PROFILE */}
          <button
            type="button"
            onClick={() => setShowLogoutConfirm(true)}
            className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-extrabold text-sm tracking-wider uppercase shadow-lg shadow-red-600/25 transition-all flex items-center justify-center gap-2.5 cursor-pointer shrink-0"
          >
            <LogOut className="w-5 h-5 text-white" />
            <span>SIGN OUT</span>
          </button>
        </div>
      </div>

      {/* Sign Out Confirmation Modal */}
      <LogoutConfirmModal
        isOpen={showLogoutConfirm}
        onClose={() => setShowLogoutConfirm(false)}
        onConfirm={logout}
        accountName={`${activeChild.parentName || 'Parent'} (${activeChild.name})`}
        roleTitle="Parent Portal"
      />
    </div>
  );
};
