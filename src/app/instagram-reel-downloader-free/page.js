'use client'
import styles from "../page.module.css";
import heroStyles from "../DownloaderHero.module.css";
import UserInput from "@/components/input/UserInput";
import Blog from "../Blogs/page";

export default function InstagramReelDownloaderService() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={heroStyles.heroWrap}>
          <h1 className={heroStyles.heroTitle}>
            <span style={{ color: "black" }}>Instagram </span>
            <span style={{
              WebkitTextFillColor: "transparent",
              background: "linear-gradient(to right, #ff512f, #dd2476)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text"
            }}>Reel </span>
            <span style={{
              WebkitTextFillColor: "transparent",
              background: "linear-gradient(to right, #25ff92, #24afff)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text"
            }}>Downloader</span>
            <span style={{ color: "black" }}> Free</span>
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
        <Blog />
      </main>
    </div>
  );
}
