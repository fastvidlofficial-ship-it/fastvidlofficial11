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

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error("MONGODB_URI required");
  process.exit(1);
}

const Blog = mongoose.model(
  "Blog",
  new mongoose.Schema({}, { strict: false, collection: "blogs" })
);

await mongoose.connect(uri);
const docs = await Blog.find({}, { slug: 1, longDescription: 1, image: 1 }).lean();

let withB64 = 0;
let withBlobHtml = 0;
let withBlobImage = 0;

for (const d of docs) {
  const h = d.longDescription || "";
  const img = d.image || "";
  if (/data:image\/[^;]+;base64/i.test(h)) withB64++;
  if (/\/api\/blob/i.test(h)) withBlobHtml++;
  if (/\/api\/blob/i.test(img)) withBlobImage++;
}

console.log("posts:", docs.length);
console.log("longDescription with base64:", withB64);
console.log("longDescription with /api/blob:", withBlobHtml);
console.log("image field with /api/blob:", withBlobImage);

for (const d of docs) {
  const h = d.longDescription || "";
  if (/data:image/i.test(h)) {
    const m = h.match(/data:image\/[^;]+;base64,[A-Za-z0-9+/]{0,40}/);
    console.log("base64 in:", d.slug, m?.[0]?.slice(0, 60));
  }
}

await mongoose.disconnect();
