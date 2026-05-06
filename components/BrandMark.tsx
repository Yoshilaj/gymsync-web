'use client';

import { useState } from 'react';

type Props = { size?: number; className?: string };

export function BrandMark({ size = 36, className = '' }: Props) {
  const [imgFailed, setImgFailed] = useState(false);
  const rounded = Math.round(size * 0.22);

  if (!imgFailed) {
    return (
      <img
        src="/app-icon.png"
        alt="GymSync"
        width={size}
        height={size}
        onError={() => setImgFailed(true)}
        className={`shrink-0 object-cover shadow-[0_8px_20px_-6px_rgba(46,144,234,0.55)] ring-1 ring-white/15 ${className}`}
        style={{ width: size, height: size, borderRadius: rounded }}
      />
    );
  }

  // CSS fallback when image not yet present
  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br from-[#5BB0FF] to-[#2E90EA] shadow-[0_8px_20px_-6px_rgba(46,144,234,0.55)] ring-1 ring-white/15 ${className}`}
      style={{ width: size, height: size, borderRadius: rounded }}
    >
      <svg viewBox="0 0 32 32" fill="none" width={size * 0.62} height={size * 0.62} aria-hidden>
        <rect x="3" y="14" width="3" height="4" rx="0.8" fill="white" />
        <rect x="6" y="13" width="2" height="6" rx="0.6" fill="white" />
        <rect x="24" y="13" width="2" height="6" rx="0.6" fill="white" />
        <rect x="26" y="14" width="3" height="4" rx="0.8" fill="white" />
        <path d="M9 16 C 11 11, 15 11, 16 16 C 17 21, 21 21, 23 16" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}
