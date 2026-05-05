import { promises as fs } from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";

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

function renderStyledHeading(title) {
  const platformWords = new Set(["instagram", "facebook", "pinterest"]);
  const contentWords = new Set(["video", "photo", "reel"]);
  const downloaderWord = "downloader";

  return title.split(/\s+/).map((word, index) => {
    const normalized = word.replace(/[^\w]/g, "").toLowerCase();

    let className = "text-gray-900 font-bold";

    if (contentWords.has(normalized)) {
      className =
        "bg-clip-text text-transparent bg-gradient-to-r from-[#FF5C2A] to-[#FF2D6F] font-extrabold";
    } else if (normalized === downloaderWord) {
      className =
        "bg-clip-text text-transparent bg-gradient-to-r from-[#17FF79] to-[#01CBFF] font-extrabold";
    } else if (platformWords.has(normalized)) {
      className = "text-gray-900 font-bold";
    }

    return (
      <span key={`${word}-${index}`} className={className}>
        {word}
        {index < title.split(/\s+/).length - 1 ? " " : ""}
      </span>
    );
  });
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
    <main className="min-h-screen bg-[var(--background,#f8fafc)] text-[var(--foreground,#0f172a)]">
      <section className="mx-auto w-full max-w-5xl px-4 pb-14 pt-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70 sm:p-8">
          <p className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {entry.platform} {entry.content_type} Downloader
          </p>
          <h1 className="mt-2 text-center text-4xl font-extrabold leading-tight md:text-6xl">
            {renderStyledHeading(entry.h1_title)}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">{entry.intro_text}</p>

          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60 sm:p-5">
            <label htmlFor="download-url" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Start download
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="download-url"
                type="url"
                placeholder={placeholder}
                className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm outline-none ring-0 transition focus:border-slate-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-400"
              />
              <button
                type="button"
                className="h-12 shrink-0 rounded-lg bg-gradient-to-r from-rose-500 to-sky-500 px-6 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
              >
                Download
              </button>
            </div>
          </div>
        </div>

        <section className="mt-10 rounded-2xl border border-slate-200/70 bg-white/90 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70 sm:p-8">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-5 space-y-4">
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
              <h3 className="text-base font-semibold">{entry.faq_q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{entry.faq_a}</p>
            </article>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200/70 bg-white/90 p-5 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Written by Raja Jahangir | Powered by Auroxa Tech
          </p>
        </section>
      </section>
    </main>
  );
}
