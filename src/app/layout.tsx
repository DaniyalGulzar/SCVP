// src/app/layout.tsx
import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ClientSessionProvider from "../components/ClientSessionProvider";
import type { Metadata } from "next";

const outfit = Outfit({ subsets: ["latin"] });

// Metadata export (Server Component only)
export const metadata: Metadata = {
  metadataBase: new URL("https://www.scvplahore.com"),
  title: {
    default:
      "Safe Car Valet Parking Lahore | Professional Valet Services | Premium Car Parking Solutions",
    template: "%s | Safe Car Valet Parking Lahore",
  },
  description:
    "Safe Car Valet Parking Lahore offers premium professional valet services for hotels, restaurants, weddings, corporate events, and private gatherings. Our trained and certified valet attendants provide secure, reliable, and courteous car parking solutions across Lahore. With 24/7 support, real-time vehicle tracking, comprehensive insurance coverage, and competitive pricing, we ensure your guests receive exceptional service while keeping their vehicles completely safe. Trust Pakistan's leading valet parking company for luxury hotels, fine dining restaurants, exclusive events, shopping malls, hospitals, and commercial properties. Contact us for customized valet parking packages tailored to your business needs.",
  keywords:
    "valet parking Lahore, safe car valet parking, professional valet services Lahore, hotel valet parking, restaurant valet services, wedding valet parking, event valet Lahore, corporate valet services, luxury valet parking, secure car parking, parking management Lahore, professional valet attendants, car parking solutions, premium valet services, 24/7 valet parking, insured valet parking, certified valet staff, commercial valet services, private event parking, shopping mall valet, hospital valet parking, Pakistan valet services, Lahore parking solutions, guest parking services, valet parking company, car care valet services, executive parking services, VIP parking solutions, doorman valet services, concierge parking Lahore",
  authors: [{ name: "Safe Car Valet Parking Lahore" }],
  creator: "Safe Car Valet Parking Team",
  publisher: "Safe Car Valet Parking Lahore",
  category: "Business Services",
  classification: "Valet Parking Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Safe Car Valet Parking Lahore | Professional Valet Services | Premium Car Parking Solutions",
    description:
      "Professional valet parking services in Lahore for hotels, restaurants, weddings & corporate events. Safe, secure, and reliable valet solutions with 24/7 support, trained staff, and comprehensive insurance coverage. Trust Pakistan's leading valet parking company.",
    url: "https://www.scvplahore.com",
    siteName: "Safe Car Valet Parking Lahore",
    images: [
      {
        url: "https://www.scvplahore.com/myImages/valet1.png",
        width: 1200,
        height: 630,
        alt: "Safe Car Valet Parking Lahore - Professional Valet Services",
      },
      {
        url: "https://www.scvplahore.com/myImages/valet-service.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Valet Parking Services in Lahore",
      },
    ],
    locale: "en_PK",
    type: "website",
    countryName: "Pakistan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safe Car Valet Parking Lahore | Professional Valet Services",
    description:
      "SCVP Lahore - Premium, secure, and professional valet parking services for hotels, restaurants, weddings, and corporate events. 24/7 support with trained certified staff.",
    images: ["https://www.scvplahore.com/myImages/valet1.png"],
    creator: "@scvplahore",
    site: "@scvplahore",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
      { url: "/apple-touch-icon-152x152.png", sizes: "152x152" },
    ],
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "9095e687d09b2fb9",
    yandex: "your-yandex-verification", // Add if needed
    yahoo: "your-yahoo-verification", // Add if needed
    other: {
      "msvalidate.01": "your-bing-verification", // Add if needed
    },
  },
  alternates: {
    canonical: "https://www.scvplahore.com",
    languages: {
      "en-PK": "https://www.scvplahore.com",
      "ur-PK": "https://www.scvplahore.com/ur", // If you have Urdu version
    },
  },
  other: {
    "theme-color": "#3B82F6",
    "msapplication-TileColor": "#3B82F6",
    "msapplication-TileImage": "/mstile-144x144.png",
    "application-name": "Safe Car Valet Parking",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "SCVP Lahore",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-tooltip": "Safe Car Valet Parking Lahore",
    "og:email": "info@scvplahore.com", // Add your email
    "og:phone_number": "+92-XXX-XXXXXXX", // Add your phone
    "og:fax_number": "+92-XXX-XXXXXXX", // Add if you have fax
    "og:latitude": "31.5804", // Lahore coordinates
    "og:longitude": "74.3587", // Lahore coordinates
    "og:street-address": "Your Street Address, Lahore", // Add your address
    "og:locality": "Lahore",
    "og:region": "Punjab",
    "og:postal-code": "54000", // Your postal code
    "og:country-name": "Pakistan",
    "business:contact_data:street_address": "Your Street Address",
    "business:contact_data:locality": "Lahore",
    "business:contact_data:region": "Punjab",
    "business:contact_data:postal_code": "54000",
    "business:contact_data:country_name": "Pakistan",
    "business:contact_data:email": "info@scvplahore.com",
    "business:contact_data:phone_number": "+92-XXX-XXXXXXX",
    "business:contact_data:website": "https://www.scvplahore.com",
    // Geographic targeting
    "geo.region": "PK-PB", // Punjab, Pakistan
    "geo.placename": "Lahore",
    "geo.position": "31.5804;74.3587", // Lahore coordinates
    ICBM: "31.5804, 74.3587",
    // Business information
    rating: "5.0",
    pricerange: "$$",
    contact: "+92-302-4199048",
    email: "info@scvplahore.com",
    // Additional SEO tags
    "revisit-after": "7 days",
    distribution: "global",
    expires: "never",
    pragma: "no-cache",
    "cache-control": "no-cache",
    // Social media
    "fb:app_id": "your-facebook-app-id", // Add if you have Facebook app
    "fb:pages": "your-facebook-page-id", // Add your Facebook page ID
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: "SCVP Lahore",
    statusBarStyle: "default",
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
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="resource-type" content="document" />
        <meta name="audience" content="all" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        {/* Additional meta tags for better indexing */}
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="skype_toolbar" content="skype_toolbar_parser_compatible" />

        {/* Structured Data Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.scvplahore.com/#organization",
                  name: "Safe Car Valet Parking Lahore",
                  url: "https://www.scvplahore.com",
                  sameAs: [
                    "https://www.facebook.com/scvplahore", // Add your social media
                    "https://www.instagram.com/scvplahore",
                    "https://www.linkedin.com/company/scvplahore",
                    "https://twitter.com/scvplahore",
                  ],
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.scvplahore.com/myImages/logo.png",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+92-XXX-XXXXXXX",
                    contactType: "customer service",
                    areaServed: "PK",
                    availableLanguage: ["en", "ur"],
                  },
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Your Street Address",
                    addressLocality: "Lahore",
                    addressRegion: "Punjab",
                    postalCode: "54000",
                    addressCountry: "PK",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.scvplahore.com/#website",
                  url: "https://www.scvplahore.com",
                  name: "Safe Car Valet Parking Lahore",
                  description:
                    "Professional valet parking services in Lahore for hotels, restaurants, weddings, and events.",
                  publisher: {
                    "@id": "https://www.scvplahore.com/#organization",
                  },
                  potentialAction: [
                    {
                      "@type": "SearchAction",
                      target: {
                        "@type": "EntryPoint",
                        urlTemplate:
                          "https://www.scvplahore.com/search?q={search_term_string}",
                      },
                      "query-input": "required name=search_term_string",
                    },
                  ],
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.scvplahore.com/#localbusiness",
                  name: "Safe Car Valet Parking Lahore",
                  image: "https://www.scvplahore.com/myImages/valet1.png",
                  telephone: "+92-XXX-XXXXXXX",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Your Street Address",
                    addressLocality: "Lahore",
                    addressRegion: "Punjab",
                    postalCode: "54000",
                    addressCountry: "PK",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 31.5804,
                    longitude: 74.3587,
                  },
                  url: "https://www.scvplahore.com",
                  openingHours: ["Mo-Su 00:00-23:59"],
                  priceRange: "$$",
                  servedCuisine: [], // Not applicable for valet service
                  hasMap: "https://maps.google.com/?q=31.5804,74.3587",
                  description: "Professional valet parking services in Lahore",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={outfit.className}>
        <Toaster position="top-right" />
        <ClientSessionProvider>{children}</ClientSessionProvider>
      </body>
    </html>
  );
}
