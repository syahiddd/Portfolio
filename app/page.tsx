import Image from "next/image";
import { Dots } from "@/components/dots";
import { Hero } from "@/components/hero";
import { Kontak } from "@/components/kontak";
import { ProjectCard } from "@/components/project-card";
import { SectionHead } from "@/components/section-head";
import { Skills } from "@/components/skills";
import { karya, profil } from "@/data/profile";

/** Kotak & titik di tepi layar, seperti latar desain. Hanya di layar lebar. */
function Tepi({ className, kotak }: { className: string; kotak?: boolean }) {
  return kotak ? (
    <span
      aria-hidden
      className={`pointer-events-none absolute hidden border border-gray xl:block ${className}`}
    />
  ) : (
    <Dots className={`absolute hidden xl:grid ${className}`} />
  );
}

export default function Beranda() {
  return (
    <>
      <Hero />

      <section id="karya" className="relative scroll-mt-20 pt-[112px]">
        <Tepi kotak className="-top-2 -right-[9px] size-[91px]" />
        <Tepi className="top-[177px] -left-[46px] size-[84px]" />
        <Tepi kotak className="top-[382px] -right-[87px] size-[155px]" />

        <div className="shell">
          <SectionHead
            label="projects"
            className="md:w-[701px]"
            aside={
              <span className="hidden font-medium whitespace-nowrap text-white sm:inline">
                {karya.length} projects
              </span>
            }
          />
          <div className="-mt-1 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {karya.map((p) => (
              <ProjectCard key={p.slug} proyek={p} />
            ))}
          </div>
        </div>
      </section>

      <Skills />

      <section id="profil" className="relative scroll-mt-20 pt-[112px]">
        <Tepi kotak className="top-[246px] -left-[77px] size-[155px]" />
        <Tepi className="top-[415px] -right-[23px] size-[103px]" />

        <div className="shell flex flex-col justify-between gap-12 md:flex-row">
          <div className="md:w-[516px]">
            <SectionHead label="about-me" className="md:w-full" />
            <div className="-mt-6 space-y-[26px] leading-[26px] md:max-w-[515px]">
              <p>Hello, i’m {profil.nama}!</p>
              {profil.bio.map((paragraf, i) => (
                <p key={i}>{paragraf}</p>
              ))}
            </div>
          </div>

          {profil.foto ? (
            <div className="relative mx-auto w-[343px] shrink-0 md:mx-0">
              <Image
                src={profil.foto}
                alt={profil.nama}
                width={339}
                height={507}
                className="ml-1 h-[507px] w-[339px] object-cover"
              />
              <Dots className="absolute top-[59px] left-0 size-[84px]" />
              <Dots kolom={5} baris={4} className="absolute top-[279px] left-[223px] h-14 w-[104px]" />
              <span aria-hidden className="absolute bottom-0 left-12 h-px w-[271px] bg-primary" />
            </div>
          ) : (
            <div aria-hidden className="relative hidden w-[343px] shrink-0 md:block">
              <Dots className="absolute top-[59px] left-0 size-[84px]" />
            </div>
          )}
        </div>
      </section>

      <div className="relative">
        <Tepi className="top-[206px] -left-[51px] size-[103px]" />
        <Kontak />
      </div>
    </>
  );
}
