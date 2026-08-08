'use client';

/**
 * Floating glass pill — the app's liquid-glass tab bar, translated: a
 * radius-pill bar floating inset from the edges, blurred white veil, soft
 * navy shadow. Links are in-page anchors; the CTA scrolls to the closing
 * section (which renders the waitlist or the App Store button per flags).
 */
import Image from 'next/image';
import Link from 'next/link';

const LINKS = [
  { href: '#hear-it', label: 'Hear it' },
  { href: '#coaches', label: 'Coaches' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
] as const;

export function Nav() {
  return (
    <header className="fixed inset-x-4 top-4 z-50 mx-auto max-w-4xl">
      <nav
        aria-label="Main"
        className="flex h-14 items-center justify-between rounded-full border border-white/40 bg-white/70 pl-3 pr-2 shadow-glass backdrop-blur-xl"
      >
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/app-icon.png"
            alt=""
            width={32}
            height={32}
            className="rounded-[8px]"
            priority
          />
          <span className="text-[16px] font-semibold tracking-tight text-ink">
            GymSync
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-[14px] font-medium text-ink-soft transition-colors hover:bg-white/80 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#get"
          className="btn-brand flex h-10 items-center px-5 text-[14px] font-semibold"
        >
          Get the app
        </a>
      </nav>
    </header>
  );
}
