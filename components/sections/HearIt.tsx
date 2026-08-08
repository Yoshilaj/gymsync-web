'use client';

/**
 * The audio demo — a live workout session, in the app's own conversation
 * language. You speak (orange, person chip), the coach answers (blue, mic
 * chip), and the app's real UI lands in between: the set card when the rep is
 * logged, the rest timer when you ask for one — it genuinely counts down.
 * Every spoken line matches its audio file word for word.
 */
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { DEMO_LINES } from '@/lib/content';
import { playLine, stop, subscribe } from '@/lib/audio';
import { Section } from '@/components/site/Section';

const REST_SECONDS = 90;

export function HearIt() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  const [timerLeft, setTimerLeft] = useState<number | null>(null);
  const runToken = useRef(0);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(
    () =>
      subscribe((state) => {
        if (state.playing) setActiveId(state.lineId);
      }),
    [],
  );

  const clearTimer = () => {
    if (tickRef.current) clearInterval(tickRef.current);
    tickRef.current = null;
  };

  useEffect(
    () => () => {
      stop();
      clearTimer();
    },
    [],
  );

  const startRestTimer = () => {
    clearTimer();
    setTimerLeft(REST_SECONDS);
    tickRef.current = setInterval(() => {
      setTimerLeft((t) => {
        if (t === null || t <= 1) {
          clearTimer();
          return t === null ? null : 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  const runDemo = async () => {
    const token = ++runToken.current;
    setRunning(true);
    clearTimer();
    setTimerLeft(null);
    for (const line of DEMO_LINES) {
      if (runToken.current !== token) return; // superseded by another play
      if (line.speaker === 'logged') {
        setActiveId('logged');
        await new Promise((r) => setTimeout(r, 1200));
        continue;
      }
      if (line.speaker === 'timer') {
        setActiveId('timer');
        startRestTimer();
        await new Promise((r) => setTimeout(r, 900));
        continue;
      }
      if (line.audio) {
        await playLine(line.audio, line.speaker === 'you' ? 'you' : 'coach', line.id);
      }
    }
    if (runToken.current === token) {
      setActiveId(null);
      setRunning(false);
    }
  };

  /** While the demo runs, everyone but the current speaker steps back. */
  const dimmed = (id: string) => running && activeId !== null && activeId !== id;

  const mmss = (s: number) =>
    `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  return (
    <Section id="hear-it" band="bg">
      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] md:gap-16">
        {/* ── The pitch + the one control ── */}
        <div>
          <p className="eyebrow mb-3 text-accent-text">Hear it</p>
          <h2 className="max-w-[16ch] text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.08] tracking-[-0.02em] text-ink">
            A live workout session.
          </h2>
          <p className="mt-4 max-w-[44ch] text-[17px] leading-relaxed text-ink-soft">
            Tell your coach what you did, ask for a rest timer — it&rsquo;s all
            by voice, and your hands never leave the bar.
          </p>
          <button
            type="button"
            onClick={runDemo}
            className="btn-brand mt-8 flex h-14 w-full items-center justify-center gap-3 px-10 text-[17px] font-semibold sm:w-auto"
          >
            {running ? (
              <span className="flex h-[16px] items-end gap-[3px]" aria-hidden>
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="eq-bar h-full w-[3px] rounded-full bg-white"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </span>
            ) : (
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20"
                aria-hidden
              >
                <svg width="12" height="12" viewBox="0 0 14 14">
                  <path d="M3.5 1.5 12 7 3.5 12.5Z" fill="currentColor" />
                </svg>
              </span>
            )}
            {running ? 'Playing' : 'Play the demo'}
          </button>
        </div>

        {/* ── The conversation — outlined like a quiet session card ── */}
        <div
          aria-label="The demo conversation"
          className="rounded-[24px] border border-line bg-white/55 p-5 md:p-7"
        >
          <div className="mb-6 flex items-center gap-2.5 border-b border-line pb-4">
            <span className="pulse-dot h-2 w-2 rounded-full bg-live" aria-hidden />
            <span className="eyebrow text-ink-dim">Live session</span>
          </div>
          <div className="space-y-6">
          {DEMO_LINES.map((line) => {
            switch (line.speaker) {
              case 'you':
                return (
                  <YouLine
                    key={line.id}
                    text={line.text}
                    speaking={activeId === line.id}
                    dimmed={dimmed(line.id)}
                    label={line.id === 'you-reps' ? 'You' : undefined}
                  />
                );
              case 'coach':
                return (
                  <CoachLine
                    key={line.id}
                    text={line.text}
                    speaking={activeId === line.id}
                    dimmed={dimmed(line.id)}
                    label={line.id === 'coach-log' ? 'Your coach' : undefined}
                  />
                );
              case 'logged':
                return (
                  <div
                    key={line.id}
                    className={clsx(
                      'transition-opacity duration-300 md:pl-14',
                      dimmed(line.id) && 'opacity-40',
                    )}
                  >
                    <div
                      className={clsx(
                        'flex w-full max-w-[440px] items-center gap-4 rounded-[16px] bg-card py-3.5 pl-4 pr-4 shadow-card transition-shadow duration-300',
                        activeId === line.id && 'shadow-card-lg',
                      )}
                    >
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-success-soft"
                        aria-hidden
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16">
                          <path
                            d="M3 8.5 6.5 12 13 4.5"
                            fill="none"
                            stroke="var(--color-success-text)"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <div className="min-w-0">
                        <p className="tabular text-[16px] font-semibold text-ink">
                          {line.text}
                        </p>
                        <p className="mt-0.5 text-[12px] text-ink-dim">
                          Set 1 of 4
                        </p>
                      </div>
                      <span className="ml-auto shrink-0 rounded-full bg-success-soft px-3.5 py-1.5 text-[12px] font-semibold text-success-text">
                        Logged by voice
                      </span>
                    </div>
                  </div>
                );
              case 'timer':
                return (
                  <div
                    key={line.id}
                    className={clsx(
                      'transition-opacity duration-300 md:pl-14',
                      dimmed(line.id) && 'opacity-40',
                    )}
                  >
                    <div
                      className={clsx(
                        'flex w-full max-w-[440px] items-center gap-4 rounded-[16px] bg-card py-3.5 pl-4 pr-5 shadow-card transition-shadow duration-300',
                        activeId === line.id && 'shadow-card-lg',
                      )}
                    >
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-accent-soft"
                        aria-hidden
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16">
                          <circle
                            cx="8"
                            cy="9"
                            r="5.5"
                            fill="none"
                            stroke="#1d77ce"
                            strokeWidth="1.6"
                          />
                          <path
                            d="M8 6.2V9l2 1.4M6.2 1.5h3.6"
                            fill="none"
                            stroke="#1d77ce"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                      <div className="min-w-0">
                        <p className="text-[16px] font-semibold text-ink">Rest timer</p>
                        <p className="mt-0.5 text-[12px] text-ink-dim">
                          Started by voice
                        </p>
                      </div>
                      <span className="tabular ml-auto shrink-0 text-[26px] font-extrabold tracking-[-0.02em] text-accent-text">
                        {timerLeft !== null ? mmss(timerLeft) : '1:30'}
                      </span>
                    </div>
                  </div>
                );
            }
          })}
          </div>
        </div>
      </div>
    </Section>
  );
}

/** A coach line — mic chip that equalizes while this line is speaking. */
function CoachLine({
  text,
  speaking,
  dimmed,
  label,
}: {
  text: string;
  speaking: boolean;
  dimmed: boolean;
  label?: string;
}) {
  return (
    <div
      className={clsx(
        'flex items-start gap-4 transition-opacity duration-300',
        dimmed && 'opacity-40',
      )}
    >
      <span
        className={clsx(
          'mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300',
          speaking
            ? 'bg-[image:linear-gradient(180deg,#2e90ea,#1a6bc0)]'
            : 'bg-accent-soft',
        )}
        aria-hidden
      >
        {speaking ? <EqBars /> : (
          <svg width="16" height="16" viewBox="0 0 16 16">
            <rect x="5.5" y="1.5" width="5" height="9" rx="2.5" fill="#1d77ce" />
            <path
              d="M3 8a5 5 0 0 0 10 0M8 13v1.5"
              fill="none"
              stroke="#1d77ce"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        )}
      </span>
      <div className="pt-1">
        {label ? <p className="eyebrow mb-1.5 text-ink-dim">{label}</p> : null}
        <p className="text-[17px] leading-relaxed text-ink">
          <span className="sr-only">Coach says: </span>
          {text}
        </p>
      </div>
    </div>
  );
}

/** Your line — right-aligned orange pill with a plain person chip. */
function YouLine({
  text,
  speaking,
  dimmed,
  label,
}: {
  text: string;
  speaking: boolean;
  dimmed: boolean;
  label?: string;
}) {
  return (
    <div
      className={clsx(
        'flex items-start justify-end gap-4 transition-opacity duration-300',
        dimmed && 'opacity-40',
      )}
    >
      <div className="pt-1 text-right">
        {label ? <p className="eyebrow mb-1.5 text-ink-dim">{label}</p> : null}
        <p
          className={clsx(
            'inline-block rounded-[20px] rounded-tr-[6px] bg-live-soft px-5 py-3 text-left text-[17px] font-medium text-ink transition-shadow duration-300',
            speaking && 'shadow-[0_0_0_2px_#ff7a45]',
          )}
        >
          <span className="sr-only">You say: </span>
          {text}
        </p>
      </div>
      <span
        className={clsx(
          'mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300',
          speaking
            ? 'bg-[image:linear-gradient(180deg,#ff9a6b,#ff7a45)]'
            : 'bg-live-soft',
        )}
        aria-hidden
      >
        {speaking ? <EqBars /> : (
          /* A plain person — you. */
          <svg width="16" height="16" viewBox="0 0 16 16">
            <circle cx="8" cy="5.2" r="3" fill="none" stroke="#c8420f" strokeWidth="1.6" />
            <path
              d="M2.8 14.2a5.2 5.2 0 0 1 10.4 0"
              fill="none"
              stroke="#c8420f"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        )}
      </span>
    </div>
  );
}

function EqBars() {
  return (
    <span className="flex h-[16px] items-end gap-[3px]">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="eq-bar h-full w-[3px] rounded-full bg-white"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </span>
  );
}
