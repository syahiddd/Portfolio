import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { karya } from "@/data/profile";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return karya.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const proyek = karya.find((p) => p.slug === slug);
  if (!proyek) return {};
  return {
    title: proyek.nama,
    description: proyek.ringkas,
    openGraph: { title: proyek.nama, description: proyek.ringkas },
  };
}

export default async function HalamanProyek({ params }: Params) {
  const { slug } = await params;
  const indeks = karya.findIndex((p) => p.slug === slug);
  if (indeks === -1) notFound();

  const proyek = karya[indeks];
  const berikutnya = karya[(indeks + 1) % karya.length];

  const tautan = [
    proyek.demo && { label: "Lihat situs", url: proyek.demo },
    proyek.repo && { label: "Kode sumber", url: proyek.repo },
  ].filter(Boolean) as { label: string; url: string }[];

  const meta = [
    { label: "Tahun", nilai: proyek.tahun },
    { label: "Jenis", nilai: proyek.kategori },
    { label: "Peran", nilai: proyek.peran },
    { label: "Teknologi", nilai: proyek.stack.join(" · ") },
  ];

  return (
    <article className="shell pt-10 pb-24 sm:pt-16 sm:pb-32">
      <Link
        href="/#karya"
        className="label link-sweep text-ink transition-colors duration-300 hover:text-accent"
      >
        ← Semua karya
      </Link>

      <header className="mt-10 border-b border-rule pb-10">
        <h1 className="max-w-4xl font-display text-[clamp(2.25rem,7vw,5rem)] font-bold leading-[0.95] tracking-[-0.04em]">
          {proyek.nama}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {proyek.ringkas}
        </p>
      </header>

      <div className="grid gap-12 pt-10 md:grid-cols-[18rem_1fr] md:gap-16">
        <aside className="md:sticky md:top-24 md:self-start">
          <dl className="space-y-6">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="label mb-2">{m.label}</dt>
                <dd className="text-sm leading-relaxed">{m.nilai}</dd>
              </div>
            ))}
          </dl>

          {tautan.length > 0 && (
            <div className="mt-8 border-t border-rule pt-6">
              <p className="label mb-3">Tautan</p>
              <ul className="space-y-2">
                {tautan.map((t) => (
                  <li key={t.label}>
                    <a
                      href={t.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="link-sweep text-sm transition-colors duration-300 hover:text-accent"
                    >
                      {t.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>

        <div className="min-w-0">
          <div className="max-w-2xl space-y-5 text-[1.0625rem] leading-relaxed sm:text-lg">
            {proyek.deskripsi.map((paragraf, i) => (
              <p key={i}>{paragraf}</p>
            ))}
          </div>

          {proyek.sorotan && proyek.sorotan.length > 0 && (
            <div className="mt-12 border-t border-rule pt-6">
              <p className="label mb-4">Yang dikerjakan</p>
              <ul className="max-w-2xl space-y-3">
                {proyek.sorotan.map((s) => (
                  <li key={s} className="flex gap-4 text-sm leading-relaxed">
                    <span aria-hidden className="text-accent">
                      —
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {proyek.gambar && proyek.gambar.length > 0 && (
            <div className="mt-14 space-y-6">
              {proyek.gambar.map((g) => (
                <Image
                  key={g.src}
                  src={g.src}
                  alt={g.alt}
                  width={1600}
                  height={1000}
                  className="h-auto w-full border border-rule object-cover"
                  sizes="(min-width: 768px) 60vw, 100vw"
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <nav className="mt-24 border-t border-rule pt-6">
        <p className="label mb-4">Selanjutnya</p>
        <Link
          href={`/karya/${berikutnya.slug}`}
          className="group flex items-baseline justify-between gap-6"
        >
          <span className="font-display text-[clamp(1.6rem,4.2vw,3.1rem)] font-semibold leading-tight tracking-[-0.03em] transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:translate-x-2">
            {berikutnya.nama}
          </span>
          <span
            aria-hidden
            className="font-mono text-sm text-muted transition-colors duration-300 group-hover:text-accent"
          >
            ↗
          </span>
        </Link>
      </nav>
    </article>
  );
}
