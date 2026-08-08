import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'GymSync — Put in an earbud. Your coach takes it from there.';

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
            'radial-gradient(circle at 80% 0%, #2E90EA 0%, transparent 50%), radial-gradient(circle at 0% 100%, #1A6BC0 0%, transparent 50%), #0B2447',
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
              background: 'rgba(46, 144, 234, 0.18)',
              color: '#8AC4F4',
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            Voice-first strength coach · iOS
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1050,
            }}
          >
            Put in an earbud. Your coach takes it from there.
          </div>
          <div style={{ fontSize: 32, opacity: 0.75, maxWidth: 950 }}>
            It calls your sets, hears what you lifted, and logs it hands-free.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
