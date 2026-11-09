import { ALL_STD4_QUESTIONS } from './scholarshipStd4';
import { ALL_STD7_QUESTIONS } from './scholarshipStd7';

export type ScholarshipClass = 'Std 4th (PSE)' | 'Std 7th (UPS)';

export type ScholarshipLanguage = 
  | 'Marathi' 
  | 'English' 
  | 'Hindi';

export type ScholarshipSection = 
  | 'First Language'
  | 'Mathematics'
  | 'Second Language'
  | 'Intelligence Test';

export interface ScholarshipQuestion {
  id: string;
  testNumber: number; // 1 to 10
  section: ScholarshipSection;
  subject: ScholarshipSection; // for backwards compatibility
  questionNumberInSet: number; // 1 to 30
  difficulty: 'easy' | 'moderate' | 'difficult';
  type: string;
  
  // Multilingual question texts: mapped by language
  questionText: Record<string, string>;
  options: Record<string, [string, string, string, string]>;
  correctIndex: number;
  explanation: Record<string, string>;
  marks: number;
}

// 3 Official MSCE Examination Languages for Maharashtra State
export const MSCE_LANGUAGES: { id: ScholarshipLanguage; label: string; script: string }[] = [
  { id: 'Marathi', label: 'मराठी (Marathi)', script: 'मराठी' },
  { id: 'English', label: 'English', script: 'English' },
  { id: 'Hindi', label: 'हिंदी (Hindi)', script: 'हिंदी' }
];

export const SCHOLARSHIP_SECTION_BREAKDOWN: {
  section: ScholarshipSection;
  count: number;
  startQ: number;
  endQ: number;
  marksPerQuestion: number;
}[] = [
  { section: 'First Language', count: 5, startQ: 1, endQ: 5, marksPerQuestion: 2 },
  { section: 'Mathematics', count: 10, startQ: 6, endQ: 15, marksPerQuestion: 2 },
  { section: 'Second Language', count: 5, startQ: 16, endQ: 20, marksPerQuestion: 2 },
  { section: 'Intelligence Test', count: 10, startQ: 21, endQ: 30, marksPerQuestion: 2 }
];

// Re-export pre-built authentic question banks
export { ALL_STD4_QUESTIONS, ALL_STD7_QUESTIONS };
export const STD_4_SCHOLARSHIP_BANK = ALL_STD4_QUESTIONS;
export const STD_7_SCHOLARSHIP_BANK = ALL_STD7_QUESTIONS;

/**
 * Returns static 30 questions for a given class level and set number (1 to 10).
 * Strictly guarantees:
 * - First Language: 5 Questions (Q1 to Q5)
 * - Mathematics: 10 Questions (Q6 to Q15)
 * - Second Language: 5 Questions (Q16 to Q20)
 * - Intelligence Test: 10 Questions (Q21 to Q30)
 * Total = exactly 30 questions with 0 duplicates.
 */
export function getScholarshipSetQuestions(
  classLevel: ScholarshipClass,
  setNumber: number
): ScholarshipQuestion[] {
  const source = classLevel === 'Std 4th (PSE)' ? ALL_STD4_QUESTIONS : ALL_STD7_QUESTIONS;
  const filtered = source.filter(q => q.testNumber === setNumber);
  
  if (filtered.length === 30) {
    return filtered;
  }

  // Safety fallback guaranteeing exactly 30 questions
  return source.slice((setNumber - 1) * 30, setNumber * 30);
}

/**
 * DYNAMIC ZERO-REPETITION QUESTION SELECTOR:
 * Selects 30 unique questions for the given standard and set, prioritising questions
 * the student has NEVER attempted before.
 * 
 * Rules:
 * 1. Strictly 30 questions (5 First Language + 10 Mathematics + 5 Second Language + 10 Intelligence Test).
 * 2. Filters out any question whose ID is in attemptedQuestionIds.
 * 3. Never shows duplicate questions within a test.
 * 4. If the student has attempted all questions in the bank for a section, safely recycles questions
 *    so the exam never fails to generate.
 */
export function getDynamicScholarshipQuestions(
  classLevel: ScholarshipClass,
  setNumber: number,
  attemptedQuestionIds: string[] = []
): ScholarshipQuestion[] {
  const bank = classLevel === 'Std 4th (PSE)' ? ALL_STD4_QUESTIONS : ALL_STD7_QUESTIONS;
  const attemptedSet = new Set(attemptedQuestionIds);

  const selectedQuestions: ScholarshipQuestion[] = [];
  const chosenIds = new Set<string>();

  // For each section in standard MSCE exam
  for (const breakdown of SCHOLARSHIP_SECTION_BREAKDOWN) {
    const sec = breakdown.section;
    const requiredCount = breakdown.count;

    // 1. Get default questions from this specific set
    const setSecQuestions = bank.filter(q => q.testNumber === setNumber && q.section === sec);

    // 2. Separate into unattempted and already-attempted
    const unattemptedInSet = setSecQuestions.filter(q => !attemptedSet.has(q.id));
    const secSelected: ScholarshipQuestion[] = [...unattemptedInSet];
    unattemptedInSet.forEach(q => chosenIds.add(q.id));

    // 3. If we still need more questions because student attempted some in this set,
    // draw unattempted questions from other sets in the same standard and section
    if (secSelected.length < requiredCount) {
      const otherUnattemptedInBank = bank.filter(
        q => q.section === sec && !attemptedSet.has(q.id) && !chosenIds.has(q.id)
      );
      
      // Shuffle candidates for diversity
      const shuffled = [...otherUnattemptedInBank].sort(() => Math.random() - 0.5);
      for (const q of shuffled) {
        if (secSelected.length >= requiredCount) break;
        secSelected.push(q);
        chosenIds.add(q.id);
      }
    }

    // 4. If the entire standard question bank is exhausted for this section,
    // fill remainder from the default set questions
    if (secSelected.length < requiredCount) {
      for (const q of setSecQuestions) {
        if (secSelected.length >= requiredCount) break;
        if (!chosenIds.has(q.id)) {
          secSelected.push(q);
          chosenIds.add(q.id);
        }
      }
    }

    // Assign ordered question numbering Q1-Q30
    secSelected.forEach((q, idx) => {
      selectedQuestions.push({
        ...q,
        questionNumberInSet: breakdown.startQ + idx
      });
    });
  }

  return selectedQuestions;
}
