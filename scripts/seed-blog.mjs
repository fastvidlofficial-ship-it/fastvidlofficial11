/* eslint-disable no-console */
/**
 * Seeds one full blog post into MongoDB so the /blogs page and the admin
 * dashboard have real content out of the box.
 *
 * Usage:
 *   npm run seed:blog                 # creates the post if absent, leaves it alone otherwise
 *   npm run seed:blog -- --force      # overwrites the existing post with the same slug
 *
 * Requires MONGODB_URI in .env.local (or .env).
 */

import path from "node:path";
import { fileURLToPath } from "node:url";
import { readFileSync, existsSync } from "node:fs";
import mongoose from "mongoose";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

/**
 * Tiny .env parser so we don't need an extra dependency.
 * Later files override earlier ones — matches Next.js precedence:
 * .env  <  .env.local
 */
function loadEnv() {
  const files = [".env", ".env.local"];
  for (const name of files) {
    const file = path.join(ROOT, name);
    if (!existsSync(file)) continue;
    const text = readFileSync(file, "utf8");
    for (const rawLine of text.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line || line.startsWith("#")) continue;
      const eq = line.indexOf("=");
      if (eq === -1) continue;
      const key = line.slice(0, eq).trim();
      let value = line.slice(eq + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      process.env[key] = value;
    }
  }
}

loadEnv();

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("✗ MONGODB_URI not found in .env / .env.local");
  process.exit(1);
}

// Same shape as src/models/Blog.js — kept in sync manually.
const FaqSchema = new mongoose.Schema(
  {
    question: { type: String, trim: true, default: "" },
    answer: { type: String, trim: true, default: "" },
  },
  { _id: false }
);

const BlogSchema = new mongoose.Schema(
  {
    metaTitle: { type: String, trim: true, default: "" },
    metaDescription: { type: String, trim: true, default: "" },
    metaKeywords: { type: String, trim: true, default: "" },
    title: { type: String, required: true, trim: true },
    slug: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      index: true,
    },
    longDescription: { type: String, default: "" },
    image: { type: String, trim: true, default: "" },
    imageAlt: { type: String, trim: true, default: "" },
    faqs: { type: [FaqSchema], default: [] },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

const SEED_BLOG = {
  metaTitle:
    "How to Download Instagram Reels Without Watermark in 2026 — FastVidl",
  metaDescription:
    "Step-by-step guide to download Instagram Reels in HD quality without a watermark. Free, no login, no app — works on phone, tablet and desktop.",
  metaKeywords:
    "instagram reel downloader, download instagram reels, instagram reels without watermark, hd instagram reels, save instagram reels, free instagram video downloader",
  title:
    "How to Download Instagram Reels Without Watermark in 2026 (Free & HD)",
  slug: "how-to-download-instagram-reels-without-watermark",
  image: "/assets/Why Do You Need a Free Instagram Reel Downloader.png",
  imageAlt:
    "Illustration of an Instagram Reel being saved with FastVidl on a smartphone",
  longDescription: `
<p>Instagram Reels are everywhere — from viral dances and quick recipe hacks to tutorials, product launches and creator tips. Sooner or later you'll come across one you want to keep: maybe to watch offline on a long flight, share with a friend, or repurpose with credit to the original creator.</p>

<p>The catch? Instagram doesn't ship a built-in download button for Reels, and most third-party tools either bake in their own watermark, force you to install a shady app, or hide the real download behind 10 pop-up ads. <strong>FastVidl removes all of that.</strong></p>

<h2>What you'll need</h2>
<ul>
  <li>Any modern browser — Chrome, Edge, Safari, Firefox or Brave on phone, tablet or desktop.</li>
  <li>The <strong>public link</strong> of the Reel you want to save (private accounts are not supported).</li>
  <li>About 30 seconds.</li>
</ul>

<h2>Step-by-step: Download an Instagram Reel without watermark</h2>

<h3>1. Copy the Reel link</h3>
<p>Open Instagram, find the Reel and tap the <strong>"…" (three-dot)</strong> menu. Choose <em>"Copy link"</em>. On desktop, you can simply copy the URL from the browser address bar.</p>

<h3>2. Paste it into FastVidl</h3>
<p>Open <a href="/instagram-reel-downloader-free">FastVidl's Instagram Reel Downloader</a>, paste the URL into the input box and press <strong>Download</strong>. No sign-up, no captcha, no app install.</p>

<h3>3. Pick your quality</h3>
<p>FastVidl fetches the original media so you can pick the highest available resolution — typically up to <strong>1080p HD</strong>. The file is delivered straight from Instagram's CDN, which means no re-encoding, no quality loss, and no FastVidl logo plastered on top.</p>

<h3>4. Save the file</h3>
<p>Hit the <strong>Save Video</strong> button. On phones it lands in your Photos / Gallery; on desktop it goes straight to your Downloads folder. Done.</p>

<h2>Why use FastVidl instead of other tools?</h2>
<ul>
  <li><strong>No watermark.</strong> The MP4 we serve is the original — exactly what Instagram stores.</li>
  <li><strong>No app, no login.</strong> Everything happens in your browser.</li>
  <li><strong>HD quality.</strong> Up to 1080p where Instagram makes it available.</li>
  <li><strong>Works everywhere.</strong> iPhone, Android, Windows, Mac and Linux.</li>
  <li><strong>100% free.</strong> No paywalls, no "premium" upsell.</li>
</ul>

<h2>Beyond Reels — what else can FastVidl save?</h2>
<p>The same flow works for almost any public Instagram content as well as several other platforms. Try our dedicated tools:</p>
<ul>
  <li><a href="/instagram-video-downloader">Instagram Video Downloader</a> — feed videos and IGTV.</li>
  <li><a href="/instagram-photo-downloader-free">Instagram Photo Downloader</a> — single photos and carousel posts.</li>
  <li><a href="/instagram-story-downloader">Instagram Story Downloader</a> — stories and highlights.</li>
  <li><a href="/free-facebook-video-downloader">Facebook Video Downloader</a> — public Facebook videos.</li>
  <li><a href="/pinterest-video-downloader-free">Pinterest Video Downloader</a> — Pinterest pins and videos.</li>
</ul>

<h2>Pro tips for creators</h2>
<p>Saving Reels is great, but always be respectful of the original creator:</p>
<ul>
  <li><strong>Credit the creator</strong> whenever you re-share their content.</li>
  <li><strong>Don't re-upload paid or sponsored content</strong> without permission.</li>
  <li>Use downloads for offline viewing, backups of your own work, or learning — not impersonation.</li>
</ul>

<h2>That's it</h2>
<p>One paste, one click, one HD MP4 — no watermark, no nonsense. Bookmark <a href="/">FastVidl</a> for next time you spot a Reel worth keeping.</p>
  `.trim(),
  faqs: [
    {
      question: "Is downloading Instagram Reels with FastVidl free?",
      answer:
        "Yes — FastVidl is 100% free with no hidden charges, no premium tier, and no ads blocking the download button. You can save as many public Reels as you want.",
    },
    {
      question: "Will the downloaded Reel have a watermark?",
      answer:
        "No. FastVidl pulls the original MP4 file straight from Instagram's CDN, so the video you get has no FastVidl branding or extra watermark added on top.",
    },
    {
      question: "Can I download Reels from private accounts?",
      answer:
        "No. Out of respect for users' privacy, FastVidl only supports public Reels. If an account is private, the Reel link will not be accessible to anyone who doesn't follow that account.",
    },
    {
      question: "Do I need to install an app or extension?",
      answer:
        "Not at all. FastVidl runs entirely in your browser — desktop or mobile. There is nothing to install, sign up for, or update.",
    },
    {
      question: "Is it legal to download Instagram Reels?",
      answer:
        "Downloading public Reels for personal, offline viewing is generally fine. Re-uploading someone else's content without permission, removing credit, or using it commercially can violate Instagram's Terms of Service and copyright law. Always credit creators and ask before reposting.",
    },
  ],
  published: true,
};

async function main() {
  const args = new Set(process.argv.slice(2));
  const force = args.has("--force");

  console.log("→ Connecting to MongoDB…");
  await mongoose.connect(MONGODB_URI, {
    bufferCommands: false,
    serverSelectionTimeoutMS: 30000,
    connectTimeoutMS: 30000,
    socketTimeoutMS: 45000,
    family: 4,
  });
  console.log("✓ Connected");

  const existing = await Blog.findOne({ slug: SEED_BLOG.slug });

  if (existing && !force) {
    console.log(
      `→ A blog with slug "${SEED_BLOG.slug}" already exists (id: ${existing._id}). ` +
        "Re-run with `npm run seed:blog -- --force` to overwrite it."
    );
  } else if (existing && force) {
    Object.assign(existing, SEED_BLOG);
    await existing.save();
    console.log(`✓ Updated existing blog (id: ${existing._id})`);
  } else {
    const created = await Blog.create(SEED_BLOG);
    console.log(`✓ Inserted new blog (id: ${created._id})`);
  }

  console.log(`→ Public URL:  /blogs/${SEED_BLOG.slug}`);
  console.log(`→ Admin URL:   /admin-dashboard/blogs-management`);

  await mongoose.disconnect();
  console.log("✓ Done");
}

main().catch(async (err) => {
  console.error("✗ Seed failed:", err?.message || err);
  try {
    await mongoose.disconnect();
  } catch {
    /* ignore */
  }
  process.exit(1);
});
