import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'GymSync — Support',
  description:
    'How to manage your GymSync subscription, delete your account, and get in touch.',
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-bg">
      <header className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/app-icon.png"
            alt=""
            width={30}
            height={30}
            className="rounded-[7px]"
          />
          <span className="text-[16px] font-semibold tracking-tight text-ink">
            GymSync
          </span>
        </Link>
        <Link
          href="/"
          className="text-[13px] font-medium text-accent-text hover:underline"
        >
          ← Back to home
        </Link>
      </header>

      <article className="mx-auto w-full max-w-3xl px-6 pb-24">
        <h1 className="text-[clamp(28px,4vw,40px)] font-bold tracking-[-0.02em] text-ink">
          Support
        </h1>

        <div className="mt-10 space-y-6">
          <Card title="Manage or cancel your subscription">
            <p>
              Subscriptions are handled by Apple, not by us. On your iPhone,
              open <Strong>Settings → your name → Subscriptions</Strong> and
              choose GymSync. Cancelling keeps the paid features until the end
              of the period you already paid for, and your data is untouched
              either way.
            </p>
            <p className="mt-3">
              For a refund, use Apple&rsquo;s{' '}
              <a
                href="https://reportaproblem.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent-text hover:underline"
              >
                reportaproblem.apple.com
              </a>
              &nbsp;— purchases are billed by Apple, so refunds go through them.
            </p>
          </Card>

          <Card title="Delete your account">
            <p>
              In the app: <Strong>Settings → Account settings → Delete
              account</Strong>. This erases your profile, plans, training
              history, and conversations straight away, and it can&rsquo;t be
              undone.
            </p>
          </Card>

          <Card title="Common questions">
            <p>
              The <Link href="/#faq" className="font-medium text-accent-text hover:underline">FAQ</Link>{' '}
              covers plans, hands-free logging, units, offline behaviour, and
              more — most questions are answered there.
            </p>
          </Card>

          <Card title="Contact">
            <p>
              Email{' '}
              <a
                href="mailto:support@gymsyncapp.me"
                className="font-medium text-accent-text hover:underline"
              >
                support@gymsyncapp.me
              </a>{' '}
              — a real person reads it. You can also reach support from inside
              the app: <Strong>Settings → Contact support</Strong>.
            </p>
            <p className="mt-3 text-[13px] text-ink-dim">
              Privacy questions and data requests are handled per the{' '}
              <Link href="/privacy-policy" className="underline">
                Privacy Policy
              </Link>
              .
            </p>
          </Card>
        </div>
      </article>

      <Footer />
    </main>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[16px] bg-card p-6 shadow-card">
      <h2 className="text-[18px] font-semibold text-ink">{title}</h2>
      <div className="mt-2 text-[15px] leading-relaxed text-ink-soft">
        {children}
      </div>
    </section>
  );
}

function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-ink">{children}</strong>;
}
