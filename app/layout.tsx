import type { Metadata, Viewport } from 'next';
import { Geist, Instrument_Serif } from 'next/font/google';
import './globals.css';

const sans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Geist({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
  display: 'swap',
});

const serif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
});

const SITE_URL = 'https://gymsync.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'GymSync — Your AI gym partner. Right in your ear.',
  description:
    'Voice-first AI coach that runs your workout, logs every set, and adapts your plan in real time. Join the waitlist — first 500 get Pro free for life.',
  openGraph: {
    title: 'GymSync — Your AI gym partner',
    description:
      'Voice-first coach. Auto-logged sets. Plans that adapt. Join the waitlist.',
    url: SITE_URL,
    siteName: 'GymSync',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GymSync — Your AI gym partner',
    description: 'First 500 founders get Pro free for life. Join the waitlist.',
  },
  icons: {
    icon: '/app-icon.png',
    apple: '/app-icon.png',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#06101F',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
