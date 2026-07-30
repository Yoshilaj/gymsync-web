import Link from 'next/link';
import { BrandMark } from '@/components/BrandMark';
import { Footer } from '@/components/Footer';

type Props = {
  title: string;
  effectiveDate: string;
  children: React.ReactNode;
};

/**
 * Shared chrome for the legal pages. Typography is applied here via
 * descendant selectors rather than per-tag components, so the page files
 * below can stay close to the source Markdown — plain h2/h3/p/ul/table.
 */
export function LegalPage({ title, effectiveDate, children }: Props) {
  return (
    <main className="relative min-h-screen w-full bg-[var(--color-bg)] text-[color:var(--color-ink)]">
      <header className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-6 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <BrandMark size={30} />
          <span className="font-display text-[16px] font-semibold tracking-tight text-[color:var(--color-ink)]">
            GymSync
          </span>
        </Link>
        <Link
          href="/"
          className="text-[13px] font-medium text-[color:var(--color-accent-deep)] hover:underline"
        >
          ← Back to home
        </Link>
      </header>

      <article className="mx-auto w-full max-w-3xl px-6 pb-24 sm:px-8">
        <h1 className="font-display text-[28px] font-semibold tracking-tight text-[color:var(--color-ink)] sm:text-[34px]">
          {title}
        </h1>
        <p className="mt-2 text-[13px] text-[color:var(--color-ink-dim)]">
          Effective {effectiveDate} · Last updated {effectiveDate}
        </p>

        <div
          className="
            mt-8
            [&>h2]:mt-10 [&>h2]:font-display [&>h2]:text-[19px] [&>h2]:font-semibold [&>h2]:tracking-tight [&>h2]:text-[color:var(--color-ink)]
            [&>h3]:mt-6 [&>h3]:font-display [&>h3]:text-[15px] [&>h3]:font-semibold [&>h3]:text-[color:var(--color-ink)]
            [&>p]:mt-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-[color:var(--color-ink-soft)]
            [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5
            [&_li]:text-[15px] [&_li]:leading-relaxed [&_li]:text-[color:var(--color-ink-soft)]
            [&_strong]:font-semibold [&_strong]:text-[color:var(--color-ink)]
            [&_a]:text-[color:var(--color-accent-deep)] [&_a]:underline [&_a]:underline-offset-2
            [&_hr]:my-8 [&_hr]:border-[color:var(--color-line)]
            [&_table]:mt-4 [&_table]:w-full [&_table]:border-collapse [&_table]:text-[13.5px]
            [&_th]:border-b [&_th]:border-[color:var(--color-line)] [&_th]:py-2 [&_th]:pr-4 [&_th]:text-left [&_th]:font-semibold [&_th]:text-[color:var(--color-ink)]
            [&_td]:border-b [&_td]:border-[color:var(--color-line)] [&_td]:py-2 [&_td]:pr-4 [&_td]:align-top [&_td]:text-[color:var(--color-ink-soft)]
          "
        >
          {children}
        </div>
      </article>

      <Footer />
    </main>
  );
}
