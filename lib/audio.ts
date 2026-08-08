'use client';

/**
 * One audio engine for the whole page.
 *
 * Every spoken line on the site — the set-call demo, the three coach
 * personalities — plays through this module so that (a) starting any line
 * stops the previous one, and (b) a single AnalyserNode feeds the waveform
 * ribbon no matter which section started the sound.
 *
 * `role` carries the app's color semantics with the sound: 'coach' lights the
 * ribbon brand blue, 'you' lights it live orange. Those are the app's exact
 * token meanings (accent = coach/graphics, live = the user's voice) — the
 * ribbon must never invent a third.
 */

export type VoiceRole = 'coach' | 'you';

export interface AudioState {
  playing: boolean;
  /** Which voice is speaking — decides the ribbon's color. */
  role: VoiceRole;
  /** Identifies the line for UI highlighting (e.g. "call-1", "supportive"). */
  lineId: string | null;
}

type Listener = (state: AudioState, analyser: AnalyserNode | null) => void;

let ctx: AudioContext | null = null;
let analyser: AnalyserNode | null = null;
let currentEl: HTMLAudioElement | null = null;
let currentSource: MediaElementAudioSourceNode | null = null;

const state: AudioState = { playing: false, role: 'coach', lineId: null };
const listeners = new Set<Listener>();

function emit() {
  for (const l of listeners) l(state, analyser);
}

export function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  listener(state, analyser);
  return () => listeners.delete(listener);
}

function ensureContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!ctx) {
    const Ctor =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!Ctor) return null;
    ctx = new Ctor();
    analyser = ctx.createAnalyser();
    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.7;
    analyser.connect(ctx.destination);
  }
  return ctx;
}

export function stop(): void {
  if (currentEl) {
    currentEl.pause();
    currentEl.src = '';
    currentEl = null;
  }
  currentSource?.disconnect();
  currentSource = null;
  state.playing = false;
  state.lineId = null;
  emit();
}

/**
 * Play one line. Resolves when the line finishes (or is superseded).
 * Always called from a user gesture — the page never autoplays sound.
 */
export function playLine(
  src: string,
  role: VoiceRole,
  lineId: string,
): Promise<void> {
  return new Promise((resolve) => {
    const context = ensureContext();
    stop();
    if (context?.state === 'suspended') void context.resume();

    const el = new Audio(src);
    el.crossOrigin = 'anonymous';
    currentEl = el;

    if (context && analyser) {
      // A MediaElementSourceNode binds to its element forever, so each play
      // gets a fresh element + source pair rather than reusing one element.
      currentSource = context.createMediaElementSource(el);
      currentSource.connect(analyser);
    }

    state.playing = true;
    state.role = role;
    state.lineId = lineId;
    emit();

    const finish = () => {
      // Only clear if we're still the active line (a newer play supersedes).
      if (currentEl === el) {
        state.playing = false;
        state.lineId = null;
        emit();
      }
      resolve();
    };
    el.addEventListener('ended', finish, { once: true });
    el.addEventListener('error', finish, { once: true });
    void el.play().catch(finish);
  });
}

/** The analyser for visualisers; null until the first user-gesture play. */
export function getAnalyser(): AnalyserNode | null {
  return analyser;
}
