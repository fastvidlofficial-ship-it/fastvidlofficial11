'use client'
import Script from "next/script";
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import IndexMessage from "@/components/index/IndexMessage";
import UserInput from "@/components/input/UserInput";
import Blog from "./Blogs/page";
// import Blog from "@/components/blog/Blog"; // Uncomment if you have a Blog component

const AD_SCRIPT_1 = "https://pl28831144.effectivegatecpm.com/11/bc/39/11bc399ea80851600816f5a053ea4002.js";
const AD_SCRIPT_2 = "https://pl28831150.effectivegatecpm.com/36/3f/c6/363fc684a300b75d48140e34499d189d.js";

export default function Home() {
  return (
    <div className={styles.page}>
      <Script src={AD_SCRIPT_1} strategy="afterInteractive" />
      <Script src={AD_SCRIPT_2} strategy="afterInteractive" />
      {/* <Header /> */}
      <main className={styles.main}>
        <IndexMessage />
        <UserInput />
        <Blog/>
        {/* <Blog /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}