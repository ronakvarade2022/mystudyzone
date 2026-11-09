import type { 
  ReferralAccount, 
  ReferralTransaction, 
  PayoutRequest, 
  ReferralSystemConfig, 
  ReferralLeaderboardEntry,
  ReferralMilestone,
  ReferralUserType,
  AmbassadorCategory
} from '../types/referral.ts';

export const STUDENT_DEFAULT_MILESTONES: ReferralMilestone[] = [
  {
    id: 'm-stu-5',
    count: 5,
    title: 'Knowledge Ambassador Star',
    rewardType: 'badge',
    rewardDescription: 'Official Knowledge Ambassador Star Badge & Certificate',
    unlocked: false
  },
  {
    id: 'm-stu-10',
    count: 10,
    title: '30-Day Premium Extension',
    rewardType: 'subscription_extension',
    rewardDescription: 'Free 30-Day All-Access Champion Premium Extension',
    unlocked: false
  },
  {
    id: 'm-stu-25',
    count: 25,
    title: '3-Month Premium Pass',
    rewardType: 'subscription_extension',
    rewardDescription: 'Free 90-Day All-Access Champion Premium Pass',
    unlocked: false
  },
  {
    id: 'm-stu-50',
    count: 50,
    title: 'Diamond Ambassador Crown',
    rewardType: 'badge',
    rewardDescription: 'Diamond Ambassador Trophy & Lifetime Champion Hall of Fame',
    unlocked: false
  }
];

export const TEACHER_DEFAULT_MILESTONES: ReferralMilestone[] = [
  {
    id: 'm-tch-5',
    count: 5,
    title: 'Educator Achievement Badge',
    rewardType: 'badge',
    rewardDescription: 'Official Educator Excellence Pioneer Badge',
    unlocked: false
  },
  {
    id: 'm-tch-10',
    count: 10,
    title: '1-Month Classroom Premium',
    rewardType: 'subscription_extension',
    rewardDescription: 'Free 30-Day Premium Pass for Classroom Teaching',
    unlocked: false
  },
  {
    id: 'm-tch-25',
    count: 25,
    title: '3-Month Classroom Premium',
    rewardType: 'subscription_extension',
    rewardDescription: 'Free 90-Day Premium Pass with Special School Perks',
    unlocked: false
  },
  {
    id: 'm-tch-50',
    count: 50,
    title: 'Gold Educator Star Badge',
    rewardType: 'badge',
    rewardDescription: 'Gold Educator Medal & State-Level Mentor Honor',
    unlocked: false
  },
  {
    id: 'm-tch-100',
    count: 100,
    title: 'Excellence in Teaching Certificate',
    rewardType: 'certificate',
    rewardDescription: 'Distinguished State Educator Excellence Certificate (Printable/Downloadable)',
    unlocked: false
  }
];

// In-Memory Data Storage (Backed by server process runtime)
export const referralAccounts = new Map<string, ReferralAccount>();
export const referralCodeIndex = new Map<string, string>(); // UPPERCASE Code -> userId
export const referralTransactions: ReferralTransaction[] = [];
export const payoutRequests: PayoutRequest[] = [];

export const referralConfig: ReferralSystemConfig = {
  programEnabled: true,
  budgetCap: 50000,
  currentBudgetSpent: 1250,
  plan49ReferrerReward: 5,
  plan49BuyerReward: 5,
  plan99ReferrerReward: 10,
  plan99BuyerReward: 10,
  minPayoutAmount: 50,
  fraudDetectionStrict: true
};

// Generates an attractive, branded, unique referral code
export function generateReferralCode(userType: ReferralUserType, name: string, userId: string): string {
  const prefix = userType === 'teacher' ? 'VC-TCH' : 'VC-STU';
  const cleanName = name
    .replace(/[^a-zA-Z]/g, '')
    .toUpperCase()
    .slice(0, 6) || 'CHAMP';
  const suffix = (userId.replace(/[^0-9]/g, '').slice(-3)) || Math.floor(100 + Math.random() * 900).toString();
  return `${prefix}-${cleanName}${suffix}`;
}

// Get or initialize a referral profile
export function getOrCreateReferralAccount(
  userId: string,
  userType: ReferralUserType = 'student',
  name = 'Student',
  email = '',
  mobile = '',
  schoolName = ''
): ReferralAccount {
  const existing = referralAccounts.get(userId);
  if (existing) {
    if (name && existing.name === 'Student') existing.name = name;
    if (email && !existing.email) existing.email = email;
    if (mobile && !existing.mobile) existing.mobile = mobile;
    return existing;
  }

  const code = generateReferralCode(userType, name, userId);
  const now = new Date().toISOString();

  let category: AmbassadorCategory = 'knowledge_ambassador';
  if (userType === 'teacher') category = 'educator_excellence';

  const milestonesClone: ReferralMilestone[] = (userType === 'teacher' ? TEACHER_DEFAULT_MILESTONES : STUDENT_DEFAULT_MILESTONES).map(m => ({ ...m }));

  const newAccount: ReferralAccount = {
    id: `ref_acc_${userId}`,
    userId,
    userType,
    name: name || 'Student Champion',
    email,
    mobile,
    referralCode: code,
    ambassadorCategory: category,
    schoolName: schoolName || (userType === 'teacher' ? 'Vidya Mandir School' : undefined),
    verificationStatus: userType === 'teacher' ? 'PENDING' : 'NOT_APPLICABLE',
    wallet: {
      availableBalance: 0,
      pendingBalance: 0,
      totalEarned: 0,
      totalWithdrawn: 0,
      currency: 'INR'
    },
    stats: {
      totalClicks: 0,
      totalSignedUp: 0,
      paidReferralsCount: 0,
      plan49Referrals: 0,
      plan99Referrals: 0
    },
    milestones: milestonesClone,
    createdAt: now,
    updatedAt: now
  };

  referralAccounts.set(userId, newAccount);
  referralCodeIndex.set(code.toUpperCase(), userId);
  return newAccount;
}

// Process a verified paid purchase attribution
export function processReferralPurchase(params: {
  referralCode: string;
  buyerStudentId: string;
  buyerStudentName: string;
  buyerEmail: string;
  buyerMobile: string;
  planId: 'basic' | 'premium';
  orderId: string;
  paymentId: string;
}) {
  if (!referralConfig.programEnabled) {
    return { credited: false, reason: 'The referral rewards program is temporarily paused.' };
  }

  const cleanCode = params.referralCode.trim().toUpperCase();
  const referrerUserId = referralCodeIndex.get(cleanCode);
  if (!referrerUserId) {
    return { credited: false, reason: 'Invalid or unrecognized referral code.' };
  }

  const referrer = referralAccounts.get(referrerUserId);
  if (!referrer) {
    return { credited: false, reason: 'Referrer profile not found.' };
  }

  // FRAUD DETECTION 1: Self-Referral Prevention
  if (
    referrer.userId === params.buyerStudentId ||
    (referrer.email && params.buyerEmail && referrer.email.toLowerCase() === params.buyerEmail.toLowerCase()) ||
    (referrer.mobile && params.buyerMobile && referrer.mobile === params.buyerMobile)
  ) {
    console.warn(`[Referral Security] Blocked self-referral attempt by ${params.buyerStudentId} using code ${cleanCode}`);
    return { credited: false, reason: 'Self-referral is prohibited. You cannot use your own referral code.' };
  }

  // FRAUD DETECTION 2: Duplicate Reward Prevention for same plan
  const alreadyReferred = referralTransactions.find(
    t => t.buyerStudentId === params.buyerStudentId && t.status === 'CREDITED' && t.buyerPlan === params.planId
  );
  if (alreadyReferred) {
    console.warn(`[Referral Security] Duplicate referral reward skipped for student ${params.buyerStudentId}`);
    return { credited: false, reason: 'Referral reward has already been granted for this student on this plan.' };
  }

  // Determine rewards according to plan specification:
  // Plan ₹49: Referrer ₹5, Buyer ₹5
  // Plan ₹99: Referrer ₹10, Buyer ₹10
  const isPremium = params.planId === 'premium';
  const referrerReward = isPremium ? referralConfig.plan99ReferrerReward : referralConfig.plan49ReferrerReward;
  const buyerReward = isPremium ? referralConfig.plan99BuyerReward : referralConfig.plan49BuyerReward;
  const planAmount = isPremium ? 99 : 49;

  // Check budget cap
  if (referralConfig.currentBudgetSpent + referrerReward + buyerReward > referralConfig.budgetCap) {
    console.warn('[Referral Budget] Referral reward skipped: monthly campaign budget cap reached.');
    return { credited: false, reason: 'Monthly reward budget pool reached.' };
  }

  // 1. Credit Referrer Wallet
  referrer.wallet.availableBalance += referrerReward;
  referrer.wallet.totalEarned += referrerReward;
  referrer.stats.paidReferralsCount += 1;
  if (isPremium) {
    referrer.stats.plan99Referrals += 1;
  } else {
    referrer.stats.plan49Referrals += 1;
  }

  // 2. Check and unlock Referrer milestones
  referrer.milestones.forEach(m => {
    if (!m.unlocked && referrer.stats.paidReferralsCount >= m.count) {
      m.unlocked = true;
      m.unlockedAt = new Date().toISOString();
      console.log(`[Referral Milestone Unlocked] Referrer ${referrer.name} unlocked ${m.title}!`);
    }
  });

  // Promote to Diamond Ambassador if 50+ paid referrals
  if (referrer.stats.paidReferralsCount >= 50 && referrer.ambassadorCategory !== 'diamond_ambassador') {
    referrer.ambassadorCategory = 'diamond_ambassador';
    console.log(`[Referral Promotion] ${referrer.name} promoted to 💎 DIAMOND AMBASSADOR!`);
  }

  // 3. Credit Buyer Wallet
  const buyerAccount = getOrCreateReferralAccount(
    params.buyerStudentId,
    'student',
    params.buyerStudentName,
    params.buyerEmail,
    params.buyerMobile
  );
  buyerAccount.wallet.availableBalance += buyerReward;
  buyerAccount.wallet.totalEarned += buyerReward;

  // 4. Create and record ReferralTransaction
  const transaction: ReferralTransaction = {
    id: `ref_tx_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    referralCode: cleanCode,
    referrerId: referrer.userId,
    referrerName: referrer.name,
    referrerType: referrer.userType,
    buyerStudentId: params.buyerStudentId,
    buyerStudentName: params.buyerStudentName,
    buyerPlan: params.planId,
    planAmount,
    referrerReward,
    buyerReward,
    orderId: params.orderId,
    paymentId: params.paymentId,
    status: 'CREDITED',
    description: `Earned ₹${referrerReward} reward from ${params.buyerStudentName}'s ₹${planAmount} (${params.planId.toUpperCase()}) enrollment.`,
    createdAt: new Date().toISOString()
  };

  referralTransactions.unshift(transaction);
  referralConfig.currentBudgetSpent += (referrerReward + buyerReward);

  console.log(`[Referral Credited] Code: ${cleanCode} | Referrer: ${referrer.name} (+₹${referrerReward}) | Buyer: ${params.buyerStudentName} (+₹${buyerReward})`);

  return {
    credited: true,
    referrerReward,
    buyerReward,
    referrerName: referrer.name,
    transactionId: transaction.id
  };
}

// Reverses a referral transaction if a refund occurs
export function reverseReferralOnRefund(paymentId: string, reason = 'Customer refund processed'): boolean {
  const tx = referralTransactions.find(t => t.paymentId === paymentId && t.status === 'CREDITED');
  if (!tx) return false;

  const referrer = referralAccounts.get(tx.referrerId);
  if (referrer) {
    referrer.wallet.availableBalance = Math.max(0, referrer.wallet.availableBalance - tx.referrerReward);
    referrer.stats.paidReferralsCount = Math.max(0, referrer.stats.paidReferralsCount - 1);
  }

  const buyer = referralAccounts.get(tx.buyerStudentId);
  if (buyer) {
    buyer.wallet.availableBalance = Math.max(0, buyer.wallet.availableBalance - tx.buyerReward);
  }

  tx.status = 'REVERSED';
  tx.reversedAt = new Date().toISOString();
  tx.reversalReason = reason;

  referralConfig.currentBudgetSpent = Math.max(0, referralConfig.currentBudgetSpent - (tx.referrerReward + tx.buyerReward));
  console.log(`[Referral Reversal] Reversed rewards for payment ${paymentId} due to refund.`);
  return true;
}

// Validates a referral code prior to checkout
export function validateReferralCode(code: string, currentUserId?: string) {
  if (!code || !code.trim()) {
    return { valid: false, error: 'Please enter a referral code.' };
  }

  const cleanCode = code.trim().toUpperCase();
  const referrerUserId = referralCodeIndex.get(cleanCode);
  if (!referrerUserId) {
    return { valid: false, error: 'Invalid referral code. Please check and try again.' };
  }

  const referrer = referralAccounts.get(referrerUserId);
  if (!referrer) {
    return { valid: false, error: 'Referrer profile not found.' };
  }

  if (currentUserId && referrer.userId === currentUserId) {
    return { valid: false, error: 'You cannot use your own referral code (Self-referral prohibited).' };
  }

  return {
    valid: true,
    code: cleanCode,
    referrerName: referrer.name,
    ambassadorCategory: referrer.ambassadorCategory,
    userType: referrer.userType,
    plan49Cashback: referralConfig.plan49BuyerReward,
    plan99Cashback: referralConfig.plan99BuyerReward,
    message: `Valid code from ${referrer.name}! You will receive ₹5 (Basic) or ₹10 (Premium) wallet cashback on enrollment.`
  };
}

// Handles user withdrawal payout request
export function submitPayoutRequest(params: {
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
}): { success: boolean; message: string; payout?: PayoutRequest } {
  const account = referralAccounts.get(params.userId);
  if (!account) {
    return { success: false, message: 'Referral account not found.' };
  }

  if (params.amount < referralConfig.minPayoutAmount) {
    return { success: false, message: `Minimum withdrawal amount is ₹${referralConfig.minPayoutAmount}.` };
  }

  if (params.amount > account.wallet.availableBalance) {
    return { success: false, message: `Insufficient available balance. You have ₹${account.wallet.availableBalance} available.` };
  }

  // Deduct available balance and place in pending balance
  account.wallet.availableBalance -= params.amount;
  account.wallet.pendingBalance += params.amount;

  const payout: PayoutRequest = {
    id: `payout_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    userId: account.userId,
    userName: account.name,
    userType: account.userType,
    amount: params.amount,
    currency: 'INR',
    method: params.method,
    upiId: params.upiId,
    bankDetails: params.bankDetails,
    status: 'PENDING',
    createdAt: new Date().toISOString()
  };

  payoutRequests.unshift(payout);
  return { success: true, message: 'Withdrawal request submitted successfully. Processing within 24-48 business hours.', payout };
}

// Teacher submits school verification credentials
export function submitTeacherVerification(params: {
  userId: string;
  schoolName: string;
  teacherIdNumber?: string;
  credentialsDocUrl?: string;
}): { success: boolean; message: string; account?: ReferralAccount } {
  const account = referralAccounts.get(params.userId);
  if (!account) {
    return { success: false, message: 'Account not found.' };
  }

  account.userType = 'teacher';
  account.ambassadorCategory = 'educator_excellence';
  account.schoolName = params.schoolName;
  account.teacherIdNumber = params.teacherIdNumber;
  account.credentialsDocUrl = params.credentialsDocUrl;
  account.verificationStatus = 'PENDING';
  account.updatedAt = new Date().toISOString();

  // Ensure teacher milestones are assigned if not already
  if (account.milestones.length === 4) {
    account.milestones = TEACHER_DEFAULT_MILESTONES.map(m => ({ ...m }));
  }

  return { success: true, message: 'Teacher verification documents submitted. Admin will review within 24 hours.', account };
}

// Admin reviews and approves/rejects teacher verification
export function reviewTeacherVerification(
  userId: string,
  status: 'VERIFIED' | 'REJECTED',
  notes = ''
): { success: boolean; message: string; account?: ReferralAccount } {
  const account = referralAccounts.get(userId);
  if (!account) {
    return { success: false, message: 'Teacher account not found.' };
  }

  account.verificationStatus = status;
  account.verificationNotes = notes;
  account.updatedAt = new Date().toISOString();

  return { success: true, message: `Teacher ${account.name} marked as ${status}.`, account };
}

// Admin approves or rejects payout request
export function processPayoutAction(
  payoutId: string,
  action: 'APPROVE' | 'REJECT',
  transactionRef = '',
  notes = ''
): { success: boolean; message: string } {
  const payout = payoutRequests.find(p => p.id === payoutId);
  if (!payout) {
    return { success: false, message: 'Payout request not found.' };
  }

  if (payout.status !== 'PENDING') {
    return { success: false, message: `Payout request is already ${payout.status}.` };
  }

  const account = referralAccounts.get(payout.userId);
  if (!account) {
    return { success: false, message: 'Associated user account not found.' };
  }

  if (action === 'APPROVE') {
    payout.status = 'COMPLETED';
    payout.transactionReference = transactionRef || `UPI-TXN-${Date.now().toString().slice(-6)}`;
    payout.processedAt = new Date().toISOString();
    payout.adminNotes = notes || 'Payout successfully processed to beneficiary account.';

    // Move pending balance to totalWithdrawn
    account.wallet.pendingBalance = Math.max(0, account.wallet.pendingBalance - payout.amount);
    account.wallet.totalWithdrawn += payout.amount;
  } else {
    payout.status = 'REJECTED';
    payout.processedAt = new Date().toISOString();
    payout.adminNotes = notes || 'Withdrawal request rejected by administrator.';

    // Refund pending balance back to available balance
    account.wallet.pendingBalance = Math.max(0, account.wallet.pendingBalance - payout.amount);
    account.wallet.availableBalance += payout.amount;
  }

  return { success: true, message: `Payout request ${action === 'APPROVE' ? 'Approved & Completed' : 'Rejected'}.` };
}

// Get dynamic Leaderboards
export function getLeaderboardData(): {
  students: ReferralLeaderboardEntry[];
  teachers: ReferralLeaderboardEntry[];
  diamonds: ReferralLeaderboardEntry[];
} {
  const all = Array.from(referralAccounts.values());

  const students: ReferralLeaderboardEntry[] = all
    .filter(a => a.userType === 'student')
    .sort((a, b) => b.stats.paidReferralsCount - a.stats.paidReferralsCount)
    .slice(0, 10)
    .map((a, idx) => ({
      rank: idx + 1,
      userId: a.userId,
      name: a.name,
      userType: a.userType,
      ambassadorCategory: a.ambassadorCategory,
      paidReferralsCount: a.stats.paidReferralsCount,
      paidReferrals: a.stats.paidReferralsCount,
      totalEarned: a.wallet.totalEarned,
      schoolName: a.schoolName,
      badge: a.ambassadorCategory === 'diamond_ambassador' ? '💎 Diamond' : '🎁 Knowledge Ambassador'
    }));

  const teachers: ReferralLeaderboardEntry[] = all
    .filter(a => a.userType === 'teacher')
    .sort((a, b) => b.stats.paidReferralsCount - a.stats.paidReferralsCount)
    .slice(0, 10)
    .map((a, idx) => ({
      rank: idx + 1,
      userId: a.userId,
      name: a.name,
      userType: a.userType,
      ambassadorCategory: a.ambassadorCategory,
      paidReferralsCount: a.stats.paidReferralsCount,
      paidReferrals: a.stats.paidReferralsCount,
      totalEarned: a.wallet.totalEarned,
      schoolName: a.schoolName,
      badge: '🏆 Educator Excellence'
    }));

  const diamonds: ReferralLeaderboardEntry[] = all
    .filter(a => a.ambassadorCategory === 'diamond_ambassador' || a.stats.paidReferralsCount >= 50)
    .sort((a, b) => b.stats.paidReferralsCount - a.stats.paidReferralsCount)
    .map((a, idx) => ({
      rank: idx + 1,
      userId: a.userId,
      name: a.name,
      userType: a.userType,
      ambassadorCategory: 'diamond_ambassador',
      paidReferralsCount: a.stats.paidReferralsCount,
      paidReferrals: a.stats.paidReferralsCount,
      totalEarned: a.wallet.totalEarned,
      schoolName: a.schoolName,
      badge: '💎 Hall of Fame Diamond'
    }));

  return { students, teachers, diamonds };
}

// Get Admin Comprehensive Stats
export function getAdminReferralStats() {
  const allAccounts = Array.from(referralAccounts.values());
  const totalPaidReferrals = allAccounts.reduce((acc, a) => acc + a.stats.paidReferralsCount, 0);
  const totalEarnedDistributed = allAccounts.reduce((acc, a) => acc + a.wallet.totalEarned, 0);
  const totalWithdrawn = allAccounts.reduce((acc, a) => acc + a.wallet.totalWithdrawn, 0);
  const totalPendingPayoutAmount = payoutRequests
    .filter(p => p.status === 'PENDING')
    .reduce((acc, p) => acc + p.amount, 0);

  const pendingTeacherVerifications = allAccounts.filter(
    a => a.userType === 'teacher' && a.verificationStatus === 'PENDING'
  );

  return {
    totalAmbassadors: allAccounts.length,
    studentAmbassadors: allAccounts.filter(a => a.userType === 'student').length,
    teacherAmbassadors: allAccounts.filter(a => a.userType === 'teacher').length,
    diamondAmbassadors: allAccounts.filter(a => a.ambassadorCategory === 'diamond_ambassador').length,
    totalPaidReferrals,
    totalEarnedDistributed,
    totalWithdrawn,
    totalPendingPayoutAmount,
    pendingPayoutCount: payoutRequests.filter(p => p.status === 'PENDING').length,
    pendingTeacherCount: pendingTeacherVerifications.length,
    config: referralConfig,
    recentTransactions: referralTransactions.slice(0, 20),
    payoutRequests: payoutRequests.slice(0, 20),
    pendingTeachers: pendingTeacherVerifications
  };
}

// Seed realistic educational sample ambassador data for instant testing
export function seedSampleReferralData() {
  if (referralAccounts.size > 0) return;

  console.log('[Referral System] Seeding verified sample student & teacher ambassadors...');

  // 1. Student Ambassador (Aarav Sharma - Knowledge Ambassador)
  const aarav = getOrCreateReferralAccount('student1', 'student', 'Aarav Sharma', 'aarav.sharma@example.com', '9876543210');
  aarav.referralCode = 'VC-STU-AARAV4';
  referralCodeIndex.set('VC-STU-AARAV4', 'student1');
  aarav.stats = {
    totalClicks: 48,
    totalSignedUp: 16,
    paidReferralsCount: 12,
    plan49Referrals: 7,
    plan99Referrals: 5
  };
  aarav.wallet = {
    availableBalance: 85,
    pendingBalance: 0,
    totalEarned: 85,
    totalWithdrawn: 0,
    currency: 'INR'
  };
  // Unlock milestones 5 and 10
  aarav.milestones[0].unlocked = true;
  aarav.milestones[0].unlockedAt = '2026-05-02T10:00:00.000Z';
  aarav.milestones[1].unlocked = true;
  aarav.milestones[1].unlockedAt = '2026-05-05T14:30:00.000Z';

  // 2. Student Ambassador (Ananya Deshmukh)
  const ananya = getOrCreateReferralAccount('student2', 'student', 'Ananya Deshmukh', 'ananya.deshmukh@example.com', '9823012345');
  ananya.referralCode = 'VC-STU-ANANYA6';
  referralCodeIndex.set('VC-STU-ANANYA6', 'student2');
  ananya.stats = {
    totalClicks: 32,
    totalSignedUp: 11,
    paidReferralsCount: 8,
    plan49Referrals: 5,
    plan99Referrals: 3
  };
  ananya.wallet = {
    availableBalance: 55,
    pendingBalance: 0,
    totalEarned: 55,
    totalWithdrawn: 0,
    currency: 'INR'
  };
  ananya.milestones[0].unlocked = true;
  ananya.milestones[0].unlockedAt = '2026-05-03T11:20:00.000Z';

  // 3. Teacher Ambassador (Mrs. Priya Kulkarni - Educator Excellence Ambassador)
  const teacher1 = getOrCreateReferralAccount('teacher_priya', 'teacher', 'Mrs. Priya Kulkarni', 'priya.kulkarni@edu.in', '9822114455', 'Pune Central High School');
  teacher1.referralCode = 'VC-TCH-PRIYA8';
  referralCodeIndex.set('VC-TCH-PRIYA8', 'teacher_priya');
  teacher1.teacherSubject = 'Mathematics & Science';
  teacher1.teacherIdNumber = 'TCH-PUN-8842';
  teacher1.verificationStatus = 'VERIFIED';
  teacher1.verifiedAt = '2026-05-01T08:00:00.000Z';
  teacher1.stats = {
    totalClicks: 164,
    totalSignedUp: 68,
    paidReferralsCount: 42,
    plan49Referrals: 18,
    plan99Referrals: 24
  };
  teacher1.wallet = {
    availableBalance: 330,
    pendingBalance: 0,
    totalEarned: 330,
    totalWithdrawn: 0,
    currency: 'INR'
  };
  teacher1.milestones[0].unlocked = true; // 5
  teacher1.milestones[1].unlocked = true; // 10
  teacher1.milestones[2].unlocked = true; // 25

  // 4. Teacher Ambassador (Mr. Vikram Joshi)
  const teacher2 = getOrCreateReferralAccount('teacher_vikram', 'teacher', 'Mr. Vikram Joshi', 'vikram.joshi@school.in', '9890123456', 'Saraswati Vidyalaya Mumbai');
  teacher2.referralCode = 'VC-TCH-VIKRAM7';
  referralCodeIndex.set('VC-TCH-VIKRAM7', 'teacher_vikram');
  teacher2.teacherSubject = 'English & Social Studies';
  teacher2.teacherIdNumber = 'TCH-MUM-7719';
  teacher2.verificationStatus = 'VERIFIED';
  teacher2.verifiedAt = '2026-05-02T09:30:00.000Z';
  teacher2.stats = {
    totalClicks: 95,
    totalSignedUp: 35,
    paidReferralsCount: 22,
    plan49Referrals: 14,
    plan99Referrals: 8
  };
  teacher2.wallet = {
    availableBalance: 150,
    pendingBalance: 0,
    totalEarned: 150,
    totalWithdrawn: 0,
    currency: 'INR'
  };
  teacher2.milestones[0].unlocked = true; // 5
  teacher2.milestones[1].unlocked = true; // 10

  // 5. Top Performer (Master Ronak - Diamond Ambassador)
  const ronak = getOrCreateReferralAccount('student_ronak', 'student', 'Ronak Varade', 'ronakvarade2022@gmail.com', '9820011223');
  ronak.referralCode = 'VC-STU-RONAK9';
  referralCodeIndex.set('VC-STU-RONAK9', 'student_ronak');
  ronak.ambassadorCategory = 'diamond_ambassador';
  ronak.stats = {
    totalClicks: 240,
    totalSignedUp: 88,
    paidReferralsCount: 56,
    plan49Referrals: 20,
    plan99Referrals: 36
  };
  ronak.wallet = {
    availableBalance: 460,
    pendingBalance: 0,
    totalEarned: 460,
    totalWithdrawn: 0,
    currency: 'INR'
  };
  ronak.milestones.forEach(m => {
    m.unlocked = true;
    m.unlockedAt = '2026-05-04T12:00:00.000Z';
  });

  // Seed sample transactions
  referralTransactions.push(
    {
      id: 'ref_tx_seed_1',
      referralCode: 'VC-STU-AARAV4',
      referrerId: 'student1',
      referrerName: 'Aarav Sharma',
      referrerType: 'student',
      buyerStudentId: 'sample_b1',
      buyerStudentName: 'Rohan Patil',
      buyerPlan: 'premium',
      planAmount: 99,
      referrerReward: 10,
      buyerReward: 10,
      orderId: 'order_seed_991',
      paymentId: 'pay_seed_991',
      status: 'CREDITED',
      description: 'Earned ₹10 from Rohan Patil\'s PREMIUM (₹99) enrollment.',
      createdAt: '2026-05-05T14:30:00.000Z'
    },
    {
      id: 'ref_tx_seed_2',
      referralCode: 'VC-TCH-PRIYA8',
      referrerId: 'teacher_priya',
      referrerName: 'Mrs. Priya Kulkarni',
      referrerType: 'teacher',
      buyerStudentId: 'sample_b2',
      buyerStudentName: 'Kavita Shinde',
      buyerPlan: 'premium',
      planAmount: 99,
      referrerReward: 10,
      buyerReward: 10,
      orderId: 'order_seed_992',
      paymentId: 'pay_seed_992',
      status: 'CREDITED',
      description: 'Earned ₹10 from Kavita Shinde\'s PREMIUM (₹99) enrollment.',
      createdAt: '2026-05-04T18:15:00.000Z'
    },
    {
      id: 'ref_tx_seed_3',
      referralCode: 'VC-STU-AARAV4',
      referrerId: 'student1',
      referrerName: 'Aarav Sharma',
      referrerType: 'student',
      buyerStudentId: 'sample_b3',
      buyerStudentName: 'Aditya Kale',
      buyerPlan: 'basic',
      planAmount: 49,
      referrerReward: 5,
      buyerReward: 5,
      orderId: 'order_seed_491',
      paymentId: 'pay_seed_491',
      status: 'CREDITED',
      description: 'Earned ₹5 from Aditya Kale\'s BASIC (₹49) enrollment.',
      createdAt: '2026-05-03T16:00:00.000Z'
    }
  );

  console.log('[Referral System] Sample data successfully seeded.');
}

// Run seed on initialization
seedSampleReferralData();
