"use client";

import styles from "../page.module.css";
import heroStyles from "../DownloaderHero.module.css";
import UserInput from "@/components/input/UserInput";
import "@/content/Blog.css";
import FAQSchema from "@/components/FAQSchema";
import AuthorOrganizationSchema from "@/components/AuthorOrganizationSchema";
import InstagramPhotoBlogContent, { PHOTO_BLOG_FAQ_LIST } from "@/content/instagram-photo-downloader/InstagramPhotoBlogContent";
import EzoicPlacements from "@/components/ads/EzoicPlacements";
import { getEzoicToolPlacements } from "@/config/ezoicPlacements";

export default function InstagramPhotoDownloaderService() {
  return (
    <div className={styles.page}>
      <AuthorOrganizationSchema
        authorName="Raja Jahangir"
        authorUrl="https://www.linkedin.com/in/raja-jahangir"
        organizationName="Auroxa Tech"
        organizationUrl="https://auroxatech.com"
        articleUrl="https://fastvidl.com/instagram-photo-downloader"
        headline="Instagram Photo Downloader: The Ultimate Guide to Saving Images in HD Quality"
        datePublished="2026-03-26"
        dateModified="2026-04-20"
      />
      <FAQSchema faqList={PHOTO_BLOG_FAQ_LIST} />
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
              Photo{" "}
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
        <div className="container-blog">
          <section className="home-blog-article">
            <InstagramPhotoBlogContent variant="home" faqList={PHOTO_BLOG_FAQ_LIST} />
          </section>
        </div>
      </main>
    </div>
  );
}
