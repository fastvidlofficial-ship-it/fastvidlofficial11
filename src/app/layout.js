import { Geist, Geist_Mono, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CookieConsent from "@/components/cookie-consent/CookieConsent";
import WebSiteSchema from "@/components/WebSiteSchema";
import ThemeProvider from "@/components/theme/ThemeContext";
import ThirdPartyScripts from "@/components/scripts/ThirdPartyScripts";
import { LocaleProvider } from "@/contexts/LocaleContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://fastvidl.com"),
  title: "Instagram Reel Downloader Free",
  description:
    "Download Instagram reels for free with FastVidl. No watermark, no login, no app. Save reels in HD on iPhone, Android, and desktop in seconds.",
  icons: {
    icon: "/assets/favicon.ico",
    shortcut: "/assets/favicon.ico",
  },
  alternates: {
    canonical: "https://fastvidl.com",
  },
  openGraph: {
    title: "Instagram Reel Downloader Free",
    description:
      "Download Instagram reels for free with FastVidl. No watermark, no login, no app. Save reels in HD on iPhone, Android, and desktop in seconds.",
    url: "https://fastvidl.com",
    siteName: "FastVidl",
    images: ["/assets/weblogo.png"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Reel Downloader Free",
    description:
      "Download Instagram reels for free with FastVidl. No watermark, no login, no app. Save reels in HD in seconds.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" data-theme="light" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansArabic.variable}`}
      >
        <WebSiteSchema />
        <LocaleProvider>
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
            <CookieConsent />
          </ThemeProvider>
        </LocaleProvider>
        <ThirdPartyScripts />
      </body>
    </html>
  );
}
