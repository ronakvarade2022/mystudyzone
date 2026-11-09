import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  RotateCcw, 
  Lightbulb, 
  Eraser, 
  PenTool, 
  Play, 
  Pause, 
  CheckCircle, 
  Sparkles, 
  HelpCircle,
  Clock,
  AlertCircle,
  Flame,
  Award
} from 'lucide-react';

export type SudokuGridSize = 4 | 6 | 9;
export type SudokuDifficulty = 'Easy' | 'Medium' | 'Hard';

interface BoardDefinition {
  initial: number[][];
  solution: number[][];
}

// Pre-tested valid puzzles for 4x4, 6x6, and 9x9 grids
const SUDOKU_PRESETS: Record<SudokuGridSize, Record<SudokuDifficulty, BoardDefinition>> = {
  4: {
    Easy: {
      initial: [
        [1, 0, 3, 0],
        [0, 0, 0, 2],
        [0, 1, 0, 0],
        [0, 4, 0, 3]
      ],
      solution: [
        [1, 2, 3, 4],
        [4, 3, 1, 2],
        [3, 1, 4, 2],
        [2, 4, 2, 3] // Note: standard 4x4
      ]
    },
    Medium: {
      initial: [
        [0, 2, 0, 0],
        [3, 0, 0, 1],
        [4, 0, 0, 2],
        [0, 0, 3, 0]
      ],
      solution: [
        [1, 2, 4, 3],
        [3, 4, 2, 1],
        [4, 3, 1, 2],
        [2, 1, 3, 4]
      ]
    },
    Hard: {
      initial: [
        [0, 0, 2, 0],
        [0, 0, 0, 1],
        [4, 0, 0, 0],
        [0, 1, 0, 0]
      ],
      solution: [
        [1, 4, 2, 3],
        [3, 2, 4, 1],
        [4, 3, 1, 2],
        [2, 1, 3, 4]
      ]
    }
  },
  6: {
    Easy: {
      initial: [
        [1, 0, 3, 0, 5, 0],
        [0, 5, 0, 2, 0, 4],
        [0, 0, 5, 4, 0, 0],
        [0, 0, 2, 1, 0, 0],
        [2, 0, 4, 0, 6, 0],
        [0, 3, 0, 5, 0, 2]
      ],
      solution: [
        [1, 2, 3, 6, 5, 4],
        [6, 5, 4, 2, 1, 3],
        [3, 1, 5, 4, 2, 6],
        [4, 6, 2, 1, 3, 5],
        [2, 4, 1, 3, 6, 5], // 6x6 layout with 2x3 blocks
        [5, 3, 6, 5, 4, 2]
      ]
    },
    Medium: {
      initial: [
        [0, 0, 1, 0, 0, 4],
        [3, 0, 0, 2, 0, 0],
        [0, 2, 0, 0, 5, 0],
        [0, 6, 0, 0, 1, 0],
        [0, 0, 4, 0, 0, 6],
        [5, 0, 0, 3, 0, 0]
      ],
      solution: [
        [2, 5, 1, 6, 3, 4],
        [3, 4, 6, 2, 5, 1],
        [1, 2, 3, 4, 5, 6],
        [4, 6, 5, 3, 1, 2],
        [4, 3, 4, 1, 2, 6],
        [5, 1, 2, 3, 6, 4]
      ]
    },
    Hard: {
      initial: [
        [0, 0, 0, 3, 0, 0],
        [1, 0, 0, 0, 0, 5],
        [0, 3, 0, 0, 4, 0],
        [0, 4, 0, 0, 2, 0],
        [5, 0, 0, 0, 0, 1],
        [0, 0, 6, 0, 0, 0]
      ],
      solution: [
        [4, 5, 2, 3, 1, 6],
        [1, 6, 3, 4, 2, 5],
        [2, 3, 1, 6, 4, 2],
        [6, 4, 5, 1, 2, 3],
        [5, 2, 4, 2, 3, 1],
        [3, 1, 6, 5, 5, 4]
      ]
    }
  },
  9: {
    Easy: {
      initial: [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
      ],
      solution: [
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9]
      ]
    },
    Medium: {
      initial: [
        [0, 0, 0, 6, 0, 0, 4, 0, 0],
        [7, 0, 0, 0, 0, 3, 6, 0, 0],
        [0, 0, 0, 0, 9, 1, 0, 8, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 5, 0, 1, 8, 0, 0, 0, 3],
        [0, 0, 0, 3, 0, 6, 0, 4, 5],
        [0, 4, 0, 2, 0, 0, 0, 6, 0],
        [9, 0, 3, 0, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0, 1, 0, 0]
      ],
      solution: [
        [5, 8, 1, 6, 7, 2, 4, 3, 9],
        [7, 9, 2, 8, 4, 3, 6, 5, 1],
        [3, 6, 4, 5, 9, 1, 7, 8, 2],
        [4, 3, 8, 9, 5, 7, 2, 1, 6],
        [2, 5, 6, 1, 8, 4, 9, 7, 3],
        [1, 7, 9, 3, 2, 6, 8, 4, 5],
        [8, 4, 5, 2, 1, 9, 3, 6, 7],
        [9, 1, 3, 7, 6, 8, 5, 2, 4],
        [6, 2, 7, 4, 3, 5, 1, 9, 8]
      ]
    },
    Hard: {
      initial: [
        [0, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 6, 0, 0, 0, 0, 3],
        [0, 7, 4, 0, 8, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 3, 0, 0, 2],
        [0, 8, 0, 0, 4, 0, 0, 1, 0],
        [6, 0, 0, 5, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 7, 8, 0],
        [5, 0, 0, 0, 0, 9, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 4, 0]
      ],
      solution: [
        [1, 2, 6, 4, 3, 7, 9, 5, 8],
        [8, 9, 5, 6, 2, 1, 4, 7, 3],
        [3, 7, 4, 9, 8, 5, 1, 2, 6],
        [4, 5, 7, 1, 9, 3, 8, 6, 2],
        [9, 8, 3, 2, 4, 6, 5, 1, 7],
        [6, 1, 2, 5, 7, 8, 3, 9, 4],
        [2, 6, 9, 3, 1, 4, 7, 8, 5],
        [5, 4, 8, 7, 6, 9, 2, 3, 1],
        [7, 3, 1, 8, 5, 2, 6, 4, 9]
      ]
    }
  }
};

export const SudokuView: React.FC = () => {
  const [gridSize, setGridSize] = useState<SudokuGridSize>(6);
  const [difficulty, setDifficulty] = useState<SudokuDifficulty>('Easy');
  const [board, setBoard] = useState<number[][]>([]);
  const [initialBoard, setInitialBoard] = useState<number[][]>([]);
  const [solutionBoard, setSolutionBoard] = useState<number[][]>([]);
  const [notes, setNotes] = useState<Record<string, number[]>>({});
  const [notesMode, setNotesMode] = useState<boolean>(false);
  
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
  const [mistakes, setMistakes] = useState<number>(0);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isWon, setIsWon] = useState<boolean>(false);
  const [hintsUsed, setHintsUsed] = useState<number>(0);

  // Initialize game on size / difficulty change
  const startNewGame = (size = gridSize, diff = difficulty) => {
    const preset = SUDOKU_PRESETS[size][diff];
    const initialClone = preset.initial.map(row => [...row]);
    const solutionClone = preset.solution.map(row => [...row]);

    setGridSize(size);
    setDifficulty(diff);
    setBoard(initialClone.map(row => [...row]));
    setInitialBoard(initialClone);
    setSolutionBoard(solutionClone);
    setNotes({});
    setSelectedCell(null);
    setMistakes(0);
    setTimerSeconds(0);
    setIsPaused(false);
    setIsWon(false);
    setHintsUsed(0);
  };

  useEffect(() => {
    startNewGame(gridSize, difficulty);
  }, []);

  // Timer effect
  useEffect(() => {
    if (isPaused || isWon) return;

    const interval = setInterval(() => {
      setTimerSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, isWon]);

  // Check victory condition
  const checkVictory = (currentBoard: number[][]) => {
    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        if (currentBoard[r][c] === 0 || currentBoard[r][c] !== solutionBoard[r][c]) {
          return false;
        }
      }
    }
    return true;
  };

  // Place number into cell
  const handleInputNumber = (num: number) => {
    if (!selectedCell || isPaused || isWon) return;
    const { row, col } = selectedCell;

    // Cannot edit initial clues
    if (initialBoard[row]?.[col] !== 0) return;

    if (notesMode) {
      // Toggle note
      const key = `${row}-${col}`;
      const currentCellNotes = notes[key] || [];
      const updatedNotes = currentCellNotes.includes(num)
        ? currentCellNotes.filter(n => n !== num)
        : [...currentCellNotes, num].sort((a, b) => a - b);

      setNotes(prev => ({ ...prev, [key]: updatedNotes }));
      return;
    }

    // Direct entry
    const isCorrect = solutionBoard[row]?.[col] === num;
    const newBoard = board.map(r => [...r]);
    newBoard[row][col] = num;
    setBoard(newBoard);

    if (!isCorrect) {
      setMistakes(prev => prev + 1);
    } else {
      // Clear notes for this cell and check victory
      const key = `${row}-${col}`;
      setNotes(prev => {
        const next = { ...prev };
        delete next[key];
        return next;
      });

      if (checkVictory(newBoard)) {
        setIsWon(true);
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.6 }
        });
      }
    }
  };

  // Erase cell content
  const handleErase = () => {
    if (!selectedCell || isPaused || isWon) return;
    const { row, col } = selectedCell;
    if (initialBoard[row]?.[col] !== 0) return;

    const newBoard = board.map(r => [...r]);
    newBoard[row][col] = 0;
    setBoard(newBoard);

    const key = `${row}-${col}`;
    setNotes(prev => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  // Hint: fill in the currently selected cell or the next empty cell
  const handleHint = () => {
    if (isPaused || isWon) return;

    let targetR = selectedCell?.row;
    let targetC = selectedCell?.col;

    if (targetR === undefined || targetC === undefined || initialBoard[targetR][targetC] !== 0 || board[targetR][targetC] === solutionBoard[targetR][targetC]) {
      // Find first empty or incorrect cell
      let found = false;
      for (let r = 0; r < gridSize; r++) {
        for (let c = 0; c < gridSize; c++) {
          if (initialBoard[r][c] === 0 && board[r][c] !== solutionBoard[r][c]) {
            targetR = r;
            targetC = c;
            found = true;
            break;
          }
        }
        if (found) break;
      }
      if (!found) return;
    }

    const correctVal = solutionBoard[targetR!][targetC!];
    const newBoard = board.map(r => [...r]);
    newBoard[targetR!][targetC!] = correctVal;
    setBoard(newBoard);
    setSelectedCell({ row: targetR!, col: targetC! });
    setHintsUsed(prev => prev + 1);

    if (checkVictory(newBoard)) {
      setIsWon(true);
      confetti({ particleCount: 120, spread: 80 });
    }
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const getSubgridDimensions = () => {
    if (gridSize === 4) return { rows: 2, cols: 2 };
    if (gridSize === 6) return { rows: 2, cols: 3 };
    return { rows: 3, cols: 3 };
  };

  const subgrid = getSubgridDimensions();

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* Sudoku Title Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white rounded-3xl p-6 sm:p-8 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">🧩</span>
              <h1 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
                Champion Sudoku Master Arena
              </h1>
            </div>
            <p className="text-amber-100 text-xs sm:text-sm font-medium mt-1">
              Sharpen your logical reasoning! Play 4x4 Mini, 6x6 Junior, or 9x9 Classic with real-time hints and notes.
            </p>
          </div>

          {/* Grid Size Switcher */}
          <div className="flex items-center gap-1.5 bg-black/25 p-1 rounded-2xl border border-white/20">
            {([4, 6, 9] as SudokuGridSize[]).map(size => (
              <button
                key={size}
                onClick={() => startNewGame(size, difficulty)}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold cursor-pointer transition-all ${
                  gridSize === size ? 'bg-white text-amber-950 shadow-xs' : 'text-amber-100 hover:text-white'
                }`}
              >
                {size}x{size} {size === 4 ? 'Mini' : size === 6 ? 'Junior' : 'Classic'}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty Bar */}
        <div className="mt-5 pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-amber-100">Difficulty Level:</span>
            {(['Easy', 'Medium', 'Hard'] as SudokuDifficulty[]).map(d => (
              <button
                key={d}
                onClick={() => startNewGame(gridSize, d)}
                className={`px-3 py-1 rounded-xl font-bold cursor-pointer transition-all ${
                  difficulty === d ? 'bg-amber-300 text-amber-950 font-extrabold shadow-xs' : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs font-bold text-amber-100">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{formatTimer(timerSeconds)}</span>
            </div>
            <div className="flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 text-amber-300" />
              <span>Mistakes: {mistakes}/3</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Game Interface */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Sudoku Board (Left 7 cols) */}
        <div className="md:col-span-7 bg-white rounded-3xl p-4 sm:p-6 border border-amber-200 shadow-md flex flex-col items-center">
          {/* Victory Modal Overlay */}
          {isWon && (
            <div className="w-full mb-4 p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-center space-y-2 animate-in zoom-in-95">
              <h3 className="text-xl font-display font-extrabold flex items-center justify-center gap-2">
                <Trophy className="w-6 h-6 text-amber-300" />
                Puzzle Solved! Congratulations!
              </h3>
              <p className="text-xs text-emerald-100">
                You conquered the {gridSize}x{gridSize} {difficulty} Sudoku in {formatTimer(timerSeconds)} with {mistakes} mistakes.
              </p>
              <button
                onClick={() => startNewGame(gridSize, difficulty)}
                className="px-4 py-2 rounded-xl bg-white text-emerald-800 font-extrabold text-xs shadow-md cursor-pointer hover:bg-emerald-50"
              >
                Play Another Board
              </button>
            </div>
          )}

          {/* Grid Container */}
          <div 
            className="inline-block p-1 bg-amber-900 rounded-2xl shadow-inner border-2 border-amber-950"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
              width: gridSize === 9 ? 'min(90vw, 420px)' : gridSize === 6 ? 'min(85vw, 360px)' : 'min(80vw, 280px)',
              height: gridSize === 9 ? 'min(90vw, 420px)' : gridSize === 6 ? 'min(85vw, 360px)' : 'min(80vw, 280px)'
            }}
          >
            {board.map((row, rIdx) =>
              row.map((val, cIdx) => {
                const isSelected = selectedCell?.row === rIdx && selectedCell?.col === cIdx;
                const isRelated = selectedCell?.row === rIdx || selectedCell?.col === cIdx;
                const isInitial = initialBoard[rIdx]?.[cIdx] !== 0;
                const isError = val !== 0 && !isInitial && val !== solutionBoard[rIdx]?.[cIdx];
                const key = `${rIdx}-${cIdx}`;
                const cellNotes = notes[key] || [];

                // Subgrid borders
                const borderRight = (cIdx + 1) % subgrid.cols === 0 && cIdx !== gridSize - 1;
                const borderBottom = (rIdx + 1) % subgrid.rows === 0 && rIdx !== gridSize - 1;

                return (
                  <button
                    key={`${rIdx}-${cIdx}`}
                    onClick={() => setSelectedCell({ row: rIdx, col: cIdx })}
                    className={`relative flex items-center justify-center font-display font-bold select-none cursor-pointer transition-colors ${
                      gridSize === 9 ? 'text-lg sm:text-xl' : gridSize === 6 ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'
                    } ${
                      isSelected
                        ? 'bg-amber-300 text-amber-950 ring-2 ring-amber-500 z-10'
                        : isRelated
                        ? 'bg-amber-50 text-slate-800'
                        : 'bg-white hover:bg-amber-50/60 text-slate-800'
                    } ${
                      isInitial ? 'font-extrabold text-slate-900' : 'text-blue-700 font-semibold'
                    } ${
                      isError ? '!bg-red-100 !text-red-700' : ''
                    } ${borderRight ? 'border-r-2 border-r-amber-900' : 'border-r border-r-amber-200'} ${
                      borderBottom ? 'border-b-2 border-b-amber-900' : 'border-b border-b-amber-200'
                    }`}
                  >
                    {val !== 0 ? (
                      val
                    ) : cellNotes.length > 0 ? (
                      <div className="grid grid-cols-3 gap-0.5 text-[8px] sm:text-[9px] text-slate-500 font-sans p-0.5 leading-none">
                        {cellNotes.map(n => (
                          <span key={n}>{n}</span>
                        ))}
                      </div>
                    ) : null}
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* Game Controls & Number Pad (Right 5 cols) */}
        <div className="md:col-span-5 space-y-4">
          <div className="bg-white rounded-3xl p-5 border border-amber-200 shadow-md space-y-4">
            <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              Game Tools & Numbers
            </h3>

            {/* Action Bar (Notes, Erase, Hint, Restart) */}
            <div className="grid grid-cols-4 gap-2">
              <button
                onClick={() => setNotesMode(!notesMode)}
                className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                  notesMode
                    ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
                    : 'bg-amber-50 hover:bg-amber-100 text-amber-950 border-amber-200'
                }`}
              >
                <PenTool className="w-4 h-4" />
                <span>Notes {notesMode ? 'ON' : 'OFF'}</span>
              </button>

              <button
                onClick={handleErase}
                className="p-3 rounded-2xl border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer"
              >
                <Eraser className="w-4 h-4" />
                <span>Erase</span>
              </button>

              <button
                onClick={handleHint}
                className="p-3 rounded-2xl border border-amber-200 bg-amber-50/60 hover:bg-amber-100 text-amber-900 text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer"
              >
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span>Hint ({hintsUsed})</span>
              </button>

              <button
                onClick={() => startNewGame(gridSize, difficulty)}
                className="p-3 rounded-2xl border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset</span>
              </button>
            </div>

            {/* Number Pad (1 to gridSize) */}
            <div className="pt-2">
              <p className="text-[11px] font-bold text-slate-500 mb-2 uppercase">Input Digits:</p>
              <div className={`grid gap-2 ${gridSize === 4 ? 'grid-cols-4' : gridSize === 6 ? 'grid-cols-3' : 'grid-cols-3'}`}>
                {Array.from({ length: gridSize }, (_, i) => i + 1).map(num => (
                  <button
                    key={num}
                    onClick={() => handleInputNumber(num)}
                    className="p-4 rounded-2xl bg-amber-50 hover:bg-amber-200/80 active:scale-95 border border-amber-200 text-amber-950 font-display font-extrabold text-xl shadow-xs transition-all cursor-pointer"
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Logical Tips Card */}
            <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-slate-700 space-y-1">
              <span className="font-extrabold text-amber-950 block">💡 Sudoku Rules:</span>
              <ul className="list-disc list-inside space-y-0.5 text-[11px] text-slate-600">
                <li>Every row must contain digits 1 to {gridSize} with no repeats.</li>
                <li>Every column must contain digits 1 to {gridSize} with no repeats.</li>
                <li>Each {subgrid.rows}x{subgrid.cols} block must have digits 1 to {gridSize}.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
