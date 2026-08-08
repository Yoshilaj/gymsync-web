/**
 * Personalisation, stated in four checkable claims. Same anatomy as the
 * How-it-works section: copy left, phone top-aligned right.
 */
import { Section } from '@/components/site/Section';
import { DeviceFrame } from '@/components/site/DeviceFrame';

const CLAIMS = [
  'Built around your goal, schedule, and equipment',
  'Programmed around anything that hurts',
  'Adapts when life gets in the way',
  'Weights progress from your own logged sets',
] as const;

export function YourPlan() {
  return (
    <Section id="your-plan" band="bg">
      <div className="grid items-start gap-12 md:grid-cols-[minmax(0,1fr)_300px] md:gap-16">
        <div>
          <p className="eyebrow mb-3 text-accent-text">Your plan</p>
          <h2 className="max-w-[18ch] text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.08] tracking-[-0.02em] text-ink">
            Built from your answers, not a template.
          </h2>
          <p className="mt-4 max-w-[44ch] text-[17px] leading-relaxed text-ink-soft">
            Answer a few questions once — the coach handles the rest.
          </p>

          <ul className="mt-10 space-y-5">
            {CLAIMS.map((claim) => (
              <li key={claim} className="flex items-center gap-4">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-success-soft"
                  aria-hidden
                >
                  <svg width="14" height="14" viewBox="0 0 16 16">
                    <path
                      d="M3 8.5 6.5 12 13 4.5"
                      fill="none"
                      stroke="var(--color-success-text)"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-[17px] font-medium text-ink">{claim}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-[13px] text-ink-dim">
            Free includes one plan generation. Pro and Premium are unlimited.
          </p>
        </div>

        <div className="md:sticky md:top-24">
          <DeviceFrame
            src="/shots/device-plan.png"
            alt="A generated GymSync training day: Push — 55 minutes, chest, shoulders and arms, five exercises"
            width={664}
            height={1326}
            bare
            className="mx-auto max-w-[280px]"
          />
        </div>
      </div>
    </Section>
  );
}
