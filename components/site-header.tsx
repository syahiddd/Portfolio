"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profil } from "@/data/profile";

const tautan = [
  { label: "Work", href: "/#karya" },
  { label: "Profile", href: "/#profil" },
  { label: "Contact", href: "/#kontak" },
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
    <span className="label tabular-nums" suppressHydrationWarning>
      {waktu ? `${waktu} WIB` : " "}
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/85 backdrop-blur-md">
      <div className="shell flex h-14 items-center justify-between gap-6">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight"
        >
          {profil.nama}
        </Link>

        <nav className="flex items-center gap-5 sm:gap-8">
          {tautan.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="label link-sweep text-ink transition-colors duration-300 hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <span
            aria-hidden
            className="hidden h-3 w-px bg-rule md:inline-block"
          />
          <span className="hidden md:inline-block">
            <JamWib />
          </span>
        </nav>
      </div>
    </header>
  );
}
