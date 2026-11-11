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
import { serverDb } from '../../firebase/index.ts';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { dispatchRazorpayXPayout, getResolvedRazorpayXCredentials } from './razorpayxPayoutService.ts';

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

// Persistent Stores (Synced with Firestore: /referrals, /referral_transactions, /payout_requests)
export const referralAccounts = new Map<string, ReferralAccount>();
export const referralCodeIndex = new Map<string, string>(); // UPPERCASE Code -> userId
export const referralTransactions: ReferralTransaction[] = [];
export const payoutRequests: PayoutRequest[] = [];

// Referral configuration: Basic Plan ₹49 -> ₹2, Premium Plan ₹99 -> ₹5, Min withdrawal: ₹50
export const referralConfig: ReferralSystemConfig = {
  programEnabled: true,
  budgetCap: 50000,
  currentBudgetSpent: 1250,
  plan49ReferrerReward: 2, // ₹2 Referrer Cashback on Basic Plan (₹49)
  plan49BuyerReward: 2,    // ₹2 Buyer Cashback on Basic Plan (₹49)
  plan99ReferrerReward: 5, // ₹5 Referrer Cashback on Premium Plan (₹99)
  plan99BuyerReward: 5,    // ₹5 Buyer Cashback on Premium Plan (₹99)
  minPayoutAmount: 50,     // ₹50 Minimum Withdrawal
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

/**
 * Persists an account record directly to Firestore: /referrals/{userId}
 */
export async function saveAccountToFirestore(account: ReferralAccount): Promise<void> {
  try {
    const docRef = doc(serverDb, 'referrals', account.userId);
    await setDoc(docRef, {
      ...account,
      updatedAt: new Date().toISOString()
    }, { merge: true });
  } catch (err) {
    console.warn(`[Firestore Sync Notice] referrals/${account.userId}:`, (err as Error)?.message || err);
  }
}

/**
 * Persists a transaction directly to Firestore: /referral_transactions/{transactionId}
 */
export async function saveTransactionToFirestore(tx: ReferralTransaction): Promise<void> {
  try {
    const docRef = doc(serverDb, 'referral_transactions', tx.id);
    await setDoc(docRef, {
      ...tx,
      savedAt: new Date().toISOString()
    }, { merge: true });
  } catch (err) {
    console.warn(`[Firestore Sync Notice] referral_transactions/${tx.id}:`, (err as Error)?.message || err);
  }
}

/**
 * Persists a payout request directly to Firestore: /payout_requests/{payoutId}
 */
export async function savePayoutToFirestore(payout: PayoutRequest): Promise<void> {
  try {
    const docRef = doc(serverDb, 'payout_requests', payout.id);
    await setDoc(docRef, {
      ...payout,
      updatedAt: new Date().toISOString()
    }, { merge: true });
  } catch (err) {
    console.warn(`[Firestore Sync Notice] payout_requests/${payout.id}:`, (err as Error)?.message || err);
  }
}

// Get or initialize a referral profile with Firestore check
export async function getOrCreateReferralAccount(
  userId: string,
  userType: ReferralUserType = 'student',
  name = 'Student',
  email = '',
  mobile = '',
  schoolName = ''
): Promise<ReferralAccount> {
  // 1. Check in-memory cache
  const cached = referralAccounts.get(userId);
  if (cached) {
    if (name && cached.name === 'Student') cached.name = name;
    if (email && !cached.email) cached.email = email;
    if (mobile && !cached.mobile) cached.mobile = mobile;
    return cached;
  }

  // 2. Check Firestore /referrals/{userId}
  try {
    const docRef = doc(serverDb, 'referrals', userId);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      const data = snap.data() as ReferralAccount;
      referralAccounts.set(userId, data);
      if (data.referralCode) {
        referralCodeIndex.set(data.referralCode.toUpperCase(), userId);
      }
      return data;
    }
  } catch (err) {
    console.log(`[Firestore Account Lookup Notice] for ${userId}:`, (err as Error)?.message || err);
  }

  // 3. Create fresh account
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

  // Sync to Firestore
  await saveAccountToFirestore(newAccount);
  return newAccount;
}

// Process a verified paid purchase attribution with Firebase Firestore persistence
export async function processReferralPurchase(params: {
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
  let referrerUserId = referralCodeIndex.get(cleanCode);

  // If not indexed in memory, search in referralAccounts
  if (!referrerUserId) {
    for (const [uid, acc] of referralAccounts.entries()) {
      if (acc.referralCode && acc.referralCode.toUpperCase() === cleanCode) {
        referrerUserId = uid;
        referralCodeIndex.set(cleanCode, uid);
        break;
      }
    }
  }

  if (!referrerUserId) {
    return { credited: false, reason: 'Invalid or unrecognized referral code.' };
  }

  const referrer = await getOrCreateReferralAccount(referrerUserId);
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

  // FRAUD DETECTION 2: Duplicate Reward Prevention for same paymentId or same student on same plan
  const alreadyReferred = referralTransactions.find(
    t => (t.paymentId === params.paymentId || (t.buyerStudentId === params.buyerStudentId && t.buyerPlan === params.planId)) && t.status === 'CREDITED'
  );
  if (alreadyReferred) {
    console.warn(`[Referral Security] Duplicate referral reward skipped for student ${params.buyerStudentId} / Payment: ${params.paymentId}`);
    return { credited: false, reason: 'Referral reward has already been granted for this purchase.' };
  }

  // Exact Cashback Amounts per User Request:
  // Basic Plan ₹49: Referrer receives ₹2, Buyer receives ₹2
  // Premium Plan ₹99: Referrer receives ₹5, Buyer receives ₹5
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
  const buyerAccount = await getOrCreateReferralAccount(
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
    description: `Earned ₹${referrerReward} cashback from ${params.buyerStudentName}'s ₹${planAmount} (${params.planId.toUpperCase()}) enrollment.`,
    createdAt: new Date().toISOString()
  };

  referralTransactions.unshift(transaction);
  referralConfig.currentBudgetSpent += (referrerReward + buyerReward);

  // 5. Persist all changes to Firebase Firestore
  await Promise.all([
    saveAccountToFirestore(referrer),
    saveAccountToFirestore(buyerAccount),
    saveTransactionToFirestore(transaction)
  ]);

  console.log(`[Referral Credited & Saved to Firestore] Code: ${cleanCode} | Referrer: ${referrer.name} (+₹${referrerReward}) | Buyer: ${params.buyerStudentName} (+₹${buyerReward})`);

  return {
    credited: true,
    referrerReward,
    buyerReward,
    referrerName: referrer.name,
    transactionId: transaction.id
  };
}

// Reverses a referral transaction if a refund occurs
export async function reverseReferralOnRefund(paymentId: string, reason = 'Customer refund processed'): Promise<boolean> {
  const tx = referralTransactions.find(t => t.paymentId === paymentId && t.status === 'CREDITED');
  if (!tx) return false;

  const referrer = referralAccounts.get(tx.referrerId);
  if (referrer) {
    referrer.wallet.availableBalance = Math.max(0, referrer.wallet.availableBalance - tx.referrerReward);
    referrer.stats.paidReferralsCount = Math.max(0, referrer.stats.paidReferralsCount - 1);
    await saveAccountToFirestore(referrer);
  }

  const buyer = referralAccounts.get(tx.buyerStudentId);
  if (buyer) {
    buyer.wallet.availableBalance = Math.max(0, buyer.wallet.availableBalance - tx.buyerReward);
    await saveAccountToFirestore(buyer);
  }

  tx.status = 'REVERSED';
  tx.reversedAt = new Date().toISOString();
  tx.reversalReason = reason;

  await saveTransactionToFirestore(tx);

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
  let referrerUserId = referralCodeIndex.get(cleanCode);

  if (!referrerUserId) {
    for (const [uid, acc] of referralAccounts.entries()) {
      if (acc.referralCode && acc.referralCode.toUpperCase() === cleanCode) {
        referrerUserId = uid;
        referralCodeIndex.set(cleanCode, uid);
        break;
      }
    }
  }

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
    message: `Valid code from ${referrer.name}! You will receive ₹${referralConfig.plan49BuyerReward} (Basic) or ₹${referralConfig.plan99BuyerReward} (Premium) wallet cashback on enrollment.`
  };
}

// Handles user withdrawal payout request with RazorpayX automated dispatch
export async function submitPayoutRequest(params: {
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
}): Promise<{ success: boolean; message: string; payout?: PayoutRequest; razorpayxResult?: any }> {
  const account = await getOrCreateReferralAccount(params.userId);
  if (!account) {
    return { success: false, message: 'Referral account not found.' };
  }

  // Enforce Minimum Withdrawal: ₹50
  if (params.amount < referralConfig.minPayoutAmount) {
    return { success: false, message: `Minimum withdrawal amount is ₹${referralConfig.minPayoutAmount}.` };
  }

  if (params.amount > account.wallet.availableBalance) {
    return { success: false, message: `Insufficient available balance. You have ₹${account.wallet.availableBalance} available.` };
  }

  // Deduct available balance and place in pending balance atomically
  account.wallet.availableBalance -= params.amount;
  account.wallet.pendingBalance += params.amount;
  await saveAccountToFirestore(account);

  const payoutId = `payout_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
  const now = new Date().toISOString();

  const payout: PayoutRequest = {
    id: payoutId,
    userId: account.userId,
    userName: account.name,
    userType: account.userType,
    referralCode: account.referralCode,
    amount: params.amount,
    currency: 'INR',
    method: params.method,
    upiId: params.upiId,
    bankDetails: params.bankDetails,
    status: 'REQUESTED',
    createdAt: now,
    requestedAt: now
  };

  // Attempt Automated RazorpayX Payout Dispatch
  const rzpResult = await dispatchRazorpayXPayout({
    payoutId,
    userId: account.userId,
    userName: account.name,
    userEmail: account.email,
    userMobile: account.mobile,
    amountRupees: params.amount,
    method: params.method,
    upiId: params.upiId,
    bankDetails: params.bankDetails
  });

  if (rzpResult.status === 'COMPLETED') {
    payout.status = 'COMPLETED';
    payout.transactionReference = rzpResult.payoutReference;
    payout.processedAt = new Date().toISOString();
    payout.adminNotes = `RazorpayX automated payout completed. Reference: ${rzpResult.payoutReference}`;

    // Move pending balance to totalWithdrawn
    account.wallet.pendingBalance = Math.max(0, account.wallet.pendingBalance - params.amount);
    account.wallet.totalWithdrawn += params.amount;
    await saveAccountToFirestore(account);
  } else if (rzpResult.status === 'PROCESSING') {
    payout.status = 'PROCESSED';
    payout.transactionReference = rzpResult.payoutReference;
    payout.adminNotes = `RazorpayX payout is processing (ID: ${rzpResult.razorpayxPayoutId || rzpResult.payoutReference}).`;
  } else if (rzpResult.status === 'FAILED') {
    payout.status = 'REJECTED';
    payout.adminNotes = `RazorpayX dispatch failed: ${rzpResult.error || rzpResult.message}. Funds restored to wallet.`;

    // Automatically restore funds to available wallet balance
    account.wallet.pendingBalance = Math.max(0, account.wallet.pendingBalance - params.amount);
    account.wallet.availableBalance += params.amount;
    await saveAccountToFirestore(account);
  } else {
    // Awaiting credentials or manual review queue
    payout.status = 'PENDING';
    payout.adminNotes = rzpResult.message;
  }

  payoutRequests.unshift(payout);
  await savePayoutToFirestore(payout);

  return {
    success: true,
    message: rzpResult.message || 'Withdrawal request recorded successfully.',
    payout,
    razorpayxResult: rzpResult
  };
}

// Teacher submits school verification credentials
export async function submitTeacherVerification(params: {
  userId: string;
  schoolName: string;
  teacherIdNumber?: string;
  credentialsDocUrl?: string;
}): Promise<{ success: boolean; message: string; account?: ReferralAccount }> {
  const account = await getOrCreateReferralAccount(params.userId);
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

  if (account.milestones.length === 4) {
    account.milestones = TEACHER_DEFAULT_MILESTONES.map(m => ({ ...m }));
  }

  await saveAccountToFirestore(account);
  return { success: true, message: 'Teacher verification documents submitted. Admin will review within 24 hours.', account };
}

// Admin reviews and approves/rejects teacher verification
export async function reviewTeacherVerification(
  userId: string,
  status: 'VERIFIED' | 'REJECTED',
  notes = ''
): Promise<{ success: boolean; message: string; account?: ReferralAccount }> {
  const account = await getOrCreateReferralAccount(userId);
  if (!account) {
    return { success: false, message: 'Teacher account not found.' };
  }

  account.verificationStatus = status;
  account.verificationNotes = notes;
  account.updatedAt = new Date().toISOString();

  await saveAccountToFirestore(account);
  return { success: true, message: `Teacher ${account.name} marked as ${status}.`, account };
}

// Admin approves or rejects payout request
export async function processPayoutAction(
  payoutId: string,
  action: 'APPROVE' | 'REJECT',
  transactionRef = '',
  notes = ''
): Promise<{ success: boolean; message: string }> {
  const payout = payoutRequests.find(p => p.id === payoutId);
  if (!payout) {
    return { success: false, message: 'Payout request not found.' };
  }

  if (payout.status === 'COMPLETED') {
    return { success: false, message: 'Payout request has already been completed.' };
  }

  const account = await getOrCreateReferralAccount(payout.userId);
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

  await Promise.all([
    saveAccountToFirestore(account),
    savePayoutToFirestore(payout)
  ]);

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

// Get Admin Comprehensive Stats for Referral & Payouts Dashboard
export function getAdminReferralStats() {
  const allAccounts = Array.from(referralAccounts.values());
  const totalPaidReferrals = allAccounts.reduce((acc, a) => acc + a.stats.paidReferralsCount, 0);
  const totalEarnedDistributed = allAccounts.reduce((acc, a) => acc + a.wallet.totalEarned, 0);
  const totalWithdrawn = allAccounts.reduce((acc, a) => acc + a.wallet.totalWithdrawn, 0);
  const totalPendingPayoutAmount = payoutRequests
    .filter(p => p.status === 'PENDING' || p.status === 'REQUESTED' || p.status === 'PROCESSED')
    .reduce((acc, p) => acc + p.amount, 0);

  const pendingTeacherVerifications = allAccounts.filter(
    a => a.userType === 'teacher' && a.verificationStatus === 'PENDING'
  );

  const successfulPayoutCount = payoutRequests.filter(p => p.status === 'COMPLETED').length;
  const failedPayoutCount = payoutRequests.filter(p => p.status === 'FAILED' || p.status === 'REJECTED').length;
  const pendingPayoutCount = payoutRequests.filter(p => p.status === 'PENDING' || p.status === 'REQUESTED' || p.status === 'PROCESSED').length;

  const rzpCreds = getResolvedRazorpayXCredentials();

  return {
    totalAmbassadors: allAccounts.length,
    studentAmbassadors: allAccounts.filter(a => a.userType === 'student').length,
    teacherAmbassadors: allAccounts.filter(a => a.userType === 'teacher').length,
    diamondAmbassadors: allAccounts.filter(a => a.ambassadorCategory === 'diamond_ambassador').length,
    // The exact 7 metrics requested by user:
    totalReferrals: totalPaidReferrals,
    successfulReferrals: totalPaidReferrals,
    totalCashbackDistributed: totalEarnedDistributed,
    totalWithdrawalAmount: totalWithdrawn,
    pendingPayouts: pendingPayoutCount,
    successfulPayouts: successfulPayoutCount,
    failedPayouts: failedPayoutCount,

    // Additional metrics for admin UI
    totalPaidReferrals,
    totalEarnedDistributed,
    totalWithdrawn,
    totalPendingPayoutAmount,
    pendingPayoutCount,
    successfulPayoutCount,
    failedPayoutCount,
    pendingTeacherCount: pendingTeacherVerifications.length,
    razorpayxConfigured: rzpCreds.isConfigured,
    razorpayxTestMode: rzpCreds.isTestMode,
    config: referralConfig,
    recentTransactions: referralTransactions.slice(0, 30),
    payoutRequests: payoutRequests.slice(0, 30),
    pendingTeachers: pendingTeacherVerifications
  };
}

// Seed realistic educational sample ambassador data for instant testing
export function seedSampleReferralData() {
  if (referralAccounts.size > 0) return;

  console.log('[Referral System] Seeding verified sample student & teacher ambassadors...');

  // 1. Student Ambassador (Aarav Sharma - Knowledge Ambassador)
  const aarav: ReferralAccount = {
    id: 'ref_acc_student1',
    userId: 'student1',
    userType: 'student',
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    mobile: '9876543210',
    referralCode: 'VC-STU-AARAV4',
    ambassadorCategory: 'knowledge_ambassador',
    verificationStatus: 'NOT_APPLICABLE',
    wallet: {
      availableBalance: 85,
      pendingBalance: 0,
      totalEarned: 85,
      totalWithdrawn: 0,
      currency: 'INR'
    },
    stats: {
      totalClicks: 48,
      totalSignedUp: 16,
      paidReferralsCount: 12,
      plan49Referrals: 7,
      plan99Referrals: 5
    },
    milestones: STUDENT_DEFAULT_MILESTONES.map((m, i) => ({
      ...m,
      unlocked: i < 2,
      unlockedAt: i < 2 ? '2026-05-02T10:00:00.000Z' : undefined
    })),
    createdAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-05T14:30:00.000Z'
  };
  referralAccounts.set('student1', aarav);
  referralCodeIndex.set('VC-STU-AARAV4', 'student1');

  // 2. Student Ambassador (Ananya Deshmukh)
  const ananya: ReferralAccount = {
    id: 'ref_acc_student2',
    userId: 'student2',
    userType: 'student',
    name: 'Ananya Deshmukh',
    email: 'ananya.deshmukh@example.com',
    mobile: '9823012345',
    referralCode: 'VC-STU-ANANYA6',
    ambassadorCategory: 'knowledge_ambassador',
    verificationStatus: 'NOT_APPLICABLE',
    wallet: {
      availableBalance: 55,
      pendingBalance: 0,
      totalEarned: 55,
      totalWithdrawn: 0,
      currency: 'INR'
    },
    stats: {
      totalClicks: 32,
      totalSignedUp: 11,
      paidReferralsCount: 8,
      plan49Referrals: 5,
      plan99Referrals: 3
    },
    milestones: STUDENT_DEFAULT_MILESTONES.map((m, i) => ({
      ...m,
      unlocked: i === 0,
      unlockedAt: i === 0 ? '2026-05-03T11:20:00.000Z' : undefined
    })),
    createdAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-03T11:20:00.000Z'
  };
  referralAccounts.set('student2', ananya);
  referralCodeIndex.set('VC-STU-ANANYA6', 'student2');

  // 3. Top Performer (Master Ronak - Diamond Ambassador)
  const ronak: ReferralAccount = {
    id: 'ref_acc_student_ronak',
    userId: 'student_ronak',
    userType: 'student',
    name: 'Ronak Varade',
    email: 'ronakvarade2022@gmail.com',
    mobile: '9820011223',
    referralCode: 'VC-STU-RONAK9',
    ambassadorCategory: 'diamond_ambassador',
    verificationStatus: 'NOT_APPLICABLE',
    wallet: {
      availableBalance: 460,
      pendingBalance: 0,
      totalEarned: 460,
      totalWithdrawn: 0,
      currency: 'INR'
    },
    stats: {
      totalClicks: 240,
      totalSignedUp: 88,
      paidReferralsCount: 56,
      plan49Referrals: 20,
      plan99Referrals: 36
    },
    milestones: STUDENT_DEFAULT_MILESTONES.map(m => ({
      ...m,
      unlocked: true,
      unlockedAt: '2026-05-04T12:00:00.000Z'
    })),
    createdAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-04T12:00:00.000Z'
  };
  referralAccounts.set('student_ronak', ronak);
  referralCodeIndex.set('VC-STU-RONAK9', 'student_ronak');

  // Seed sample transactions with new ₹2 / ₹5 reward structure
  referralTransactions.push(
    {
      id: 'ref_tx_seed_1',
      referralCode: 'VC-STU-RONAK9',
      referrerId: 'student_ronak',
      referrerName: 'Ronak Varade',
      referrerType: 'student',
      buyerStudentId: 'sample_b1',
      buyerStudentName: 'Rohan Patil',
      buyerPlan: 'premium',
      planAmount: 99,
      referrerReward: 5,
      buyerReward: 5,
      orderId: 'order_seed_991',
      paymentId: 'pay_seed_991',
      status: 'CREDITED',
      description: 'Earned ₹5 from Rohan Patil\'s PREMIUM (₹99) enrollment.',
      createdAt: '2026-05-05T14:30:00.000Z'
    },
    {
      id: 'ref_tx_seed_2',
      referralCode: 'VC-STU-AARAV4',
      referrerId: 'student1',
      referrerName: 'Aarav Sharma',
      referrerType: 'student',
      buyerStudentId: 'sample_b2',
      buyerStudentName: 'Aditya Kale',
      buyerPlan: 'basic',
      planAmount: 49,
      referrerReward: 2,
      buyerReward: 2,
      orderId: 'order_seed_491',
      paymentId: 'pay_seed_491',
      status: 'CREDITED',
      description: 'Earned ₹2 from Aditya Kale\'s BASIC (₹49) enrollment.',
      createdAt: '2026-05-03T16:00:00.000Z'
    }
  );

  console.log('[Referral System] Sample data successfully initialized.');
}

// Run seed on initialization
seedSampleReferralData();
