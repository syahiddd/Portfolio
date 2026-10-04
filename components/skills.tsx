import Image from "next/image";
import { Dots } from "@/components/dots";
import { SectionHead } from "@/components/section-head";
import { profil } from "@/data/profile";

/** Komposisi dekoratif di kiri bagian skills (sesuai desain). */
function Hiasan() {
  return (
    <div aria-hidden className="relative hidden h-[282px] w-[349px] shrink-0 md:block">
      <Dots className="absolute top-[38px] left-0 size-[63px]" />
      <Dots className="absolute top-[143px] left-[177px] size-[63px]" />
      <span className="absolute top-[193px] left-[297px] size-[52px] border border-gray" />
      <span className="absolute top-0 left-[227px] size-[86px] border border-gray" />
      <Image
        src="/figma/logo-large.svg"
        alt=""
        width={114}
        height={114}
        className="absolute top-[169px] left-[15px] size-[113px]"
      />
    </div>
  );
}

export function Skills() {
  return (
    <section id="keahlian" className="shell scroll-mt-20 pt-[106px]">
      <SectionHead label="skills" className="md:w-[391px]" />

      <div className="flex flex-col gap-8 md:-mt-1 md:flex-row md:justify-between">
        <Hiasan />

        <div className="columns-2 gap-4 sm:columns-3 md:w-[584px]">
          {profil.keahlian.map((k) => (
            <div key={k.nama} className="mb-4 break-inside-avoid border border-gray py-2">
              <h3 className="px-2 font-semibold text-white">{k.nama}</h3>
              <span aria-hidden className="my-2 block h-px bg-gray" />
              <p className="flex flex-wrap gap-x-2 gap-y-2 px-2">
                {k.isi.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
