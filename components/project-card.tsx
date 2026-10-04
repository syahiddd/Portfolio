import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import type { Proyek } from "@/data/profile";

/** Kartu proyek dari desain: gambar, baris stack, judul, ringkasan, tombol. */
export function ProjectCard({ proyek }: { proyek: Proyek }) {
  const href = `/karya/${proyek.slug}`;

  return (
    <article className="flex flex-col border border-gray">
      <Link
        href={href}
        tabIndex={-1}
        aria-hidden
        className="group relative block h-[201px] overflow-hidden border-b border-gray"
      >
        {proyek.sampul ? (
          <Image
            src={proyek.sampul}
            alt=""
            fill
            sizes="(min-width: 1024px) 331px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-[1.03]"
          />
        ) : (
          <span className="flex size-full items-end p-4 text-2xl font-medium text-white">
            {proyek.nama}
          </span>
        )}
      </Link>

      <p className="flex flex-wrap gap-x-2 p-2">
        {proyek.stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </p>

      <div className="flex flex-1 flex-col items-start gap-4 border-t border-gray p-4">
        <h3 className="text-2xl font-medium text-white">
          <Link href={href} className="transition-colors duration-200 hover:text-primary">
            {proyek.nama}
          </Link>
        </h3>
        <p className="flex-1">{proyek.ringkas}</p>
        <div className="flex flex-wrap gap-4">
          <Button href={href}>{"Detail ~~>"}</Button>
          {proyek.demo && (
            <Button href={proyek.demo} varian="secondary" luar>
              {"Live <~>"}
            </Button>
          )}
          {proyek.repo && (
            <Button href={proyek.repo} varian="secondary" luar>
              {"Github >="}
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
