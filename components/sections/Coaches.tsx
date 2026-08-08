'use client';

/**
 * The three coach personalities. Copy is verbatim from the app's
 * COACH_PROFILES; each card's play button speaks the coach's actual line
 * through the shared engine. Each personality carries its own gradient
 * identity — Classic the navyDeep, Supportive the brand blue, Energetic the
 * live orange — all three straight from the app's gradient set.
 */
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { COACHES, type Coach } from '@/lib/content';
import { playLine, subscribe } from '@/lib/audio';
import { Section } from '@/components/site/Section';

const IDENTITY: Record<
  Coach['id'],
  { gradient: string; ring: string; glyph: React.ReactNode }
> = {
  classic: {
    gradient: 'linear-gradient(180deg,#22405f,#0b2447)',
    ring: 'ring-[#22405f]',
    glyph: (
      // Barbell — precise, technical
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
        <path
          d="M2 12h2m16 0h2M7 12h10"
          stroke="#fff"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <rect x="4" y="7.5" width="3" height="9" rx="1.2" fill="#fff" />
        <rect x="17" y="7.5" width="3" height="9" rx="1.2" fill="#fff" />
      </svg>
    ),
  },
  supportive: {
    gradient: 'linear-gradient(180deg,#4fb0ff,#1a6bc0)',
    ring: 'ring-accent',
    glyph: (
      // Heart — steady, encouraging
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
        <path
          d="M12 20.3 4.9 13a4.6 4.6 0 0 1 6.5-6.5l.6.6.6-.6A4.6 4.6 0 0 1 19.1 13Z"
          fill="#fff"
        />
      </svg>
    ),
  },
  energetic: {
    gradient: 'linear-gradient(180deg,#ff9a6b,#ff7a45)',
    ring: 'ring-live',
    glyph: (
      // Bolt — loud, driving
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
        <path d="M13 2 4.5 13.5H11L9.8 22l8.7-11.5H12Z" fill="#fff" />
      </svg>
    ),
  },
};

export function Coaches() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(
    () =>
      subscribe((state) => {
        setActiveId(state.playing ? state.lineId : null);
      }),
    [],
  );

  return (
    <Section
      id="coaches"
      band="subtle"
      eyebrow="Coaches"
      title="Pick your coach."
      intro="Four quick questions match you to one — hear them below. Choosing your own is a Pro feature."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {COACHES.map((coach) => {
          const identity = IDENTITY[coach.id];
          const speaking = activeId === coach.id;
          return (
            <article
              key={coach.id}
              className={clsx(
                'flex flex-col rounded-[24px] bg-card p-7 shadow-card transition-all duration-200',
                speaking && clsx('shadow-card-lg ring-2', identity.ring),
              )}
            >
              <div className="flex items-center gap-4">
                <span
                  className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full shadow-card"
                  style={{ backgroundImage: identity.gradient, width: 52, height: 52 }}
                  aria-hidden
                >
                  {identity.glyph}
                </span>
                <div>
                  <h3 className="text-[20px] font-bold tracking-[-0.01em] text-ink">
                    {coach.name}
                  </h3>
                  <p className="mt-0.5 text-[13px] font-medium text-ink-dim">
                    {coach.tagline}
                  </p>
                </div>
              </div>

              <p className="mt-6 border-l-2 border-line pl-4 text-[15.5px] leading-relaxed text-ink-soft">
                {coach.sample}
              </p>

              <ul className="mt-6 flex-1 space-y-3 border-t border-line pt-6">
                {coach.traits.map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundImage: identity.gradient }}
                      aria-hidden
                    />
                    <span className="text-[14px] leading-snug text-ink-soft">{t}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => void playLine(coach.audio, 'coach', coach.id)}
                className={clsx(
                  'mt-7 flex h-11 items-center justify-center gap-2 rounded-full text-[14px] font-semibold transition-colors',
                  speaking
                    ? 'bg-accent text-white'
                    : 'bg-accent-soft text-accent-text hover:bg-accent/15',
                )}
              >
                <svg width="11" height="11" viewBox="0 0 14 14" aria-hidden>
                  <path d="M3 1.5 12 7 3 12.5Z" fill="currentColor" />
                </svg>
                {speaking ? 'Speaking…' : `Hear ${coach.name}`}
              </button>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
