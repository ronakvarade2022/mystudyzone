import React, { useState, useEffect, useRef } from 'react';
import { SHIVAJI_STORIES, ShivajiStory } from '../data/shivajiStoriesData';
import { speechService, SpeechParagraphState } from '../services/speechService';
import {
  Crown,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  BookOpen,
  CheckCircle,
  Search,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Calendar,
  Sparkles
} from 'lucide-react';

export const ShivajiStoriesView: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<'Marathi' | 'Hindi' | 'English'>('Marathi');
  const [activeStoryIndex, setActiveStoryIndex] = useState<number>(0);
  const [speechState, setSpeechState] = useState<SpeechParagraphState>({
    isPlaying: false,
    isPaused: false,
    currentParagraphIndex: 0,
    totalParagraphs: 0,
    progressPercent: 0
  });
  const [speechRate, setSpeechRate] = useState<number>(0.95);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [completedStories, setCompletedStories] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('vc_shivaji_completed');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const activeParagraphRef = useRef<HTMLDivElement | null>(null);

  const currentStory: ShivajiStory = SHIVAJI_STORIES[activeStoryIndex] || SHIVAJI_STORIES[0];
  const bodyParagraphs = currentStory.paragraphs[selectedLanguage] || [];
  const moralText = currentStory.moral[selectedLanguage] || '';

  // Full narration sequence: all body paragraphs + moral lesson at the end
  const getFullNarrationParagraphs = (): string[] => {
    const moralPrefix =
      selectedLanguage === 'Marathi'
        ? 'या कथेतून शिवरायांची शिकवण: '
        : selectedLanguage === 'Hindi'
        ? 'इस प्रसंग की अमर सीख: '
        : 'Moral of this story: ';
    return [...bodyParagraphs, `${moralPrefix}${moralText}`];
  };

  // Filtered stories list
  const filteredStories = SHIVAJI_STORIES.filter(s => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      s.title.English.toLowerCase().includes(q) ||
      s.title.Marathi.toLowerCase().includes(q) ||
      s.title.Hindi.toLowerCase().includes(q) ||
      s.location.toLowerCase().includes(q) ||
      s.year.toLowerCase().includes(q) ||
      String(s.order).includes(q)
    );
  });

  // Stop speech synthesis on unmount or story/language change
  useEffect(() => {
    speechService.stop();
    setSpeechState({
      isPlaying: false,
      isPaused: false,
      currentParagraphIndex: 0,
      totalParagraphs: bodyParagraphs.length + 1,
      progressPercent: 0
    });
  }, [activeStoryIndex, selectedLanguage]);

  useEffect(() => {
    return () => {
      speechService.stop();
    };
  }, []);

  // Keep active paragraph scrolled smoothly into view while playing
  useEffect(() => {
    if (speechState.isPlaying && activeParagraphRef.current) {
      activeParagraphRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [speechState.currentParagraphIndex, speechState.isPlaying]);

  const markAsCompleted = (id: string) => {
    setCompletedStories(prev => {
      const updated = { ...prev, [id]: true };
      try {
        localStorage.setItem('vc_shivaji_completed', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  // Start full story narration from a given paragraph index
  const startFromParagraph = (index: number) => {
    const allParas = getFullNarrationParagraphs();
    speechService.setRate(speechRate);
    speechService.startStoryNarration(
      allParas,
      selectedLanguage,
      state => {
        setSpeechState(state);
      },
      () => {
        markAsCompleted(currentStory.id);
      },
      index
    );
  };

  const handlePlayFullStory = () => {
    if (speechState.isPaused) {
      speechService.resume();
    } else {
      startFromParagraph(speechState.currentParagraphIndex || 0);
    }
  };

  const handlePauseAudio = () => {
    speechService.pause();
  };

  const handleResumeAudio = () => {
    speechService.resume();
  };

  const handleRestartStory = () => {
    startFromParagraph(0);
  };

  const handleNextParagraph = () => {
    const total = bodyParagraphs.length + 1;
    if (speechState.currentParagraphIndex + 1 < total) {
      startFromParagraph(speechState.currentParagraphIndex + 1);
    }
  };

  const handlePrevParagraph = () => {
    if (speechState.currentParagraphIndex > 0) {
      startFromParagraph(speechState.currentParagraphIndex - 1);
    } else {
      startFromParagraph(0);
    }
  };

  const handleRateChange = (newRate: number) => {
    setSpeechRate(newRate);
    speechService.setRate(newRate);
  };

  const completedCount = Object.keys(completedStories).length;
  const activeParaIndex = speechState.currentParagraphIndex;
  const totalParasWithMoral = bodyParagraphs.length + 1;

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Historic Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-600 via-amber-600 to-amber-700 text-white p-6 sm:p-8 shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full text-xs font-extrabold tracking-wide text-amber-200 border border-amber-300/30">
              <Crown className="w-3.5 h-3.5 text-amber-300" />
              <span>CHHATRAPATI SHIVAJI MAHARAJ GATHA</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight">
              छत्रपती शिवाजी महाराज: ५० ऐतिहासिक अमृतकथा
            </h1>
            <p className="text-amber-100 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Complete chronological saga of 50 inspiring stories in Marathi, Hindi, and English with natural, expressive Female Marathi Voice narration from start to finish!
            </p>
          </div>

          {/* Progress Pill & Language Switcher */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 text-center">
              <p className="text-[10px] uppercase font-bold text-amber-200">Stories Completed</p>
              <p className="text-xl font-extrabold text-white">{completedCount} / 50</p>
            </div>

            {/* Language Selector */}
            <div className="bg-black/30 p-1 rounded-2xl border border-white/20 flex items-center gap-1">
              {(['Marathi', 'Hindi', 'English'] as const).map(lang => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                    selectedLanguage === lang
                      ? 'bg-amber-400 text-amber-950 shadow-md scale-102'
                      : 'text-amber-100 hover:text-white'
                  }`}
                >
                  {lang === 'Marathi' ? 'मराठी' : lang === 'Hindi' ? 'हिंदी' : 'English'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Story Reader (Left) and 50 Story Index (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Active Story Reader (8 cols) */}
        <div className="lg:col-span-8 space-y-5">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-md space-y-6">
            {/* Story Meta Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-100 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white font-extrabold flex items-center justify-center text-sm shadow-sm">
                  #{currentStory.order}
                </span>
                <div>
                  <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-amber-600" />
                    {currentStory.year} • <MapPin className="w-3 h-3 text-amber-600" /> {currentStory.location}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
                    {currentStory.title[selectedLanguage]}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-950 text-[11px] font-extrabold px-3 py-1 rounded-full border border-amber-300">
                  <Volume2 className="w-3.5 h-3.5 text-orange-600" />
                  <span>
                    {selectedLanguage === 'Marathi'
                      ? 'Fluent Female Marathi Voice'
                      : selectedLanguage === 'Hindi'
                      ? 'Sweet Female Hindi Voice'
                      : 'Sweet Female English Voice'}
                  </span>
                </span>

                {completedStories[currentStory.id] && (
                  <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-300">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    Completed
                  </span>
                )}
              </div>
            </div>

            {/* Complete Audio Control Bar: Play, Pause, Resume, Restart, Prev/Next */}
            <div className="bg-amber-50/90 rounded-2xl p-4 border border-amber-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {/* Play Button */}
                  {!speechState.isPlaying && !speechState.isPaused && (
                    <button
                      onClick={handlePlayFullStory}
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-extrabold text-xs flex items-center gap-2 shadow-md cursor-pointer transition-all"
                    >
                      <Play className="w-4 h-4 fill-white" />
                      <span>Play Full Story</span>
                    </button>
                  )}

                  {/* Pause Button */}
                  {speechState.isPlaying && (
                    <button
                      onClick={handlePauseAudio}
                      className="px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs flex items-center gap-2 shadow-md cursor-pointer transition-all"
                    >
                      <Pause className="w-4 h-4 fill-white" />
                      <span>Pause Audio</span>
                    </button>
                  )}

                  {/* Resume Button */}
                  {speechState.isPaused && (
                    <button
                      onClick={handleResumeAudio}
                      className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center gap-2 shadow-md cursor-pointer transition-all"
                    >
                      <Play className="w-4 h-4 fill-white" />
                      <span>Resume Audio</span>
                    </button>
                  )}

                  <button
                    onClick={handleRestartStory}
                    className="px-3 py-2 rounded-xl bg-white hover:bg-amber-100 text-amber-900 border border-amber-300 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    title="Restart Story from Beginning"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Restart</span>
                  </button>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={handlePrevParagraph}
                      disabled={activeParaIndex === 0}
                      className="p-2 rounded-xl bg-white hover:bg-amber-100 disabled:opacity-40 text-amber-900 border border-amber-300 cursor-pointer"
                      title="Previous Paragraph"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNextParagraph}
                      disabled={activeParaIndex >= totalParasWithMoral - 1}
                      className="p-2 rounded-xl bg-white hover:bg-amber-100 disabled:opacity-40 text-amber-900 border border-amber-300 cursor-pointer"
                      title="Next Paragraph"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Speed & Paragraph Progress Indicator */}
                <div className="flex items-center gap-3 text-xs">
                  <span className="font-bold text-amber-950 bg-amber-200/70 px-2.5 py-1 rounded-lg">
                    Part {Math.min(activeParaIndex + 1, totalParasWithMoral)} of {totalParasWithMoral}
                  </span>

                  <select
                    value={speechRate}
                    onChange={e => handleRateChange(parseFloat(e.target.value))}
                    className="bg-white border border-amber-300 rounded-lg px-2.5 py-1 text-xs font-bold text-slate-700 cursor-pointer"
                  >
                    <option value={0.85}>0.85x Slow & Clear</option>
                    <option value={0.95}>0.95x Sweet & Fluent</option>
                    <option value={1.05}>1.05x Standard</option>
                    <option value={1.2}>1.2x Fast</option>
                  </select>
                </div>
              </div>

              {/* Continuous Story Progress Bar */}
              <div className="flex items-center gap-3 text-[11px] font-bold text-amber-950">
                <span>
                  {speechState.isPlaying
                    ? `🔊 Narrating Paragraph ${Math.min(activeParaIndex + 1, totalParasWithMoral)} of ${totalParasWithMoral}`
                    : speechState.isPaused
                    ? `⏸ Paused at Paragraph ${Math.min(activeParaIndex + 1, totalParasWithMoral)} of ${totalParasWithMoral}`
                    : `Ready to Play Complete Story (${totalParasWithMoral} Parts)`}
                </span>
                <div className="flex-1 h-2 bg-amber-200/80 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-emerald-500 transition-all duration-300 rounded-full"
                    style={{ width: `${speechState.progressPercent || 0}%` }}
                  />
                </div>
                <span>{speechState.progressPercent || 0}%</span>
              </div>
            </div>

            {/* Story Paragraphs with Synchronized Audio Highlighting */}
            <div className="space-y-4 text-slate-800 leading-relaxed text-sm sm:text-base">
              {bodyParagraphs.map((p, idx) => {
                const isActive = activeParaIndex === idx;
                return (
                  <div
                    key={idx}
                    ref={isActive ? activeParagraphRef : null}
                    onClick={() => startFromParagraph(idx)}
                    className={`p-4 rounded-2xl transition-all cursor-pointer border ${
                      isActive && speechState.isPlaying
                        ? 'bg-amber-100/90 border-amber-500 shadow-md ring-2 ring-amber-400/40 scale-[1.005]'
                        : isActive
                        ? 'bg-amber-50 border-amber-300'
                        : 'bg-white hover:bg-amber-50/40 border-slate-100'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          startFromParagraph(idx);
                        }}
                        className={`mt-0.5 w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          isActive && speechState.isPlaying
                            ? 'bg-orange-600 text-white shadow-xs'
                            : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                        }`}
                        title="Play from this paragraph"
                      >
                        {isActive && speechState.isPlaying ? (
                          <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                        ) : (
                          <Play className="w-3 h-3 ml-0.5" />
                        )}
                      </button>
                      <p className="flex-1 font-serif text-slate-800 font-medium leading-relaxed">
                        {p}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Moral of the Story Card (also narrated automatically as the final part) */}
            {(() => {
              const moralIdx = bodyParagraphs.length;
              const isMoralActive = activeParaIndex === moralIdx && speechState.isPlaying;
              return (
                <div
                  ref={isMoralActive ? activeParagraphRef : null}
                  onClick={() => startFromParagraph(moralIdx)}
                  className={`rounded-2xl p-5 transition-all cursor-pointer border ${
                    isMoralActive
                      ? 'bg-amber-200/90 border-amber-600 shadow-md ring-2 ring-amber-500/40'
                      : 'bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 hover:border-amber-400'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 font-bold shadow-xs">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-extrabold text-xs uppercase tracking-wider text-amber-900">
                        {selectedLanguage === 'Marathi'
                          ? 'या कथेतून शिवरायांची शिकवण (Moral Lesson):'
                          : selectedLanguage === 'Hindi'
                          ? 'इस प्रसंग की अमर सीख (Moral Lesson):'
                          : 'Moral of this Chapter:'}
                      </h4>
                      <p className="text-sm sm:text-base font-bold text-amber-950 mt-1 leading-snug">
                        &ldquo;{moralText}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Story Navigation Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-amber-100">
              <button
                onClick={() => {
                  if (activeStoryIndex > 0) setActiveStoryIndex(activeStoryIndex - 1);
                }}
                disabled={activeStoryIndex === 0}
                className="px-4 py-2 rounded-xl border border-amber-200 bg-white hover:bg-amber-50 text-slate-700 font-bold text-xs flex items-center gap-1.5 disabled:opacity-40 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous Story
              </button>

              <button
                onClick={() => markAsCompleted(currentStory.id)}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <CheckCircle className="w-4 h-4" />
                Mark Story Completed
              </button>

              <button
                onClick={() => {
                  if (activeStoryIndex < SHIVAJI_STORIES.length - 1) setActiveStoryIndex(activeStoryIndex + 1);
                }}
                disabled={activeStoryIndex >= SHIVAJI_STORIES.length - 1}
                className="px-4 py-2 rounded-xl border border-amber-200 bg-white hover:bg-amber-50 text-slate-700 font-bold text-xs flex items-center gap-1.5 disabled:opacity-40 cursor-pointer"
              >
                Next Story
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: 50 Stories Chronological Index (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-3xl p-5 border border-amber-200 shadow-md space-y-4 sticky top-24">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-display font-extrabold text-slate-900 text-sm">
                <BookOpen className="w-4 h-4 text-amber-600" />
                <span>५० अमृतकथांची अनुक्रमणिका</span>
              </div>
              <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                1630 - 1680 CE
              </span>
            </div>

            {/* Search stories */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search story, fort, or year..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-amber-50/50 border border-amber-200 focus:outline-hidden focus:border-amber-400"
              />
            </div>

            {/* Scrollable List of 50 Stories */}
            <div className="max-h-[560px] overflow-y-auto space-y-2 pr-1 custom-scrollbar">
              {filteredStories.map(story => {
                const isSelected = SHIVAJI_STORIES[activeStoryIndex]?.id === story.id;
                const isDone = completedStories[story.id];

                return (
                  <button
                    key={story.id}
                    onClick={() => {
                      const idx = SHIVAJI_STORIES.findIndex(s => s.id === story.id);
                      if (idx !== -1) setActiveStoryIndex(idx);
                    }}
                    className={`w-full text-left p-3 rounded-2xl transition-all cursor-pointer border flex items-center justify-between gap-2.5 ${
                      isSelected
                        ? 'bg-amber-100/90 border-amber-400 text-amber-950 font-bold shadow-xs'
                        : 'bg-white hover:bg-amber-50/70 border-amber-100 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      <span
                        className={`w-7 h-7 rounded-lg text-xs font-extrabold flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-900'
                        }`}
                      >
                        {story.order}
                      </span>
                      <div className="overflow-hidden">
                        <p className="text-xs truncate font-bold text-slate-900">
                          {story.title[selectedLanguage]}
                        </p>
                        <p className="text-[10px] text-amber-800 truncate">
                          {story.year} • {story.location}
                        </p>
                      </div>
                    </div>

                    {isDone && <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
