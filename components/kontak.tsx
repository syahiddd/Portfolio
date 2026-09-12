import { SectionHead } from "@/components/section-head";
import { profil } from "@/data/profile";

export function Kontak() {
  return (
    <section id="kontak" className="shell scroll-mt-14 pt-24 pb-24 sm:pt-32 sm:pb-32">
      <SectionHead label="Kontak" catatan={profil.status} />

      <div className="border-t border-rule pt-8">
        <a
          href={`mailto:${profil.email}`}
          className="link-sweep font-display text-[clamp(1.75rem,6.5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.035em] transition-colors duration-300 hover:text-accent"
        >
          {profil.email}
        </a>

        <div className="mt-14 grid gap-10 border-t border-rule pt-8 sm:grid-cols-2 md:grid-cols-[1fr_1fr_1fr]">
          <div>
            <p className="label mb-3">Tempat</p>
            <p className="text-sm leading-relaxed">{profil.lokasi}</p>
          </div>

          <div>
            <p className="label mb-3">Di tempat lain</p>
            <ul className="space-y-2">
              {profil.sosial.map((s) => (
                <li key={s.nama}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-sweep text-sm transition-colors duration-300 hover:text-accent"
                  >
                    {s.nama}
                    {s.handle && (
                      <span className="ml-2 text-muted">{s.handle}</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {profil.cv && (
            <div>
              <p className="label mb-3">Berkas</p>
              <a
                href={profil.cv}
                className="link-sweep text-sm transition-colors duration-300 hover:text-accent"
              >
                Unduh CV
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
