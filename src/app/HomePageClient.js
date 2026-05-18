"use client";

import styles from "./page.module.css";
import IndexMessage from "@/components/index/IndexMessage";
import DownloaderToolSection from "@/components/DownloaderToolSection";
import NotAffiliatedNote from "@/components/NotAffiliatedNote";
import HomePageBlogSection from "@/content/HomePageBlogSection";
import EzoicPlacements from "@/components/ads/EzoicPlacements";
import { getEzoicHomePlacements } from "@/config/ezoicPlacements";
import PopularDownloaders from "@/components/popular-tools/PopularDownloaders";

export default function HomePageClient() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <IndexMessage />
        <DownloaderToolSection />
        <EzoicPlacements placementIds={getEzoicHomePlacements()} />
        <HomePageBlogSection />
        <PopularDownloaders />
        <NotAffiliatedNote />
      </main>
    </div>
  );
}
