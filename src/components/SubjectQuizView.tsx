import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { SubjectName, QuizQuestion, QuestionType, QuizLevel } from '../types';
import { randomizeQuizQuestions } from '../services/answerRandomizerService';
import confetti from 'canvas-confetti';
import { 
  Timer, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  Sparkles, 
  RotateCcw, 
  HelpCircle,
  ShieldCheck,
  AlertTriangle,
  Loader2,
  Lock,
  Layers,
  BookOpen,
  Award,
  Play,
  Check,
  Trophy,
  ChevronRight,
  Flame
} from 'lucide-react';

import { canAccessSubject } from '../utils/subscriptionAccess';
import { PlanUpgradePromptModal } from './PlanUpgradePromptModal';

interface SubjectQuizViewProps {
  initialSubject?: SubjectName;
  initialLevel?: QuizLevel;
  onOpenMembership?: (plan?: 'basic' | 'premium') => void;
}

const ALL_14_SUBJECTS: { name: SubjectName; icon: string; bgGradient: string }[] = [
  { name: 'Mathematics', icon: '📐', bgGradient: 'from-blue-500 to-indigo-600' },
  { name: 'English', icon: '📖', bgGradient: 'from-amber-500 to-orange-600' },
  { name: 'Hindi', icon: '🇮🇳', bgGradient: 'from-red-500 to-rose-600' },
  { name: 'Marathi', icon: '🚩', bgGradient: 'from-orange-500 to-amber-600' },
  { name: 'Science', icon: '🔬', bgGradient: 'from-emerald-500 to-teal-600' },
  { name: 'General Knowledge', icon: '🌍', bgGradient: 'from-sky-500 to-blue-600' },
  { name: 'Social Studies', icon: '🏛️', bgGradient: 'from-purple-500 to-indigo-600' },
  { name: 'History', icon: '⚔️', bgGradient: 'from-amber-700 to-stone-800' },
  { name: 'Geography', icon: '🗺️', bgGradient: 'from-teal-500 to-emerald-700' },
  { name: 'Computer Knowledge', icon: '💻', bgGradient: 'from-cyan-500 to-blue-700' },
  { name: 'Logical Reasoning', icon: '💡', bgGradient: 'from-violet-500 to-purple-700' },
  { name: 'Environmental Studies', icon: '🌱', bgGradient: 'from-green-500 to-emerald-700' },
  { name: 'Moral Education', icon: '🕊️', bgGradient: 'from-rose-500 to-pink-600' },
  { name: 'Vocabulary and Grammar', icon: '✍️', bgGradient: 'from-fuchsia-500 to-purple-600' }
];

const QUESTION_FORMAT_LABELS: Record<string, { label: string; badgeColor: string }> = {
  mcq: { label: 'Multiple Choice', badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200' },
  fill_blank: { label: 'Fill in the Blanks', badgeColor: 'bg-amber-100 text-amber-900 border-amber-300' },
  true_false: { label: 'True or False', badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
  match_following: { label: 'Match the Following', badgeColor: 'bg-violet-100 text-violet-800 border-violet-200' },
  find_incorrect: { label: 'Find Incorrect Option', badgeColor: 'bg-rose-100 text-rose-800 border-rose-300' },
  choose_correct_statement: { label: 'Choose Correct Statement', badgeColor: 'bg-sky-100 text-sky-800 border-sky-300' },
  complete_sentence: { label: 'Complete the Sentence', badgeColor: 'bg-teal-100 text-teal-800 border-teal-300' },
  problem_solving: { label: 'Problem Solving', badgeColor: 'bg-red-100 text-red-800 border-red-300' },
  picture_based: { label: 'Visual / Picture Question', badgeColor: 'bg-orange-100 text-orange-900 border-orange-300' },
  logical_reasoning: { label: 'Logical Reasoning', badgeColor: 'bg-amber-100 text-amber-800 border-amber-200' },
  assertion_reasoning: { label: 'Assertion & Reasoning', badgeColor: 'bg-purple-100 text-purple-900 border-purple-300' },
  number_based: { label: 'Number Calculation', badgeColor: 'bg-teal-100 text-teal-800 border-teal-300' },
  sequence_pattern: { label: 'Sequence & Pattern', badgeColor: 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-300' },
  comprehension: { label: 'Comprehension Question', badgeColor: 'bg-blue-100 text-blue-800 border-blue-300' },
  real_life_application: { label: 'Real-Life Application', badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
  diagram_identification: { label: 'Diagram Analysis', badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-300' }
};

interface LevelCardMeta {
  level: QuizLevel;
  title: string;
  difficulty: string;
  diffBadge: string;
  cardGradient: string;
  description: string;
}

const LEVEL_CARDS_META: LevelCardMeta[] = [
  {
    level: 1,
    title: 'Level 1 – Easy',
    difficulty: 'Basic Foundation',
    diffBadge: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    cardGradient: 'from-emerald-500 to-teal-600',
    description: 'Basic Foundation: 10 unique foundational questions covering core concepts, vocabulary, and visual recognition.'
  },
  {
    level: 2,
    title: 'Level 2 – Moderate',
    difficulty: 'Concept Application',
    diffBadge: 'bg-blue-100 text-blue-800 border-blue-300',
    cardGradient: 'from-blue-500 to-indigo-600',
    description: 'Concept Application: 10 completely different questions with multi-step application, fill-in-blanks, and relation matching.'
  },
  {
    level: 3,
    title: 'Level 3 – Difficult',
    difficulty: 'Analytical Thinking',
    diffBadge: 'bg-amber-100 text-amber-800 border-amber-300',
    cardGradient: 'from-amber-500 to-orange-600',
    description: 'Analytical Thinking: 10 completely different analytical questions, word problems, error spotting, and deductions.'
  },
  {
    level: 4,
    title: 'Level 4 – Advanced',
    difficulty: 'Higher-Order Mastery',
    diffBadge: 'bg-purple-100 text-purple-800 border-purple-300',
    cardGradient: 'from-purple-600 to-rose-600',
    description: 'Advanced Mastery: 10 completely different higher-order & tricky questions with dynamic option shuffling (A, B, C, D).'
  }
];

export const SubjectQuizView: React.FC<SubjectQuizViewProps> = ({ 
  initialSubject = 'Mathematics',
  initialLevel = 1,
  onOpenMembership
}) => {
  const { 
    currentStudent, 
    platformSettings, 
    fetchClassSubjectLevelQuestionsAsync,
    getSubjectLevelProgress,
    submitQuizAttempt 
  } = useApp();

  const safeInitialSubject: SubjectName =
    canAccessSubject(currentStudent, initialSubject).allowed ? initialSubject : 'Mathematics';

  const [selectedSubject, setSelectedSubject] = useState<SubjectName>(safeInitialSubject);
  const [selectedLevel, setSelectedLevel] = useState<QuizLevel>(initialLevel);
  const [quizState, setQuizState] = useState<'idle' | 'playing' | 'completed'>('idle');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [isLoadingSubject, setIsLoadingSubject] = useState<boolean>(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  // Subject switch confirmation modal state
  const [pendingSubjectSwitch, setPendingSubjectSwitch] = useState<SubjectName | null>(null);
  // Locked subject upgrade prompt state
  const [lockedSubjectPrompt, setLockedSubjectPrompt] = useState<{
    isOpen: boolean;
    subjectName: string;
    reason: string;
  }>({ isOpen: false, subjectName: '', reason: '' });

  const [answersLog, setAnswersLog] = useState<{
    questionId: string;
    questionText: string;
    options: string[];
    selectedIndex: number;
    correctIndex: number;
    isCorrect: boolean;
    explanation: string;
    questionType?: string;
  }[]>([]);
  const [startTime, setStartTime] = useState<number>(0);

  // Active request token to discard stale race-condition fetches
  const activeRequestIdRef = useRef<number>(0);

  if (!currentStudent) return null;

  // Determine timer duration per question based on class level
  const classNum = parseInt(currentStudent.classLevel.replace('Class ', ''), 10);
  const timerSeconds = classNum <= 3 
    ? platformSettings.timers.classes2to3 
    : classNum <= 5 
      ? platformSettings.timers.classes4to5 
      : platformSettings.timers.classes6to8;

  const currentSubjProgress = getSubjectLevelProgress(selectedSubject);
  const maxUnlockedLevel = currentSubjProgress.maxUnlockedLevel;

  // Sync selectedSubject & selectedLevel whenever props change from external navigation
  useEffect(() => {
    if (initialSubject && initialSubject !== selectedSubject) {
      handleSubjectClick(initialSubject);
    }
  }, [initialSubject]);

  useEffect(() => {
    if (initialLevel && initialLevel !== selectedLevel) {
      setSelectedLevel(initialLevel);
    }
  }, [initialLevel]);

  // Handle clicking on another subject tab
  const handleSubjectClick = (targetSubject: SubjectName) => {
    const access = canAccessSubject(currentStudent, targetSubject);
    if (!access.allowed) {
      setLockedSubjectPrompt({
        isOpen: true,
        subjectName: `${targetSubject} Quizzes`,
        reason:
          access.reason ||
          `${targetSubject} is locked on the Free Plan. Upgrade to the ₹49 Standard Plan or ₹99 Premium Plan to unlock all 14 school subjects!`
      });
      return;
    }

    if (targetSubject === selectedSubject && quizState !== 'idle') return;

    if (quizState === 'playing' && (currentIndex > 0 || isAnswerChecked)) {
      setPendingSubjectSwitch(targetSubject);
      return;
    }

    executeSubjectSwitch(targetSubject);
  };

  const confirmSubjectSwitch = () => {
    if (pendingSubjectSwitch) {
      const target = pendingSubjectSwitch;
      setPendingSubjectSwitch(null);
      executeSubjectSwitch(target);
    }
  };

  const cancelSubjectSwitch = () => {
    setPendingSubjectSwitch(null);
  };

  // Immediate Clean State Reset & Level Alignment
  const executeSubjectSwitch = (subj: SubjectName) => {
    setSelectedSubject(subj);
    setQuizState('idle');
    setQuestions([]);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setAnswersLog([]);
    setLoadError(null);

    // Default to level 1 or highest unlocked level
    const prog = getSubjectLevelProgress(subj);
    setSelectedLevel(prog.maxUnlockedLevel || 1);
  };

  // Start new 10-Question Quiz for chosen subject & level
  const startQuiz = async (subj: SubjectName, lvl: QuizLevel) => {
    setIsLoadingSubject(true);
    setLoadError(null);
    setSelectedLevel(lvl);

    const requestId = ++activeRequestIdRef.current;

    try {
      const qList = await fetchClassSubjectLevelQuestionsAsync(currentStudent.classLevel, subj, lvl);
      const randomizedQs = randomizeQuizQuestions(qList, lvl === 4);
      
      if (requestId === activeRequestIdRef.current) {
        setQuestions(randomizedQs);
        setCurrentIndex(0);
        setSelectedOption(null);
        setIsAnswerChecked(false);
        setTimeLeft(timerSeconds);
        setAnswersLog([]);
        setStartTime(Date.now());
        setIsLoadingSubject(false);
        setQuizState('playing');
      }
    } catch (e) {
      if (requestId === activeRequestIdRef.current) {
        setIsLoadingSubject(false);
        setLoadError('Unable to load quiz questions. Please tap retry.');
      }
    }
  };

  // Timer countdown hook
  useEffect(() => {
    if (quizState !== 'playing' || isAnswerChecked) return;

    if (timeLeft <= 0) {
      handleTimeExpired();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [quizState, timeLeft, isAnswerChecked]);

  // Automatic progression when timeout expires: wait 2.5s then advance
  useEffect(() => {
    if (isAnswerChecked && timeLeft <= 0 && quizState === 'playing') {
      const autoTimer = setTimeout(() => {
        handleNextQuestion();
      }, 2500);
      return () => clearTimeout(autoTimer);
    }
  }, [isAnswerChecked, timeLeft, quizState, currentIndex]);

  const handleTimeExpired = () => {
    if (isAnswerChecked || !questions[currentIndex]) return;
    const currentQ = questions[currentIndex];
    setIsAnswerChecked(true);
    const logItem = {
      questionId: currentQ.id,
      questionText: currentQ.questionText,
      options: currentQ.options,
      selectedIndex: -1,
      correctIndex: currentQ.correctIndex,
      isCorrect: false,
      explanation: currentQ.explanation,
      questionType: currentQ.questionType
    };
    setAnswersLog(prev => [...prev, logItem]);
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswerChecked || !questions[currentIndex]) return;
    setSelectedOption(idx);
    setIsAnswerChecked(true);

    const currentQ = questions[currentIndex];
    const isCorrect = idx === currentQ.correctIndex;

    const logItem = {
      questionId: currentQ.id,
      questionText: currentQ.questionText,
      options: currentQ.options,
      selectedIndex: idx,
      correctIndex: currentQ.correctIndex,
      isCorrect,
      explanation: currentQ.explanation,
      questionType: currentQ.questionType
    };
    setAnswersLog(prev => [...prev, logItem]);
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setTimeLeft(timerSeconds);
    } else {
      finalizeQuiz();
    }
  };

  const finalizeQuiz = () => {
    const elapsedSeconds = Math.round((Date.now() - startTime) / 1000);
    const correctCount = answersLog.filter(a => a.isCorrect).length;
    const incorrectCount = answersLog.filter(a => !a.isCorrect && a.selectedIndex !== -1).length;
    const unansweredCount = answersLog.filter(a => a.selectedIndex === -1).length;
    const scorePercent = Math.round((correctCount / (questions.length || 10)) * 100);
    const pointsEarned = correctCount * platformSettings.pointsPerQuizCorrect + (scorePercent === 100 ? 50 : 0);

    submitQuizAttempt({
      studentId: currentStudent.id,
      studentName: currentStudent.name,
      classLevel: currentStudent.classLevel,
      subject: selectedSubject,
      level: selectedLevel,
      totalQuestions: questions.length,
      correctCount,
      incorrectCount,
      unansweredCount,
      scorePercent,
      timeTakenSeconds: elapsedSeconds,
      pointsEarned,
      passed: scorePercent >= 60,
      questionIds: questions.map(q => q.id),
      answers: answersLog
    });

    setQuizState('completed');

    if (scorePercent >= 60) {
      try {
        confetti({ particleCount: 110, spread: 80, origin: { y: 0.6 } });
      } catch (e) {}
    }
  };

  const currentQ = questions[currentIndex];
  const qFormat = currentQ?.questionType 
    ? (QUESTION_FORMAT_LABELS[currentQ.questionType] || { label: 'Multiple Choice', badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200' })
    : { label: 'Multiple Choice', badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200' };

  const currentSubjectObj = ALL_14_SUBJECTS.find(s => s.name === selectedSubject);

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16">
      {/* 14 Subject Selector Header */}
      <div className="bg-white rounded-3xl p-6 border border-amber-200/80 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🎯</span>
              <h1 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
                Subject Quiz Arena
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1">
                <Lock className="w-3 h-3 text-amber-700" />
                {currentStudent.classLevel}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              4 Distinct Levels • Strictly 10 Questions per Level • Zero Repetition Guarantee
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200 text-xs font-bold text-amber-900">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Class-Isolated & Level-Separated</span>
          </div>
        </div>

        {/* 14 Subject Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {ALL_14_SUBJECTS.map((sub) => {
            const isSelected = selectedSubject === sub.name;
            const subProgress = getSubjectLevelProgress(sub.name);
            const subjectAccess = canAccessSubject(currentStudent, sub.name);
            const isSubLocked = !subjectAccess.allowed;
            return (
              <button
                key={sub.name}
                onClick={() => handleSubjectClick(sub.name)}
                className={`px-3.5 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSelected 
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md shadow-amber-600/20 scale-[1.02]' 
                    : isSubLocked
                      ? 'bg-slate-100/80 hover:bg-indigo-50 text-slate-500 border border-slate-200'
                      : 'bg-slate-100 hover:bg-amber-50 text-slate-700 border border-slate-200'
                }`}
              >
                <span>{sub.icon}</span>
                <span>{sub.name}</span>
                {isSubLocked ? (
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full font-extrabold bg-indigo-100 text-indigo-700 flex items-center gap-0.5">
                    <Lock className="w-2.5 h-2.5" /> ₹49
                  </span>
                ) : (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? 'bg-white/25 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    L{subProgress.maxUnlockedLevel}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* SUBJECT LOADING INDICATOR */}
      {isLoadingSubject && (
        <div className="bg-white rounded-3xl p-12 border border-amber-200/80 shadow-xs text-center space-y-4 animate-in fade-in">
          <Loader2 className="w-10 h-10 mx-auto text-amber-600 animate-spin" />
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Loading Level {selectedLevel} for {selectedSubject} ({currentStudent.classLevel})...
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
              Selecting 10 unique, age-appropriate questions across 10 diverse formats.
            </p>
          </div>
        </div>
      )}

      {/* ERROR / RETRY SCREEN */}
      {!isLoadingSubject && loadError && (
        <div className="bg-white rounded-3xl p-8 border border-rose-200 shadow-xs text-center space-y-4">
          <AlertTriangle className="w-10 h-10 mx-auto text-rose-500" />
          <h3 className="text-lg font-bold text-slate-900">{loadError}</h3>
          <button
            onClick={() => startQuiz(selectedSubject, selectedLevel)}
            className="px-6 py-2.5 rounded-2xl bg-amber-600 text-white font-bold text-xs shadow-xs hover:bg-amber-700 cursor-pointer"
          >
            Retry Loading Questions
          </button>
        </div>
      )}

      {/* VISIBLE 4-LEVEL DASHBOARD ROADMAP (Idle View) */}
      {!isLoadingSubject && !loadError && quizState === 'idle' && (
        <div className="space-y-6">
          {/* Subject Banner */}
          <div className={`p-6 sm:p-8 rounded-3xl bg-gradient-to-r ${currentSubjectObj?.bgGradient || 'from-amber-500 to-orange-600'} text-white shadow-lg shadow-orange-500/10 flex flex-col md:flex-row md:items-center justify-between gap-4`}>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-3xl">{currentSubjectObj?.icon}</span>
                <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
                  {currentStudent.classLevel}
                </span>
                <span className="text-xs font-bold text-white/90">
                  Total 40 Questions (10 Per Level)
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold">
                {selectedSubject} Mastery Levels
              </h2>
              <p className="text-xs sm:text-sm text-white/90 max-w-xl font-medium">
                Choose a level below. Every level features 10 distinct questions (no repeated formats). Score 60%+ to unlock the next level!
              </p>
            </div>

            <button
              onClick={() => startQuiz(selectedSubject, selectedLevel)}
              className="px-6 py-3 rounded-2xl bg-white text-slate-900 font-extrabold text-sm shadow-md hover:bg-amber-50 transition-all flex items-center justify-center gap-2 cursor-pointer self-start md:self-auto shrink-0"
            >
              <Play className="w-4 h-4 fill-slate-900" />
              <span>Start Level {selectedLevel} Quiz</span>
            </button>
          </div>

          {/* 4 VISIBLE LEVEL CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LEVEL_CARDS_META.map((card) => {
              const isUnlocked = card.level <= maxUnlockedLevel;
              const isCompleted = currentSubjProgress.completedLevels.includes(card.level);
              const bestScore = currentSubjProgress.bestScores[card.level];
              const isSelected = selectedLevel === card.level;

              return (
                <div
                  key={card.level}
                  onClick={() => {
                    if (isUnlocked) setSelectedLevel(card.level);
                  }}
                  className={`rounded-3xl p-6 border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                    isSelected 
                      ? 'bg-amber-50/50 border-amber-500 ring-2 ring-amber-400 shadow-md' 
                      : isUnlocked 
                        ? 'bg-white border-amber-200/90 hover:border-amber-400 shadow-xs' 
                        : 'bg-slate-50 border-slate-200 opacity-60 cursor-not-allowed'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-display font-extrabold text-lg text-slate-900">
                          {card.title}
                        </span>
                        <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${card.diffBadge}`}>
                          {card.difficulty}
                        </span>
                      </div>
                      
                      <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                        10 Questions
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {card.description}
                    </p>

                    {/* Status Indicator */}
                    <div className="pt-2">
                      {isCompleted ? (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Passed • Best Score: {bestScore ? `${bestScore}/10` : 'Passed'}</span>
                        </div>
                      ) : isUnlocked ? (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200">
                          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                          <span>Unlocked • Ready to Play</span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-200 text-slate-500">
                          <Lock className="w-3.5 h-3.5" />
                          <span>Locked • Pass Level {card.level - 1} with 60%+</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Level CTA button */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400">
                      Timer: {timerSeconds}s / question
                    </span>

                    {isUnlocked ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          startQuiz(selectedSubject, card.level);
                        }}
                        className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 cursor-pointer ${
                          isSelected 
                            ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-xs' 
                            : 'bg-amber-100 hover:bg-amber-200 text-amber-900'
                        }`}
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>{isCompleted ? 'Play Again' : `Play Level ${card.level}`}</span>
                      </button>
                    ) : (
                      <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                        <Lock className="w-3 h-3" />
                        <span>Locked</span>
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 10 Question Patterns Notice Card */}
          <div className="bg-white rounded-3xl p-6 border border-amber-200/80 shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-600" />
              <span>10 Distinct Question Patterns in Every Level</span>
            </h3>
            <p className="text-xs text-slate-500">
              To ensure rich educational variety, each 10-question quiz covers 10 different formats:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[
                '1. Multiple Choice',
                '2. Fill in Blanks',
                '3. True or False',
                '4. Match the Following',
                '5. Identify Correct Answer',
                '6. Find Incorrect Option',
                '7. Complete the Sentence',
                '8. Problem Solving',
                '9. Picture / Visual Question',
                '10. Logical Reasoning'
              ].map((pat, idx) => (
                <span key={idx} className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200">
                  {pat}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* QUIZ PLAYING VIEW: One Question at a Time */}
      {!isLoadingSubject && !loadError && quizState === 'playing' && currentQ && (
        <div className="space-y-4">
          {/* Header Bar: Question index, level badge, progress bar, timer */}
          <div className="bg-white rounded-2xl p-4 border border-amber-200/80 shadow-xs flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-bold text-slate-700 text-xs sm:text-sm">
              <span className="bg-amber-100 text-amber-900 px-2.5 py-1 rounded-lg">
                Question {currentIndex + 1} of {questions.length}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-purple-100 text-purple-900 font-extrabold text-xs">
                Level {selectedLevel}
              </span>
              <span className="text-slate-400 hidden sm:inline">•</span>
              <span className="text-slate-600 hidden sm:inline">{selectedSubject} ({currentStudent.classLevel})</span>
            </div>

            {/* Countdown Timer with Warning Colors */}
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-mono font-extrabold text-sm border ${
              timeLeft <= 5 
                ? 'bg-red-50 text-red-600 border-red-300 animate-pulse' 
                : 'bg-amber-50 text-amber-900 border-amber-200'
            }`}>
              <Timer className="w-4 h-4" />
              <span>{timeLeft}s</span>
            </div>
          </div>

          {/* Live Progress Bar */}
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-amber-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-md space-y-6">
            <div className="space-y-3">
              {/* Question Format Badge & Topic Tag */}
              <div className="flex flex-wrap items-center gap-2">
                <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full border ${qFormat.badgeColor}`}>
                  {qFormat.label}
                </span>
                {currentQ.topic && (
                  <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200 flex items-center gap-1">
                    <BookOpen className="w-3 h-3 text-slate-500" />
                    <span>{currentQ.topic}</span>
                  </span>
                )}
                <span className="text-[10px] font-mono text-slate-400 ml-auto">
                  ID: {currentQ.id}
                </span>
              </div>

              {/* Diagram / Emoji Visual Presentation */}
              {currentQ.diagramEmoji && (
                <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-3xl shadow-xs">
                  {currentQ.diagramEmoji}
                </div>
              )}

              {/* Question Text */}
              <h2 className="text-base sm:text-xl font-bold text-slate-900 leading-relaxed whitespace-pre-line">
                {currentQ.questionText}
              </h2>
            </div>

            {/* 4 Interactive Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentQ.options.map((optText, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQ.correctIndex;

                let btnStyle = 'bg-slate-50 hover:bg-amber-50/60 border-slate-200 text-slate-800';

                if (isAnswerChecked) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-400 font-extrabold';
                  } else if (isSelected && !isCorrect) {
                    btnStyle = 'bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-400 font-extrabold';
                  } else {
                    btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-50';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswerChecked}
                    onClick={() => handleSelectOption(idx)}
                    className={`p-4 rounded-2xl border text-left text-sm font-medium transition-all flex items-start gap-3 cursor-pointer ${btnStyle}`}
                  >
                    <span className="w-6 h-6 rounded-lg bg-black/5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1">{optText}</span>
                    {isAnswerChecked && isCorrect && (
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    )}
                    {isAnswerChecked && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Instant Educational Explanation Card */}
            {isAnswerChecked && (
              <div className={`p-4 rounded-2xl border text-xs sm:text-sm animate-in fade-in space-y-1.5 ${
                selectedOption === currentQ.correctIndex 
                  ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950' 
                  : 'bg-rose-50/70 border-rose-300 text-rose-950'
              }`}>
                <div className="flex items-center gap-2 font-bold">
                  {selectedOption === currentQ.correctIndex ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Brilliant! That is correct.</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-rose-600" />
                      <span>{selectedOption === -1 ? 'Time Expired!' : 'Not quite right.'} Correct answer: {currentQ.options[currentQ.correctIndex]}</span>
                    </>
                  )}
                </div>
                <p className="text-slate-700 leading-relaxed">
                  <strong>Explanation:</strong> {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Next Question / Finish Button */}
            {isAnswerChecked && (
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{currentIndex + 1 === questions.length ? 'See Final Results' : 'Next Question'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* QUIZ COMPLETED RESULTS VIEW */}
      {!isLoadingSubject && quizState === 'completed' && (() => {
        const correctCount = answersLog.filter(a => a.isCorrect).length;
        const total = questions.length || 10;
        const scorePercent = Math.round((correctCount / total) * 100);
        const passed = scorePercent >= 60;
        const nextLevelNum = (selectedLevel + 1) as QuizLevel;
        const canAdvance = passed && selectedLevel < 4;

        return (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-lg space-y-8 animate-in fade-in">
            {/* Header Trophy & Score */}
            <div className="text-center space-y-3">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 text-white flex items-center justify-center text-4xl shadow-md">
                {passed ? '🏆' : '💪'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
                {passed ? `Level ${selectedLevel} Mastered, Champion!` : `Keep Practicing, Champion!`}
              </h2>
              <p className="text-sm text-slate-600 font-medium">
                {selectedSubject} ({currentStudent.classLevel}) • Level {selectedLevel}
              </p>
            </div>

            {/* Unlocked Level Notification Banner */}
            {canAdvance && (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white shadow-md flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl shrink-0">
                    🔓
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base">Next Level Unlocked!</h4>
                    <p className="text-xs text-emerald-100 font-medium">
                      You passed with {scorePercent}%. <strong>Level {nextLevelNum}</strong> is now accessible in {selectedSubject}!
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => startQuiz(selectedSubject, nextLevelNum)}
                  className="px-5 py-2.5 rounded-xl bg-white text-emerald-900 font-extrabold text-xs shadow-md hover:bg-emerald-50 transition-all cursor-pointer shrink-0 flex items-center gap-1.5"
                >
                  <span>Proceed to Level {nextLevelNum}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Results Metric Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-amber-50/60 p-4 rounded-2xl border border-amber-200 text-center">
              <div>
                <p className="text-[11px] font-bold text-slate-500 uppercase">Correct</p>
                <p className="text-2xl font-extrabold text-emerald-600">
                  {correctCount} / {total}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-500 uppercase">Score</p>
                <p className="text-2xl font-extrabold text-amber-700">
                  {scorePercent}%
                </p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-500 uppercase">Points Won</p>
                <p className="text-2xl font-extrabold text-orange-600">
                  +{correctCount * platformSettings.pointsPerQuizCorrect + (scorePercent === 100 ? 50 : 0)}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-500 uppercase">Result</p>
                <p className={`text-2xl font-extrabold ${passed ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {passed ? 'Passed ✅' : 'Try Again'}
                </p>
              </div>
            </div>

            {/* Zero Repetition Certificate Stamp */}
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center gap-3 text-xs text-emerald-900 font-medium">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <p className="font-bold">Zero-Repetition Curriculum Check</p>
                <p className="text-[11px] text-emerald-700">
                  All 10 question IDs were tracked in your profile to guarantee fresh questions on every attempt!
                </p>
              </div>
            </div>

            {/* Review of all 10 Questions */}
            <div className="space-y-3">
              <h3 className="font-bold text-base text-slate-800">
                Detailed Review ({answersLog.length} Questions)
              </h3>
              <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                {answersLog.map((item, idx) => {
                  const qFormatItem = item.questionType ? QUESTION_FORMAT_LABELS[item.questionType] : null;

                  return (
                    <div 
                      key={idx}
                      className={`p-4 rounded-2xl border text-xs sm:text-sm space-y-2 ${
                        item.isCorrect ? 'bg-emerald-50/50 border-emerald-200' : 'bg-rose-50/50 border-rose-200'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-slate-800">Q{idx + 1}.</span>
                          {qFormatItem && (
                            <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${qFormatItem.badgeColor}`}>
                              {qFormatItem.label}
                            </span>
                          )}
                        </div>
                        <span className={item.isCorrect ? 'text-emerald-700 font-extrabold' : 'text-rose-600 font-extrabold'}>
                          {item.isCorrect ? 'Correct ✅' : 'Incorrect ❌'}
                        </span>
                      </div>

                      <p className="font-semibold text-slate-900 whitespace-pre-line">
                        {item.questionText}
                      </p>

                      <div className="text-[11px] space-y-1">
                        <div className="text-slate-600">
                          <span className="font-bold">Your Answer:</span>{' '}
                          {item.selectedIndex === -1 ? 'None (Timeout)' : item.options[item.selectedIndex]}
                        </div>
                        <div className="text-slate-700">
                          <span className="font-bold">Correct Answer:</span>{' '}
                          <span className="text-emerald-800 font-bold">{item.options[item.correctIndex]}</span>
                        </div>
                        <div className="text-slate-500 italic pt-1">
                          <strong>Explanation:</strong> {item.explanation}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-slate-100">
              {canAdvance && (
                <button
                  onClick={() => startQuiz(selectedSubject, nextLevelNum)}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Proceed to Level {nextLevelNum} (10 Qs)</span>
                </button>
              )}
              <button
                onClick={() => startQuiz(selectedSubject, selectedLevel)}
                className="px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retry Level {selectedLevel} (10 Qs)</span>
              </button>
              <button
                onClick={() => setQuizState('idle')}
                className="px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-all cursor-pointer"
              >
                Back to 4-Level Roadmap
              </button>
            </div>
          </div>
        );
      })()}

      {/* CONFIRMATION MODAL ON SUBJECT SWITCH DURING ACTIVE QUIZ */}
      {pendingSubjectSwitch && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl border border-amber-300 space-y-4 animate-in zoom-in-95">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto text-2xl">
              ⚠️
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-lg font-bold text-slate-900">
                Leave Current Quiz?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You are currently taking Level {selectedLevel} for <strong>{selectedSubject}</strong>. If you switch to <strong>{pendingSubjectSwitch}</strong> now, your progress will be discarded.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={cancelSubjectSwitch}
                className="py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
              >
                Stay in Quiz
              </button>
              <button
                onClick={confirmSubjectSwitch}
                className="py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs cursor-pointer"
              >
                Switch to {pendingSubjectSwitch}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* UPGRADE PROMPT MODAL FOR LOCKED SUBJECTS */}
      <PlanUpgradePromptModal
        isOpen={lockedSubjectPrompt.isOpen}
        onClose={() => setLockedSubjectPrompt(prev => ({ ...prev, isOpen: false }))}
        currentStudent={currentStudent}
        featureTitle={lockedSubjectPrompt.subjectName}
        requiredPlan="basic"
        upgradeMessage={lockedSubjectPrompt.reason}
        onSelectUpgradePlan={(plan: 'basic' | 'premium') => {
          setLockedSubjectPrompt(prev => ({ ...prev, isOpen: false }));
          onOpenMembership?.(plan);
        }}
      />
    </div>
  );
};
