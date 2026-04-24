import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://asaimetal-website.leekheemahendra.workers.dev'),
  title: {
    default: "PT. Asai Metal - Industrial Automation & Machinery Indonesia",
    template: "%s | PT. Asai Metal"
  },
  description: "Solusi otomasi industri, integrasi robot (Fanuc, ABB, KUKA), dan mesin industri terbaik di Indonesia. Transformasikan pabrik Anda bersama PT. Asai Metal.",
  keywords: ["otomasi industri", "robot integration", "industrial machinery", "AMR Indonesia", "PT Asai Metal", "mesin CNC", "otomasi pabrik", "Retrofit Panel Control"],
  authors: [{ name: "PT. Asai Metal" }],
  creator: "PT. Asai Metal",
  publisher: "PT. Asai Metal",
  icons: {
    icon: "/logo-asai.jpg",
  },
  openGraph: {
    title: "PT. Asai Metal - Industrial Automation & Machinery",
    description: "Solusi otomasi industri, mesin, dan robot terbaik untuk pabrik Anda.",
    url: "https://asaimetal-website.leekheemahendra.workers.dev",
    siteName: "PT. Asai Metal",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/logo-asai.jpg",
        width: 800,
        height: 600,
        alt: "PT. Asai Metal Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT. Asai Metal - Industrial Automation & Machinery",
    description: "Solusi otomasi industri, mesin, dan robot terbaik untuk pabrik Anda.",
    images: ["/logo-asai.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'KOD1J6yzuTJVeHC3HWtuySG-m6VvySWhVjEpz8IzakQ',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PT. Asai Metal",
    "image": "https://asaimetal-website.leekheemahendra.workers.dev/logo-asai.jpg",
    "@id": "https://asaimetal-website.leekheemahendra.workers.dev",
    "url": "https://asaimetal-website.leekheemahendra.workers.dev",
    "telephone": "+622159893652",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Raya Curug KM. 1 RT/RW. 07/02, Kadujaya - Curug",
      "addressLocality": "Tangerang",
      "addressRegion": "Banten",
      "postalCode": "15810",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.2415, // Approximate for Curug Tangerang if not exact
      "longitude": 106.5615
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.youtube.com/@WebsiteAsai",
      "https://www.instagram.com/ptasaimetal",
      "https://www.tiktok.com/@pt.asai.metal"
    ]
  };

  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
