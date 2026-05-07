import { WaitlistForm } from './WaitlistForm';
import { BrandMark } from './BrandMark';
import { CursorGlow } from './CursorGlow';

type Props = { signups: number; cap: number };

export function Hero({ signups, cap }: Props) {
  const left = Math.max(cap - signups, 0);

  return (
    <main className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden text-[color:var(--color-ink)]">
      {/* ── Background layers (z-0 stack, content sits above at z-10) ───── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 bg-[var(--color-bg)]" />
      <div aria-hidden className="milky-mesh pointer-events-none absolute inset-0 z-0" />
      <div aria-hidden className="silk-fibers pointer-events-none absolute inset-0 z-[1]" />
      <div aria-hidden className="silk-iridescence pointer-events-none absolute inset-0 z-[2]" />
      <div aria-hidden className="silk-sheen pointer-events-none absolute inset-0 z-[3]" />
      <CursorGlow />

      {/* ── Header ─────────────────────────── */}
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 sm:px-8 sm:py-6">
        <div className="flex items-center gap-2.5">
          <BrandMark size={34} />
          <span className="font-display text-[17px] font-semibold tracking-tight text-[color:var(--color-ink)]">
            GymSync
          </span>
        </div>
        <span className="hidden items-center gap-2 rounded-full border border-[color:var(--color-line)] bg-white/70 px-3 py-1.5 text-[11px] font-medium text-[color:var(--color-ink-soft)] backdrop-blur-md sm:inline-flex">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] pulse-dot" />
          Coming soon · iOS
        </span>
      </header>

      {/* ── Content ─────────────────────────── */}
      <section className="relative z-10 flex flex-1 items-center px-6 pb-10 sm:px-8 sm:pb-14 lg:pb-0">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[5fr_6fr] lg:gap-20">
          {/* LEFT — Phone screenshot, no frame, just shadow */}
          <div className="relative flex justify-center rise-in">
            <img
              src="/phone-ui.png"
              alt="GymSync app — live workout starting"
              className="float-soft h-auto w-full max-w-[320px] object-contain drop-shadow-[0_30px_60px_rgba(11,28,54,0.18)] sm:max-w-[360px] lg:max-w-[420px]"
            />
          </div>

          {/* RIGHT — Copy + form */}
          <div className="flex flex-col">
            <h1 className="font-display text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-ink)] sm:text-[44px] lg:text-[56px]">
              Train smarter with your{' '}
              <span className="accent-italic font-normal text-[color:var(--color-accent-deep)]">
                AI gym partner
              </span>
              .
            </h1>

            <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-[color:var(--color-ink-soft)] sm:mt-6 sm:text-base">
              GymSync is a voice-first coach that runs your workout, logs every
              set, and adapts your plan in real time — all hands-free from your
              AirPods.
            </p>

            <div className="mt-7 w-full max-w-[460px] sm:mt-8">
              <WaitlistForm />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12.5px] text-[color:var(--color-ink-soft)]">
              <span className="inline-flex items-center gap-1.5">
                <span className="text-[#E0A100]">★</span>
                <span>
                  <span className="font-semibold text-[color:var(--color-ink)]">First 500</span>{' '}
                  get Pro free for life
                </span>
              </span>
              <span aria-hidden className="opacity-30">·</span>
              <span>
                <span className="font-semibold text-[color:var(--color-ink)]">{left.toLocaleString()}</span>{' '}
                spots left
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer micro ─────────────────────────── */}
      <footer className="relative z-10 mx-auto w-full max-w-6xl px-6 py-5 text-[11px] text-[color:var(--color-ink-dim)] sm:px-8 sm:py-6">
        © {new Date().getFullYear()} GymSync · hello@gymsync.app
      </footer>
    </main>
  );
}
