/**
 * A real screenshot presented as a surface: the app's hero-card language —
 * radius.xl, white body, navy-tinted shadow, no border. The screenshots are
 * genuine app captures (marketing/app_preview sources); nothing on this site
 * renders a mocked UI.
 */
import Image from 'next/image';
import clsx from 'clsx';

export function DeviceFrame({
  src,
  alt,
  width,
  height,
  priority = false,
  bare = false,
  className,
}: {
  src: string;
  alt: string;
  /** The file's real pixel dimensions — the shots have differing crops. */
  width: number;
  height: number;
  priority?: boolean;
  /**
   * For transparent phone mockups that carry their own bezel: no card
   * chrome (a bezel inside a card is a frame in a frame), just a soft
   * navy drop-shadow following the phone's silhouette.
   */
  bare?: boolean;
  className?: string;
}) {
  if (bare) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={clsx(
          'h-auto w-full drop-shadow-[0_28px_44px_rgba(11,36,71,0.30)]',
          className,
        )}
        sizes="(min-width: 900px) 320px, 70vw"
      />
    );
  }
  return (
    <div
      className={clsx(
        'overflow-hidden rounded-[24px] bg-card p-2 shadow-card-lg',
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-full rounded-[16px]"
        sizes="(min-width: 900px) 320px, 70vw"
      />
    </div>
  );
}
