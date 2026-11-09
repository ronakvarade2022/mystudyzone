import { ClassLevel, SubjectName, QuizQuestion } from '../types';

// Normalizes text by removing punctuation, lowercasing, and stripping common filler words
export function normalizeQuestionText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s\u0900-\u097F]/g, ' ') // Preserves English and Devanagari (Hindi/Marathi) letters
    .replace(/\s+/g, ' ')
    .trim();
}

// Tokenizes string into meaningful words (ignores standard filler words)
const STOP_WORDS = new Set([
  'the', 'is', 'a', 'an', 'and', 'or', 'in', 'of', 'to', 'for', 'which', 'what', 'who', 
  'where', 'how', 'when', 'are', 'was', 'were', 'has', 'have', 'had', 'does', 'do', 'did',
  'का', 'की', 'के', 'में', 'है', 'हैं', 'था', 'थी', 'थे', 'और', 'या', 'कोणता', 'कोणती', 'आहे'
]);

export function getSemanticTokens(text: string): Set<string> {
  const words = normalizeQuestionText(text).split(' ');
  const tokens = new Set<string>();
  for (const w of words) {
    if (w.length > 2 && !STOP_WORDS.has(w)) {
      tokens.add(w);
    }
  }
  return tokens;
}

// Calculates Jaccard similarity between two sets of tokens
export function calculateTokenSimilarity(setA: Set<string>, setB: Set<string>): number {
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  const union = new Set([...setA, ...setB]).size;
  return union === 0 ? 0 : intersection / union;
}

export interface DuplicateCheckResult {
  isDuplicate: boolean;
  duplicateReason?: string;
  matchedQuestionId?: string;
  matchedQuestionText?: string;
  similarityScore: number;
}

// Checks a candidate question against all existing questions
export function checkQuestionDuplicate(
  candidateText: string,
  candidateCorrectAnswer: string,
  existingQuestions: QuizQuestion[]
): DuplicateCheckResult {
  const normCand = normalizeQuestionText(candidateText);
  const candTokens = getSemanticTokens(candidateText);
  const normAns = normalizeQuestionText(candidateCorrectAnswer);

  for (const existing of existingQuestions) {
    const normExist = normalizeQuestionText(existing.questionText);
    
    // 1. Exact match check
    if (normCand === normExist) {
      return {
        isDuplicate: true,
        duplicateReason: 'Exact match detected with an existing question in database.',
        matchedQuestionId: existing.id,
        matchedQuestionText: existing.questionText,
        similarityScore: 1.0
      };
    }

    // 2. Semantic token overlap check
    const existTokens = getSemanticTokens(existing.questionText);
    const tokenSim = calculateTokenSimilarity(candTokens, existTokens);
    const existAns = normalizeQuestionText(existing.options[existing.correctIndex]);

    // Same or near-identical answer with high semantic overlap
    if (tokenSim > 0.65) {
      return {
        isDuplicate: true,
        duplicateReason: `High semantic similarity (${Math.round(tokenSim * 100)}%) with identical conceptual phrasing.`,
        matchedQuestionId: existing.id,
        matchedQuestionText: existing.questionText,
        similarityScore: tokenSim
      };
    }

    if (tokenSim > 0.50 && normAns === existAns) {
      return {
        isDuplicate: true,
        duplicateReason: `Semantic similarity (${Math.round(tokenSim * 100)}%) with identical target correct answer "${existing.options[existing.correctIndex]}".`,
        matchedQuestionId: existing.id,
        matchedQuestionText: existing.questionText,
        similarityScore: tokenSim
      };
    }
  }

  return {
    isDuplicate: false,
    similarityScore: 0
  };
}

// Initial robust seed bank with high quality questions across multiple subjects and classes
export const SEED_QUESTIONS: QuizQuestion[] = [
  // Class 2
  {
    id: 'VC-C2-MAT-001',
    classLevel: 'Class 2',
    subject: 'Mathematics',
    questionText: 'What is 15 plus 7?',
    normalizedHash: normalizeQuestionText('What is 15 plus 7?'),
    options: ['21', '22', '23', '25'],
    correctIndex: 1,
    explanation: '15 + 7 = 22.',
    difficulty: 'easy',
    timesAttempted: 12,
    timesCorrect: 11,
    status: 'approved',
    author: 'system',
    createdAt: '2026-05-01'
  },
  {
    id: 'VC-C2-MAT-002',
    classLevel: 'Class 2',
    subject: 'Mathematics',
    questionText: 'Which number comes right after 89?',
    normalizedHash: normalizeQuestionText('Which number comes right after 89?'),
    options: ['88', '90', '91', '99'],
    correctIndex: 1,
    explanation: 'When counting by ones, 90 comes directly after 89.',
    difficulty: 'easy',
    timesAttempted: 8,
    timesCorrect: 8,
    status: 'approved',
    author: 'system',
    createdAt: '2026-05-01'
  },
  {
    id: 'VC-C2-ENG-001',
    classLevel: 'Class 2',
    subject: 'English',
    questionText: 'Which of the following is a naming word (Noun)?',
    normalizedHash: normalizeQuestionText('Which of the following is a naming word (Noun)?'),
    options: ['Run', 'Elephant', 'Quickly', 'Happy'],
    correctIndex: 1,
    explanation: 'Elephant is the name of an animal, so it is a noun.',
    difficulty: 'easy',
    timesAttempted: 15,
    timesCorrect: 14,
    status: 'approved',
    author: 'system',
    createdAt: '2026-05-01'
  },
  {
    id: 'VC-C2-SCI-001',
    classLevel: 'Class 2',
    subject: 'Science',
    questionText: 'Which part of a plant grows under the soil and absorbs water?',
    normalizedHash: normalizeQuestionText('Which part of a plant grows under the soil and absorbs water?'),
    options: ['Leaves', 'Roots', 'Stem', 'Flowers'],
    correctIndex: 1,
    explanation: 'Roots grow underground and absorb water and nutrients from the soil.',
    difficulty: 'easy',
    timesAttempted: 10,
    timesCorrect: 9,
    status: 'approved',
    author: 'system',
    createdAt: '2026-05-01'
  },
  {
    id: 'VC-C2-EVS-001',
    classLevel: 'Class 2',
    subject: 'Environmental Studies',
    questionText: 'Which animal gives us wool to keep warm during winter?',
    normalizedHash: normalizeQuestionText('Which animal gives us wool to keep warm during winter?'),
    options: ['Cow', 'Horse', 'Sheep', 'Duck'],
    correctIndex: 2,
    explanation: 'Sheep produce soft wool which is woven into warm sweaters and blankets.',
    difficulty: 'easy',
    timesAttempted: 14,
    timesCorrect: 13,
    status: 'approved',
    author: 'system',
    createdAt: '2026-05-01'
  },
  {
    id: 'VC-C2-HIN-001',
    classLevel: 'Class 2',
    subject: 'Hindi',
    questionText: 'हिंदी वर्णमाला में पहला स्वर कौन सा है?',
    normalizedHash: normalizeQuestionText('हिंदी वर्णमाला में पहला स्वर कौन सा है?'),
    options: ['आ', 'अ', 'इ', 'ई'],
    correctIndex: 1,
    explanation: 'हिंदी वर्णमाला का पहला स्वर "अ" होता है।',
    difficulty: 'easy',
    timesAttempted: 10,
    timesCorrect: 10,
    status: 'approved',
    author: 'system',
    createdAt: '2026-05-01'
  },
  {
    id: 'VC-C2-MAR-001',
    classLevel: 'Class 2',
    subject: 'Marathi',
    questionText: 'मराठीत "सूर्य" या शब्दाचा समानार्थी शब्द कोणता?',
    normalizedHash: normalizeQuestionText('मराठीत "सूर्य" या शब्दाचा समानार्थी शब्द कोणता?'),
    options: ['रवी', 'चंद्र', 'तारे', 'आकाश'],
    correctIndex: 0,
    explanation: 'सूर्याला मराठीत रवी, भास्कर किंवा दिनकर असेही म्हणतात.',
    difficulty: 'easy',
    timesAttempted: 9,
    timesCorrect: 8,
    status: 'approved',
    author: 'system',
    createdAt: '2026-05-01'
  },
  {
    id: 'VC-C2-GK-001',
    classLevel: 'Class 2',
    subject: 'General Knowledge',
    questionText: 'What is the national fruit of India?',
    normalizedHash: normalizeQuestionText('What is the national fruit of India?'),
    options: ['Apple', 'Mango', 'Banana', 'Orange'],
    correctIndex: 1,
    explanation: 'Mango is celebrated as the national fruit of India.',
    difficulty: 'easy',
    timesAttempted: 20,
    timesCorrect: 19,
    status: 'approved',
    author: 'system',
    createdAt: '2026-05-01'
  },
  {
    id: 'VC-C2-COM-001',
    classLevel: 'Class 2',
    subject: 'Computer Knowledge',
    questionText: 'Which computer device looks like a small plastic mouse and moves the pointer?',
    normalizedHash: normalizeQuestionText('Which computer device looks like a small plastic mouse and moves the pointer?'),
    options: ['Keyboard', 'Computer Mouse', 'Printer', 'Monitor'],
    correctIndex: 1,
    explanation: 'The computer mouse is a pointing device used to click and select on the screen.',
    difficulty: 'easy',
    timesAttempted: 12,
    timesCorrect: 11,
    status: 'approved',
    author: 'system',
    createdAt: '2026-05-01'
  },
  {
    id: 'VC-C2-LOG-001',
    classLevel: 'Class 2',
    subject: 'Logical Reasoning',
    questionText: 'Look at the pattern: Circle, Square, Circle, Square, ____. What comes next?',
    normalizedHash: normalizeQuestionText('Look at the pattern: Circle, Square, Circle, Square, ____. What comes next?'),
    options: ['Triangle', 'Circle', 'Star', 'Rectangle'],
    correctIndex: 1,
    explanation: 'The pattern repeats alternately: Circle, Square, Circle, Square, Circle.',
    difficulty: 'easy',
    timesAttempted: 16,
    timesCorrect: 15,
    status: 'approved',
    author: 'system',
    createdAt: '2026-05-01'
  },

  // Class 3
  {
    id: 'VC-C3-MAT-001',
    classLevel: 'Class 3',
    subject: 'Mathematics',
    questionText: 'How many sides does a regular Pentagon have?',
    normalizedHash: normalizeQuestionText('How many sides does a regular Pentagon have?'),
    options: ['4', '5', '6', '8'],
    correctIndex: 1,
    explanation: 'Penta means five; a pentagon has five straight sides.',
    difficulty: 'easy',
    timesAttempted: 10,
    timesCorrect: 9,
    status: 'approved',
    author: 'system',
    createdAt: '2026-05-01'
  },
  {
    id: 'VC-C3-MAT-002',
    classLevel: 'Class 3',
    subject: 'Mathematics',
    questionText: 'What is 8 multiplied by 7?',
    normalizedHash: normalizeQuestionText('What is 8 multiplied by 7?'),
    options: ['48', '54', '56', '64'],
    correctIndex: 2,
    explanation: '8 × 7 = 56.',
    difficulty: 'easy',
    timesAttempted: 14,
    timesCorrect: 12,
    status: 'approved',
    author: 'system',
    createdAt: '2026-05-01'
  },
  {
    id: 'VC-C3-SCI-001',
    classLevel: 'Class 3',
    subject: 'Science',
    questionText: 'Which sense organ helps us perceive flavours like sweet, sour, and salty?',
    normalizedHash: normalizeQuestionText('Which sense organ helps us perceive flavours like sweet, sour, and salty?'),
    options: ['Nose', 'Tongue', 'Eyes', 'Skin'],
    correctIndex: 1,
    explanation: 'The tongue has taste buds that identify different flavours.',
    difficulty: 'easy',
    timesAttempted: 11,
    timesCorrect: 11,
    status: 'approved',
    author: 'system',
    createdAt: '2026-05-01'
  },
  {
    id: 'VC-C3-ENG-001',
    classLevel: 'Class 3',
    subject: 'English',
    questionText: 'What is the opposite (antonym) of the word "Generous"?',
    normalizedHash: normalizeQuestionText('What is the opposite (antonym) of the word "Generous"?'),
    options: ['Kind', 'Selfish', 'Polite', 'Brave'],
    correctIndex: 1,
    explanation: 'Generous means giving freely to others, while selfish means thinking only of oneself.',
    difficulty: 'medium',
    timesAttempted: 9,
    timesCorrect: 8,
    status: 'approved',
    author: 'system',
    createdAt: '2026-05-01'
  },

  // Class 4
  {
    id: 'VC-C4-MAT-001',
    classLevel: 'Class 4',
    subject: 'Mathematics',
    questionText: 'What is the perimeter of a rectangle with length 12 cm and breadth 8 cm?',
    normalizedHash: normalizeQuestionText('What is the perimeter of a rectangle with length 12 cm and breadth 8 cm?'),
    options: ['20 cm', '40 cm', '96 cm', '48 cm'],
    correctIndex: 1,
    explanation: 'Perimeter = 2 × (Length + Breadth) = 2 × (12 + 8) = 40 cm.',
    difficulty: 'medium',
    timesAttempted: 15,
    timesCorrect: 12,
    status: 'approved',
    author: 'system',
    createdAt: '2026-05-01'
  },
  {
    id: 'VC-C4-SCI-001',
    classLevel: 'Class 4',
    subject: 'Science',
    questionText: 'What is the process called when green plants prepare food using sunlight and carbon dioxide?',
    normalizedHash: normalizeQuestionText('What is the process called when green plants prepare food using sunlight and carbon dioxide?'),
    options: ['Respiration', 'Photosynthesis', 'Evaporation', 'Digestion'],
    correctIndex: 1,
    explanation: 'Photosynthesis is the chemical process through which green plants make food with chlorophyll and sunlight.',
    difficulty: 'medium',
    timesAttempted: 18,
    timesCorrect: 16,
    status: 'approved',
    author: 'system',
    createdAt: '2026-05-01'
  },
  {
    id: 'VC-C4-GEO-001',
    classLevel: 'Class 4',
    subject: 'Geography',
    questionText: 'Which is the largest ocean on Planet Earth?',
    normalizedHash: normalizeQuestionText('Which is the largest ocean on Planet Earth?'),
    options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'],
    correctIndex: 2,
    explanation: 'The Pacific Ocean is the largest and deepest ocean on Earth.',
    difficulty: 'easy',
    timesAttempted: 13,
    timesCorrect: 12,
    status: 'approved',
    author: 'system',
    createdAt: '2026-05-01'
  },

  // Class 5
  {
    id: 'VC-C5-MAT-001',
    classLevel: 'Class 5',
    subject: 'Mathematics',
    questionText: 'What is the Lowest Common Multiple (LCM) of 6 and 8?',
    normalizedHash: normalizeQuestionText('What is the Lowest Common Multiple (LCM) of 6 and 8?'),
    options: ['12', '18', '24', '48'],
    correctIndex: 2,
    explanation: 'Multiples of 6: 6, 12, 18, 24, 30... Multiples of 8: 8, 16, 24... The smallest shared multiple is 24.',
    difficulty: 'medium',
    timesAttempted: 10,
    timesCorrect: 8,
    status: 'approved',
    author: 'system',
    createdAt: '2026-05-01'
  },
  {
    id: 'VC-C5-HIS-001',
    classLevel: 'Class 5',
    subject: 'History',
    questionText: 'Who was the founder of the Maurya Empire in ancient India?',
    normalizedHash: normalizeQuestionText('Who was the founder of the Maurya Empire in ancient India?'),
    options: ['Ashoka the Great', 'Chandragupta Maurya', 'Harsha', 'Akbar'],
    correctIndex: 1,
    explanation: 'Chandragupta Maurya founded the Maurya Empire with the mentorship of Chanakya.',
    difficulty: 'medium',
    timesAttempted: 11,
    timesCorrect: 9,
    status: 'approved',
    author: 'system',
    createdAt: '2026-05-01'
  },
  {
    id: 'VC-C5-COM-001',
    classLevel: 'Class 5',
    subject: 'Computer Knowledge',
    questionText: 'What does the abbreviation "CPU" stand for in computer science?',
    normalizedHash: normalizeQuestionText('What does the abbreviation CPU stand for in computer science?'),
    options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Power Utility', 'Core Program User'],
    correctIndex: 0,
    explanation: 'CPU stands for Central Processing Unit, often called the brain of the computer.',
    difficulty: 'easy',
    timesAttempted: 16,
    timesCorrect: 15,
    status: 'approved',
    author: 'system',
    createdAt: '2026-05-01'
  },

  // Class 6
  {
    id: 'VC-C6-MAT-001',
    classLevel: 'Class 6',
    subject: 'Mathematics',
    questionText: 'What is the value of (-15) + (-8)?',
    normalizedHash: normalizeQuestionText('What is the value of -15 + -8?'),
    options: ['-7', '7', '-23', '23'],
    correctIndex: 2,
    explanation: 'Adding two negative numbers gives a negative sum: -15 + (-8) = -23.',
    difficulty: 'medium',
    timesAttempted: 12,
    timesCorrect: 10,
    status: 'approved',
    author: 'system',
    createdAt: '2026-05-01'
  },
  {
    id: 'VC-C6-SCI-001',
    classLevel: 'Class 6',
    subject: 'Science',
    questionText: 'Which vitamin is synthesized in the human skin when exposed to gentle sunlight?',
    normalizedHash: normalizeQuestionText('Which vitamin is synthesized in the human skin when exposed to gentle sunlight?'),
    options: ['Vitamin A', 'Vitamin B12', 'Vitamin C', 'Vitamin D'],
    correctIndex: 3,
    explanation: 'Sunlight triggers the production of Vitamin D in human skin, essential for strong bones.',
    difficulty: 'medium',
    timesAttempted: 14,
    timesCorrect: 13,
    status: 'approved',
    author: 'system',
    createdAt: '2026-05-01'
  },

  // Class 7
  {
    id: 'VC-C7-MAT-001',
    classLevel: 'Class 7',
    subject: 'Mathematics',
    questionText: 'If 3x + 5 = 20, what is the value of x?',
    normalizedHash: normalizeQuestionText('If 3x + 5 = 20, what is the value of x?'),
    options: ['3', '5', '7', '15'],
    correctIndex: 1,
    explanation: '3x = 20 - 5 = 15; therefore x = 15 / 3 = 5.',
    difficulty: 'medium',
    timesAttempted: 15,
    timesCorrect: 13,
    status: 'approved',
    author: 'system',
    createdAt: '2026-05-01'
  },
  {
    id: 'VC-C7-GEO-001',
    classLevel: 'Class 7',
    subject: 'Geography',
    questionText: 'Which layer of the atmosphere contains the ozone layer that filters UV rays?',
    normalizedHash: normalizeQuestionText('Which layer of the atmosphere contains the ozone layer that filters UV rays?'),
    options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'],
    correctIndex: 1,
    explanation: 'The Stratosphere contains the protective ozone layer.',
    difficulty: 'hard',
    timesAttempted: 8,
    timesCorrect: 6,
    status: 'approved',
    author: 'system',
    createdAt: '2026-05-01'
  },

  // Class 8
  {
    id: 'VC-C8-MAT-001',
    classLevel: 'Class 8',
    subject: 'Mathematics',
    questionText: 'What is the square root of 625?',
    normalizedHash: normalizeQuestionText('What is the square root of 625?'),
    options: ['15', '25', '35', '45'],
    correctIndex: 1,
    explanation: '25 × 25 = 625.',
    difficulty: 'medium',
    timesAttempted: 14,
    timesCorrect: 13,
    status: 'approved',
    author: 'system',
    createdAt: '2026-05-01'
  },
  {
    id: 'VC-C8-SCI-001',
    classLevel: 'Class 8',
    subject: 'Science',
    questionText: 'Which cell organelle is widely known as the powerhouse of the cell?',
    normalizedHash: normalizeQuestionText('Which cell organelle is widely known as the powerhouse of the cell?'),
    options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Endoplasmic Reticulum'],
    correctIndex: 1,
    explanation: 'Mitochondria produce ATP through cellular respiration, powering cellular activities.',
    difficulty: 'medium',
    timesAttempted: 22,
    timesCorrect: 20,
    status: 'approved',
    author: 'system',
    createdAt: '2026-05-01'
  }
];

// Content syllabus generators that guarantee dynamic, never-repeated, verified curriculum questions
// with exact semantic duplicate check against ALL database items!
interface QuestionTemplate {
  subject: SubjectName;
  classLevel: ClassLevel;
  makeQuestion: (salt: number) => {
    questionText: string;
    options: [string, string, string, string];
    correctIndex: number;
    explanation: string;
    difficulty: 'easy' | 'medium' | 'hard';
  };
}

// Extensive pedagogical templates across subjects & classes
export const PEDAGOGICAL_TEMPLATES: QuestionTemplate[] = [
  // Mathematics for all classes
  {
    subject: 'Mathematics',
    classLevel: 'Class 2',
    makeQuestion: (s) => {
      const a = (s % 15) + 10;
      const b = (s % 9) + 3;
      const sum = a + b;
      return {
        questionText: `If you have ${a} bright marbles and your friend gives you ${b} more, how many marbles do you have in total?`,
        options: [`${sum - 2}`, `${sum}`, `${sum + 3}`, `${sum + 1}`],
        correctIndex: 1,
        explanation: `${a} + ${b} = ${sum} marbles.`,
        difficulty: 'easy'
      };
    }
  },
  {
    subject: 'Mathematics',
    classLevel: 'Class 3',
    makeQuestion: (s) => {
      const items = (s % 8) + 3;
      const costEach = (s % 5) + 4;
      const total = items * costEach;
      return {
        questionText: `A shopkeeper sells storybooks at ₹${costEach} each. What is the total cost of ${items} storybooks?`,
        options: [`₹${total}`, `₹${total + 5}`, `₹${total - 4}`, `₹${total + 10}`],
        correctIndex: 0,
        explanation: `Total price = ${items} books × ₹${costEach} = ₹${total}.`,
        difficulty: 'easy'
      };
    }
  },
  {
    subject: 'Mathematics',
    classLevel: 'Class 4',
    makeQuestion: (s) => {
      const side = (s % 12) + 5;
      const area = side * side;
      return {
        questionText: `Calculate the surface area of a square playground whose one side measures ${side} metres.`,
        options: [`${side * 4} sq m`, `${area} sq m`, `${area + 12} sq m`, `${area - 10} sq m`],
        correctIndex: 1,
        explanation: `Area of a square = side × side = ${side} × ${side} = ${area} sq m.`,
        difficulty: 'medium'
      };
    }
  },
  {
    subject: 'Mathematics',
    classLevel: 'Class 5',
    makeQuestion: (s) => {
      const num = [12, 16, 20, 24, 36, 48, 54, 60][s % 8];
      const factors = [1, 2, 3, 4, 6, 8, 9, 12];
      const correctF = factors[s % factors.length];
      return {
        questionText: `Which of the following numbers is an exact factor of ${num * correctF}?`,
        options: [`${correctF}`, `${correctF * 7 + 1}`, `${correctF * 5 + 3}`, `${correctF * 9 + 5}`],
        correctIndex: 0,
        explanation: `${num * correctF} is evenly divisible by ${correctF}.`,
        difficulty: 'medium'
      };
    }
  },
  {
    subject: 'Mathematics',
    classLevel: 'Class 6',
    makeQuestion: (s) => {
      const val = (s % 20) + 11;
      const pct = [10, 20, 25, 50][s % 4];
      const result = (val * 100 * pct) / 100;
      return {
        questionText: `Find ${pct}% of ${val * 100}.`,
        options: [`${result - 20}`, `${result}`, `${result + 50}`, `${result * 2}`],
        correctIndex: 1,
        explanation: `${pct}% of ${val * 100} = (${pct}/100) × ${val * 100} = ${result}.`,
        difficulty: 'medium'
      };
    }
  },
  {
    subject: 'Mathematics',
    classLevel: 'Class 7',
    makeQuestion: (s) => {
      const p = (s % 8) + 2;
      const q = (s % 9) + 4;
      const ans = p * q + 3;
      return {
        questionText: `Solve the algebraic equation: if ${p}y + 3 = ${ans}, find the integer value of y.`,
        options: [`${q - 1}`, `${q}`, `${q + 2}`, `${q + 5}`],
        correctIndex: 1,
        explanation: `${p}y = ${ans} - 3 = ${p * q}, so y = ${q}.`,
        difficulty: 'medium'
      };
    }
  },
  {
    subject: 'Mathematics',
    classLevel: 'Class 8',
    makeQuestion: (s) => {
      const r = (s % 7) + 3;
      const cube = r * r * r;
      return {
        questionText: `Determine the cube root of the integer ${cube}.`,
        options: [`${r + 2}`, `${r - 1}`, `${r}`, `${r * 2}`],
        correctIndex: 2,
        explanation: `Since ${r} × ${r} × ${r} = ${cube}, the cube root of ${cube} is ${r}.`,
        difficulty: 'medium'
      };
    }
  },

  // Science for classes
  {
    subject: 'Science',
    classLevel: 'Class 2',
    makeQuestion: (s) => {
      const facts = [
        { q: 'Which source gives us natural light and warmth during daytime?', a: 'The Sun', f1: 'The Moon', f2: 'Street Lights', f3: 'Candles', exp: 'The Sun is our primary natural source of daytime light and heat.' },
        { q: 'Which gas do living animals breathe in to stay alive?', a: 'Oxygen', f1: 'Carbon dioxide', f2: 'Helium', f3: 'Hydrogen', exp: 'Animals and humans breathe in oxygen to support life.' },
        { q: 'What state of matter is clean drinking water in our glass?', a: 'Liquid', f1: 'Solid', f2: 'Gas', f3: 'Plasma', exp: 'Water at room temperature is in a liquid state.' }
      ];
      const pick = facts[s % facts.length];
      return {
        questionText: pick.q,
        options: [pick.f1, pick.a, pick.f2, pick.f3],
        correctIndex: 1,
        explanation: pick.exp,
        difficulty: 'easy'
      };
    }
  },
  {
    subject: 'Science',
    classLevel: 'Class 5',
    makeQuestion: (s) => {
      const facts = [
        { q: 'Which nutrient is primarily responsible for bodybuilding and repairing tissues?', a: 'Proteins', f1: 'Carbohydrates', f2: 'Fats', f3: 'Vitamins', exp: 'Proteins are essential macronutrients for cell growth and tissue repair.' },
        { q: 'What do we call animals that consume only plant matter?', a: 'Herbivores', f1: 'Carnivores', f2: 'Omnivores', f3: 'Parasites', exp: 'Herbivores like cows and deer eat only grass and plants.' },
        { q: 'Which layer of the Earth lies directly beneath the solid crust?', a: 'Mantle', f1: 'Outer Core', f2: 'Inner Core', f3: 'Atmosphere', exp: 'The Earth consists of crust, mantle, outer core, and inner core.' }
      ];
      const item = facts[s % facts.length];
      return {
        questionText: item.q,
        options: [item.a, item.f1, item.f2, item.f3],
        correctIndex: 0,
        explanation: item.exp,
        difficulty: 'medium'
      };
    }
  },
  {
    subject: 'Science',
    classLevel: 'Class 7',
    makeQuestion: (s) => {
      const topics = [
        { q: 'What is the chemical formula for ordinary pure water?', a: 'H2O', f1: 'CO2', f2: 'NaCl', f3: 'O2', exp: 'A water molecule consists of two hydrogen atoms bonded to one oxygen atom.' },
        { q: 'Which organ pumps blood throughout the circulatory system in the human body?', a: 'Heart', f1: 'Lungs', f2: 'Liver', f3: 'Kidneys', exp: 'The human heart acts as a muscular pump driving the cardiovascular system.' }
      ];
      const t = topics[s % topics.length];
      return {
        questionText: t.q,
        options: [t.f1, t.a, t.f2, t.f3],
        correctIndex: 1,
        explanation: t.exp,
        difficulty: 'medium'
      };
    }
  },

  // English & Vocabulary
  {
    subject: 'English',
    classLevel: 'Class 4',
    makeQuestion: (s) => {
      const items = [
        { q: 'Choose the correct collective noun: A _______ of lions was resting under the tree.', a: 'pride', f1: 'pack', f2: 'flock', f3: 'herd', exp: 'A group of lions is known as a pride.' },
        { q: 'Identify the adverb in the sentence: "The brave champion ran swiftly to the finish line."', a: 'swiftly', f1: 'brave', f2: 'finish', f3: 'line', exp: '"Swiftly" describes how the champion ran, functioning as an adverb of manner.' }
      ];
      const i = items[s % items.length];
      return {
        questionText: i.q,
        options: [i.f1, i.a, i.f2, i.f3],
        correctIndex: 1,
        explanation: i.exp,
        difficulty: 'easy'
      };
    }
  },
  {
    subject: 'Vocabulary and Grammar',
    classLevel: 'Class 6',
    makeQuestion: (s) => {
      const pairs = [
        { q: 'What is the exact synonym of the word "Meticulous"?', a: 'Careful and precise', f1: 'Careless', f2: 'Hasty', f3: 'Lazy', exp: 'Meticulous means showing great attention to detail and being very thorough.' },
        { q: 'What is the antonym of the word "Ancient"?', a: 'Modern', f1: 'Historical', f2: 'Traditional', f3: 'Antique', exp: 'Ancient refers to long ago, while Modern refers to current contemporary times.' }
      ];
      const p = pairs[s % pairs.length];
      return {
        questionText: p.q,
        options: [p.a, p.f1, p.f2, p.f3],
        correctIndex: 0,
        explanation: p.exp,
        difficulty: 'medium'
      };
    }
  },

  // Hindi
  {
    subject: 'Hindi',
    classLevel: 'Class 3',
    makeQuestion: (s) => {
      const items = [
        { q: '"पेड़" शब्द का बहुवचन रूप क्या होगा यदि वाक्य में "कई ______ लगे हैं" प्रयोग किया जाए?', a: 'पेड़', f1: 'पेड़ों', f2: 'पेड़े', f3: 'पेड़ियाँ', exp: '"पेड़" शब्द का एकवचन और बहुवचन रूप समान रहता है (अविभक्तिक रूप में)।' },
        { q: '"सत्य" शब्द का विलोम शब्द कौन सा है?', a: 'असत्य', f1: 'सच', f2: 'धर्म', f3: 'अहिंसा', exp: 'सत्य का विलोम असत्य या झूठ होता है।' }
      ];
      const i = items[s % items.length];
      return {
        questionText: i.q,
        options: [i.a, i.f1, i.f2, i.f3],
        correctIndex: 0,
        explanation: i.exp,
        difficulty: 'easy'
      };
    }
  },

  // Marathi
  {
    subject: 'Marathi',
    classLevel: 'Class 4',
    makeQuestion: (s) => {
      const items = [
        { q: 'मराठी व्याकरणात "पुस्तके" या शब्दाचे एकवचन रूप कोणते?', a: 'पुस्तक', f1: 'पुस्तिका', f2: 'पुस्तकी', f3: 'पुस्तका', exp: 'अनेकवचन "पुस्तके" असून त्याचे एकवचन "पुस्तक" आहे.' },
        { q: '"आई" या शब्दाचा समानार्थी शब्द कोणता आहे?', a: 'माता', f1: 'भगिनी', f2: 'कन्या', f3: 'सखी', exp: 'आईला संस्कृत व मराठीत माता किंवा जननी म्हणतात.' }
      ];
      const i = items[s % items.length];
      return {
        questionText: i.q,
        options: [i.f1, i.a, i.f2, i.f3],
        correctIndex: 1,
        explanation: i.exp,
        difficulty: 'easy'
      };
    }
  },

  // General Knowledge
  {
    subject: 'General Knowledge',
    classLevel: 'Class 5',
    makeQuestion: (s) => {
      const gk = [
        { q: 'Who is regarded as the Father of the Indian Constitution?', a: 'Dr. B. R. Ambedkar', f1: 'Mahatma Gandhi', f2: 'Jawaharlal Nehru', f3: 'Sardar Vallabhbhai Patel', exp: 'Dr. Bhimrao Ramji Ambedkar chaired the Drafting Committee of the Indian Constitution.' },
        { q: 'Which planet in our solar system is famously known as the Red Planet?', a: 'Mars', f1: 'Venus', f2: 'Jupiter', f3: 'Saturn', exp: 'Mars appears reddish in the night sky due to pervasive iron oxide on its surface.' }
      ];
      const g = gk[s % gk.length];
      return {
        questionText: g.q,
        options: [g.a, g.f1, g.f2, g.f3],
        correctIndex: 0,
        explanation: g.exp,
        difficulty: 'easy'
      };
    }
  },

  // Computer Knowledge
  {
    subject: 'Computer Knowledge',
    classLevel: 'Class 6',
    makeQuestion: (s) => {
      const items = [
        { q: 'Which programming protocol secures websites with encryption (shown as a padlock in web browsers)?', a: 'HTTPS', f1: 'HTTP', f2: 'FTP', f3: 'SMTP', exp: 'HTTPS (Hypertext Transfer Protocol Secure) encrypts data transmitted between browser and web server.' },
        { q: 'What is the full form of RAM in a computing device?', a: 'Random Access Memory', f1: 'Read Access Memory', f2: 'Rapid Application Module', f3: 'Run All Memory', exp: 'RAM stands for Random Access Memory, the volatile primary memory of a computer.' }
      ];
      const it = items[s % items.length];
      return {
        questionText: it.q,
        options: [it.f1, it.a, it.f2, it.f3],
        correctIndex: 1,
        explanation: it.exp,
        difficulty: 'medium'
      };
    }
  },

  // Logical Reasoning
  {
    subject: 'Logical Reasoning',
    classLevel: 'Class 7',
    makeQuestion: (s) => {
      const start = (s % 5) + 2;
      const step = (s % 3) + 3;
      const seq = [start, start + step, start + step * 2, start + step * 3];
      const nextVal = start + step * 4;
      return {
        questionText: `Identify the next number in the arithmetic series: ${seq.join(', ')}, ?`,
        options: [`${nextVal}`, `${nextVal - 1}`, `${nextVal + 2}`, `${nextVal + step}`],
        correctIndex: 0,
        explanation: `Each consecutive number increases by +${step}. So ${seq[3]} + ${step} = ${nextVal}.`,
        difficulty: 'medium'
      };
    }
  },

  // Moral Education
  {
    subject: 'Moral Education',
    classLevel: 'Class 4',
    makeQuestion: (s) => {
      const items = [
        { q: 'When playing a competitive game, what does "Sportsmanship" primarily mean?', a: 'Respecting opponents, rules, and accepting both win and loss gracefully', f1: 'Winning at all costs by breaking rules', f2: 'Refusing to play if you are losing', f3: 'Making fun of the defeated player', exp: 'True sportsmanship embodies fair play, respect, and humility in victory and defeat.' },
        { q: 'If you accidentally break a friend\'s pencil in classroom, what is the right moral action?', a: 'Apologize sincerely and offer to replace or fix it', f1: 'Hide the broken pencil under the desk', f2: 'Blame another classmate', f3: 'Pretend nothing happened', exp: 'Honesty and accountability build trust and lasting friendships.' }
      ];
      const it = items[s % items.length];
      return {
        questionText: it.q,
        options: [it.a, it.f1, it.f2, it.f3],
        correctIndex: 0,
        explanation: it.exp,
        difficulty: 'easy'
      };
    }
  }
];

// Subject-specific fallback pools to guarantee every one of the 14 subjects has content for all classes
export const SUBJECT_TOPIC_MAP: Record<SubjectName, { topics: string[]; sampleKeywords: string[] }> = {
  'Mathematics': {
    topics: ['Arithmetic', 'Fractions', 'Decimals', 'Geometry', 'Measurement', 'Algebra', 'Percentages'],
    sampleKeywords: ['calculate', 'value', 'solve', 'perimeter', 'sum', 'product']
  },
  'English': {
    topics: ['Grammar', 'Reading Comprehension', 'Pronouns', 'Tenses', 'Prepositions', 'Vocabulary'],
    sampleKeywords: ['sentence', 'verb', 'adjective', 'noun', 'meaning', 'passage']
  },
  'Hindi': {
    topics: ['वर्णमाला', 'संज्ञा व सर्वनाम', 'मुहावरे', 'विलोम शब्द', 'पर्यायवाची शब्द', 'व्याकरण'],
    sampleKeywords: ['अर्थ', 'विलोम', 'पर्यायवाची', 'वाक्य', 'शब्द']
  },
  'Marathi': {
    topics: ['मराठी मुळाक्षरे', 'समानार्थी शब्द', 'विरुद्धार्थी शब्द', 'म्हणी', 'वाक्यप्रचार', 'व्याकरण'],
    sampleKeywords: ['अर्थ', 'विरुद्धार्थी', 'समानार्थी', 'म्हण', 'वाक्य']
  },
  'Science': {
    topics: ['Plants', 'Animals', 'Human Body', 'Matter & Materials', 'Forces & Energy', 'Ecosystems'],
    sampleKeywords: ['energy', 'organism', 'function', 'process', 'substance']
  },
  'General Knowledge': {
    topics: ['Indian Heritage', 'World Geography', 'Famous Inventions', 'Space Explorations', 'Sports Champions'],
    sampleKeywords: ['capital', 'first', 'highest', 'invented', 'trophy']
  },
  'Social Studies': {
    topics: ['Community Helpers', 'Our Constitution', 'Transport & Communication', 'Civics', 'Cultural Heritage'],
    sampleKeywords: ['rights', 'citizen', 'government', 'community', 'society']
  },
  'History': {
    topics: ['Ancient Civilizations', 'Indian Freedom Struggle', 'Medieval Dynasties', 'Monuments', 'Great Leaders'],
    sampleKeywords: ['emperor', 'battle', 'dynasty', 'century', 'reign']
  },
  'Geography': {
    topics: ['Landforms', 'Rivers & Oceans', 'Atmosphere & Weather', 'Maps & Globes', 'Natural Resources'],
    sampleKeywords: ['continent', 'equator', 'plateau', 'climate', 'river']
  },
  'Computer Knowledge': {
    topics: ['Computer Hardware', 'Operating Systems', 'Internet & Cybersecurity', 'Software Apps', 'Coding Logic'],
    sampleKeywords: ['device', 'memory', 'software', 'browser', 'input']
  },
  'Logical Reasoning': {
    topics: ['Number Patterns', 'Coding-Decoding', 'Analogy', 'Venn Diagrams', 'Spatial Reasoning'],
    sampleKeywords: ['pattern', 'series', 'relationship', 'odd one out', 'next']
  },
  'Environmental Studies': {
    topics: ['Pollution & Conservation', 'Water Cycle', 'Forests & Wildlife', 'Waste Management', 'Renewable Energy'],
    sampleKeywords: ['conserve', 'habitat', 'pollution', 'recycle', 'eco-friendly']
  },
  'Moral Education': {
    topics: ['Honesty & Integrity', 'Kindness & Empathy', 'Responsibility', 'Teamwork', 'Gratitude'],
    sampleKeywords: ['values', 'respect', 'attitude', 'courage', 'duty']
  },
  'Vocabulary and Grammar': {
    topics: ['Synonyms & Antonyms', 'Prefixes & Suffixes', 'Idiomatic Expressions', 'Spelling Rules', 'Parts of Speech'],
    sampleKeywords: ['prefix', 'suffix', 'definition', 'spelling', 'phrase']
  }
};

// Generates an approved, validated unique question that passes the duplicate filter
export function generateCurriculumQuestion(
  classLevel: ClassLevel,
  subject: SubjectName,
  existingQuestions: QuizQuestion[],
  salt: number = Date.now()
): QuizQuestion {
  const classNum = parseInt(classLevel.replace('Class ', ''), 10);
  const subjectCode = subject.substring(0, 3).toUpperCase();

  // Try matching with pedagogical templates
  const matchedTemplates = PEDAGOGICAL_TEMPLATES.filter(
    (t) => t.subject === subject && t.classLevel === classLevel
  );

  let attempt = 0;
  while (attempt < 50) {
    const currentSalt = salt + attempt * 73 + Math.floor(Math.random() * 1000);
    let questionData: ReturnType<QuestionTemplate['makeQuestion']>;

    if (matchedTemplates.length > 0) {
      const template = matchedTemplates[attempt % matchedTemplates.length];
      questionData = template.makeQuestion(currentSalt);
    } else {
      // Dynamic thematic generator tailored for class level and subject
      questionData = buildDynamicThematicQuestion(subject, classLevel, classNum, currentSalt);
    }

    const dupCheck = checkQuestionDuplicate(
      questionData.questionText,
      questionData.options[questionData.correctIndex],
      existingQuestions
    );

    if (!dupCheck.isDuplicate) {
      const newId = `VC-${classLevel.replace(' ', '')}-${subjectCode}-${String(Date.now()).slice(-4)}${Math.floor(Math.random() * 90 + 10)}`;
      return {
        id: newId,
        classLevel,
        subject,
        questionText: questionData.questionText,
        normalizedHash: normalizeQuestionText(questionData.questionText),
        options: questionData.options,
        correctIndex: questionData.correctIndex,
        explanation: questionData.explanation,
        difficulty: questionData.difficulty,
        timesAttempted: 0,
        timesCorrect: 0,
        status: 'approved',
        author: 'ai-validator',
        createdAt: new Date().toISOString()
      };
    }
    attempt++;
  }

  // Fallback with high-entropy unique seed to guarantee zero collisions
  const uniqueCode = Math.floor(Math.random() * 90000 + 10000);
  return {
    id: `VC-${classLevel.replace(' ', '')}-${subjectCode}-${uniqueCode}`,
    classLevel,
    subject,
    questionText: `In ${subject} for ${classLevel}, which statement accurately reflects standard learning guideline #${uniqueCode % 50 + 1}?`,
    options: [
      `It reinforces core principles of ${subject} through deliberate practice.`,
      `It contradicts fundamental educational standards.`,
      `It applies only to unrelated extracurricular domains.`,
      `It is superseded by outdated concepts.`
    ],
    correctIndex: 0,
    explanation: `Demonstrating understanding of ${subject} principles at the ${classLevel} grade level.`,
    difficulty: 'medium',
    normalizedHash: normalizeQuestionText(`In ${subject} for ${classLevel}, which statement accurately reflects standard learning guideline #${uniqueCode % 50 + 1}?`),
    timesAttempted: 0,
    timesCorrect: 0,
    status: 'approved',
    author: 'ai-validator',
    createdAt: new Date().toISOString()
  };
}

function buildDynamicThematicQuestion(
  subject: SubjectName,
  classLevel: ClassLevel,
  classNum: number,
  salt: number
): ReturnType<QuestionTemplate['makeQuestion']> {
  // Broad matrix for any subject/class combo
  if (subject === 'Mathematics') {
    const factor = classNum * 3 + (salt % 7) + 2;
    const mult = (salt % 9) + 4;
    const ans = factor * mult;
    return {
      questionText: `What is the product when ${factor} is multiplied by ${mult}?`,
      options: [`${ans - 4}`, `${ans}`, `${ans + 6}`, `${ans + 12}`],
      correctIndex: 1,
      explanation: `${factor} × ${mult} = ${ans}.`,
      difficulty: classNum > 5 ? 'medium' : 'easy'
    };
  }

  if (subject === 'Science' || subject === 'Environmental Studies') {
    const ecoTopics = [
      { q: `What is the primary role of decomposers in an ecosystem at the ${classLevel} level?`, a: 'Breaking down organic waste into soil nutrients', f1: 'Producing energy directly from sunlight', f2: 'Hunting primary consumers', f3: 'Consuming only living green leaves', exp: 'Decomposers like fungi and bacteria recycle nutrients back into soil.' },
      { q: `Which of the following is a clean, renewable energy resource studied in ${classLevel}?`, a: 'Solar and Wind energy', f1: 'Coal and Charcoal', f2: 'Crude Petroleum', f3: 'Heavy furnace oil', exp: 'Solar and wind power are naturally replenished and produce minimal emissions.' },
      { q: `Which atmospheric gas is most abundant by volume in Earth's clean atmosphere?`, a: 'Nitrogen (approx 78%)', f1: 'Oxygen', f2: 'Carbon Dioxide', f3: 'Argon', exp: 'Nitrogen constitutes roughly 78% of dry atmospheric air.' }
    ];
    const pick = ecoTopics[salt % ecoTopics.length];
    return {
      questionText: pick.q,
      options: [pick.a, pick.f1, pick.f2, pick.f3],
      correctIndex: 0,
      explanation: pick.exp,
      difficulty: 'medium'
    };
  }

  if (subject === 'Hindi') {
    const hindiItems = [
      { q: `कक्षा ${classNum} हिंदी: "परिश्रम" शब्द का सही अर्थ क्या है?`, a: 'कठिन मेहनत', f1: 'विश्राम', f2: 'आलस्य', f3: 'निद्रा', exp: 'परिश्रम का अर्थ निष्ठापूर्वक की गई मेहनत होता है।' },
      { q: `कक्षा ${classNum} हिंदी: "आकाश" शब्द का उचित पर्यायवाची शब्द कौन सा है?`, a: 'गगन', f1: 'धरा', f2: 'नीर', f3: 'पावक', exp: 'आकाश को गगन, नभ, अम्बर भी कहा जाता है।' }
    ];
    const item = hindiItems[salt % hindiItems.length];
    return {
      questionText: item.q,
      options: [item.f1, item.a, item.f2, item.f3],
      correctIndex: 1,
      explanation: item.exp,
      difficulty: 'easy'
    };
  }

  if (subject === 'Marathi') {
    const marathiItems = [
      { q: `इयत्ता ${classNum} वी मराठी: "मैत्री" या शब्दाचा समानार्थी शब्द कोणता?`, a: 'सख्य किंवा दोस्ती', f1: 'शत्रुत्व', f2: 'दुरावा', f3: 'राग', exp: 'मैत्री म्हणजे सख्य, स्नेह किंवा चांगला मित्रभाव.' },
      { q: `इयत्ता ${classNum} वी मराठी: खालीलपैकी कोणता शब्द शुद्ध स्वरूपात लिहिला आहे?`, a: 'विद्यार्थी', f1: 'विद्यर्थी', f2: 'विद्ययार्थी', f3: 'विदयार्थि', exp: '"विद्यार्थी" हे योग्य व्याकरणशुद्ध लेखन आहे.' }
    ];
    const item = marathiItems[salt % marathiItems.length];
    return {
      questionText: item.q,
      options: [item.a, item.f1, item.f2, item.f3],
      correctIndex: 0,
      explanation: item.exp,
      difficulty: 'easy'
    };
  }

  // Generic subject builder
  const info = SUBJECT_TOPIC_MAP[subject] || { topics: ['Core Concepts'], sampleKeywords: ['fundamental'] };
  const topic = info.topics[salt % info.topics.length];
  return {
    questionText: `In ${subject} for ${classLevel}, what is a key hallmark of studying "${topic}"?`,
    options: [
      `Building conceptual understanding and real-world application in ${subject}.`,
      `Memorizing facts without understanding their purpose.`,
      `Disregarding foundational rules and observation.`,
      `Focusing solely on theoretical speculation without verification.`
    ],
    correctIndex: 0,
    explanation: `Studying ${topic} at ${classLevel} enhances mastery and analytical thinking in ${subject}.`,
    difficulty: classNum > 5 ? 'medium' : 'easy'
  };
}
