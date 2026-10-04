import { Icon } from "@/components/icon";
import { SectionHead } from "@/components/section-head";
import { profil } from "@/data/profile";

const gayaBaris =
  "flex items-center gap-[5px] text-gray transition-colors duration-200 hover:text-white";

export function Kontak() {
  return (
    <section id="kontak" className="shell scroll-mt-20 pt-[112px]">
      <SectionHead label="contacts" className="md:w-[317px]" />

      <div className="-mt-1 flex flex-col justify-between gap-8 md:flex-row md:items-start">
        <p className="font-medium md:max-w-[505px]">
          {profil.status}. Based in {profil.lokasi} — the fastest way to reach
          me is by email.
        </p>

        <div className="self-start border border-gray p-4 md:self-auto">
          <h3 className="mb-4 font-semibold text-white">Message me here</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a href={`mailto:${profil.email}`} className={gayaBaris}>
                <Icon nama="email" />
                {profil.email}
              </a>
            </li>
            {profil.sosial.map((s) => (
              <li key={s.nama}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={gayaBaris}
                >
                  <Icon nama={s.ikon} />
                  {s.handle || s.nama}
                </a>
              </li>
            ))}
            {profil.cv && (
              <li>
                <a href={profil.cv} className={`${gayaBaris} pl-[37px]`}>
                  {"Download CV ->"}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
