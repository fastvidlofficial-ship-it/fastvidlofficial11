import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import mongoose from "mongoose";

function loadEnv() {
  const envPath = resolve(process.cwd(), ".env.local");
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m && !process.env[m[1].trim()]) {
      process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, "");
    }
  }
}

loadEnv();

const slugs = [
  "save-instagram-stories-with-music-not-muted",
  "download-instagram-carousel-photos-phone",
];

const Blog = mongoose.model(
  "Blog",
  new mongoose.Schema({}, { strict: false, collection: "blogs" })
);

await mongoose.connect(process.env.MONGODB_URI);
for (const s of slugs) {
  const d = await Blog.findOne({ slug: s }).lean();
  console.log(
    s,
    "published:",
    d?.published,
    "metaTitle:",
    !!d?.metaTitle,
    "metaDesc:",
    !!d?.metaDescription
  );
}
await mongoose.disconnect();
