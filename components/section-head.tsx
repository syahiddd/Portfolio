/** Judul bagian: label mono di kiri, keterangan di kanan. */
export function SectionHead({
  label,
  catatan,
}: {
  label: string;
  catatan?: string;
}) {
  return (
    <div className="mb-6 flex items-baseline justify-between gap-6">
      <h2 className="label text-ink">{label}</h2>
      {catatan && <p className="label">{catatan}</p>}
    </div>
  );
}
