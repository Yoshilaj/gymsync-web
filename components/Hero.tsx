import { WaitlistForm } from './WaitlistForm';
import { BrandMark } from './BrandMark';

type Props = { signups: number; cap: number };

export function Hero({ signups, cap }: Props) {
  const left = Math.max(cap - signups, 0);

  return (
    <main className="relative flex min-h-[100svh] w-full flex-col overflow-hidden text-white">
      {/* ── Background ─────────────────────────── */}
      {/* The actual gym photo, sharp and clearly visible */}
      <div
        aria-hidden
        className="absolute inset-0 -z-30 bg-cover bg-center [background-image:url('/gym-bg.jpg')]"
      />
      {/* CSS fallback gradient (only shows if image fails to load) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-40 bg-[radial-gradient(ellipse_at_top_right,#1A3A6B_0%,#08152C_45%,#040A18_100%)]"
      />
      {/* Soft cinematic darken — keeps photo legible but not flat */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[linear-gradient(120deg,rgba(4,10,24,0.62)_0%,rgba(8,22,46,0.30)_50%,rgba(4,10,24,0.70)_100%)]"
      />
      {/* Subtle blue accent glows for atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,rgba(108,182,255,0.18),transparent_55%),radial-gradient(circle_at_10%_85%,rgba(46,144,234,0.14),transparent_55%)]"
      />

      {/* ── Header ─────────────────────────── */}
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 sm:px-8 sm:py-6">
        <div className="flex items-center gap-2.5">
          <BrandMark size={34} />
          <span className="font-display text-[17px] font-semibold tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            GymSync
          </span>
        </div>
        <span className="hidden items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[11px] font-medium text-white/80 backdrop-blur-md sm:inline-flex">
          <span className="h-1.5 w-1.5 rounded-full bg-[#6CB6FF] pulse-dot" />
          Coming soon · iOS
        </span>
      </header>

      {/* ── Content ─────────────────────────── */}
      <section className="relative z-10 flex flex-1 items-center px-6 pb-10 sm:px-8 sm:pb-14 lg:pb-0">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[5fr_6fr] lg:gap-20">
          {/* LEFT — Glass card with tilted phone screenshot */}
          <div className="relative rise-in">
            <div className="relative mx-auto rounded-[32px] border border-white/15 bg-white/[0.06] p-6 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.1)] backdrop-blur-xl sm:p-8 lg:p-10">
              {/* glow behind phone */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-12 top-1/4 -z-0 h-2/3 rounded-[60%] bg-[radial-gradient(circle,rgba(108,182,255,0.4),transparent_65%)] blur-2xl"
              />

              {/* The tilted phone image */}
              <div className="relative flex items-center justify-center">
                <img
                  src="/phone-ui.png"
                  alt="GymSync app — live workout starting"
                  className="float-soft h-auto w-full max-w-[320px] object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)] sm:max-w-[360px] lg:max-w-[420px]"
                />
              </div>

              {/* Floating chip — top-left */}
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-2xl border border-white/15 bg-black/55 px-3 py-2 shadow-lg backdrop-blur-md sm:left-5 sm:top-5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#6CB6FF]/20 text-[#9CCBFF]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M19 11a7 7 0 1 1-14 0M12 18v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                <div className="leading-tight">
                  <p className="text-[12px] font-semibold text-white">Voice coach</p>
                  <p className="text-[10.5px] text-white/60">Hands-free</p>
                </div>
              </div>

              {/* Floating chip — bottom-right */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-2xl border border-white/15 bg-black/55 px-3 py-2 shadow-lg backdrop-blur-md sm:bottom-5 sm:right-5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#5BE6A6]/20 text-[#5BE6A6]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div className="leading-tight">
                  <p className="text-[12px] font-semibold text-white">Auto-logged</p>
                  <p className="text-[10.5px] text-white/60">Sets &amp; reps</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Copy + form */}
          <div className="flex flex-col">
            <h1 className="font-display text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)] sm:text-[44px] lg:text-[56px]">
              Train smarter with your{' '}
              <span className="accent-italic font-normal text-[#9CCBFF]">
                AI gym partner
              </span>
              .
            </h1>

            <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-white/80 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] sm:mt-6 sm:text-base">
              GymSync is a voice-first coach that runs your workout, logs every
              set, and adapts your plan in real time — all hands-free from your
              AirPods.
            </p>

            <div className="mt-7 w-full max-w-[460px] sm:mt-8">
              <WaitlistForm />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12.5px] text-white/70 drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
              <span className="inline-flex items-center gap-1.5">
                <span className="text-[#FFC857]">★</span>
                <span>
                  <span className="font-semibold text-white">First 500</span>{' '}
                  get Pro free for life
                </span>
              </span>
              <span aria-hidden className="opacity-30">·</span>
              <span>
                <span className="font-semibold text-white">{left.toLocaleString()}</span>{' '}
                spots left
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer micro ─────────────────────────── */}
      <footer className="relative z-10 mx-auto w-full max-w-6xl px-6 py-5 text-[11px] text-white/45 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] sm:px-8 sm:py-6">
        © {new Date().getFullYear()} GymSync · hello@gymsync.app
      </footer>
    </main>
  );
}
