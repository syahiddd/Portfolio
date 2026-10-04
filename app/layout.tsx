import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { profil, situs } from "@/data/profile";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MediaRail } from "@/components/media-rail";

const fira = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(situs.url),
  title: {
    default: `${profil.nama} — ${profil.peran}`,
    template: `%s — ${profil.nama}`,
  },
  description: profil.deskripsiSitus,
  openGraph: {
    type: "website",
    locale: "id_ID",
    title: `${profil.nama} — ${profil.peran}`,
    description: profil.deskripsiSitus,
    siteName: profil.nama,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${fira.variable} h-full antialiased`}>
      <body className="relative flex min-h-full flex-col">
        <MediaRail />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
