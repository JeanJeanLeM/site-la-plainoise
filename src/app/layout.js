import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteData } from "@/lib/siteData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const canonicalUrl = `${siteUrl}/${siteData.slug}/panorama`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteData.name} | Patisserie a La Plaine-des-Palmistes`,
  description: siteData.tagline,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: `${siteData.name} | Patisserie a La Plaine-des-Palmistes`,
    description: siteData.tagline,
    url: canonicalUrl,
    type: "website",
    images: [
      {
        url: siteData.heroImages[0],
        alt: siteData.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
