import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

/**
 * One family, like the app: gymsync-app renders everything in Inter 400–800
 * (src/theme/typography.ts). Display is a weight-and-tracking role, not a
 * second face — so a single variable load covers the whole site.
 */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const SITE_URL = 'https://gymsyncapp.me';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'GymSync — Your coach talks you through every set',
  description:
    'A voice-first AI strength coach for iOS. Put in an earbud: it calls your sets, hears what you lifted, logs it hands-free, and adapts your plan as you train.',
  openGraph: {
    title: 'GymSync — Put in an earbud. Your coach takes it from there.',
    description:
      'Voice coaching in your ear, hands-free set logging, and a plan built from your own numbers. iOS.',
    url: SITE_URL,
    siteName: 'GymSync',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GymSync — Your coach talks you through every set',
    description:
      'Voice coaching in your ear, hands-free set logging, and a plan built from your own numbers. iOS.',
  },
  icons: {
    icon: '/app-icon.png',
    apple: '/app-icon.png',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  /* The page opens on the dark hero film — match the browser chrome to it. */
  themeColor: '#0b2447',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
