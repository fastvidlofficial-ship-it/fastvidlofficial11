import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { richContentBySlug } from "./pseo-rich-content-data.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const pseoPath = path.join(root, "pseo-data.json");

const pseo = JSON.parse(fs.readFileSync(pseoPath, "utf8"));
let updated = 0;
let missing = [];

for (const entry of pseo) {
  const rc = richContentBySlug[entry.slug];
  if (rc) {
    entry.richContent = rc;
    updated++;
  } else {
    missing.push(entry.slug);
  }
}

if (missing.length) {
  console.error("Missing richContent for slugs:", missing.join(", "));
  process.exit(1);
}

fs.writeFileSync(pseoPath, JSON.stringify(pseo, null, 2) + "\n", "utf8");
console.log(`Updated richContent on ${updated} pages.`);
