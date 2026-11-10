import React, { useState } from 'react';
import { useApp, UserRole } from '../context/AppContext';
import { ClassLevel } from '../types';
import { 
  Trophy, 
  Flame, 
  Bell, 
  Crown, 
  User, 
  Sparkles, 
  CheckCircle,
  Menu,
  X,
  ShieldCheck,
  HeartHandshake,
  Lock,
  Info,
  Home,
  Medal,
  GraduationCap,
  Star,
  Bot,
  Grid3X3,
  FileText,
  Activity,
  BookOpen,
  Puzzle,
  Palette,
  Gift
} from 'lucide-react';

import { canAccessFeature, getStudentPlanInfo } from '../utils/subscriptionAccess';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenAuth: () => void;
  onOpenMembership: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  onOpenAuth,
  onOpenMembership
}) => {
  const { 
    activeRole, 
    currentUser,
    switchRole,
    currentStudent, 
    notifications,
    markNotificationAsRead
  } = useApp();

  const [showNotifications, setShowNotifications] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleRoleChange = (role: UserRole) => {
    const res = switchRole(role);
    if (!res.allowed) {
      return;
    }
    if (role === 'admin') setCurrentTab('admin');
    else if (role === 'parent') setCurrentTab('parent');
    else if (currentTab === 'admin' || currentTab === 'parent') setCurrentTab('dashboard');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-200/80 shadow-xs">
      {/* Top Banner with Tagline, DEMO Section Button & Role Switcher */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-orange-500 text-white px-4 py-1.5 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-wider uppercase text-[11px] bg-white/20 px-2 py-0.5 rounded-sm">Official Platform</span>
            {currentUser && (
              <span className="hidden md:inline bg-black/25 px-2.5 py-0.5 rounded-full text-[11px] font-bold text-amber-100 border border-white/20">
                {currentUser.role === 'admin' && '🛡️ Master Admin: ' + currentUser.email}
                {currentUser.role === 'parent' && '👨‍👧 Parent Portal: ' + currentUser.displayName + (currentStudent ? ` (Linked: ${currentStudent.name})` : '')}
                {currentUser.role === 'student' && '🎓 Student: ' + currentUser.displayName + (currentStudent ? ` (${currentStudent.classLevel})` : '')}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Dedicated DEMO Section Button (Strictly 2 Isolated Demo Records per Section) */}
            <button
              type="button"
              onClick={() => setCurrentTab('demo')}
              className={`px-2.5 py-0.5 rounded-md text-[11px] font-extrabold flex items-center gap-1 transition-all cursor-pointer border ${
                currentTab === 'demo'
                  ? 'bg-slate-900 text-amber-300 border-amber-300 shadow-xs'
                  : 'bg-amber-900/60 hover:bg-amber-900 text-white border-amber-300/40'
              }`}
              title="Open isolated DEMO section (2 DEMO DATA records per module)"
            >
              <span>🎯 DEMO</span>
            </button>

            {/* Multi-Role Switcher Tabs */}
            <div className="flex items-center gap-1 bg-black/20 p-0.5 rounded-md text-[11px]">
              <button
                onClick={() => handleRoleChange('student')}
                className={`px-2.5 py-0.5 rounded transition-all flex items-center gap-1 ${activeRole === 'student' ? 'bg-white text-amber-900 font-bold shadow-xs' : 'text-amber-100 hover:text-white'}`}
              >
                <User className="w-3 h-3" />
                Student Portal
              </button>
              <button
                onClick={() => handleRoleChange('parent')}
                className={`px-2.5 py-0.5 rounded transition-all flex items-center gap-1 ${activeRole === 'parent' ? 'bg-white text-amber-900 font-bold shadow-xs' : 'text-amber-100 hover:text-white'}`}
              >
                <HeartHandshake className="w-3 h-3" />
                Parent Portal
              </button>
              <button
                onClick={() => handleRoleChange('admin')}
                className={`px-2.5 py-0.5 rounded transition-all flex items-center gap-1 ${activeRole === 'admin' ? 'bg-white text-amber-900 font-bold shadow-xs' : 'text-amber-100 hover:text-white'}`}
              >
                <ShieldCheck className="w-3 h-3" />
                Admin Portal
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div 
          onClick={() => { setCurrentTab('dashboard'); handleRoleChange('student'); }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Trophy className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-amber-800 via-orange-800 to-amber-900 bg-clip-text text-transparent">
                VACATION CHAMPIONS
              </span>
            </div>
            <p className="text-[11px] text-amber-800/80 font-medium hidden sm:block">
              Classes 2 to 8 Educational Gaming Arena
            </p>
          </div>
        </div>

        {/* Center Navigation Links (Desktop) */}
        {activeRole === 'student' && (
          <nav className="hidden xl:flex items-center gap-1.5 bg-amber-50/70 p-1 rounded-2xl border border-amber-200/60 overflow-x-auto max-w-[680px]">
            {/* Learning Zone */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setCurrentTab('dashboard')}
                className={`px-2.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  currentTab === 'dashboard' ? 'bg-white text-amber-950 shadow-xs ring-1 ring-amber-300' : 'text-slate-700 hover:text-amber-900'
                }`}
              >
                <span className="w-5 h-5 rounded-md bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Home className="w-3.5 h-3.5" />
                </span>
                <span>Dashboard</span>
              </button>

              <button
                onClick={() => setCurrentTab('profile')}
                className={`px-2.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  currentTab === 'profile' ? 'bg-white text-amber-950 shadow-xs ring-1 ring-amber-300' : 'text-slate-700 hover:text-amber-900'
                }`}
              >
                <span className="w-5 h-5 rounded-md bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <User className="w-3.5 h-3.5" />
                </span>
                <span>My Profile</span>
              </button>

              <button
                onClick={() => setCurrentTab('quizzes')}
                className={`px-2.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  currentTab === 'quizzes' ? 'bg-white text-amber-950 shadow-xs ring-1 ring-amber-300' : 'text-slate-700 hover:text-amber-900'
                }`}
              >
                <span className="w-5 h-5 rounded-md bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <FileText className="w-3.5 h-3.5" />
                </span>
                <span>Quizzes (14)</span>
              </button>

              <button
                onClick={() => setCurrentTab('stories')}
                className={`px-2.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  currentTab === 'stories' ? 'bg-white text-amber-950 shadow-xs ring-1 ring-amber-300' : 'text-slate-700 hover:text-amber-900'
                }`}
              >
                <span className="w-5 h-5 rounded-md bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <BookOpen className="w-3.5 h-3.5" />
                </span>
                <span>Stories (45)</span>
                {!canAccessFeature(currentStudent, 'stories').allowed && (
                  <Lock className="w-3 h-3 text-indigo-600" />
                )}
              </button>

              <button
                onClick={() => setCurrentTab('puzzles')}
                className={`px-2.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  currentTab === 'puzzles' ? 'bg-white text-amber-950 shadow-xs ring-1 ring-amber-300' : 'text-slate-700 hover:text-amber-900'
                }`}
              >
                <span className="w-5 h-5 rounded-md bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Puzzle className="w-3.5 h-3.5" />
                </span>
                <span>Puzzles</span>
              </button>

              <button
                onClick={() => setCurrentTab('sudoku')}
                className={`px-2.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  currentTab === 'sudoku' ? 'bg-white text-amber-950 shadow-xs ring-1 ring-amber-300' : 'text-slate-700 hover:text-amber-900'
                }`}
              >
                <span className="w-5 h-5 rounded-md bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Grid3X3 className="w-3.5 h-3.5" />
                </span>
                <span>Sudoku</span>
              </button>
            </div>

            <div className="w-px h-5 bg-amber-200 mx-0.5" />

            {/* Championship Zone */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setCurrentTab('cricket')}
                className={`px-2.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  currentTab === 'cricket' ? 'bg-white text-emerald-950 shadow-xs ring-1 ring-emerald-300' : 'text-slate-700 hover:text-emerald-900'
                }`}
              >
                <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Activity className="w-3.5 h-3.5" />
                </span>
                <span>Cricket</span>
                {!canAccessFeature(currentStudent, 'cricket').allowed && (
                  <Lock className="w-3 h-3 text-amber-600" />
                )}
              </button>

              <button
                onClick={() => setCurrentTab('drawing')}
                className={`px-2.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  currentTab === 'drawing' ? 'bg-white text-rose-950 shadow-xs ring-1 ring-rose-300' : 'text-slate-700 hover:text-rose-900'
                }`}
              >
                <span className="w-5 h-5 rounded-md bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                  <Palette className="w-3.5 h-3.5" />
                </span>
                <span>Drawing</span>
                {!canAccessFeature(currentStudent, 'drawing').allowed && (
                  <Lock className="w-3 h-3 text-indigo-600" />
                )}
              </button>

              <button
                onClick={() => setCurrentTab('scholarship')}
                className={`px-2.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  currentTab === 'scholarship' ? 'bg-white text-amber-950 shadow-xs ring-1 ring-amber-300' : 'text-slate-700 hover:text-amber-900'
                }`}
              >
                <span className="w-5 h-5 rounded-md bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Trophy className="w-3.5 h-3.5" />
                </span>
                <span>Scholarship</span>
                {!canAccessFeature(currentStudent, 'scholarship').allowed && (
                  <Lock className="w-3 h-3 text-amber-600" />
                )}
              </button>

              <button
                onClick={() => setCurrentTab('shivaji')}
                className={`px-2.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  currentTab === 'shivaji' ? 'bg-white text-orange-950 shadow-xs ring-1 ring-orange-400' : 'text-slate-700 hover:text-orange-900'
                }`}
              >
                <span className="w-5 h-5 rounded-md bg-orange-100 text-orange-700 flex items-center justify-center shrink-0">
                  <Crown className="w-3.5 h-3.5" />
                </span>
                <span>Shivaji (50)</span>
                {!canAccessFeature(currentStudent, 'shivaji').allowed && (
                  <Lock className="w-3 h-3 text-indigo-600" />
                )}
              </button>

              <button
                onClick={() => setCurrentTab('future-skills')}
                className={`px-2.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  currentTab === 'future-skills' ? 'bg-white text-purple-950 shadow-xs ring-1 ring-purple-400' : 'text-slate-700 hover:text-purple-900'
                }`}
              >
                <span className="w-5 h-5 rounded-md bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </span>
                <span>AI Skills</span>
                {!canAccessFeature(currentStudent, 'future-skills').allowed && (
                  <Lock className="w-3 h-3 text-amber-600" />
                )}
              </button>

              <button
                onClick={() => setCurrentTab('certificates')}
                className={`px-2.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  currentTab === 'certificates' ? 'bg-white text-amber-950 shadow-xs ring-1 ring-amber-300' : 'text-slate-700 hover:text-amber-900'
                }`}
              >
                <span className="w-5 h-5 rounded-md bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-3.5 h-3.5" />
                </span>
                <span>Certificates</span>
                {!canAccessFeature(currentStudent, 'certificates').allowed && (
                  <Lock className="w-3 h-3 text-amber-600" />
                )}
              </button>

              <button
                onClick={() => setCurrentTab('referrals')}
                className={`px-2.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  currentTab === 'referrals' 
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-xs' 
                    : 'text-orange-700 hover:bg-orange-50'
                }`}
              >
                <span className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
                  currentTab === 'referrals' ? 'bg-white/20 text-white' : 'bg-orange-100 text-orange-600'
                }`}>
                  <Gift className="w-3.5 h-3.5" />
                </span>
                <span>Refer & Earn</span>
                {!canAccessFeature(currentStudent, 'referrals').allowed && (
                  <Lock className="w-3 h-3 text-amber-700" />
                )}
              </button>
            </div>
          </nav>
        )}

        {/* Right Section: Class Selector, Student Badge & Actions */}
        <div className="flex items-center gap-3">
          {/* Permanent Class Grade Badge (Rule 1: Locked to Student Account) */}
          {activeRole === 'student' && currentStudent && (
            <div 
              className="flex items-center gap-1.5 bg-amber-100/80 border border-amber-300/90 px-2.5 py-1 rounded-xl shadow-2xs"
              title={`Permanently enrolled in ${currentStudent.classLevel}. Grade changes are restricted to school administrators.`}
            >
              <Lock className="w-3 h-3 text-amber-700" />
              <span className="text-xs font-extrabold text-amber-950">
                {currentStudent.classLevel}
              </span>
              <span className="text-[9px] bg-amber-200/90 text-amber-900 px-1 py-0.2 rounded font-extrabold uppercase tracking-wider hidden sm:inline">
                Locked
              </span>
            </div>
          )}

          {/* Student Stats Pill (Points & Streak) */}
          {activeRole === 'student' && currentStudent && (
            <div className="hidden md:flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1 font-bold text-amber-900 bg-amber-100/80 px-2.5 py-1 rounded-full border border-amber-300/60" title="Champion Points">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>{currentStudent.points} pts</span>
              </div>
              <div className="flex items-center gap-1 font-bold text-orange-900 bg-orange-100/80 px-2.5 py-1 rounded-full border border-orange-300/60" title="Daily Streak">
                <Flame className="w-3.5 h-3.5 text-orange-600" />
                <span>{currentStudent.streakDays}d</span>
              </div>
            </div>
          )}

          {/* Membership Badge or Upgrade CTA */}
          {(() => {
            const pInfo = getStudentPlanInfo(currentStudent);
            if (pInfo.effectivePlan === 'free') {
              return (
                <button
                  onClick={onOpenMembership}
                  className={`hidden sm:flex items-center gap-1.5 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xs hover:shadow-md transition-all cursor-pointer ${
                    pInfo.isPaidPlanExpired
                      ? 'bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-700 hover:to-orange-700'
                      : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600'
                  }`}
                  title={
                    pInfo.isPaidPlanExpired
                      ? `Previous ${pInfo.expiredPlanName} expired. Currently on FREE PLAN – ₹0 – Lifetime. Click to renew for 90 Days.`
                      : 'Current Plan: FREE PLAN – ₹0 – Lifetime. Click to view ₹49 & ₹99 (90 Days) plans.'
                  }
                >
                  <Crown className="w-3.5 h-3.5" />
                  <span>
                    {pInfo.isPaidPlanExpired
                      ? 'Free Plan (Expired) • Renew 90d'
                      : 'FREE PLAN (₹0) • Upgrade ₹49/₹99 (90d)'}
                  </span>
                </button>
              );
            }
            return (
              <div
                onClick={onOpenMembership}
                className="hidden sm:flex items-center gap-1.5 text-[11px] font-extrabold bg-emerald-100 text-emerald-900 border border-emerald-300 px-2.5 py-1 rounded-lg cursor-pointer hover:bg-emerald-200 transition-colors"
                title={`Active Plan: ${pInfo.planDisplayName} • ${pInfo.daysRemainingDisplay}`}
              >
                <Crown className="w-3.5 h-3.5 text-emerald-600" />
                <span>
                  {pInfo.effectivePlan === 'premium'
                    ? 'PREMIUM – ₹99'
                    : 'STANDARD – ₹49'}{' '}
                  ({pInfo.daysRemaining}d left)
                </span>
              </div>
            );
          })()}

          {/* Notification Bell */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 rounded-lg text-slate-600 hover:text-amber-800 hover:bg-amber-100/50 transition-colors cursor-pointer"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notifications Dropdown Panel */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-50">
                <div className="bg-amber-50 px-4 py-2.5 border-b border-amber-100 flex items-center justify-between">
                  <h4 className="font-bold text-xs text-amber-900">Notifications & Alerts</h4>
                  <span className="text-[10px] text-slate-500">{notifications.length} total</span>
                </div>
                <div className="max-h-72 overflow-y-auto divide-y divide-slate-100">
                  {notifications.length === 0 ? (
                    <div className="p-4 text-center text-xs text-slate-500">No new notifications.</div>
                  ) : (
                    notifications.map(n => (
                      <div
                        key={n.id}
                        onClick={() => markNotificationAsRead(n.id)}
                        className={`p-3 text-xs hover:bg-amber-50/50 transition-colors cursor-pointer ${n.read ? 'opacity-70' : 'bg-amber-50/30'}`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-slate-800">{n.title}</span>
                          <span className="text-[10px] text-slate-400">{n.timestamp}</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-[11px]">{n.message}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Student Profile Avatar & Switch Account (Navigates to Profile Section) */}
          <button
            onClick={() => setCurrentTab('profile')}
            className="flex items-center gap-1.5 p-1 rounded-xl hover:bg-amber-100/50 transition-colors cursor-pointer"
            title="View Student Profile"
          >
            <div className="w-8 h-8 rounded-full bg-amber-200 border-2 border-amber-400 flex items-center justify-center text-base shadow-xs">
              {currentStudent?.avatar || '🦁'}
            </div>
            {currentStudent && (
              <span className="hidden xl:inline text-xs font-bold text-slate-800">
                {currentStudent.name.split(' ')[0]}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-amber-100/50 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with 3 Organized Zones */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-amber-200 px-4 py-4 space-y-4 animate-in slide-in-from-top-2 max-h-[80vh] overflow-y-auto">
          {/* LEARNING ZONE */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-extrabold text-amber-900 uppercase tracking-wider block px-1">
              📘 LEARNING ZONE
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => { setCurrentTab('dashboard'); setMobileMenuOpen(false); }}
                className={`p-2.5 rounded-xl text-left font-bold flex items-center gap-2 border transition-all ${
                  currentTab === 'dashboard' ? 'bg-amber-600 text-white border-amber-600 shadow-xs' : 'bg-white text-slate-700 border-amber-100 hover:bg-amber-50'
                }`}
              >
                <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Home className="w-3.5 h-3.5" />
                </span>
                <span>Dashboard</span>
              </button>

              <button
                onClick={() => { setCurrentTab('profile'); setMobileMenuOpen(false); }}
                className={`p-2.5 rounded-xl text-left font-bold flex items-center gap-2 border transition-all ${
                  currentTab === 'profile' ? 'bg-amber-600 text-white border-amber-600 shadow-xs' : 'bg-white text-slate-700 border-amber-100 hover:bg-amber-50'
                }`}
              >
                <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <User className="w-3.5 h-3.5" />
                </span>
                <span>My Profile</span>
              </button>

              <button
                onClick={() => { setCurrentTab('quizzes'); setMobileMenuOpen(false); }}
                className={`p-2.5 rounded-xl text-left font-bold flex items-center gap-2 border transition-all ${
                  currentTab === 'quizzes' ? 'bg-amber-600 text-white border-amber-600 shadow-xs' : 'bg-white text-slate-700 border-amber-100 hover:bg-amber-50'
                }`}
              >
                <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <FileText className="w-3.5 h-3.5" />
                </span>
                <span>Quizzes (14)</span>
              </button>

              <button
                onClick={() => { setCurrentTab('stories'); setMobileMenuOpen(false); }}
                className={`p-2.5 rounded-xl text-left font-bold flex items-center gap-2 border transition-all ${
                  currentTab === 'stories' ? 'bg-amber-600 text-white border-amber-600 shadow-xs' : 'bg-white text-slate-700 border-amber-100 hover:bg-amber-50'
                }`}
              >
                <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <BookOpen className="w-3.5 h-3.5" />
                </span>
                <span>Story World (45)</span>
              </button>

              <button
                onClick={() => { setCurrentTab('puzzles'); setMobileMenuOpen(false); }}
                className={`p-2.5 rounded-xl text-left font-bold flex items-center gap-2 border transition-all ${
                  currentTab === 'puzzles' ? 'bg-amber-600 text-white border-amber-600 shadow-xs' : 'bg-white text-slate-700 border-amber-100 hover:bg-amber-50'
                }`}
              >
                <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Puzzle className="w-3.5 h-3.5" />
                </span>
                <span>Brain Puzzles</span>
              </button>

              <button
                onClick={() => { setCurrentTab('sudoku'); setMobileMenuOpen(false); }}
                className={`p-2.5 rounded-xl text-left font-bold flex items-center gap-2 border transition-all ${
                  currentTab === 'sudoku' ? 'bg-amber-600 text-white border-amber-600 shadow-xs' : 'bg-white text-slate-700 border-amber-100 hover:bg-amber-50'
                }`}
              >
                <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Grid3X3 className="w-3.5 h-3.5" />
                </span>
                <span>Sudoku Game</span>
              </button>
            </div>
          </div>

          {/* CHAMPIONSHIP ZONE */}
          <div className="space-y-1.5 pt-2 border-t border-amber-100">
            <span className="text-[10px] font-extrabold text-amber-900 uppercase tracking-wider block px-1">
              🏆 CHAMPIONSHIP ZONE
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => { setCurrentTab('cricket'); setMobileMenuOpen(false); }}
                className={`p-2.5 rounded-xl text-left font-bold flex items-center gap-2 border transition-all ${
                  currentTab === 'cricket' ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs' : 'bg-white text-slate-700 border-emerald-100 hover:bg-emerald-50'
                }`}
              >
                <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Activity className="w-3.5 h-3.5" />
                </span>
                <span>Cricket Quiz</span>
              </button>

              <button
                onClick={() => { setCurrentTab('drawing'); setMobileMenuOpen(false); }}
                className={`p-2.5 rounded-xl text-left font-bold flex items-center gap-2 border transition-all ${
                  currentTab === 'drawing' ? 'bg-rose-600 text-white border-rose-600 shadow-xs' : 'bg-white text-slate-700 border-rose-100 hover:bg-rose-50'
                }`}
              >
                <span className="w-6 h-6 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center shrink-0">
                  <Palette className="w-3.5 h-3.5" />
                </span>
                <span>Drawing</span>
              </button>

              <button
                onClick={() => { setCurrentTab('scholarship'); setMobileMenuOpen(false); }}
                className={`p-2.5 rounded-xl text-left font-bold flex items-center gap-2 border transition-all ${
                  currentTab === 'scholarship' ? 'bg-amber-600 text-white border-amber-600 shadow-xs' : 'bg-white text-slate-700 border-amber-100 hover:bg-amber-50'
                }`}
              >
                <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Trophy className="w-3.5 h-3.5" />
                </span>
                <span>Scholarship</span>
              </button>

              <button
                onClick={() => { setCurrentTab('shivaji'); setMobileMenuOpen(false); }}
                className={`p-2.5 rounded-xl text-left font-bold flex items-center gap-2 border transition-all ${
                  currentTab === 'shivaji' ? 'bg-orange-600 text-white border-orange-600 shadow-xs' : 'bg-white text-slate-700 border-orange-100 hover:bg-orange-50'
                }`}
              >
                <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center shrink-0">
                  <Crown className="w-3.5 h-3.5" />
                </span>
                <span>Shivaji (50)</span>
              </button>

              <button
                onClick={() => { setCurrentTab('future-skills'); setMobileMenuOpen(false); }}
                className={`p-2.5 rounded-xl text-left font-bold flex items-center gap-2 border transition-all ${
                  currentTab === 'future-skills' ? 'bg-purple-600 text-white border-purple-600 shadow-xs' : 'bg-white text-slate-700 border-purple-100 hover:bg-purple-50'
                }`}
              >
                <span className="w-6 h-6 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </span>
                <span>AI Skills</span>
              </button>

              <button
                onClick={() => { setCurrentTab('leaderboard'); setMobileMenuOpen(false); }}
                className={`p-2.5 rounded-xl text-left font-bold flex items-center gap-2 border transition-all ${
                  currentTab === 'leaderboard' ? 'bg-amber-600 text-white border-amber-600 shadow-xs' : 'bg-white text-slate-700 border-amber-100 hover:bg-amber-50'
                }`}
              >
                <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Medal className="w-3.5 h-3.5" />
                </span>
                <span>Leaderboard</span>
              </button>

              <button
                onClick={() => { setCurrentTab('certificates'); setMobileMenuOpen(false); }}
                className={`p-2.5 rounded-xl text-left font-bold flex items-center gap-2 border transition-all ${
                  currentTab === 'certificates' ? 'bg-amber-600 text-white border-amber-600 shadow-xs' : 'bg-white text-slate-700 border-amber-100 hover:bg-amber-50'
                }`}
              >
                <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-3.5 h-3.5" />
                </span>
                <span>Certificates</span>
              </button>

              <button
                onClick={() => { setCurrentTab('referrals'); setMobileMenuOpen(false); }}
                className={`p-2.5 rounded-xl text-left font-bold flex items-center gap-2 border transition-all ${
                  currentTab === 'referrals' ? 'bg-orange-600 text-white border-orange-600 shadow-xs' : 'bg-white text-orange-800 border-orange-200 hover:bg-orange-50'
                }`}
              >
                <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center shrink-0">
                  <Gift className="w-3.5 h-3.5" />
                </span>
                <span>Refer & Earn (Rewards)</span>
              </button>
            </div>
          </div>

          {/* ACCOUNT & PLANS + DEMO SECTION */}
          <div className="pt-2 border-t border-amber-100 space-y-2">
            {currentStudent && (
              <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] space-y-1">
                <div className="flex items-center justify-between font-extrabold text-amber-950">
                  <span>Active Plan: {getStudentPlanInfo(currentStudent).planDisplayName}</span>
                  <span className="text-emerald-700">
                    {getStudentPlanInfo(currentStudent).daysRemainingDisplay}
                  </span>
                </div>
                <div className="text-[10px] text-slate-600 font-bold">
                  Plans: FREE (₹0 Lifetime) • STANDARD (₹49 / 90d) • PREMIUM (₹99 / 90d)
                </div>
              </div>
            )}
            <button
              onClick={() => { setCurrentTab('demo'); setMobileMenuOpen(false); }}
              className={`w-full p-2.5 rounded-xl text-center font-extrabold text-xs border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                currentTab === 'demo'
                  ? 'bg-slate-900 text-amber-300 border-amber-400'
                  : 'bg-slate-100 text-slate-800 border-slate-200 hover:bg-slate-200'
              }`}
            >
              <span>🎯 DEMO Section (Strictly 2 Isolated Demo Records)</span>
            </button>
            <button
              onClick={() => { onOpenMembership(); setMobileMenuOpen(false); }}
              className="w-full p-3 rounded-2xl text-center bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white font-extrabold text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
              <span>
                {getStudentPlanInfo(currentStudent).isPaidPlanExpired
                  ? 'Renew Subscription Plan (₹49 / ₹99 – 90 Days)'
                  : 'View & Upgrade Plans (₹49 / ₹99 – 90 Days)'}
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
