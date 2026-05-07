'use client';

import { useEffect, useRef } from 'react';

const RIPPLE_MIN_DISTANCE = 38;
const RIPPLE_LIFETIME = 1600;
const GLOW_SIZE = 700;

export function CursorGlow() {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    const glow = glowRef.current;
    if (!host || !glow) return;

    const isTouch = window.matchMedia('(hover: none)').matches;

    let raf = 0;
    let lastX = -9999;
    let lastY = -9999;
    let nextX = window.innerWidth / 2;
    let nextY = window.innerHeight / 3;
    let ambientRaf = 0;

    glow.style.opacity = isTouch ? '0.7' : '0';

    // On touch, drift the glow in a slow circle so the background still feels alive.
    if (isTouch) {
      const start = performance.now();
      const drift = (now: number) => {
        const t = (now - start) / 1000;
        const cx = window.innerWidth / 2 + Math.cos(t * 0.35) * window.innerWidth * 0.28;
        const cy = window.innerHeight / 2 + Math.sin(t * 0.45) * window.innerHeight * 0.22;
        glow.style.transform = `translate3d(${cx - GLOW_SIZE / 2}px, ${cy - GLOW_SIZE / 2}px, 0)`;
        ambientRaf = requestAnimationFrame(drift);
      };
      ambientRaf = requestAnimationFrame(drift);
    }

    const onMove = (e: PointerEvent) => {
      nextX = e.clientX;
      nextY = e.clientY;

      if (!isTouch && !raf) {
        raf = requestAnimationFrame(() => {
          glow.style.transform = `translate3d(${nextX - GLOW_SIZE / 2}px, ${
            nextY - GLOW_SIZE / 2
          }px, 0)`;
          glow.style.opacity = '1';
          raf = 0;
        });
      }

      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      if (Math.hypot(dx, dy) >= RIPPLE_MIN_DISTANCE) {
        lastX = e.clientX;
        lastY = e.clientY;
        spawnRipple(host, e.clientX, e.clientY);
      }
    };

    const onTap = (e: PointerEvent) => {
      spawnRipple(host, e.clientX, e.clientY);
    };

    const spawnRipple = (h: HTMLDivElement, x: number, y: number) => {
      const w = window.innerWidth;
      const ht = window.innerHeight;
      const radius = Math.hypot(Math.max(x, w - x), Math.max(y, ht - y));
      const size = Math.ceil(radius * 2);

      const r = document.createElement('span');
      r.className = 'ripple';
      r.style.left = `${x}px`;
      r.style.top = `${y}px`;
      r.style.setProperty('--rsize', `${size}px`);
      h.appendChild(r);
      window.setTimeout(() => r.remove(), RIPPLE_LIFETIME);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onTap, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onTap);
      if (raf) cancelAnimationFrame(raf);
      if (ambientRaf) cancelAnimationFrame(ambientRaf);
    };
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[6] overflow-hidden"
    >
      <div
        ref={glowRef}
        style={{
          position: 'absolute',
          width: GLOW_SIZE,
          height: GLOW_SIZE,
          borderRadius: '9999px',
          background:
            'radial-gradient(circle, rgba(46,144,234,0.55) 0%, rgba(108,182,255,0.28) 30%, rgba(108,182,255,0) 65%)',
          filter: 'blur(8px)',
          transform: `translate3d(-9999px, -9999px, 0)`,
          transition: 'opacity 200ms linear',
          willChange: 'transform, opacity',
          mixBlendMode: 'multiply',
        }}
      />
    </div>
  );
}
