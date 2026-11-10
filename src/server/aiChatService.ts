import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

// Local Knowledge Base for Offline / Quota Fallback
const LOCAL_KNOWLEDGE_BASE: Array<{ keywords: string[]; answerEn: string; answerHi: string; answerMr: string }> = [
  {
    keywords: ['plan', 'price', 'pricing', 'cost', 'subscription', '49', '99', 'free', 'rupee', 'शुल्क', 'किंमत', 'पैसे'],
    answerEn: 'Vacation Champions offers three plans: 1) FREE Plan (₹0, Lifetime): Quizzes, 2 demo stories, sample puzzles. 2) STANDARD Plan (₹49 for 90 Days): All 14 school curriculum subjects & unlimited quizzes. 3) PREMIUM Plan (₹99 for 90 Days): Complete unlock with 45+ audio moral stories, Shivaji Maharaj 50 chapters, Drawing Studio, Cricket Arena, Scholarship Prep, and AI Skills.',
    answerHi: 'वेकेशन चैंपियंस में 3 प्लान उपलब्ध हैं: 1) फ्री प्लान (₹0, लाइफटाइम) 2) स्टैंडर्ड प्लान (₹49, पूरे 90 दिनों के लिए - सभी 14 विषय) 3) प्रीमियम प्लान (₹99, पूरे 90 दिनों के लिए - 45+ ऑडियो कहानियां, शिवाजी महाराज गाथा, ड्रॉइंग, क्रिकेट, स्कॉलरशिप और एआई स्किल्स)।',
    answerMr: 'व्हेकेशन चॅम्पियन्सवर ३ प्लॅन्स उपलब्ध आहेत: १) मोफत प्लॅन (₹०, आजीवन): क्विझ, २ ऑडिओ गोष्टी. २) स्टँडर्ड प्लॅन (₹४९, पूर्ण ९० दिवस): सर्व १४ शालेय विषय आणि अमर्याद सराव. ३) प्रीमियम प्लॅन (₹९९, पूर्ण ९० दिवस): ४५+ ऑडिओ गोष्टी, छत्रपती शिवाजी महाराज ५० अध्याय, ड्रॉइंग स्टुडिओ, क्रिकेट क्विझ, स्कॉलरशिप व एआय स्किल्स.'
  },
  {
    keywords: ['payment', 'pay', 'razorpay', 'upi', 'qr', 'activate', 'पेमेंट', 'पैसे कसे भरायचे'],
    answerEn: 'You can pay using Razorpay LIVE Checkout (UPI, Debit/Credit Card, NetBanking) or scan our official Razorpay Dynamic UPI QR Code using Google Pay, PhonePe, or Paytm. Once captured, the plan activates immediately on your student dashboard for 90 days.',
    answerHi: 'आप Razorpay LIVE चेकआउट या डायनॅमिक UPI QR कोड स्कैन करके Google Pay, PhonePe या Paytm से भुगतान कर सकते हैं। सफल भुगतान के बाद आपका 90-दिन का प्लान तुरंत सक्रिय हो जाता है।',
    answerMr: 'तुम्ही Razorpay LIVE चेकआउट किंवा अधिकृत UPI QR कोड स्कॅन करून Google Pay, PhonePe किंवा Paytm द्वारे फी भरू शकता. पेमेंट पूर्ण होताच ९० दिवसांचा प्लॅन लगेच सुरू होतो.'
  },
  {
    keywords: ['ticket', 'support', 'complaint', 'grievance', 'help', 'तक्रार', 'मदत', 'सपोर्ट'],
    answerEn: 'Need help? You can submit a support ticket in the Help & Support section to get a unique ticket ID (TKT-VC-XXXXX) or lodge a grievance under Grievance Redressal (GRV-VC-XXXXX). Our team responds within 24 to 48 hours.',
    answerHi: 'किसी भी समस्या के लिए हेल्प एंड सपोर्ट पेज पर टिकट (TKT-VC-XXXXX) दर्ज करें या शिकायत निवारण में ग्रीवेंस (GRV-VC-XXXXX) दर्ज करें। हमारी टीम 24-48 घंटों में समाधान करती है।',
    answerMr: 'कोणत्याही मदतीसाठी हेल्प आणि सपोर्ट विभागात तिकीट (TKT-VC-XXXXX) तयार करा किंवा तक्रार निवारण (GRV-VC-XXXXX) मध्ये नोंदवा. आमची टीम २४ ते ४८ तासांत उत्तर देते.'
  },
  {
    keywords: ['story', 'stories', 'audio', 'marathi', 'english', 'गोष्टी', 'कथा'],
    answerEn: 'Story World features 45+ moral audio stories and 50 chapters of Chhatrapati Shivaji Maharaj in natural female Marathi and English voices! You can listen, pause, read bilingual transcripts, and earn champion badges.',
    answerHi: 'स्टोरी वर्ल्ड में 45+ प्रेरक ऑडियो कहानियां और छत्रपती शिवाजी महाराज के 50 अध्याय मराठी और अंग्रेजी में उपलब्ध हैं। आप सुन सकते हैं और पॉइंट्स कमा सकते हैं।',
    answerMr: 'स्टोरी वर्ल्डमध्ये ४५+ बोधप्रद ऑडिओ गोष्टी आणि छत्रपती शिवाजी महाराजांचे ५० अध्याय मराठी आणि इंग्रजी आवाजात उपलब्ध आहेत. तुम्ही ऐकू शकता आणि बॅजेस मिळवू शकता.'
  },
  {
    keywords: ['scholarship', '4th', '7th', 'msce', 'शिष्यवृत्ती'],
    answerEn: 'We provide specialized Maharashtra State Scholarship (MSCE) practice for Class 4 (Pre-Upper Primary) and Class 7 (Pre-Secondary), covering Paper 1 (First Language & Mathematics) and Paper 2 (Third Language & Intelligence Test).',
    answerHi: 'कक्षा 4 और 7 के लिए महाराष्ट्र शिष्यवृत्ति परीक्षा (MSCE) के पेपर 1 और पेपर 2 का विशेष अभ्यास उपलब्ध है।',
    answerMr: 'इयत्ता ४थी आणि ७वी साठी महाराष्ट्र राज्य परीक्षा परिषद (MSCE) शिष्यवृत्ती परीक्षेचे पेपर १ व पेपर २ चे संपूर्ण सराव उपलब्ध आहे.'
  },
  {
    keywords: ['wrong', 'incorrect', 'error', 'mistake', 'चुकीचा', 'प्रश्न', 'उत्तर'],
    answerEn: 'Found a mistake in a quiz? Simply click the "Report Issue" button underneath that question in the quiz. Our academic review panel will verify and update it promptly!',
    answerHi: 'अगर किसी प्रश्न या उत्तर में कोई त्रुटि दिखे, तो क्विज में प्रश्न के नीचे दिए "Report Issue" बटन पर क्लिक करके रिपोर्ट करें।',
    answerMr: 'क्विझमधील कोणत्याही प्रश्नात किंवा उत्तरात चूक आढळल्यास प्रश्नाखालील "Report Issue" बटनावर क्लिक करा. आमचे शिक्षक त्याची पडताळणी करतील.'
  }
];

function findFallbackAnswer(query: string, lang: 'en' | 'hi' | 'mr' = 'en'): string {
  const q = query.toLowerCase();
  for (const item of LOCAL_KNOWLEDGE_BASE) {
    if (item.keywords.some(k => q.includes(k.toLowerCase()))) {
      if (lang === 'mr') return item.answerMr;
      if (lang === 'hi') return item.answerHi;
      return item.answerEn;
    }
  }

  if (lang === 'mr') {
    return 'मी व्हेकेशन चॅम्पियन्सचा स्मार्ट एआय सहाय्यक आहे! मी तुम्हाला अभ्यास, क्विझ, ऑडिओ गोष्टी आणि सबस्क्रिप्शनबद्दल मदत करू शकतो. खात्याशी संबंधित विशिष्ट तक्रारीसाठी कृपया "हेल्प अँड सपोर्ट" मध्ये तिकीट नोंदवा.';
  }
  if (lang === 'hi') {
    return 'मैं वेकेशन चैंपियंस का एआई सहायक हूँ! मैं पढ़ाई, क्विज, कहानियों और सबस्क्रिप्शन के बारे में आपकी सहायता कर सकता हूँ। किसी तकनीकी या खाते की समस्या के लिए कृपया "हेल्प एंड सपोर्ट" सेक्शन में जाएं।';
  }
  return 'Hello Champion! I am the Vacation Champions AI Assistant. I can help you with learning concepts, quizzes, audio stories, and understanding our subscription plans (FREE ₹0, Standard ₹49, Premium ₹99 for 90 days). If you need help with your account or billing, please submit a Help & Support ticket!';
}

let geminiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI | null {
  if (geminiClient) return geminiClient;
  const apiKey = process.env.GEMINI_API_KEY || '';
  if (!apiKey || apiKey.startsWith('YOUR_') || apiKey.includes('PLACEHOLDER')) {
    return null;
  }
  try {
    geminiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });
    return geminiClient;
  } catch (err) {
    console.warn('[Gemini AI] Initialization error:', err);
    return null;
  }
}

export async function processAiChatMessage(params: {
  message: string;
  history?: Array<{ role: 'user' | 'model'; text: string }>;
  language?: 'en' | 'hi' | 'mr';
  studentContext?: {
    name?: string;
    classLevel?: string;
    plan?: string;
  };
}): Promise<{
  reply: string;
  source: 'gemini' | 'knowledge_base_fallback';
  language: 'en' | 'hi' | 'mr';
}> {
  const { message, history = [], language = 'en', studentContext } = params;
  const userText = (message || '').trim();

  if (!userText) {
    return {
      reply: 'Please ask a question! (कृपया आपला प्रश्न विचारा / कृपया अपना प्रश्न पूछें)',
      source: 'knowledge_base_fallback',
      language
    };
  }

  const ai = getGeminiClient();

  // If Gemini client is unavailable or missing key, use local knowledge base immediately
  if (!ai) {
    const fallback = findFallbackAnswer(userText, language);
    return {
      reply: fallback,
      source: 'knowledge_base_fallback',
      language
    };
  }

  const systemInstruction = `You are "Champion Buddy", a warm, encouraging, child-friendly AI learning companion for the educational platform "Vacation Champions" (website: mystudyzone.in) catering to school students from Class 2 to Class 8 in Maharashtra and across India.

Platform Facts:
- 14 school curriculum subjects: Mathematics, English, Hindi, Marathi, Science, General Knowledge, Social Studies, History, Geography, Computer Knowledge, Logical Reasoning, Environmental Studies, Moral Education, Vocabulary & Grammar.
- 45+ Audio Moral Stories with natural bilingual narrations (English and Marathi).
- 50 Chapters of Chhatrapati Shivaji Maharaj history.
- Cricket Champions Arena & Drawing Studio.
- Maharashtra Scholarship (MSCE) for Class 4 & Class 7.
- Plans:
  * FREE PLAN: ₹0 Lifetime (sample quizzes, 2 demo stories).
  * STANDARD PLAN: ₹49 for exactly 90 Days (all 14 curriculum subjects and quizzes).
  * PREMIUM PLAN: ₹99 for exactly 90 Days (complete full access to all features).
- Help & Support: Students can open tickets (TKT-VC-XXXXX) or Grievances (GRV-VC-XXXXX).
- Incorrect Questions: Students can click the "Report Issue" button underneath any quiz question.

Current Student Context:
${studentContext?.name ? `- Student Name: ${studentContext.name}` : ''}
${studentContext?.classLevel ? `- Enrolled Grade: ${studentContext.classLevel}` : ''}
${studentContext?.plan ? `- Current Plan: ${studentContext.plan}` : ''}

Behavioral Guidelines & Guardrails:
1. TRILINGUAL SUPPORT: Respond in the user's preferred language (${language === 'mr' ? 'Marathi (मराठी)' : language === 'hi' ? 'Hindi (हिंदी)' : 'English'}). If the student asks in Marathi, answer in clear, polite Marathi. If asked in Hindi, answer in Hindi. If asked in English, answer in English.
2. AGE-APPROPRIATE: Use simple, encouraging language suitable for children aged 7-14.
3. LEARNING ASSISTANCE: Help explain academic concepts, science facts, math tricks, grammar rules, and moral lessons patiently.
4. STRICT GUARDRAIL ON PAYMENTS: NEVER claim that you have verified or activated a payment, nor confirm banking transactions. Instruct the user to use Razorpay Checkout or QR payment on the site, or contact Help & Support if a payment needs review.
5. DISCLAMER & TICKETING: If a student asks about correcting an exam mistake, account deletion, or password trouble, politely guide them to the "Help & Support" or "Grievance Redressal" sections.
6. Keep responses concise, uplifting, and structured with bullet points or emojis where appropriate.`;

  try {
    // Format conversation contents
    const contents: any[] = [];
    
    // Add past history (limit to last 6 turns)
    const recentHistory = history.slice(-6);
    for (const h of recentHistory) {
      contents.push({
        role: h.role === 'user' ? 'user' : 'model',
        parts: [{ text: h.text }]
      });
    }

    // Add current user prompt
    contents.push({
      role: 'user',
      parts: [{ text: userText }]
    });

    // Call FREE model 'gemini-3.8-flash'
    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 600
      }
    });

    const replyText = response.text?.trim();

    if (replyText) {
      return {
        reply: replyText,
        source: 'gemini',
        language
      };
    }

    // Fallback if empty response
    return {
      reply: findFallbackAnswer(userText, language),
      source: 'knowledge_base_fallback',
      language
    };
  } catch (error: any) {
    console.warn('[Gemini AI Chat Error - Triggering Local KB Fallback]:', error?.message || error);
    // Graceful fallback on quota exhaustion, network timeout or rate limit
    const fallback = findFallbackAnswer(userText, language);
    return {
      reply: fallback,
      source: 'knowledge_base_fallback',
      language
    };
  }
}
