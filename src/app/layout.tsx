import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import { getLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";

import { GoogleAnalytics } from "@/components/layout/GoogleAnalytics";
import { siteConfig } from "@/config/site";

import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  keywords: [
    "Mountain Fauna Lover",
    "digiscoping",
    "wildlife observation",
    "Trentino-Alto Adige",
    "Val di Rabbi",
    "Stelvio National Park",
    "alpine wildlife",
  ],
  authors: [{ name: siteConfig.founder }],
  creator: siteConfig.founder,
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "vaX85JUOj5liB0cYr88FW_xfLqmWiL0oi734QkgP0D4",
    // Bing Webmaster Tools.
    other: {
      "msvalidate.01": "55E98042DC86F29F9660459CF15D130F",
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#030303",
  colorScheme: "dark",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${cormorant.variable}`}
    >
      <body>
        {/* Resource hints — YouTube thumbnail CDN powers the video cards, and the
            alpine hero still is the LCP element on the home and section heroes. */}
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
        <link
          rel="preload"
          as="image"
          href="/images/backgrounds/alpine-night.webp"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                  let hasUnregistered = false;
                  for(let registration of registrations) {
                    registration.unregister();
                    hasUnregistered = true;
                  }
                  if (hasUnregistered) {
                    window.location.reload();
                  }
                });
              }
            `,
          }}
        />
        {children}
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
