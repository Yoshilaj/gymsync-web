'use client';

/**
 * The page's signature: a thin waveform pinned to the very top edge of the
 * viewport. Flat and quiet at rest; when any line plays it draws live
 * amplitude in the speaking voice's color — brand blue for the coach, live
 * orange for you. These are the app's own token semantics (VoiceWaveform
 * renders the identical split in-session), so the site's one persistent
 * ornament is also its most literal piece of app UI.
 */
import { useEffect, useRef } from 'react';
import { subscribe } from '@/lib/audio';

const COACH = '#2e90ea';
const YOU = '#ff7a45';
const IDLE = 'rgba(11, 36, 71, 0.16)';
const HEIGHT = 4;

export function WaveRibbon() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx2d = canvas.getContext('2d');
    if (!ctx2d) return;

    let raf = 0;
    let playing = false;
    let color = COACH;
    let analyser: AnalyserNode | null = null;
    let data: Uint8Array<ArrayBuffer> | null = null;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = HEIGHT * dpr;
      ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const w = () => window.innerWidth;

    const drawIdle = () => {
      ctx2d.clearRect(0, 0, w(), HEIGHT);
      ctx2d.fillStyle = IDLE;
      // Quiet dashes — the wireframe's resting ribbon, kept.
      for (let x = 0; x < w(); x += 6) ctx2d.fillRect(x, HEIGHT / 2 - 0.5, 3, 1);
    };

    const drawLive = () => {
      if (!analyser || !data) return;
      analyser.getByteFrequencyData(data);
      ctx2d.clearRect(0, 0, w(), HEIGHT);
      ctx2d.fillStyle = color;
      const bins = data.length;
      const step = Math.max(1, Math.floor(bins / (w() / 5)));
      let x = 0;
      for (let i = 0; i < bins && x < w(); i += step) {
        const v = data[i] / 255;
        const h = Math.max(1, v * HEIGHT);
        ctx2d.fillRect(x, (HEIGHT - h) / 2, 3, h);
        x += 5;
      }
    };

    const loop = () => {
      if (playing) {
        drawLive();
        raf = requestAnimationFrame(loop);
      } else {
        drawIdle();
      }
    };

    drawIdle();
    const unsub = subscribe((state, a) => {
      playing = state.playing;
      color = state.role === 'you' ? YOU : COACH;
      if (a && a !== analyser) {
        analyser = a;
        data = new Uint8Array(new ArrayBuffer(a.frequencyBinCount));
      }
      cancelAnimationFrame(raf);
      loop();
    });

    return () => {
      unsub();
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60]"
      style={{ height: HEIGHT }}
    />
  );
}
