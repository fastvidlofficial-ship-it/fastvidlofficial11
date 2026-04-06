"use client";

import styles from "../page.module.css";
import heroStyles from "../DownloaderHero.module.css";
import UserInput from "@/components/input/UserInput";
import "@/content/Blog.css";
import FAQSchema from "@/components/FAQSchema";
import AuthorOrganizationSchema from "@/components/AuthorOrganizationSchema";
import InstagramStoryBlogContent, {
  STORY_BLOG_FAQ_LIST,
} from "@/content/instagram-story-downloader/InstagramStoryBlogContent";
import ToolPageArticle from "@/components/tool-page/ToolPageArticle";
import ToolHeroH1 from "@/components/tool-page/ToolHeroH1";
import { useToolDocumentTitle } from "@/components/tool-page/useToolDocumentTitle";
import { useLocaleCatalog } from "@/contexts/LocaleContext";

export default function InstagramStoryDownloaderService() {
  const { locale, catalog, t } = useLocaleCatalog();
  const ar = catalog.toolStory;
  useToolDocumentTitle("story");

  const faqList =
    locale === "ar" && ar?.faq ? ar.faq : STORY_BLOG_FAQ_LIST;

  return (
    <div className={styles.page}>
      <AuthorOrganizationSchema
        authorName="Raja Jahangir"
        authorUrl="https://www.linkedin.com/in/raja-jahangir"
        organizationName="Auroxa Tech"
        organizationUrl="https://auroxatech.com"
        articleUrl="https://fastvidl.com/instagram-story-downloader"
        headline={
          locale === "ar"
            ? t("tools.story.schemaHeadline")
            : "Instagram Story Downloader: Save Stories & Highlights in HD (Free & Anonymous)"
        }
        datePublished="2026-03-27"
        dateModified="2026-04-02"
      />
      <FAQSchema faqList={faqList} />
      <main className={styles.main}>
        <div className={heroStyles.heroWrap}>
          <ToolHeroH1 variant="story" titleClassName={heroStyles.heroTitle} />
        </div>
        <UserInput />
        <div className="container-blog">
          <section className="home-blog-article">
            <ToolPageArticle
              arKey="toolStory"
              renderEnglish={() => (
                <InstagramStoryBlogContent
                  variant="home"
                  faqList={STORY_BLOG_FAQ_LIST}
                />
              )}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
