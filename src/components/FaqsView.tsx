import React, { useState } from 'react';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Bot, 
  LifeBuoy, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { DEFAULT_FAQS } from '../services/supportService';

interface FaqsViewProps {
  onNavigateTab?: (tab: string) => void;
  onOpenMembership?: (plan?: 'basic' | 'premium') => void;
}

export const FaqsView: React.FC<FaqsViewProps> = ({ 
  onNavigateTab,
  onOpenMembership 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(['faq-1', 'faq-2']));

  const categories = ['All', 'Plans & Pricing', 'Payment & Activation', 'Learning & Quizzes', 'Audio Stories & Media', 'Scholarship Exam Prep', 'Help & Complaints', 'Account & Safety'];

  const toggleExpand = (id: string) => {
    const next = new Set(expandedIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setExpandedIds(next);
  };

  const filteredFaqs = DEFAULT_FAQS.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;
    const matchesQuery = 
      faq.question.toLowerCase().includes(q) || 
      faq.answer.toLowerCase().includes(q) ||
      faq.tags?.some(t => t.toLowerCase().includes(q));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-amber-100 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-amber-200" />
            <span>Knowledge Base</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight leading-tight">
            Frequently Asked Questions (FAQs)
          </h1>
          <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed font-medium">
            Find immediate answers about subscription plans, 90-day activations, quiz progression, audio stories, and account safety.
          </p>
        </div>

        {/* Live Search Bar */}
        <div className="mt-6 max-w-xl relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. ₹49 plan, 90 days, payment, Marathi stories)..."
            className="w-full px-4 py-3.5 pl-11 rounded-2xl bg-white text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden shadow-lg border-2 border-amber-300"
          />
          <Search className="w-5 h-5 text-amber-600 absolute left-3.5 top-3.5 pointer-events-none" />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {categories.map(cat => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-white hover:bg-amber-50 text-slate-700 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ Accordion List */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center text-xs text-slate-500 space-y-2">
            <p className="font-bold text-slate-700">No questions matched your query.</p>
            <p>Try searching for a different keyword or submit a ticket in Help & Support.</p>
          </div>
        ) : (
          filteredFaqs.map(faq => {
            const isExpanded = expandedIds.has(faq.id);
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200 hover:border-amber-300 transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 bg-slate-50/50 hover:bg-amber-50/40 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-extrabold text-xs shrink-0">
                      ?
                    </span>
                    <span className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-amber-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isExpanded && (
                  <div className="p-4 sm:p-5 bg-white border-t border-slate-100 text-xs text-slate-700 leading-relaxed whitespace-pre-wrap animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Need more help card */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-6 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-display font-bold text-sm text-slate-900">
            Still have questions?
          </h3>
          <p className="text-slate-600">
            Chat with our Free AI Assistant or submit an official Help & Support ticket.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => onNavigateTab?.('help-support')}
            className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs shadow-xs cursor-pointer transition-all"
          >
            Open Help & Support
          </button>
        </div>
      </div>
    </div>
  );
};
