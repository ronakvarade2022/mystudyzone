import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  AI_ACADEMY_MODULES, 
  FUTURE_SKILLS_COURSES, 
  AIModule, 
  AILesson,
  FutureSkillCourse 
} from '../data/futureSkillsData';
import confetti from 'canvas-confetti';
import { 
  Crown, 
  Lock, 
  Sparkles, 
  BookOpen, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Award, 
  HelpCircle, 
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  GraduationCap,
  Play,
  Layers,
  Code2
} from 'lucide-react';

interface FutureSkillsViewProps {
  onOpenMembership: () => void;
}

export const FutureSkillsView: React.FC<FutureSkillsViewProps> = ({ onOpenMembership }) => {
  const { currentStudent } = useApp();

  // Active view: course tracks list vs active AI academy module/lesson
  const [selectedCourseId, setSelectedCourseId] = useState<string>('ai-academy');
  const [activeModuleIndex, setActiveModuleIndex] = useState<number>(0);
  const [activeLessonIndex, setActiveLessonIndex] = useState<number>(0);

  // Lesson quiz state
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);

  // Completed lessons stored in localStorage
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('vc_ai_completed_lessons');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Check if current user has the ₹99 Premium Plan
  const hasPremiumAccess = currentStudent?.plan === 'premium';

  const activeModule: AIModule = AI_ACADEMY_MODULES[activeModuleIndex] || AI_ACADEMY_MODULES[0];
  const activeLesson: AILesson = activeModule.lessons[activeLessonIndex] || activeModule.lessons[0];

  const totalLessons = 24;
  const completedLessonsCount = Object.keys(completedLessons).length;
  const courseProgressPercent = Math.round((completedLessonsCount / totalLessons) * 100);

  const handleSelectLesson = (modIdx: number, lesIdx: number) => {
    setActiveModuleIndex(modIdx);
    setActiveLessonIndex(lesIdx);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleSelectQuizOption = (qIdx: number, optIdx: number) => {
    if (quizSubmitted) return;
    setQuizAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    activeLesson.quiz.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correctIndex) {
        score++;
      }
    });

    setQuizScore(score);
    setQuizSubmitted(true);

    if (score >= 2) {
      // Mark lesson completed
      const updated = { ...completedLessons, [activeLesson.id]: true };
      setCompletedLessons(updated);
      try {
        localStorage.setItem('vc_ai_completed_lessons', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-900 to-amber-900 text-white p-6 sm:p-8 shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-purple-500/30 px-3 py-1 rounded-full text-xs font-extrabold tracking-wider text-purple-200 border border-purple-400/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>FUTURE SKILLS & TECHNOLOGY HUB</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight">
              AI Learning Academy & Next-Gen Skills
            </h1>
            <p className="text-purple-100 text-xs sm:text-sm leading-relaxed">
              Equip students with 21st-century skills: Artificial Intelligence, Machine Learning, Computer Vision, Robotics, and Responsible Ethics!
            </p>
          </div>

          {/* Plan Status Pill */}
          <div className="bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center shrink-0">
            <span className="text-[10px] uppercase font-bold text-amber-300 block">Subscription Tier</span>
            <div className="flex items-center justify-center gap-1.5 mt-0.5">
              <Crown className={`w-4 h-4 ${hasPremiumAccess ? 'text-amber-400' : 'text-slate-400'}`} />
              <span className="font-extrabold text-sm text-white">
                {hasPremiumAccess ? '₹99 Premium Active' : currentStudent?.plan === 'basic' ? '₹49 Basic Plan' : 'Free Tier'}
              </span>
            </div>
            {!hasPremiumAccess && (
              <button
                onClick={onOpenMembership}
                className="mt-2 w-full px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-xs shadow-md cursor-pointer transition-all"
              >
                Unlock ₹99 Plan
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 4 Course Tracks Switcher */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {FUTURE_SKILLS_COURSES.map(course => {
          const isSelected = selectedCourseId === course.id;
          return (
            <button
              key={course.id}
              onClick={() => setSelectedCourseId(course.id)}
              className={`text-left p-4 rounded-3xl transition-all cursor-pointer border flex flex-col justify-between ${
                isSelected
                  ? 'bg-purple-900 text-white border-purple-500 shadow-lg scale-102'
                  : 'bg-white hover:bg-purple-50/50 border-purple-100 text-slate-800 shadow-xs'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{course.icon}</span>
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                    course.status === 'ACTIVE'
                      ? isSelected ? 'bg-amber-400 text-amber-950' : 'bg-emerald-100 text-emerald-800'
                      : isSelected ? 'bg-purple-800 text-purple-200' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {course.status === 'ACTIVE' ? 'Active Course' : 'COMING SOON'}
                  </span>
                </div>
                <h3 className={`font-display font-extrabold text-sm ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                  {course.title}
                </h3>
                <p className={`text-[11px] line-clamp-2 ${isSelected ? 'text-purple-200' : 'text-slate-500'}`}>
                  {course.description}
                </p>
              </div>

              <div className={`mt-3 pt-2 border-t text-[10px] font-bold flex items-center justify-between ${
                isSelected ? 'border-purple-800 text-purple-300' : 'border-slate-100 text-slate-400'
              }`}>
                <span>{course.modulesCount} Modules • {course.lessonsCount} Lessons</span>
                <span>{course.duration}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Course Content Arena */}
      {selectedCourseId === 'ai-academy' ? (
        <div className="space-y-6">
          {/* AI Learning Academy Overview Card */}
          <div className="bg-white rounded-3xl p-6 border border-purple-200 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🤖</span>
                  <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
                    AI LEARNING ACADEMY
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Learn Artificial Intelligence from Beginner to Advanced • 8 Modules • 24 Interactive Lessons with MCQ Assessments.
                </p>
              </div>

              {/* Course Progress */}
              <div className="bg-purple-50 p-4 rounded-2xl border border-purple-200 min-w-[200px] text-center">
                <div className="flex items-center justify-between text-xs font-bold text-purple-900 mb-1">
                  <span>Course Progress</span>
                  <span>{courseProgressPercent}%</span>
                </div>
                <div className="w-full h-2.5 bg-purple-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-600 to-amber-500 transition-all duration-500 rounded-full"
                    style={{ width: `${courseProgressPercent}%` }}
                  />
                </div>
                <span className="text-[10px] text-slate-500 block mt-1 font-semibold">
                  {completedLessonsCount} of 24 Lessons Mastered
                </span>
              </div>
            </div>
          </div>

          {/* Lock Gate for Non-Premium Users */}
          {!hasPremiumAccess ? (
            <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-purple-500/10 rounded-3xl p-8 border-2 border-amber-400/80 shadow-xl text-center space-y-6">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center text-4xl shadow-lg shadow-orange-500/30">
                <Lock className="w-10 h-10 text-white" />
              </div>

              <div className="max-w-xl mx-auto space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-950 font-extrabold text-xs border border-amber-300">
                  <Crown className="w-3.5 h-3.5 text-amber-600" />
                  PREMIUM ₹99 PLAN EXCLUSIVE
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
                  Unlock the Complete AI Learning Academy
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  The 8-module, 24-lesson Artificial Intelligence course is exclusively accessible to students on the <strong>Champion Premium (₹99)</strong> plan.
                </p>
              </div>

              <div className="max-w-md mx-auto p-4 rounded-2xl bg-white border border-amber-200 text-left text-xs space-y-2 shadow-xs">
                <p className="font-extrabold text-amber-900">🌟 What is included with the ₹99 Premium Plan:</p>
                <ul className="space-y-1.5 text-slate-700 text-[11px]">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>All 8 Modules & 24 Lessons of AI Learning Academy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Interactive Lesson MCQ Quizzes & AI Champion Certificates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>MSCE Scholarship Practice Sets (Std 4 & Std 7)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Daily Cricket Quiz Arena & Full Brain Puzzles</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={onOpenMembership}
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-sm shadow-xl shadow-orange-500/20 cursor-pointer transition-all hover:scale-102"
              >
                Upgrade to Premium Plan (₹99)
              </button>
            </div>
          ) : (
            /* Premium Content: Active Lesson Workspace & Modules Sidebar */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Active Lesson Workspace (8 cols) */}
              <div className="lg:col-span-8 space-y-6">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-200 shadow-md space-y-6">
                  {/* Lesson Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-purple-100 pb-4">
                    <div>
                      <span className="text-[11px] font-extrabold text-purple-700 uppercase tracking-wider block">
                        Module {activeModule.moduleNumber}: {activeModule.title}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 mt-0.5">
                        Lesson {activeLesson.order}: {activeLesson.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-bold flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {activeLesson.durationMinutes} min
                      </span>
                      {completedLessons[activeLesson.id] && (
                        <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-bold flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5" />
                          Passed
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Lesson Readings */}
                  <div className="space-y-4 text-slate-800 leading-relaxed text-sm sm:text-base">
                    {activeLesson.readings.map((paragraph, pIdx) => (
                      <p key={pIdx} className="font-serif">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Key Takeaway Callout */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-amber-50 border border-purple-200 flex items-start gap-3">
                    <span className="text-2xl">💡</span>
                    <div>
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-purple-900">
                        Key Lesson Takeaway:
                      </h4>
                      <p className="text-sm font-semibold text-purple-950 mt-0.5">
                        {activeLesson.keyTakeaway}
                      </p>
                    </div>
                  </div>

                  {/* Lesson Assessment MCQ Quiz */}
                  <div className="pt-4 border-t border-purple-100 space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-amber-600" />
                        <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                          Lesson Knowledge Check (3 Questions)
                        </h4>
                      </div>
                      {quizSubmitted && (
                        <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                          quizScore >= 2 ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                        }`}>
                          Score: {quizScore} / 3 ({quizScore >= 2 ? 'PASSED 🎉' : 'TRY AGAIN'})
                        </span>
                      )}
                    </div>

                    <div className="space-y-4">
                      {activeLesson.quiz.map((q, qIdx) => {
                        const selectedOpt = quizAnswers[qIdx];
                        return (
                          <div key={qIdx} className="p-4 rounded-2xl bg-purple-50/40 border border-purple-100 space-y-2.5">
                            <p className="text-xs sm:text-sm font-bold text-slate-900">
                              Q{qIdx + 1}. {q.question}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {q.options.map((opt, optIdx) => {
                                const isSelected = selectedOpt === optIdx;
                                const isCorrect = q.correctIndex === optIdx;
                                return (
                                  <button
                                    key={optIdx}
                                    onClick={() => handleSelectQuizOption(qIdx, optIdx)}
                                    disabled={quizSubmitted}
                                    className={`p-2.5 rounded-xl text-xs text-left font-medium transition-all cursor-pointer border ${
                                      quizSubmitted
                                        ? isCorrect
                                          ? 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold'
                                          : isSelected
                                          ? 'bg-red-100 border-red-300 text-red-900 font-bold'
                                          : 'bg-white border-slate-200 text-slate-500 opacity-60'
                                        : isSelected
                                        ? 'bg-purple-600 text-white border-purple-700 font-bold shadow-xs'
                                        : 'bg-white hover:bg-purple-50 border-purple-200 text-slate-700'
                                    }`}
                                  >
                                    <span className="font-bold mr-1.5">{String.fromCharCode(65 + optIdx)}.</span>
                                    {opt}
                                  </button>
                                );
                              })}
                            </div>

                            {quizSubmitted && (
                              <p className="text-[11px] text-slate-600 italic pt-1">
                                💡 Explanation: {q.explanation}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Quiz Action Buttons */}
                    <div className="flex items-center justify-between pt-2">
                      {!quizSubmitted ? (
                        <button
                          onClick={handleSubmitQuiz}
                          disabled={Object.keys(quizAnswers).length < 3}
                          className="px-6 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 disabled:opacity-40 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer"
                        >
                          Submit & Check Answers
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setQuizAnswers({});
                            setQuizSubmitted(false);
                            setQuizScore(0);
                          }}
                          className="px-5 py-2 rounded-xl border border-purple-300 bg-white hover:bg-purple-50 text-purple-900 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          Retake Quiz
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: 8 Modules & 24 Lessons Index (4 cols) */}
              <div className="lg:col-span-4 space-y-4">
                <div className="bg-white rounded-3xl p-5 border border-purple-200 shadow-md space-y-3 sticky top-24 max-h-[620px] overflow-y-auto custom-scrollbar">
                  <div className="flex items-center justify-between border-b border-purple-100 pb-2">
                    <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-purple-600" />
                      Course Syllabus (8 Modules)
                    </span>
                    <span className="text-[10px] font-bold bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">
                      24 Lessons
                    </span>
                  </div>

                  <div className="space-y-3">
                    {AI_ACADEMY_MODULES.map((module, mIdx) => (
                      <div key={module.id} className="space-y-1">
                        <div className="px-2 py-1 text-[11px] font-extrabold text-purple-950 flex items-center justify-between bg-purple-50 rounded-lg">
                          <span>{module.icon} Mod {module.moduleNumber}: {module.title}</span>
                          <span className="text-[9px] text-purple-600 font-bold">{module.badge}</span>
                        </div>

                        <div className="space-y-1 pl-2">
                          {module.lessons.map((lesson, lIdx) => {
                            const isCurrent = activeModuleIndex === mIdx && activeLessonIndex === lIdx;
                            const isDone = completedLessons[lesson.id];
                            return (
                              <button
                                key={lesson.id}
                                onClick={() => handleSelectLesson(mIdx, lIdx)}
                                className={`w-full text-left p-2 rounded-xl text-xs flex items-center justify-between gap-2 transition-all cursor-pointer ${
                                  isCurrent
                                    ? 'bg-purple-700 text-white font-bold shadow-xs'
                                    : 'hover:bg-purple-50 text-slate-700'
                                }`}
                              >
                                <span className="truncate">
                                  {lesson.order}. {lesson.title}
                                </span>
                                {isDone && (
                                  <CheckCircle className={`w-3.5 h-3.5 shrink-0 ${isCurrent ? 'text-amber-300' : 'text-emerald-600'}`} />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Preview / Coming Soon Card for Other Tracks */
        <div className="bg-white rounded-3xl p-10 border border-purple-200 shadow-md text-center max-w-xl mx-auto space-y-4">
          <div className="w-16 h-16 mx-auto rounded-3xl bg-purple-100 text-purple-800 flex items-center justify-center text-3xl">
            {FUTURE_SKILLS_COURSES.find(c => c.id === selectedCourseId)?.icon}
          </div>
          <h3 className="text-2xl font-display font-extrabold text-slate-900">
            {FUTURE_SKILLS_COURSES.find(c => c.id === selectedCourseId)?.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            {FUTURE_SKILLS_COURSES.find(c => c.id === selectedCourseId)?.description}
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 font-extrabold text-xs border border-amber-300">
            <span>COMING SOON FOR ALL SUBSCRIBERS</span>
          </div>
          <div className="pt-2">
            <button
              onClick={() => setSelectedCourseId('ai-academy')}
              className="px-6 py-2.5 rounded-xl bg-purple-700 text-white text-xs font-bold hover:bg-purple-800 cursor-pointer"
            >
              Explore AI Learning Academy
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
