export type SupportCategory =
  | 'Registration & Login'
  | 'Password Reset'
  | 'Payment & Subscription'
  | 'Educational Material Access'
  | 'Notes & Study Material Downloads'
  | 'Technical Errors'
  | 'Incorrect Questions or Answers'
  | 'Website Navigation'
  | 'General Queries';

export type TicketStatus = 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';
export type TicketPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';

export interface SupportTicket {
  id: string;
  ticketNumber: string; // e.g. TKT-VC-10245
  studentId: string;
  studentName: string;
  email: string;
  mobile?: string;
  category: SupportCategory;
  subject: string;
  description: string;
  screenshotUrl?: string;
  status: TicketStatus;
  priority: TicketPriority;
  adminResponse?: string;
  createdAt: string;
  updatedAt: string;
}

export type GrievanceCategory =
  | 'Incorrect Questions'
  | 'Incorrect Answers'
  | 'Missing Materials'
  | 'Payment / Subscription Issues'
  | 'Technical Glitches'
  | 'Misleading or Inappropriate Content'
  | 'Other Complaints';

export type GrievanceStatus =
  | 'Submitted'
  | 'Under Review'
  | 'In Progress'
  | 'Resolved'
  | 'Closed';

export interface GrievanceRecord {
  id: string;
  grievanceNumber: string; // e.g. GRV-VC-82910
  studentId: string;
  studentName: string;
  email: string;
  mobile?: string;
  category: GrievanceCategory;
  subject: string;
  description: string;
  status: GrievanceStatus;
  adminResolution?: string;
  createdAt: string;
  updatedAt: string;
}

export type QuestionIssueType =
  | 'Wrong Answer Key'
  | 'Factual Inaccuracy'
  | 'Spelling / Typo'
  | 'Image / Diagram Missing'
  | 'Explanation Unclear'
  | 'Other';

export type QuestionReportStatus =
  | 'PENDING_REVIEW'
  | 'VERIFIED_CORRECT'
  | 'NEEDS_CORRECTION'
  | 'RESOLVED';

export interface QuestionReport {
  id: string;
  reportNumber: string; // e.g. REP-VC-5501
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
  status: QuestionReportStatus;
  adminNotes?: string;
  createdAt: string;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  tags?: string[];
  language?: 'en' | 'hi' | 'mr';
}
