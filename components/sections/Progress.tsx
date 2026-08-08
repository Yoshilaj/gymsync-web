'use client';

/**
 * Progress you can read — a strength curve drawn with the app's own chartFill
 * gradient, the stats the Progress tab leads with, and the full exercise
 * library as a marquee (all 55 renders are the app's real reference art).
 */
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import { Section } from '@/components/site/Section';
import { DeviceFrame } from '@/components/site/DeviceFrame';

/* A plausible six-month bench curve, kg. Presentation, not a testimonial. */
const CURVE = [60, 62.5, 62.5, 65, 67.5, 67.5, 70, 72.5];

const EXERCISES = [
  'ex-bench', 'ex-squat', 'ex-deadlift', 'ex-ohp', 'ex-barbell-curl',
  'ex-lat-pulldown', 'ex-leg-press', 'ex-incline', 'ex-seated-row',
  'ex-lateral', 'ex-rdl', 'ex-pullup', 'ex-dip',
  'ex-leg-curl', 'ex-face-pull', 'ex-hip-thrust', 'ex-front-squat',
  'ex-hammer-curl',
];

function curvePath(w: number, h: number): string {
  const min = Math.min(...CURVE);
  const max = Math.max(...CURVE);
  const pts = CURVE.map((v, i) => [
    (i / (CURVE.length - 1)) * w,
    h - ((v - min) / (max - min)) * (h * 0.8) - h * 0.1,
  ]);
  return pts
    .map(([x, y], i) => (i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`))
    .join(' ');
}

export function Progress() {
  const reduced = useReducedMotion();
  const W = 560;
  const H = 200;
  const path = curvePath(W, H);

  return (
    <Section
      id="progress"
      band="bg"
      eyebrow="Progress"
      title="Progress you can actually read."
      intro="Strength curves per exercise over months, body-weight trends that smooth out daily noise, and streaks that survive a missed day."
      wide
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_300px] md:gap-16">
          <div className="rounded-[24px] bg-card p-6 shadow-card-lg md:p-8">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="eyebrow text-ink-dim">Bench press · 6 months</p>
                <p className="tabular mt-1 text-[28px] font-extrabold tracking-[-0.02em] text-ink">
                  60 → 72.5 <span className="text-[16px] font-semibold text-ink-dim">kg</span>
                </p>
              </div>
              <p className="tabular text-[13px] font-medium text-success-text">
                +20.8%
              </p>
            </div>
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="mt-4 h-auto w-full"
              role="img"
              aria-label="Strength curve rising from 60 to 72.5 kilograms over six months"
            >
              <defs>
                {/* The app's chartFill gradient, verbatim. */}
                <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="rgba(46,144,234,0.18)" />
                  <stop offset="1" stopColor="rgba(46,144,234,0)" />
                </linearGradient>
              </defs>
              <path d={`${path} L ${W} ${H} L 0 ${H} Z`} fill="url(#chartFill)" />
              <motion.path
                d={path}
                fill="none"
                stroke="#2e90ea"
                strokeWidth={3}
                strokeLinecap="round"
                initial={reduced ? undefined : { pathLength: 0 }}
                whileInView={reduced ? undefined : { pathLength: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
              />
            </svg>
            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-line pt-6">
              <Stat value="14" label="day streak" />
              <Stat value="3" label="PRs this month" />
              <Stat value="4/5" label="sessions this week" />
            </div>
          </div>

          <DeviceFrame
            src="/shots/device-progress.png"
            alt="The GymSync progress tab: streak, monthly PRs and training calendar"
            width={670}
            height={1324}
            bare
            className="mx-auto max-w-[270px]"
          />
        </div>
      </div>

      {/* Full-bleed library marquee */}
      <div className="mt-16 overflow-hidden">
        <p className="eyebrow mb-6 text-center text-ink-dim">
          55 exercises · 3D reference art · real form cues
        </p>
        <div className="marquee-track flex w-max gap-4">
          {[...EXERCISES, ...EXERCISES].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex h-[120px] w-[150px] shrink-0 items-center justify-center rounded-[16px] bg-card shadow-card"
            >
              <Image
                src={`/exercises/${name}.png`}
                alt=""
                width={150}
                height={120}
                className="h-full w-full rounded-[16px] object-contain p-1.5"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="tabular text-[24px] font-extrabold tracking-[-0.02em] text-ink">
        {value}
      </p>
      <p className="mt-0.5 text-[12px] text-ink-dim">{label}</p>
    </div>
  );
}
