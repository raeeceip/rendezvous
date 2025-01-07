import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rendezvous.restaurant'),
  title: {
    default: "Rendezvous Restaurant | Fine Dining Experience",
    template: "%s | Rendezvous Restaurant"
  },
  description: "Experience exquisite fine dining at Rendezvous. Modern French cuisine in an elegant setting.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.rendezvous.restaurant",
    siteName: "Rendezvous Restaurant",
    title: "Rendezvous Restaurant | Fine Dining Experience",
    description: "Experience exquisite fine dining at Rendezvous. Modern French cuisine in an elegant setting.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rendezvous Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rendezvous Restaurant",
    description: "Experience exquisite fine dining at Rendezvous",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
    shortcut: ["/shortcut-icon.png"],
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}