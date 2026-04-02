"use client";

import styles from "../page.module.css";
import heroStyles from "../DownloaderHero.module.css";
import UserInput from "@/components/input/UserInput";
import "../Blogs/Blog.css";
import FAQSchema from "@/components/FAQSchema";
import AuthorOrganizationSchema from "@/components/AuthorOrganizationSchema";
import InstagramHighlightsBlogContent, { HIGHLIGHTS_BLOG_FAQ_LIST } from "../Blogs/instagram-highlights-downloader/InstagramHighlightsBlogContent";

export default function InstagramHighlightsDownloaderService() {
  return (
    <div className={styles.page}>
      <AuthorOrganizationSchema
        authorName="Raja Jahangir"
        authorUrl="https://www.linkedin.com/in/raja-jahangir"
        organizationName="Auroxa Tech"
        organizationUrl="https://auroxatech.com"
        articleUrl="https://fastvidl.com/instagram-highlights-downloader"
        headline="Instagram Highlights Downloader: Save Stories in HD & Safe"
        datePublished="2026-03-26"
        dateModified="2026-04-02"
      />
      <FAQSchema faqList={HIGHLIGHTS_BLOG_FAQ_LIST} />
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
              Highlights{" "}
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
          <p
            style={{
              fontSize: "1.14rem",
              color: "var(--p-font-color)",
              maxWidth: "min(90%, 640px)",
              margin: "1rem auto",
              lineHeight: "1.5",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Save Instagram highlights in HD — free, no login, Safari &amp; Chrome. Scroll below for the full expert guide.
          </p>
        </div>
        <UserInput />
        <div className="container-blog">
          <section className="home-blog-article">
            <InstagramHighlightsBlogContent variant="home" faqList={HIGHLIGHTS_BLOG_FAQ_LIST} />
          </section>
        </div>
      </main>
    </div>
  );
}
