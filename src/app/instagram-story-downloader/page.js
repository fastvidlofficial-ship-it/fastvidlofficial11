"use client";

import styles from "../page.module.css";
import heroStyles from "../DownloaderHero.module.css";
import UserInput from "@/components/input/UserInput";
import "@/content/Blog.css";
import FAQSchema from "@/components/FAQSchema";
import AuthorOrganizationSchema from "@/components/AuthorOrganizationSchema";
import InstagramStoryBlogContent, { STORY_BLOG_FAQ_LIST } from "@/content/instagram-story-downloader/InstagramStoryBlogContent";

export default function InstagramStoryDownloaderService() {
  return (
    <div className={styles.page}>
      <AuthorOrganizationSchema
        authorName="Raja Jahangir"
        authorUrl="https://www.linkedin.com/in/raja-jahangir"
        organizationName="Auroxa Tech"
        organizationUrl="https://auroxatech.com"
        articleUrl="https://fastvidl.com/instagram-story-downloader"
        headline="Instagram Story Downloader: Save Stories & Highlights in HD (Free & Anonymous)"
        datePublished="2026-03-27"
        dateModified="2026-04-02"
      />
      <FAQSchema faqList={STORY_BLOG_FAQ_LIST} />
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
              Story{" "}
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
        <div className="container-blog">
          <section className="home-blog-article">
            <InstagramStoryBlogContent variant="home" faqList={STORY_BLOG_FAQ_LIST} />
          </section>
        </div>
      </main>
    </div>
  );
}
