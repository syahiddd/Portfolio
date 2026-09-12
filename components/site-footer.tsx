import { profil } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule">
      <div className="shell flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="label">
          © {new Date().getFullYear()} {profil.nama}
        </p>
        <p className="label">Dibangun dengan Next.js</p>
      </div>
    </footer>
  );
}
