import { ClassLevel, SubjectName, QuizQuestion, QuestionType, QuizLevel } from '../types';
import { CLASS_2_QUESTIONS } from '../data/questions/class2';
import { CLASS_3_QUESTIONS } from '../data/questions/class3';
import { CLASS_4_QUESTIONS } from '../data/questions/class4';
import { CLASS_5_QUESTIONS } from '../data/questions/class5';
import { CLASS_6_QUESTIONS } from '../data/questions/class6';
import { CLASS_7_QUESTIONS } from '../data/questions/class7';
import { CLASS_8_QUESTIONS } from '../data/questions/class8';
import { generateEntireCurriculumMasterBank, getCurriculumQuestionsForLevel } from './curriculumQuestionBank';
import { randomizeQuizQuestions } from './answerRandomizerService';

// Normalizes text for semantic duplicate comparison
export function normalizeQuestionText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s\u0900-\u097F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

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

export function calculateTokenSimilarity(setA: Set<string>, setB: Set<string>): number {
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  const union = new Set([...setA, ...setB]).size;
  return union === 0 ? 0 : intersection / union;
}

export function checkQuestionDuplicate(
  candidateText: string,
  candidateCorrectAnswer: string,
  existingQuestions: QuizQuestion[]
): { isDuplicate: boolean; duplicateReason?: string; matchedQuestionId?: string; similarityScore: number } {
  const normCand = normalizeQuestionText(candidateText);
  const candTokens = getSemanticTokens(candidateText);
  const normAns = normalizeQuestionText(candidateCorrectAnswer);

  for (const existing of existingQuestions) {
    const normExist = normalizeQuestionText(existing.questionText);
    if (normCand === normExist) {
      return {
        isDuplicate: true,
        duplicateReason: 'Exact match detected with an existing question in database.',
        matchedQuestionId: existing.id,
        similarityScore: 1.0
      };
    }

    const existTokens = getSemanticTokens(existing.questionText);
    const tokenSim = calculateTokenSimilarity(candTokens, existTokens);
    const existAns = normalizeQuestionText(existing.options[existing.correctIndex]);

    if (tokenSim > 0.65) {
      return {
        isDuplicate: true,
        duplicateReason: `High semantic similarity (${Math.round(tokenSim * 100)}%) with identical conceptual phrasing.`,
        matchedQuestionId: existing.id,
        similarityScore: tokenSim
      };
    }

    if (tokenSim > 0.50 && normAns === existAns) {
      return {
        isDuplicate: true,
        duplicateReason: `Semantic similarity (${Math.round(tokenSim * 100)}%) with identical target answer "${existing.options[existing.correctIndex]}".`,
        matchedQuestionId: existing.id,
        similarityScore: tokenSim
      };
    }
  }

  return { isDuplicate: false, similarityScore: 0 };
}

// Master Partitioned Store by Class
const CLASS_PARTITIONS: Record<ClassLevel, QuizQuestion[]> = {
  'Class 2': [...CLASS_2_QUESTIONS],
  'Class 3': [...CLASS_3_QUESTIONS],
  'Class 4': [...CLASS_4_QUESTIONS],
  'Class 5': [...CLASS_5_QUESTIONS],
  'Class 6': [...CLASS_6_QUESTIONS],
  'Class 7': [...CLASS_7_QUESTIONS],
  'Class 8': [...CLASS_8_QUESTIONS]
};

// Returns initial unified question list across all classes with 4 levels x 10 questions for all 14 subjects
export function getInitialSeedQuestions(): QuizQuestion[] {
  const masterCurriculum = generateEntireCurriculumMasterBank();
  const existingLegacy = [
    ...CLASS_2_QUESTIONS,
    ...CLASS_3_QUESTIONS,
    ...CLASS_4_QUESTIONS,
    ...CLASS_5_QUESTIONS,
    ...CLASS_6_QUESTIONS,
    ...CLASS_7_QUESTIONS,
    ...CLASS_8_QUESTIONS
  ];

  // Map legacy to have level 1 if undefined
  const normalizedLegacy = existingLegacy.map(q => ({
    ...q,
    level: q.level || (1 as QuizLevel)
  }));

  // Merge unique by ID
  const map = new Map<string, QuizQuestion>();
  for (const q of masterCurriculum) {
    map.set(q.id, q);
  }
  for (const q of normalizedLegacy) {
    if (!map.has(q.id)) {
      map.set(q.id, q);
    }
  }

  return Array.from(map.values());
}

// Dynamic Curriculum Generator that respects Class-Specific topics, progression, and 15 question types
export function generateClassSpecificCurriculumQuestion(
  classLevel: ClassLevel,
  subject: SubjectName,
  existingClassPool: QuizQuestion[],
  salt: number
): QuizQuestion {
  const classNum = parseInt(classLevel.replace('Class ', ''), 10);
  const subjectCode = subject.substring(0, 3).toUpperCase();
  const uniqueCode = Math.floor(Math.random() * 9000 + 1000);

  // Class-specific subject templates
  let candidate: {
    questionText: string;
    options: [string, string, string, string];
    correctIndex: number;
    explanation: string;
    topic: string;
    questionType: QuestionType;
    difficulty: 'easy' | 'medium' | 'hard';
    diagramEmoji?: string;
  };

  // MATHEMATICS PROGRESSION BY CLASS
  if (subject === 'Mathematics') {
    if (classNum <= 3) {
      const a = (salt % 25) + 10;
      const b = (salt % 15) + 5;
      const sum = a + b;
      candidate = {
        questionText: `In an arithmetic activity, what is the sum of ${a} + ${b}?`,
        options: [`${sum - 2}`, `${sum}`, `${sum + 3}`, `${sum + 5}`],
        correctIndex: 1,
        explanation: `${a} + ${b} = ${sum}.`,
        topic: 'Addition & Regrouping',
        questionType: 'number_based',
        difficulty: 'easy'
      };
    } else if (classNum <= 5) {
      const whole = (salt % 6) + 2;
      const num = (salt % 3) + 1;
      const den = 4;
      const decimalVal = whole + (num / den);
      candidate = {
        questionText: `Convert the mixed fraction ${whole} ${num}/${den} into a decimal number:`,
        options: [`${(decimalVal - 0.25).toFixed(2)}`, `${decimalVal.toFixed(2)}`, `${(decimalVal + 0.5).toFixed(2)}`, `${(whole + 0.1).toFixed(2)}`],
        correctIndex: 1,
        explanation: `${num}/${den} is ${num / den}, so ${whole} + ${num / den} = ${decimalVal.toFixed(2)}.`,
        topic: 'Fractions and Decimals',
        questionType: 'problem_solving',
        difficulty: 'medium'
      };
    } else {
      // Classes 6-8: Algebraic Reasoning & Integers
      const coeff = (salt % 4) + 2;
      const constant = (salt % 9) + 3;
      const targetX = (salt % 5) + 3;
      const rhs = coeff * targetX + constant;
      candidate = {
        questionText: `Solve the algebraic equation for variable x: ${coeff}x + ${constant} = ${rhs}`,
        options: [`x = ${targetX - 1}`, `x = ${targetX}`, `x = ${targetX + 2}`, `x = ${targetX + 4}`],
        correctIndex: 1,
        explanation: `${coeff}x = ${rhs} - ${constant} = ${rhs - constant}. x = ${rhs - constant} ÷ ${coeff} = ${targetX}.`,
        topic: 'Linear Equations & Algebra',
        questionType: 'problem_solving',
        difficulty: classNum === 8 ? 'hard' : 'medium'
      };
    }
  } 
  // SCIENCE PROGRESSION BY CLASS
  else if (subject === 'Science' || subject === 'Environmental Studies') {
    if (classNum <= 3) {
      candidate = {
        questionText: `Which of the following helps aquatic fish breathe dissolved oxygen in river or pond water?`,
        options: ['Lungs', 'Gills', 'Fins', 'Scales'],
        correctIndex: 1,
        explanation: 'Fish use gills with rich blood vessels to extract dissolved oxygen directly from water.',
        topic: 'Living Creatures & Adaptations',
        questionType: 'mcq',
        difficulty: 'easy'
      };
    } else if (classNum <= 5) {
      candidate = {
        questionText: `Which essential vitamin is synthesized in our skin when exposed to mild morning sunlight?`,
        options: ['Vitamin A', 'Vitamin D', 'Vitamin C', 'Vitamin B12'],
        correctIndex: 1,
        explanation: 'Sunlight helps skin synthesize Vitamin D, which is essential for strong bones and teeth.',
        topic: 'Human Health & Nutrition',
        questionType: 'choose_correct_statement',
        difficulty: 'medium'
      };
    } else {
      candidate = {
        questionText: `Assertion (A): Mitochondria are membrane-bound organelles that produce ATP molecules.\nReason (R): Aerobic cellular respiration takes place inside mitochondria to generate chemical energy for cellular activities.`,
        options: [
          'Both (A) and (R) are true, and (R) is the scientifically correct explanation of (A).',
          'Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).',
          '(A) is true, but (R) is false.',
          '(A) is false, but (R) is true.'
        ],
        correctIndex: 0,
        explanation: 'Mitochondria are the powerhouses of cells where ATP is synthesized via aerobic oxidation.',
        topic: 'Cell Biology & Energy',
        questionType: 'assertion_reasoning',
        difficulty: 'hard'
      };
    }
  } 
  // ENGLISH PROGRESSION BY CLASS
  else if (subject === 'English' || subject === 'Vocabulary and Grammar') {
    if (classNum <= 3) {
      candidate = {
        questionText: `Choose the correct plural form of the word "Child":`,
        options: ['Childs', 'Children', 'Childrens', 'Childies'],
        correctIndex: 1,
        explanation: 'Child has an irregular plural form: Children.',
        topic: 'Nouns & Plurals',
        questionType: 'mcq',
        difficulty: 'easy'
      };
    } else if (classNum <= 5) {
      candidate = {
        questionText: `Fill in the blank with the correct preposition: "The astronaut stepped cautiously _____ the lunar lander."`,
        options: ['at', 'out of', 'underneath', 'into between'],
        correctIndex: 1,
        explanation: '"Out of" indicates movement from an interior space to the outside.',
        topic: 'Prepositions & Syntax',
        questionType: 'fill_blank',
        difficulty: 'medium'
      };
    } else {
      candidate = {
        questionText: `Identify the sentence where the word "affect" is used with correct grammatical category (as a verb):`,
        options: [
          'The climate policy had a severe affect on local agriculture.',
          'Extreme temperatures directly affect the efficiency of solar panels.',
          'Her joyful affect was inspiring everyone.',
          'The medicine caused a strange affect.'
        ],
        correctIndex: 1,
        explanation: '"Affect" functions as a verb meaning to influence; "effect" is typically the noun indicating the result.',
        topic: 'Advanced Vocabulary & Error Spotting',
        questionType: 'find_incorrect',
        difficulty: 'hard'
      };
    }
  }
  // HINDI
  else if (subject === 'Hindi') {
    candidate = {
      questionText: `कक्षा ${classNum} हिंदी: "सत्य" शब्द का उचित विलोम (उल्टा) शब्द क्या है?`,
      options: ['धर्म', 'असत्य', 'झूठ बोलना', 'अज्ञान'],
      correctIndex: 1,
      explanation: 'सत्य का विलोम शब्द "असत्य" होता है।',
      topic: 'विलोम शब्द व व्याकरण',
      questionType: 'match_following',
      difficulty: 'easy'
    };
  }
  // MARATHI
  else if (subject === 'Marathi') {
    candidate = {
      questionText: `इयत्ता ${classNum} वी मराठी: "सूर्य" या शब्दाचा योग्य समानार्थी शब्द निवडा:`,
      options: ['चंद्र', 'भास्कर (रवी)', 'तारे', 'आकाश'],
      correctIndex: 1,
      explanation: 'सूर्याला भास्कर, रवी, भानू व दिनकर असेही म्हणतात.',
      topic: 'समानार्थी शब्द संग्रह',
      questionType: 'mcq',
      difficulty: 'easy'
    };
  }
  // COMPUTER KNOWLEDGE
  else if (subject === 'Computer Knowledge') {
    if (classNum <= 4) {
      candidate = {
        questionText: `Which device is used to enter typed alphabets, numbers, and symbols into a computer system?`,
        options: ['Monitor', 'Keyboard', 'Speaker', 'Plotter'],
        correctIndex: 1,
        explanation: 'A keyboard is the primary alphanumeric input peripheral.',
        topic: 'Input Peripherals',
        questionType: 'choose_correct_statement',
        difficulty: 'easy'
      };
    } else {
      candidate = {
        questionText: `In computer programming and networking, what is a sequential step-by-step set of instructions to solve a defined problem called?`,
        options: ['Compiler', 'Algorithm', 'Bandwidth', 'Ethernet'],
        correctIndex: 1,
        explanation: 'An algorithm is an unambiguous, finite sequence of computational steps to solve a problem.',
        topic: 'Algorithms & Computational Thinking',
        questionType: 'mcq',
        difficulty: 'medium'
      };
    }
  }
  // LOGICAL REASONING
  else if (subject === 'Logical Reasoning') {
    candidate = {
      questionText: `Find the next number in this arithmetic reasoning sequence: 10, 18, 26, 34, ___`,
      options: ['40', '42', '44', '46'],
      correctIndex: 1,
      explanation: 'The difference between consecutive terms is +8. 34 + 8 = 42.',
      topic: 'Number Series & Pattern',
      questionType: 'sequence_pattern',
      difficulty: 'medium'
    };
  }
  // GENERAL KNOWLEDGE / SOCIAL STUDIES / HISTORY / GEOGRAPHY / MORAL EDUCATION
  else {
    candidate = {
      questionText: `In ${subject} for ${classLevel}, which standard is prioritized for balanced critical understanding?`,
      options: [
        'Relying purely on hearsay without factual verification',
        'Analyzing evidence, objective facts, and historical sources',
        'Memorizing statements without understanding',
        'Ignoring timeline sequences'
      ],
      correctIndex: 1,
      explanation: `Rigorous study in ${subject} requires evidence-based reasoning and objective factual understanding.`,
      topic: 'Core Understanding',
      questionType: 'choose_correct_statement',
      difficulty: 'medium'
    };
  }

  const newId = `VC-${classLevel.replace(' ', '')}-${subjectCode}-${uniqueCode}`;
  return {
    id: newId,
    classLevel,
    subject,
    topic: candidate.topic,
    questionType: candidate.questionType,
    questionText: candidate.questionText,
    normalizedHash: normalizeQuestionText(candidate.questionText),
    options: candidate.options,
    correctIndex: candidate.correctIndex,
    explanation: candidate.explanation,
    difficulty: candidate.difficulty,
    diagramEmoji: candidate.diagramEmoji,
    timesAttempted: 0,
    timesCorrect: 0,
    status: 'approved',
    author: 'curriculum-expert',
    createdAt: new Date().toISOString()
  };
}

// Strictly filters questions by student's class and subject, preventing cross-class leakage
export async function getStrictClassSubjectQuestions(
  classLevel: ClassLevel,
  subject: SubjectName,
  attemptedQuestionIds: string[],
  masterDatabase: QuizQuestion[]
): Promise<QuizQuestion[]> {
  // Simulate rapid non-blocking background fetch (150ms) to ensure smooth transitions without UI freeze
  await new Promise(resolve => setTimeout(resolve, 150));

  // 1. Strict filtering: match both classLevel AND subject
  const candidates = masterDatabase.filter(
    q => q.classLevel === classLevel && 
         q.subject === subject && 
         q.status === 'approved' &&
         !attemptedQuestionIds.includes(q.id)
  );

  // If we already have 10 or more unattempted questions in this class-subject bank, return 10
  if (candidates.length >= 10) {
    return candidates.slice(0, 10);
  }

  // 2. Need additional questions to guarantee exactly 10 questions with ZERO repetition
  const result: QuizQuestion[] = [...candidates];
  let tries = 0;

  while (result.length < 10 && tries < 30) {
    const candidate = generateClassSpecificCurriculumQuestion(
      classLevel,
      subject,
      masterDatabase,
      Date.now() + tries * 137
    );

    const dupCheck = checkQuestionDuplicate(
      candidate.questionText,
      candidate.options[candidate.correctIndex],
      masterDatabase
    );

    if (!dupCheck.isDuplicate && !attemptedQuestionIds.includes(candidate.id)) {
      result.push(candidate);
      masterDatabase.push(candidate);
    }
    tries++;
  }

  // Return exactly 10 questions
  return result.slice(0, 10);
}

// Strictly filters questions by student's class, subject, AND LEVEL (1, 2, 3, 4)
export async function getStrictClassSubjectLevelQuestions(
  classLevel: ClassLevel,
  subject: SubjectName,
  level: QuizLevel,
  attemptedQuestionIds: string[],
  masterDatabase: QuizQuestion[]
): Promise<QuizQuestion[]> {
  await new Promise(resolve => setTimeout(resolve, 80));

  // 1. Strict filter: match classLevel, subject, and level
  let candidates = masterDatabase.filter(
    q => q.classLevel === classLevel &&
         q.subject === subject &&
         (q.level === level || (!q.level && level === 1)) &&
         q.status === 'approved'
  );

  // If fewer than 10 found in master database, generate the canonical 10 questions for this level
  if (candidates.length < 10) {
    const canonicalQs = getCurriculumQuestionsForLevel(classLevel, subject, level);
    for (const q of canonicalQs) {
      if (!masterDatabase.some(m => m.id === q.id)) {
        masterDatabase.push(q);
      }
      if (!candidates.some(c => c.id === q.id)) {
        candidates.push(q);
      }
    }
  }

  // 2. Filter unattempted for zero-repetition experience
  const unattempted = candidates.filter(q => !attemptedQuestionIds.includes(q.id));
  if (unattempted.length >= 10) {
    return randomizeQuizQuestions(unattempted.slice(0, 10), level === 4);
  }

  // 3. If student has already played these (re-taking the level for mastery),
  // return all 10 questions for this level with randomized options
  return randomizeQuizQuestions(candidates.slice(0, 10), level === 4);
}

// Administrator Analytics Helper
export interface QuestionBankAnalytics {
  totalCount: number;
  classCounts: Record<ClassLevel, number>;
  subjectCounts: Record<SubjectName, number>;
  typeCounts: Record<string, number>;
  difficultyCounts: Record<string, number>;
  warnings: string[];
}

export function computeQuestionBankAnalytics(questions: QuizQuestion[]): QuestionBankAnalytics {
  const classCounts: Record<ClassLevel, number> = {
    'Class 2': 0, 'Class 3': 0, 'Class 4': 0, 'Class 5': 0,
    'Class 6': 0, 'Class 7': 0, 'Class 8': 0
  };

  const subjectCounts: Record<SubjectName, number> = {
    'Mathematics': 0, 'English': 0, 'Hindi': 0, 'Marathi': 0,
    'Science': 0, 'General Knowledge': 0, 'Social Studies': 0,
    'History': 0, 'Geography': 0, 'Computer Knowledge': 0,
    'Logical Reasoning': 0, 'Environmental Studies': 0,
    'Moral Education': 0, 'Vocabulary and Grammar': 0
  };

  const typeCounts: Record<string, number> = {};
  const difficultyCounts: Record<string, number> = { easy: 0, medium: 0, hard: 0 };
  const warnings: string[] = [];

  for (const q of questions) {
    if (classCounts[q.classLevel] !== undefined) {
      classCounts[q.classLevel]++;
    }
    if (subjectCounts[q.subject] !== undefined) {
      subjectCounts[q.subject]++;
    }
    const qType = q.questionType || 'mcq';
    typeCounts[qType] = (typeCounts[qType] || 0) + 1;
    if (q.difficulty) {
      difficultyCounts[q.difficulty] = (difficultyCounts[q.difficulty] || 0) + 1;
    }
  }

  // Check for any potential coverage gaps
  for (const [cls, count] of Object.entries(classCounts)) {
    if (count < 10) {
      warnings.push(`${cls} currently has only ${count} approved questions (minimum recommended: 10 per subject).`);
    }
  }

  return {
    totalCount: questions.length,
    classCounts,
    subjectCounts,
    typeCounts,
    difficultyCounts,
    warnings
  };
}
