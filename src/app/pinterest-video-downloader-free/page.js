'use client'
import styles from "../page.module.css";
import heroStyles from "../DownloaderHero.module.css";
import UserInput from "@/components/input/UserInput";
import PinterestBlogContent from "../Blogs/pinterest-video-downloader-free/PinterestBlogContent";

export default function PinterestReelDownloaderService() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={heroStyles.heroWrap}>
          <h1 className={heroStyles.heroTitle}>
            <span style={{ color: "black" }}>Pinterest </span>
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
            <span style={{ color: "black" }}> Free</span>
          </h1>
        </div>
        <UserInput />
        <PinterestBlogContent />
      </main>
    </div>
  );
}
