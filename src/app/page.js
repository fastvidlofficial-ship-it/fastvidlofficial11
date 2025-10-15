'use client'
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import IndexMessage from "@/components/index/IndexMessage";
import UserInput from "@/components/input/UserInput";
import Blog from "./Blogs/page";
// import Blog from "@/components/blog/Blog"; // Uncomment if you have a Blog component

export default function Home() {
  return (
    <div className={styles.page}>
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