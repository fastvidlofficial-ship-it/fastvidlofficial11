'use client'
import styles from "../../page.module.css";
import UserInput from "@/components/input/UserInput";
import Blog from "../../Blogs/page";

export default function InstagramReelDownloaderService() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{ textAlign: "center", padding: "2rem 1rem", width: "70%", margin: "2rem auto" }}>
          <h1 style={{ 
            fontSize: "3.6rem", 
            fontWeight: "700", 
            marginBottom: "1rem",
            color: "black",
            cursor: "pointer"
          }}>
            <span style={{ color: "black" }}>Instagram </span>
            <span style={{ 
              WebkitTextFillColor: "transparent",
              background: "linear-gradient(to right, #ff512f, #dd2476)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text"
            }}>Reel </span>
            Do<span style={{ 
              WebkitTextFillColor: "transparent",
              background: "linear-gradient(to right, #25ff92, #24afff)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text"
            }}>wnload</span>er 
            <span style={{
              color: "#20cf63",
              fontWeight: 800,
              fontSize: "1.4rem",
              marginLeft: "0.4rem",
              verticalAlign: "middle",
              textTransform: "uppercase",
              letterSpacing: "1px"
            }}>Free</span>
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
            Experience fast and secure downloads with our free Instagram Reel Downloader. 
            Save Instagram Reels online in HD quality without watermark, quick and easy. 
            The most reliable tool to download Instagram Reels instantly on any device.
          </p>
        </div>
        <UserInput />
        <Blog />
      </main>
    </div>
  );
}
