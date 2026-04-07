import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CookieConsent from "@/components/cookie-consent/CookieConsent";
import WebSiteSchema from "@/components/WebSiteSchema";
import ThemeProvider from "@/components/theme/ThemeContext";
import ThirdPartyScripts from "@/components/scripts/ThirdPartyScripts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://fastvidl.com'),
  title: "FastVidl | Free Video Downloader for Instagram, Facebook & Pinterest",
  description:
    "FastVidl is a free online downloader for Instagram Reels, Stories, Photos, Facebook videos, and Pinterest videos. No watermark, no login, no app. Save public media in HD on mobile and desktop.",
  icons: {
    icon: "/assets/favicon.ico",
    shortcut: "/assets/favicon.ico",
  },
  alternates: {
    canonical: 'https://fastvidl.com',
  },
  openGraph: {
    title: "FastVidl | Free Video Downloader for Instagram, Facebook & Pinterest",
    description:
      "FastVidl is a free online downloader for Instagram Reels, Stories, Photos, Facebook videos, and Pinterest videos. No watermark, no login, no app. Save public media in HD on mobile and desktop.",
    url: "https://fastvidl.com",
    siteName: "FastVidl",
    images: ["/assets/weblogo.png"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FastVidl | Free Video Downloader for Instagram, Facebook & Pinterest",
    description:
      "Free online downloader for Instagram, Facebook, and Pinterest public media. No watermark, no login, no app.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <WebSiteSchema />
        <ThemeProvider>
          <Header/>
          {children}
          <Footer/>
          <CookieConsent />
        </ThemeProvider>
        <ThirdPartyScripts />
      </body>
    </html>
  );
}
