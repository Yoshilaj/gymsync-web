/**
 * Data-shaped copy, in one reviewable place (the same reason the app keeps its
 * onboarding answers in options.ts): the demo transcript, the three coaches,
 * the FAQ, and the memory/evidence samples. Section prose lives in the section
 * components; the things that read like DATA live here.
 *
 * Coach copy is verbatim from the app's COACH_PROFILES
 * (gymsync-app/src/screens/onboarding/coachMatch.ts) — the voices on this site
 * say exactly what the coaches in the app say.
 */

export type Speaker = 'coach' | 'you' | 'logged' | 'timer';

export interface TranscriptLine {
  id: string;
  speaker: Speaker;
  text: string;
  /** Absent for the visual-only beats (the set card, the rest timer). */
  audio?: string;
}

/**
 * The live-session demo, in playback order: you report the set, the coach
 * logs it (set card lands), you ask for a timer, the timer starts, the coach
 * confirms the rest. Spoken text matches the audio files exactly.
 */
export const DEMO_LINES: readonly TranscriptLine[] = [
  {
    id: 'you-reps',
    speaker: 'you',
    text: '“Hey coach, I did eight reps.”',
    audio: '/audio/you-reps.wav',
  },
  {
    id: 'coach-log',
    speaker: 'coach',
    text: 'Okay, logging that in. Eight at sixty — set one of four.',
    audio: '/audio/coach-log.wav',
  },
  {
    id: 'logged',
    speaker: 'logged',
    text: 'Bench press · 8 × 60 kg',
  },
  {
    id: 'you-timer',
    speaker: 'you',
    text: '“Start a ninety second timer.”',
    audio: '/audio/you-timer.wav',
  },
  {
    id: 'coach-rest',
    speaker: 'coach',
    text: 'Rest timer’s on. Ninety seconds — breathe, and I’ll call the next set.',
    audio: '/audio/coach-rest.wav',
  },
  {
    id: 'timer',
    speaker: 'timer',
    text: 'Rest timer · 1:30',
  },
];

export interface Coach {
  id: 'classic' | 'supportive' | 'energetic';
  name: string;
  tagline: string;
  /** The spoken sample — the exact line the audio file says. */
  sample: string;
  audio: string;
  traits: readonly string[];
}

export const COACHES: readonly Coach[] = [
  {
    id: 'classic',
    name: 'Classic',
    tagline: 'Precise and to the point',
    sample: '“Bar path drifted forward. Reset your brace and take it again.”',
    audio: '/audio/classic.wav',
    traits: [
      'Coaches with short, technical cues',
      'Talks in real numbers — sets, reps, load',
      'Keeps rest tight, no filler between sets',
    ],
  },
  {
    id: 'supportive',
    name: 'Supportive',
    tagline: 'Steady and encouraging',
    sample: '“That was a good set. Take your time — no rush on the next one.”',
    audio: '/audio/supportive.wav',
    traits: [
      'Checks in on how you’re feeling',
      'Eases off before you burn out',
      'Steady encouragement, zero pressure',
    ],
  },
  {
    id: 'energetic',
    name: 'Energetic',
    tagline: 'Loud and in your corner',
    sample: '“Two more. You’ve got these — let’s go!”',
    audio: '/audio/energetic.wav',
    traits: [
      'Drives the pace of every session',
      'Loud in your corner on the hard sets',
      'Celebrates every rep you earn',
    ],
  },
];

/** The real onboarding questions the plan is built from (options.ts). */
export const PLAN_QUESTIONS: readonly { q: string; hint: string }[] = [
  { q: 'What’s your goal?', hint: 'Build muscle · Get stronger · Lose fat' },
  { q: 'How many days can you train?', hint: '1–7 — the plan fits your week' },
  { q: 'Where do you train?', hint: 'Full gym · Home setup · Bodyweight' },
  { q: 'Anything that hurts?', hint: 'Programmed around, not through' },
];

/** The memory rail — the kind of notes the coach keeps (Premium). */
export const MEMORY_NOTES: readonly { when: string; note: string }[] = [
  { when: 'Mar', note: 'Left shoulder flagged — presses stay neutral-grip' },
  { when: 'May', note: 'Skips walking lunges, every time. Stopped suggesting them' },
  { when: 'Now', note: 'Bench 60 → 72.5 kg. Progression from your own logged sets' },
];

export interface Faq {
  q: string;
  a: string;
}

export interface FaqGroup {
  title: string;
  items: readonly Faq[];
}

/* Grouped like the app's FAQ screen — a reader skips whole groups, not rows.
   Most answers are lifted from the app; the device/connection ones are web-only. */
export const FAQ_GROUPS: readonly FaqGroup[] = [
  {
    title: 'Coaching & plans',
    items: [
      {
        q: 'How does the coach build my plan?',
        a: 'It reads the profile you fill in — goals, experience, how many days you train, how long a session runs, your equipment, and any injuries — and checks that against a curated strength-training research corpus before proposing a week. Nothing is saved until you accept it.',
      },
      {
        q: 'Can it really log my sets while I lift?',
        a: 'Say the set out loud — “135 for 8” — and it records it, starts your rest timer, and tells you what is next. You can also ask it to swap an exercise or skip ahead without stopping.',
      },
      {
        q: 'What happens if I close the app mid-workout?',
        a: 'Nothing is lost. Reopen it and the session resumes on the same exercise and set, with your logged sets intact — leaving the app does not end a workout.',
      },
    ],
  },
  {
    title: 'Devices & connection',
    items: [
      {
        q: 'Do I need AirPods?',
        a: 'No. Any earbuds — or the phone’s own mic and speaker — work. Earbuds are just more comfortable with a bar in your hands.',
      },
      {
        q: 'Is there an Android version?',
        a: 'Not yet. GymSync is iOS-only today.',
      },
      {
        q: 'Does it work without signal?',
        a: 'Logging works offline. Voice coaching and chat need a connection.',
      },
      {
        q: 'How do I switch between pounds and kilograms?',
        a: 'Settings → Units. Weights are stored independently of how they are shown, so past logs re-display in your choice too — nothing is converted or rounded away.',
      },
    ],
  },
  {
    title: 'Billing & data',
    items: [
      {
        q: 'How do I cancel?',
        a: 'Subscriptions are handled by Apple, not by us: on your device, open Settings → your name → Subscriptions. You keep the paid features until the period you have already paid for runs out, and your data is untouched either way.',
      },
      {
        q: 'How do I delete everything?',
        a: 'Settings → Account settings → Delete account. It erases your profile, plans, training history, and conversations straight away, and it can’t be undone.',
      },
    ],
  },
];
