"use client";

import styles from "../page.module.css";
import heroStyles from "../DownloaderHero.module.css";
import UserInput from "@/components/input/UserInput";
import AuthorOrganizationSchema from "@/components/AuthorOrganizationSchema";
import FAQSchema from "@/components/FAQSchema";
import PinterestBlogContent, {
  PINTEREST_FAQ_LIST,
} from "@/content/pinterest-video-downloader-free/PinterestBlogContent";
import ToolPageArticle from "@/components/tool-page/ToolPageArticle";
import ToolHeroH1 from "@/components/tool-page/ToolHeroH1";
import { useToolDocumentTitle } from "@/components/tool-page/useToolDocumentTitle";
import { useLocaleCatalog } from "@/contexts/LocaleContext";

export default function PinterestReelDownloaderService() {
  const { locale, catalog, t } = useLocaleCatalog();
  const ar = catalog.toolPinterest;
  useToolDocumentTitle("pinterest");

  const faqList =
    locale === "ar" && ar?.faq ? ar.faq : PINTEREST_FAQ_LIST;

  return (
    <div className={styles.page}>
      <AuthorOrganizationSchema
        authorName="Raja Jahangir"
        authorUrl="https://www.linkedin.com/in/raja-jahangir"
        organizationName="Auroxa Tech"
        organizationUrl="https://auroxatech.com"
        articleUrl="https://fastvidl.com/pinterest-video-downloader-free"
        headline={
          locale === "ar"
            ? t("tools.pinterest.schemaHeadline")
            : "Pinterest Video Downloader Free: Download Videos Without Watermark (2026)"
        }
        datePublished="2026-03-26"
        dateModified="2026-04-02"
      />
      <FAQSchema faqList={faqList} />
      <main className={styles.main}>
        <div className={heroStyles.heroWrap}>
          <ToolHeroH1
            variant="pinterest"
            titleClassName={heroStyles.heroTitle}
          />
        </div>
        <UserInput />
        {locale === "ar" ? (
          <div className="container-blog">
            <div className="home-blog-article blog-content">
              <ToolPageArticle arKey="toolPinterest" />
            </div>
          </div>
        ) : (
          <PinterestBlogContent />
        )}
      </main>
    </div>
  );
}
