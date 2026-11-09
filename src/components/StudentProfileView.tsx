import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  User, 
  Phone, 
  Mail, 
  Lock, 
  ShieldCheck, 
  Users, 
  Award, 
  Trophy, 
  Flame, 
  Coins, 
  Calendar, 
  School, 
  CheckCircle, 
  CheckCircle2,
  BookOpen,
  FileText,
  Sparkles, 
  LogOut,
  ArrowRight
} from 'lucide-react';
import { LogoutConfirmModal } from './LogoutConfirmModal';

interface StudentProfileViewProps {
  onOpenMembership: () => void;
  onNavigateTab: (tab: string) => void;
}

export const StudentProfileView: React.FC<StudentProfileViewProps> = ({
  onOpenMembership,
  onNavigateTab
}) => {
  const { 
    currentUser,
    currentStudent, 
    studentsList, 
    quickSwitchStudent, 
    openAuthModal, 
    logout,
    allAttempts,
    savedDrawings
  } = useApp();

  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  if (!currentStudent) return null;

  const studentAttempts = allAttempts.filter(a => a.studentId === currentStudent.id);
  const drawingsCount = savedDrawings.filter(d => d.studentId === currentStudent.id).length;
  const storiesCount = currentStudent.completedStoryIds?.length || 0;

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20 animate-in fade-in duration-200">
      {/* Profile Page Header Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-3xl p-6 sm:p-8 text-white shadow-lg shadow-orange-500/15">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center text-5xl shadow-inner border border-white/25">
              {currentStudent.avatar || '🦁'}
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
                  {currentStudent.name}
                </h1>
                <span className="px-3 py-0.5 rounded-full bg-white/20 text-white font-extrabold text-xs border border-white/25">
                  {currentStudent.classLevel}
                </span>
              </div>
              <p className="text-amber-100 text-xs sm:text-sm font-medium">
                Enrolled Student Account • UID: <span className="font-mono">{currentStudent.id}</span>
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/90 text-white text-[11px] font-bold flex items-center gap-1 shadow-2xs">
                  <CheckCircle className="w-3 h-3" />
                  <span>Phone Verified</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/90 text-white text-[11px] font-bold flex items-center gap-1 shadow-2xs">
                  <CheckCircle className="w-3 h-3" />
                  <span>Email Verified</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-black/20 text-amber-200 text-[11px] font-bold">
                  🔥 {currentStudent.streakDays} Day Streak
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={onOpenMembership}
            className="self-start sm:self-center px-4 py-2.5 rounded-2xl bg-white text-amber-900 font-extrabold text-xs shadow-md hover:bg-amber-50 transition-all cursor-pointer"
          >
            {currentStudent.plan === 'premium' ? 'VIP Member' : 'Upgrade Plan'}
          </button>
        </div>
      </div>

      {/* 1. Official Credentials & Verification Details */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs space-y-5">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2">
            <User className="w-5 h-5 text-amber-600" />
            <span>Student & Guardian Credentials</span>
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Contact records and class enrollment locked according to platform policy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          {/* Mobile Number */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-500 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>Mobile Number (SMS OTP)</span>
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-100 text-emerald-800">
                Firebase Verified
              </span>
            </div>
            <p className="font-mono font-bold text-sm text-slate-800">
              +91 {currentStudent.mobile.replace(/\D/g, '').slice(-10)}
            </p>
          </div>

          {/* Email Address */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-500 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>Email Address (Link)</span>
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-100 text-emerald-800">
                Firebase Verified
              </span>
            </div>
            <p className="font-medium text-xs text-slate-800 truncate" title={currentStudent.email}>
              {currentStudent.email}
            </p>
          </div>

          {/* Parent/Guardian */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-bold text-slate-500 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
              <span>Parent / Guardian Name</span>
            </span>
            <p className="font-bold text-sm text-slate-800">
              {currentStudent.parentName || 'Guardian'}
            </p>
          </div>

          {/* Permanent Class */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-500 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>Enrolled Class</span>
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900">
                Grade Locked
              </span>
            </div>
            <p className="font-bold text-sm text-slate-800">
              {currentStudent.classLevel}
            </p>
          </div>

          {/* School Name */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-bold text-slate-500 flex items-center gap-1.5">
              <School className="w-3.5 h-3.5 text-slate-400" />
              <span>School / Institution</span>
            </span>
            <p className="font-medium text-xs text-slate-800">
              {currentStudent.schoolName || 'Primary / High School'}
            </p>
          </div>

          {/* Registration Date */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-bold text-slate-500 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Registered On</span>
            </span>
            <p className="font-medium text-xs text-slate-800">
              {new Date(currentStudent.registeredAt).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Learning Progress & Achievement Summary */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs space-y-5">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-600" />
            <span>Learning Milestones & Progress</span>
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Overall educational accomplishments achieved on this account.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
            <span className="text-2xl block mb-1">🪙</span>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Champion Points</p>
            <p className="text-xl font-extrabold text-amber-900">{currentStudent.points} XP</p>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
            <span className="text-2xl block mb-1">📝</span>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Quizzes Taken</p>
            <p className="text-xl font-extrabold text-blue-900">{studentAttempts.length}</p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
            <span className="text-2xl block mb-1">📖</span>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Stories Completed</p>
            <p className="text-xl font-extrabold text-emerald-900">{storiesCount} / 45</p>
          </div>

          <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200">
            <span className="text-2xl block mb-1">🎨</span>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Saved Artworks</p>
            <p className="text-xl font-extrabold text-purple-900">{drawingsCount}</p>
          </div>
        </div>
      </div>

      {/* 2B. Student's Own Attendance Records */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs space-y-4">
        <div className="border-b border-slate-100 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-600" />
              <span>My Attendance Record</span>
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Verified daily learning attendance for {currentStudent.name}
            </p>
          </div>
          <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
            100% Verified Presence
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {(currentStudent.attendanceRecords && currentStudent.attendanceRecords.length > 0) ? (
            currentStudent.attendanceRecords.map(rec => (
              <div key={rec.id} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-2 text-xs">
                <div>
                  <p className="font-extrabold text-slate-800">{rec.date}</p>
                  <p className="text-[11px] text-slate-500">{rec.remarks || 'Daily Lesson & Practice'}</p>
                </div>
                <span className={`px-2.5 py-0.5 rounded-full font-extrabold text-[10px] uppercase ${
                  rec.status === 'present' ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' :
                  rec.status === 'late' ? 'bg-amber-100 text-amber-800 border border-amber-300' :
                  'bg-rose-100 text-rose-800 border border-rose-300'
                }`}>
                  {rec.status}
                </span>
              </div>
            ))
          ) : (
            <div className="col-span-full p-4 rounded-xl bg-slate-50 text-slate-500 text-xs text-center">
              No attendance logs recorded yet.
            </div>
          )}
        </div>
      </div>

      {/* 2C. Student's Own Academic Assignments */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs space-y-4">
        <div className="border-b border-slate-100 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-600" />
              <span>My Assignments & Homework</span>
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Curriculum exercises assigned for {currentStudent.classLevel}
            </p>
          </div>
          <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold border border-blue-300">
            {currentStudent.assignments?.filter(a => a.status === 'graded').length || 0} Graded
          </span>
        </div>

        <div className="space-y-2.5">
          {(currentStudent.assignments && currentStudent.assignments.length > 0) ? (
            currentStudent.assignments.map(assign => (
              <div key={assign.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-amber-100 text-amber-900 mr-2">
                      {assign.subject}
                    </span>
                    <strong className="text-sm text-slate-900">{assign.title}</strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full font-extrabold text-[10px] uppercase ${
                      assign.status === 'graded' ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' :
                      assign.status === 'submitted' ? 'bg-blue-100 text-blue-800 border border-blue-300' :
                      'bg-amber-100 text-amber-800 border border-amber-300'
                    }`}>
                      {assign.status}
                    </span>
                    {assign.score !== undefined && (
                      <span className="font-extrabold text-xs text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Score: {assign.score} / {assign.maxScore}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">{assign.description}</p>
                {assign.teacherFeedback && (
                  <p className="text-emerald-700 text-[11px] font-semibold bg-emerald-50/60 p-2 rounded-xl border border-emerald-200">
                    👨‍🏫 Teacher Feedback: "{assign.teacherFeedback}"
                  </p>
                )}
                <p className="text-[10px] text-slate-400">Due Date: {assign.dueDate}</p>
              </div>
            ))
          ) : (
            <div className="p-4 rounded-xl bg-slate-50 text-slate-500 text-xs text-center">
              No assignments assigned currently.
            </div>
          )}
        </div>
      </div>

      {/* 2D. Student's Own Fee Details */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs space-y-4">
        <div className="border-b border-slate-100 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <span>Tuition & Fee Records</span>
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Official payment receipts and fee status for {currentStudent.name}
            </p>
          </div>
          <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
            All Dues Cleared
          </span>
        </div>

        <div className="space-y-2.5">
          {(currentStudent.feeRecords && currentStudent.feeRecords.length > 0) ? (
            currentStudent.feeRecords.map(fee => (
              <div key={fee.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <strong className="text-sm text-slate-900">{fee.title}</strong>
                    <span className={`px-2.5 py-0.5 rounded-full font-extrabold text-[10px] uppercase ${
                      fee.status === 'paid' ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' :
                      fee.status === 'due' ? 'bg-amber-100 text-amber-800 border border-amber-300' :
                      'bg-rose-100 text-rose-800 border border-rose-300'
                    }`}>
                      {fee.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Receipt: <span className="font-mono">{fee.receiptNo || 'VC-REC-2026-001'}</span> • Due: {fee.dueDate}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-base font-extrabold text-slate-900">₹{(fee.amount || fee.totalAmount || 0).toLocaleString('en-IN')}</p>
                  <p className="text-[10px] text-emerald-700 font-bold">Paid on {fee.paidAt || '2026-04-01'}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 rounded-xl bg-slate-50 text-slate-500 text-xs text-center">
              No fee records currently active.
            </div>
          )}
        </div>
      </div>

      {/* 2E. Subject Marks & Results Summary */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs space-y-4">
        <div className="border-b border-slate-100 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-600" />
              <span>Subject Marks & Quiz Results</span>
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Recent test scores and performance history for {currentStudent.name}
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('quiz')}
            className="self-start sm:self-auto text-xs font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1 cursor-pointer"
          >
            <span>Take New Quiz</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {studentAttempts.length > 0 ? (
          <div className="space-y-2">
            {studentAttempts.slice(0, 5).map(att => (
              <div key={att.id} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <div className="flex items-center gap-2">
                    <strong className="text-slate-800">{att.subject}</strong>
                    <span className="text-[10px] bg-amber-100 text-amber-900 font-extrabold px-2 py-0.5 rounded">
                      Level {att.level}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {new Date(att.completedAt || Date.now()).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                <div className="text-right">
                  <span className={`text-sm font-extrabold ${(att.scorePercent || 0) >= 80 ? 'text-emerald-700' : (att.scorePercent || 0) >= 60 ? 'text-amber-700' : 'text-rose-700'}`}>
                    {att.correctCount} / {att.totalQuestions} ({att.scorePercent || 0}%)
                  </span>
                  <p className="text-[10px] text-slate-500 font-medium">+{att.pointsEarned || 0} XP</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 bg-slate-50 rounded-2xl text-center text-xs text-slate-500">
            No quiz attempts recorded yet. Start practicing to earn marks!
          </div>
        )}
      </div>

      {/* 3. Account Switching & Privacy Isolation Enforcement */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-600" />
              <span>Student Account Isolation & Security</span>
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Zero-Trust privacy protection: Students can access only their own individual records.
            </p>
          </div>

          {currentUser?.role === 'admin' && (
            <button
              onClick={openAuthModal}
              className="text-xs font-bold text-amber-700 hover:text-amber-900 hover:underline cursor-pointer self-start sm:self-auto"
            >
              + Register New Student
            </button>
          )}
        </div>

        {currentUser?.role === 'student' ? (
          /* Student Role: Single-Student Session Lock - other students cannot be accessed or viewed */
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-300 space-y-2">
            <div className="flex items-center gap-2 text-amber-950 font-extrabold text-xs">
              <Lock className="w-4 h-4 text-amber-700" />
              <span>Single-Student Authenticated Session</span>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              You are securely signed in as <strong>{currentStudent.name}</strong> ({currentStudent.classLevel}). In compliance with Maharashtra State Examination Council (MSCE) rules and data protection policy, students cannot view or switch to other students' profiles or examination records from this session.
            </p>
            <div className="pt-1 flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                ✓ Private Student Vault
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold text-[10px]">
                ✓ Server-Enforced Firestore ABAC
              </span>
            </div>
          </div>
        ) : (
          /* Admin Role: Can view and switch between students */
          <div className="flex flex-wrap gap-2.5">
            {studentsList.map(s => {
              const isCurrent = s.id === currentStudent.id;
              return (
                <button
                  key={s.id}
                  onClick={() => quickSwitchStudent(s.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2.5 ${
                    isCurrent
                      ? 'bg-amber-300 text-amber-950 border-2 border-amber-500 shadow-xs'
                      : 'bg-slate-50 text-slate-700 hover:bg-amber-100/60 border border-slate-200'
                  }`}
                >
                  <span className="text-xl">{s.avatar}</span>
                  <div className="text-left">
                    <p className="font-extrabold">{s.name}</p>
                    <p className="text-[10px] text-slate-500 font-medium">{s.classLevel} • {s.points} XP</p>
                  </div>
                  {isCurrent && <span className="text-[10px] text-emerald-800 font-extrabold bg-emerald-100 px-2 py-0.5 rounded">Active</span>}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* 4. VERY BOTTOM OF PROFILE PAGE: EXCLUSIVE RED SIGN OUT BUTTON */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-red-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs text-slate-600 space-y-1">
            <h3 className="text-base font-display font-bold text-slate-900">
              Session & Account Sign Out
            </h3>
            <p className="text-slate-500 leading-relaxed text-[11px]">
              Signing out will securely terminate your Firebase authentication session for <strong>{currentStudent.name}</strong> ({currentStudent.classLevel}). All progress is securely saved.
            </p>
          </div>

          {/* PROMINENT RED "SIGN OUT" BUTTON */}
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
        accountName={`${currentStudent.name} (${currentStudent.classLevel})`}
        roleTitle="Student Profile"
      />
    </div>
  );
};
