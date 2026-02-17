import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CookieConsent from "@/components/cookie-consent/CookieConsent";
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6813251858740530"
     crossorigin="anonymous"></script>
     

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
  title: "FastVidl Instagram  Reel Downloader - Free HD",
  description: "Download Reels from Instagram in HD quality for free. Save Reels, Stories, and clips instantly without registration. Fast, secure, and works on any device.",
  icons: {
    icon: "/assets/favicon.ico", 
    shortcut: "/assets/favicon.ico",
    // apple: "/assets/apple-touch-icon.png",
  },
  alternates: {
    canonical: 'https://fastvidl.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        {children}
        <Footer/>
        <CookieConsent />
      </body>
    </html>
  );
}
