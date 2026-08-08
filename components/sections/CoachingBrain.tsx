'use client';

/**
 * The merged Premium section — memory + evidence on the navyDeep band, over a
 * generated constellation texture (subtle, low-opacity). Copy cut to one line
 * per idea; the memory notes arrive as a staggered timeline so the band moves
 * once, quietly, as you reach it.
 */
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import { MEMORY_NOTES } from '@/lib/content';

const rise = (reduced: boolean, delay: number) =>
  reduced
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.5 },
        transition: { duration: 0.5, delay, ease: [0.2, 0.8, 0.2, 1] as const },
      };

export function CoachingBrain() {
  const reduced = !!useReducedMotion();

  return (
    <section id="brain" className="band-navy relative scroll-mt-24 overflow-hidden py-20 md:py-28">
      <Image
        src="/brain-bg.jpg"
        alt=""
        fill
        aria-hidden
        className="pointer-events-none object-cover opacity-45 mix-blend-screen"
        sizes="100vw"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <p className="eyebrow mb-3 text-ink-inverse-soft">Premium — the coaching brain</p>
        <h2 className="max-w-[24ch] text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.08] tracking-[-0.02em] text-ink-inverse">
          It remembers. And it shows its sources.
        </h2>

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-20">
          {/* ── Memory: a quiet timeline ── */}
          <div>
            <p className="text-[17px] leading-relaxed text-ink-inverse-soft">
              Every injury, preference, and PR — kept, and coached around.
            </p>
            <div className="relative mt-8 space-y-6 border-l border-white/15 pl-6">
              {MEMORY_NOTES.map((n, i) => (
                <motion.div key={n.when + n.note} {...rise(reduced, i * 0.12)} className="relative">
                  <span
                    className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-accent"
                    aria-hidden
                  />
                  <p className="eyebrow text-ink-inverse-soft">{n.when}</p>
                  <p className="mt-1 text-[16px] leading-snug text-ink-inverse">{n.note}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Evidence: one exchange ── */}
          <div>
            <p className="text-[17px] leading-relaxed text-ink-inverse-soft">
              Answers come from published research — sources shown, never
              guessed.
            </p>
            <motion.div
              {...rise(reduced, 0.15)}
              className="mt-8 rounded-[20px] border border-white/10 bg-white/[0.06] p-6"
            >
              <p className="eyebrow text-ink-inverse-soft">You ask</p>
              <p className="mt-1.5 text-[16px] font-medium text-ink-inverse">
                “Should I train to failure on every set?”
              </p>
              <p className="eyebrow mt-5 text-ink-inverse-soft">Your coach answers</p>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-inverse-soft">
                Not on every set. Stopping one or two reps short keeps most of
                the growth stimulus at a fraction of the recovery cost.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Peer-reviewed research', 'Meta-analyses', 'Position stands'].map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/20 px-3 py-1 text-[12px] font-medium text-ink-inverse-soft"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
