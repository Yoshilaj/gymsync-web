/**
 * The pricing catalog — a direct port of the app's single source of truth
 * (gymsync-app/src/screens/pricing/catalog.ts). Prices are stored ONCE, in
 * whole cents, as integers; every claim a shopper reads ("2 months off", the
 * per-period figures, the trial) is COMPUTED from them. Never hand-type a
 * price anywhere else on the site — a stale badge after a price edit is a
 * consumer-protection problem, not a cosmetic one.
 *
 * If the app's catalog changes, this file changes with it. The app leads.
 */

export type TierId = 'free' | 'pro' | 'premium';
export type BillingPeriod = 'monthly' | 'yearly';

export const TRIAL_DAYS = 7;
const MONTHS_PER_YEAR = 12;

export interface Feature {
  label: string;
  note?: string;
}

export interface Tier {
  id: TierId;
  name: string;
  tagline: string;
  /** cents; null = free */
  prices: Record<BillingPeriod, number> | null;
  /** List eyebrow framing the features, not a feature itself. */
  inherits: string | null;
  features: readonly Feature[];
  /** The cap printed plainly — the site states limits, it doesn't hide them. */
  honestLimit: string;
}

/* Feature wording is the app's, verbatim (user-authored) — don't editorialize. */
export const TIERS: readonly Tier[] = [
  {
    id: 'free',
    name: 'Free',
    tagline: 'Everything you need to start training.',
    prices: null,
    inherits: null,
    features: [
      { label: 'AI Chat Coach', note: 'Limited messages' },
      { label: 'One-time AI Plan Generation' },
      { label: 'Workout Logging' },
      { label: 'Body Weight Logging' },
      { label: 'Progress Trend Charts' },
    ],
    honestLimit: '10 chat messages a day · one plan generation, ever',
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'Your coach, live in your ear, every set.',
    prices: { monthly: 1499, yearly: 14900 },
    inherits: 'Everything in Free, and:',
    features: [
      { label: 'Live Voice Coaching', note: '10 sessions a month' },
      { label: 'Hands-Free Set Logging' },
      { label: 'Unlimited AI Chat Coach' },
      { label: 'Unlimited AI Plan Generation' },
      { label: 'Choice of Coach Personality' },
    ],
    honestLimit: '10 voice sessions a month',
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'The complete coaching brain, always on.',
    prices: { monthly: 2999, yearly: 29900 },
    inherits: 'Everything in Pro, and:',
    features: [
      { label: 'Unlimited Live Voice Coach' },
      { label: 'Evidence-Based Coaching' },
      { label: 'Data-Driven Progression Management' },
      { label: 'Lifetime Personal Memory' },
      { label: 'Injury Aware Safety Layer' },
    ],
    honestLimit: 'No caps',
  },
] as const;

/** "$14.99", "$149.00" — always two decimals. */
export function formatUsd(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

/**
 * Months of the monthly price a year hands back. Integer cents throughout so
 * IEEE-754 drift can't turn a two-month offer into "1 month free".
 */
export function monthsFree(prices: Record<BillingPeriod, number>): number {
  return Math.round(
    (prices.monthly * MONTHS_PER_YEAR - prices.yearly) / prices.monthly,
  );
}

export function savingsNote(prices: Record<BillingPeriod, number>): string {
  const months = monthsFree(prices);
  return `${months} month${months === 1 ? '' : 's'} off`;
}

export function trialLine(): string {
  return `${TRIAL_DAYS}-day free trial`;
}

/** Billing disclosure follows the SELECTED period — never says "monthly" to an annual buyer. */
export function autoRenewNote(period: BillingPeriod): string {
  return `Auto-renews ${period === 'yearly' ? 'annually' : 'monthly'}. Cancel anytime in your Apple ID settings.`;
}
