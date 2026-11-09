# Security Specification - Vacation Champions

## 1. Data Invariants
1. A student profile in `/students/{studentId}` must have an ID matching `studentId` and `request.auth.uid` for private user profiles.
2. An attempt in `/students/{studentId}/attempts/{attemptId}` must belong to the authenticated student matching `studentId`.
3. Admin records and payments in `/transactions/{transactionId}` can only be written by authenticated users for their own student ID, or by administrators.
4. String fields must enforce maximum length limits to prevent resource exhaustion attacks.
5. All document ID path variables must satisfy `isValidId()`.

## 2. The Dirty Dozen Payloads (Targeting Security Boundaries)
1. **Malicious ID Poisoning**: Payload writing to document ID `../../etc/passwd` or 50KB junk string -> Rejected by `isValidId()`.
2. **Ghost Field Injection**: Adding `isAdmin: true` or `role: 'superadmin'` inside `StudentProfile` update -> Rejected by strict key validation.
3. **Attempt Hijacking**: Student A writing attempt to `/students/studentB/attempts/attempt1` -> Rejected because `request.auth.uid != studentB`.
4. **Mass PII Scrape**: Unauthenticated query to `/students` without owner constraint -> Rejected by `allow list: if isSignedIn() && resource.data.id == request.auth.uid`.
5. **Score Tampering**: Submitting quiz attempt with negative time or >100 score percent -> Rejected by numerical validation bounds.
6. **Fake Transaction Injection**: Writing a fake transaction for someone else's studentId -> Rejected because `incoming().studentId == request.auth.uid`.
7. **Oversized String Injection**: Injecting 1MB biography or student name -> Rejected by `.size() <= 100` bounds.
8. **Invalid Plan Spoofing**: Setting `plan: 'lifetime_free_vip'` -> Rejected by enum validation `['free', 'basic', 'premium']`.
9. **Email Spoofing**: Attempting admin operation with unverified email -> Rejected by admin verification check.
10. **Orphaned Attempt Creation**: Submitting attempt without required `studentId` or `totalQuestions` -> Rejected by required keys validation.
11. **Negative Payment Amount**: Creating transaction with `amount: -500` -> Rejected by positive numeric check.
12. **Immutable Field Mutation**: Updating `id` or `registeredAt` after creation -> Rejected by immutability rule.
