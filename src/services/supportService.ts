import {
  SupportTicket,
  SupportCategory,
  GrievanceRecord,
  GrievanceCategory,
  GrievanceStatus,
  QuestionReport,
  QuestionIssueType,
  FaqItem
} from '../types/support';
import { db } from '../firebase';
import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  updateDoc 
} from 'firebase/firestore';

const STORAGE_KEYS = {
  TICKETS: 'vc_support_tickets_cache',
  GRIEVANCES: 'vc_grievances_cache',
  QUESTION_REPORTS: 'vc_question_reports_cache',
  FAQS: 'vc_site_faqs_cache'
};

// Seed FAQs with high quality educational and platform information
export const DEFAULT_FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Plans & Pricing',
    question: 'What are the subscription plans available on Vacation Champions?',
    answer: 'We offer three straightforward plans:\n1. FREE PLAN – ₹0 – Lifetime: Includes basic quizzes, 2 demo moral audio stories, sample puzzles, and enrollment locked to your grade.\n2. STANDARD PLAN – ₹49 – Exactly 90 Days: Unlocks all 14 school curriculum subjects and unlimited chapter quizzes.\n3. PREMIUM PLAN – ₹99 – Exactly 90 Days: Complete access including 45+ audio moral stories, Chhatrapati Shivaji Maharaj 50 chapters, Drawing Studio, Cricket Quiz Arena, 4th & 7th Std Maharashtra Scholarship, and Future AI Skills.',
    tags: ['pricing', 'subscription', '49', '99', 'plans']
  },
  {
    id: 'faq-2',
    category: 'Payment & Activation',
    question: 'How do I pay and how quickly is my subscription activated?',
    answer: 'You can pay instantly using Razorpay LIVE Checkout (UPI, Cards, NetBanking) or scan our dynamic Razorpay UPI QR Code using Google Pay, PhonePe, Paytm, etc. Once payment is captured and verified by our backend server, your 90-day subscription activates instantly in your student profile.',
    tags: ['payment', 'razorpay', 'upi', 'qr code', 'activation']
  },
  {
    id: 'faq-3',
    category: 'Learning & Quizzes',
    question: 'How does the "Zero Repeated Questions" quiz system work?',
    answer: 'Our smart quiz engine tracks all attempted question IDs per student account in Firestore. When you start a 10-question practice set, the system filters out questions you have already attempted, ensuring you get fresh practice every single time until you complete the entire syllabus bank.',
    tags: ['quizzes', 'repeat', 'practice', 'questions']
  },
  {
    id: 'faq-4',
    category: 'Audio Stories & Media',
    question: 'Can I listen to stories in both Marathi and English?',
    answer: 'Yes! Story World features 45+ moral stories with natural female voice narrations in both Marathi and English. You can switch narration languages anytime, toggle text speed, and read synchronized bilingual text while listening.',
    tags: ['stories', 'marathi', 'english', 'audio', 'voice']
  },
  {
    id: 'faq-5',
    category: 'Scholarship Exam Prep',
    question: 'Which classes have Maharashtra Scholarship examination modules?',
    answer: 'We provide specialized Maharashtra State Examination Council (MSCE) scholarship preparation modules for Class 4 (Pre-Upper Primary) and Class 7 (Pre-Secondary), including Paper 1 (First Language & Mathematics) and Paper 2 (Third Language & Intelligence Test/Mental Ability).',
    tags: ['scholarship', 'class 4', 'class 7', 'msce']
  },
  {
    id: 'faq-6',
    category: 'Help & Complaints',
    question: 'What if a quiz question or answer appears incorrect?',
    answer: 'Under every quiz question, click the "Report Question" button. This automatically logs the question ID and your remarks. Our academic review panel will verify it against official Maharashtra State Board textbooks and update the question bank.',
    tags: ['incorrect answer', 'error', 'report', 'support']
  },
  {
    id: 'faq-7',
    category: 'Account & Safety',
    question: 'Can I switch my enrolled class grade?',
    answer: 'To protect syllabus progression and exam records, class levels are permanently locked upon enrollment. If you enrolled in the wrong class by mistake, please submit a Help & Support ticket with your student UID, and an administrator will review and adjust your grade.',
    tags: ['class switch', 'grade lock', 'account']
  }
];

function generateTicketNumber(): string {
  const rand = Math.floor(10000 + Math.random() * 90000);
  return `TKT-VC-${rand}`;
}

function generateGrievanceNumber(): string {
  const rand = Math.floor(10000 + Math.random() * 90000);
  return `GRV-VC-${rand}`;
}

function generateReportNumber(): string {
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `REP-VC-${rand}`;
}

function getLocalData<T>(key: string, defaultVal: T[]): T[] {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return defaultVal;
    return JSON.parse(raw);
  } catch {
    return defaultVal;
  }
}

function saveLocalData<T>(key: string, data: T[]): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.warn(`[SupportService] Failed to write localStorage for ${key}`, err);
  }
}

// 1. Support Ticket Operations
export async function createSupportTicket(data: {
  studentId: string;
  studentName: string;
  email: string;
  mobile?: string;
  category: SupportCategory;
  subject: string;
  description: string;
  screenshotUrl?: string;
}): Promise<SupportTicket> {
  const ticketNumber = generateTicketNumber();
  const id = `tkt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const now = new Date().toISOString();

  const newTicket: SupportTicket = {
    id,
    ticketNumber,
    studentId: data.studentId || 'guest',
    studentName: data.studentName || 'Student',
    email: data.email,
    mobile: data.mobile || '',
    category: data.category,
    subject: data.subject.trim(),
    description: data.description.trim(),
    screenshotUrl: data.screenshotUrl || '',
    status: 'OPEN',
    priority: data.category.includes('Payment') ? 'HIGH' : 'MEDIUM',
    createdAt: now,
    updatedAt: now
  };

  // 1. Save to Local Cache
  const localList = getLocalData<SupportTicket>(STORAGE_KEYS.TICKETS, []);
  localList.unshift(newTicket);
  saveLocalData(STORAGE_KEYS.TICKETS, localList);

  // 2. Persist to Firestore if available
  try {
    if (db) {
      await setDoc(doc(db, 'support_tickets', newTicket.id), newTicket);
    }
  } catch (err) {
    console.warn('[SupportService] Failed to sync ticket to Firestore, local copy active:', err);
  }

  return newTicket;
}

export async function getSupportTickets(studentId?: string): Promise<SupportTicket[]> {
  const localList = getLocalData<SupportTicket>(STORAGE_KEYS.TICKETS, []);

  try {
    if (db) {
      const snap = await getDocs(collection(db, 'support_tickets'));
      if (!snap.empty) {
        const firestoreList: SupportTicket[] = [];
        snap.forEach(d => {
          firestoreList.push(d.data() as SupportTicket);
        });
        // Merge with local list, deduplicating by ID
        const map = new Map<string, SupportTicket>();
        firestoreList.forEach(t => map.set(t.id, t));
        localList.forEach(t => {
          if (!map.has(t.id)) map.set(t.id, t);
        });
        const merged = Array.from(map.values()).sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        saveLocalData(STORAGE_KEYS.TICKETS, merged);
        return studentId ? merged.filter(t => t.studentId === studentId) : merged;
      }
    }
  } catch (err) {
    console.warn('[SupportService] Firestore read failed, using cached tickets:', err);
  }

  return studentId ? localList.filter(t => t.studentId === studentId) : localList;
}

export async function getSupportTicketByNumber(ticketNumber: string): Promise<SupportTicket | null> {
  const trimmed = ticketNumber.trim().toUpperCase();
  const all = await getSupportTickets();
  const found = all.find(t => t.ticketNumber.toUpperCase() === trimmed || t.id === trimmed);
  return found || null;
}

export async function updateSupportTicketStatus(
  ticketId: string, 
  status: SupportTicket['status'], 
  adminResponse?: string
): Promise<boolean> {
  const localList = getLocalData<SupportTicket>(STORAGE_KEYS.TICKETS, []);
  const idx = localList.findIndex(t => t.id === ticketId || t.ticketNumber === ticketId);
  const now = new Date().toISOString();

  if (idx !== -1) {
    localList[idx].status = status;
    localList[idx].updatedAt = now;
    if (adminResponse !== undefined) {
      localList[idx].adminResponse = adminResponse;
    }
    saveLocalData(STORAGE_KEYS.TICKETS, localList);
  }

  try {
    if (db) {
      const tRef = doc(db, 'support_tickets', ticketId);
      const updateData: any = { status, updatedAt: now };
      if (adminResponse !== undefined) updateData.adminResponse = adminResponse;
      await updateDoc(tRef, updateData);
    }
    return true;
  } catch (err) {
    console.warn('[SupportService] Failed to update ticket in Firestore:', err);
    return idx !== -1;
  }
}

// 2. Grievance Redressal Operations
export async function createGrievance(data: {
  studentId: string;
  studentName: string;
  email: string;
  mobile?: string;
  category: GrievanceCategory;
  subject: string;
  description: string;
}): Promise<GrievanceRecord> {
  const grievanceNumber = generateGrievanceNumber();
  const id = `grv_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const now = new Date().toISOString();

  const newGrievance: GrievanceRecord = {
    id,
    grievanceNumber,
    studentId: data.studentId || 'guest',
    studentName: data.studentName || 'Student',
    email: data.email,
    mobile: data.mobile || '',
    category: data.category,
    subject: data.subject.trim(),
    description: data.description.trim(),
    status: 'Submitted',
    createdAt: now,
    updatedAt: now
  };

  const localList = getLocalData<GrievanceRecord>(STORAGE_KEYS.GRIEVANCES, []);
  localList.unshift(newGrievance);
  saveLocalData(STORAGE_KEYS.GRIEVANCES, localList);

  try {
    if (db) {
      await setDoc(doc(db, 'grievances', newGrievance.id), newGrievance);
    }
  } catch (err) {
    console.warn('[SupportService] Grievance Firestore sync deferred:', err);
  }

  return newGrievance;
}

export async function getGrievances(studentId?: string): Promise<GrievanceRecord[]> {
  const localList = getLocalData<GrievanceRecord>(STORAGE_KEYS.GRIEVANCES, []);

  try {
    if (db) {
      const snap = await getDocs(collection(db, 'grievances'));
      if (!snap.empty) {
        const firestoreList: GrievanceRecord[] = [];
        snap.forEach(d => {
          firestoreList.push(d.data() as GrievanceRecord);
        });
        const map = new Map<string, GrievanceRecord>();
        firestoreList.forEach(g => map.set(g.id, g));
        localList.forEach(g => {
          if (!map.has(g.id)) map.set(g.id, g);
        });
        const merged = Array.from(map.values()).sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        saveLocalData(STORAGE_KEYS.GRIEVANCES, merged);
        return studentId ? merged.filter(g => g.studentId === studentId) : merged;
      }
    }
  } catch (err) {
    console.warn('[SupportService] Firestore read failed for grievances:', err);
  }

  return studentId ? localList.filter(g => g.studentId === studentId) : localList;
}

export async function getGrievanceByNumber(grievanceNumber: string): Promise<GrievanceRecord | null> {
  const trimmed = grievanceNumber.trim().toUpperCase();
  const all = await getGrievances();
  const found = all.find(g => g.grievanceNumber.toUpperCase() === trimmed || g.id === trimmed);
  return found || null;
}

export async function updateGrievanceStatus(
  grievanceId: string, 
  status: GrievanceStatus, 
  adminResolution?: string
): Promise<boolean> {
  const localList = getLocalData<GrievanceRecord>(STORAGE_KEYS.GRIEVANCES, []);
  const idx = localList.findIndex(g => g.id === grievanceId || g.grievanceNumber === grievanceId);
  const now = new Date().toISOString();

  if (idx !== -1) {
    localList[idx].status = status;
    localList[idx].updatedAt = now;
    if (adminResolution !== undefined) {
      localList[idx].adminResolution = adminResolution;
    }
    saveLocalData(STORAGE_KEYS.GRIEVANCES, localList);
  }

  try {
    if (db) {
      const gRef = doc(db, 'grievances', grievanceId);
      const updateData: any = { status, updatedAt: now };
      if (adminResolution !== undefined) updateData.adminResolution = adminResolution;
      await updateDoc(gRef, updateData);
    }
    return true;
  } catch (err) {
    console.warn('[SupportService] Failed to update grievance in Firestore:', err);
    return idx !== -1;
  }
}

// 3. Question Reporting Operations
export async function createQuestionReport(data: {
  questionId: string;
  questionText: string;
  subject: string;
  classLevel: string;
  selectedAnswer?: string;
  correctAnswer?: string;
  issueType: QuestionIssueType;
  details: string;
  studentId: string;
  studentName: string;
  studentEmail: string;
}): Promise<QuestionReport> {
  const reportNumber = generateReportNumber();
  const id = `rep_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const now = new Date().toISOString();

  const newReport: QuestionReport = {
    id,
    reportNumber,
    questionId: data.questionId,
    questionText: data.questionText,
    subject: data.subject,
    classLevel: data.classLevel,
    selectedAnswer: data.selectedAnswer,
    correctAnswer: data.correctAnswer,
    issueType: data.issueType,
    details: data.details.trim(),
    studentId: data.studentId,
    studentName: data.studentName,
    studentEmail: data.studentEmail,
    status: 'PENDING_REVIEW',
    createdAt: now
  };

  const localList = getLocalData<QuestionReport>(STORAGE_KEYS.QUESTION_REPORTS, []);
  localList.unshift(newReport);
  saveLocalData(STORAGE_KEYS.QUESTION_REPORTS, localList);

  try {
    if (db) {
      await setDoc(doc(db, 'question_reports', newReport.id), newReport);
    }
  } catch (err) {
    console.warn('[SupportService] Question report Firestore sync deferred:', err);
  }

  return newReport;
}

export async function getQuestionReports(): Promise<QuestionReport[]> {
  const localList = getLocalData<QuestionReport>(STORAGE_KEYS.QUESTION_REPORTS, []);

  try {
    if (db) {
      const snap = await getDocs(collection(db, 'question_reports'));
      if (!snap.empty) {
        const firestoreList: QuestionReport[] = [];
        snap.forEach(d => firestoreList.push(d.data() as QuestionReport));
        const map = new Map<string, QuestionReport>();
        firestoreList.forEach(r => map.set(r.id, r));
        localList.forEach(r => {
          if (!map.has(r.id)) map.set(r.id, r);
        });
        const merged = Array.from(map.values()).sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        saveLocalData(STORAGE_KEYS.QUESTION_REPORTS, merged);
        return merged;
      }
    }
  } catch (err) {
    console.warn('[SupportService] Failed to read question reports from Firestore:', err);
  }

  return localList;
}

export async function updateQuestionReportStatus(
  reportId: string, 
  status: QuestionReport['status'], 
  adminNotes?: string
): Promise<boolean> {
  const localList = getLocalData<QuestionReport>(STORAGE_KEYS.QUESTION_REPORTS, []);
  const idx = localList.findIndex(r => r.id === reportId || r.reportNumber === reportId);

  if (idx !== -1) {
    localList[idx].status = status;
    if (adminNotes !== undefined) localList[idx].adminNotes = adminNotes;
    saveLocalData(STORAGE_KEYS.QUESTION_REPORTS, localList);
  }

  try {
    if (db) {
      const rRef = doc(db, 'question_reports', reportId);
      const updateData: any = { status };
      if (adminNotes !== undefined) updateData.adminNotes = adminNotes;
      await updateDoc(rRef, updateData);
    }
    return true;
  } catch (err) {
    console.warn('[SupportService] Failed to update question report in Firestore:', err);
    return idx !== -1;
  }
}

// 4. FAQ Operations
export async function getSiteFaqs(): Promise<FaqItem[]> {
  const localList = getLocalData<FaqItem>(STORAGE_KEYS.FAQS, DEFAULT_FAQS);
  return localList;
}

export async function saveSiteFaq(faq: FaqItem): Promise<void> {
  const localList = getLocalData<FaqItem>(STORAGE_KEYS.FAQS, DEFAULT_FAQS);
  const idx = localList.findIndex(f => f.id === faq.id);
  if (idx !== -1) {
    localList[idx] = faq;
  } else {
    localList.push(faq);
  }
  saveLocalData(STORAGE_KEYS.FAQS, localList);
}

export async function deleteSiteFaq(faqId: string): Promise<void> {
  const localList = getLocalData<FaqItem>(STORAGE_KEYS.FAQS, DEFAULT_FAQS);
  const filtered = localList.filter(f => f.id !== faqId);
  saveLocalData(STORAGE_KEYS.FAQS, filtered);
}
