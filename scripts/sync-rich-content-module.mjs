import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const pseo = JSON.parse(fs.readFileSync(path.join(root, "pseo-data.json"), "utf8"));
const map = Object.fromEntries(pseo.map((e) => [e.slug, e.richContent]));

const header = `/** @type {Record<string, import("../src/lib/pseo-rich-content.js").RichContent>} */\n`;
const body = `export const richContentBySlug = ${JSON.stringify(map, null, 2)};\n`;

fs.writeFileSync(path.join(root, "scripts", "pseo-rich-content-data.mjs"), header + body);
console.log(`Synced ${Object.keys(map).length} slugs.`);
