import Link from "next/link";

export default function TidakDitemukan() {
  return (
    <div className="shell flex min-h-[60vh] flex-col justify-center py-24">
      <p className="label mb-4">404</p>
      <h1 className="max-w-3xl font-display text-[clamp(2rem,6vw,4rem)] font-bold leading-[0.95] tracking-[-0.04em]">
        Halaman ini tidak ada.
      </h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
        Alamatnya mungkin salah ketik, atau halamannya sudah dipindah.
      </p>
      <Link
        href="/"
        className="label link-sweep mt-10 self-start text-ink transition-colors duration-300 hover:text-accent"
      >
        ← Kembali ke beranda
      </Link>
    </div>
  );
}
