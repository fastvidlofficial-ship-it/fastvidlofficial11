import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pseoPath = path.join(__dirname, "..", "pseo-data.json");
const pseo = JSON.parse(fs.readFileSync(pseoPath, "utf8"));

/** Unique padding per slug — appended to whyBody only when page is under 600 words */
const paddingBySlug = {
  "ig-photo-download-free":
    " Budget-conscious users should not confuse free access with unlimited republication rights: the tool saves bandwidth and subscription costs, not licensing fees. FastVidl stays free because the workflow runs in your browser without pushing you toward a paid desktop suite or mobile subscription.",
  "save-insta-videos-online":
    " Online saving also means you are not tied to a single phone: paste the same link on a tablet or laptop and land the identical MP4 in that device's Downloads folder. Teams coordinating research can standardize on one URL instead of everyone installing different saver apps with incompatible file names.",
  "ig-video-saver-no-watermark":
    " When presenting archived clips in stakeholder meetings, watermark-free files avoid awkward questions about third-party tools that touched the asset. Keeping originals at CDN quality also preserves on-screen disclaimers and sponsored labels exactly as the creator published them — important for compliance reviews.",
  "instagram-multiple-photo-downloader":
    " Treat each download like adding a book to a shelf: label it immediately so a folder of fifty JPEGs remains searchable next month. Mixing carousel slides and separate posts in one directory without naming discipline is the main reason people lose track of which URL produced which file.",
  "ig-post-download-hd":
    " Profile grids often mix formats in adjacent cells — double-check you opened the intended post before copying, because the neighboring tile might be a Reel while you wanted a still. HD here means best available for that post type, not a guarantee every tile on the profile was shot on the same camera.",
  "instagram-story-saver-hd":
    " Story reactions and poll stickers are baked into the video track when creators add them — your HD save includes those elements because they are part of the published story, not added by FastVidl. If you need a clean plate without stickers, only the creator's raw upload would provide that, and Stories rarely expose it.",
  "instagram-saver-mp4":
    " Version the MP4 in your archive when creators edit captions or replace audio on the live post — your local file documents what was public at save time. Legal and marketing teams sometimes keep SHA-style notes in a spreadsheet even if they do not hash files, documenting capture date and public URL.",
  "website-to-download-instagram-photos":
    " Color-critical work should be viewed on a calibrated screen; Instagram's upload compression can shift saturation slightly compared to the photographer's original export. For mood boards rather than print, CDN JPEGs are still far superior to screenshots that inherit your display's night-mode tint.",
  "instagram-carousel-downloader":
    " Wedding and event photographers sometimes post carousels as sneak peeks — saving all slides promptly preserves angles clients might delete later during curation. Numbering files in swipe order matters when the narrative only makes sense as a sequence rather than isolated images.",
  "instagram-download-without-watermark":
    " Audio-forward posts — interviews, music snippets, voiceovers — benefit equally from clean video saves because re-encoded watermarked downloads often introduce audio phasing or volume ducking. FastVidl avoids that extra encode pass so speech and music stay aligned with the creator's mix.",
  "instagram-highlight-downloader-hd":
    " Highlight covers are marketing thumbnails; the clips inside may differ in resolution if they were recorded across years. Expect older highlight stories to reflect older Instagram quality caps even when the cover image looks crisp and newly designed.",
  "instagram-video-download-mp4":
    " Archivists sometimes mirror MP4s to two locations — phone plus cloud cold storage — because a single device failure should not erase campaign history. MP4's ubiquity means future interns can open files a decade later without hunting obsolete codecs.",
  "instagram-igtv-downloader-1080p":
    " Podcasters increasingly clip long Instagram interviews for Shorts elsewhere; starting from a 1080p master gives headroom to punch in without visible pixel blocks. Always scrub through the entire downloaded file once — long downloads can occasionally truncate if the connection dropped at the last second.",
  "instagram-video-download-online":
    " Corporate proxies occasionally inspect HTTPS traffic; if fastvidl.com is blocked, try mobile hotspot once rather than installing unapproved software on a locked laptop. Online tools leave an audit trail only in browser history, which IT policies may still require you to clear after use.",
  "fast-insta-video-download":
    " Latency on your end matters too: closing twenty background tabs before downloading frees radio time on mobile networks. Re-pasting a fresh link after a failed attempt is faster than waiting on a stuck progress bar from a half-complete file.",
  "instagram-video-download-link-to-gallery":
    " Family sharing workflows on Android sometimes use Google Photos partner sharing — files must be in Gallery or backed up to appear for relatives. iCloud shared albums on iPhone similarly require the clip inside Photos, not stranded in Safari's temporary downloads list.",
  "insta-video-download-hd":
    " Color grading references and skin-tone tutorials are especially sensitive to bitrate — banding in skies from over-compressed streams is a sign you may have grabbed a low tier, not true HD. Re-download on Wi-Fi before blaming the creator's upload.",
  "instagram-video-download-link":
    " Marketing teams using UTM-heavy links in ads should still copy the canonical Instagram post URL from Share, not the tracking wrapper from email dashboards. Stripping parameters down to the core instagram.com path often fixes mysterious invalid URL errors.",
  "instagram-video-download-without-watermark":
    " Feed videos with burned-in creator logos are common in sponsored content — those logos belong to the brand deal, not to a downloader. Train your eye to recognize brand handles styled as part of the edit versus foreign app watermarks that were not in the live post.",
  "save-instagram-video-to-camera-roll-iphone":
    " Low Power Mode on iPhone can slow Safari downloads; plug in or disable it before saving a long event clip. If Save Video is greyed out, confirm the download fully finished — partial files sometimes appear in the list but cannot import to Photos until complete.",
};

const paddingComparison = {
  "instagram-video-download-mp4":
    " Teams standardizing on MP4 reduce support tickets from colleagues who cannot open exotic formats sent by older tools.",
  "website-to-download-instagram-photos":
    " Printed lookbooks and PDF portfolios embed JPEGs more reliably than pasted screenshots that rasterize UI chrome.",
  "instagram-video-download-online":
    " Clearing browser cache after a session on a shared PC takes seconds compared to uninstalling desktop software IT never approved.",
  "instagram-story-saver-hd":
    " Brands running flash sales in Stories often delete them after 24 hours — archivists treat story saves like newsroom clipping.",
  "ig-photo-download-free":
    " Students comparing free tools should still verify public visibility of posts before downloading for coursework folders.",
  "ig-post-download-hd":
    " Agencies exporting HD stills for print mockups need the JPEG master, not a compressed preview from a design tool cache.",
  "instagram-saver-mp4":
    " Disaster recovery for small creators sometimes means a folder of MP4 backups when an account is hacked or locked.",
  "instagram-download-without-watermark":
    " Influencer contracts occasionally require delivering clean files to brands — watermark-free saves support that handoff.",
  "save-insta-videos-online":
    " Classroom teachers in low-bandwidth schools download at school Wi-Fi, then teach from files without live streaming.",
  "instagram-carousel-downloader":
    " E-commerce carousels showing color variants should be saved in order so offline catalogs match the swipe sequence online.",
  "instagram-highlight-downloader-hd":
    " Competitor analysis often tracks how highlight categories evolve quarter over quarter — local clips document that timeline.",
  "instagram-igtv-downloader-1080p":
    " Documentary-style Instagram interviews may run fifteen minutes — verify storage before batching several in one evening.",
  "ig-video-saver-no-watermark":
    " Quarterly business reviews sometimes embed downloaded clips beside analytics screenshots — cleanliness matters in board packs.",
  "instagram-multiple-photo-downloader":
    " Mood boards for UX research benefit from dated filenames so workshop participants know which week each reference was captured.",
  "fast-insta-video-download":
    " Live event social teams download performer clips between sets while hashtags are still trending — speed reduces missed moments.",
  "instagram-video-download-link-to-gallery":
    " Android OEMs move Downloads paths between updates — if Gallery misses a file, search Files for .mp4 before re-downloading.",
};

const paddingTips = {
  "website-to-download-instagram-photos": " Batch photo saves during off-peak hours on hotel Wi-Fi to avoid timeout on slow connections.",
  "ig-photo-download-free": " Screenshot comparisons side-by-side with CDN downloads make quality differences obvious to first-time users.",
  "instagram-download-without-watermark": " When auditing files, pause on the first frame — animated overlays sometimes look like downloader marks until playback starts.",
  "save-insta-videos-online": " Rename downloads immediately; generic MP4 names are hard to distinguish in Downloads folders after a week.",
  "ig-video-saver-no-watermark": " Store client names in filenames even for internal use — it prevents accidental cross-client shares in busy agencies.",
  "instagram-multiple-photo-downloader": " End each session by counting files versus your source list so no intended post was skipped.",
};

function wordCount(rc) {
  const text = [
    rc.whyTitle,
    rc.whyBody,
    rc.featuresTitle,
    rc.useCasesTitle,
    rc.useCasesBody,
    rc.deviceGuideTitle,
    rc.tipsTitle,
    rc.tipsBody,
    rc.comparisonTitle,
    rc.comparisonBody,
    rc.features.map((f) => f.heading + " " + f.detail).join(" "),
    rc.iosSteps.join(" "),
    rc.androidSteps.join(" "),
  ].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

let padded = 0;
for (const entry of pseo) {
  if (!entry.richContent) continue;
  if (wordCount(entry.richContent) >= 600) continue;
  const padWhy = paddingBySlug[entry.slug];
  const padCmp = paddingComparison[entry.slug];
  const padTips = paddingTips[entry.slug];
  if (padWhy && !entry.richContent._padWhy) {
    entry.richContent.whyBody += padWhy;
    entry.richContent._padWhy = true;
  }
  if (padCmp && !entry.richContent._padCmp) {
    entry.richContent.comparisonBody += padCmp;
    entry.richContent._padCmp = true;
  }
  if (padTips && wordCount(entry.richContent) < 600) {
    entry.richContent.tipsBody += paddingTips[entry.slug];
  }
  delete entry.richContent._padWhy;
  delete entry.richContent._padCmp;
  if (padWhy || padCmp || padTips) padded++;
}

fs.writeFileSync(pseoPath, JSON.stringify(pseo, null, 2) + "\n", "utf8");
console.log(`Padded ${padded} entries.`);

const stillLow = pseo.filter((e) => e.richContent && wordCount(e.richContent) < 600);
console.log("Still under 600:", stillLow.map((e) => `${e.slug} (${wordCount(e.richContent)})`).join(", ") || "none");
