/**
 * Converts fastvidl.xlsx → pseo-data.json at repo root.
 * Usage: node scripts/build-pseo-data.mjs [path-to-xlsx]
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import XLSX from "xlsx";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, "..");
const outFile = path.join(repoRoot, "pseo-data.json");

const defaultInput = path.join("C:", "Users", "Khichi", "Downloads", "fastvidl.xlsx");
const inputFile = process.argv[2] ? path.resolve(process.argv[2]) : defaultInput;

function normHeader(key) {
  return String(key ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, "");
}

function pick(row, candidates) {
  for (const rawKey of Object.keys(row)) {
    const nk = normHeader(rawKey);
    if (candidates.includes(nk)) return row[rawKey];
  }
  return "";
}

function parseFaqs(text) {
  const raw = String(text ?? "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim();
  if (!raw) return [];

  const out = [];
  const re = /Q:\s*([\s\S]*?)\s*A:\s*([\s\S]*?)(?=Q:\s|$)/gi;
  let m;
  while ((m = re.exec(raw)) !== null) {
    const question = m[1].replace(/\s+/g, " ").trim();
    const answer = m[2].replace(/\s+/g, " ").trim();
    if (question && answer) out.push({ question, answer });
  }
  return out;
}

function inferPlatform(blob) {
  const s = blob.toLowerCase();
  if (s.includes("pinterest") || /\bpin\b/.test(s)) return "Pinterest";
  if (s.includes("facebook") || /\bfb\b/.test(s)) return "Facebook";
  if (
    s.includes("instagram") ||
    /\big\b/.test(s) ||
    s.includes("insta") ||
    s.includes(" ig") ||
    s.startsWith("ig ")
  ) {
    return "Instagram";
  }
  return "";
}

function inferContentType(blob) {
  const s = blob.toLowerCase();
  if (s.includes("igtv")) return "IGTV";
  if (s.includes("story")) return "Story";
  if (s.includes("reel")) return "Reel";
  if (s.includes("highlight")) return "Highlight";
  if (s.includes("photo") || s.includes("image") || s.includes("jpg") || s.includes("picture"))
    return "Photo";
  if (s.includes("pin") && !s.includes("pinterest")) return "Pin";
  if (s.includes("video") || s.includes("mp4")) return "Video";
  return "Video";
}

function transformRow(row) {
  const slug = String(pick(row, ["slug", "url_slug", "page_slug"]) ?? "").trim();
  const primaryKeyword = String(pick(row, ["primary_keyword", "primary"]) ?? "").trim();
  const secondaryKeywords = String(pick(row, ["secondary_keywords", "secondary"]) ?? "").trim();

  let platform = String(pick(row, ["platform"]) ?? "").trim();
  let content_type = String(
    pick(row, ["content_type", "contenttype", "content", "type"]) ?? ""
  ).trim();

  const h1_title = String(
    pick(row, ["h1_title", "h1_heading", "h1", "heading"]) ?? ""
  ).trim();
  const meta_title = String(pick(row, ["meta_title", "metatitle", "seo_title"]) ?? "").trim();
  const meta_desc = String(pick(row, ["meta_desc", "meta_description", "description"]) ?? "").trim();
  const intro_text = String(pick(row, ["intro_text", "intro", "intro_copy"]) ?? "").trim();
  const how_to_use = String(pick(row, ["how_to_use", "howtouse", "how_to"]) ?? "").trim();
  const faqsRaw = pick(row, ["faqs", "faq", "faq_s"]);

  const blob = `${primaryKeyword} ${secondaryKeywords} ${slug} ${h1_title} ${meta_title}`;
  if (!platform) platform = inferPlatform(blob) || "Instagram";
  if (!content_type) content_type = inferContentType(blob);

  const faqs = parseFaqs(faqsRaw);
  const first = faqs[0];

  return {
    slug,
    primary_keyword: primaryKeyword,
    secondary_keywords: secondaryKeywords,
    platform,
    content_type,
    h1_title: h1_title || meta_title || slug.replace(/-/g, " "),
    meta_title,
    meta_desc,
    intro_text,
    how_to_use,
    faqs,
    ...(first ? { faq_q: first.question, faq_a: first.answer } : { faq_q: "", faq_a: "" }),
  };
}

if (!fs.existsSync(inputFile)) {
  console.error(`Input file not found: ${inputFile}`);
  console.error("Pass a path: node scripts/build-pseo-data.mjs <path-to.xlsx>");
  process.exit(1);
}

const workbook = XLSX.readFile(inputFile);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const rows = XLSX.utils.sheet_to_json(sheet, { defval: "" });

const data = rows.map(transformRow).filter((item) => item.slug.length > 0);

fs.writeFileSync(outFile, `${JSON.stringify(data, null, 2)}\n`, "utf8");
console.log(`Sheet: ${sheetName}`);
console.log(`Rows (with slug): ${data.length}`);
console.log(`Wrote: ${outFile}`);
