import { ClassLevel, SubjectName, QuizLevel, QuizQuestion, QuestionType } from '../types';
import { normalizeQuestionText } from './questionBankService';
import { randomizeQuizQuestions } from './answerRandomizerService';
import { getPart1SubjectQuestions, RawQuizSpec } from '../data/questions/subject40BankPart1';
import { getPart2SubjectQuestions } from '../data/questions/subject40BankPart2';

export interface CurriculumBlueprint {
  subject: SubjectName;
  topicsByClass: Record<ClassLevel, string[]>;
}

// 10 Question types in strict order to guarantee pattern diversity across the 10 questions in every level
export const TEN_QUESTION_PATTERNS: QuestionType[] = [
  'mcq',
  'fill_blank',
  'true_false',
  'match_following',
  'choose_correct_statement',
  'find_incorrect',
  'complete_sentence',
  'problem_solving',
  'picture_based',
  'logical_reasoning'
];

export const LEVEL_DIFFICULTIES: Record<QuizLevel, 'easy' | 'medium' | 'hard' | 'expert'> = {
  1: 'easy',
  2: 'medium',
  3: 'hard',
  4: 'expert'
};

export const LEVEL_LABELS: Record<QuizLevel, { title: string; subtitle: string; color: string; badge: string }> = {
  1: { title: 'Level 1 – Easy', subtitle: 'Basic Foundation', color: 'from-emerald-500 to-teal-600', badge: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
  2: { title: 'Level 2 – Moderate', subtitle: 'Concept Application', color: 'from-blue-500 to-indigo-600', badge: 'bg-blue-100 text-blue-800 border-blue-300' },
  3: { title: 'Level 3 – Difficult', subtitle: 'Analytical Thinking', color: 'from-amber-500 to-orange-600', badge: 'bg-amber-100 text-amber-800 border-amber-300' },
  4: { title: 'Level 4 – Advanced', subtitle: 'Mastery & Higher Order', color: 'from-purple-600 to-rose-600', badge: 'bg-purple-100 text-purple-800 border-purple-300' }
};

const SUBJECT_CODES: Record<SubjectName, string> = {
  'Mathematics': 'MATH',
  'English': 'ENG',
  'Hindi': 'HIN',
  'Marathi': 'MAR',
  'Science': 'SCI',
  'General Knowledge': 'GK',
  'Social Studies': 'SST',
  'History': 'HIS',
  'Geography': 'GEO',
  'Computer Knowledge': 'COMP',
  'Logical Reasoning': 'LOG',
  'Environmental Studies': 'EVS',
  'Moral Education': 'MOR',
  'Vocabulary and Grammar': 'VOC'
};

// Master Generator that builds strictly 10 unique questions per (classLevel, subject, level)
// Total per subject = 4 levels × 10 questions = 40 unique questions
// Total across 14 subjects = 14 × 40 = 560 unique questions per class
export function getCurriculumQuestionsForLevel(
  classLevel: ClassLevel,
  subject: SubjectName,
  level: QuizLevel
): QuizQuestion[] {
  const cNum = parseInt(classLevel.replace('Class ', ''), 10) || 4;
  const subjCode = SUBJECT_CODES[subject] || subject.substring(0, 3).toUpperCase();
  const difficulty = LEVEL_DIFFICULTIES[level];

  const specs: RawQuizSpec[] =
    getPart1SubjectQuestions(classLevel, subject, level) ||
    getPart2SubjectQuestions(classLevel, subject, level) ||
    [];

  const questions: QuizQuestion[] = specs.slice(0, 10).map((spec, i) => {
    const qType = TEN_QUESTION_PATTERNS[i % TEN_QUESTION_PATTERNS.length];
    const qId = `VC-C${cNum}-${subjCode}-L${level}-Q${i + 1}`;

    return {
      id: qId,
      classLevel,
      subject,
      level,
      topic: spec.topic,
      questionType: qType,
      questionText: spec.text,
      normalizedHash: normalizeQuestionText(spec.text),
      options: spec.options,
      correctIndex: spec.correctIndex,
      explanation: spec.explanation,
      difficulty,
      diagramEmoji: spec.diagramEmoji,
      timesAttempted: 0,
      timesCorrect: 0,
      status: 'approved',
      author: 'curriculum-expert',
      createdAt: '2026-05-01'
    };
  });

  return randomizeQuizQuestions(questions, level === 4);
}

// Generates the entire full bank of questions across all classes, subjects, and levels
export function generateEntireCurriculumMasterBank(): QuizQuestion[] {
  const ALL_CLASSES: ClassLevel[] = ['Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8'];
  const ALL_SUBJECTS: SubjectName[] = [
    'Mathematics',
    'English',
    'Hindi',
    'Marathi',
    'Science',
    'General Knowledge',
    'Social Studies',
    'History',
    'Geography',
    'Computer Knowledge',
    'Logical Reasoning',
    'Environmental Studies',
    'Moral Education',
    'Vocabulary and Grammar'
  ];
  const ALL_LEVELS: QuizLevel[] = [1, 2, 3, 4];

  const masterList: QuizQuestion[] = [];

  for (const c of ALL_CLASSES) {
    for (const s of ALL_SUBJECTS) {
      for (const l of ALL_LEVELS) {
        const levelQs = getCurriculumQuestionsForLevel(c, s, l);
        masterList.push(...levelQs);
      }
    }
  }

  return masterList;
}
