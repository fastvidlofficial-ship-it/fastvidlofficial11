"use client";

import { useMemo } from "react";
import { Editor } from "@tinymce/tinymce-react";

const TINYMCE_VERSION = "7.6.1";

/** Must match `MAX_BYTES` in `src/lib/upload.js` (Vercel Blob limit). */
const MAX_INLINE_IMAGE_BYTES = Math.floor(4.5 * 1024 * 1024);

function createEditorInit() {
  return {
    height: 480,
    menubar: false,
    branding: false,
    promotion: false,
    skin_url: `https://cdn.jsdelivr.net/npm/tinymce@${TINYMCE_VERSION}/skins/ui/oxide`,
    content_css: `https://cdn.jsdelivr.net/npm/tinymce@${TINYMCE_VERSION}/skins/content/default/content.min.css`,
    plugins: [
      "advlist",
      "autolink",
      "lists",
      "link",
      "image",
      "charmap",
      "anchor",
      "searchreplace",
      "visualblocks",
      "code",
      "fullscreen",
      "insertdatetime",
      "media",
      "table",
      "help",
      "wordcount",
    ].join(" "),
    toolbar:
      "undo redo | blocks | bold italic underline strikethrough | " +
      "alignleft aligncenter alignright alignjustify | " +
      "bullist numlist outdent indent | link image table | " +
      "removeformat | code fullscreen | help",
    content_style:
      "body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size:16px; line-height:1.65; color:#333; }",
    relative_urls: false,
    convert_urls: true,
    /** Upload pasted/dropped images instead of embedding base64 (Vercel strips base64 on save). */
    automatic_uploads: true,
    paste_data_images: true,
    images_upload_handler(blobInfo, progress) {
      return new Promise((resolve, reject) => {
        const blob = blobInfo.blob();
        const filename =
          typeof blobInfo.filename === "function"
            ? blobInfo.filename()
            : blobInfo.filename || "image.png";

        if (!blob || blob.size === 0) {
          reject(new Error("Empty image"));
          return;
        }
        if (blob.size > MAX_INLINE_IMAGE_BYTES) {
          reject(new Error("Image too large (max 4.5 MB)"));
          return;
        }

        try {
          progress(0);
        } catch {
          /* optional */
        }

        const formData = new FormData();
        formData.append("file", blob, filename);

        fetch("/api/admin/upload", {
          method: "POST",
          body: formData,
          credentials: "same-origin",
        })
          .then(async (res) => {
            const data = await res.json().catch(() => ({}));
            if (!res.ok || !data.ok) {
              throw new Error(data.error || "Upload failed");
            }
            if (!data.url) {
              throw new Error("Upload did not return a URL");
            }
            try {
              progress(100);
            } catch {
              /* optional */
            }
            return data.url;
          })
          .then(resolve)
          .catch((err) => {
            const msg = err?.message || String(err);
            reject(msg);
          });
      });
    },
  };
}

/**
 * Rich-text editor wrapper around TinyMCE.
 * Loads TinyMCE from jsDelivr so we don't have to copy vendor files into /public.
 */
export default function TinyMCEEditor({ value, onChange, disabled }) {
  const apiKey = process.env.NEXT_PUBLIC_TINYMCE_API_KEY;

  const init = useMemo(() => createEditorInit(), []);

  return (
    <Editor
      disabled={disabled}
      value={value}
      onEditorChange={(html) => onChange(html)}
      apiKey={apiKey && apiKey !== "no-api-key" ? apiKey : undefined}
      tinymceScriptSrc={
        apiKey && apiKey !== "no-api-key"
          ? undefined
          : `https://cdn.jsdelivr.net/npm/tinymce@${TINYMCE_VERSION}/tinymce.min.js`
      }
      init={init}
    />
  );
}
