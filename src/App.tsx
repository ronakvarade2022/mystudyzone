import React, { useState, useEffect } from 'react';
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
import { DemoSectionView } from './components/DemoSectionView';
import { MembershipModal } from './components/MembershipModal';
import { PlanUpgradePromptModal } from './components/PlanUpgradePromptModal';
import { AuthModal } from './components/AuthModal';
import { PasswordResetModal } from './components/PasswordResetModal';
import { HelpSupportView } from './components/HelpSupportView';
import { GrievanceRedressalView } from './components/GrievanceRedressalView';
import { TermsAndPrivacyView } from './components/TermsAndPrivacyView';
import { AboutUsView } from './components/AboutUsView';
import { ContactUsView } from './components/ContactUsView';
import { FaqsView } from './components/FaqsView';
import { SubjectName, QuizLevel } from './types';
import { canAccessFeature, canAccessSubject } from './utils/subscriptionAccess';
import { Trophy } from 'lucide-react';
import './firebase';

const FEATURE_TITLES: Record<string, string> = {
  stories: 'Story World (45+ Audio Moral Stories)',
  shivaji: 'Chhatrapati Shivaji Maharaj Stories (50 Chapters)',
  drawing: 'Drawing & Colouring Studio',
  cricket: 'Cricket Champions Hub',
  scholarship: 'Maharashtra Scholarship (4th & 7th Std)',
  'future-skills': 'AI Learning Academy & Future Skills',
  'ai-academy': 'AI Learning Academy & Future Skills',
  certificates: 'Official Champion Certificates & Leaderboard',
  leaderboard: 'Official Champion Certificates & Leaderboard',
  referrals: 'Learn • Share • Grow • Earn Referral Hub',
};

const AppContent: React.FC = () => {
  const {
    activeRole,
    currentStudent,
    studentsList,
    quickSwitchStudent,
    isAuthModalOpen,
    setIsAuthModalOpen,
  } = useApp();

  const [currentTab, setCurrentTab] = useState<string>('dashboard');
  const [quizInitialSubject, setQuizInitialSubject] = useState<SubjectName | undefined>(undefined);
  const [quizInitialLevel, setQuizInitialLevel] = useState<QuizLevel | undefined>(undefined);
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const [authDefaultTab, setAuthDefaultTab] = useState<'login' | 'register' | 'parent' | 'admin' | 'forgot'>('login');
  const [authInitialEmail, setAuthInitialEmail] = useState<string>('');
  const [resetOobCode, setResetOobCode] = useState<string>('');
  const [isResetModalOpen, setIsResetModalOpen] = useState<boolean>(false);
  const [isMembershipOpen, setIsMembershipOpen] = useState<boolean>(false);
  const [membershipInitialPlan, setMembershipInitialPlan] = useState<'basic' | 'premium'>('premium');

  // Detect Firebase Authentication password reset link (?mode=resetPassword&oobCode=...)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const mode = params.get('mode');
      const oobCode = params.get('oobCode');
      const emailParam = params.get('email');

      if (mode === 'resetPassword' && oobCode) {
        setResetOobCode(oobCode);
        setIsResetModalOpen(true);
      } else if (emailParam) {
        setAuthInitialEmail(emailParam);
      }
    } catch {
      // Ignore URL parsing errors
    }
  }, []);

  const clearResetQueryParams = () => {
    try {
      const url = new URL(window.location.href);
      url.searchParams.delete('mode');
      url.searchParams.delete('oobCode');
      url.searchParams.delete('apiKey');
      url.searchParams.delete('lang');
      window.history.replaceState({}, document.title, url.pathname + url.search);
    } catch {
      // Ignore history API errors
    }
  };

  // Upgrade prompt modal state when a student clicks a locked feature or subject
  const [upgradePrompt, setUpgradePrompt] = useState<{
    isOpen: boolean;
    featureTitle: string;
    requiredPlan: 'basic' | 'premium';
    reasonMessage: string;
  }>({
    isOpen: false,
    featureTitle: '',
    requiredPlan: 'basic',
    reasonMessage: '',
  });

  const openMembershipWithPlan = (plan: 'basic' | 'premium' = 'premium') => {
    setMembershipInitialPlan(plan);
    setIsMembershipOpen(true);
  };

  const handleNavigateTab = (tab: string, subjectParam?: SubjectName, levelParam?: QuizLevel) => {
    if (tab === 'ai-assistant') {
      window.dispatchEvent(new CustomEvent('open-ai-chat'));
      return;
    }

    const alwaysOpenTabs = new Set([
      'demo', 'dashboard', 'profile', 'account', 'subscription',
      'help-support', 'faqs', 'terms', 'privacy', 'disclaimer',
      'grievance', 'about', 'contact', 'referrals', 'admin', 'parent'
    ]);

    // Check feature restrictions for students
    if (activeRole === 'student' && currentStudent && !alwaysOpenTabs.has(tab)) {
      // 1. If navigating to a specific quiz subject, check subject access first
      if (tab === 'quizzes' && subjectParam) {
        const subjAccess = canAccessSubject(currentStudent, subjectParam);
        if (!subjAccess.allowed) {
          setUpgradePrompt({
            isOpen: true,
            featureTitle: `${subjectParam} Subject & Quizzes`,
            requiredPlan: 'basic',
            reasonMessage:
              subjAccess.reason ||
              `${subjectParam} is locked on the Free Plan. Upgrade to the ₹49 Standard Plan or ₹99 Premium Plan to unlock all 14 school subjects!`,
          });
          return;
        }
      }

      // 2. Check feature-level access
      const featAccess = canAccessFeature(currentStudent, tab);
      if (!featAccess.allowed) {
        setUpgradePrompt({
          isOpen: true,
          featureTitle: FEATURE_TITLES[tab] || featAccess.featureTitle || 'Premium Learning Feature',
          requiredPlan: featAccess.requiredPlan === 'basic' ? 'basic' : 'premium',
          reasonMessage:
            featAccess.upgradeMessage ||
            'Upgrade your subscription plan to unlock this learning module!',
        });
        return;
      }
    }

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
        setCurrentTab={(tab) => handleNavigateTab(tab)}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onOpenMembership={() => openMembershipWithPlan('premium')}
      />

      {/* Main Content Arena */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 pt-6 pb-12">
        {/* Live Interactive DEMO Playground (No payment required, isolated state) */}
        {currentTab === 'demo' ? (
          <DemoSectionView onUpgradeClick={() => openMembershipWithPlan('premium')} />
        ) : currentTab === 'referrals' ? (
          <ReferralHubView
            currentUserId={currentStudent?.id || 'guest_ambassador'}
            userName={
              currentStudent?.name ||
              (activeRole === 'parent' ? 'Champion Parent' : 'Champion Ambassador')
            }
            userEmail={currentStudent?.email || ''}
            userMobile={currentStudent?.mobile || ''}
            initialRole={activeRole === 'parent' ? 'parent' : 'student'}
            onNavigateUpgrade={() => openMembershipWithPlan('premium')}
          />
        ) : currentTab === 'help-support' ? (
          <HelpSupportView
            onNavigateTab={(t) => handleNavigateTab(t)}
            onOpenMembership={(plan) => openMembershipWithPlan(plan || 'premium')}
          />
        ) : currentTab === 'grievance' ? (
          <GrievanceRedressalView onNavigateTab={(t) => handleNavigateTab(t)} />
        ) : currentTab === 'terms' ? (
          <TermsAndPrivacyView initialTab="terms" onNavigateTab={(t) => handleNavigateTab(t)} />
        ) : currentTab === 'privacy' ? (
          <TermsAndPrivacyView initialTab="privacy" onNavigateTab={(t) => handleNavigateTab(t)} />
        ) : currentTab === 'disclaimer' ? (
          <TermsAndPrivacyView initialTab="disclaimer" onNavigateTab={(t) => handleNavigateTab(t)} />
        ) : currentTab === 'about' ? (
          <AboutUsView
            onNavigateTab={(t) => handleNavigateTab(t)}
            onOpenMembership={() => openMembershipWithPlan('premium')}
          />
        ) : currentTab === 'contact' ? (
          <ContactUsView onNavigateTab={(t) => handleNavigateTab(t)} />
        ) : currentTab === 'faqs' ? (
          <FaqsView
            onNavigateTab={(t) => handleNavigateTab(t)}
            onOpenMembership={(plan) => openMembershipWithPlan(plan || 'premium')}
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
                    Sign in with your registered student account or create a new account to get our Lifetime Free Plan automatically!
                  </p>
                </div>

                {/* Quick Switch from Available Registered Students */}
                {studentsList.length > 0 && (
                  <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2.5 text-left">
                    <span className="text-xs font-extrabold text-amber-900 block">
                      Select Registered Student on this Device:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {studentsList.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => quickSwitchStudent(s.id)}
                          className="p-3 rounded-xl bg-white border border-amber-200 hover:border-amber-400 hover:bg-amber-100/40 text-left transition-all cursor-pointer flex items-center gap-2.5 shadow-2xs"
                        >
                          <span className="text-2xl">{s.avatar}</span>
                          <div className="overflow-hidden">
                            <p className="font-bold text-xs text-slate-900 truncate">{s.name}</p>
                            <p className="text-[10px] text-amber-800 font-extrabold">
                              {s.classLevel} • {s.points} XP
                            </p>
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
                    onOpenMembership={(plan) => openMembershipWithPlan(plan || 'premium')}
                  />
                )}

                {currentTab === 'quizzes' && (
                  <SubjectQuizView
                    initialSubject={quizInitialSubject}
                    initialLevel={quizInitialLevel}
                    onOpenMembership={(plan) => openMembershipWithPlan(plan || 'basic')}
                  />
                )}

                {currentTab === 'stories' && <StoryWorldView />}

                {currentTab === 'drawing' && <DrawingChampionsView />}

                {currentTab === 'puzzles' && <PuzzleChampionsView />}

                {currentTab === 'sudoku' && <SudokuView />}

                {currentTab === 'cricket' && <CricketChampionsView />}

                {currentTab === 'scholarship' && <ScholarshipChampionsView />}

                {currentTab === 'shivaji' && <ShivajiStoriesView />}

                {(currentTab === 'future-skills' || currentTab === 'ai-academy') && (
                  <FutureSkillsView
                    onOpenMembership={() => openMembershipWithPlan('premium')}
                  />
                )}

                {(currentTab === 'leaderboard' || currentTab === 'certificates') && (
                  <CertificatesView />
                )}

                {(currentTab === 'profile' || currentTab === 'account' || currentTab === 'subscription') && (
                  <StudentProfileView
                    onOpenMembership={(plan) => openMembershipWithPlan(plan || 'premium')}
                    onNavigateTab={(t) => handleNavigateTab(t)}
                  />
                )}
              </>
            )}

            {activeRole === 'parent' && <ParentDashboard />}

            {activeRole === 'admin' && <AdminDashboard />}
          </>
        )}
      </main>

      {/* Global Modals */}
      <MembershipModal
        isOpen={isMembershipOpen}
        onClose={() => setIsMembershipOpen(false)}
        initialSelectedPlan={membershipInitialPlan}
      />

      <PlanUpgradePromptModal
        isOpen={upgradePrompt.isOpen}
        onClose={() => setUpgradePrompt((prev) => ({ ...prev, isOpen: false }))}
        currentStudent={currentStudent}
        featureTitle={upgradePrompt.featureTitle}
        requiredPlan={upgradePrompt.requiredPlan}
        upgradeMessage={upgradePrompt.reasonMessage}
        onSelectUpgradePlan={(plan: 'basic' | 'premium') => {
          setUpgradePrompt((prev) => ({ ...prev, isOpen: false }));
          openMembershipWithPlan(plan);
        }}
        onTryDemo={() => {
          setUpgradePrompt((prev) => ({ ...prev, isOpen: false }));
          setCurrentTab('demo');
        }}
      />

      <AuthModal
        isOpen={isAuthModalOpen || isAuthOpen}
        defaultTab={authDefaultTab}
        initialEmail={authInitialEmail}
        onClose={() => {
          setIsAuthModalOpen(false);
          setIsAuthOpen(false);
          setAuthDefaultTab('login');
        }}
      />

      <PasswordResetModal
        isOpen={isResetModalOpen}
        oobCode={resetOobCode}
        onClose={() => {
          setIsResetModalOpen(false);
          clearResetQueryParams();
        }}
        onRequestAnotherLink={(email) => {
          setIsResetModalOpen(false);
          clearResetQueryParams();
          if (email) setAuthInitialEmail(email);
          setAuthDefaultTab('forgot');
          setIsAuthModalOpen(true);
        }}
        onProceedToLogin={(email) => {
          setIsResetModalOpen(false);
          clearResetQueryParams();
          if (email) setAuthInitialEmail(email);
          setAuthDefaultTab('login');
          setIsAuthModalOpen(true);
        }}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-amber-200/80 py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          <div className="flex items-center justify-center gap-2 font-display font-bold text-amber-900 text-sm">
            <Trophy className="w-4 h-4 text-amber-600" />
            <span>VACATION CHAMPIONS</span>
          </div>
          <p className="text-slate-600 text-xs">
            Read • Play • Learn • Become a Champion! Educational gaming platform for Class 2 to Class 8.
          </p>

          {/* Quick Informational & Compliance Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 pt-2 text-[11px] text-slate-600 font-bold border-t border-slate-100">
            <button type="button" onClick={() => handleNavigateTab('about')} className="hover:text-amber-800 cursor-pointer">About Us</button>
            <span>•</span>
            <button type="button" onClick={() => handleNavigateTab('contact')} className="hover:text-amber-800 cursor-pointer">Contact Us</button>
            <span>•</span>
            <button type="button" onClick={() => handleNavigateTab('help-support')} className="hover:text-amber-800 cursor-pointer">Help &amp; Support</button>
            <span>•</span>
            <button type="button" onClick={() => handleNavigateTab('faqs')} className="hover:text-amber-800 cursor-pointer">FAQs</button>
            <span>•</span>
            <button type="button" onClick={() => handleNavigateTab('grievance')} className="hover:text-amber-800 cursor-pointer">Grievance Redressal</button>
            <span>•</span>
            <button type="button" onClick={() => handleNavigateTab('terms')} className="hover:text-amber-800 cursor-pointer">Terms &amp; Conditions</button>
            <span>•</span>
            <button type="button" onClick={() => handleNavigateTab('privacy')} className="hover:text-amber-800 cursor-pointer">Privacy Policy</button>
            <span>•</span>
            <button type="button" onClick={() => handleNavigateTab('disclaimer')} className="hover:text-amber-800 cursor-pointer">Educational Disclaimer</button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-1 text-[11px] text-slate-400 font-medium">
            <span>FREE PLAN – ₹0 – Lifetime</span>
            <span>•</span>
            <span>STANDARD PLAN – ₹49 – 90 Days</span>
            <span>•</span>
            <span>PREMIUM PLAN – ₹99 – 90 Days</span>
            <span>•</span>
            <span>English &amp; Marathi Female Story Voices</span>
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
