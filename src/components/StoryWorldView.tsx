import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { StoryItem } from '../types';
import { speechService, SpeechParagraphState } from '../services/speechService';
import { 
  BookOpen, 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  CheckCircle, 
  Sparkles, 
  Clock, 
  X, 
  SkipForward, 
  SkipBack, 
  AlertCircle,
  RefreshCw,
  Award
} from 'lucide-react';

export const StoryWorldView: React.FC = () => {
  const { allStories, currentStudent, markStoryCompleted } = useApp();

  const [selectedLanguage, setSelectedLanguage] = useState<'English' | 'Hindi' | 'Marathi'>('English');
  const [selectedStory, setSelectedStory] = useState<StoryItem | null>(null);

  // Audio player state
  const [speechState, setSpeechState] = useState<SpeechParagraphState>({
    isPlaying: false,
    isPaused: false,
    currentParagraphIndex: 0,
    totalParagraphs: 0,
    progressPercent: 0
  });

  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [volume, setVolume] = useState<number>(1.0);

  // Comprehension quiz inside story reader
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // Ref to active paragraph to scroll smoothly into view during long stories
  const activeParagraphRef = useRef<HTMLParagraphElement | null>(null);

  // Stop audio on unmount or story change
  useEffect(() => {
    return () => {
      speechService.stop();
    };
  }, []);

  useEffect(() => {
    speechService.stop();
    setSpeechState({
      isPlaying: false,
      isPaused: false,
      currentParagraphIndex: 0,
      totalParagraphs: 0,
      progressPercent: 0
    });
    setQuizAnswers({});
    setQuizSubmitted(false);
  }, [selectedStory]);

  // Keep active paragraph in view if speaking
  useEffect(() => {
    if (speechState.isPlaying && activeParagraphRef.current) {
      activeParagraphRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [speechState.currentParagraphIndex, speechState.isPlaying]);

  const filteredStories = allStories.filter(s => s.language === selectedLanguage);

  // Assemble full narrative paragraphs: [Title, ...content, Moral]
  const getStoryParagraphs = (story: StoryItem): string[] => {
    const list: string[] = [];
    list.push(story.title);
    story.content.forEach(p => list.push(p));
    list.push(`Moral of the story: ${story.moral}`);
    return list;
  };

  const handlePlayAudio = () => {
    if (!selectedStory) return;

    if (speechState.isPaused) {
      speechService.resume();
      return;
    }

    const paragraphs = getStoryParagraphs(selectedStory);
    speechService.setRate(playbackSpeed);
    speechService.setVolume(volume);

    speechService.startStoryNarration(
      paragraphs,
      selectedStory.language,
      (state) => {
        setSpeechState(state);
      },
      () => {
        // Complete story audio finished!
        markStoryCompleted(selectedStory.id);
      }
    );
  };

  const handlePauseAudio = () => {
    speechService.pause();
  };

  const handleResumeAudio = () => {
    speechService.resume();
  };

  const handleRestartAudio = () => {
    speechService.restart();
  };

  const handleForwardParagraph = () => {
    speechService.nextParagraph();
  };

  const handleRewindParagraph = () => {
    speechService.previousParagraph();
  };

  const handleSpeedChange = (newSpeed: number) => {
    setPlaybackSpeed(newSpeed);
    speechService.setRate(newSpeed);
  };

  const handleRetryAudio = () => {
    speechService.retry();
  };

  const handleSelectQuizOption = (questionId: string, optionIndex: number) => {
    if (quizSubmitted) return;
    setQuizAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmitStoryQuiz = () => {
    setQuizSubmitted(true);
    if (selectedStory) {
      markStoryCompleted(selectedStory.id);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-16">
      {/* Header and Language Selector */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📚</span>
              <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
                Story World (45 Complete Audio Stories)
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              Read, listen to continuous Indian voice narration with paragraph highlighting, and complete quizzes!
            </p>
          </div>

          {/* Stories completed count badge */}
          <div className="bg-amber-100/70 border border-amber-300 text-amber-900 px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-bold self-start sm:self-auto">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>{currentStudent?.completedStoryIds.length || 0} / 45 Stories Completed</span>
          </div>
        </div>

        {/* 3 Language Tabs: English (15), Hindi (15), Marathi (15) */}
        <div className="flex items-center gap-2 bg-amber-50 p-1.5 rounded-2xl border border-amber-200 max-w-md">
          <button
            onClick={() => setSelectedLanguage('English')}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${selectedLanguage === 'English' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:text-amber-900'}`}
          >
            English (15 Stories)
          </button>
          <button
            onClick={() => setSelectedLanguage('Hindi')}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${selectedLanguage === 'Hindi' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:text-amber-900'}`}
          >
            हिन्दी (15 कहानियाँ)
          </button>
          <button
            onClick={() => setSelectedLanguage('Marathi')}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${selectedLanguage === 'Marathi' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:text-amber-900'}`}
          >
            मराठी (15 गोष्टी)
          </button>
        </div>
      </div>

      {/* Story Cards Grid (15 items per tab) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredStories.map((story, idx) => {
          const isCompleted = currentStudent?.completedStoryIds.includes(story.id);

          return (
            <div
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className="group bg-white rounded-3xl p-6 border border-amber-200/80 shadow-xs hover:shadow-lg hover:border-amber-400 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-full">
                    Story #{idx + 1} • {story.classRecommendation}
                  </span>
                  {isCompleted && (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle className="w-3 h-3" />
                      Completed
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-amber-800 transition-colors mb-2 leading-snug">
                  {story.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4 font-normal">
                  {story.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700">
                <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  {story.estimatedReadMinutes} min read
                </span>
                <span className="flex items-center gap-1 text-amber-700 group-hover:translate-x-1 transition-transform">
                  Full Audio Story 🎧
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* COMPLETE STORY READER & AUDIO NARRATION MODAL */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-amber-300 max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white p-5 sm:p-6 flex items-center justify-between shrink-0 shadow-xs">
              <div>
                <span className="bg-white/20 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
                  {selectedStory.language} Story World
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-extrabold mt-1">
                  {selectedStory.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedStory(null)}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Complete Audio Narration Toolbar (Requirements 1-10) */}
            <div className="bg-amber-100/90 px-4 sm:px-6 py-3 border-b border-amber-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
              {/* Playback Controls: Rewind, Play/Pause/Resume, Forward, Restart */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* Rewind paragraph */}
                <button
                  onClick={handleRewindParagraph}
                  disabled={speechState.currentParagraphIndex === 0}
                  className="p-2 rounded-xl bg-white/90 hover:bg-white text-slate-700 text-xs border border-amber-300 disabled:opacity-40 cursor-pointer"
                  title="Rewind to previous paragraph"
                >
                  <SkipBack className="w-4 h-4 text-amber-900" />
                </button>

                {/* Play / Pause / Resume */}
                {!speechState.isPlaying ? (
                  <button
                    onClick={speechState.isPaused ? handleResumeAudio : handlePlayAudio}
                    className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-2 shadow-xs cursor-pointer transition-colors"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>{speechState.isPaused ? 'Resume' : 'Play Narration'}</span>
                  </button>
                ) : (
                  <button
                    onClick={handlePauseAudio}
                    className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs flex items-center gap-2 shadow-xs cursor-pointer transition-colors"
                  >
                    <Pause className="w-4 h-4 fill-white" />
                    <span>Pause</span>
                  </button>
                )}

                {/* Forward paragraph */}
                <button
                  onClick={handleForwardParagraph}
                  disabled={speechState.currentParagraphIndex >= (selectedStory.content.length + 1)}
                  className="p-2 rounded-xl bg-white/90 hover:bg-white text-slate-700 text-xs border border-amber-300 disabled:opacity-40 cursor-pointer"
                  title="Skip to next paragraph"
                >
                  <SkipForward className="w-4 h-4 text-amber-900" />
                </button>

                {/* Restart story audio */}
                <button
                  onClick={handleRestartAudio}
                  className="p-2 rounded-xl bg-white/90 hover:bg-white text-slate-700 text-xs border border-amber-300 cursor-pointer"
                  title="Restart story from beginning"
                >
                  <RotateCcw className="w-4 h-4 text-amber-900" />
                </button>
              </div>

              {/* Progress & Paragraph indicator */}
              {speechState.isPlaying && (
                <div className="flex items-center gap-2 text-xs font-bold text-amber-900 bg-amber-200/80 px-3 py-1 rounded-full border border-amber-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>
                    Narrating Para {speechState.currentParagraphIndex} of {selectedStory.content.length + 1}
                  </span>
                </div>
              )}

              {/* Speed controls (0.75x, 1x, 1.25x, 1.5x) */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-xs font-bold text-slate-700 bg-white/90 px-2.5 py-1 rounded-xl border border-amber-300">
                  <span className="text-slate-500">Speed:</span>
                  <select
                    value={playbackSpeed}
                    onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
                    className="bg-transparent font-bold text-amber-900 focus:outline-hidden cursor-pointer"
                  >
                    <option value="0.75">0.75x</option>
                    <option value="1.0">1.0x (Normal)</option>
                    <option value="1.25">1.25x</option>
                    <option value="1.5">1.5x</option>
                  </select>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[11px] font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-xl border border-amber-200">
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>
                    {selectedStory.language === 'English' ? 'Indian English' : selectedStory.language === 'Hindi' ? 'Indian Hindi' : 'Marathi Voice'}
                  </span>
                </div>
              </div>
            </div>

            {/* Audio Error with Retry Banner if needed */}
            {speechState.error && (
              <div className="bg-red-50 border-b border-red-200 p-3 px-6 flex items-center justify-between text-xs text-red-700">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{speechState.error}</span>
                </div>
                <button
                  onClick={handleRetryAudio}
                  className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Retry Audio</span>
                </button>
              </div>
            )}

            {/* Scrollable Story Content & Comprehension */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {/* Full Story Paragraphs with Synchronized Paragraph Highlighting */}
              <div className="space-y-4 text-slate-800 text-sm sm:text-base leading-relaxed font-serif">
                {selectedStory.content.map((para, i) => {
                  const paraIndexInSpeech = i + 1; // 0 is title, 1..N is content, N+1 is moral
                  const isCurrentActive = speechState.isPlaying && speechState.currentParagraphIndex === paraIndexInSpeech;

                  return (
                    <p
                      key={i}
                      ref={isCurrentActive ? activeParagraphRef : null}
                      onClick={() => speechService.jumpToParagraph(paraIndexInSpeech)}
                      className={`text-justify p-3 rounded-2xl transition-all cursor-pointer ${
                        isCurrentActive 
                          ? 'bg-amber-100/90 border-2 border-amber-500 shadow-sm text-slate-950 font-medium scale-[1.01]' 
                          : 'hover:bg-amber-50/50 border border-transparent'
                      }`}
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-200 text-amber-900 text-[10px] font-sans font-bold mr-2 align-middle">
                        {i + 1}
                      </span>
                      {para}
                    </p>
                  );
                })}
              </div>

              {/* Moral of the Story Card (narrated as last paragraph) */}
              {(() => {
                const moralParaIndex = selectedStory.content.length + 1;
                const isMoralActive = speechState.isPlaying && speechState.currentParagraphIndex === moralParaIndex;

                return (
                  <div 
                    onClick={() => speechService.jumpToParagraph(moralParaIndex)}
                    className={`p-5 rounded-2xl transition-all cursor-pointer ${
                      isMoralActive 
                        ? 'bg-amber-200 border-2 border-amber-600 shadow-md scale-[1.01]' 
                        : 'bg-amber-50 border-2 border-amber-300/80'
                    }`}
                  >
                    <span className="text-xs font-extrabold uppercase tracking-wider text-amber-900 flex items-center gap-1.5 mb-1">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      Moral & Learning Message
                    </span>
                    <p className="text-amber-950 font-bold text-sm sm:text-base leading-snug">
                      "{selectedStory.moral}"
                    </p>
                  </div>
                );
              })()}

              {/* Important Vocabulary Cards */}
              <div className="space-y-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">
                  Important Vocabulary & Meanings
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedStory.vocabulary.map((vocab, vIdx) => (
                    <div key={vIdx} className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
                      <span className="font-bold text-amber-900 block">{vocab.word}</span>
                      <span className="text-slate-600">{vocab.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5 Comprehension Questions */}
              <div className="pt-6 border-t border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-base sm:text-lg text-slate-900">
                    5 Comprehension Questions
                  </h4>
                  <span className="text-xs text-slate-500">Test your reading comprehension</span>
                </div>

                <div className="space-y-4">
                  {selectedStory.questions.map((q, qIndex) => {
                    const chosen = quizAnswers[q.id];
                    return (
                      <div key={q.id} className="p-4 rounded-2xl bg-amber-50/40 border border-amber-200/80 space-y-2.5 text-xs sm:text-sm">
                        <p className="font-bold text-slate-900">
                          {qIndex + 1}. {q.question}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {q.options.map((opt, optIndex) => {
                            const isChosen = chosen === optIndex;
                            const isCorrect = optIndex === q.correctIndex;

                            let btnStyle = 'bg-white border-slate-200 text-slate-700 hover:border-amber-300';
                            if (quizSubmitted) {
                              if (isCorrect) {
                                btnStyle = 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold';
                              } else if (isChosen && !isCorrect) {
                                btnStyle = 'bg-red-100 border-red-300 text-red-900 font-bold';
                              } else {
                                btnStyle = 'bg-white/50 border-slate-200 text-slate-400';
                              }
                            } else if (isChosen) {
                              btnStyle = 'bg-amber-600 border-amber-600 text-white font-bold';
                            }

                            return (
                              <button
                                key={optIndex}
                                disabled={quizSubmitted}
                                onClick={() => handleSelectQuizOption(q.id, optIndex)}
                                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between text-xs ${btnStyle}`}
                              >
                                <span>{String.fromCharCode(65 + optIndex)}. {opt}</span>
                                {quizSubmitted && isCorrect && <CheckCircle className="w-3.5 h-3.5 text-emerald-700" />}
                              </button>
                            );
                          })}
                        </div>

                        {quizSubmitted && (
                          <div className="p-2.5 rounded-xl bg-white border border-amber-200 text-xs text-slate-600">
                            <strong className="text-amber-900">Explanation: </strong>
                            {q.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {!quizSubmitted ? (
                  <button
                    onClick={handleSubmitStoryQuiz}
                    disabled={Object.keys(quizAnswers).length < selectedStory.questions.length}
                    className="w-full py-3.5 rounded-2xl bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Award className="w-4 h-4" />
                    <span>Submit Story Quiz & Earn 25 Champion Points</span>
                  </button>
                ) : (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-1">
                    <p className="font-bold text-emerald-900 text-sm">
                      🎉 Great reading! Story and comprehension questions completed!
                    </p>
                    <p className="text-xs text-emerald-700">
                      Points added to your Champion Profile.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
