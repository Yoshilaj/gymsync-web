/**
 * FAQ — heading pinned left, grouped hairline rows right. Native
 * <details>/<summary>, so the accordion is keyboard- and screen-reader-correct
 * with zero JS. Groups let a reader skip whole topics, not rows.
 */
import Link from 'next/link';
import { FAQ_GROUPS } from '@/lib/content';
import { Section } from '@/components/site/Section';

export function Faq() {
  return (
    <Section id="faq" band="bg">
      <div className="grid gap-12 md:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] md:gap-20">
        {/* ── Sticky heading ── */}
        <div className="md:sticky md:top-28 md:self-start">
          <p className="eyebrow mb-3 text-accent-text">FAQ</p>
          <h2 className="max-w-[14ch] text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.08] tracking-[-0.02em] text-ink">
            Frequently asked questions.
          </h2>
          <p className="mt-4 max-w-[36ch] text-[16px] leading-relaxed text-ink-soft">
            Anything else — cancelling, deleting your data, getting in touch —
            lives on the{' '}
            <Link
              href="/support"
              className="font-medium text-accent-text hover:underline"
            >
              support page
            </Link>
            .
          </p>
        </div>

        {/* ── Grouped questions ── */}
        <div className="space-y-12">
          {FAQ_GROUPS.map((group) => (
            <div key={group.title}>
              <p className="eyebrow mb-2 text-ink-dim">{group.title}</p>
              <div className="border-t border-line">
                {group.items.map((item) => (
                  <details key={item.q} className="group border-b border-line">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[16px] font-semibold text-ink transition-colors hover:text-accent-text [&::-webkit-details-marker]:hidden">
                      {item.q}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        aria-hidden
                        className="shrink-0 text-ink-dim transition-transform duration-200 group-open:rotate-180"
                      >
                        <path
                          d="M2 5l5 5 5-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </summary>
                    <p className="max-w-[62ch] pb-5 text-[15px] leading-relaxed text-ink-soft">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
