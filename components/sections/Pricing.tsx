'use client';

/**
 * Three ways in. Every figure on this section is computed from lib/catalog's
 * cents integers — the same discipline as the app's paywall, ported. Limits
 * are printed, not hidden; the fine print carries the Guideline 3.1.2 set.
 */
import { useState } from 'react';
import clsx from 'clsx';
import {
  TIERS,
  formatUsd,
  savingsNote,
  trialLine,
  autoRenewNote,
  type BillingPeriod,
} from '@/lib/catalog';
import { Section } from '@/components/site/Section';

export function Pricing() {
  const [period, setPeriod] = useState<BillingPeriod>('yearly');

  return (
    <Section
      id="pricing"
      band="subtle"
      eyebrow="Pricing"
      title="Three ways in."
      intro="Start free with no card. Both paid tiers begin with a free trial."
    >
      {/* Period toggle */}
      <div
        role="group"
        aria-label="Billing period"
        className="mx-auto mb-10 flex w-fit rounded-full bg-sunken p-1"
      >
        {(['monthly', 'yearly'] as const).map((p) => (
          <button
            key={p}
            type="button"
            aria-pressed={period === p}
            onClick={() => setPeriod(p)}
            className={clsx(
              'rounded-full px-5 py-2 text-[14px] font-semibold transition-colors',
              period === p ? 'bg-card text-ink shadow-card' : 'text-ink-soft',
            )}
          >
            {p === 'monthly' ? 'Monthly' : 'Annual'}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {TIERS.map((tier) => {
          const highlight = tier.id === 'pro';
          return (
            <article
              key={tier.id}
              className={clsx(
                'flex flex-col rounded-[24px] bg-card p-7 shadow-card',
                highlight && 'shadow-card-lg ring-2 ring-accent',
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[20px] font-bold text-ink">{tier.name}</h3>
                {highlight ? (
                  <span className="eyebrow rounded-full bg-accent-soft px-3 py-1.5 text-accent-text">
                    Most popular
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-[14px] text-ink-soft">{tier.tagline}</p>

              <div className="mt-6 min-h-[64px]">
                {tier.prices ? (
                  <>
                    <p className="tabular text-[36px] font-extrabold tracking-[-0.02em] text-ink">
                      {formatUsd(tier.prices[period])}
                      <span className="ml-1 text-[15px] font-medium text-ink-dim">
                        / {period === 'yearly' ? 'year' : 'month'}
                      </span>
                    </p>
                    {period === 'yearly' ? (
                      <p className="mt-1 text-[13px] font-medium text-success-text">
                        {savingsNote(tier.prices)} · {trialLine()}
                      </p>
                    ) : (
                      <p className="mt-1 text-[13px] font-medium text-ink-dim">
                        {trialLine()}
                      </p>
                    )}
                  </>
                ) : (
                  <p className="text-[36px] font-extrabold tracking-[-0.02em] text-ink">
                    $0
                  </p>
                )}
              </div>

              {tier.inherits ? (
                <p className="eyebrow mt-6 text-ink-dim">{tier.inherits}</p>
              ) : (
                <p className="eyebrow mt-6 text-ink-dim">Included:</p>
              )}
              <ul className="mt-3 flex-1 space-y-2.5">
                {tier.features.map((f) => (
                  <li key={f.label} className="flex items-center gap-3">
                    <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[8px] bg-accent-soft">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                    <span className="text-[14px] leading-snug text-ink">
                      {f.label}
                      {f.note ? (
                        <span className="text-ink-dim"> — {f.note}</span>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 border-t border-line pt-4 text-[12px] leading-snug text-ink-dim">
                {tier.honestLimit}
              </p>

              <a
                href="#get"
                className={clsx(
                  'mt-5 flex h-11 items-center justify-center text-[15px] font-semibold',
                  highlight
                    ? 'btn-brand'
                    : 'rounded-full bg-accent-soft text-accent-text transition-colors hover:bg-accent/15',
                )}
              >
                {tier.prices ? `Start ${tier.name}` : 'Start free'}
              </a>
            </article>
          );
        })}
      </div>

      <p className="mx-auto mt-10 max-w-[72ch] text-center text-[12px] leading-relaxed text-ink-dim">
        {autoRenewNote(period)} Payment is charged to your Apple ID account on
        confirmation. Prices in USD; they may vary by storefront.{' '}
        <a
          href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
          className="underline hover:text-ink-soft"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Use (EULA)
        </a>{' '}
        ·{' '}
        <a href="/privacy-policy" className="underline hover:text-ink-soft">
          Privacy Policy
        </a>
      </p>
    </Section>
  );
}
