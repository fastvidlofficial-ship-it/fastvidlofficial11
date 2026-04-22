"use client";

import styles from "../page.module.css";
import heroStyles from "../DownloaderHero.module.css";
import UserInput from "@/components/input/UserInput";
import AuthorOrganizationSchema from "@/components/AuthorOrganizationSchema";
import FAQSchema from "@/components/FAQSchema";
import FacebookBlogContent, { FACEBOOK_FAQ_LIST } from "@/content/free-facebook-video-downloader/FacebookBlogContent";
import EzoicPlacements from "@/components/ads/EzoicPlacements";
import { getEzoicToolPlacements } from "@/config/ezoicPlacements";

export default function FacebookReelDownloaderService() {
  return (
    <div className={styles.page}>
      <AuthorOrganizationSchema
        authorName="Raja Jahangir"
        authorUrl="https://www.linkedin.com/in/raja-jahangir"
        organizationName="Auroxa Tech"
        organizationUrl="https://auroxatech.com"
        articleUrl="https://fastvidl.com/free-facebook-video-downloader"
        headline="Free Facebook Video Downloader: Download FB Videos in HD (2026)"
        datePublished="2026-03-26"
        dateModified="2026-04-20"
      />
      <FAQSchema faqList={FACEBOOK_FAQ_LIST} />
      <main className={styles.main}>
        <div className={heroStyles.heroWrap}>
          <h1 className={heroStyles.heroTitle}>
            <span style={{ color: "var(--heading-color, #1a202c)" }}>Free </span>
            <span style={{ color: "var(--heading-color, #1a202c)" }}>Facebook </span>
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
          </h1>
        </div>
        <UserInput />
        <EzoicPlacements placementIds={getEzoicToolPlacements()} />
        <FacebookBlogContent />
      </main>
    </div>
  );
}
