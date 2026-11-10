// Enhanced Natural Female Voice Narration Service
// Supports Fluent English, Marathi, and Hindi Story Narration from Beginning to End
// Includes Anti-GC Utterance Retention, Cancel-Delay Protection, Chrome Keep-Alive, and Seamless Pause/Resume/Restart

export interface SpeechParagraphState {
  isPlaying: boolean;
  isPaused: boolean;
  currentParagraphIndex: number;
  totalParagraphs: number;
  progressPercent: number;
  voiceName?: string;
  error?: string;
}

export type StoryLanguage = 'English' | 'Hindi' | 'Marathi';

export class SpeechNarrator {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  // Retain references to prevent browser Garbage Collection from dropping onend events
  private utterancePool: SpeechSynthesisUtterance[] = [];
  private voices: SpeechSynthesisVoice[] = [];

  // Paragraph and sentence queue
  private paragraphs: string[] = [];
  private currentSentences: string[] = [];
  private currentSentenceIndex: number = 0;
  private currentLang: StoryLanguage = 'English';
  private activeParagraphIndex: number = 0;
  private isPlaying: boolean = false;
  private isPaused: boolean = false;
  private rate: number = 0.95;
  private volume: number = 1.0;
  private sessionToken: number = 0;
  private sentenceTimer: any = null;
  private watchdogTimer: any = null;
  private keepAliveInterval: any = null;
  private retriedFallbackForSentence: boolean = false;
  private onStateChange?: (state: SpeechParagraphState) => void;
  private onCompleteCallback?: () => void;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices(): SpeechSynthesisVoice[] {
    if (!this.synth) return [];
    try {
      const loaded = this.synth.getVoices();
      if (loaded && loaded.length > 0) {
        this.voices = loaded;
      }
    } catch (e) {
      console.warn('Unable to load speech voices:', e);
    }
    return this.voices;
  }

  private async ensureVoicesLoaded(): Promise<void> {
    if (!this.synth) return;
    if (this.loadVoices().length > 0) return;

    await new Promise<void>(resolve => {
      let attempts = 0;
      const timer = setInterval(() => {
        attempts++;
        if (this.loadVoices().length > 0 || attempts >= 8) {
          clearInterval(timer);
          resolve();
        }
      }, 50);
    });
  }

  /**
   * Selects a natural, sweet, polite, clear FEMALE voice for English, Marathi, or Hindi.
   */
  public selectBestVoice(lang: StoryLanguage): SpeechSynthesisVoice | null {
    if (!this.synth) return null;
    if (this.voices.length === 0) {
      this.loadVoices();
    }
    if (this.voices.length === 0) return null;

    const isExplicitMaleName = (name: string) => {
      const n = name.toLowerCase();
      return (
        (/\bmale\b/.test(n) && !n.includes('female')) ||
        n.includes('madhav') ||
        n.includes('hemant') ||
        n.includes('prabhat') ||
        n.includes('ravi') ||
        n.includes('rishi') ||
        n.includes('valluvar') ||
        n.includes('david') ||
        n.includes('mark') ||
        n.includes('george') ||
        n.includes('daniel') ||
        n.includes('james') ||
        n.includes('richard') ||
        n.includes('guy') ||
        n.includes('christopher') ||
        n.includes('eric') ||
        n.includes('roger') ||
        n.includes('steffan') ||
        n.includes('alex') ||
        n.includes('fred') ||
        n.includes('thomas') ||
        n.includes('oliver')
      );
    };

    const isPreferredSweetFemaleName = (name: string) => {
      const n = name.toLowerCase();
      return (
        n.includes('female') ||
        n.includes('aarohi') ||
        n.includes('manasi') ||
        n.includes('swara') ||
        n.includes('kalpana') ||
        n.includes('neerja') ||
        n.includes('heera') ||
        n.includes('veena') ||
        n.includes('lekha') ||
        n.includes('kanya') ||
        n.includes('sangeeta') ||
        n.includes('samantha') ||
        n.includes('sonia') ||
        n.includes('aria') ||
        n.includes('jenny') ||
        n.includes('libby') ||
        n.includes('clara') ||
        n.includes('natasha') ||
        n.includes('karen') ||
        n.includes('moira') ||
        n.includes('tessa') ||
        n.includes('victoria') ||
        n.includes('zira')
      );
    };

    if (lang === 'Marathi') {
      // 1. Native Marathi (mr-IN) female voice (e.g. Microsoft Aarohi, Google मराठी, Manasi)
      const mrVoices = this.voices.filter(
        v =>
          v.lang.toLowerCase().startsWith('mr') ||
          v.name.toLowerCase().includes('marathi') ||
          v.name.includes('मराठी')
      );
      const mrSweetFemale = mrVoices.find(v => isPreferredSweetFemaleName(v.name) && !isExplicitMaleName(v.name));
      if (mrSweetFemale) return mrSweetFemale;

      const mrGoogleOrDefaultFemale = mrVoices.find(v => !isExplicitMaleName(v.name));
      if (mrGoogleOrDefaultFemale) return mrGoogleOrDefaultFemale;
      if (mrVoices.length > 0) return mrVoices[0];

      // 2. Fluent Devanagari Female voice fallback (Swara / Kalpana / Lekha / Google हिन्दी)
      const hiVoices = this.voices.filter(
        v =>
          v.lang.toLowerCase().startsWith('hi') ||
          v.name.toLowerCase().includes('hindi') ||
          v.name.includes('हिन्दी') ||
          v.name.toLowerCase().includes('lekha')
      );
      const hiSweetFemale = hiVoices.find(v => isPreferredSweetFemaleName(v.name) && !isExplicitMaleName(v.name));
      if (hiSweetFemale) return hiSweetFemale;

      const hiNonMale = hiVoices.find(v => !isExplicitMaleName(v.name));
      if (hiNonMale) return hiNonMale;
      if (hiVoices.length > 0) return hiVoices[0];
    }

    if (lang === 'Hindi') {
      const hiVoices = this.voices.filter(
        v =>
          v.lang.toLowerCase().startsWith('hi') ||
          v.name.toLowerCase().includes('hindi') ||
          v.name.includes('हिन्दी')
      );
      const hiSweetFemale = hiVoices.find(v => isPreferredSweetFemaleName(v.name) && !isExplicitMaleName(v.name));
      if (hiSweetFemale) return hiSweetFemale;

      const hiNonMale = hiVoices.find(v => !isExplicitMaleName(v.name));
      if (hiNonMale) return hiNonMale;
      if (hiVoices.length > 0) return hiVoices[0];
    }

    if (lang === 'English') {
      const allEnVoices = this.voices.filter(v => v.lang.toLowerCase().startsWith('en'));

      // 1. Prioritize sweet, polite Indian English Female voices (Neerja, Heera, Veena, en-IN female)
      const enInVoices = allEnVoices.filter(
        v =>
          v.lang.toLowerCase().includes('en-in') ||
          v.name.toLowerCase().includes('india') ||
          v.name.toLowerCase().includes('neerja') ||
          v.name.toLowerCase().includes('heera') ||
          v.name.toLowerCase().includes('veena')
      );
      const enInSweetFemale = enInVoices.find(v => isPreferredSweetFemaleName(v.name) && !isExplicitMaleName(v.name));
      if (enInSweetFemale) return enInSweetFemale;

      const enInNonMale = enInVoices.find(v => !isExplicitMaleName(v.name));
      if (enInNonMale) return enInNonMale;

      // 2. Expressive UK/US/AU Female voices (Google UK English Female, Sonia, Aria, Jenny, Samantha, Victoria, Karen, Zira)
      const sweetGlobalFemale = allEnVoices.find(
        v =>
          (v.name.toLowerCase().includes('google uk english female') ||
            isPreferredSweetFemaleName(v.name)) &&
          !isExplicitMaleName(v.name)
      );
      if (sweetGlobalFemale) return sweetGlobalFemale;

      // 3. Google US English or any non-male English voice
      const googleEn = allEnVoices.find(v => v.name.toLowerCase().includes('google') && !isExplicitMaleName(v.name));
      if (googleEn) return googleEn;

      const anyEnNonMale = allEnVoices.find(v => !isExplicitMaleName(v.name));
      if (anyEnNonMale) return anyEnNonMale;

      if (allEnVoices.length > 0) return allEnVoices[0];
    }

    return this.voices.find(v => !isExplicitMaleName(v.name)) || this.voices[0] || null;
  }

  /**
   * Cleans text and splits a paragraph into natural sentence chunks so
   * browser SpeechSynthesis never cuts off long paragraphs and pauses naturally.
   */
  private splitIntoExpressiveSentences(paragraph: string, lang: StoryLanguage): string[] {
    let cleaned = paragraph
      .replace(/\s+/g, ' ')
      .replace(/["“”‘’]/g, '')
      .replace(/—/g, ', ')
      .replace(/–/g, ', ')
      .trim();

    if (lang === 'Marathi' || lang === 'Hindi') {
      // Normalize Devanagari danda & punctuation for natural Marathi/Hindi breathing pauses
      cleaned = cleaned
        .replace(/॥/g, '।')
        .replace(/\s*।\s*/g, '। ')
        .replace(/:\s*/g, ', ');
    }

    // Split on sentence boundaries (., !, ?, ।) keeping the delimiter
    const rawParts = cleaned
      .split(/(?<=[.!?।])\s+/)
      .map(s => s.trim())
      .filter(s => s.length > 0);

    const finalChunks: string[] = [];
    for (const part of rawParts) {
      if (part.length <= 145) {
        finalChunks.push(part);
      } else {
        // Further split long sentences on commas/semicolons for natural breathing pauses and to avoid 15s cutoff
        const subParts = part
          .split(/(?<=[,;:])\s+/)
          .map(s => s.trim())
          .filter(s => s.length > 0);
        let buffer = '';
        for (const sub of subParts) {
          if ((buffer + ' ' + sub).trim().length <= 135) {
            buffer = (buffer + ' ' + sub).trim();
          } else {
            if (buffer) finalChunks.push(buffer);
            buffer = sub;
          }
        }
        if (buffer) finalChunks.push(buffer);
      }
    }

    return finalChunks.length > 0 ? finalChunks : [cleaned];
  }

  /**
   * Starts full story narration across all paragraphs from startIndex (default 0).
   */
  public async startStoryNarration(
    paragraphs: string[],
    lang: StoryLanguage,
    onStateUpdate: (state: SpeechParagraphState) => void,
    onFinished?: () => void,
    startIndex: number = 0
  ) {
    this.clearTimers();
    const token = ++this.sessionToken;

    if (this.synth && (this.synth.speaking || this.synth.pending || this.synth.paused)) {
      try {
        this.synth.cancel();
      } catch (e) {}
    }

    this.paragraphs = paragraphs.filter(p => p && p.trim().length > 0);
    this.currentLang = lang;
    this.activeParagraphIndex = Math.max(0, Math.min(startIndex, this.paragraphs.length - 1));
    this.onStateChange = onStateUpdate;
    this.onCompleteCallback = onFinished;
    this.isPlaying = true;
    this.isPaused = false;
    this.utterancePool = [];

    if (this.paragraphs.length === 0) {
      this.isPlaying = false;
      this.notifyState();
      return;
    }

    this.notifyState();
    await this.ensureVoicesLoaded();
    if (token !== this.sessionToken) return;

    this.startKeepAlive();

    // Small 65ms delay after cancel() prevents Chromium from swallowing the first speak() call
    this.sentenceTimer = setTimeout(() => {
      if (token === this.sessionToken && this.isPlaying && !this.isPaused) {
        this.prepareAndSpeakParagraph(token);
      }
    }, 65);
  }

  private startKeepAlive() {
    if (this.keepAliveInterval) {
      clearInterval(this.keepAliveInterval);
    }
    // Workaround for Chromium's 14-second SpeechSynthesis freeze bug
    this.keepAliveInterval = setInterval(() => {
      if (this.synth && this.isPlaying && !this.isPaused && this.synth.speaking) {
        try {
          this.synth.pause();
          this.synth.resume();
        } catch (e) {}
      }
    }, 10000);
  }

  private prepareAndSpeakParagraph(token: number) {
    if (token !== this.sessionToken) return;

    if (!this.synth) {
      this.isPlaying = false;
      this.notifyState('Text-to-Speech is not supported on this browser.');
      return;
    }

    if (this.activeParagraphIndex >= this.paragraphs.length) {
      this.clearTimers();
      this.isPlaying = false;
      this.isPaused = false;
      this.notifyState();
      this.onCompleteCallback?.();
      return;
    }

    const paragraphText = this.paragraphs[this.activeParagraphIndex];
    this.currentSentences = this.splitIntoExpressiveSentences(paragraphText, this.currentLang);
    this.currentSentenceIndex = 0;
    this.retriedFallbackForSentence = false;

    this.notifyState();
    this.speakCurrentSentence(token);
  }

  private speakCurrentSentence(token: number, useFallbackDefaultVoice: boolean = false) {
    if (token !== this.sessionToken || !this.synth) return;

    if (this.watchdogTimer) {
      clearTimeout(this.watchdogTimer);
      this.watchdogTimer = null;
    }

    if (this.currentSentenceIndex >= this.currentSentences.length) {
      // Paragraph finished! Advance to next paragraph automatically
      this.activeParagraphIndex++;
      if (this.activeParagraphIndex < this.paragraphs.length) {
        this.sentenceTimer = setTimeout(() => {
          if (token === this.sessionToken && this.isPlaying && !this.isPaused) {
            this.prepareAndSpeakParagraph(token);
          }
        }, 320);
      } else {
        this.clearTimers();
        this.isPlaying = false;
        this.isPaused = false;
        this.notifyState();
        this.onCompleteCallback?.();
      }
      return;
    }

    const sentenceText = this.currentSentences[this.currentSentenceIndex];
    if (!sentenceText || !sentenceText.trim()) {
      this.currentSentenceIndex++;
      this.speakCurrentSentence(token);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(sentenceText);
    this.currentUtterance = utterance;
    // Keep in pool so browser GC never collects active utterance
    this.utterancePool.push(utterance);
    if (this.utterancePool.length > 10) {
      this.utterancePool.shift();
    }

    const selectedVoice = useFallbackDefaultVoice ? null : this.selectBestVoice(this.currentLang);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    if (this.currentLang === 'Marathi') {
      // Important: If using a Devanagari fallback voice (e.g., hi-IN Swara), match its lang tag so TTS never fails
      utterance.lang = selectedVoice?.lang || (useFallbackDefaultVoice ? 'hi-IN' : 'mr-IN');
      // Tuned for sweet, clear, fluent Female Marathi narration
      utterance.pitch = 1.07;
      utterance.rate = Math.max(0.75, Math.min(1.35, this.rate * 0.93));
    } else if (this.currentLang === 'Hindi') {
      utterance.lang = selectedVoice?.lang || 'hi-IN';
      utterance.pitch = 1.06;
      utterance.rate = Math.max(0.75, Math.min(1.4, this.rate * 0.95));
    } else {
      // English: Sweet, polite, clear female storytelling tone
      utterance.lang = selectedVoice?.lang || 'en-US';
      utterance.pitch = 1.06;
      utterance.rate = Math.max(0.75, Math.min(1.4, this.rate * 0.96));
    }

    utterance.volume = this.volume;

    // Watchdog in case browser SpeechSynthesis drops onend for a chunk
    const estimatedMs = Math.max(12000, Math.min(26000, sentenceText.length * 140));
    this.watchdogTimer = setTimeout(() => {
      if (token === this.sessionToken && this.isPlaying && !this.isPaused) {
        this.currentSentenceIndex++;
        this.retriedFallbackForSentence = false;
        this.speakCurrentSentence(token);
      }
    }, estimatedMs);

    utterance.onstart = () => {
      if (token !== this.sessionToken) return;
      this.isPlaying = true;
      this.isPaused = false;
      this.notifyState();
    };

    utterance.onend = () => {
      if (token !== this.sessionToken) return;
      if (this.watchdogTimer) {
        clearTimeout(this.watchdogTimer);
        this.watchdogTimer = null;
      }
      if (this.isPlaying && !this.isPaused) {
        this.currentSentenceIndex++;
        this.retriedFallbackForSentence = false;
        this.sentenceTimer = setTimeout(() => {
          if (token === this.sessionToken && this.isPlaying && !this.isPaused) {
            this.speakCurrentSentence(token);
          }
        }, 140);
      }
    };

    utterance.onerror = (e) => {
      if (token !== this.sessionToken) return;
      if (this.watchdogTimer) {
        clearTimeout(this.watchdogTimer);
        this.watchdogTimer = null;
      }
      if (e.error === 'canceled' || e.error === 'interrupted') {
        return;
      }

      // If a specific voice failed, retry the same sentence once with default voice
      if (!this.retriedFallbackForSentence) {
        this.retriedFallbackForSentence = true;
        this.sentenceTimer = setTimeout(() => {
          if (token === this.sessionToken && this.isPlaying && !this.isPaused) {
            this.speakCurrentSentence(token, true);
          }
        }, 100);
        return;
      }

      // Otherwise advance to the next sentence so the story never stops
      if (this.isPlaying && !this.isPaused) {
        this.currentSentenceIndex++;
        this.retriedFallbackForSentence = false;
        this.sentenceTimer = setTimeout(() => {
          if (token === this.sessionToken && this.isPlaying && !this.isPaused) {
            this.speakCurrentSentence(token);
          }
        }, 160);
      }
    };

    try {
      if (this.synth.paused) {
        this.synth.resume();
      }
      this.synth.speak(utterance);
    } catch (err) {
      console.warn('Speech speak invocation notice:', err);
    }
  }

  private clearTimers() {
    if (this.sentenceTimer) {
      clearTimeout(this.sentenceTimer);
      this.sentenceTimer = null;
    }
    if (this.watchdogTimer) {
      clearTimeout(this.watchdogTimer);
      this.watchdogTimer = null;
    }
    if (this.keepAliveInterval) {
      clearInterval(this.keepAliveInterval);
      this.keepAliveInterval = null;
    }
  }

  private notifyState(error?: string) {
    const total = Math.max(1, this.paragraphs.length);
    const progress =
      this.paragraphs.length === 0
        ? 0
        : Math.min(100, Math.round(((this.activeParagraphIndex + 1) / total) * 100));
    const voice = this.selectBestVoice(this.currentLang);

    const defaultVoiceLabel =
      this.currentLang === 'Marathi'
        ? 'Fluent Female Marathi Voice'
        : this.currentLang === 'Hindi'
        ? 'Sweet Female Hindi Voice'
        : 'Sweet Female English Voice';

    this.onStateChange?.({
      isPlaying: this.isPlaying,
      isPaused: this.isPaused,
      currentParagraphIndex: Math.min(this.activeParagraphIndex, Math.max(0, this.paragraphs.length - 1)),
      totalParagraphs: this.paragraphs.length,
      progressPercent: progress,
      voiceName: voice?.name ? `${voice.name} (Female)` : defaultVoiceLabel,
      error
    });
  }

  public pause() {
    if (this.sentenceTimer) {
      clearTimeout(this.sentenceTimer);
      this.sentenceTimer = null;
    }
    if (this.watchdogTimer) {
      clearTimeout(this.watchdogTimer);
      this.watchdogTimer = null;
    }
    if (this.keepAliveInterval) {
      clearInterval(this.keepAliveInterval);
      this.keepAliveInterval = null;
    }

    if (this.synth && (this.synth.speaking || this.isPlaying)) {
      try {
        this.synth.pause();
      } catch (e) {}
      this.isPaused = true;
      this.isPlaying = false;
      this.notifyState();
    }
  }

  public resume() {
    if (!this.synth) return;
    if (this.isPaused) {
      this.isPaused = false;
      this.isPlaying = true;
      this.startKeepAlive();
      this.notifyState();

      if (this.synth.paused && this.synth.speaking) {
        try {
          this.synth.resume();
        } catch (e) {
          this.speakCurrentSentence(this.sessionToken);
        }
      } else {
        // If paused between sentence chunks or browser cleared paused state, resume cleanly from currentSentenceIndex
        const token = ++this.sessionToken;
        try {
          this.synth.cancel();
        } catch (e) {}
        this.sentenceTimer = setTimeout(() => {
          if (token === this.sessionToken && this.isPlaying && !this.isPaused) {
            this.speakCurrentSentence(token);
          }
        }, 60);
      }
    } else if (!this.isPlaying && this.paragraphs.length > 0) {
      const token = ++this.sessionToken;
      this.isPlaying = true;
      this.isPaused = false;
      this.startKeepAlive();
      this.prepareAndSpeakParagraph(token);
    }
  }

  public restart() {
    this.clearTimers();
    const token = ++this.sessionToken;
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {}
    }
    this.activeParagraphIndex = 0;
    this.currentSentenceIndex = 0;
    this.isPlaying = true;
    this.isPaused = false;
    this.startKeepAlive();
    this.notifyState();
    this.sentenceTimer = setTimeout(() => {
      if (token === this.sessionToken) {
        this.prepareAndSpeakParagraph(token);
      }
    }, 65);
  }

  public nextParagraph() {
    if (this.activeParagraphIndex < this.paragraphs.length - 1) {
      this.jumpToParagraph(this.activeParagraphIndex + 1);
    }
  }

  public previousParagraph() {
    if (this.activeParagraphIndex > 0) {
      this.jumpToParagraph(this.activeParagraphIndex - 1);
    } else {
      this.restart();
    }
  }

  public jumpToParagraph(index: number) {
    if (index >= 0 && index < this.paragraphs.length) {
      this.clearTimers();
      const token = ++this.sessionToken;
      if (this.synth) {
        try {
          this.synth.cancel();
        } catch (e) {}
      }
      this.activeParagraphIndex = index;
      this.currentSentenceIndex = 0;
      this.isPlaying = true;
      this.isPaused = false;
      this.startKeepAlive();
      this.notifyState();
      this.sentenceTimer = setTimeout(() => {
        if (token === this.sessionToken) {
          this.prepareAndSpeakParagraph(token);
        }
      }, 65);
    }
  }

  public setRate(newRate: number) {
    this.rate = Math.max(0.75, Math.min(1.5, newRate));
    if (this.isPlaying && !this.isPaused) {
      this.clearTimers();
      const token = ++this.sessionToken;
      if (this.synth) {
        try {
          this.synth.cancel();
        } catch (e) {}
      }
      this.startKeepAlive();
      this.sentenceTimer = setTimeout(() => {
        if (token === this.sessionToken && this.isPlaying && !this.isPaused) {
          this.speakCurrentSentence(token);
        }
      }, 65);
    }
  }

  public setVolume(newVolume: number) {
    this.volume = Math.max(0, Math.min(1.0, newVolume));
    if (this.currentUtterance) {
      this.currentUtterance.volume = this.volume;
    }
  }

  public stop() {
    this.clearTimers();
    this.sessionToken++;
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {}
      this.currentUtterance = null;
    }
    this.utterancePool = [];
    this.isPlaying = false;
    this.isPaused = false;
    this.notifyState();
  }

  public retry() {
    this.clearTimers();
    const token = ++this.sessionToken;
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {}
    }
    this.isPlaying = true;
    this.isPaused = false;
    this.startKeepAlive();
    this.sentenceTimer = setTimeout(() => {
      if (token === this.sessionToken) {
        this.prepareAndSpeakParagraph(token);
      }
    }, 65);
  }

  public isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }
}

export const speechService = new SpeechNarrator();
