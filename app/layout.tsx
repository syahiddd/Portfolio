import type { Metadata } from "next";
import {
  Familjen_Grotesk,
  Instrument_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { profil, situs } from "@/data/profile";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const familjen = Familjen_Grotesk({
  variable: "--font-familjen",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
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
    <html
      lang="id"
      className={`${familjen.variable} ${instrument.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
