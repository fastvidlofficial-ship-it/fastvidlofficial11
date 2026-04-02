"use client";

import styles from "../page.module.css";
import heroStyles from "../DownloaderHero.module.css";
import UserInput from "@/components/input/UserInput";
import AuthorOrganizationSchema from "@/components/AuthorOrganizationSchema";
import FAQSchema from "@/components/FAQSchema";
import PinterestBlogContent, { PINTEREST_FAQ_LIST } from "@/content/pinterest-video-downloader-free/PinterestBlogContent";

export default function PinterestReelDownloaderService() {
  return (
    <div className={styles.page}>
      <AuthorOrganizationSchema
        authorName="Raja Jahangir"
        authorUrl="https://www.linkedin.com/in/raja-jahangir"
        organizationName="Auroxa Tech"
        organizationUrl="https://auroxatech.com"
        articleUrl="https://fastvidl.com/pinterest-video-downloader-free"
        headline="Pinterest Video Downloader Free: Download Videos Without Watermark (2026)"
        datePublished="2026-03-26"
        dateModified="2026-04-02"
      />
      <FAQSchema faqList={PINTEREST_FAQ_LIST} />
      <main className={styles.main}>
        <div className={heroStyles.heroWrap}>
          <h1 className={heroStyles.heroTitle}>
            <span style={{ color: "var(--heading-color, #1a202c)" }}>Pinterest </span>
            <span
              style={{
                WebkitTextFillColor: "transparent",
                background: "linear-gradient(to right, #ff512f, #dd2476)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Video{" "}
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
        <UserInput />
        <PinterestBlogContent />
      </main>
    </div>
  );
}
