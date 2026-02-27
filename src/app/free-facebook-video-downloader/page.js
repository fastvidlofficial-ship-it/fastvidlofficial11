'use client'
import styles from "../page.module.css";
import heroStyles from "../DownloaderHero.module.css";
import UserInput from "@/components/input/UserInput";
import AuthorOrganizationSchema from "@/components/AuthorOrganizationSchema";
import FacebookBlogContent from "../Blogs/free-facebook-video-downloader/FacebookBlogContent";

export default function FacebookReelDownloaderService() {
  return (
    <div className={styles.page}>
      <AuthorOrganizationSchema
        authorName="Raja Jahangir"
        authorUrl="https://www.linkedin.com/in/raja-jahangir"
        organizationName="Auroxa Tech"
        organizationUrl="https://auroxatech.com"
        articleUrl="https://fastvidl.com/free-facebook-video-downloader"
        headline="Free Facebook Video Downloader: Download FB Videos in HD (2026)"
        datePublished="2026-02-27"
        dateModified="2026-02-27"
      />
      <main className={styles.main}>
        <div className={heroStyles.heroWrap}>
          <h1 className={heroStyles.heroTitle}>
            <span style={{ color: "var(--heading-color, #1a202c)" }}>Free </span>
            <span style={{ color: "var(--heading-color, #1a202c)" }}>Facebook </span>
            <span style={{
              WebkitTextFillColor: "transparent",
              background: "linear-gradient(to right, #ff512f, #dd2476)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text"
            }}>Video </span>
            <span style={{
              WebkitTextFillColor: "transparent",
              background: "linear-gradient(to right, #25ff92, #24afff)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text"
            }}>Downloader</span>
          </h1>
          <p style={{
            fontSize: "1.14rem",
            color: "var(--p-font-color)",
            maxWidth: "60%",
            margin: "1rem auto",
            lineHeight: "35px",
            fontWeight: "600",
            textTransform: "capitalize",
            textAlign: "center"
          }}>
          </p>
        </div>
        <UserInput />
        <FacebookBlogContent />
      </main>
    </div>
  );
}
