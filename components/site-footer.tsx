import Image from "next/image";
import { Icon } from "@/components/icon";
import { profil } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="mt-[145px] border-t border-gray pt-8 pb-8">
      <div className="shell flex flex-col gap-12">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="flex items-center gap-[9px] font-medium text-white">
                <Image src="/figma/logo.svg" alt="" width={16} height={16} />
                {profil.nama}
              </span>
              <a
                href={`mailto:${profil.email}`}
                className="text-gray transition-colors duration-200 hover:text-white"
              >
                {profil.email}
              </a>
            </div>
            <p className="text-white">{profil.peran}</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-2xl font-medium text-white">Media</p>
            <div className="flex gap-2">
              {profil.sosial.map((s) => (
                <a
                  key={s.nama}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.nama}
                  className="text-gray transition-colors duration-200 hover:text-white"
                >
                  <Icon nama={s.ikon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-gray">
          © Copyright {new Date().getFullYear()}. Made by {profil.nama} · Built
          with Next.js
        </p>
      </div>
    </footer>
  );
}
