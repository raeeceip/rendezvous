import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: "Rendezvous Restaurant | Fine Dining Experience",
    template: "%s | Rendezvous Restaurant"
  },
  description: "Experience exquisite fine dining at Rendezvous. Featuring modern French cuisine in an elegant setting in the heart of the city.",
  keywords: ["fine dining", "French restaurant", "luxury dining", "Rendezvous restaurant"],
  authors: [{ name: "Rendezvous Restaurant" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rendezvous.restaurant",
    siteName: "Rendezvous Restaurant",
    title: "Rendezvous Restaurant",
    description: "Experience exquisite fine dining at Rendezvous. Modern French cuisine in an elegant setting.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rendezvous Restaurant"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rendezvous Restaurant",
    description: "Experience exquisite fine dining at Rendezvous",
    images: ["/og-image.jpg"]
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/adobestock.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [
      { url: "/apple-icon.png" }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg"
      }
    ]
  },
  manifest: "/manifest.json"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${geist.variable}`}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}