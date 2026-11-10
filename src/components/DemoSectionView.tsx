import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles, Users, BookOpen, Brain, Shield, Award, TrendingUp, Gift,
  CheckCircle2, Lock, Crown, Play, Pause, RotateCcw, Volume2, Palette,
  Trophy, HelpCircle, Check, X, RefreshCw, Eraser, ArrowRight
} from 'lucide-react';
import { speechService } from '../services/speechService';

interface DemoSectionViewProps {
  onUpgradeClick: () => void;
}

type InteractiveDemoTab =
  | 'overview'
  | 'live-quiz'
  | 'live-puzzles'
  | 'live-stories'
  | 'live-drawing'
  | 'live-champions';

interface DemoQuestion {
  id: string;
  subject: 'Mathematics' | 'English' | 'Science' | 'Marathi';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const DEMO_QUIZ_QUESTIONS: DemoQuestion[] = [
  {
    id: 'dq-1',
    subject: 'Mathematics',
    question: 'If a train travels 180 km in 3 hours at a constant speed, how far will it travel in 5 hours?',
    options: ['250 km', '300 km', '320 km', '360 km'],
    correctIndex: 1,
    explanation: 'Speed = 180 km ÷ 3 hours = 60 km/h. In 5 hours, distance = 60 × 5 = 300 km.'
  },
  {
    id: 'dq-2',
    subject: 'Mathematics',
    question: 'What is the perimeter of a rectangle with length 14 cm and breadth 9 cm?',
    options: ['23 cm', '46 cm', '126 cm', '38 cm'],
    correctIndex: 1,
    explanation: 'Perimeter of a rectangle = 2 × (length + breadth) = 2 × (14 + 9) = 2 × 23 = 46 cm.'
  },
  {
    id: 'dq-3',
    subject: 'English',
    question: 'Choose the correct synonym for the word "COURAGEOUS":',
    options: ['Timid', 'Valiant', 'Careless', 'exhausted'],
    correctIndex: 1,
    explanation: '"Valiant" means possessing or showing courage or determination, making it the synonym of courageous.'
  },
  {
    id: 'dq-4',
    subject: 'English',
    question: 'Identify the figure of speech in: "The classroom was a buzzing beehive before the exam."',
    options: ['Simile', 'Metaphor', 'Personification', 'Hyperbole'],
    correctIndex: 1,
    explanation: 'It directly compares the classroom to a buzzing beehive without using "like" or "as", which is a Metaphor.'
  },
  {
    id: 'dq-5',
    subject: 'Science',
    question: 'Which gas do green plants absorb from the atmosphere during photosynthesis?',
    options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
    correctIndex: 2,
    explanation: 'Green plants absorb Carbon Dioxide (CO₂) and water in the presence of sunlight and chlorophyll to make glucose and release Oxygen.'
  },
  {
    id: 'dq-6',
    subject: 'Marathi',
    question: '"छत्रपती शिवाजी महाराजांनी स्वराज्याची पहिली शपथ कुठे घेतली?"',
    options: ['रायगड', 'रायरेश्वराचे मंदिर', 'प्रतापगड', 'शिवनेरी'],
    correctIndex: 1,
    explanation: 'छत्रपती शिवाजी महाराजांनी वयाच्या १६ व्या वर्षी आपल्या सवंगड्यांसह रायरेश्वराच्या मंदिरात हिंदवी स्वराज्याची पहिली शपथ घेतली.'
  }
];

const DEMO_STORIES = [
  {
    id: 'demo-story-en',
    title: 'The Golden Feather of Honesty',
    language: 'en' as const,
    voiceBadge: 'Sweet & Polite English Female Voice',
    category: 'Story World (Moral Story)',
    paragraphs: [
      'Once upon a time in a peaceful valley near the Sahyadri hills, there lived a young girl named Ananya who loved reading books and helping birds.',
      'One sunny morning, while watering the tulsi plant in her courtyard, Ananya found a shimmering golden feather resting beside a small clay pot.',
      'Soon, the village merchant arrived looking worried. He announced that a rare golden plume from the royal museum had blown away in the morning breeze.',
      'Even though the feather was magical and bright, Ananya immediately stepped forward with a gentle smile and returned the golden feather safely.',
      'Impressed by her pure honesty and kindness, the curator gifted Ananya a lifetime library pass and named her the Young Guardian of Wisdom.'
    ],
    moral: 'True greatness shines brightest when we choose honesty even when no one is watching.',
    quizQuestion: 'Why did the curator reward Ananya with a lifetime library pass?',
    quizOptions: [
      'Because she hid the golden feather',
      'Because she returned the golden feather with pure honesty',
      'Because she bought the museum ticket',
      'Because she won a running race'
    ],
    correctOption: 1
  },
  {
    id: 'demo-story-mr',
    title: 'शिवरायांची युद्धनीती आणि गनिमी कावा (Shivaji Maharaj Story)',
    language: 'mr' as const,
    voiceBadge: 'Fluent Female Marathi Voice (मराठी आवाज)',
    category: 'Shivaji Maharaj Inspiring Story',
    paragraphs: [
      'सह्याद्रीच्या उंचच उंच डोंगररांगांमध्ये छत्रपती शिवाजी महाराजांनी हिंदवी स्वराज्याचे तेजस्वी स्वप्न पाहिले आणि ते प्रत्यक्षात उतरवले.',
      'महाराजांनी आपल्या मावळ्यांना एकत्र केले. डोंगरदऱ्यांची अचूक माहिती आणि वेगवान हालचालींच्या जोरावर त्यांनी गनिमी कावा ही अद्वितीय युद्धनीती विकसित केली.',
      'कमी सैन्य असतानाही शत्रूच्या अवाढव्य फौजेला कसे चकवायचे आणि रयतेचे रक्षण कसे करायचे, याचे उत्तम नियोजन शिवरायांकडे होते.',
      'त्यांनी शेतकऱ्यांच्या भाजीच्या देठालाही धक्का लागू नये अशी सक्त ताकीद दिली होती. त्यामुळेच रयतेचे स्वराज्य अधिक बळकट आणि अजिंक्य बनले.'
    ],
    moral: 'शिस्त, दूरदृष्टी, धाडस आणि प्रजेवरील प्रेम यामुळेच खऱ्या नेतृत्वाची ओळख निर्माण होते.',
    quizQuestion: 'छत्रपती शिवाजी महाराजांच्या प्रसिद्ध युद्धनीतीला काय म्हटले जाते?',
    quizOptions: [
      'गनिमी कावा (Guerrilla Warfare)',
      'समुद्री व्यापार',
      'केवळ तटबंदी',
      'यापैकी नाही'
    ],
    correctOption: 0
  }
];

// 4x4 Interactive Sudoku for Demo
const INITIAL_DEMO_SUDOKU: (number | null)[][] = [
  [1, null, 3, 4],
  [null, 4, 1, 2],
  [2, 1, null, 3],
  [4, 3, 2, null]
];

const SOLUTION_DEMO_SUDOKU: number[][] = [
  [1, 2, 3, 4],
  [3, 4, 1, 2],
  [2, 1, 4, 3],
  [4, 3, 2, 1]
];

const DEMO_RIDDLES = [
  {
    id: 'r1',
    title: 'The Library Number Sequence',
    question: 'Find the missing number in the pattern: 3, 6, 12, 24, __, 96',
    options: ['36', '48', '54', '60'],
    correctIndex: 1,
    hint: 'Each number is multiplied by 2 to get the next number!',
    explanation: '3 × 2 = 6, 6 × 2 = 12, 12 × 2 = 24, and 24 × 2 = 48!'
  },
  {
    id: 'r2',
    title: 'The Clock Hands Riddle',
    question: 'I have a face and two hands, but no arms or legs. What am I?',
    options: ['A Robot', 'A Clock', 'A Mirror', 'A Coin'],
    correctIndex: 1,
    hint: 'You look at me every morning before going to school!',
    explanation: 'A clock has a dial (face) and hour/minute hands!'
  }
];

const DEMO_CHAMPION_QUESTIONS = [
  {
    id: 'cc-1',
    badge: '🏏 Cricket Champions Demo',
    question: 'How many balls are bowled in one standard legal Over in Cricket?',
    options: ['4 Balls', '5 Balls', '6 Balls', '8 Balls'],
    correctIndex: 2,
    explanation: 'One standard legal over in cricket consists of 6 legal deliveries.'
  },
  {
    id: 'cc-2',
    badge: '🎓 MSCE Scholarship Demo (4th & 7th Std)',
    question: 'If "CAT" is coded as "3-1-20", how is "DOG" coded using alphabetical positions?',
    options: ['4-15-7', '4-14-8', '5-15-7', '3-15-6'],
    correctIndex: 0,
    explanation: 'D is the 4th letter, O is the 15th letter, and G is the 7th letter of the English alphabet → 4-15-7.'
  }
];

export const DemoSectionView: React.FC<DemoSectionViewProps> = ({ onUpgradeClick }) => {
  const [activeTab, setActiveTab] = useState<InteractiveDemoTab>('overview');

  // --- 1. Live Quiz State (Isolated Demo State) ---
  const [selectedQuizSubject, setSelectedQuizSubject] = useState<'All' | 'Mathematics' | 'English' | 'Science' | 'Marathi'>('All');
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);

  const filteredQuestions = selectedQuizSubject === 'All'
    ? DEMO_QUIZ_QUESTIONS
    : DEMO_QUIZ_QUESTIONS.filter(q => q.subject === selectedQuizSubject);
  const currentQuestion = filteredQuestions[quizIndex % filteredQuestions.length] || DEMO_QUIZ_QUESTIONS[0];

  // --- 2. Live Sudoku & Brain Puzzle State ---
  const [sudokuGrid, setSudokuGrid] = useState<(number | null)[][]>(
    INITIAL_DEMO_SUDOKU.map(row => [...row])
  );
  const [selectedCell, setSelectedCell] = useState<[number, number] | null>([0, 1]);
  const [sudokuMessage, setSudokuMessage] = useState<string | null>(null);
  const [riddleAnswers, setRiddleAnswers] = useState<Record<string, number>>({});
  const [showRiddleHint, setShowRiddleHint] = useState<Record<string, boolean>>({});

  // --- 3. Live Story Audio State ---
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [audioProgress, setAudioProgress] = useState<{ current: number; total: number }>({ current: 0, total: 0 });
  const [storyQuizSelected, setStoryQuizSelected] = useState<number | null>(null);

  const activeStory = DEMO_STORIES[activeStoryIndex];

  useEffect(() => {
    return () => {
      speechService.stop();
    };
  }, []);

  const handlePlayDemoStory = () => {
    const paragraphs = [
      activeStory.title,
      ...activeStory.paragraphs,
      `${activeStory.language === 'mr' ? 'तात्पर्य: ' : 'Moral of the story: '} ${activeStory.moral}`
    ];
    const lang = activeStory.language === 'mr' ? 'Marathi' : 'English';

    setIsSpeaking(true);
    setIsPaused(false);
    speechService.startStoryNarration(
      paragraphs,
      lang,
      (state) => {
        setIsSpeaking(state.isPlaying || state.isPaused);
        setIsPaused(state.isPaused);
        setAudioProgress({
          current: state.currentParagraphIndex + 1,
          total: state.totalParagraphs
        });
      },
      () => {
        setIsSpeaking(false);
        setIsPaused(false);
        setAudioProgress({ current: 0, total: 0 });
      }
    );
  };

  const handlePauseDemoStory = () => {
    if (isSpeaking && !isPaused) {
      speechService.pause();
      setIsPaused(true);
    }
  };

  const handleResumeDemoStory = () => {
    if (isSpeaking && isPaused) {
      speechService.resume();
      setIsPaused(false);
    }
  };

  const handleRestartDemoStory = () => {
    speechService.restart();
  };

  const handleStopDemoStory = () => {
    speechService.stop();
    setIsSpeaking(false);
    setIsPaused(false);
    setAudioProgress({ current: 0, total: 0 });
  };

  // --- 4. Live Drawing Canvas State ---
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState('#4F46E5');
  const [brushSize, setBrushSize] = useState(6);
  const [drawingTemplate, setDrawingTemplate] = useState<'Fort Raigad Outline' | 'Peacock Feather' | 'Freehand Canvas'>('Fort Raigad Outline');

  const initCanvas = (templateName = drawingTemplate) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw helpful light guide lines based on template
    ctx.strokeStyle = '#CBD5E1';
    ctx.lineWidth = 2;
    if (templateName === 'Fort Raigad Outline') {
      ctx.beginPath();
      // Mountains & Fort battlements guide
      ctx.moveTo(40, 220);
      ctx.lineTo(130, 120);
      ctx.lineTo(220, 170);
      ctx.lineTo(310, 95);
      ctx.lineTo(420, 165);
      ctx.lineTo(520, 110);
      ctx.lineTo(600, 220);
      ctx.stroke();

      // Flagpole on peak
      ctx.beginPath();
      ctx.moveTo(310, 95);
      ctx.lineTo(310, 45);
      ctx.lineTo(355, 60);
      ctx.lineTo(310, 75);
      ctx.stroke();
    } else if (templateName === 'Peacock Feather') {
      ctx.beginPath();
      ctx.ellipse(320, 130, 70, 90, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(320, 130, 35, 45, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
  };

  useEffect(() => {
    if (activeTab === 'live-drawing') {
      setTimeout(() => initCanvas(drawingTemplate), 50);
    }
  }, [activeTab, drawingTemplate]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const drawMove = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  // --- 5. Live Champions (Cricket & Scholarship) State ---
  const [champAnswers, setChampAnswers] = useState<Record<string, number>>({});

  // Sudoku placement helper
  const handleSudokuInput = (num: number | null) => {
    if (!selectedCell) return;
    const [r, c] = selectedCell;
    if (INITIAL_DEMO_SUDOKU[r][c] !== null) return; // locked cell

    const updated = sudokuGrid.map(row => [...row]);
    updated[r][c] = num;
    setSudokuGrid(updated);

    // Check if complete and valid
    const isComplete = updated.every(row => row.every(cell => cell !== null));
    if (isComplete) {
      const isSolved = updated.every((row, ri) =>
        row.every((cell, ci) => cell === SOLUTION_DEMO_SUDOKU[ri][ci])
      );
      if (isSolved) {
        setSudokuMessage('🎉 Brilliant! You solved the 4×4 Demo Sudoku with zero row, column, or 2×2 box conflicts!');
      } else {
        setSudokuMessage('⚠️ Some numbers conflict in a row, column, or 2×2 box. Try adjusting the highlighted cells!');
      }
    } else {
      setSudokuMessage(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Top Demo Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 rounded-3xl p-8 text-white mb-8 shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-black uppercase tracking-widest mb-3">
              <Sparkles className="w-4 h-4" /> LIVE INTERACTIVE DEMO PLAYGROUND • NO PAYMENT REQUIRED
            </div>
            <h1 className="text-3xl sm:text-4xl font-black mb-2">
              Champion Learning — Live Interactive Demo
            </h1>
            <p className="text-indigo-200 max-w-2xl text-sm sm:text-base">
              Test our real quizzes, play Sudoku & brain riddles, listen to English & Marathi stories with full voice controls, and paint in the Drawing Studio right here! Demo testing is 100% free and kept separate from permanent student records.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={() => setActiveTab('live-quiz')}
              className="px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-black rounded-2xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <Play className="w-5 h-5 fill-current" /> Start Playing Demo Now
            </button>
            <button
              onClick={onUpgradeClick}
              className="px-5 py-3 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-slate-950 font-black rounded-2xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <Crown className="w-5 h-5" /> View Plans (₹0 / ₹49 / ₹99)
            </button>
          </div>
        </div>

        {/* Interactive Demo Navigation Pills */}
        <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap gap-2.5">
          {[
            { id: 'overview', label: '📋 All 8 Demo Modules', icon: Sparkles },
            { id: 'live-quiz', label: '📚 Play Live Subject Quiz', icon: BookOpen },
            { id: 'live-puzzles', label: '🧩 Play Live Sudoku & Riddles', icon: Brain },
            { id: 'live-stories', label: '🎧 Listen to Live Stories (EN & MR)', icon: Volume2 },
            { id: 'live-drawing', label: '🎨 Try Live Drawing Studio', icon: Palette },
            { id: 'live-champions', label: '🏆 Try Cricket & Scholarship', icon: Trophy },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  if (tab.id !== 'live-stories') handleStopDemoStory();
                  setActiveTab(tab.id as InteractiveDemoTab);
                }}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-indigo-950 shadow-lg scale-[1.02]'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* =====================================================================
          INTERACTIVE TAB 1: LIVE SUBJECT QUIZ PLAYER
         ===================================================================== */}
      {activeTab === 'live-quiz' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg mb-10 animate-in fade-in duration-200">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-100 text-indigo-700">
                Interactive Demo Quiz • Isolated Session
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-2">
                Test Live Subject-Wise Questions
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-2xl text-emerald-800 font-black text-sm">
                Demo Score: {quizScore} / {answeredCount}
              </div>
              <button
                onClick={() => {
                  setQuizIndex(0);
                  setSelectedAnswer(null);
                  setQuizScore(0);
                  setAnsweredCount(0);
                }}
                className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Reset Demo Quiz
              </button>
            </div>
          </div>

          {/* Subject Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            {(['All', 'Mathematics', 'English', 'Science', 'Marathi'] as const).map(sub => (
              <button
                key={sub}
                onClick={() => {
                  setSelectedQuizSubject(sub);
                  setQuizIndex(0);
                  setSelectedAnswer(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  selectedQuizSubject === sub
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          {/* Active Question Card */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-black uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-lg border border-indigo-200">
                Subject: {currentQuestion.subject}
              </span>
              <span className="text-xs font-bold text-slate-500">
                Question {(quizIndex % filteredQuestions.length) + 1} of {filteredQuestions.length}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-5">
              {currentQuestion.question}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentQuestion.options.map((opt, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrect = idx === currentQuestion.correctIndex;
                let btnStyle = 'bg-white border-slate-200 text-slate-800 hover:border-indigo-400';

                if (selectedAnswer !== null) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-500/20';
                  } else if (isSelected && !isCorrect) {
                    btnStyle = 'bg-rose-50 border-rose-500 text-rose-900';
                  } else {
                    btnStyle = 'bg-white border-slate-200 text-slate-400 opacity-75';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={selectedAnswer !== null}
                    onClick={() => {
                      setSelectedAnswer(idx);
                      setAnsweredCount(prev => prev + 1);
                      if (idx === currentQuestion.correctIndex) {
                        setQuizScore(prev => prev + 1);
                      }
                    }}
                    className={`p-4 rounded-xl border-2 text-left font-bold transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {selectedAnswer !== null && isCorrect && (
                      <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {selectedAnswer !== null && isSelected && !isCorrect && (
                      <X className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {selectedAnswer !== null && (
              <div className="mt-5 p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-950 animate-in fade-in duration-200">
                <p className="text-xs font-black uppercase tracking-wider text-indigo-700 mb-1">
                  {selectedAnswer === currentQuestion.correctIndex ? '✅ Correct Answer!' : '💡 Step-by-Step Explanation:'}
                </p>
                <p className="text-sm font-medium">{currentQuestion.explanation}</p>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => {
                      setSelectedAnswer(null);
                      setQuizIndex(prev => prev + 1);
                    }}
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-xl text-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    Next Demo Question <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =====================================================================
          INTERACTIVE TAB 2: LIVE SUDOKU & BRAIN PUZZLES
         ===================================================================== */}
      {activeTab === 'live-puzzles' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 animate-in fade-in duration-200">
          {/* Interactive 4x4 Sudoku */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-purple-100 text-purple-700">
                  Playable Demo Sudoku
                </span>
                <h2 className="text-xl font-black text-slate-900 mt-2">
                  4×4 Mini Champion Sudoku
                </h2>
              </div>
              <button
                onClick={() => {
                  setSudokuGrid(INITIAL_DEMO_SUDOKU.map(row => [...row]));
                  setSudokuMessage(null);
                }}
                className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset Grid
              </button>
            </div>
            <p className="text-xs text-slate-600 mb-5">
              Fill the empty cells so every row, column, and 2×2 box contains numbers <strong>1, 2, 3, and 4</strong> without repeating!
            </p>

            <div className="flex flex-col items-center">
              <div className="grid grid-cols-4 gap-2 bg-slate-900 p-3 rounded-2xl shadow-inner mb-5">
                {sudokuGrid.map((row, rIdx) =>
                  row.map((val, cIdx) => {
                    const isFixed = INITIAL_DEMO_SUDOKU[rIdx][cIdx] !== null;
                    const isSelected = selectedCell?.[0] === rIdx && selectedCell?.[1] === cIdx;
                    return (
                      <button
                        key={`${rIdx}-${cIdx}`}
                        onClick={() => !isFixed && setSelectedCell([rIdx, cIdx])}
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl font-black text-xl flex items-center justify-center transition-all cursor-pointer ${
                          isFixed
                            ? 'bg-slate-200 text-slate-900 cursor-not-allowed'
                            : isSelected
                            ? 'bg-amber-300 text-slate-950 ring-4 ring-amber-400'
                            : 'bg-white text-indigo-700 hover:bg-indigo-50'
                        }`}
                      >
                        {val ?? ''}
                      </button>
                    );
                  })
                )}
              </div>

              {/* Number Pad */}
              <div className="flex items-center gap-2.5 mb-4">
                {[1, 2, 3, 4].map(n => (
                  <button
                    key={n}
                    onClick={() => handleSudokuInput(n)}
                    className="w-12 h-12 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-lg shadow-sm cursor-pointer"
                  >
                    {n}
                  </button>
                ))}
                <button
                  onClick={() => handleSudokuInput(null)}
                  className="px-4 h-12 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs cursor-pointer"
                >
                  Clear Cell
                </button>
              </div>

              {sudokuMessage && (
                <div className="w-full p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm font-bold text-center">
                  {sudokuMessage}
                </div>
              )}
            </div>
          </div>

          {/* Interactive Brain Riddles */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg">
            <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-amber-100 text-amber-800">
              Interactive Logic Riddles
            </span>
            <h2 className="text-xl font-black text-slate-900 mt-2 mb-4">
              Brain Booster Puzzles (Included in Free Plan!)
            </h2>

            <div className="space-y-5">
              {DEMO_RIDDLES.map(riddle => {
                const chosen = riddleAnswers[riddle.id];
                const hintVisible = showRiddleHint[riddle.id];
                return (
                  <div key={riddle.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-black text-slate-900 text-sm">{riddle.title}</h3>
                      <button
                        onClick={() =>
                          setShowRiddleHint(prev => ({ ...prev, [riddle.id]: !prev[riddle.id] }))
                        }
                        className="text-xs font-bold text-amber-700 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <HelpCircle className="w-3.5 h-3.5" /> {hintVisible ? 'Hide Hint' : 'Show Hint'}
                      </button>
                    </div>
                    <p className="text-sm font-semibold text-slate-800 mb-3">{riddle.question}</p>

                    {hintVisible && (
                      <p className="text-xs bg-amber-50 border border-amber-200 text-amber-900 p-2.5 rounded-xl mb-3 font-medium">
                        💡 Hint: {riddle.hint}
                      </p>
                    )}

                    <div className="grid grid-cols-2 gap-2">
                      {riddle.options.map((opt, idx) => {
                        const isPicked = chosen === idx;
                        const isRight = idx === riddle.correctIndex;
                        return (
                          <button
                            key={idx}
                            onClick={() => setRiddleAnswers(prev => ({ ...prev, [riddle.id]: idx }))}
                            className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                              chosen !== undefined
                                ? isRight
                                  ? 'bg-emerald-100 border-emerald-500 text-emerald-900'
                                  : isPicked
                                  ? 'bg-rose-100 border-rose-400 text-rose-900'
                                  : 'bg-white border-slate-200 text-slate-400'
                                : 'bg-white border-slate-200 hover:border-indigo-400 text-slate-800'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {chosen !== undefined && (
                      <p className="mt-3 text-xs font-bold text-emerald-800 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                        {chosen === riddle.correctIndex ? '🎉 Spot on! ' : '💡 Solution: '}
                        {riddle.explanation}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          INTERACTIVE TAB 3: LIVE STORIES WITH ENGLISH & MARATHI FEMALE AUDIO
         ===================================================================== */}
      {activeTab === 'live-stories' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg mb-10 animate-in fade-in duration-200">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-rose-100 text-rose-700">
                Live Audio Narration • Complete Playback
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-2">
                Test English & Marathi Story Audio Narration
              </h2>
            </div>

            {/* Switch between English Story & Marathi Shivaji Story */}
            <div className="flex gap-2">
              {DEMO_STORIES.map((st, idx) => (
                <button
                  key={st.id}
                  onClick={() => {
                    handleStopDemoStory();
                    setActiveStoryIndex(idx);
                    setStoryQuizSelected(null);
                  }}
                  className={`px-4 py-2.5 rounded-xl font-black text-xs transition-all cursor-pointer ${
                    activeStoryIndex === idx
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {st.language === 'en' ? '🇬🇧 English Story Demo' : '🚩 मराठी शिवचरित्र कथा (Marathi)'}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50/70 via-white to-amber-50/50 rounded-2xl p-6 border border-indigo-100 mb-6">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-black text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">
                  🎙️ {activeStory.voiceBadge}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">{activeStory.title}</h3>
                <p className="text-xs font-bold text-slate-500">{activeStory.category}</p>
              </div>

              {/* Full Audio Controls: Play, Pause, Resume, Restart */}
              <div className="flex flex-wrap items-center gap-2">
                {!isSpeaking ? (
                  <button
                    onClick={handlePlayDemoStory}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs flex items-center gap-2 shadow-md cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-current" /> Play Full Story
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handlePauseDemoStory}
                      disabled={isPaused}
                      className={`px-4 py-2.5 rounded-xl font-black text-xs flex items-center gap-1.5 cursor-pointer ${
                        isPaused
                          ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                          : 'bg-amber-500 hover:bg-amber-600 text-white shadow-sm'
                      }`}
                    >
                      <Pause className="w-4 h-4" /> Pause
                    </button>
                    <button
                      onClick={handleResumeDemoStory}
                      disabled={!isPaused}
                      className={`px-4 py-2.5 rounded-xl font-black text-xs flex items-center gap-1.5 cursor-pointer ${
                        !isPaused
                          ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                          : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                      }`}
                    >
                      <Play className="w-4 h-4 fill-current" /> Resume
                    </button>
                    <button
                      onClick={handleRestartDemoStory}
                      className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" /> Restart
                    </button>
                    <button
                      onClick={handleStopDemoStory}
                      className="px-3.5 py-2.5 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-700 font-black text-xs cursor-pointer"
                    >
                      Stop
                    </button>
                  </>
                )}
              </div>
            </div>

            {isSpeaking && (
              <div className="mb-4 bg-white p-3 rounded-xl border border-indigo-200 flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-900 flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-indigo-600 animate-pulse" />
                  {isPaused
                    ? 'Audio Paused — Click Resume to continue'
                    : `Narrating sentence ${audioProgress.current} of ${Math.max(audioProgress.total, 1)}...`}
                </span>
                <span className="text-xs font-black text-indigo-600">
                  {audioProgress.total > 0
                    ? `${Math.round((audioProgress.current / audioProgress.total) * 100)}%`
                    : 'Playing'}
                </span>
              </div>
            )}

            <div className="space-y-3 text-slate-800 leading-relaxed font-medium text-base bg-white p-5 rounded-2xl border border-slate-200/80">
              {activeStory.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="pt-3 mt-3 border-t border-amber-200 bg-amber-50/70 p-3.5 rounded-xl text-amber-950 font-bold text-sm">
                🌟 {activeStory.language === 'mr' ? 'तात्पर्य:' : 'Moral:'} {activeStory.moral}
              </div>
            </div>

            {/* Story Comprehension Mini Question */}
            <div className="mt-5 bg-white p-5 rounded-2xl border border-slate-200">
              <p className="text-xs font-black uppercase tracking-wider text-indigo-600 mb-1">
                Interactive Story Quiz
              </p>
              <p className="font-black text-slate-900 text-sm mb-3">{activeStory.quizQuestion}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeStory.quizOptions.map((opt, idx) => {
                  const isPicked = storyQuizSelected === idx;
                  const isCorrect = idx === activeStory.correctOption;
                  return (
                    <button
                      key={idx}
                      onClick={() => setStoryQuizSelected(idx)}
                      className={`p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                        storyQuizSelected !== null
                          ? isCorrect
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                            : isPicked
                            ? 'bg-rose-50 border-rose-400 text-rose-900'
                            : 'bg-slate-50 border-slate-200 text-slate-400'
                          : 'bg-slate-50 border-slate-200 hover:border-indigo-400 text-slate-800'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          INTERACTIVE TAB 4: LIVE DRAWING STUDIO
         ===================================================================== */}
      {activeTab === 'live-drawing' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg mb-10 animate-in fade-in duration-200">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-pink-100 text-pink-700">
                Interactive Creative Canvas
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-2">
                Demo Drawing & Coloring Pad
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {(['Fort Raigad Outline', 'Peacock Feather', 'Freehand Canvas'] as const).map(tpl => (
                <button
                  key={tpl}
                  onClick={() => setDrawingTemplate(tpl)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-black cursor-pointer ${
                    drawingTemplate === tpl
                      ? 'bg-pink-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {tpl}
                </button>
              ))}
            </div>
          </div>

          {/* Brush Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-slate-600 mr-1">Colors:</span>
              {['#4F46E5', '#EF4444', '#10B981', '#F59E0B', '#EC4899', '#8B5CF6', '#0F172A'].map(color => (
                <button
                  key={color}
                  onClick={() => setBrushColor(color)}
                  className={`w-8 h-8 rounded-full border-2 transition-transform cursor-pointer ${
                    brushColor === color ? 'scale-125 border-slate-900 shadow-md' : 'border-white'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <label className="text-xs font-bold text-slate-600">
                Brush Size: {brushSize}px
              </label>
              <input
                type="range"
                min={2}
                max={20}
                value={brushSize}
                onChange={e => setBrushSize(Number(e.target.value))}
                className="w-24 accent-indigo-600"
              />
              <button
                onClick={() => setBrushColor('#FFFFFF')}
                className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 flex items-center gap-1 cursor-pointer"
              >
                <Eraser className="w-3.5 h-3.5" /> Eraser
              </button>
              <button
                onClick={() => initCanvas(drawingTemplate)}
                className="px-3 py-1.5 rounded-xl bg-rose-50 border border-rose-200 text-xs font-bold text-rose-700 flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Clear Canvas
              </button>
            </div>
          </div>

          <div className="border-2 border-dashed border-indigo-200 rounded-2xl overflow-hidden bg-white flex justify-center">
            <canvas
              ref={canvasRef}
              width={640}
              height={260}
              onMouseDown={startDrawing}
              onMouseMove={drawMove}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={drawMove}
              onTouchEnd={stopDrawing}
              className="w-full max-w-[640px] h-[260px] cursor-crosshair touch-none"
            />
          </div>
        </div>
      )}

      {/* =====================================================================
          INTERACTIVE TAB 5: CRICKET & SCHOLARSHIP CHALLENGES
         ===================================================================== */}
      {activeTab === 'live-champions' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg mb-10 animate-in fade-in duration-200">
          <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-amber-100 text-amber-800">
            Premium ₹99 Features Sampler
          </span>
          <h2 className="text-2xl font-black text-slate-900 mt-2 mb-6">
            Try Live Cricket Knowledge & Maharashtra Scholarship Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DEMO_CHAMPION_QUESTIONS.map(item => {
              const picked = champAnswers[item.id];
              return (
                <div key={item.id} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-black text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                  <h3 className="text-base font-black text-slate-900 mt-3 mb-4">{item.question}</h3>
                  <div className="space-y-2">
                    {item.options.map((opt, idx) => {
                      const isRight = idx === item.correctIndex;
                      const isChosen = picked === idx;
                      return (
                        <button
                          key={idx}
                          onClick={() => setChampAnswers(prev => ({ ...prev, [item.id]: idx }))}
                          className={`w-full p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                            picked !== undefined
                              ? isRight
                                ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                                : isChosen
                                ? 'bg-rose-50 border-rose-400 text-rose-900'
                                : 'bg-white border-slate-200 text-slate-400'
                              : 'bg-white border-slate-200 hover:border-indigo-400 text-slate-800'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {picked !== undefined && (
                    <p className="mt-3 text-xs font-bold text-indigo-900 bg-indigo-50 p-3 rounded-xl border border-indigo-200">
                      {item.explanation}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =====================================================================
          ALL 8 DEMO MODULES (CLICKABLE CARDS THAT OPEN INTERACTIVE TOOLS)
         ===================================================================== */}
      <div className="space-y-8">
        {/* 1. Demo Students & 2. Demo Quizzes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center font-black">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-black text-slate-900">1. Demo Student Profiles</h2>
                  <p className="text-xs text-slate-500">2 Sample Records • Click to Test Dashboard Activity</p>
                </div>
              </div>
              <button
                onClick={() => setActiveTab('live-quiz')}
                className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black cursor-pointer"
              >
                Try Live Quiz →
              </button>
            </div>
            <div className="space-y-3">
              {[
                { name: 'Aarav Deshmukh (DEMO DATA)', class: 'Class 6 • Medium: English', points: '1,450 XP', streak: '14 Days 🔥', badge: 'Math Whiz' },
                { name: 'Ananya Kulkarni (DEMO DATA)', class: 'Class 8 • Medium: Marathi', points: '2,120 XP', streak: '21 Days 🔥', badge: 'Scholarship Star' },
              ].map((st, i) => (
                <div
                  key={i}
                  onClick={() => setActiveTab('live-quiz')}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-indigo-400 flex items-center justify-between cursor-pointer transition-all"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-800 text-sm">{st.name}</span>
                      <span className="text-[10px] font-black px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full">DEMO DATA</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{st.class} • Badge: {st.badge}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-black text-indigo-600">{st.points}</div>
                    <div className="text-xs text-emerald-600 font-bold">{st.streak}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Demo Quizzes */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-black">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-black text-slate-900">2. Demo Subject Quizzes</h2>
                  <p className="text-xs text-slate-500">Click any quiz below to launch live questions</p>
                </div>
              </div>
              <button
                onClick={() => setActiveTab('live-quiz')}
                className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black cursor-pointer"
              >
                Open Quiz Player →
              </button>
            </div>
            <div className="space-y-3">
              {[
                { subject: 'Mathematics' as const, title: 'Mathematics — Fractions & Speed (DEMO DATA)', level: 'Intermediate • Interactive', score: 'Play Now' },
                { subject: 'Science' as const, title: 'General Science — Living World (DEMO DATA)', level: 'Beginner • Interactive', score: 'Play Now' },
              ].map((qz, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setSelectedQuizSubject(qz.subject);
                    setQuizIndex(0);
                    setSelectedAnswer(null);
                    setActiveTab('live-quiz');
                  }}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 flex items-center justify-between cursor-pointer transition-all"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-800 text-sm">{qz.title}</span>
                      <span className="text-[10px] font-black px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full">LIVE DEMO</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{qz.level}</p>
                  </div>
                  <span className="text-xs font-black bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-xl flex items-center gap-1">
                    <Play className="w-3.5 h-3.5 fill-current" /> {qz.score}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Demo Brain Games & 4. Demo Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center font-black">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-black text-slate-900">3. Demo Brain Games & Sudoku</h2>
                  <p className="text-xs text-slate-500">Click to solve the live 4×4 Sudoku & Logic Riddles</p>
                </div>
              </div>
              <button
                onClick={() => setActiveTab('live-puzzles')}
                className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-black cursor-pointer"
              >
                Play Puzzles →
              </button>
            </div>
            <div className="space-y-3">
              {[
                { name: 'Champion Sudoku 4×4 Grid (DEMO DATA)', type: 'Zero Row/Col/Box Repetition • Interactive', reward: 'Solve Live' },
                { name: 'Number Sequence & Clock Riddle (DEMO DATA)', type: 'Analytical Thinking • Hint Enabled', reward: 'Solve Live' },
              ].map((bg, i) => (
                <div
                  key={i}
                  onClick={() => setActiveTab('live-puzzles')}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-purple-400 flex items-center justify-between cursor-pointer transition-all"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-800 text-sm">{bg.name}</span>
                      <span className="text-[10px] font-black px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full">PLAYABLE</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{bg.type}</p>
                  </div>
                  <span className="text-xs font-black text-purple-700 bg-purple-100 px-3 py-1.5 rounded-xl">
                    {bg.reward}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center font-black">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-black text-slate-900">4. Demo Audio Stories (EN & MR)</h2>
                  <p className="text-xs text-slate-500">Click to listen with Female Marathi & English Voices</p>
                </div>
              </div>
              <button
                onClick={() => setActiveTab('live-stories')}
                className="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-black cursor-pointer"
              >
                Listen Live →
              </button>
            </div>
            <div className="space-y-3">
              {[
                { idx: 1, title: 'शिवरायांची युद्धनीती आणि गनिमी कावा (DEMO DATA)', voice: 'Fluent Female Marathi Voice (mr-IN)', moral: 'Listen Now 🔊' },
                { idx: 0, title: 'The Golden Feather of Honesty (DEMO DATA)', voice: 'Sweet & Polite English Female Voice', moral: 'Listen Now 🔊' },
              ].map((st, i) => (
                <div
                  key={i}
                  onClick={() => {
                    handleStopDemoStory();
                    setActiveStoryIndex(st.idx);
                    setActiveTab('live-stories');
                  }}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-rose-400 flex items-center justify-between cursor-pointer transition-all"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-800 text-sm">{st.title}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">🎙️ {st.voice}</p>
                  </div>
                  <span className="text-xs font-black text-rose-700 bg-rose-100 px-3 py-1.5 rounded-xl shrink-0">
                    {st.moral}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Demo Drawing & 6. Demo Progress Reports */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center font-black">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-black text-slate-900">5. Demo Drawing & Certificates</h2>
                  <p className="text-xs text-slate-500">Click to open the interactive drawing canvas</p>
                </div>
              </div>
              <button
                onClick={() => setActiveTab('live-drawing')}
                className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black cursor-pointer"
              >
                Open Canvas →
              </button>
            </div>
            <div className="space-y-3">
              {[
                { tpl: 'Fort Raigad Outline' as const, title: 'Fort Raigad Digital Sketch Pad (DEMO DATA)', date: 'Interactive Brush & Colors', id: 'Paint Live 🎨' },
                { tpl: 'Peacock Feather' as const, title: 'Peacock Feather Art Challenge (DEMO DATA)', date: 'Creative Studio Demo', id: 'Paint Live 🎨' },
              ].map((cert, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setDrawingTemplate(cert.tpl);
                    setActiveTab('live-drawing');
                  }}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-400 flex items-center justify-between cursor-pointer transition-all"
                >
                  <div>
                    <span className="font-bold text-slate-800 text-sm">{cert.title}</span>
                    <p className="text-xs text-slate-500 mt-0.5">{cert.date}</p>
                  </div>
                  <span className="text-xs font-black text-amber-800 bg-amber-100 px-3 py-1.5 rounded-xl">
                    {cert.id}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-black">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-black text-slate-900">6. Demo Cricket & Scholarship</h2>
                  <p className="text-xs text-slate-500">Click to test Cricket & MSCE Scholarship questions</p>
                </div>
              </div>
              <button
                onClick={() => setActiveTab('live-champions')}
                className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black cursor-pointer"
              >
                Try Questions →
              </button>
            </div>
            <div className="space-y-3">
              {[
                { metric: 'Cricket Laws & IPL Mastery (DEMO DATA)', accuracy: 'Interactive Quiz', topSubjects: 'Overs, Fielding & World Cup' },
                { metric: 'Maharashtra Scholarship Paper 1 & 2 (DEMO DATA)', accuracy: '4th & 7th Std', topSubjects: 'Intelligence Test & Marathi' },
              ].map((pr, i) => (
                <div
                  key={i}
                  onClick={() => setActiveTab('live-champions')}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 flex items-center justify-between cursor-pointer transition-all"
                >
                  <div>
                    <span className="font-bold text-slate-800 text-sm">{pr.metric}</span>
                    <p className="text-xs text-slate-500 mt-0.5">{pr.topSubjects}</p>
                  </div>
                  <span className="text-xs font-black text-blue-700 bg-blue-100 px-3 py-1.5 rounded-xl">
                    {pr.accuracy}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 7. Three Flexible Subscription Plans Comparison */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div>
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-100 text-indigo-700">
                7. Flexible Subscription Plans
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-2">
                Compare Our 3 Flexible Plans (Free Lifetime • ₹49 Standard • ₹99 Premium)
              </h2>
            </div>
            <button
              onClick={onUpgradeClick}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-xl text-xs cursor-pointer"
            >
              Upgrade Plan Now
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Free Plan */}
            <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                    FREE FOREVER
                  </span>
                  <span className="text-xs font-bold text-slate-500">Never Expires</span>
                </div>
                <h3 className="text-xl font-black text-slate-900">FREE PLAN</h3>
                <div className="text-3xl font-black text-slate-900 my-2">
                  ₹0 <span className="text-xs font-bold text-emerald-600">/ Lifetime</span>
                </div>
                <ul className="space-y-2 text-xs font-bold text-slate-700 mt-4">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Brain Puzzles</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Sudoku (4×4, 6×6, 9×9)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> English Subject Quizzes</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Mathematics Subject Quizzes</li>
                  <li className="flex items-center gap-2 text-slate-400"><Lock className="w-4 h-4 shrink-0" /> Other 12 Subjects & Stories Locked</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-center text-xs font-black text-emerald-700">
                Automatically Active on Sign Up
              </div>
            </div>

            {/* Standard Plan ₹49 */}
            <div className="p-6 rounded-2xl bg-indigo-50/60 border-2 border-indigo-400 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-600 text-white">
                    STANDARD PLAN
                  </span>
                  <span className="text-xs font-bold text-indigo-700">3 Months</span>
                </div>
                <h3 className="text-xl font-black text-slate-900">STANDARD PLAN</h3>
                <div className="text-3xl font-black text-indigo-700 my-2">
                  ₹49 <span className="text-xs font-bold text-slate-500">/ 3 Months</span>
                </div>
                <ul className="space-y-2 text-xs font-bold text-slate-700 mt-4">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" /> Everything in Free Plan</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" /> Shivaji Maharaj Stories (Marathi Audio)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" /> Story World (45+ Moral Audio Stories)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" /> All 14 School Subjects & Quizzes</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" /> Drawing & Coloring Studio</li>
                  <li className="flex items-center gap-2 text-slate-400"><Lock className="w-4 h-4 shrink-0" /> Cricket, Scholarship & AI Academy Locked</li>
                </ul>
              </div>
              <button
                onClick={onUpgradeClick}
                className="mt-6 w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs cursor-pointer"
              >
                Upgrade to ₹49 Standard
              </button>
            </div>

            {/* Premium Plan ₹99 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 via-white to-orange-50 border-2 border-amber-400 flex flex-col justify-between shadow-md">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500 text-slate-950">
                    FULL UNLOCK • BEST VALUE
                  </span>
                  <span className="text-xs font-bold text-amber-800">3 Months</span>
                </div>
                <h3 className="text-xl font-black text-slate-900">PREMIUM PLAN</h3>
                <div className="text-3xl font-black text-amber-600 my-2">
                  ₹99 <span className="text-xs font-bold text-slate-500">/ 3 Months</span>
                </div>
                <ul className="space-y-2 text-xs font-bold text-slate-800 mt-4">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" /> Full Access to Entire Application</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" /> All 14 Subjects, Quizzes, Stories & Drawing</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" /> Cricket Champions Hub & 500+ Quiz Bank</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" /> Maharashtra Scholarship (4th & 7th Std)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" /> AI Learning Academy, Certificates & Referrals</li>
                </ul>
              </div>
              <button
                onClick={onUpgradeClick}
                className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-xs cursor-pointer shadow-sm"
              >
                Upgrade to ₹99 Premium
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
