import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/button";
import { PageTitle } from "@/components/section-head";
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

  const meta = [
    { label: "Year", nilai: proyek.tahun },
    { label: "Type", nilai: proyek.kategori },
    { label: "Role", nilai: proyek.peran },
  ];

  return (
    <article className="shell pt-10 md:pt-[52px]">
      <Link
        href="/#karya"
        className="mb-8 inline-block text-gray transition-colors duration-200 hover:text-white"
      >
        {"<~ all works"}
      </Link>

      <PageTitle judul={proyek.nama} keterangan={proyek.ringkas} />

      {proyek.sampul && (
        <div className="relative mt-12 aspect-[16/9] overflow-hidden border border-gray">
          <Image
            src={proyek.sampul}
            alt={proyek.nama}
            fill
            priority
            sizes="(min-width: 1056px) 1024px, 100vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="mt-12 grid gap-12 md:grid-cols-[1fr_17rem] md:gap-16">
        <div className="min-w-0">
          <div className="space-y-[26px] leading-[26px]">
            {proyek.deskripsi.map((paragraf, i) => (
              <p key={i}>{paragraf}</p>
            ))}
          </div>

          {proyek.sorotan && proyek.sorotan.length > 0 && (
            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-medium text-white">
                <span className="text-primary">#</span>highlights
              </h2>
              <ul className="space-y-3">
                {proyek.sorotan.map((s) => (
                  <li key={s} className="flex gap-3 leading-[26px]">
                    <span aria-hidden className="shrink-0 text-primary">
                      {"->"}
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {proyek.gambar && proyek.gambar.length > 0 && (
            <div className="mt-12 space-y-4">
              {proyek.gambar.map((g) => (
                <Image
                  key={g.src}
                  src={g.src}
                  alt={g.alt}
                  width={1600}
                  height={1000}
                  className="h-auto w-full border border-gray object-cover"
                  sizes="(min-width: 768px) 60vw, 100vw"
                />
              ))}
            </div>
          )}
        </div>

        <aside className="flex flex-col gap-4 md:sticky md:top-24 md:self-start">
          <dl className="border border-gray py-2">
            {meta.map((m, i) => (
              <div key={m.label}>
                {i > 0 && <span aria-hidden className="my-2 block h-px bg-gray" />}
                <dt className="px-2 font-semibold text-white">{m.label}</dt>
                <dd className="px-2">{m.nilai}</dd>
              </div>
            ))}
          </dl>

          <div className="border border-gray py-2">
            <p className="px-2 font-semibold text-white">Stack</p>
            <span aria-hidden className="my-2 block h-px bg-gray" />
            <p className="flex flex-wrap gap-x-2 gap-y-2 px-2">
              {proyek.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </p>
          </div>

          {(proyek.demo || proyek.repo) && (
            <div className="flex flex-wrap gap-4">
              {proyek.demo && (
                <Button href={proyek.demo} luar>
                  {"Live <~>"}
                </Button>
              )}
              {proyek.repo && (
                <Button href={proyek.repo} varian={proyek.demo ? "secondary" : "primary"} luar>
                  {"Github >="}
                </Button>
              )}
            </div>
          )}
        </aside>
      </div>

      <nav className="mt-[112px] flex items-center gap-4">
        <span aria-hidden className="h-px flex-1 bg-primary" />
        <Link
          href={`/karya/${berikutnya.slug}`}
          className="group text-right"
        >
          <span className="block text-gray">next project</span>
          <span className="text-2xl font-medium text-white transition-colors duration-200 group-hover:text-primary">
            {berikutnya.nama} {"~~>"}
          </span>
        </Link>
      </nav>
    </article>
  );
}
