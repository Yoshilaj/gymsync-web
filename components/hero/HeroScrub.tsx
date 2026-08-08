'use client';

/**
 * Full-screen scroll-scrubbed hero.
 *
 * /hero-scrub.mp4 is one continuous 30s shot — earbud → lifter → gym → street
 * → city → atmosphere → dive back to the earbud — stitched from keyframe-
 * pinned clips and encoded with a keyframe every 6 frames so currentTime
 * seeks land instantly in both scroll directions.
 *
 * The wrapper is SCRUB_VH tall; the frame pins at 100vh and the film's whole
 * duration maps across the remaining scroll. 800vh ≈ 87vh of scroll per 4s
 * clip — chosen by feel on a trackpad; this constant is the pacing dial.
 *
 * prefers-reduced-motion collapses to one static viewport: poster only,
 * no pin, no scrub.
 */
import { useEffect, useRef, useState } from 'react';
import { APP_STORE_URL } from '@/lib/flags';
import { Seam } from '@/components/site/Seam';

const SCRUB_VH = 800;

export function HeroScrub() {
  const wrapRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const wrap = wrapRef.current;
        const video = videoRef.current;
        if (!wrap || !video) return;
        const scrollable = wrap.offsetHeight - window.innerHeight;
        if (scrollable <= 0) return;
        const p = Math.min(
          1,
          Math.max(0, -wrap.getBoundingClientRect().top / scrollable),
        );
        // readyState >= 1 (HAVE_METADATA) — earlier writes are discarded.
        if (video.readyState >= 1 && Number.isFinite(video.duration)) {
          video.currentTime = p * video.duration;
        }
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <section
      ref={wrapRef}
      aria-label="GymSync — put in an earbud, your coach takes it from there"
      className="relative"
      style={{ height: reduced ? '100vh' : `${SCRUB_VH}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[#0b2447]">
        <video
          ref={videoRef}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
          preload="auto"
          poster="/hero-poster.jpg"
          src="/hero-scrub.mp4"
        />

        {/* Bottom scrim — the app's own gradient for text over imagery. */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[55%]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(11,36,71,0) 0%, rgba(11,36,71,0.62) 100%)',
          }}
        />

        {/* Overlay copy — light treatment over the dark film. */}
        <div className="absolute inset-x-0 bottom-16 md:bottom-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="eyebrow text-white/70">
              iOS · Voice-first strength coach
            </p>
            <h1 className="mt-4 max-w-[13ch] text-[clamp(40px,7vw,84px)] font-extrabold leading-[1.0] tracking-[-0.025em] text-white">
              Put in an earbud.
            </h1>
            <p className="mt-4 max-w-[38ch] text-[clamp(17px,2vw,21px)] leading-snug text-white/80">
              Your coach takes it from there — calling your sets, hearing what
              you lifted, logging it hands-free.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {APP_STORE_URL ? (
                <a
                  href={APP_STORE_URL}
                  className="btn-brand flex h-12 items-center px-7 text-[16px] font-semibold"
                >
                  Download on the App Store
                </a>
              ) : (
                <a
                  href="#get"
                  className="btn-brand flex h-12 items-center px-7 text-[16px] font-semibold"
                >
                  Get notified at launch
                </a>
              )}
              <a
                href="#hear-it"
                className="flex h-12 items-center rounded-full border border-white/25 bg-white/10 px-6 text-[15px] font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                Hear your coach ↓
              </a>
            </div>
          </div>
        </div>

        {!reduced && (
          <p
            aria-hidden
            className="eyebrow absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50"
          >
            Scroll
          </p>
        )}

        <Seam />
      </div>
    </section>
  );
}
