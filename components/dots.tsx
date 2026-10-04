/** Kisi titik dekoratif dari desain (5 kolom, titik 4px, rata tepi). */
export function Dots({
  kolom = 5,
  baris = 5,
  className = "",
}: {
  kolom?: number;
  baris?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none grid content-between justify-between ${className}`}
      style={{ gridTemplateColumns: `repeat(${kolom}, 4px)` }}
    >
      {Array.from({ length: kolom * baris }, (_, i) => (
        <span
          key={i}
          className="size-1 bg-[url(/figma/dot.svg)] bg-contain bg-no-repeat"
        />
      ))}
    </div>
  );
}
