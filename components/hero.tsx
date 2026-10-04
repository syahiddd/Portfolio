import Image from "next/image";
import { Button } from "@/components/button";
import { Dots } from "@/components/dots";
import { karya, profil } from "@/data/profile";

/** Pengganti foto selama profil.foto kosong: kartu terminal berisi kolofon. */
function KartuTerminal() {
  const baris = [
    { perintah: "whoami", hasil: `${profil.nama} — ${profil.peran}` },
    { perintah: "echo $LOCATION", hasil: profil.lokasi },
    { perintah: "cat focus.txt", hasil: profil.fokus.join(" · ") },
    { perintah: "ls works/ | wc -l", hasil: `${karya.length} projects listed` },
  ];

  return (
    <div className="relative z-10 border border-gray bg-bg">
      <div className="flex items-center justify-between border-b border-gray px-4 py-2">
        <span className="text-white">~/{profil.nama.toLowerCase()}</span>
        <span aria-hidden className="flex gap-2">
          <span className="size-2.5 border border-gray" />
          <span className="size-2.5 border border-gray" />
          <span className="size-2.5 border border-primary bg-primary" />
        </span>
      </div>
      <dl className="space-y-3 p-4 leading-[25px]">
        {baris.map((b) => (
          <div key={b.perintah}>
            <dt>
              <span className="text-primary">$ </span>
              {b.perintah}
            </dt>
            <dd className="text-white">{b.hasil}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function Hero() {
  const peran = profil.peran.toLowerCase();

  return (
    <section className="shell flex flex-col gap-12 pt-6 md:flex-row md:items-center md:justify-between md:gap-4 md:pt-[62px]">
      <div className="md:max-w-[537px]">
        <h1 className="text-[2rem] font-semibold text-white">
          {profil.nama} is a <span className="text-primary">{peran}</span> based
          in <span className="text-primary">{profil.lokasi}</span>
        </h1>
        <p className="mt-6 leading-[25px] text-gray md:mt-8 md:max-w-[463px]">
          {profil.ringkas}
        </p>
        <div className="mt-6">
          <Button href="/#kontak">Contact me!!</Button>
        </div>
      </div>

      <div className="w-full shrink-0 md:w-[469px]">
        <div className="relative pt-4 pl-3">
          <Image
            src="/figma/logo-outline.svg"
            alt=""
            width={53}
            height={53}
            className="absolute top-[57px] left-0 size-[104px] md:top-[84px] md:size-[155px]"
          />

          {profil.foto ? (
            <Image
              src={profil.foto}
              alt={profil.nama}
              width={457}
              height={386}
              priority
              className="relative h-auto w-full"
            />
          ) : (
            <div className="relative ml-9 md:ml-12">
              <KartuTerminal />
            </div>
          )}

          <Dots className="absolute right-2 -bottom-7 z-20 size-[57px] md:right-4 md:size-[84px]" />
        </div>

        <p className="relative z-20 mt-10 flex items-center gap-2.5 border border-gray bg-bg p-2 md:mx-auto md:w-[402px]">
          <span aria-hidden className="size-4 shrink-0 border border-primary bg-primary" />
          <span className="font-medium">
            Status: <span className="font-semibold text-white">{profil.status}</span>
          </span>
        </p>
      </div>
    </section>
  );
}
