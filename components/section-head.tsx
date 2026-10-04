import type { ReactNode } from "react";

/** Judul bagian: "#label" lalu garis ungu. Lebar garis diatur lewat className. */
export function SectionHead({
  label,
  className = "",
  aside,
}: {
  label: string;
  /** Lebar judul + garis, mis. "md:w-[701px]" */
  className?: string;
  /** Isi di ujung kanan, mis. tautan atau jumlah. */
  aside?: ReactNode;
}) {
  return (
    <div className="mb-12 flex items-center justify-between gap-6">
      <div className={`flex min-w-0 flex-1 items-center gap-4 md:flex-none ${className}`}>
        <h2 className="text-[2rem] font-medium whitespace-nowrap text-white">
          <span className="text-primary">#</span>
          {label}
        </h2>
        <span aria-hidden className="h-px min-w-8 flex-1 bg-primary" />
      </div>
      {aside}
    </div>
  );
}

/** Judul halaman: "/nama" dan satu baris keterangan. */
export function PageTitle({
  judul,
  keterangan,
}: {
  judul: string;
  keterangan?: string;
}) {
  return (
    <div>
      <h1 className="text-[2rem] font-semibold text-white">
        <span className="text-primary">/</span>
        {judul}
      </h1>
      {keterangan && <p className="mt-3.5 text-white">{keterangan}</p>}
    </div>
  );
}
