import { Masthead } from "@/components/masthead";
import { SectionHead } from "@/components/section-head";
import { WorkIndex } from "@/components/work-index";
import { Kontak } from "@/components/kontak";
import { karya, profil } from "@/data/profile";

export default function Beranda() {
  return (
    <>
      <Masthead />

      <section id="karya" className="shell scroll-mt-14 pt-24 sm:pt-32">
        <SectionHead label="Karya" catatan={`${karya.length} proyek`} />
        <WorkIndex daftar={karya} />
      </section>

      <section id="profil" className="shell scroll-mt-14 pt-24 sm:pt-32">
        <SectionHead label="Profil" catatan={profil.lokasi} />
        <div className="grid gap-10 border-t border-rule pt-8 md:grid-cols-[1fr_2fr] md:gap-16">
          <p className="label md:pt-1">Tentang</p>
          <div className="max-w-2xl space-y-5 text-[1.0625rem] leading-relaxed sm:text-lg">
            {profil.bio.map((paragraf, i) => (
              <p key={i}>{paragraf}</p>
            ))}
          </div>
        </div>
      </section>

      <Kontak />
    </>
  );
}
