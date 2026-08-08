/**
 * The ask. Pre-launch this renders the waitlist form; the day APP_STORE_URL
 * is set it becomes the download button — nothing else moves.
 */
import { APP_STORE_URL } from '@/lib/flags';
import { WaitlistForm } from '@/components/WaitlistForm';
import { Section } from '@/components/site/Section';

export function FinalCta() {
  return (
    <Section id="get" band="subtle">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-[clamp(32px,4.5vw,56px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink">
          Put in an earbud.
        </h2>
        <p className="mt-4 text-[17px] leading-relaxed text-ink-soft">
          {APP_STORE_URL
            ? 'Free to start. No card to try it.'
            : 'GymSync for iOS is in App Review now. Leave your email and it arrives the moment it goes live.'}
        </p>
        <div className="mt-8">
          {APP_STORE_URL ? (
            <a
              href={APP_STORE_URL}
              className="btn-brand inline-flex h-13 items-center px-8 text-[17px] font-semibold"
            >
              Download on the App Store
            </a>
          ) : (
            <WaitlistForm />
          )}
        </div>
      </div>
    </Section>
  );
}
