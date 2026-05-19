"use client";

import styles from "../page.module.css";
import heroStyles from "../DownloaderHero.module.css";
import DownloaderToolSection from "@/components/DownloaderToolSection";
import NotAffiliatedNote from "@/components/NotAffiliatedNote";
import "@/content/Blog.css";
import FAQSchema from "@/components/FAQSchema";
import AuthorOrganizationSchema from "@/components/AuthorOrganizationSchema";
import RelatedToolsSection from "@/components/RelatedToolsSection";
import InstagramReelDownloaderBlogContent, {
  INSTAGRAM_BLOG_FAQ_LIST,
} from "@/content/instagram-reel-downloader-free/InstagramReelDownloaderBlogContent";
import EzoicPlacements from "@/components/ads/EzoicPlacements";
import { getEzoicToolPlacements } from "@/config/ezoicPlacements";

const RELATED_REEL_TOOLS = [
  { href: "/download/ig-reel-downloader-hd", label: "Free IG Reel Downloader HD" },
  {
    href: "/download/insta-reel-downloader-without-watermark",
    label: "Insta Reel Downloader Without Watermark",
  },
  { href: "/download/download-instagram-reels-mp4", label: "Download Instagram Reels MP4" },
  { href: "/download/1080p-ig-reels-download-free", label: "1080p IG Reels Download Free" },
  {
    href: "/download/download-instagram-reels-via-link",
    label: "Download Instagram Reels via Link",
  },
];

export default function InstagramReelDownloaderService() {
  return (
    <div className={styles.page}>
      <AuthorOrganizationSchema
        authorName="Raja Jahangir"
        authorUrl="https://fastvidl.com/author/raja-jahangir"
        organizationName="Auroxa Tech"
        organizationUrl="https://auroxatech.com"
        articleUrl="https://fastvidl.com/instagram-reel-downloader-free"
        headline="Instagram Reel Downloader Free: Download Reels Without Watermark (2026)"
        datePublished="2026-02-27"
        dateModified="2026-04-20"
      />
      <FAQSchema faqList={INSTAGRAM_BLOG_FAQ_LIST} />
      <main className={styles.main}>
        <div className={heroStyles.heroWrap}>
          <h1 className={heroStyles.heroTitle}>
            <span style={{ color: "var(--heading-color, #1a202c)" }}>Instagram </span>
            <span
              style={{
                WebkitTextFillColor: "transparent",
                background: "linear-gradient(to right, #ff512f, #dd2476)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Reel{" "}
            </span>
            <span
              style={{
                WebkitTextFillColor: "transparent",
                background: "linear-gradient(to right, #25ff92, #24afff)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Downloader
            </span>
            <span style={{ color: "var(--heading-color, #1a202c)" }}> Free</span>
          </h1>
        </div>
        <DownloaderToolSection />
        <EzoicPlacements placementIds={getEzoicToolPlacements()} />
        <div className="container-blog">
          <section className="home-blog-article">
            <InstagramReelDownloaderBlogContent variant="home" faqList={INSTAGRAM_BLOG_FAQ_LIST} />
          </section>
        </div>
        <RelatedToolsSection
          heading="More Free Instagram Reel Downloaders"
          tools={RELATED_REEL_TOOLS}
        />
        <NotAffiliatedNote />
      </main>
    </div>
  );
}
