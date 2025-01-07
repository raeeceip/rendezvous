// app/layout.tsx
import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rendezvous.restaurant'),
  title: {
    default: "Rendezvous Restaurant | Fine Dining Experience",
    template: "%s | Rendezvous Restaurant",
  },
  description: "Experience exquisite fine dining at Rendezvous. Modern French cuisine in an elegant setting.",
  keywords: [
    "fine dining",
    "french restaurant",
    "luxury dining",
    "culinary experience",
    "gourmet restaurant",
    "michelin star",
  ],
  authors: [{ name: "Rendezvous Restaurant" }],
  creator: "Rendezvous Restaurant",
  publisher: "Rendezvous Restaurant",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rendezvous Restaurant | Fine Dining Experience",
    description: "Experience exquisite fine dining at Rendezvous. Modern French cuisine in an elegant setting.",
    url: "https://www.rendezvous.restaurant",
    siteName: "Rendezvous Restaurant",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rendezvous Restaurant",
    description: "Experience exquisite fine dining at Rendezvous",
    creator: "@rendezvous",
    site: "@rendezvous",
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
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      'facebook-domain-verification': ['your-facebook-domain-verification'],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}