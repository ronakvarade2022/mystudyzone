import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { QuizLevel } from '../types';
import { DAILY_CRICKET_QUESTIONS_BANK, CricketQuizQuestion } from '../data/cricketQuizData';
import { randomizeQuizQuestions, shuffleSingleQuestionOptions } from '../services/answerRandomizerService';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  Flame, 
  Sparkles, 
  Clock, 
  CheckCircle, 
  XCircle, 
  RotateCcw, 
  ChevronRight, 
  Award, 
  ShieldCheck, 
  Calendar,
  AlertCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export const CricketChampionsView: React.FC = () => {
  const { currentStudent, submitQuizAttempt } = useApp();

  const [selectedLevel, setSelectedLevel] = useState<QuizLevel>(1);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'completed'>('idle');
  const [questions, setQuestions] = useState<CricketQuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(30); // 30s per question thinking timer
  const [score, setScore] = useState<number>(0);

  const [answersLog, setAnswersLog] = useState<{
    questionId: string;
    questionText: string;
    options: string[];
    selectedIndex: number;
    correctIndex: number;
    isCorrect: boolean;
    explanation: string;
    category: string;
  }[]>([]);

  // Format today's date
  const todayFormatted = new Intl.DateTimeFormat('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date());

  // Timer countdown
  useEffect(() => {
    if (gameState !== 'playing' || isAnswerChecked) return;

    if (timeLeft <= 0) {
      handleCheckAnswer(true); // Auto-submit on timer expiry
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, isAnswerChecked, timeLeft]);

  // Start quiz with randomized answer positions
  const startCricketQuiz = (lvl: QuizLevel) => {
    setSelectedLevel(lvl);
    const rawQuestions = DAILY_CRICKET_QUESTIONS_BANK[lvl] || [];
    
    // Convert to QuizQuestion format for answerRandomizerService
    const formattedForRandomizer = rawQuestions.map(q => ({
      id: q.id,
      classLevel: 'Class 5' as any,
      subject: 'General Knowledge' as any,
      questionText: q.question,
      options: [...q.options] as [string, string, string, string],
      correctIndex: q.correctIndex,
      explanation: q.explanation,
      normalizedHash: q.id,
      difficulty: 'medium' as any,
      timesAttempted: 0,
      timesCorrect: 0,
      status: 'approved' as any,
      author: 'system' as any,
      createdAt: new Date().toISOString()
    }));

    // Randomize answer positions independently to prevent predictable sequences
    const randomized = randomizeQuizQuestions(formattedForRandomizer, true);

    const readyQuestions: CricketQuizQuestion[] = randomized.map((q, idx) => ({
      id: q.id,
      level: lvl,
      category: rawQuestions[idx].category,
      question: q.questionText,
      options: q.options,
      correctIndex: q.correctIndex,
      explanation: q.explanation
    }));

    setQuestions(readyQuestions);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setTimeLeft(30);
    setScore(0);
    setAnswersLog([]);
    setGameState('playing');
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswerChecked) return;
    setSelectedOption(idx);
  };

  const handleCheckAnswer = (isTimeOut: boolean = false) => {
    if (isAnswerChecked) return;

    const currentQ = questions[currentIndex];
    const chosen = isTimeOut ? -1 : selectedOption ?? -1;
    const isCorrect = chosen === currentQ.correctIndex;

    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setAnswersLog(prev => [
      ...prev,
      {
        questionId: currentQ.id,
        questionText: currentQ.question,
        options: currentQ.options,
        selectedIndex: chosen,
        correctIndex: currentQ.correctIndex,
        isCorrect,
        explanation: currentQ.explanation,
        category: currentQ.category
      }
    ]);

    setIsAnswerChecked(true);
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setTimeLeft(30);
    } else {
      // Completed all 10 questions!
      setGameState('completed');

      // Confetti celebration if scored 7 or higher
      if (score >= 7) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }

      // Record attempt in platform state
      if (currentStudent) {
        submitQuizAttempt({
          studentId: currentStudent.id,
          studentName: currentStudent.name,
          classLevel: currentStudent.classLevel,
          subject: 'General Knowledge',
          level: selectedLevel,
          totalQuestions: 10,
          correctCount: score,
          incorrectCount: 10 - score,
          unansweredCount: 0,
          scorePercent: Math.round((score / 10) * 100),
          timeTakenSeconds: 300,
          pointsEarned: score * 10,
          passed: score >= 6,
          questionIds: questions.map(q => q.id),
          answers: answersLog
        });
      }
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white rounded-3xl p-6 sm:p-8 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">🏏</span>
              <h1 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
                Cricket Champions – Daily Quiz
              </h1>
            </div>
            <p className="text-emerald-100 text-xs sm:text-sm font-medium mt-1">
              Test your cricket knowledge with today's verified cricket affairs, match records, IPL, and World Cup moments!
            </p>
          </div>

          <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/20 text-xs font-bold self-start sm:self-auto">
            <Calendar className="w-4 h-4 text-emerald-200" />
            <span>{todayFormatted}</span>
          </div>
        </div>

        {/* 4 Levels Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-6">
          {[
            { lvl: 1, title: 'Level 1: Beginner', desc: 'Basics & Popular Heroes', color: 'bg-emerald-500/30 border-emerald-300' },
            { lvl: 2, title: 'Level 2: Intermediate', desc: 'IPL & National Updates', color: 'bg-teal-500/30 border-teal-300' },
            { lvl: 3, title: 'Level 3: Advanced', desc: 'Records & Match Tactics', color: 'bg-cyan-500/30 border-cyan-300' },
            { lvl: 4, title: 'Level 4: Champion', desc: 'World Cup & Master Trivia', color: 'bg-amber-500/30 border-amber-300' }
          ].map(item => {
            const isSel = selectedLevel === item.lvl && gameState !== 'idle';
            return (
              <button
                key={item.lvl}
                onClick={() => startCricketQuiz(item.lvl as QuizLevel)}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer backdrop-blur-sm ${
                  isSel ? 'bg-white text-emerald-950 font-bold shadow-lg scale-[1.02]' : `${item.color} text-white hover:bg-white/20`
                }`}
              >
                <div className="font-extrabold text-xs">{item.title}</div>
                <div className={`text-[10px] mt-0.5 ${isSel ? 'text-emerald-800' : 'text-emerald-100'}`}>{item.desc}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* QUIZ ARENA */}
      {gameState === 'playing' && questions.length > 0 && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200 shadow-sm space-y-6">
          {/* Header row: progress & thinking timer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                Level {selectedLevel} • Q{currentIndex + 1} of 10
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Category: {questions[currentIndex].category}
              </span>
            </div>

            {/* Thinking Timer */}
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${
              timeLeft <= 5 ? 'bg-red-50 text-red-600 border-red-300 animate-pulse' : 'bg-emerald-50 text-emerald-800 border-emerald-300'
            }`}>
              <Clock className="w-3.5 h-3.5" />
              <span>{timeLeft}s remaining</span>
            </div>
          </div>

          {/* Question Text */}
          <h2 className="text-lg sm:text-xl font-display font-extrabold text-slate-900 leading-snug">
            {questions[currentIndex].question}
          </h2>

          {/* 4 Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {questions[currentIndex].options.map((optionText, optIdx) => {
              const isSelected = selectedOption === optIdx;
              const isCorrect = optIdx === questions[currentIndex].correctIndex;

              let style = 'bg-slate-50 border-slate-200 text-slate-800 hover:border-emerald-400 hover:bg-emerald-50/50';
              if (isAnswerChecked) {
                if (isCorrect) {
                  style = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold';
                } else if (isSelected && !isCorrect) {
                  style = 'bg-red-100 border-red-400 text-red-950 font-bold';
                } else {
                  style = 'bg-slate-50 border-slate-200 text-slate-400';
                }
              } else if (isSelected) {
                style = 'bg-emerald-600 border-emerald-600 text-white font-bold shadow-xs';
              }

              return (
                <button
                  key={optIdx}
                  disabled={isAnswerChecked}
                  onClick={() => handleSelectOption(optIdx)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between text-xs sm:text-sm ${style}`}
                >
                  <span className="flex items-center gap-2">
                    <span className="font-extrabold w-5">{String.fromCharCode(65 + optIdx)}.</span>
                    <span>{optionText}</span>
                  </span>
                  {isAnswerChecked && isCorrect && <CheckCircle className="w-4 h-4 text-emerald-700" />}
                  {isAnswerChecked && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-red-700" />}
                </button>
              );
            })}
          </div>

          {/* Answer Check / Next CTA */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            {!isAnswerChecked ? (
              <button
                onClick={() => handleCheckAnswer(false)}
                disabled={selectedOption === null}
                className="px-6 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer"
              >
                Confirm Answer
              </button>
            ) : (
              <div className="w-full space-y-4">
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs text-slate-700">
                  <strong className="text-emerald-900 block mb-1">
                    {selectedOption === questions[currentIndex].correctIndex ? '✅ Correct!' : '❌ Incorrect'}
                  </strong>
                  <span>{questions[currentIndex].explanation}</span>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>{currentIndex < 9 ? 'Next Question' : 'Complete Daily Quiz'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* COMPLETED REVIEW SCREEN */}
      {gameState === 'completed' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200 shadow-sm space-y-8 animate-in zoom-in-95">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center text-3xl shadow-xs">
              🏏
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
              Daily Cricket Quiz Completed!
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              You scored <strong className="text-emerald-700 text-base">{score} / 10</strong> ({score * 10}%) in Level {selectedLevel}!
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex justify-center gap-3">
            <button
              onClick={() => startCricketQuiz(selectedLevel)}
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Level {selectedLevel}</span>
            </button>
            {selectedLevel < 4 && (
              <button
                onClick={() => startCricketQuiz((selectedLevel + 1) as QuizLevel)}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer"
              >
                <span>Play Level {selectedLevel + 1}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* 10 Questions Detailed Explanation Review */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="font-display font-bold text-base text-slate-900">
              Review Questions & Explanations:
            </h3>

            <div className="space-y-3">
              {answersLog.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">
                      Q{idx + 1}. {item.questionText}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                      item.isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {item.isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>

                  <p className="text-slate-600">
                    <strong>Correct Answer: </strong>
                    <span className="text-emerald-800 font-semibold">{item.options[item.correctIndex]}</span>
                  </p>

                  <div className="p-2.5 rounded-xl bg-white border border-emerald-100 text-slate-600 leading-relaxed">
                    <strong className="text-emerald-950">Explanation: </strong>
                    {item.explanation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* IDLE SCREEN INSTRUCTIONS */}
      {gameState === 'idle' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200 shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              🏆
            </div>
            <div>
              <h2 className="font-display font-extrabold text-lg text-slate-900">
                How Daily Cricket Champions Works
              </h2>
              <p className="text-xs text-slate-500">
                Build your cricket knowledge while having fun every single day!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-1">
              <span className="font-extrabold text-emerald-900 block">1. Daily Verified Updates</span>
              <p className="text-slate-600">
                Current news from international matches, Indian team tours, IPL, WPL, and ICC trophies.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-100 space-y-1">
              <span className="font-extrabold text-teal-900 block">2. Four Progressive Levels</span>
              <p className="text-slate-600">
                Beginner to Champion levels. 10 questions each with 30s thinking timers per question.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100 space-y-1">
              <span className="font-extrabold text-amber-900 block">3. Champion Points & Badges</span>
              <p className="text-slate-600">
                Earn 10 points per correct answer, build daily streaks, and unlock special Cricket Champion badges!
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => startCricketQuiz(1)}
              className="px-8 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Play Today's Beginner Quiz</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
