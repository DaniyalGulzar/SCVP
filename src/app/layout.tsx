// src/app/layout.tsx
import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ClientSessionProvider from "../components/ClientSessionProvider"; // We'll create this
import type { Metadata } from "next";

const outfit = Outfit({ subsets: ["latin"] });

// Metadata export (Server Component only)
export const metadata: Metadata = {
  metadataBase: new URL("https://www.scvplahore.com"),
  title: {
    default: "Safe Car Valet Parking Lahore | Professional Valet Services",
    template: "%s | Safe Car Valet Parking Lahore",
  },
  description:
    "Safe Car Valet Parking Lahore provides secure and professional valet services for hotels, restaurants, weddings, and events. Trusted by businesses and guests across Lahore.",
  keywords:
    "valet parking Lahore, safe car valet parking, valet services Lahore, hotel valet, restaurant valet, event valet Lahore, parking management Lahore, professional valet, secure parking",
  authors: [{ name: "Safe Car Valet Parking" }],
  creator: "Safe Car Valet Parking",
  publisher: "Safe Car Valet Parking Lahore",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Safe Car Valet Parking Lahore | Professional Valet Services",
    description:
      "Professional valet parking services in Lahore for hotels, restaurants & events. Safe, Secure, and Affordable valet solutions.",
    url: "https://www.scvplahore.com",
    siteName: "Safe Car Valet Parking Lahore",
    images: [
      {
        url: "https://www.scvplahore.com/myImages/valet1.png",
        width: 1200,
        height: 630,
        alt: "Safe Car Valet Parking Lahore",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safe Car Valet Parking Lahore | Professional Valet Services",
    description:
      "SCVP Lahore - Secure, professional, and reliable valet parking services for hotels, restaurants, and events.",
    images: ["https://www.scvplahore.com/myImages/valet1.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "9095e687d09b2fb9", // Your Google verification token
  },
  alternates: {
    canonical: "https://www.scvplahore.com",
  },
  other: {
    "theme-color": "#3B82F6",
    "msapplication-TileColor": "#3B82F6",
    "application-name": "Safe Car Valet Parking",
  },
};

// Server Component (no 'use client')
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="en-PK" />
      </head>
      <body className={outfit.className}>
        <Toaster position="top-right" />
        <ClientSessionProvider>{children}</ClientSessionProvider>
      </body>
    </html>
  );
}
