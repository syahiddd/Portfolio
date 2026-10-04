import { Button } from "@/components/button";
import { PageTitle } from "@/components/section-head";

export default function TidakDitemukan() {
  return (
    <div className="shell flex min-h-[60vh] flex-col justify-center gap-8 py-24">
      <PageTitle
        judul="404"
        keterangan="Halaman ini tidak ada. Alamatnya mungkin salah ketik, atau halamannya sudah dipindah."
      />
      <div>
        <Button href="/">{"<~ Kembali ke beranda"}</Button>
      </div>
    </div>
  );
}
