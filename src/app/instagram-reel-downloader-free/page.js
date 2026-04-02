"use client";

import styles from "../page.module.css";
import heroStyles from "../DownloaderHero.module.css";
import UserInput from "@/components/input/UserInput";
import "../Blogs/Blog.css";
import FAQSchema from "@/components/FAQSchema";
import AuthorOrganizationSchema from "@/components/AuthorOrganizationSchema";
import InstagramReelDownloaderBlogContent, {
  INSTAGRAM_BLOG_FAQ_LIST,
} from "../Blogs/instagram-reel-downloader-free/InstagramReelDownloaderBlogContent";

export default function InstagramReelDownloaderService() {
  return (
    <div className={styles.page}>
      <AuthorOrganizationSchema
        authorName="Raja Jahangir"
        authorUrl="https://www.linkedin.com/in/raja-jahangir"
        organizationName="Auroxa Tech"
        organizationUrl="https://auroxatech.com"
        articleUrl="https://fastvidl.com/instagram-reel-downloader-free"
        headline="Instagram Reel Downloader Free: Download Reels Without Watermark (2026)"
        datePublished="2026-02-27"
        dateModified="2026-04-02"
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
        <UserInput />
        <div className="container-blog">
          <section className="home-blog-article">
            <InstagramReelDownloaderBlogContent variant="home" faqList={INSTAGRAM_BLOG_FAQ_LIST} />
          </section>
        </div>
      </main>
    </div>
  );
}
