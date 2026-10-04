"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/icon";
import { profil } from "@/data/profile";

const tautan = [
  { label: "home", href: "/" },
  { label: "works", href: "/#karya" },
  { label: "about-me", href: "/#profil" },
  { label: "contacts", href: "/#kontak" },
];

const formatWaktu = new Intl.DateTimeFormat("id-ID", {
  timeZone: "Asia/Jakarta",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

/** Jam waktu Jakarta. Kosong sampai komponen terpasang, supaya server dan
 * klien merender hal yang sama. */
function JamWib() {
  const [waktu, setWaktu] = useState<string | null>(null);

  useEffect(() => {
    const perbarui = () => setWaktu(formatWaktu.format(new Date()));
    perbarui();
    const id = window.setInterval(perbarui, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="font-semibold text-gray tabular-nums" suppressHydrationWarning>
      {waktu ? `${waktu} WIB` : " "}
    </span>
  );
}

function Merek({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="flex items-center gap-2 font-bold text-white">
      <Image src="/figma/logo.svg" alt="" width={16} height={16} />
      {profil.nama}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [buka, setBuka] = useState(false);

  // Halaman proyek dianggap bagian dari "works".
  const aktif = pathname.startsWith("/karya") ? "works" : pathname === "/" ? "home" : null;

  useEffect(() => {
    if (!buka) return;
    document.body.style.overflow = "hidden";
    const tutup = (e: KeyboardEvent) => e.key === "Escape" && setBuka(false);
    window.addEventListener("keydown", tutup);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", tutup);
    };
  }, [buka]);

  return (
    <header className="sticky top-0 z-40 bg-bg">
      <div className="shell flex items-end justify-between pt-4 pb-2 md:pt-8">
        <Merek />

        <nav className="hidden items-start gap-8 md:flex">
          {tautan.map((item) => {
            const ini = item.label === aktif;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={ini ? "page" : undefined}
                className={`group ${ini ? "font-medium" : ""}`}
              >
                <span className="text-primary">#</span>
                <span
                  className={`transition-colors duration-200 group-hover:text-white ${ini ? "text-white" : "text-gray"}`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
          <JamWib />
        </nav>

        <button
          type="button"
          onClick={() => setBuka(true)}
          aria-label="Open menu"
          aria-expanded={buka}
          className="relative size-6 md:hidden"
        >
          <span className="absolute top-[5px] left-0 h-0.5 w-6 bg-[#d9d9d9]" />
          <span className="absolute top-3 left-[9px] h-0.5 w-[15px] bg-[#d9d9d9]" />
        </button>
      </div>

      {buka && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex flex-col bg-bg md:hidden"
        >
          <div className="shell flex w-full items-end justify-between pt-4 pb-2">
            <Merek onClick={() => setBuka(false)} />
            <button
              type="button"
              onClick={() => setBuka(false)}
              aria-label="Close menu"
              className="relative size-6"
            >
              <span className="absolute top-[11px] left-0 h-0.5 w-6 rotate-45 bg-[#d9d9d9]" />
              <span className="absolute top-[11px] left-0 h-0.5 w-6 -rotate-45 bg-[#d9d9d9]" />
            </button>
          </div>

          <nav className="shell mt-[47px] flex w-full flex-col items-start gap-8 text-[2rem]">
            {tautan.map((item) => {
              const ini = item.label === aktif;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setBuka(false)}
                  aria-current={ini ? "page" : undefined}
                  className={ini ? "font-medium" : ""}
                >
                  <span className="text-primary">#</span>
                  <span className={ini ? "text-white" : "text-gray"}>{item.label}</span>
                </Link>
              );
            })}
            <JamWib />
          </nav>

          <div className="mt-auto mb-9 flex justify-center gap-2">
            {profil.sosial.map((s) => (
              <a
                key={s.nama}
                href={s.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.nama}
                className="text-gray transition-colors hover:text-white"
              >
                <Icon nama={s.ikon} ukuran={64} />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
