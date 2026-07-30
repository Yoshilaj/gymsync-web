import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-5 text-[11px] text-[color:var(--color-ink-dim)] sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6">
      <span>© {new Date().getFullYear()} GymSync · support@gymsyncapp.me</span>
      <nav className="flex items-center gap-4">
        <Link href="/privacy-policy" className="hover:text-[color:var(--color-ink-soft)]">
          Privacy policy
        </Link>
        <Link href="/terms-of-service" className="hover:text-[color:var(--color-ink-soft)]">
          Terms of service
        </Link>
      </nav>
    </footer>
  );
}
