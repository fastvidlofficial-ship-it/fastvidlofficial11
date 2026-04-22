'use client'
import styles from "./page.module.css";
import IndexMessage from "@/components/index/IndexMessage";
import UserInput from "@/components/input/UserInput";
import HomePageBlogSection from "@/content/HomePageBlogSection";
import EzoicPlacements from "@/components/ads/EzoicPlacements";
import { getEzoicHomePlacements } from "@/config/ezoicPlacements";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <IndexMessage />
        <UserInput />
        <EzoicPlacements placementIds={getEzoicHomePlacements()} />
        <HomePageBlogSection />
      </main>
    </div>
  );
}
