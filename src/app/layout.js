import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ConditionalChrome from "@/components/layout/ConditionalChrome";
import WebSiteSchema from "@/components/WebSiteSchema";
import ThemeProvider from "@/components/theme/ThemeContext";
import ThirdPartyScripts from "@/components/scripts/ThirdPartyScripts";
import EzoicHeadInjector from "@/components/scripts/EzoicHeadInjector";
import CookieConsentBar from "@/components/CookieConsentBar";

// NOTE: `next/font/google` for Geist / Geist Mono was removed.
// 1. Those CSS variables weren't used anywhere in the project — globals.css
//    sets the body font to a system stack (-apple-system, Segoe UI…).
// 2. `next/font/google` fetches the font files from fonts.googleapis.com
//    AT BUILD TIME, so any network/DNS hiccup makes `next build` fail.
//    Removing the import eliminates that dependency entirely.

export const metadata = {
  metadataBase: new URL('https://fastvidl.com'),
  title: {
    default: "FastVidl — Free Downloader for Instagram & Facebook",
    template: "%s | FastVidl",
  },
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
    title: "FastVidl — Free Downloader for Instagram & Facebook",
    description:
      "FastVidl is a free online downloader for Instagram Reels, Stories, Photos, Facebook videos, and Pinterest videos. No watermark, no login, no app. Save public media in HD on mobile and desktop.",
    url: "https://fastvidl.com",
    siteName: "FastVidl",
    images: ["/assets/What is FastVidl.png"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FastVidl — Free Downloader for Instagram & Facebook",
    description:
      "Free online downloader for Instagram, Facebook, and Pinterest public media. No watermark, no login, no app.",
    images: ["/assets/What is FastVidl.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body>
        <EzoicHeadInjector />
        <WebSiteSchema />
        <ThemeProvider>
          <ConditionalChrome>
            <Header />
          </ConditionalChrome>
          {children}
          <ConditionalChrome>
            <Footer />
          </ConditionalChrome>
        </ThemeProvider>
        <ThirdPartyScripts />
        <CookieConsentBar />
      </body>
    </html>
  );
}
