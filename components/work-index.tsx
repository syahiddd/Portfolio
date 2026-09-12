"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Proyek } from "@/data/profile";

const LEBAR_PRATINJAU = 340;
const TINGGI_PRATINJAU = 226;

export function WorkIndex({ daftar }: { daftar: Proyek[] }) {
  const [aktif, setAktif] = useState<number | null>(null);
  const [halus, setHalus] = useState(false);

  const kotak = useRef<HTMLDivElement>(null);
  const tujuan = useRef({ x: 0, y: 0 });
  const posisi = useRef({ x: 0, y: 0 });

  // Pratinjau yang mengikuti kursor hanya untuk tetikus, dan dimatikan kalau
  // pengguna minta gerakan dikurangi.
  useEffect(() => {
    const bisa =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setHalus(bisa);
  }, []);

  useEffect(() => {
    if (!halus) return;
    let id = 0;
    const jalan = () => {
      posisi.current.x += (tujuan.current.x - posisi.current.x) * 0.16;
      posisi.current.y += (tujuan.current.y - posisi.current.y) * 0.16;
      if (kotak.current) {
        kotak.current.style.transform = `translate3d(${posisi.current.x}px, ${posisi.current.y}px, 0)`;
      }
      id = requestAnimationFrame(jalan);
    };
    id = requestAnimationFrame(jalan);
    return () => cancelAnimationFrame(id);
  }, [halus]);

  const catatPosisi = useCallback((e: React.PointerEvent) => {
    tujuan.current = {
      x: e.clientX - LEBAR_PRATINJAU / 2,
      y: e.clientY - TINGGI_PRATINJAU / 2,
    };
  }, []);

  const masukBaris = useCallback(
    (e: React.PointerEvent, i: number) => {
      catatPosisi(e);
      // Baris pertama yang disentuh: tempatkan langsung, jangan meluncur dari sudut.
      if (aktif === null) {
        posisi.current = { ...tujuan.current };
        if (kotak.current) {
          kotak.current.style.transform = `translate3d(${posisi.current.x}px, ${posisi.current.y}px, 0)`;
        }
      }
      setAktif(i);
    },
    [aktif, catatPosisi],
  );

  const proyekAktif = aktif === null ? null : daftar[aktif];

  return (
    <div onPointerMove={halus ? catatPosisi : undefined}>
      <ul className="border-b border-rule">
        {daftar.map((p, i) => (
          <li key={p.slug}>
            <Link
              href={`/karya/${p.slug}`}
              onPointerEnter={halus ? (e) => masukBaris(e, i) : undefined}
              onPointerLeave={halus ? () => setAktif(null) : undefined}
              onFocus={() => setAktif(null)}
              className="group relative grid grid-cols-[3rem_1fr_auto] items-baseline gap-x-4 border-t border-rule py-6 sm:grid-cols-[5rem_1fr_auto] sm:gap-x-8 sm:py-8"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-[600ms] ease-[var(--ease-out-soft)] group-hover:scale-x-100 group-focus-visible:scale-x-100"
              />

              <span className="label pt-1 tabular-nums">{p.tahun}</span>

              <span className="min-w-0">
                <span className="block font-display text-[clamp(1.6rem,4.2vw,3.1rem)] font-semibold leading-[1.05] tracking-[-0.03em] transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:translate-x-2 group-focus-visible:translate-x-2">
                  {p.nama}
                </span>
                <span className="mt-2 block max-w-xl text-sm leading-relaxed text-muted">
                  {p.ringkas}
                </span>
                <span className="label mt-3 block sm:hidden">
                  {p.stack.join(" · ")}
                </span>
              </span>

              <span className="flex items-baseline gap-6 pt-1">
                <span className="label hidden max-w-56 text-right sm:block">
                  {p.stack.join(" · ")}
                </span>
                <span
                  aria-hidden
                  className="font-mono text-sm text-muted transition-all duration-500 ease-[var(--ease-out-soft)] group-hover:translate-x-1 group-hover:text-accent group-focus-visible:text-accent"
                >
                  ↗
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {halus && (
        <div
          ref={kotak}
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-30 will-change-transform"
        >
          <div
            data-aktif={proyekAktif ? "" : undefined}
            className="origin-center scale-90 overflow-hidden bg-ink opacity-0 transition-[opacity,transform] duration-500 ease-[var(--ease-out-soft)] data-[aktif]:scale-100 data-[aktif]:opacity-100"
            style={{ width: LEBAR_PRATINJAU, height: TINGGI_PRATINJAU }}
          >
            {proyekAktif?.sampul ? (
              <Image
                src={proyekAktif.sampul}
                alt=""
                width={LEBAR_PRATINJAU}
                height={TINGGI_PRATINJAU}
                className="size-full object-cover"
              />
            ) : (
              // Belum ada tangkapan layar: pelat tinta dengan judul proyek.
              <div className="flex size-full flex-col justify-between p-5 text-paper">
                <span className="label text-paper/60">
                  {proyekAktif?.kategori}
                </span>
                <span className="font-display text-2xl font-semibold leading-tight tracking-tight">
                  {proyekAktif?.nama}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
