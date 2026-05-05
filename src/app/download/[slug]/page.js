import { promises as fs } from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import styles from "../../page.module.css";
import heroStyles from "../../DownloaderHero.module.css";
import UserInput from "@/components/input/UserInput";
import FAQSchema from "@/components/FAQSchema";
import "@/content/Blog.css";

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

function renderStyledHeading(title, contentType) {
  const platformWords = new Set(["instagram", "facebook", "pinterest"]);
  const normalizedType = String(contentType || "").toLowerCase().trim();
  const contentWords = new Set(["video", "photo", "reel", "story", "stories", "pin", "pins", "igtv"]);

  if (normalizedType) {
    contentWords.add(normalizedType);
    if (normalizedType.endsWith("y")) {
      contentWords.add(`${normalizedType.slice(0, -1)}ies`);
    } else {
      contentWords.add(`${normalizedType}s`);
    }
  }
  const downloaderWord = "downloader";
  const words = title.split(/\s+/);

  const plainWordStyle = {
    color: "var(--heading-color, #1a202c)",
    fontWeight: 700,
  };

  const contentGradientStyle = {
    WebkitTextFillColor: "transparent",
    background: "linear-gradient(to right, #ff512f, #dd2476)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    fontWeight: 800,
  };

  const downloaderGradientStyle = {
    WebkitTextFillColor: "transparent",
    background: "linear-gradient(to right, #25ff92, #24afff)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    fontWeight: 800,
  };

  return words.map((word, index) => {
    const normalized = word.replace(/[^\w]/g, "").toLowerCase();

    let style = plainWordStyle;

    if (contentWords.has(normalized)) {
      style = contentGradientStyle;
    } else if (normalized === downloaderWord) {
      style = downloaderGradientStyle;
    } else if (platformWords.has(normalized)) {
      style = plainWordStyle;
    }

    return (
      <span key={`${word}-${index}`} style={style}>
        {word}
        {index < words.length - 1 ? " " : ""}
      </span>
    );
  });
}

export async function generateStaticParams() {
  const data = await readPseoData();
  return data.map((entry) => ({ slug: entry.slug }));
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

  const faqList = [{ question: entry.faq_q, answer: entry.faq_a }];

  return (
    <div className={styles.page}>
      <FAQSchema faqList={faqList} />
      <main className={styles.main}>
        <div className={heroStyles.heroWrap}>
          <h1 className={heroStyles.heroTitle} style={{ marginBottom: "0.5rem" }}>
            {renderStyledHeading(entry.h1_title, entry.content_type)}
          </h1>
        
        </div>

        <UserInput />

        <div className="container-blog">
          <section className="home-blog-article">
            <p className="home-blog-article-p">{entry.intro_text}</p>

            <h2 className="home-blog-article-h2" id="frequently-asked-questions">
              Frequently Asked Questions
            </h2>
            <div className="blog-content">
              <div className="faq-section">
                <div className="faq-item">
                  <h3 className="faq-question">{entry.faq_q}</h3>
                  <p className="faq-answer">{entry.faq_a}</p>
                </div>
              </div>
            </div>

            <p className="home-blog-article-p" style={{ fontWeight: 600 }}>
              Written by Raja Jahangir | Powered by Auroxa Tech
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
