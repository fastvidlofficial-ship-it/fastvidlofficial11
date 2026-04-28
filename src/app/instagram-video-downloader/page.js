"use client";

import styles from "../page.module.css";
import heroStyles from "../DownloaderHero.module.css";
import UserInput from "@/components/input/UserInput";
import AuthorOrganizationSchema from "@/components/AuthorOrganizationSchema";
import FAQSchema from "@/components/FAQSchema";
import InstagramVideoBlogContent, {
  INSTAGRAM_VIDEO_FAQ_LIST,
} from "@/content/instagram-video-downloader/InstagramVideoBlogContent";
import EzoicPlacements from "@/components/ads/EzoicPlacements";
import { getEzoicToolPlacements } from "@/config/ezoicPlacements";

export default function InstagramVideoDownloaderPage() {
  return (
    <div className={styles.page}>
      <AuthorOrganizationSchema
        authorName="Raja Jahangir"
        authorUrl="https://www.linkedin.com/in/raja-jahangir"
        organizationName="Auroxa Tech"
        organizationUrl="https://auroxatech.com"
        articleUrl="https://fastvidl.com/instagram-video-downloader"
        headline="Best Instagram Video Downloader Free | 1080p No Watermark"
        datePublished="2026-04-28"
        dateModified="2026-04-28"
      />
      <FAQSchema faqList={INSTAGRAM_VIDEO_FAQ_LIST} />
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
        <EzoicPlacements placementIds={getEzoicToolPlacements()} />
        <InstagramVideoBlogContent />
      </main>
    </div>
  );
}
