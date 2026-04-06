"use client";

import styles from "../page.module.css";
import heroStyles from "../DownloaderHero.module.css";
import UserInput from "@/components/input/UserInput";
import "@/content/Blog.css";
import FAQSchema from "@/components/FAQSchema";
import AuthorOrganizationSchema from "@/components/AuthorOrganizationSchema";
import InstagramReelDownloaderBlogContent, {
  INSTAGRAM_BLOG_FAQ_LIST,
} from "@/content/instagram-reel-downloader-free/InstagramReelDownloaderBlogContent";
import ToolPageArticle from "@/components/tool-page/ToolPageArticle";
import ToolHeroH1 from "@/components/tool-page/ToolHeroH1";
import { useToolDocumentTitle } from "@/components/tool-page/useToolDocumentTitle";
import { useLocaleCatalog } from "@/contexts/LocaleContext";

export default function InstagramReelDownloaderService() {
  const { locale, catalog, t } = useLocaleCatalog();
  const ar = catalog.toolReel;
  useToolDocumentTitle("reel");

  const faqList =
    locale === "ar" && ar?.faq ? ar.faq : INSTAGRAM_BLOG_FAQ_LIST;

  return (
    <div className={styles.page}>
      <AuthorOrganizationSchema
        authorName="Raja Jahangir"
        authorUrl="https://www.linkedin.com/in/raja-jahangir"
        organizationName="Auroxa Tech"
        organizationUrl="https://auroxatech.com"
        articleUrl="https://fastvidl.com/instagram-reel-downloader-free"
        headline={
          locale === "ar"
            ? t("tools.reel.schemaHeadline")
            : "Instagram Reel Downloader Free: Download Reels Without Watermark (2026)"
        }
        datePublished="2026-02-27"
        dateModified="2026-04-02"
      />
      <FAQSchema faqList={faqList} />
      <main className={styles.main}>
        <div className={heroStyles.heroWrap}>
          <ToolHeroH1 variant="reel" titleClassName={heroStyles.heroTitle} />
        </div>
        <UserInput />
        <div className="container-blog">
          <section className="home-blog-article">
            <ToolPageArticle
              arKey="toolReel"
              renderEnglish={() => (
                <InstagramReelDownloaderBlogContent
                  variant="home"
                  faqList={INSTAGRAM_BLOG_FAQ_LIST}
                />
              )}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
