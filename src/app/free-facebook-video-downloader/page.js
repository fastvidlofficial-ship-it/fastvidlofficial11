"use client";

import styles from "../page.module.css";
import heroStyles from "../DownloaderHero.module.css";
import UserInput from "@/components/input/UserInput";
import AuthorOrganizationSchema from "@/components/AuthorOrganizationSchema";
import FAQSchema from "@/components/FAQSchema";
import FacebookBlogContent, {
  FACEBOOK_FAQ_LIST,
} from "@/content/free-facebook-video-downloader/FacebookBlogContent";
import ToolPageArticle from "@/components/tool-page/ToolPageArticle";
import ToolHeroH1 from "@/components/tool-page/ToolHeroH1";
import { useToolDocumentTitle } from "@/components/tool-page/useToolDocumentTitle";
import { useLocaleCatalog } from "@/contexts/LocaleContext";

export default function FacebookReelDownloaderService() {
  const { locale, catalog, t } = useLocaleCatalog();
  const ar = catalog.toolFacebook;
  useToolDocumentTitle("facebook");

  const faqList =
    locale === "ar" && ar?.faq ? ar.faq : FACEBOOK_FAQ_LIST;

  return (
    <div className={styles.page}>
      <AuthorOrganizationSchema
        authorName="Raja Jahangir"
        authorUrl="https://www.linkedin.com/in/raja-jahangir"
        organizationName="Auroxa Tech"
        organizationUrl="https://auroxatech.com"
        articleUrl="https://fastvidl.com/free-facebook-video-downloader"
        headline={
          locale === "ar"
            ? t("tools.facebook.schemaHeadline")
            : "Free Facebook Video Downloader: Download FB Videos in HD (2026)"
        }
        datePublished="2026-03-26"
        dateModified="2026-04-02"
      />
      <FAQSchema faqList={faqList} />
      <main className={styles.main}>
        <div className={heroStyles.heroWrap}>
          <ToolHeroH1 variant="facebook" titleClassName={heroStyles.heroTitle} />
        </div>
        <UserInput />
        {locale === "ar" ? (
          <div className="container-blog">
            <div className="home-blog-article blog-content">
              <ToolPageArticle arKey="toolFacebook" />
            </div>
          </div>
        ) : (
          <FacebookBlogContent />
        )}
      </main>
    </div>
  );
}
