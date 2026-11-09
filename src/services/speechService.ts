// Enhanced Natural Voice Narration Service with Paragraph-by-Paragraph Chaining,
// Speech Keep-Alive Watchdog, Speed Modulation, Forward/Rewind, and Multilingual Indian Voices

export interface SpeechParagraphState {
  isPlaying: boolean;
  isPaused: boolean;
  currentParagraphIndex: number;
  totalParagraphs: number;
  progressPercent: number;
  error?: string;
}

export type StoryLanguage = 'English' | 'Hindi' | 'Marathi';

export class SpeechNarrator {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  
  // Paragraph-by-paragraph queue
  private paragraphs: string[] = [];
  private currentLang: StoryLanguage = 'English';
  private activeParagraphIndex: number = 0;
  private isPlaying: boolean = false;
  private isPaused: boolean = false;
  private rate: number = 1.0;
  private volume: number = 1.0;
  private onStateChange?: (state: SpeechParagraphState) => void;
  private onCompleteCallback?: () => void;
  private watchdogTimer: any = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
  }

  public getAvailableVoices(lang: StoryLanguage): SpeechSynthesisVoice[] {
    if (!this.synth) return [];
    if (this.voices.length === 0) {
      this.voices = this.synth.getVoices();
    }

    if (lang === 'English') {
      // Prioritize natural Indian English voices (en-IN)
      const indian = this.voices.filter(
        v => v.lang.includes('en-IN') || 
             v.name.toLowerCase().includes('india') || 
             v.name.toLowerCase().includes('ravi') || 
             v.name.toLowerCase().includes('heera') ||
             v.name.toLowerCase().includes('neerja')
      );
      if (indian.length > 0) return indian;
      return this.voices.filter(v => v.lang.startsWith('en'));
    }

    if (lang === 'Hindi') {
      const hindi = this.voices.filter(
        v => v.lang.includes('hi') || 
             v.name.toLowerCase().includes('hindi') || 
             v.name.toLowerCase().includes('kalpana') || 
             v.name.toLowerCase().includes('madhav')
      );
      if (hindi.length > 0) return hindi;
    }

    if (lang === 'Marathi') {
      const marathi = this.voices.filter(
        v => v.lang.includes('mr') || 
             v.name.toLowerCase().includes('marathi')
      );
      if (marathi.length > 0) return marathi;
      // High-quality Devanagari fallback: Indian Hindi voice matches Marathi phonetics smoothly
      return this.voices.filter(v => v.lang.includes('hi'));
    }

    return this.voices;
  }

  /**
   * Initializes story narration with a list of paragraphs (title, body paragraphs, moral).
   */
  public startStoryNarration(
    paragraphs: string[],
    lang: StoryLanguage,
    onStateUpdate: (state: SpeechParagraphState) => void,
    onFinished?: () => void
  ) {
    this.stop();
    this.paragraphs = paragraphs.filter(p => p && p.trim().length > 0);
    this.currentLang = lang;
    this.activeParagraphIndex = 0;
    this.onStateChange = onStateUpdate;
    this.onCompleteCallback = onFinished;
    this.isPlaying = true;
    this.isPaused = false;

    if (this.paragraphs.length === 0) {
      this.notifyState();
      return;
    }

    this.speakCurrentParagraph();
  }

  private speakCurrentParagraph() {
    if (!this.synth) {
      this.notifyState('Speech synthesis is not supported on this browser.');
      return;
    }

    if (this.activeParagraphIndex >= this.paragraphs.length) {
      // Completed all paragraphs from beginning to end!
      this.isPlaying = false;
      this.isPaused = false;
      this.notifyState();
      this.onCompleteCallback?.();
      return;
    }

    // Cancel any previous utterance safely
    if (this.synth.speaking) {
      this.synth.cancel();
    }

    const paragraphText = this.paragraphs[this.activeParagraphIndex];
    const utterance = new SpeechSynthesisUtterance(paragraphText);
    this.currentUtterance = utterance;

    const voices = this.getAvailableVoices(this.currentLang);
    if (voices.length > 0) {
      utterance.voice = voices[0];
    }

    // Set precise BCP-47 tag
    if (this.currentLang === 'English') utterance.lang = 'en-IN';
    else if (this.currentLang === 'Hindi') utterance.lang = 'hi-IN';
    else if (this.currentLang === 'Marathi') utterance.lang = 'mr-IN';

    utterance.rate = this.rate;
    utterance.volume = this.volume;
    utterance.pitch = 1.05; // Cheerful, warm storytelling tone

    utterance.onstart = () => {
      this.isPlaying = true;
      this.isPaused = false;
      this.notifyState();
      this.startWatchdog();
    };

    utterance.onpause = () => {
      this.isPaused = true;
      this.notifyState();
    };

    utterance.onresume = () => {
      this.isPaused = false;
      this.notifyState();
    };

    utterance.onend = () => {
      this.clearWatchdog();
      if (this.isPlaying && !this.isPaused) {
        // Advance automatically to the next paragraph seamlessly
        this.activeParagraphIndex++;
        // Small 300ms natural breathing pause between paragraphs
        setTimeout(() => {
          if (this.isPlaying && !this.isPaused) {
            this.speakCurrentParagraph();
          }
        }, 320);
      }
    };

    utterance.onerror = (e) => {
      console.warn('Speech narration notice:', e);
      this.clearWatchdog();
      // On error, allow user retry or continue
      if (e.error !== 'canceled' && e.error !== 'interrupted') {
        this.notifyState(`Audio playback issue (${e.error}). Click Retry.`);
      }
    };

    this.synth.speak(utterance);
  }

  // Prevents mobile/Chrome speech synthesis engine from stalling after 15 seconds
  private startWatchdog() {
    this.clearWatchdog();
    this.watchdogTimer = setInterval(() => {
      if (this.synth && this.synth.speaking && !this.synth.paused) {
        this.synth.pause();
        this.synth.resume();
      }
    }, 10000);
  }

  private clearWatchdog() {
    if (this.watchdogTimer) {
      clearInterval(this.watchdogTimer);
      this.watchdogTimer = null;
    }
  }

  private notifyState(error?: string) {
    const total = Math.max(1, this.paragraphs.length);
    const progress = Math.min(100, Math.round(((this.activeParagraphIndex + 1) / total) * 100));

    this.onStateChange?.({
      isPlaying: this.isPlaying,
      isPaused: this.isPaused,
      currentParagraphIndex: this.activeParagraphIndex,
      totalParagraphs: this.paragraphs.length,
      progressPercent: progress,
      error
    });
  }

  public pause() {
    if (this.synth && this.synth.speaking && !this.synth.paused) {
      this.synth.pause();
      this.isPaused = true;
      this.notifyState();
    }
  }

  public resume() {
    if (this.synth && this.isPaused) {
      this.isPaused = false;
      this.isPlaying = true;
      this.synth.resume();
      this.notifyState();
    } else if (!this.isPlaying && this.paragraphs.length > 0) {
      this.isPlaying = true;
      this.speakCurrentParagraph();
    }
  }

  public restart() {
    this.activeParagraphIndex = 0;
    this.isPlaying = true;
    this.isPaused = false;
    this.speakCurrentParagraph();
  }

  public nextParagraph() {
    if (this.activeParagraphIndex < this.paragraphs.length - 1) {
      this.activeParagraphIndex++;
      this.isPlaying = true;
      this.isPaused = false;
      this.speakCurrentParagraph();
    }
  }

  public previousParagraph() {
    if (this.activeParagraphIndex > 0) {
      this.activeParagraphIndex--;
      this.isPlaying = true;
      this.isPaused = false;
      this.speakCurrentParagraph();
    } else {
      this.restart();
    }
  }

  public jumpToParagraph(index: number) {
    if (index >= 0 && index < this.paragraphs.length) {
      this.activeParagraphIndex = index;
      this.isPlaying = true;
      this.isPaused = false;
      this.speakCurrentParagraph();
    }
  }

  public setRate(newRate: number) {
    this.rate = Math.max(0.75, Math.min(1.5, newRate));
    // If currently speaking, restart ONLY current paragraph at new speed without restarting the whole story
    if (this.synth && this.synth.speaking) {
      this.speakCurrentParagraph();
    }
  }

  public setVolume(newVolume: number) {
    this.volume = Math.max(0, Math.min(1.0, newVolume));
    if (this.currentUtterance) {
      this.currentUtterance.volume = this.volume;
    }
  }

  public stop() {
    this.clearWatchdog();
    if (this.synth) {
      this.synth.cancel();
      this.currentUtterance = null;
    }
    this.isPlaying = false;
    this.isPaused = false;
    this.notifyState();
  }

  public retry() {
    this.speakCurrentParagraph();
  }

  public isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }
}

export const speechService = new SpeechNarrator();
