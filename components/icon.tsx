import type { CSSProperties } from "react";

/** Ikon dari /public/figma/<nama>.svg, diwarnai lewat currentColor. */
export function Icon({
  nama,
  ukuran = 32,
  className = "",
}: {
  nama: string;
  ukuran?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`icon-mask ${className}`}
      style={
        {
          "--icon": `url(/figma/${nama}.svg)`,
          width: ukuran,
          height: ukuran,
        } as CSSProperties
      }
    />
  );
}
