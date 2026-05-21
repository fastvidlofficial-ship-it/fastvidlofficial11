"use client";

import styles from "./page.module.css";
import IndexMessage from "@/components/index/IndexMessage";
import DownloaderToolSection from "@/components/DownloaderToolSection";
import NotAffiliatedNote from "@/components/NotAffiliatedNote";
import HomePageBlogSection from "@/content/HomePageBlogSection";
import PopularDownloaders from "@/components/popular-tools/PopularDownloaders";

export default function HomePageClient() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <IndexMessage />
        <DownloaderToolSection />
        <HomePageBlogSection />
        <PopularDownloaders />
        <NotAffiliatedNote />
      </main>
    </div>
  );
}
