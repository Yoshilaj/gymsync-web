/**
 * Site footer — shared by the landing page, /support, and both legal pages
 * (LegalPage imports this path; keep the file here).
 */
import Image from 'next/image';
import Link from 'next/link';

const PRODUCT = [
  { href: '/#hear-it', label: 'Hear it' },
  { href: '/#coaches', label: 'Coaches' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#faq', label: 'FAQ' },
] as const;

const LEGAL = [
  { href: '/support', label: 'Support' },
  { href: '/privacy-policy', label: 'Privacy policy' },
  { href: '/terms-of-service', label: 'Terms of service' },
] as const;

const SOCIAL = [
  { href: 'https://www.instagram.com/gymsync.app', label: 'Instagram' },
  { href: 'https://www.tiktok.com/@gym_sync_app', label: 'TikTok' },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-subtle">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="flex items-start gap-3">
            <Image
              src="/app-icon.png"
              alt=""
              width={36}
              height={36}
              className="rounded-[9px]"
            />
            <div>
              <p className="text-[16px] font-semibold text-ink">GymSync</p>
              <p className="mt-1 text-[13px] text-ink-dim">
                Voice-first strength coaching · iOS
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterCol title="Product" links={PRODUCT} />
            <FooterCol title="Help" links={LEGAL} />
            <FooterCol title="Follow" links={SOCIAL} external />
          </div>
        </div>

        <p className="mt-12 text-[12px] text-ink-dim">
          © {new Date().getFullYear()} Yoshiharu Nishikawahara
        </p>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  external = false,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
  external?: boolean;
}) {
  return (
    <nav aria-label={title}>
      <p className="eyebrow mb-3 text-ink-dim">{title}</p>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            {external ? (
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ) : (
              <Link
                href={l.href}
                className="text-[14px] text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
