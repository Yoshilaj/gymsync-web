'use client';

/**
 * One set, start to finish — the loop, proven against a real screenshot.
 * The page's only scroll-linked section besides the hero: the four beats
 * highlight in turn as the reader scrolls. The phone sits in its own column,
 * top-aligned with the heading.
 */
import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Section } from '@/components/site/Section';
import { DeviceFrame } from '@/components/site/DeviceFrame';

const BEATS = [
  {
    time: '0:00',
    title: 'The coach calls it',
    body: 'Exercise, set number, target reps and load. Spoken, not tapped.',
  },
  {
    time: '0:47',
    title: 'You say the number',
    body: 'Plain speech mid-set. No wake word, no screen.',
  },
  {
    time: '0:47',
    title: 'It lands',
    body: 'Set written to your log, rest timer running, next lift queued.',
  },
  {
    time: '1:32',
    title: 'It adjusts',
    body: 'A set that went badly changes what comes next.',
  },
] as const;

export function OneSet() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.7', 'end 0.5'],
  });
  const activeIndex = useTransform(scrollYProgress, (p) =>
    Math.min(BEATS.length - 1, Math.floor(p * BEATS.length)),
  );

  return (
    <Section id="one-set" band="subtle">
      <div className="grid items-start gap-12 md:grid-cols-[minmax(0,1fr)_300px] md:gap-16">
        <div>
          <p className="eyebrow mb-3 text-accent-text">How it works</p>
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.08] tracking-[-0.02em] text-ink">
            One set, start to finish.
          </h2>

          <div ref={ref} className="mt-10 space-y-4">
            {BEATS.map((beat, i) => (
              <Beat
                key={beat.time + beat.title}
                beat={beat}
                index={i}
                activeIndex={activeIndex}
                reduced={!!reduced}
              />
            ))}
          </div>
        </div>

        <div className="md:sticky md:top-24">
          <DeviceFrame
            src="/shots/device-workout.png"
            alt="GymSync mid-workout: bench press with the mic listening and set rows filling in"
            width={664}
            height={1330}
            bare
            className="mx-auto max-w-[280px]"
          />
        </div>
      </div>
    </Section>
  );
}

function Beat({
  beat,
  index,
  activeIndex,
  reduced,
}: {
  beat: (typeof BEATS)[number];
  index: number;
  activeIndex: ReturnType<typeof useTransform<number, number>>;
  reduced: boolean;
}) {
  const opacity = useTransform(activeIndex, (a: number) =>
    reduced ? 1 : a >= index ? 1 : 0.35,
  );
  return (
    <motion.div style={{ opacity }} className="rounded-[16px] bg-card p-5 shadow-card">
      <div className="flex items-baseline gap-3">
        <span className="eyebrow tabular text-accent-text">{beat.time}</span>
        <h3 className="text-[17px] font-semibold text-ink">{beat.title}</h3>
      </div>
      <p className="mt-1.5 pl-[52px] text-[15px] leading-relaxed text-ink-soft">
        {beat.body}
      </p>
    </motion.div>
  );
}
