import { Icon } from "@/components/icon";
import { profil } from "@/data/profile";

/** Garis tegak + ikon sosial di tepi kiri halaman (hanya layar lebar). */
export function MediaRail() {
  return (
    <div className="absolute top-0 left-[17px] z-40 hidden flex-col items-center gap-2 xl:flex">
      <span aria-hidden className="h-[191px] w-px bg-gray" />
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
  );
}
