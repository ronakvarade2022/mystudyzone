export type ClassLevel = 
  | 'Class 2' 
  | 'Class 3' 
  | 'Class 4' 
  | 'Class 5' 
  | 'Class 6' 
  | 'Class 7' 
  | 'Class 8';

export type SubjectName =
  | 'Mathematics'
  | 'English'
  | 'Hindi'
  | 'Marathi'
  | 'Science'
  | 'General Knowledge'
  | 'Social Studies'
  | 'History'
  | 'Geography'
  | 'Computer Knowledge'
  | 'Logical Reasoning'
  | 'Environmental Studies'
  | 'Moral Education'
  | 'Vocabulary and Grammar';

export type QuizLevel = 1 | 2 | 3 | 4;

export interface SubjectLevelProgress {
  maxUnlockedLevel: QuizLevel;
  completedLevels: QuizLevel[];
  bestScores: Record<number, number>; // level -> score out of 10
}

export interface StudentProfile {
  id: string;
  name: string;
  parentName: string;
  parentEmail?: string;
  mobile: string;
  email: string;
  classLevel: ClassLevel;
  schoolName?: string;
  parentConsent: boolean;
  points: number;
  coins: number;
  level: number; // 1 to 5
  streakDays: number;
  lastActiveDate: string;
  badges: string[]; // Badge IDs
  plan: 'free' | 'basic' | 'premium';
  registeredAt: string;
  planPurchasedAt?: string;
  planExpiresAt?: string;
  avatar: string;
  attemptedQuestionIds: string[]; // Crucial for zero question repetition per student
  attemptedScholarshipQuestionIds?: string[]; // Tracks attempted scholarship question IDs to ensure 0 duplicates
  attemptedPuzzleIds: string[];
  completedStoryIds: string[];
  subjectProgress?: Record<string, SubjectLevelProgress>; // SubjectName -> Level progress
  classChangeLogs?: {
    oldClass: ClassLevel;
    newClass: ClassLevel;
    reason: string;
    changedAt: string;
    adminName: string;
  }[];
  // Authentic verification status
  isPhoneVerified?: boolean;
  isEmailVerified?: boolean;
  firebaseUid?: string;
  // 3-Role Access Portal & School Governance extensions
  linkedParentId?: string;
  attendanceRecords?: AttendanceRecord[];
  assignments?: AssignmentItem[];
  feeRecords?: FeeRecord[];
}

export interface ParentProfile {
  id: string;
  name: string;
  email: string;
  mobile: string;
  linkedStudentIds: string[];
  isVerified: boolean;
  registeredAt: string;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  date: string;
  status: 'PRESENT' | 'ABSENT' | 'HOLIDAY' | 'late' | 'present' | string;
  minutesLogged?: number;
  remarks?: string;
}

export interface AssignmentItem {
  id: string;
  studentId: string;
  title: string;
  subject: SubjectName;
  dueDate: string;
  status: 'PENDING' | 'SUBMITTED' | 'EVALUATED' | 'graded' | 'submitted' | string;
  maxScore: number;
  obtainedScore?: number;
  score?: number;
  teacherRemarks?: string;
  teacherFeedback?: string;
  description?: string;
  submittedAt?: string;
}

export interface FeeRecord {
  id: string;
  studentId: string;
  receiptNumber?: string;
  receiptNo?: string;
  feeType?: string;
  title?: string;
  totalAmount?: number;
  amount?: number;
  paidAmount?: number;
  dueAmount?: number;
  status: 'PAID' | 'PARTIAL' | 'DUE' | 'paid' | 'due' | 'overdue' | string;
  dueDate: string;
  paidAt?: string;
}

export interface AnnouncementItem {
  id: string;
  title: string;
  content: string;
  targetAudience: 'ALL' | 'STUDENTS' | 'PARENTS';
  publishedAt: string;
  author: string;
}

export interface AuthenticatedUser {
  uid: string;
  email: string;
  role: 'student' | 'parent' | 'admin';
  displayName: string;
  studentId?: string; // If student
  linkedStudentIds?: string[]; // If parent
  isVerified: boolean;
}

export interface RegistrationResult {
  success: boolean;
  message: string;
  duplicateField?: 'email' | 'mobile';
  existingStudentName?: string;
  existingClass?: ClassLevel;
  student?: StudentProfile;
  requiresDualVerification?: boolean;
}

export type QuestionType =
  | 'mcq'
  | 'fill_blank'
  | 'true_false'
  | 'match_following'
  | 'find_incorrect'
  | 'choose_correct_statement'
  | 'complete_sentence'
  | 'problem_solving'
  | 'picture_based'
  | 'logical_reasoning'
  | 'assertion_reasoning'
  | 'number_based'
  | 'sequence_pattern'
  | 'comprehension'
  | 'real_life_application'
  | 'diagram_identification';

export interface QuizQuestion {
  id: string;
  classLevel: ClassLevel;
  subject: SubjectName;
  level?: QuizLevel; // 1: Easy, 2: Medium, 3: Hard, 4: Expert (defaults to 1)
  topic?: string;
  questionType?: QuestionType;
  questionText: string;
  normalizedHash: string; // for duplicate detection
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  diagramEmoji?: string;
  timesAttempted: number;
  timesCorrect: number;
  status: 'approved' | 'rejected' | 'pending';
  author: 'system' | 'admin' | 'curriculum-expert' | 'ai-validator';
  createdAt: string;
}

export interface QuizAttempt {
  id: string;
  studentId: string;
  studentName: string;
  classLevel: ClassLevel;
  subject: SubjectName;
  level?: QuizLevel; // 1, 2, 3, or 4
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  scorePercent: number;
  timeTakenSeconds: number;
  pointsEarned: number;
  passed?: boolean;
  questionIds: string[];
  answers: {
    questionId: string;
    questionText: string;
    options: string[];
    selectedIndex: number;
    correctIndex: number;
    isCorrect: boolean;
    explanation: string;
  }[];
  completedAt: string;
}

export interface StoryComprehensionQuestion {
  id: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
}

export interface StoryItem {
  id: string;
  title: string;
  language: 'English' | 'Hindi' | 'Marathi';
  themeColor: string;
  category: string;
  classRecommendation: string;
  summary: string;
  content: string[];
  moral: string;
  vocabulary: { word: string; meaning: string }[];
  questions: StoryComprehensionQuestion[];
  estimatedReadMinutes: number;
  audioSampleScript: string;
}

export type DrawingCategory = 
  | 'Nature'
  | 'Animals'
  | 'Festivals'
  | 'Cartoon and Fun'
  | 'Transport'
  | 'Education and Science'
  | 'Nature and Scenery'
  | 'Animals and Birds'
  | 'Flowers and Gardens'
  | 'Festivals and Celebrations'
  | 'Cartoons and Fun Characters'
  | 'Vehicles and Transport'
  | 'Fruits and Vegetables'
  | 'My School and Family'
  | 'Indian Culture'
  | 'Space and Planets'
  | 'Save Our Environment'
  | 'Creative Imagination';

export interface DrawingTemplate {
  id: string;
  title: string;
  category: DrawingCategory;
  classTier: 'Classes 2–3' | 'Classes 4–5' | 'Classes 6–8';
  description: string;
  svgOutline: string; // Clean SVG outline with enclosed paths for flood-fill
  published: boolean;
  featured?: boolean;
}

export interface DrawingChallenge {
  id: string;
  title: string;
  type: 'daily' | 'weekly' | 'festival' | 'nature' | 'creative';
  theme: string;
  description: string;
  rewardPoints: number;
  badgeId: string;
  badgeName: string;
  endsIn: string;
}

export interface DrawingSubmission {
  id: string;
  studentId: string;
  studentName: string;
  title: string;
  topic: string;
  category: string;
  type: 'coloured' | 'original'; // Coloured ready-made vs My Own Drawing
  templateId?: string;
  dataUrl: string;
  createdAt: string;
  pointsEarned: number;
  badgeAwarded?: string;
}

export interface PuzzleItem {
  id: string;
  title: string;
  category: 
    | 'number' 
    | 'math' 
    | 'logic' 
    | 'word' 
    | 'memory' 
    | 'odd_one_out' 
    | 'sequence' 
    | 'sudoku';
  minClass: number; // 2
  maxClass: number; // 8
  prompt: string;
  instructions: string;
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
  hint: string;
  points: number;
  metadata?: any;
}

export interface PaymentTransaction {
  id: string;
  receiptNumber: string;
  studentId: string;
  studentName: string;
  parentEmail: string;
  parentMobile: string;
  planId: 'basic' | 'premium';
  planTitle: string;
  amount: number; // 49 or 99
  currency: 'INR';
  orderId: string;
  paymentId: string;
  signature: string;
  method: 'UPI' | 'Card' | 'NetBanking' | string;
  status: 'SUCCESS' | 'FAILED' | 'PENDING' | 'REFUNDED';
  createdAt: string;
  verifiedAt?: string;
  membershipStartDate?: string;
  membershipExpiryDate?: string;
}

export interface AchievementBadge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'quiz' | 'streak' | 'story' | 'drawing' | 'puzzle' | 'membership';
  pointsRequirement: number;
}

export interface InAppNotification {
  id: string;
  title: string;
  message: string;
  type: 'challenge' | 'achievement' | 'quiz' | 'membership' | 'story' | 'drawing';
  timestamp: string;
  read: boolean;
}

export * from './referral';

