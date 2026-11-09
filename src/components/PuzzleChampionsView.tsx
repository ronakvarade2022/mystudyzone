import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { PuzzleItem } from '../types';
import confetti from 'canvas-confetti';
import { 
  Puzzle, 
  Lightbulb, 
  Timer, 
  CheckCircle, 
  XCircle, 
  Sparkles, 
  Trophy, 
  RotateCcw, 
  ArrowRight,
  ShieldCheck,
  Brain,
  HelpCircle
} from 'lucide-react';

const MEMORY_CARDS_PAIRS = [
  { id: 1, symbol: '🦁', name: 'Lion' },
  { id: 2, symbol: '🚀', name: 'Rocket' },
  { id: 3, symbol: '🌟', name: 'Star' },
  { id: 4, symbol: '🎨', name: 'Palette' },
  { id: 5, symbol: '📚', name: 'Book' },
  { id: 6, symbol: '🍎', name: 'Apple' }
];

export const PuzzleChampionsView: React.FC = () => {
  const { currentStudent, allPuzzles, solvePuzzle } = useApp();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPuzzle, setSelectedPuzzle] = useState<PuzzleItem | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [showHint, setShowHint] = useState<boolean>(false);
  const [puzzleTimer, setPuzzleTimer] = useState<number>(60);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  // Memory Game State
  const [memoryCards, setMemoryCards] = useState<{ id: number; symbol: string; isFlipped: boolean; isMatched: boolean }[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [memoryMoves, setMemoryMoves] = useState<number>(0);
  const [memoryCompleted, setMemoryCompleted] = useState<boolean>(false);

  // Initialize Memory Game
  const initMemoryGame = () => {
    const deck = [...MEMORY_CARDS_PAIRS, ...MEMORY_CARDS_PAIRS]
      .sort(() => Math.random() - 0.5)
      .map((item, index) => ({
        id: index,
        symbol: item.symbol,
        isFlipped: false,
        isMatched: false
      }));
    setMemoryCards(deck);
    setFlippedIndices([]);
    setMemoryMoves(0);
    setMemoryCompleted(false);
  };

  useEffect(() => {
    initMemoryGame();
  }, []);

  // Filter puzzles according to class level
  const classNum = parseInt(currentStudent?.classLevel.replace('Class ', '') || '4', 10);
  const suitablePuzzles = allPuzzles.filter(p => {
    const classMatch = classNum >= p.minClass && classNum <= p.maxClass;
    const catMatch = activeCategory === 'all' || p.category === activeCategory;
    return classMatch && catMatch;
  });

  // Puzzle timer
  useEffect(() => {
    if (!timerRunning || !selectedPuzzle || feedback !== 'idle') return;
    if (puzzleTimer <= 0) return;

    const interval = setInterval(() => {
      setPuzzleTimer(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timerRunning, puzzleTimer, selectedPuzzle, feedback]);

  const handleOpenPuzzle = (puz: PuzzleItem) => {
    setSelectedPuzzle(puz);
    setUserAnswer('');
    setFeedback('idle');
    setShowHint(false);
    setPuzzleTimer(60);
    setTimerRunning(true);
  };

  const handleCheckAnswer = (ansToCheck?: string) => {
    if (!selectedPuzzle) return;
    const ans = ansToCheck !== undefined ? ansToCheck : userAnswer;
    const isCorrect = String(ans).trim().toLowerCase() === String(selectedPuzzle.correctAnswer).trim().toLowerCase();

    if (isCorrect) {
      setFeedback('correct');
      setTimerRunning(false);
      solvePuzzle(selectedPuzzle.id, selectedPuzzle.points);
      try {
        confetti({ particleCount: 60, spread: 55 });
      } catch (e) {}
    } else {
      setFeedback('incorrect');
    }
  };

  // Memory card click
  const handleCardClick = (index: number) => {
    if (flippedIndices.length === 2 || memoryCards[index].isFlipped || memoryCards[index].isMatched) return;

    const newCards = [...memoryCards];
    newCards[index].isFlipped = true;
    setMemoryCards(newCards);

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      setMemoryMoves(prev => prev + 1);
      const [firstIdx, secondIdx] = newFlipped;
      if (newCards[firstIdx].symbol === newCards[secondIdx].symbol) {
        // Matched!
        newCards[firstIdx].isMatched = true;
        newCards[secondIdx].isMatched = true;
        setMemoryCards(newCards);
        setFlippedIndices([]);

        if (newCards.every(c => c.isMatched)) {
          setMemoryCompleted(true);
          solvePuzzle('puz_memory_master', 50);
          try {
            confetti({ particleCount: 80, spread: 70 });
          } catch (e) {}
        }
      } else {
        // Unmatched, flip back
        setTimeout(() => {
          newCards[firstIdx].isFlipped = false;
          newCards[secondIdx].isFlipped = false;
          setMemoryCards(newCards);
          setFlippedIndices([]);
        }, 900);
      }
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-16">
      {/* Header and Filter */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🧩</span>
              <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
                PUZZLE CHAMPIONS
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              Interactive brain puzzles, logical riddles, mathematical teasers, and memory games tailored for {currentStudent?.classLevel}.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 text-xs font-bold text-amber-900">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Zero-Puzzle Repetition Active</span>
          </div>
        </div>

        {/* Categories Tab */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {['all', 'number', 'math', 'logic', 'word', 'odd_one_out', 'sequence', 'sudoku'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold capitalize whitespace-nowrap transition-all cursor-pointer ${activeCategory === cat ? 'bg-indigo-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-indigo-50'}`}
            >
              {cat === 'all' ? 'All Brain Teasers' : cat.replace('_', ' ') + ' Puzzles'}
            </button>
          ))}
        </div>
      </div>

      {/* SPECIAL INTERACTIVE BRAIN GAME: MEMORY MATCH CARDS (Section 22.A.11) */}
      <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white rounded-3xl p-6 sm:p-8 shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-1.5">
              <Brain className="w-4 h-4 text-amber-400" />
              Daily Memory Challenge
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-extrabold mt-0.5">
              Flip & Match the Pairs
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-xl text-xs font-bold">
              Moves: {memoryMoves}
            </div>
            <button
              onClick={initMemoryGame}
              className="p-2 rounded-xl bg-white/20 hover:bg-white/30 transition-colors cursor-pointer"
              title="Restart Memory Game"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 12 Memory Cards Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 pt-2">
          {memoryCards.map((card, idx) => (
            <button
              key={idx}
              onClick={() => handleCardClick(idx)}
              className={`h-24 sm:h-28 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl transition-all transform cursor-pointer border-2 ${card.isFlipped || card.isMatched ? 'bg-white text-slate-900 border-amber-400 scale-100' : 'bg-indigo-700/60 hover:bg-indigo-700 border-indigo-500/80 scale-95'}`}
            >
              {card.isFlipped || card.isMatched ? card.symbol : '❓'}
            </button>
          ))}
        </div>

        {memoryCompleted && (
          <div className="p-4 bg-emerald-500/20 border border-emerald-400 rounded-2xl text-center text-sm font-bold text-emerald-200 animate-in fade-in">
            Congratulations! You solved the Memory Match in {memoryMoves} moves and earned +50 Champion Points! 🎉
          </div>
        )}
      </div>

      {/* PUZZLES LIST FOR CURRENT CLASS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {suitablePuzzles.map((puz) => {
          const isSolved = currentStudent?.attemptedPuzzleIds.includes(puz.id);

          return (
            <div
              key={puz.id}
              onClick={() => handleOpenPuzzle(puz)}
              className="group bg-white rounded-3xl p-6 border border-amber-200/80 shadow-xs hover:shadow-lg hover:border-indigo-400 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-900">
                    {puz.category.replace('_', ' ')}
                  </span>
                  {isSolved ? (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle className="w-3 h-3" />
                      Solved
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-amber-700">
                      +{puz.points} Pts
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-indigo-800 transition-colors mb-2">
                  {puz.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4 font-medium">
                  {puz.prompt}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-700">
                <span>{isSolved ? 'Solve Again 🔄' : 'Solve Puzzle 💡'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      {/* INTERACTIVE PUZZLE SOLVER MODAL */}
      {selectedPuzzle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-amber-300 p-6 sm:p-8 space-y-6 animate-in zoom-in-95">
            {/* Modal Header */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded uppercase">
                  {selectedPuzzle.category} • Class {selectedPuzzle.minClass}–{selectedPuzzle.maxClass}
                </span>
                <h3 className="text-xl font-display font-bold text-slate-900 mt-1">
                  {selectedPuzzle.title}
                </h3>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full font-mono font-bold text-xs bg-amber-50 text-amber-900 border border-amber-200">
                <Timer className="w-3.5 h-3.5" />
                <span>{puzzleTimer}s</span>
              </div>
            </div>

            {/* Prompt Statement */}
            <div className="bg-indigo-50/60 p-5 rounded-2xl border border-indigo-200 text-slate-800 space-y-2">
              <p className="text-sm sm:text-base font-semibold leading-relaxed">
                {selectedPuzzle.prompt}
              </p>
              <p className="text-xs text-indigo-900 font-medium">
                {selectedPuzzle.instructions}
              </p>
            </div>

            {/* Multiple Choice Options or Text Input */}
            {selectedPuzzle.options ? (
              <div className="grid grid-cols-2 gap-3">
                {selectedPuzzle.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setUserAnswer(opt);
                      handleCheckAnswer(opt);
                    }}
                    className={`p-3.5 rounded-xl border-2 text-center text-sm font-bold transition-all cursor-pointer ${userAnswer === opt ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-indigo-50'}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Type your answer here..."
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-indigo-500 font-medium"
                />
                <button
                  onClick={() => handleCheckAnswer()}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs cursor-pointer shadow-xs"
                >
                  Check
                </button>
              </div>
            )}

            {/* Hint Section */}
            <div className="space-y-1">
              {!showHint ? (
                <button
                  onClick={() => setShowHint(true)}
                  className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>Need a Hint?</span>
                </button>
              ) : (
                <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{selectedPuzzle.hint}</span>
                </div>
              )}
            </div>

            {/* Feedback & Explanation */}
            {feedback === 'correct' && (
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-300 text-xs sm:text-sm text-emerald-950 space-y-1 animate-in fade-in">
                <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                  <CheckCircle className="w-4 h-4" />
                  <span>Brilliant! That is Correct! (+{selectedPuzzle.points} Pts)</span>
                </div>
                <p className="text-emerald-900 leading-relaxed">{selectedPuzzle.explanation}</p>
              </div>
            )}

            {feedback === 'incorrect' && (
              <div className="p-4 bg-rose-50 rounded-2xl border border-rose-300 text-xs sm:text-sm text-rose-950 space-y-1 animate-in fade-in">
                <div className="flex items-center gap-1.5 font-bold text-rose-800">
                  <XCircle className="w-4 h-4" />
                  <span>Not quite! Try reviewing the clue or using the hint.</span>
                </div>
              </div>
            )}

            {/* Footer Buttons */}
            <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
              {feedback === 'correct' && (
                <button
                  onClick={() => {
                    const nextPuz = suitablePuzzles.find(p => p.id !== selectedPuzzle?.id && !currentStudent?.attemptedPuzzleIds.includes(p.id)) || suitablePuzzles[0];
                    if (nextPuz && nextPuz.id !== selectedPuzzle.id) {
                      handleOpenPuzzle(nextPuz);
                    } else {
                      setSelectedPuzzle(null);
                    }
                  }}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
                >
                  Next Brain Puzzle →
                </button>
              )}
              <button
                onClick={() => setSelectedPuzzle(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
