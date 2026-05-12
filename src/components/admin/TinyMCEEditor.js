"use client";

import { Editor } from "@tinymce/tinymce-react";

const TINYMCE_VERSION = "7.6.1";

/**
 * Rich-text editor wrapper around TinyMCE.
 * Loads TinyMCE from jsDelivr so we don't have to copy vendor files into /public.
 */
export default function TinyMCEEditor({ value, onChange, disabled }) {
  const apiKey = process.env.NEXT_PUBLIC_TINYMCE_API_KEY;

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
      init={{
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
      }}
    />
  );
}
