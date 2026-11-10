import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  HelpCircle, 
  MessageSquare, 
  RefreshCw, 
  ChevronDown,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  source?: 'gemini' | 'knowledge_base_fallback';
}

interface FloatingAiChatbotProps {
  onNavigateTab?: (tab: string) => void;
}

export const FloatingAiChatbot: React.FC<FloatingAiChatbotProps> = ({ onNavigateTab }) => {
  const { currentStudent } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'hi' | 'mr'>('en');
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      text: `Hello ${currentStudent?.name || 'Champion'}! 🌟 I am your Free AI Learning Assistant. You can ask me questions about quizzes, 14 school subjects, moral stories, or subscription plans in English, हिंदी, or मराठी!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickPrompts = {
    en: [
      'What are the ₹49 and ₹99 plans?',
      'How does the 90-day subscription work?',
      'Tell me about the 45 moral stories',
      'How do I report an incorrect question?'
    ],
    hi: [
      '₹49 और ₹99 के प्लान में क्या अंतर है?',
      'पेमेंट कैसे करें और प्लान कैसे चालू होगा?',
      'क्या कहानियों की आवाज सुन सकते हैं?',
      'किसी सवाल की शिकायत कैसे करें?'
    ],
    mr: [
      '₹४९ आणि ₹९९ प्लॅन्समध्ये काय फरक आहे?',
      'पेमेंट कसे करावे व ९० दिवस कसे मोजतात?',
      'मराठी गोष्टी आणि शिवाजी महाराजांची गाथा?',
      'प्रश्नातील चुकीची तक्रार कशी नोंदवायची?'
    ]
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: `usr_${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsLoading(true);

    try {
      // Build brief history
      const history = messages.slice(-4).map(m => ({
        role: m.sender === 'user' ? ('user' as const) : ('model' as const),
        text: m.text
      }));

      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history,
          language,
          studentContext: currentStudent ? {
            name: currentStudent.name,
            classLevel: currentStudent.classLevel,
            plan: currentStudent.plan
          } : undefined
        })
      });

      if (!res.ok) {
        throw new Error(`Server returned HTTP ${res.status}`);
      }

      const data = await res.json();
      const assistantMsg: ChatMessage = {
        id: `ai_${Date.now()}`,
        sender: 'assistant',
        text: data.reply || 'I am here to help you study and learn!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        source: data.source
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      console.warn('[FloatingAiChatbot] Backend chat error, using local reply:', err);
      // Fallback
      let fallback = 'I am your Vacation Champions study helper! If you need urgent assistance with payments or account settings, please visit the Help & Support page.';
      if (language === 'mr') {
        fallback = 'व्हेकेशन चॅम्पियन्सवर स्वागत आहे! पेमेंट किंवा खात्याशी संबंधित समस्येसाठी कृपया "हेल्प अँड सपोर्ट" मध्ये तिकीट नोंदवा.';
      } else if (language === 'hi') {
        fallback = 'वेकेशन चैंपियंस में आपका स्वागत है! भुगतान या तकनीकी समस्या के लिए कृपया "हेल्प एंड सपोर्ट" सेक्शन में जाएं।';
      }

      setMessages(prev => [
        ...prev,
        {
          id: `ai_${Date.now()}`,
          sender: 'assistant',
          text: fallback,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          source: 'knowledge_base_fallback'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button on Bottom-Right */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-2 px-3.5 py-2.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 cursor-pointer border-2 border-white/80"
            aria-label="Open AI Help Assistant"
          >
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="text-left hidden sm:block">
              <div className="text-xs font-black tracking-wide flex items-center gap-1">
                <span>AI Help Assistant</span>
                <Sparkles className="w-3 h-3 text-amber-300" />
              </div>
              <div className="text-[10px] text-purple-100 font-medium">
                Free • EN / हिंदी / मराठी
              </div>
            </div>
          </button>
        )}
      </div>

      {/* Expandable Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[94vw] sm:w-[400px] h-[560px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border-2 border-purple-200 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-700 via-indigo-600 to-amber-600 text-white p-3.5 flex items-center justify-between shrink-0 shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-xl shrink-0">
                🤖
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-display font-extrabold text-sm leading-tight">
                    Champion AI Buddy
                  </h3>
                  <span className="px-1.5 py-0.2 rounded-full bg-emerald-400 text-slate-900 text-[9px] font-black uppercase">
                    Free AI
                  </span>
                </div>
                <p className="text-[10px] text-purple-100 font-medium">
                  Class 2–8 Smart Learning Companion
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setMessages([
                  {
                    id: `wel_${Date.now()}`,
                    sender: 'assistant',
                    text: 'Chat history cleared. How can I help you today? (चॅट रीसेट झाले आहे. मी कशी मदत करू?)',
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  }
                ])}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs cursor-pointer transition-colors"
                title="Clear chat"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Language Selector Bar */}
          <div className="bg-purple-50/80 px-3 py-1.5 border-b border-purple-100 flex items-center justify-between text-xs shrink-0">
            <span className="text-[11px] font-bold text-purple-900 flex items-center gap-1">
              <MessageSquare className="w-3 h-3 text-purple-600" />
              <span>Language (भाषा निवडा):</span>
            </span>
            <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-purple-200">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded text-[10px] font-black transition-all cursor-pointer ${
                  language === 'en' ? 'bg-purple-600 text-white shadow-2xs' : 'text-slate-600 hover:text-purple-700'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguage('hi')}
                className={`px-2 py-0.5 rounded text-[10px] font-black transition-all cursor-pointer ${
                  language === 'hi' ? 'bg-purple-600 text-white shadow-2xs' : 'text-slate-600 hover:text-purple-700'
                }`}
              >
                हिंदी
              </button>
              <button
                type="button"
                onClick={() => setLanguage('mr')}
                className={`px-2 py-0.5 rounded text-[10px] font-black transition-all cursor-pointer ${
                  language === 'mr' ? 'bg-purple-600 text-white shadow-2xs' : 'text-slate-600 hover:text-purple-700'
                }`}
              >
                मराठी
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-gradient-to-b from-slate-50/50 to-white text-xs">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-7 h-7 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-xs shrink-0 mt-0.5">
                    🤖
                  </div>
                )}
                <div
                  className={`max-w-[82%] rounded-2xl p-3 shadow-2xs leading-relaxed text-xs break-words ${
                    msg.sender === 'user'
                      ? 'bg-purple-600 text-white rounded-tr-xs'
                      : 'bg-white text-slate-800 border border-purple-100 rounded-tl-xs'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                  <div className={`text-[9px] mt-1 flex items-center justify-between gap-2 ${
                    msg.sender === 'user' ? 'text-purple-200' : 'text-slate-400'
                  }`}>
                    <span>{msg.timestamp}</span>
                    {msg.sender === 'assistant' && (
                      <span className="font-semibold text-[9px] text-purple-500">
                        {msg.source === 'gemini' ? '✨ Gemini Flash' : '⚡ Champion KB'}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2 items-center text-purple-700 text-xs py-1">
                <div className="w-7 h-7 rounded-xl bg-purple-100 flex items-center justify-center text-xs">
                  🤖
                </div>
                <div className="bg-white border border-purple-100 px-3 py-2 rounded-2xl flex items-center gap-1.5 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[10px] font-bold text-slate-500 ml-1">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Question Chips */}
          <div className="px-3 py-1.5 bg-slate-50 border-t border-slate-100 overflow-x-auto shrink-0 flex items-center gap-1.5">
            {quickPrompts[language].map((qp, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(qp)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white hover:bg-purple-50 text-[10px] font-bold text-purple-900 border border-purple-200 shadow-2xs cursor-pointer transition-colors shrink-0"
              >
                {qp}
              </button>
            ))}
          </div>

          {/* Input & Send Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-2.5 bg-white border-t border-purple-100 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={
                language === 'mr'
                  ? 'अभ्यास किंवा प्लॅनबद्दल काहीही विचारा...'
                  : language === 'hi'
                  ? 'पढ़ाई या प्लान के बारे में कुछ भी पूछें...'
                  : 'Ask about quizzes, subjects, or plans...'
              }
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-hidden focus:ring-2 focus:ring-purple-400 focus:bg-white transition-all text-slate-800"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="w-10 h-10 rounded-xl bg-purple-600 hover:bg-purple-700 active:bg-purple-800 disabled:opacity-40 text-white flex items-center justify-center cursor-pointer transition-colors shrink-0 shadow-sm"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Bottom Help & Support Shortcut */}
          <div className="bg-purple-50/50 px-3 py-1 text-[10px] text-center text-slate-500 border-t border-purple-100/60 flex items-center justify-center gap-2">
            <span>Need human review?</span>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onNavigateTab?.('help-support');
              }}
              className="text-purple-700 font-extrabold hover:underline flex items-center gap-0.5 cursor-pointer"
            >
              <span>Open Help & Support</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
