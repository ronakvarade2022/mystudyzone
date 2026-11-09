export type AmbassadorCategory = 
  | 'knowledge_ambassador'     // 🎁 Students
  | 'educator_excellence'       // 🏆 Teachers
  | 'diamond_ambassador';       // 💎 Top Performers (50+ referrals)

export type ReferralUserType = 'student' | 'teacher';

export interface ReferralMilestone {
  id: string;
  count: number;
  title: string;
  rewardType: 'badge' | 'subscription_extension' | 'certificate';
  rewardDescription: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface ReferralWallet {
  availableBalance: number;
  pendingBalance: number;
  totalEarned: number;
  totalWithdrawn: number;
  currency: string;
}

export interface ReferralAccount {
  id: string;
  userId: string;
  userType: ReferralUserType;
  name: string;
  email: string;
  mobile: string;
  referralCode: string; // e.g. "VC-STU-AARAV4" or "VC-TCH-SHARMA8"
  ambassadorCategory: AmbassadorCategory;
  
  // Teacher verification
  schoolName?: string;
  teacherSubject?: string;
  teacherIdNumber?: string;
  credentialsDocUrl?: string;
  verificationStatus: 'NOT_APPLICABLE' | 'PENDING' | 'VERIFIED' | 'REJECTED';
  verificationNotes?: string;
  verifiedAt?: string;

  wallet: ReferralWallet;

  stats: {
    totalClicks: number;
    totalSignedUp: number;
    paidReferralsCount: number; // Only verified paid referrals
    plan49Referrals: number;
    plan99Referrals: number;
    rank?: number;
  };

  milestones: ReferralMilestone[];
  createdAt: string;
  updatedAt: string;
}

export interface ReferralTransaction {
  id: string;
  referralCode: string;
  referrerId: string;
  referrerName: string;
  referrerType: ReferralUserType;
  buyerStudentId: string;
  buyerStudentName: string;
  buyerPlan: 'basic' | 'premium';
  planAmount: number; // 49 or 99
  referrerReward: number; // 5 or 10
  buyerReward: number; // 5 or 10
  orderId: string;
  paymentId: string;
  status: 'CREDITED' | 'PENDING' | 'REVERSED';
  description: string;
  createdAt: string;
  reversedAt?: string;
  reversalReason?: string;
}

export interface PayoutRequest {
  id: string;
  userId: string;
  userName: string;
  userType: ReferralUserType;
  referralCode?: string;
  amount: number;
  currency?: string;
  method?: 'UPI' | 'BANK';
  upiId?: string;
  bankAccountNumber?: string;
  bankIfsc?: string;
  accountHolderName?: string;
  bankDetails?: {
    accountHolderName: string;
    accountNumber: string;
    ifscCode: string;
    bankName: string;
  };
  status: 'PENDING' | 'REQUESTED' | 'APPROVED' | 'REJECTED' | 'PROCESSED' | 'COMPLETED';
  adminNotes?: string;
  transactionReference?: string;
  requestedAt?: string;
  createdAt: string;
  processedAt?: string;
}

export interface ReferralLeaderboardEntry {
  rank: number;
  userId: string;
  name: string;
  userType: ReferralUserType;
  ambassadorCategory: AmbassadorCategory;
  schoolName?: string;
  paidReferralsCount: number;
  paidReferrals?: number;
  totalEarned: number;
  badge: string;
}

export interface ReferralSystemConfig {
  programEnabled: boolean;
  budgetCap: number;
  currentBudgetSpent: number;
  plan49ReferrerReward: number; // 5
  plan49BuyerReward: number;    // 5
  plan99ReferrerReward: number; // 10
  plan99BuyerReward: number;    // 10
  minPayoutAmount: number;      // 50
  fraudDetectionStrict: boolean;
}
