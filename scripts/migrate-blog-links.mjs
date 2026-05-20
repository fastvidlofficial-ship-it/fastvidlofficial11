/**
 * Persist blog link patches (author internal, cluster links, homepage fixes) to MongoDB.
 * Run: node scripts/migrate-blog-links.mjs
 */
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import mongoose from "mongoose";
import { patchBlogLinks } from "../src/lib/blog-link-patches.js";

const envPath = resolve(process.cwd(), ".env.local");
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m && !process.env[m[1].trim()]) {
      process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, "");
    }
  }
}

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error("MONGODB_URI is required");
  process.exit(1);
}

const BlogSchema = new mongoose.Schema({}, { strict: false, collection: "blogs" });
const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

await mongoose.connect(uri);
const docs = await Blog.find({ published: true }).lean();
let updated = 0;

for (const doc of docs) {
  const slug = doc.slug || "post";
  const patched = patchBlogLinks(String(doc.longDescription || ""), slug);
  if (patched !== doc.longDescription) {
    await Blog.updateOne({ _id: doc._id }, { $set: { longDescription: patched } });
    updated++;
    console.log("Updated links:", slug);
  }
}

console.log(`Done. ${updated} of ${docs.length} posts updated.`);
await mongoose.disconnect();
