import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { THEME_BOOTSTRAP } from "@/lib/theme";
import { SITE_URL } from "@/lib/site";

/** Archivo is used across its width axis: 125% for headlines, 110% for sub-heads. */
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GymOS — gym management for Kenya",
    template: "%s · GymOS",
  },
  description:
    "GymOS is software for gyms and fitness studios in Kenya. Members renew from their phone with an M‑Pesa prompt, check in with a QR code, and book classes.",
  applicationName: "GymOS",
  keywords: [
    "gym management software Kenya",
    "M-Pesa gym payments",
    "fitness studio software",
    "gym software Nairobi",
  ],
  openGraph: {
    title: "GymOS — gym management for Kenya",
    description:
      "Members pay with M‑Pesa. Your gym runs itself. Memberships, check-ins, classes and reports in KES.",
    siteName: "GymOS",
    locale: "en_KE",
    type: "website",
    url: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-KE"
      data-theme="light"
      suppressHydrationWarning
      className={`${archivo.variable} ${plexMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
        {/* Material Symbols Rounded is not in next/font's catalogue, so it
            loads as a stylesheet. React hoists this into <head>. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* display=block is deliberate: with swap, the ligature name ("contrast")
            renders as literal text until the icon font arrives. no-page-custom-font
            is a Pages Router rule — in the App Router this covers every route. */}
        {/* eslint-disable-next-line @next/next/google-font-display, @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          precedence="default"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL@20..24,400..600,0..1&display=block"
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
