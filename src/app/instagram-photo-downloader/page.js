"use client";

import styles from "../page.module.css";
import heroStyles from "../DownloaderHero.module.css";
import UserInput from "@/components/input/UserInput";
import "@/content/Blog.css";
import FAQSchema from "@/components/FAQSchema";
import AuthorOrganizationSchema from "@/components/AuthorOrganizationSchema";
import InstagramPhotoBlogContent, {
  PHOTO_BLOG_FAQ_LIST,
} from "@/content/instagram-photo-downloader/InstagramPhotoBlogContent";
import ToolPageArticle from "@/components/tool-page/ToolPageArticle";
import ToolHeroH1 from "@/components/tool-page/ToolHeroH1";
import { useToolDocumentTitle } from "@/components/tool-page/useToolDocumentTitle";
import { useLocaleCatalog } from "@/contexts/LocaleContext";

export default function InstagramPhotoDownloaderService() {
  const { locale, catalog, t } = useLocaleCatalog();
  const ar = catalog.toolPhoto;
  useToolDocumentTitle("photo");

  const faqList =
    locale === "ar" && ar?.faq ? ar.faq : PHOTO_BLOG_FAQ_LIST;

  return (
    <div className={styles.page}>
      <AuthorOrganizationSchema
        authorName="Raja Jahangir"
        authorUrl="https://www.linkedin.com/in/raja-jahangir"
        organizationName="Auroxa Tech"
        organizationUrl="https://auroxatech.com"
        articleUrl="https://fastvidl.com/instagram-photo-downloader"
        headline={
          locale === "ar"
            ? t("tools.photo.schemaHeadline")
            : "Instagram Photo Downloader: The Ultimate Guide to Saving Images in HD Quality"
        }
        datePublished="2026-03-26"
        dateModified="2026-04-02"
      />
      <FAQSchema faqList={faqList} />
      <main className={styles.main}>
        <div className={heroStyles.heroWrap}>
          <ToolHeroH1 variant="photo" titleClassName={heroStyles.heroTitle} />
        </div>
        <UserInput />
        <div className="container-blog">
          <section className="home-blog-article">
            <ToolPageArticle
              arKey="toolPhoto"
              renderEnglish={() => (
                <InstagramPhotoBlogContent
                  variant="home"
                  faqList={PHOTO_BLOG_FAQ_LIST}
                />
              )}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
