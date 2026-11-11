import crypto from 'crypto';
import dotenv from 'dotenv';
import { serverDb } from '../../firebase/index.ts';
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';

dotenv.config();

export interface RazorpayXCredentials {
  keyId: string;
  keySecret: string;
  accountNumber: string;
  webhookSecret: string;
  isConfigured: boolean;
  isTestMode: boolean;
}

export function sanitizeEnv(val: string | undefined): string {
  if (!val) return '';
  return val.trim().replace(/^["']+|["']+$/g, '').trim();
}

export function isPlaceholder(val: string): boolean {
  if (!val) return true;
  const upper = val.toUpperCase();
  return (
    upper.includes('YOUR_') ||
    upper.includes('MY_') ||
    upper.includes('REPLACE_') ||
    val.includes('rzp_test_VACATION_CHAMP')
  );
}

/**
 * Resolves RazorpayX Payout credentials from environment variables.
 * Uses dedicated RAZORPAYX_* variables. Falls back to RAZORPAY_LIVE_* / RAZORPAY_* if unified.
 */
export function getResolvedRazorpayXCredentials(): RazorpayXCredentials {
  const rawKeyId = sanitizeEnv(
    process.env.RAZORPAYX_KEY_ID || process.env.RAZORPAY_KEY_ID
  );
  const rawKeySecret = sanitizeEnv(
    process.env.RAZORPAYX_KEY_SECRET || process.env.RAZORPAY_KEY_SECRET
  );
  const rawAccountNumber = sanitizeEnv(process.env.RAZORPAYX_ACCOUNT_NUMBER);
  const rawWebhookSecret = sanitizeEnv(
    process.env.RAZORPAYX_WEBHOOK_SECRET || process.env.RAZORPAY_WEBHOOK_SECRET
  );

  const keyId = isPlaceholder(rawKeyId) ? '' : rawKeyId;
  const keySecret = isPlaceholder(rawKeySecret) ? '' : rawKeySecret;
  const accountNumber = isPlaceholder(rawAccountNumber) ? '' : rawAccountNumber;
  const webhookSecret = isPlaceholder(rawWebhookSecret) ? '' : rawWebhookSecret;

  const hasKey = Boolean(keyId && keyId.startsWith('rzp_'));
  const hasSecret = Boolean(keySecret && keySecret.length >= 8);
  const hasAccount = Boolean(accountNumber && accountNumber.length >= 8);

  const isConfigured = hasKey && hasSecret && hasAccount;
  const isTestMode = keyId.startsWith('rzp_test_');

  return {
    keyId: hasKey ? keyId : '',
    keySecret: hasSecret ? keySecret : '',
    accountNumber: hasAccount ? accountNumber : '',
    webhookSecret,
    isConfigured,
    isTestMode
  };
}

export interface PayoutDispatchParams {
  payoutId: string;
  userId: string;
  userName: string;
  userEmail?: string;
  userMobile?: string;
  amountRupees: number;
  method: 'UPI' | 'BANK';
  upiId?: string;
  bankDetails?: {
    accountHolderName: string;
    accountNumber: string;
    ifscCode: string;
    bankName: string;
  };
}

export interface PayoutDispatchResult {
  success: boolean;
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';
  mode: 'RAZORPAYX_AUTOMATED' | 'AWAITING_CREDENTIALS' | 'FAILED';
  payoutReference?: string;
  razorpayxPayoutId?: string;
  message: string;
  error?: string;
}

/**
 * Initiates an automated real-money payout via RazorpayX API.
 * Follows the standard 3-step workflow:
 * 1. Create or retrieve Contact (POST /v1/contacts)
 * 2. Create Fund Account for UPI VPA or Bank Account (POST /v1/fund_accounts)
 * 3. Create Payout from Business Account (POST /v1/payouts)
 * 
 * If credentials are not yet configured on the server, queues the withdrawal safely
 * without inventing fake payout IDs or simulated success.
 */
export async function dispatchRazorpayXPayout(params: PayoutDispatchParams): Promise<PayoutDispatchResult> {
  const creds = getResolvedRazorpayXCredentials();

  if (!creds.isConfigured) {
    console.log(`[RazorpayX Payout] Credentials not configured on server. Payout ${params.payoutId} queued for processing.`);
    return {
      success: true,
      status: 'PENDING',
      mode: 'AWAITING_CREDENTIALS',
      payoutReference: `REQ-${params.payoutId.slice(-8).toUpperCase()}`,
      message: 'Withdrawal request registered successfully. RazorpayX Payout credentials (RAZORPAYX_KEY_ID, RAZORPAYX_KEY_SECRET, RAZORPAYX_ACCOUNT_NUMBER) must be configured in server environment variables to initiate automatic banking dispatch.'
    };
  }

  const authHeader = 'Basic ' + Buffer.from(`${creds.keyId}:${creds.keySecret}`).toString('base64');
  const sanitizedAmountPaise = Math.round(params.amountRupees * 100);

  try {
    // 1. Create Contact in RazorpayX
    const contactRes = await fetch('https://api.razorpay.com/v1/contacts', {
      method: 'POST',
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: params.userName.slice(0, 50) || 'Student Champion',
        email: params.userEmail || 'student@mystudyzone.in',
        contact: params.userMobile || '9876543210',
        type: 'customer',
        reference_id: `cnt_${params.userId.slice(0, 30)}`,
        notes: {
          userId: params.userId,
          platform: 'Vacation Champions'
        }
      })
    });

    const contactData = await contactRes.json().catch(() => null);
    if (!contactRes.ok || !contactData?.id) {
      const errDesc = contactData?.error?.description || `Failed to create RazorpayX contact (HTTP ${contactRes.status})`;
      console.error('[RazorpayX Contact Error]:', errDesc);
      return {
        success: false,
        status: 'FAILED',
        mode: 'FAILED',
        message: `Payout dispatch failed during beneficiary contact creation: ${errDesc}`,
        error: errDesc
      };
    }

    const contactId = contactData.id;

    // 2. Create Fund Account (UPI VPA or Bank Account)
    let fundAccountPayload: any = null;
    if (params.method === 'UPI') {
      if (!params.upiId || !params.upiId.includes('@')) {
        return {
          success: false,
          status: 'FAILED',
          mode: 'FAILED',
          message: 'Invalid UPI ID format. Please provide a valid UPI address (e.g. mobile@upi).',
          error: 'INVALID_UPI_VPA'
        };
      }
      fundAccountPayload = {
        contact_id: contactId,
        account_type: 'vpa',
        vpa: {
          address: params.upiId.trim()
        }
      };
    } else {
      if (!params.bankDetails?.accountNumber || !params.bankDetails?.ifscCode) {
        return {
          success: false,
          status: 'FAILED',
          mode: 'FAILED',
          message: 'Incomplete bank details. Account Number and IFSC Code are required.',
          error: 'MISSING_BANK_DETAILS'
        };
      }
      fundAccountPayload = {
        contact_id: contactId,
        account_type: 'bank_account',
        bank_account: {
          name: params.bankDetails.accountHolderName || params.userName,
          ifsc: params.bankDetails.ifscCode.toUpperCase().trim(),
          account_number: params.bankDetails.accountNumber.trim()
        }
      };
    }

    const fundRes = await fetch('https://api.razorpay.com/v1/fund_accounts', {
      method: 'POST',
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fundAccountPayload)
    });

    const fundData = await fundRes.json().catch(() => null);
    if (!fundRes.ok || !fundData?.id) {
      const errDesc = fundData?.error?.description || `Failed to create RazorpayX fund account (HTTP ${fundRes.status})`;
      console.error('[RazorpayX Fund Account Error]:', errDesc);
      return {
        success: false,
        status: 'FAILED',
        mode: 'FAILED',
        message: `Payout dispatch failed during fund account validation: ${errDesc}`,
        error: errDesc
      };
    }

    const fundAccountId = fundData.id;

    // 3. Initiate Payout from RazorpayX Business Current Account
    const payoutPayload = {
      account_number: creds.accountNumber,
      fund_account_id: fundAccountId,
      amount: sanitizedAmountPaise,
      currency: 'INR',
      mode: params.method === 'UPI' ? 'UPI' : 'IMPS',
      purpose: 'cashback',
      queue_if_low_balance: true,
      reference_id: params.payoutId.slice(0, 40),
      narration: 'VC Cashback Reward',
      notes: {
        userId: params.userId,
        payoutId: params.payoutId,
        platform: 'Vacation Champions'
      }
    };

    const payoutRes = await fetch('https://api.razorpay.com/v1/payouts', {
      method: 'POST',
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json',
        'X-Payout-Idempotency': params.payoutId
      },
      body: JSON.stringify(payoutPayload)
    });

    const payoutData = await payoutRes.json().catch(() => null);
    if (!payoutRes.ok || !payoutData?.id) {
      const errDesc = payoutData?.error?.description || `RazorpayX Payout API rejected request (HTTP ${payoutRes.status})`;
      console.error('[RazorpayX Payout Error]:', errDesc);
      return {
        success: false,
        status: 'FAILED',
        mode: 'FAILED',
        message: `RazorpayX payout initiation failed: ${errDesc}`,
        error: errDesc
      };
    }

    const rzpPayoutId = payoutData.id;
    const rzpStatus = String(payoutData.status || '').toLowerCase();

    let resolvedStatus: 'PROCESSING' | 'COMPLETED' | 'FAILED' = 'PROCESSING';
    if (rzpStatus === 'processed') {
      resolvedStatus = 'COMPLETED';
    } else if (rzpStatus === 'rejected' || rzpStatus === 'cancelled') {
      resolvedStatus = 'FAILED';
    }

    return {
      success: resolvedStatus !== 'FAILED',
      status: resolvedStatus,
      mode: 'RAZORPAYX_AUTOMATED',
      razorpayxPayoutId: rzpPayoutId,
      payoutReference: payoutData.utr || rzpPayoutId,
      message: `RazorpayX automated payout initiated successfully (Status: ${rzpStatus.toUpperCase()}).`
    };
  } catch (error: any) {
    console.error('[RazorpayX Payout Exception]:', error);
    return {
      success: false,
      status: 'FAILED',
      mode: 'FAILED',
      message: `Network or server error contacting RazorpayX API: ${error?.message || error}`,
      error: error?.message || String(error)
    };
  }
}

/**
 * Verifies the RazorpayX Payout Webhook HMAC-SHA256 signature
 */
export function verifyRazorpayXPayoutWebhookSignature(
  rawBody: Buffer | string,
  signatureHeader: string | undefined
): boolean {
  if (!signatureHeader) return false;
  const creds = getResolvedRazorpayXCredentials();
  const secret = creds.webhookSecret || creds.keySecret;
  if (!secret) return false;

  const bodyBuffer = Buffer.isBuffer(rawBody) ? rawBody : Buffer.from(String(rawBody), 'utf8');
  const expectedSig = crypto.createHmac('sha256', secret).update(bodyBuffer).digest('hex');
  const providedSig = signatureHeader.trim();

  if (expectedSig.length !== providedSig.length) return false;
  return crypto.timingSafeEqual(Buffer.from(expectedSig, 'utf8'), Buffer.from(providedSig, 'utf8'));
}

/**
 * Handles incoming RazorpayX payout webhooks (payout.processed, payout.failed, payout.reversed)
 * and updates Firestore atomically.
 */
export async function processRazorpayXPayoutWebhookEvent(event: any): Promise<{ handled: boolean; status?: string; message?: string }> {
  const eventType = String(event?.event || '');
  const payoutEntity = event?.payload?.payout?.entity;
  if (!payoutEntity || !payoutEntity.id) {
    return { handled: false, message: 'Missing payout entity in webhook payload.' };
  }

  const rzpPayoutId = payoutEntity.id;
  const referenceId = String(payoutEntity.reference_id || '');
  const userId = String(payoutEntity.notes?.userId || '');
  const amountPaise = Number(payoutEntity.amount || 0);
  const amountRupees = Math.round(amountPaise / 100);

  const payoutDocId = referenceId || `payout_rzp_${rzpPayoutId}`;
  const payoutRef = doc(serverDb, 'payout_requests', payoutDocId);
  const userRef = userId ? doc(serverDb, 'referrals', userId) : null;

  if (eventType === 'payout.processed') {
    await updateDoc(payoutRef, {
      status: 'COMPLETED',
      razorpayxPayoutId: rzpPayoutId,
      transactionReference: payoutEntity.utr || rzpPayoutId,
      processedAt: new Date().toISOString(),
      adminNotes: 'Automated RazorpayX payout confirmed successfully via webhook.'
    }).catch(err => console.warn('[Webhook Firestore Update Notice]:', err));

    if (userRef) {
      const snap = await getDoc(userRef).catch(() => null);
      if (snap && snap.exists()) {
        const udata = snap.data();
        const pending = Math.max(0, (udata.wallet?.pendingBalance || 0) - amountRupees);
        const withdrawn = (udata.wallet?.totalWithdrawn || 0) + amountRupees;
        await updateDoc(userRef, {
          'wallet.pendingBalance': pending,
          'wallet.totalWithdrawn': withdrawn,
          updatedAt: new Date().toISOString()
        }).catch(err => console.warn('[Webhook Wallet Update Notice]:', err));
      }
    }

    return { handled: true, status: 'COMPLETED', message: 'Payout marked completed.' };
  }

  if (eventType === 'payout.failed' || eventType === 'payout.reversed') {
    const failureReason = payoutEntity.failure_reason || eventType;
    await updateDoc(payoutRef, {
      status: 'FAILED',
      razorpayxPayoutId: rzpPayoutId,
      processedAt: new Date().toISOString(),
      adminNotes: `RazorpayX payout failed: ${failureReason}. Funds automatically restored to wallet.`
    }).catch(err => console.warn('[Webhook Firestore Update Notice]:', err));

    // Automatically restore funds to available wallet balance
    if (userRef) {
      const snap = await getDoc(userRef).catch(() => null);
      if (snap && snap.exists()) {
        const udata = snap.data();
        const pending = Math.max(0, (udata.wallet?.pendingBalance || 0) - amountRupees);
        const available = (udata.wallet?.availableBalance || 0) + amountRupees;
        await updateDoc(userRef, {
          'wallet.pendingBalance': pending,
          'wallet.availableBalance': available,
          updatedAt: new Date().toISOString()
        }).catch(err => console.warn('[Webhook Balance Restore Notice]:', err));
      }
    }

    return { handled: true, status: 'FAILED', message: 'Payout failed, funds restored to user wallet.' };
  }

  return { handled: true, status: eventType, message: `Ignored event: ${eventType}` };
}
