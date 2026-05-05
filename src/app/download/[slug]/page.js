import { promises as fs } from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import styles from "../../page.module.css";
import heroStyles from "../../DownloaderHero.module.css";
import UserInput from "@/components/input/UserInput";
import "@/content/Blog.css";
import EzoicPlacements from "@/components/ads/EzoicPlacements";
import { getEzoicToolPlacements } from "@/config/ezoicPlacements";

export const dynamicParams = true;
export const runtime = "nodejs";

async function readPseoData() {
  const filePath = path.join(process.cwd(), "pseo-data.json");
  const raw = await fs.readFile(filePath, "utf8");
  const parsed = JSON.parse(raw);

  if (!Array.isArray(parsed)) {
    return [];
  }

  return parsed.filter((item) => item && typeof item.slug === "string" && item.slug.length > 0);
}

async function getSlugFromParams(params) {
  const resolvedParams = await Promise.resolve(params);
  return resolvedParams?.slug;
}

function getInputPlaceholder(contentType) {
  const normalized = contentType.toLowerCase();

  if (normalized === "video" || normalized === "reel" || normalized === "igtv") {
    return "Paste Video URL here";
  }
  if (normalized === "photo" || normalized === "image") {
    return "Paste Photo URL here";
  }
  if (normalized === "pin") {
    return "Paste Pin URL here";
  }
  if (normalized === "story") {
    return "Paste Story URL here";
  }

  return "Paste Video/Photo/Pin URL here";
}

export async function generateStaticParams() {
  const data = await readPseoData();
  return data.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }) {
  const slug = await getSlugFromParams(params);
  if (!slug) {
    notFound();
  }

  const data = await readPseoData();
  const entry = data.find((item) => item.slug === slug);

  if (!entry) {
    notFound();
  }

  const canonical = `https://fastvidl.com/download/${entry.slug}`;

  return {
    title: entry.meta_title,
    description: entry.meta_desc,
    alternates: { canonical },
    openGraph: {
      title: entry.meta_title,
      description: entry.meta_desc,
      url: canonical,
      siteName: "FastVidl",
      images: ["/assets/weblogo.png"],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: entry.meta_title,
      description: entry.meta_desc,
    },
  };
}

export default async function DownloadSlugPage({ params }) {
  const slug = await getSlugFromParams(params);
  if (!slug) {
    notFound();
  }

  const data = await readPseoData();
  const entry = data.find((item) => item.slug === slug);

  if (!entry) {
    notFound();
  }

  const placeholder = getInputPlaceholder(entry.content_type);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={heroStyles.heroWrap}>
          <h1 className={heroStyles.heroTitle}>{entry.h1_title}</h1>
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
              color: "var(--muted-text, #64748b)",
              fontWeight: 500,
            }}
          >
            {entry.platform} · {entry.content_type} · FastVidl
          </p>
        </div>

        <UserInput />
        <EzoicPlacements placementIds={getEzoicToolPlacements()} />

        <div className="container-blog">
          <section className="home-blog-article">
            <p className="home-blog-article-meta" style={{ marginBottom: "0.75rem" }}>
              Download helper: {placeholder}
            </p>
            <p className="home-blog-article-p">{entry.intro_text}</p>

            <h2 className="home-blog-article-h2">Frequently Asked Questions</h2>
            <div className="blog-content">
              <div className="faq-section">
                <div className="faq-item">
                  <h3 className="faq-question">{entry.faq_q}</h3>
                  <p className="faq-answer">{entry.faq_a}</p>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: "1.5rem",
                border: "1px solid var(--article-border, #e5e7eb)",
                borderRadius: "12px",
                padding: "0.9rem 1rem",
                background: "var(--article-soft-bg, #f8fafc)",
              }}
            >
              <p className="home-blog-article-p" style={{ marginBottom: 0 }}>
                Written by Raja Jahangir | Powered by Auroxa Tech
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
