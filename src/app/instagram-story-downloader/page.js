"use client";

import styles from "../page.module.css";
import heroStyles from "../DownloaderHero.module.css";
import DownloaderToolSection from "@/components/DownloaderToolSection";
import NotAffiliatedNote from "@/components/NotAffiliatedNote";
import "@/content/Blog.css";
import FAQSchema from "@/components/FAQSchema";
import AuthorOrganizationSchema from "@/components/AuthorOrganizationSchema";
import RelatedToolsSection from "@/components/RelatedToolsSection";
import HelpfulGuidesSection from "@/components/downloader/HelpfulGuidesSection";
import InstagramStoryBlogContent, { STORY_BLOG_FAQ_LIST } from "@/content/instagram-story-downloader/InstagramStoryBlogContent";
const RELATED_STORY_TOOLS = [
  { href: "/download/instagram-story-saver-hd", label: "Instagram Story Saver HD" },
  {
    href: "/download/instagram-highlight-downloader-hd",
    label: "Instagram Highlight Downloader HD",
  },
  {
    href: "/download/instagram-igtv-downloader-1080p",
    label: "Instagram IGTV Downloader 1080p",
  },
];

export default function InstagramStoryDownloaderService() {
  return (
    <div className={styles.page}>
      <AuthorOrganizationSchema
        authorName="Raja Jahangir"
        authorUrl="https://fastvidl.com/author/raja-jahangir"
        organizationName="Auroxa Tech"
        organizationUrl="https://auroxatech.com"
        articleUrl="https://fastvidl.com/instagram-story-downloader"
        headline="Instagram Story Downloader: Save Stories & Highlights in HD (Free & Anonymous)"
        datePublished="2026-03-27"
        dateModified="2026-04-20"
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
        <DownloaderToolSection />
        <div className="container-blog">
          <section className="home-blog-article">
            <InstagramStoryBlogContent variant="home" faqList={STORY_BLOG_FAQ_LIST} />
          </section>
        </div>
        <div className="container-blog">
          <HelpfulGuidesSection downloaderPath="/instagram-story-downloader" />
        </div>
        <RelatedToolsSection
          heading="More Free Instagram Story Tools"
          tools={RELATED_STORY_TOOLS}
        />
        <NotAffiliatedNote />
      </main>
    </div>
  );
}
