import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  ScholarshipClass, 
  ScholarshipLanguage, 
  ScholarshipQuestion, 
  ScholarshipSection,
  MSCE_LANGUAGES, 
  SCHOLARSHIP_SECTION_BREAKDOWN,
  getScholarshipSetQuestions,
  getDynamicScholarshipQuestions 
} from '../data/scholarshipData';
import { randomizeQuizQuestions } from '../services/answerRandomizerService';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  GraduationCap, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Bookmark, 
  RotateCcw, 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft, 
  Languages, 
  FileText, 
  Award, 
  AlertTriangle,
  Layers,
  Sparkles,
  Info,
  BookOpen
} from 'lucide-react';

export const ScholarshipChampionsView: React.FC = () => {
  const { currentStudent, recordScholarshipAttempt } = useApp();

  // Active configurations
  const [selectedClass, setSelectedClass] = useState<ScholarshipClass>('Std 4th (PSE)');
  const [selectedLanguage, setSelectedLanguage] = useState<ScholarshipLanguage>('Marathi');
  const [selectedSetNum, setSelectedSetNum] = useState<number>(1);
  const [activeSectionFilter, setActiveSectionFilter] = useState<ScholarshipSection | 'All'>('All');

  // Exam flow states
  const [examState, setExamState] = useState<'idle' | 'taking' | 'submitted'>('idle');
  const [questions, setQuestions] = useState<ScholarshipQuestion[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  
  // Student answer states
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  
  // Timers: 45 minutes (2700s) for 30 questions standard scholarship practice set
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(2700);
  const [totalTimeSpent, setTotalTimeSpent] = useState<number>(0);

  // Results calculation: Total marks & Section-wise marks
  const [totalMarksObtained, setTotalMarksObtained] = useState<number>(0);
  const [maxMarks, setMaxMarks] = useState<number>(60);
  const [sectionScores, setSectionScores] = useState<Record<ScholarshipSection, { obtained: number; max: number; correct: number; total: number }>>({
    'First Language': { obtained: 0, max: 10, correct: 0, total: 5 },
    'Mathematics': { obtained: 0, max: 20, correct: 0, total: 10 },
    'Second Language': { obtained: 0, max: 10, correct: 0, total: 5 },
    'Intelligence Test': { obtained: 0, max: 20, correct: 0, total: 10 }
  });

  // Countdown timer effect
  useEffect(() => {
    if (examState !== 'taking') return;

    if (timeRemainingSeconds <= 0) {
      handleFinalSubmit(); // Auto-submit when time expires
      return;
    }

    const timer = setInterval(() => {
      setTimeRemainingSeconds(prev => prev - 1);
      setTotalTimeSpent(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [examState, timeRemainingSeconds]);

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Start exam / practice set (Guaranteed exactly 30 questions)
  const startScholarshipSet = (setNumber: number) => {
    setSelectedSetNum(setNumber);
    setActiveSectionFilter('All');

    // Retrieve exactly 30 unique questions for this class and set number, prioritizing unattempted questions
    const rawSetQuestions = getDynamicScholarshipQuestions(
      selectedClass, 
      setNumber, 
      currentStudent?.attemptedScholarshipQuestionIds || []
    );

    // Format for independent option randomizer to strictly eliminate predictable ABCD patterns
    const formatted = rawSetQuestions.map(q => ({
      id: q.id,
      classLevel: (selectedClass === 'Std 4th (PSE)' ? 'Class 4' : 'Class 7') as any,
      subject: 'Mathematics' as any,
      questionText: q.questionText[selectedLanguage] || q.questionText.English,
      options: [...(q.options[selectedLanguage] || q.options.English)] as [string, string, string, string],
      correctIndex: q.correctIndex,
      explanation: q.explanation[selectedLanguage] || q.explanation.English,
      normalizedHash: q.id,
      difficulty: q.difficulty as any,
      timesAttempted: 0,
      timesCorrect: 0,
      status: 'approved' as any,
      author: 'system' as any,
      createdAt: new Date().toISOString()
    }));

    const randomized = randomizeQuizQuestions(formatted, true);

    const finalQuestions: ScholarshipQuestion[] = randomized.map((rq, idx) => {
      const orig = rawSetQuestions[idx];
      return {
        ...orig,
        options: {
          ...orig.options,
          [selectedLanguage]: rq.options
        },
        correctIndex: rq.correctIndex
      };
    });

    setQuestions(finalQuestions);
    setCurrentQIndex(0);
    setUserAnswers({});
    setMarkedForReview({});
    setTimeRemainingSeconds(2700); // 45 minutes for 30 questions
    setTotalTimeSpent(0);
    setExamState('taking');
  };

  const handleSelectOption = (qId: string, optionIndex: number) => {
    if (examState !== 'taking') return;
    setUserAnswers(prev => ({
      ...prev,
      [qId]: optionIndex
    }));
  };

  const handleClearResponse = (qId: string) => {
    if (examState !== 'taking') return;
    setUserAnswers(prev => {
      const next = { ...prev };
      delete next[qId];
      return next;
    });
  };

  const handleToggleMarkForReview = (qId: string) => {
    setMarkedForReview(prev => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  const handleFinalSubmit = () => {
    let obtainedTotal = 0;
    const scores: Record<ScholarshipSection, { obtained: number; max: number; correct: number; total: number }> = {
      'First Language': { obtained: 0, max: 10, correct: 0, total: 5 },
      'Mathematics': { obtained: 0, max: 20, correct: 0, total: 10 },
      'Second Language': { obtained: 0, max: 10, correct: 0, total: 5 },
      'Intelligence Test': { obtained: 0, max: 20, correct: 0, total: 10 }
    };

    questions.forEach(q => {
      const chosen = userAnswers[q.id];
      const marks = q.marks || 2;
      const sec = q.section;

      if (chosen !== undefined && chosen === q.correctIndex) {
        obtainedTotal += marks;
        if (scores[sec]) {
          scores[sec].obtained += marks;
          scores[sec].correct += 1;
        }
      }
    });

    setTotalMarksObtained(obtainedTotal);
    setMaxMarks(60); // Exactly 30 questions × 2 marks each = 60 marks
    setSectionScores(scores);
    setExamState('submitted');

    // Persist attempt to Firebase Firestore and update student question history
    if (recordScholarshipAttempt) {
      recordScholarshipAttempt(
        selectedClass,
        selectedSetNum,
        selectedLanguage,
        questions,
        userAnswers,
        obtainedTotal,
        60,
        scores
      );
    }

    // Confetti celebration if passed (>= 60%)
    if (obtainedTotal >= 36) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const activeQ = questions[currentQIndex];

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-16">
      {/* MSCE Header Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white rounded-3xl p-6 sm:p-8 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">🏆</span>
              <h1 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
                Maharashtra MSCE Scholarship Champions
              </h1>
            </div>
            <p className="text-amber-100 text-xs sm:text-sm font-medium mt-1">
              Official MSCE 30-Question Practice Sets: First Language (5) • Mathematics (10) • Second Language (5) • Intelligence Test (10).
            </p>
          </div>

          {/* Class Switcher Pill */}
          <div className="flex items-center gap-1.5 bg-black/25 p-1 rounded-2xl border border-white/20 self-start md:self-auto">
            <button
              onClick={() => { setSelectedClass('Std 4th (PSE)'); setExamState('idle'); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedClass === 'Std 4th (PSE)' ? 'bg-white text-amber-950 shadow-xs' : 'text-amber-100 hover:text-white'
              }`}
            >
              Std 4th – Primary (PSE)
            </button>
            <button
              onClick={() => { setSelectedClass('Std 7th (UPS)'); setExamState('idle'); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedClass === 'Std 7th (UPS)' ? 'bg-white text-amber-950 shadow-xs' : 'text-amber-100 hover:text-white'
              }`}
            >
              Std 7th – Upper Primary (UPS)
            </button>
          </div>
        </div>

        {/* Language Selection Bar (3 Official MSCE Languages: Marathi, English, Hindi) */}
        <div className="mt-6 pt-5 border-t border-white/20 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 font-bold text-amber-100">
            <Languages className="w-4 h-4 text-amber-300" />
            <span>Official Examination Medium (Marathi, English, Hindi):</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {MSCE_LANGUAGES.map(lang => (
              <button
                key={lang.id}
                onClick={() => setSelectedLanguage(lang.id)}
                disabled={examState === 'taking'}
                className={`px-3 py-1 rounded-xl font-bold transition-all cursor-pointer text-xs ${
                  selectedLanguage === lang.id 
                    ? 'bg-white text-amber-950 shadow-xs' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                } ${examState === 'taking' ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ACTIVE EXAMINATION INTERFACE */}
      {examState === 'taking' && activeQ && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Question Arena (3 Cols) */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-sm space-y-6">
            {/* Top Bar: Section Badge, Question Counter, Timer */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="bg-amber-100 text-amber-900 font-extrabold text-xs px-3 py-1 rounded-full">
                  Set #{selectedSetNum} • {activeQ.section}
                </span>
                <span className="text-xs font-bold text-slate-500">
                  Question {currentQIndex + 1} of 30
                </span>
              </div>

              {/* Countdown Timer with 5-minute warning */}
              <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold border ${
                timeRemainingSeconds < 300 
                  ? 'bg-red-50 text-red-600 border-red-300 animate-pulse' 
                  : 'bg-amber-50 text-amber-900 border-amber-300'
              }`}>
                <Clock className="w-4 h-4" />
                <span>{formatTime(timeRemainingSeconds)} Remaining</span>
              </div>
            </div>

            {/* Section Shortcut Buttons (First Lang 1-5, Maths 6-15, Second Lang 16-20, Intelligence 21-30) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              {SCHOLARSHIP_SECTION_BREAKDOWN.map(s => {
                const isActive = activeQ.section === s.section;
                return (
                  <button
                    key={s.section}
                    onClick={() => setCurrentQIndex(s.startQ - 1)}
                    className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer font-bold ${
                      isActive 
                        ? 'bg-amber-600 text-white border-amber-600 shadow-xs' 
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-amber-50'
                    }`}
                  >
                    <div className="text-[11px] truncate">{s.section}</div>
                    <div className={`text-[10px] ${isActive ? 'text-amber-100' : 'text-slate-400'}`}>
                      Q{s.startQ}–Q{s.endQ} ({s.count} Qs)
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Question Text */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                Difficulty: {activeQ.difficulty.toUpperCase()} • Section: {activeQ.section}
              </span>
              <h2 className="text-base sm:text-xl font-display font-extrabold text-slate-900 leading-snug">
                {activeQ.questionText[selectedLanguage] || activeQ.questionText.English}
              </h2>
            </div>

            {/* 4 Answer Options */}
            <div className="space-y-3">
              {(activeQ.options[selectedLanguage] || activeQ.options.English).map((optionText, optIdx) => {
                const isSelected = userAnswers[activeQ.id] === optIdx;

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(activeQ.id, optIdx)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between text-xs sm:text-sm ${
                      isSelected 
                        ? 'bg-amber-600 border-amber-600 text-white font-bold shadow-xs' 
                        : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-amber-400 hover:bg-amber-50/50'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-black/10 font-bold text-xs">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span>{optionText}</span>
                    </span>
                    {isSelected && <CheckCircle className="w-4 h-4 text-white" />}
                  </button>
                );
              })}
            </div>

            {/* Bottom Controls: Prev, Clear, Mark for Review, Next */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  disabled={currentQIndex === 0}
                  onClick={() => setCurrentQIndex(prev => prev - 1)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 font-bold text-xs flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={() => handleClearResponse(activeQ.id)}
                  disabled={userAnswers[activeQ.id] === undefined}
                  className="px-3 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 text-slate-600 font-semibold text-xs cursor-pointer"
                >
                  Clear Response
                </button>

                <button
                  onClick={() => handleToggleMarkForReview(activeQ.id)}
                  className={`px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 cursor-pointer ${
                    markedForReview[activeQ.id]
                      ? 'bg-purple-100 border-purple-400 text-purple-900'
                      : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>{markedForReview[activeQ.id] ? 'Marked for Review' : 'Mark for Review'}</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                {currentQIndex < questions.length - 1 ? (
                  <button
                    onClick={() => setCurrentQIndex(prev => prev + 1)}
                    className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Save & Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleFinalSubmit}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md cursor-pointer flex items-center gap-1.5"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Submit 30-Q Set</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Question Palette Sidebar (1 Col) */}
          <div className="bg-white rounded-3xl p-6 border border-amber-200 shadow-xs space-y-6">
            <h3 className="font-display font-extrabold text-sm text-slate-900">
              Set #{selectedSetNum} Question Palette
            </h3>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-2 text-[11px] font-medium text-slate-600 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span>Attempted ({Object.keys(userAnswers).length})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-200" />
                <span>Unanswered ({30 - Object.keys(userAnswers).length})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-purple-500" />
                <span>Review ({Object.values(markedForReview).filter(Boolean).length})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span>Total 30 Qs</span>
              </div>
            </div>

            {/* Question Badges Grid (All 30 Questions) */}
            <div className="grid grid-cols-5 gap-2">
              {questions.map((q, idx) => {
                const isAnswered = userAnswers[q.id] !== undefined;
                const isReview = markedForReview[q.id];
                const isCurrent = currentQIndex === idx;

                let badgeColor = 'bg-slate-100 text-slate-700 hover:bg-slate-200';
                if (isAnswered) {
                  badgeColor = 'bg-emerald-500 text-white font-bold';
                }
                if (isReview) {
                  badgeColor = 'bg-purple-600 text-white font-bold ring-2 ring-purple-300';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQIndex(idx)}
                    className={`h-9 rounded-xl text-xs font-bold flex items-center justify-center transition-all cursor-pointer ${badgeColor} ${
                      isCurrent ? 'outline-2 outline-amber-500 outline-offset-2' : ''
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={handleFinalSubmit}
                className="w-full py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Finish & Submit Set</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* COMPLETED RESULTS SCREEN WITH SECTION-WISE SCORE BREAKDOWN */}
      {examState === 'submitted' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-sm space-y-8 animate-in zoom-in-95">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-700 mx-auto flex items-center justify-center text-3xl shadow-xs">
              🎓
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
              Scholarship Practice Set #{selectedSetNum} Completed!
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Medium: <strong className="text-amber-900">{selectedLanguage}</strong> • Class: <strong className="text-amber-900">{selectedClass}</strong>
            </p>
          </div>

          {/* Overall Performance Card */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-center">
              <span className="text-[11px] font-bold text-slate-500 uppercase block">Total Marks</span>
              <span className="text-2xl font-extrabold text-amber-900">{totalMarksObtained} / 60</span>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
              <span className="text-[11px] font-bold text-slate-500 uppercase block">Percentage</span>
              <span className="text-2xl font-extrabold text-emerald-800">
                {Math.round((totalMarksObtained / 60) * 100)}%
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-center">
              <span className="text-[11px] font-bold text-slate-500 uppercase block">Time Taken</span>
              <span className="text-2xl font-extrabold text-blue-900">{formatTime(totalTimeSpent)}</span>
            </div>
            <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-center">
              <span className="text-[11px] font-bold text-slate-500 uppercase block">Status</span>
              <span className="text-base font-extrabold text-purple-900 mt-1 block">
                {totalMarksObtained >= 36 ? '🏆 Qualified!' : 'Keep Practicing'}
              </span>
            </div>
          </div>

          {/* Section-Wise Marks Breakdown (Requirement: Section-wise marks) */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-base text-slate-900">
              Section-Wise Marks Breakdown (MSCE Standard):
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {SCHOLARSHIP_SECTION_BREAKDOWN.map(s => {
                const sc = sectionScores[s.section] || { obtained: 0, max: s.count * 2, correct: 0, total: s.count };
                const pct = Math.round((sc.obtained / (s.count * 2)) * 100);

                return (
                  <div key={s.section} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-xs font-extrabold text-slate-900 block">{s.section}</span>
                    <div className="flex items-baseline justify-between text-xs">
                      <span className="font-bold text-amber-900 text-lg">{sc.obtained} / {s.count * 2} marks</span>
                      <span className="text-slate-500 font-semibold">{sc.correct}/{s.count} correct</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${pct >= 60 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action buttons: Retake or Switch Set */}
          <div className="flex justify-center gap-3">
            <button
              onClick={() => startScholarshipSet(selectedSetNum)}
              className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Set #{selectedSetNum}</span>
            </button>
            <button
              onClick={() => setExamState('idle')}
              className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <ArrowRight className="w-4 h-4" />
              <span>Choose Another Practice Set</span>
            </button>
          </div>

          {/* Complete 30-Question Answer Key & Step-by-Step Solutions in Selected Language */}
          <div className="space-y-4 pt-6 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-base sm:text-lg text-slate-900">
                Detailed Solutions & Step-by-Step Explanations (30 Questions • {selectedLanguage})
              </h3>
              <span className="text-xs text-slate-500">Official MSCE Reasoning</span>
            </div>

            <div className="space-y-4">
              {questions.map((q, idx) => {
                const userChoice = userAnswers[q.id];
                const isCorrect = userChoice !== undefined && userChoice === q.correctIndex;
                const opts = q.options[selectedLanguage] || q.options.English;

                return (
                  <div key={q.id} className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-3 text-xs sm:text-sm">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900 mr-2">
                          {q.section}
                        </span>
                        <span className="font-bold text-slate-900 text-sm">
                          Q{idx + 1}. {q.questionText[selectedLanguage] || q.questionText.English}
                        </span>
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold shrink-0 ${
                        isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {isCorrect ? 'Correct (+2)' : userChoice !== undefined ? 'Incorrect (0)' : 'Unanswered (0)'}
                      </span>
                    </div>

                    {/* Options list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {opts.map((opt, oIdx) => {
                        const isThisCorrect = oIdx === q.correctIndex;
                        const isThisChosen = userChoice === oIdx;

                        let style = 'bg-white border-slate-200 text-slate-700';
                        if (isThisCorrect) style = 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold';
                        else if (isThisChosen && !isThisCorrect) style = 'bg-red-100 border-red-300 text-red-900 font-bold';

                        return (
                          <div key={oIdx} className={`p-2.5 rounded-xl border flex items-center justify-between ${style}`}>
                            <span>{String.fromCharCode(65 + oIdx)}. {opt}</span>
                            {isThisCorrect && <CheckCircle className="w-3.5 h-3.5 text-emerald-700" />}
                          </div>
                        );
                      })}
                    </div>

                    {/* Step-by-Step Explanation */}
                    <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-slate-700 space-y-1">
                      <strong className="text-amber-950 flex items-center gap-1">
                        <Info className="w-3.5 h-3.5 text-amber-700" />
                        Step-by-Step Solution & Reasoning:
                      </strong>
                      <p className="leading-relaxed">
                        {q.explanation[selectedLanguage] || q.explanation.English}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* IDLE SELECTION DASHBOARD: 10 Practice Sets (Set 1 to Set 10) */}
      {examState === 'idle' && (
        <div className="space-y-6">
          {/* Official Pattern Summary Card */}
          <div className="bg-white rounded-3xl p-6 border border-amber-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Official MSCE 30-Question Paper Pattern
              </span>
              <h3 className="font-display font-extrabold text-lg text-slate-900">
                {selectedClass}: Exactly 30 Questions per Practice Set (60 Marks • 45 Mins)
              </h3>
              <p className="text-xs text-slate-600">
                First Language (5 Qs) • Mathematics (10 Qs) • Second Language (5 Qs) • Intelligence Test (10 Qs).
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-amber-900 bg-amber-100 px-3.5 py-2 rounded-xl">
                10 Complete Practice Sets Available
              </span>
            </div>
          </div>

          {/* 10 Independent Practice Sets Grid (Set 1 to Set 10) */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h3 className="font-display font-extrabold text-lg text-slate-900">
                  {selectedClass} – 10 Practice Sets
                </h3>
                <p className="text-xs text-slate-500">
                  Each set contains exactly 30 unique questions (First Lang: 5 • Maths: 10 • Second Lang: 5 • Intelligence: 10).
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Zero-Repetition Engine Active
                </span>
                {currentStudent && (
                  <span className="text-xs font-bold text-blue-800 bg-blue-100 px-3 py-1 rounded-full shadow-2xs">
                    {currentStudent.attemptedScholarshipQuestionIds?.length || 0} Unique Attempted
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(setNum => (
                <div
                  key={setNum}
                  onClick={() => startScholarshipSet(setNum)}
                  className="bg-white rounded-2xl p-5 border border-amber-200/90 shadow-xs hover:border-amber-500 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-extrabold text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-full">
                        Set #{setNum}
                      </span>
                      <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                        30 Questions
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-sm text-slate-900 group-hover:text-amber-800 transition-colors">
                      Practice Set {setNum}
                    </h4>

                    <div className="text-[11px] text-slate-500 space-y-0.5 leading-tight">
                      <p>• First Lang: 5 Qs</p>
                      <p>• Mathematics: 10 Qs</p>
                      <p>• Second Lang: 5 Qs</p>
                      <p>• Intelligence: 10 Qs</p>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700">
                    <span className="flex items-center gap-1 text-slate-400 font-medium text-[11px]">
                      <Clock className="w-3 h-3" />
                      45 mins
                    </span>
                    <span className="flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                      <span>Start Set</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
