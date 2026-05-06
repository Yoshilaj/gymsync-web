import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'GymSync — Your AI gym partner. Right in your ear.';

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '80px',
          background:
            'radial-gradient(circle at 80% 0%, #2E90EA 0%, transparent 50%), radial-gradient(circle at 0% 100%, #1B6FBF 0%, transparent 50%), #0B2447',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 28,
            fontWeight: 600,
            opacity: 0.9,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: '#2E90EA',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 22,
              fontWeight: 800,
            }}
          >
            GS
          </div>
          GymSync
        </div>

        <div
          style={{
            marginTop: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignSelf: 'flex-start',
              padding: '8px 16px',
              borderRadius: 999,
              background: 'rgba(228, 166, 47, 0.18)',
              color: '#FFC857',
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            ★ First 500 get Pro free for life
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            Your AI gym partner. Right in your ear.
          </div>
          <div style={{ fontSize: 32, opacity: 0.75, maxWidth: 900 }}>
            Voice-first coach. Auto-logged sets. Plans that adapt to you.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
