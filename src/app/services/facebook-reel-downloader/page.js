'use client'
import styles from "../../page.module.css";
import UserInput from "@/components/input/UserInput";
import FacebookBlogContent from "../../Blogs/free-facebook-video-downloader/FacebookBlogContent";

export default function FacebookReelDownloaderService() {
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
            <span style={{ color: "black" }}>Free </span>
            <span style={{ color: "black" }}>Facebook </span>
            <span style={{ 
              WebkitTextFillColor: "transparent",
              background: "linear-gradient(to right, #ff512f, #dd2476)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text"
            }}>Video </span>
            Do<span style={{ 
              WebkitTextFillColor: "transparent",
              background: "linear-gradient(to right, #25ff92, #24afff)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text"
            }}>wnload</span>er
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
