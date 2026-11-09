import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { StudentDashboard } from './components/StudentDashboard';
import { SubjectQuizView } from './components/SubjectQuizView';
import { StoryWorldView } from './components/StoryWorldView';
import { DrawingChampionsView } from './components/DrawingChampionsView';
import { PuzzleChampionsView } from './components/PuzzleChampionsView';
import { ParentDashboard } from './components/ParentDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { CertificatesView } from './components/CertificatesView';
import { CricketChampionsView } from './components/CricketChampionsView';
import { ScholarshipChampionsView } from './components/ScholarshipChampionsView';
import { StudentProfileView } from './components/StudentProfileView';
import { ShivajiStoriesView } from './components/ShivajiStoriesView';
import { SudokuView } from './components/SudokuView';
import { FutureSkillsView } from './components/FutureSkillsView';
import { ReferralHubView } from './components/ReferralHubView';
import { MembershipModal } from './components/MembershipModal';
import { AuthModal } from './components/AuthModal';
import { SubjectName, QuizLevel } from './types';
import { Trophy, ShieldCheck, HeartHandshake, User, Crown } from 'lucide-react';
import "./firebase";
const AppContent: React.FC = () => {
  const { 
    activeRole, 
    setActiveRole, 
    currentStudent, 
    studentsList,
    quickSwitchStudent,
    isAuthModalOpen, 
    setIsAuthModalOpen 
  } = useApp();

  const [currentTab, setCurrentTab] = useState<string>('dashboard');
  const [quizInitialSubject, setQuizInitialSubject] = useState<SubjectName | undefined>(undefined);
  const [quizInitialLevel, setQuizInitialLevel] = useState<QuizLevel | undefined>(undefined);
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const [isMembershipOpen, setIsMembershipOpen] = useState<boolean>(false);

  const handleNavigateTab = (tab: string, subjectParam?: SubjectName, levelParam?: QuizLevel) => {
    if (subjectParam) {
      setQuizInitialSubject(subjectParam);
    }
    if (levelParam) {
      setQuizInitialLevel(levelParam);
    }
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-amber-50/30 text-slate-900 flex flex-col font-sans">
      {/* Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onOpenMembership={() => setIsMembershipOpen(true)}
      />

      {/* Main Content Arena */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 pt-6 pb-12">
        {/* Referral Hub View (Accessible directly or from navigation) */}
        {currentTab === 'referrals' ? (
          <ReferralHubView
            currentUserId={currentStudent?.id || 'guest_ambassador'}
            userName={currentStudent?.name || (activeRole === 'parent' ? 'Champion Parent' : 'Champion Ambassador')}
            userEmail={currentStudent?.email || ''}
            userMobile={currentStudent?.mobile || ''}
            initialRole={activeRole === 'parent' ? 'parent' : 'student'}
            onNavigateUpgrade={() => setIsMembershipOpen(true)}
          />
        ) : (
          <>
            {/* Signed Out Gate for Student Portal */}
            {activeRole === 'student' && !currentStudent && (
              <div className="max-w-xl mx-auto my-12 bg-white rounded-3xl p-8 border border-amber-300 shadow-xl text-center space-y-6 animate-in zoom-in-95">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center text-4xl shadow-lg shadow-orange-500/20">
              🏆
            </div>
            
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                Authentication Required
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 mt-2">
                Welcome to Vacation Champions!
              </h2>
              <p className="text-sm text-slate-600 max-w-md mx-auto font-medium leading-relaxed">
                You have securely signed out of your session. Please sign in with your registered student account or switch to a profile below.
              </p>
            </div>

            {/* Quick Switch from Available Registered Students */}
            {studentsList.length > 0 && (
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2.5 text-left">
                <span className="text-xs font-extrabold text-amber-900 block">
                  Select Registered Student on this Device:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {studentsList.map(s => (
                    <button
                      key={s.id}
                      onClick={() => quickSwitchStudent(s.id)}
                      className="p-3 rounded-xl bg-white border border-amber-200 hover:border-amber-400 hover:bg-amber-100/40 text-left transition-all cursor-pointer flex items-center gap-2.5 shadow-2xs"
                    >
                      <span className="text-2xl">{s.avatar}</span>
                      <div className="overflow-hidden">
                        <p className="font-bold text-xs text-slate-900 truncate">{s.name}</p>
                        <p className="text-[10px] text-amber-800 font-extrabold">{s.classLevel} • {s.points} XP</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer"
              >
                Sign In to Student Account
              </button>
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
              >
                Register New Student
              </button>
            </div>
          </div>
        )}

        {/* Authenticated Student Content */}
        {activeRole === 'student' && currentStudent && (
          <>
            {currentTab === 'dashboard' && (
              <StudentDashboard
                onNavigateTab={handleNavigateTab}
                onOpenMembership={() => setIsMembershipOpen(true)}
              />
            )}

            {currentTab === 'quizzes' && (
              <SubjectQuizView 
                initialSubject={quizInitialSubject} 
                initialLevel={quizInitialLevel}
              />
            )}

            {currentTab === 'stories' && (
              <StoryWorldView />
            )}

            {currentTab === 'drawing' && (
              <DrawingChampionsView />
            )}

            {currentTab === 'puzzles' && (
              <PuzzleChampionsView />
            )}

            {currentTab === 'sudoku' && (
              <SudokuView />
            )}

            {currentTab === 'cricket' && (
              <CricketChampionsView />
            )}

            {currentTab === 'scholarship' && (
              <ScholarshipChampionsView />
            )}

            {currentTab === 'shivaji' && (
              <ShivajiStoriesView />
            )}

            {(currentTab === 'future-skills' || currentTab === 'ai-academy') && (
              <FutureSkillsView onOpenMembership={() => setIsMembershipOpen(true)} />
            )}

            {(currentTab === 'leaderboard' || currentTab === 'certificates') && (
              <CertificatesView />
            )}

            {currentTab === 'profile' && (
              <StudentProfileView
                onOpenMembership={() => setIsMembershipOpen(true)}
                onNavigateTab={handleNavigateTab}
              />
            )}
          </>
        )}

        {activeRole === 'parent' && (
          <ParentDashboard />
        )}

        {activeRole === 'admin' && (
          <AdminDashboard />
        )}
          </>
        )}
      </main>

      {/* Global Modals */}
      <MembershipModal
        isOpen={isMembershipOpen}
        onClose={() => setIsMembershipOpen(false)}
      />

      <AuthModal
        isOpen={isAuthModalOpen || isAuthOpen}
        onClose={() => {
          setIsAuthModalOpen(false);
          setIsAuthOpen(false);
        }}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-amber-200/80 py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <div className="flex items-center justify-center gap-2 font-display font-bold text-amber-900 text-sm">
            <Trophy className="w-4 h-4 text-amber-600" />
            <span>VACATION CHAMPIONS</span>
          </div>
          <p className="text-slate-600">
            Read • Play • Learn • Become a Champion! Educational gaming platform for Class 2 to Class 8.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-[11px] text-slate-400">
            <span>Guaranteed Zero-Question Repetition</span>
            <span>•</span>
            <span>45 Audio Stories in 3 Languages</span>
            <span>•</span>
            <span>Drawing & Brain Puzzles</span>
            <span>•</span>
            <span>Verified Indian Razorpay Integration</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
