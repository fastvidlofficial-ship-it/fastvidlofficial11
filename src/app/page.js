'use client'
import styles from "./page.module.css";
import IndexMessage from "@/components/index/IndexMessage";
import UserInput from "@/components/input/UserInput";
import HomePageBlogSection from "@/content/HomePageBlogSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <IndexMessage />
        <UserInput />
        <HomePageBlogSection />
      </main>
    </div>
  );
}
