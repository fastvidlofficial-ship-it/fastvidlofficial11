import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fastvidl Instagram  Reel Downloader - Free HD",
  description: "Download videos from Instagram in HD quality for free. Save Reels, Stories, and clips instantly without registration. Fast, secure, and works on any device.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        {/* <Blog/> */}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
