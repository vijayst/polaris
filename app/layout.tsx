import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ScrollToTop from "@/components/scroll-to-top";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "PolarisAI Labs — AI Products, Platforms & Advisory",
    template: "%s | PolarisAI Labs",
  },
  description:
    "PolarisAI Labs builds AI products and platforms, and provides product management and technology advisory for CXOs. Recompose, optimize and deploy Small Language Models.",
  icons: { icon: "/images/PLLogo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <ScrollToTop />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', '${SITE.gaId}');
          `}
        </Script>
      </body>
    </html>
  );
}
