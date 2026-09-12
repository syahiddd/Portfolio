import type { CSSProperties } from "react";
import { profil, karya } from "@/data/profile";

/** Nama dipecah per kata; tiap kata dipaskan selebar wadah lewat --len. */
export function Masthead() {
  const kata = profil.nama.trim().split(/\s+/);

  const kolofon = [
    { label: "Status", nilai: profil.status, sinyal: true },
    { label: "Location", nilai: profil.lokasi },
    { label: "Focus", nilai: profil.fokus.join(" · ") },
    { label: "Work", nilai: `${karya.length} projects listed` },
  ];

  return (
    <section className="shell pt-10 sm:pt-16">
      <p className="label rise mb-6">
        {profil.peran} — {profil.lokasi}
      </p>

      <h1 className="masthead">
        <span className="sr-only">{profil.nama}</span>
        {kata.map((k, i) => (
          <span
            key={`${k}-${i}`}
            aria-hidden
            className="masthead-word rise"
            style={
              {
                "--len": k.length,
                animationDelay: `${0.08 + i * 0.09}s`,
              } as CSSProperties
            }
          >
            {k}
          </span>
        ))}
      </h1>

      <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-rule pt-6 md:grid-cols-4">
        {kolofon.map((item) => (
          <div key={item.label}>
            <dt className="label mb-2">{item.label}</dt>
            <dd className="flex items-baseline gap-2 text-sm leading-snug text-ink">
              {item.sinyal && (
                <span
                  aria-hidden
                  className="mt-[0.35em] size-1.5 shrink-0 rounded-full bg-signal"
                />
              )}
              <span>{item.nilai}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
