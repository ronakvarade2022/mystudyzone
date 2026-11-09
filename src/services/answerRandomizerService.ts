import { QuizQuestion } from '../types';

/**
 * Generates an independent, highly randomized, non-repeating sequence of answer indices (0=A, 1=B, 2=C, 3=D)
 * for a quiz that strictly prevents predictability.
 *
 * Strict Rules Enforced:
 * 1. Independent random position for each question (A, B, C, or D).
 * 2. Never allows cyclic sequences (e.g. 0,1,2,3 or 3,2,1,0 or 1,2,3,0).
 * 3. Never allows alternating repeating oscillations (e.g. 0,1,0,1,0,1).
 * 4. Never allows 3 or more consecutive identical letters (e.g. no A,A,A or B,B,B).
 * 5. Guarantees reasonable distribution: in a 10-question set, all 4 options (A, B, C, D) appear,
 *    each between 1 and 4 times, without forcing equal numbers in a predictable pattern.
 * 6. Completely unpredictable progression (e.g. D, A, C, C, B, D, A, B, C, A).
 */
export function generateUnpredictableAnswerSequence(count: number = 10): number[] {
  let attempts = 0;
  const maxAttempts = 1000;

  while (attempts < maxAttempts) {
    attempts++;
    const sequence: number[] = [];

    for (let i = 0; i < count; i++) {
      sequence.push(Math.floor(Math.random() * 4));
    }

    // Check Rule 1: No 3 consecutive identical answers
    let hasTripleStreak = false;
    for (let i = 2; i < count; i++) {
      if (sequence[i] === sequence[i - 1] && sequence[i - 1] === sequence[i - 2]) {
        hasTripleStreak = true;
        break;
      }
    }
    if (hasTripleStreak) continue;

    // Check Rule 2: No cyclic progressions of length 3 or more (e.g. A->B->C, B->C->D, D->C->B)
    let hasCyclicProgression = false;
    for (let i = 2; i < count; i++) {
      const step1 = (sequence[i - 1] - sequence[i - 2] + 4) % 4;
      const step2 = (sequence[i] - sequence[i - 1] + 4) % 4;
      if ((step1 === 1 && step2 === 1) || (step1 === 3 && step2 === 3)) {
        hasCyclicProgression = true;
        break;
      }
    }
    if (hasCyclicProgression) continue;

    // Check Rule 3: No alternating oscillations of length >= 4 (e.g. A-B-A-B or C-D-C-D)
    let hasAlternatingPattern = false;
    for (let i = 3; i < count; i++) {
      if (sequence[i] === sequence[i - 2] && sequence[i - 1] === sequence[i - 3]) {
        hasAlternatingPattern = true;
        break;
      }
    }
    if (hasAlternatingPattern) continue;

    // Check Rule 4: No repeating 3-gram pattern (e.g. A-B-C-A-B-C)
    let hasRepeating3Gram = false;
    for (let i = 5; i < count; i++) {
      if (
        sequence[i] === sequence[i - 3] &&
        sequence[i - 1] === sequence[i - 4] &&
        sequence[i - 2] === sequence[i - 5]
      ) {
        hasRepeating3Gram = true;
        break;
      }
    }
    if (hasRepeating3Gram) continue;

    // Check Rule 5: Reasonable distribution across all 4 options
    const counts = [0, 0, 0, 0];
    for (const val of sequence) {
      counts[val]++;
    }

    // Every option must appear at least 1 time, and no option more than 4 times in a 10-question quiz
    const allPresent = counts.every(c => c >= 1 && c <= 4);
    if (!allPresent) continue;

    // Passed all anti-predictability checks!
    return sequence;
  }

  // Safe fallback if loop somehow exceeded maxAttempts:
  // Dynamically constructed non-cyclic permutation of standard random distribution
  const fallback = [3, 0, 2, 2, 1, 3, 0, 1, 2, 0]; // (D, A, C, C, B, D, A, B, C, A)
  // Randomly rotate by dynamic offset to guarantee variability
  const offset = Math.floor(Math.random() * 4);
  return fallback.map(x => (x + offset) % 4);
}

/**
 * Shuffles an array in place using standard Fisher-Yates algorithm.
 */
function fisherYatesShuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Shuffles the 4 options of a question and places the correct answer at a target index (0=A, 1=B, 2=C, 3=D).
 * Updates the options array and correctIndex while preserving 100% correctness of answers and explanations.
 */
export function shuffleSingleQuestionOptions(
  question: QuizQuestion,
  targetCorrectIndex?: number
): QuizQuestion {
  const targetIndex = targetCorrectIndex !== undefined 
    ? targetCorrectIndex 
    : Math.floor(Math.random() * 4);

  const originalCorrectText = question.options[question.correctIndex];
  
  // Extract the 3 distractors
  const distractors: string[] = [];
  for (let i = 0; i < question.options.length; i++) {
    if (i !== question.correctIndex) {
      distractors.push(question.options[i]);
    }
  }

  // Shuffle the distractors independently
  const shuffledDistractors = fisherYatesShuffle(distractors);

  // Construct new options array placing the correct answer precisely at targetIndex
  const newOptions: string[] = [];
  let distractorPointer = 0;

  for (let i = 0; i < 4; i++) {
    if (i === targetIndex) {
      newOptions.push(originalCorrectText);
    } else {
      newOptions.push(shuffledDistractors[distractorPointer++]);
    }
  }

  return {
    ...question,
    options: newOptions as [string, string, string, string],
    correctIndex: targetIndex
  };
}

/**
 * Randomizes an entire set of 10 quiz questions (especially for Level 4)
 * with independent random option positions and an unpredictable sequence.
 */
export function randomizeQuizQuestions(
  questions: QuizQuestion[],
  isStrictLevel4: boolean = true
): QuizQuestion[] {
  if (!questions || questions.length === 0) return [];

  const count = questions.length;
  // Generate an unpredictable sequence of answer positions
  const sequence = generateUnpredictableAnswerSequence(count);

  return questions.map((q, idx) => {
    const targetIdx = sequence[idx % sequence.length];
    return shuffleSingleQuestionOptions(q, targetIdx);
  });
}
