/**
 * The concave seam — the app's accepted hero-to-content transition (the
 * Progress header's full-bleed gradient ends in exactly this curve). Sits at
 * the bottom of the dark hero video and scoops down into the light page, so
 * the film and the paper meet the way the app's surfaces do.
 */
export function Seam({ fill = 'var(--color-bg)' }: { fill?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 72"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-[48px] w-full md:h-[72px]"
    >
      <path d="M0 72 L0 40 Q 720 -40 1440 40 L1440 72 Z" fill={fill} />
    </svg>
  );
}
