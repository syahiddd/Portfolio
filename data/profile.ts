/**
 * Satu-satunya tempat untuk mengubah isi situs.
 * Ganti nilai di bawah ini — semua halaman ikut menyesuaikan.
 *
 * Isi saat ini masih CONTOH. Tandanya: komentar `// GANTI`.
 */

export type Sosial = {
  nama: string;
  url: string;
  /** Ditampilkan di sebelah nama, mis. "@syahid" */
  handle?: string;
};

export type Proyek = {
  /** Dipakai sebagai URL: /karya/<slug> */
  slug: string;
  nama: string;
  tahun: string;
  /** Satu baris, tampil di indeks karya */
  ringkas: string;
  /** Mis. "Aplikasi Web", "Situs Perusahaan", "Alat Internal" */
  kategori: string;
  /** Peran kamu di proyek ini */
  peran: string;
  stack: string[];
  /** Paragraf penjelasan di halaman detail */
  deskripsi: string[];
  /** Poin-poin hasil / yang kamu kerjakan (opsional) */
  sorotan?: string[];
  demo?: string;
  repo?: string;
  /** Taruh gambar di folder /public, lalu tulis path-nya, mis. "/karya/nama.jpg" */
  sampul?: string;
  gambar?: { src: string; alt: string }[];
};

export const profil = {
  // GANTI: nama yang tampil di masthead. Tiap kata jadi satu baris besar.
  nama: "Syahid",
  // GANTI
  peran: "Web Developer",
  // GANTI
  lokasi: "Indonesia",
  // GANTI: status ketersediaan, tampil di kolofon dengan titik hijau
  status: "Open for new projects",
  // GANTI
  email: "syahid2302@gmail.com",
  // GANTI: dipakai untuk <title> dan pratinjau tautan
  deskripsiSitus:
    "Portofolio Syahid — web developer yang membangun antarmuka dan aplikasi web.",
  // GANTI: 2–3 paragraf. Tulis apa adanya, hindari kalimat pemanis.
  bio: [
    "I build websites and web applications, handling everything from the interface to the data layer. I spend most of my time working with React, TypeScript, and the fine details that make a page feel fast and enjoyable to use. My goal is simple: to create products that people actually use, rather than ones that just look good in a presentation. That’s why I enjoy being involved from the problem-definition stage, rather than just receiving a finished design. Right now, I’m diving deeper into frontend architecture and web performance. If you’d like to collaborate on something, let me know.",
  ],
  // GANTI: dipakai di kolofon bawah masthead
  fokus: ["Frontend", "Full-stack", "Interface"],
  // GANTI: hapus yang tidak dipakai
  sosial: [
    { nama: "GitHub", url: "https://github.com/syahiddd", handle: "" },
    { nama: "LinkedIn", url: "https://www.linkedin.com/in/syahid-amanullahh/", handle: "" },
    { nama: "Instagram", url: "https://www.instagram.com/syhdamnlh/", handle: "" },
  ] satisfies Sosial[],
  // GANTI atau hapus: taruh berkas CV di /public
  cv: undefined as string | undefined,
};

// GANTI SELURUHNYA: ini contoh isi supaya tata letaknya kelihatan.
export const karya: Proyek[] = [
  {
    slug: "gerakin",
    nama: "Gerak.in",
    tahun: "2026",
    ringkas:
      "Workout tracking web app — routine reusable, pencatatan set dalam hitungan detik, PR otomatis, dan statistik nyata.",
    kategori: "Aplikasi Web",
    peran: "Solo developer",
    stack: [
      "Laravel 13",
      "Blade",
      "Tailwind CSS",
      "Alpine.js",
      "Chart.js",
      "MySQL",
    ],
    deskripsi: [
      "Gerak.in adalah workout tracking web app modern yang dibangun dengan Laravel 13, Breeze Blade, Tailwind, Alpine.js, dan Chart.js. Prinsip intinya: Routine ≠ Workout — setiap memulai sesi, template routine di-deep-copy menjadi workout nyata dalam satu transaksi database, sehingga riwayat latihan tidak pernah rusak oleh edit template.",
      "Data disimpan dalam unit kanonis (weight_kg, distance_m, size_cm) dengan konversi hanya di presentasi, volume dihitung dari set beban yang selesai, estimasi 1RM memakai rumus Epley, dan timestamp disimpan UTC lalu dirender sesuai timezone pengguna.",
    ],
    sorotan: [
      "Exercise library + custom exercise dengan filter otot dan peralatan",
      "Routine reusable + folder (duplicate, archive, reorder, target set/RPE/rest)",
      "Active workout dengan autosave, resume, LAST TIME vs CURRENT, dan rest timer",
      "Personal records terdeteksi otomatis dengan banner + statistik dan chart",
    ],
    demo: "",
    repo: "https://github.com/syahiddd/Gerak.in",
    sampul: "/karya/gerak-in-preview.jpg",
  },
  {
    slug: "pplk-itera",
    nama: "PPLK ITERA 2026",
    tahun: "2026",
    ringkas:
      "Sistem informasi pengenalan kehidupan kampus ITERA untuk 4.000+ mahasiswa baru.",
    kategori: "Aplikasi Web",
    peran: "Frontend developer, tim Implementasi Teknologi",
    stack: ["Laravel", "Inertia.js", "React", "MySQL"],
    deskripsi: [
      "Website resmi Program Pengenalan Lingkungan Kampus (PPLK) Institut Teknologi Sumatera 2026. Platform ini menjadi pusat informasi bagi seluruh mahasiswa baru, mencakup profil ITERA, fakultas, program studi, organisasi kemahasiswaan, hingga jadwal dan materi kegiatan.",
      "Fitur utama meliputi dashboard mahasiswa dengan presensi QR code, sistem pengumpulan tugas kelompok, leaderboard XP berbasis gamifikasi, Swarnagram (media sosial internal), FAQ interaktif, serta fitur chat customer service real-time.",
    ],
    sorotan: [
      "Presensi berbasis QR code dengan pelacakan kehadiran real-time",
      "Sistem gamifikasi XP dengan leaderboard harian dan all-time",
      "Swarnagram: media sosial internal dengan feed, postingan, dan interaksi antar mahasiswa",
    ],
    demo: "https://pplkitera.com",
    repo: "",
    sampul: "/karya/pplk-hero-2026.png",
  },
  {
    slug: "self-reflection-platform",
    nama: "Self Reflection Platform",
    tahun: "2026",
    ringkas:
      "Platform refleksi diri bertenaga AI — ungkapkan perasaan lewat kanvas digital dan dapatkan wawasan psikologis personal.",
    kategori: "Aplikasi Web",
    peran: "Solo developer",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Fabric.js",
      "Google Generative AI",
    ],
    deskripsi: [
      "Self-Reflection Platform adalah aplikasi web bertenaga AI yang menjembatani ekspresi kreatif dan kesehatan mental. Pengguna mengekspresikan perasaan lewat kanvas digital, lalu menerima wawasan psikologis personal secara instan berdasarkan pola gambar mereka.",
      "Dibangun dengan Next.js dan React Sketch Canvas / Fabric.js untuk pengalaman menggambar yang responsif, dengan Google Generative AI untuk menganalisis pola dan menyusun umpan balik reflektif.",
    ],
    sorotan: [
      "Kanvas digital interaktif untuk ekspresi perasaan",
      "Analisis pola gambar dengan Google Generative AI",
      "Wawasan psikologis personal yang instan",
    ],
    demo: "",
    repo: "https://github.com/syahiddd/self-reflection-platform",
    sampul: "/karya/self-reflection-preview.jpg",
  },
  {
    slug: "sistem-inventaris-hmif",
    nama: "Sistem Inventaris HMIF",
    tahun: "2026",
    ringkas:
      "Sistem manajemen inventaris terpusat HMIF ITERA dengan peminjaman real-time, denda otomatis, dan laporan.",
    kategori: "Aplikasi Web",
    peran: "Solo developer",
    stack: [
      "Laravel 13",
      "PHP",
      "PostgreSQL",
      "Tailwind CSS",
      "Laravel Breeze",
      "Blade",
    ],
    deskripsi: [
      "Sistem ini dirancang untuk mengelola aset dan peralatan Himpunan Mahasiswa Informatika (HMIF) Institut Teknologi Sumatera secara terpusat, transparan, dan akuntabel. Pengurus bisa memantau ketersediaan barang secara real-time dan mengelola proses peminjaman dengan lebih efisien.",
      "Menggunakan Laravel 13 dengan Tailwind CSS, autentikasi Laravel Breeze, dan PostgreSQL untuk skalabilitas. Alur peminjaman berstatus real-time lengkap dengan notifikasi WhatsApp, denda otomatis, dan ekspor laporan.",
    ],
    sorotan: [
      "Manajemen barang (CRUD) lengkap dengan SKU dan foto",
      "Alur peminjaman dengan status real-time: Pending, Approved, Rejected",
      "Konfirmasi WhatsApp otomatis dan denda keterlambatan otomatis",
      "Dashboard statistik dan ekspor laporan PDF / Excel",
    ],
    demo: "",
    repo: "https://github.com/syahiddd/sistem-inventaris-hmif",
    sampul: "/karya/hmif-preview.jpg",
  },
];

export const situs = {
  // GANTI kalau sudah punya domain — dipakai untuk metadata
  url: "https://syahid.dev",
};
