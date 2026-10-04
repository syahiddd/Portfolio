import Link from "next/link";
import type { ReactNode } from "react";

const gaya = {
  primary:
    "border-primary text-white hover:bg-primary/20 focus-visible:bg-primary/20",
  secondary:
    "border-gray text-gray hover:bg-gray/20 focus-visible:bg-gray/20",
};

/** Tombol bergaris dari desain: Primary (ungu) dan Secondary (abu). */
export function Button({
  href,
  children,
  varian = "primary",
  luar = false,
}: {
  href: string;
  children: ReactNode;
  varian?: keyof typeof gaya;
  /** Tautan ke situs lain: buka di tab baru. */
  luar?: boolean;
}) {
  const kelas = `inline-flex items-start border px-4 py-2 font-medium whitespace-nowrap transition-colors duration-200 ${gaya[varian]}`;

  if (luar) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={kelas}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={kelas}>
      {children}
    </Link>
  );
}
