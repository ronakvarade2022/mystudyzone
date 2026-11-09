import { 
  ReferralAccount, 
  ReferralTransaction, 
  PayoutRequest, 
  ReferralLeaderboardEntry,
  ReferralSystemConfig 
} from '../types/referral';

export interface ReferralAccountResponse {
  success: boolean;
  account: ReferralAccount;
  transactions: ReferralTransaction[];
  config: Partial<ReferralSystemConfig>;
  error?: string;
}

export interface ValidationResponse {
  valid: boolean;
  code?: string;
  referrerName?: string;
  ambassadorCategory?: string;
  userType?: string;
  plan49Cashback?: number;
  plan99Cashback?: number;
  message?: string;
  error?: string;
}

export interface LeaderboardResponse {
  success: boolean;
  students: ReferralLeaderboardEntry[];
  teachers: ReferralLeaderboardEntry[];
  diamonds: ReferralLeaderboardEntry[];
  error?: string;
}

export interface AdminStatsResponse {
  success: boolean;
  stats: {
    totalAmbassadors: number;
    studentAmbassadors: number;
    teacherAmbassadors: number;
    diamondAmbassadors: number;
    totalPaidReferrals: number;
    totalEarnedDistributed: number;
    totalWithdrawn: number;
    totalPendingPayoutAmount: number;
    pendingPayoutCount: number;
    pendingTeacherCount: number;
    config: ReferralSystemConfig;
    recentTransactions: ReferralTransaction[];
    payoutRequests: PayoutRequest[];
    pendingTeachers: ReferralAccount[];
  };
  error?: string;
}

export const referralService = {
  // 1. Fetch user's referral account (auto-provisions if first visit)
  async getAccount(
    userId: string, 
    userType: 'student' | 'teacher' = 'student', 
    name = '', 
    email = '', 
    mobile = ''
  ): Promise<ReferralAccountResponse> {
    const params = new URLSearchParams({
      userType,
      name,
      email,
      mobile
    });
    const res = await fetch(`/api/referrals/account/${encodeURIComponent(userId)}?${params.toString()}`);
    if (!res.ok) {
      throw new Error(`Failed to load referral profile: ${res.statusText}`);
    }
    return res.json();
  },

  // 2. Validate referral code before checkout
  async validateCode(code: string, currentUserId?: string): Promise<ValidationResponse> {
    const res = await fetch('/api/referrals/validate-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, currentUserId })
    });
    return res.json();
  },

  // 3. Request withdrawal / payout
  async requestPayout(payload: {
    userId: string;
    amount: number;
    method: 'UPI' | 'BANK';
    upiId?: string;
    bankDetails?: {
      accountHolderName: string;
      accountNumber: string;
      ifscCode: string;
      bankName: string;
    };
  }): Promise<{ success: boolean; message: string; payout?: PayoutRequest }> {
    const res = await fetch('/api/referrals/payout-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return res.json();
  },

  // 4. Submit teacher verification
  async submitTeacherVerification(payload: {
    userId: string;
    schoolName: string;
    teacherIdNumber?: string;
    credentialsDocUrl?: string;
  }): Promise<{ success: boolean; message: string; account?: ReferralAccount }> {
    const res = await fetch('/api/referrals/teacher-verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return res.json();
  },

  // 5. Fetch live ambassador leaderboards
  async getLeaderboard(): Promise<LeaderboardResponse> {
    const res = await fetch('/api/referrals/leaderboard');
    if (!res.ok) throw new Error('Failed to fetch referral leaderboards');
    return res.json();
  },

  // 6. Admin: Get comprehensive system stats
  async getAdminStats(): Promise<AdminStatsResponse> {
    const res = await fetch('/api/referrals/admin/stats');
    if (!res.ok) throw new Error('Failed to fetch admin referral stats');
    return res.json();
  },

  // 7. Admin: Review teacher verification
  async reviewTeacher(userId: string, status: 'VERIFIED' | 'REJECTED', notes = ''): Promise<{ success: boolean; message: string }> {
    const res = await fetch('/api/referrals/admin/verify-teacher', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, status, notes })
    });
    return res.json();
  },

  // 8. Admin: Process payout request
  async processPayout(payoutId: string, action: 'APPROVE' | 'REJECT', transactionRef = '', notes = ''): Promise<{ success: boolean; message: string }> {
    const res = await fetch('/api/referrals/admin/payout-action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ payoutId, action, transactionRef, notes })
    });
    return res.json();
  },

  // 9. Admin: Update configuration
  async updateConfig(updates: Partial<ReferralSystemConfig>): Promise<{ success: boolean; message: string }> {
    const res = await fetch('/api/referrals/admin/update-config', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates)
    });
    return res.json();
  }
};
