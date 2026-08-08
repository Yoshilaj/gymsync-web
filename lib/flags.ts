/**
 * The one launch-day switch.
 *
 * null  → the app is not on the App Store yet; every CTA renders the
 *         "Get notified at launch" waitlist form (components/WaitlistForm).
 * URL   → every CTA becomes a Download-on-the-App-Store button.
 *
 * Set it once when Apple approves; nothing else on the site moves.
 */
export const APP_STORE_URL: string | null = null;
