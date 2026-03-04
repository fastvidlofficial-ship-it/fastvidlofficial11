import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CookieConsent from "@/components/cookie-consent/CookieConsent";
import WebSiteSchema from "@/components/WebSiteSchema";
import ThemeProvider from "@/components/theme/ThemeContext";

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
  title: "FastVidl – Free Video Downloader for Instagram, Pinterest & Facebook | HD No Watermark",
  description: "Download Instagram Reels, Pinterest videos, and Facebook videos for free. No watermark, no login, no app. Save in HD on iPhone, Android & desktop. Fast, secure, browser-based.",
  icons: {
    icon: "/assets/favicon.ico",
    shortcut: "/assets/favicon.ico",
  },
  alternates: {
    canonical: 'https://fastvidl.com',
  },
  openGraph: {
    title: "FastVidl – Free Video Downloader for Instagram, Pinterest & Facebook | HD No Watermark",
    description: "Download Instagram Reels, Pinterest videos, and Facebook videos for free. No watermark, no login, no app. HD quality, all devices.",
    url: "https://fastvidl.com",
    siteName: "FastVidl",
    images: ["/assets/weblogo.png"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FastVidl – Free Video Downloader for Instagram, Pinterest & Facebook",
    description: "Download Instagram Reels, Pinterest videos, and Facebook videos for free. No watermark, no login, no app.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6813251858740530"
          async
          suppressHydrationWarning
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <WebSiteSchema />
        <ThemeProvider>
          <Header/>
          {children}
          <Footer/>
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
