/**
 * One landing-page section. Bands alternate bg / bg-subtle exactly the way the
 * app alternates its surfaces — no hairline rules between sections; the tint
 * change is the separator. `band="navy"` is the app's navyDeep dark-card
 * language as a full-bleed block (the merged Premium section).
 */
import type { ReactNode } from 'react';
import clsx from 'clsx';

export function Section({
  id,
  band = 'bg',
  eyebrow,
  title,
  intro,
  children,
  wide = false,
}: {
  id?: string;
  band?: 'bg' | 'subtle' | 'navy';
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  /** Full-bleed content (marquee) still gets a contained heading. */
  wide?: boolean;
}) {
  const isNavy = band === 'navy';
  return (
    <section
      id={id}
      className={clsx(
        'scroll-mt-24 py-20 md:py-28',
        band === 'bg' && 'bg-bg',
        band === 'subtle' && 'bg-bg-subtle',
        isNavy && 'band-navy',
      )}
    >
      <div className={clsx('mx-auto px-6', wide ? 'max-w-none' : 'max-w-6xl')}>
        {(eyebrow || title) && (
          <div className={clsx('mx-auto max-w-6xl', wide && 'px-0')}>
            {eyebrow ? (
              <p
                className={clsx(
                  'eyebrow mb-3',
                  isNavy ? 'text-ink-inverse-soft' : 'text-accent-text',
                )}
              >
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2
                className={clsx(
                  'max-w-[24ch] text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.08] tracking-[-0.02em]',
                  isNavy ? 'text-ink-inverse' : 'text-ink',
                )}
              >
                {title}
              </h2>
            ) : null}
            {intro ? (
              <p
                className={clsx(
                  'mt-4 max-w-[58ch] text-[17px] leading-relaxed',
                  isNavy ? 'text-ink-inverse-soft' : 'text-ink-soft',
                )}
              >
                {intro}
              </p>
            ) : null}
          </div>
        )}
        <div className={clsx((eyebrow || title || intro) && 'mt-10 md:mt-14')}>
          {children}
        </div>
      </div>
    </section>
  );
}
