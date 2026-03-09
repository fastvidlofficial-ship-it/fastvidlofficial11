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
  title: "Instagram Reel Downloader Free | FastVidl",
  description: "Download Instagram reels for free with FastVidl. No watermark, no login, no app. Save reels in HD on iPhone, Android, and desktop in seconds.",
  icons: {
    icon: "/assets/favicon.ico",
    shortcut: "/assets/favicon.ico",
  },
  alternates: {
    canonical: 'https://fastvidl.com',
  },
  openGraph: {
    title: "Instagram Reel Downloader Free | FastVidl",
    description: "Download Instagram reels for free with FastVidl. No watermark, no login, no app. Save reels in HD on iPhone, Android, and desktop in seconds.",
    url: "https://fastvidl.com",
    siteName: "FastVidl",
    images: ["/assets/weblogo.png"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Reel Downloader Free | FastVidl",
    description: "Download Instagram reels for free with FastVidl. No watermark, no login, no app. Save reels in HD in seconds.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6813251858740530"
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
        <script
          async
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6813251858740530"
        />
      </body>
    </html>
  );
}
