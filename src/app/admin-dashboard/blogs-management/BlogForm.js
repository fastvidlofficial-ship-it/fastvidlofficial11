"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import TinyMCEEditor from "@/components/admin/TinyMCEEditor";
import { slugify } from "@/lib/slugify";
import styles from "./BlogForm.module.css";

const emptyFaq = () => ({ question: "", answer: "" });

export default function BlogForm({ mode, blogId }) {
  const router = useRouter();
  const isEdit = mode === "edit" && blogId;

  const [loading, setLoading] = useState(!!isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [slugTouched, setSlugTouched] = useState(false);
  const [longDescription, setLongDescription] = useState("");
  const [image, setImage] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [faqs, setFaqs] = useState([emptyFaq()]);
  const [published, setPublished] = useState(true);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (!isEdit) return;

    let cancelled = false;
    (async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`/api/admin/blogs/${blogId}`, { cache: "no-store" });
        const data = await res.json();
        if (!res.ok || !data.ok) throw new Error(data.error || "Failed to load blog");
        if (cancelled) return;
        const b = data.item;
        setMetaTitle(b.metaTitle || "");
        setMetaDescription(b.metaDescription || "");
        setMetaKeywords(b.metaKeywords || "");
        setTitle(b.title || "");
        setSlug(b.slug || "");
        setSlugTouched(true);
        setLongDescription(b.longDescription || "");
        setImage(b.image || "");
        setImageAlt(b.imageAlt || "");
        setFaqs(Array.isArray(b.faqs) && b.faqs.length ? b.faqs : [emptyFaq()]);
        setPublished(b.published !== false);
      } catch (e) {
        if (!cancelled) setError(e.message || "Failed to load blog");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [isEdit, blogId]);

  const previewSlug = useMemo(() => {
    if (slug.trim()) return slugify(slug);
    return slugify(title);
  }, [slug, title]);

  useEffect(() => {
    if (isEdit || slugTouched) return;
    setSlug(slugify(title));
  }, [title, isEdit, slugTouched]);

  async function handleImageUpload(e) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Upload failed");
      setImage(data.url);
    } catch (err) {
      setError(err.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  function addFaq() {
    setFaqs((prev) => [...prev, emptyFaq()]);
  }

  function removeFaq(idx) {
    setFaqs((prev) => prev.filter((_, i) => i !== idx));
  }

  function updateFaq(idx, key, val) {
    setFaqs((prev) =>
      prev.map((row, i) => (i === idx ? { ...row, [key]: val } : row))
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (saving) return;
    setSaving(true);
    setError("");

    const payload = {
      metaTitle,
      metaDescription,
      metaKeywords,
      title,
      slug: slug.trim() ? slugify(slug) : undefined,
      longDescription,
      image,
      imageAlt,
      faqs,
      published,
    };

    try {
      const url = isEdit ? `/api/admin/blogs/${blogId}` : "/api/admin/blogs";
      const method = isEdit ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Save failed");
      router.push("/admin-dashboard/blogs-management");
      router.refresh();
    } catch (err) {
      setError(err.message || "Save failed");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <div className={styles.loading}>Loading editor…</div>;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.topRow}>
        <Link href="/admin-dashboard/blogs-management" className={styles.backLink}>
          ← Back to list
        </Link>
        <label className={styles.publishRow}>
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
          />
          <span>Published</span>
        </label>
      </div>

      {error && <div className={styles.errorBanner}>{error}</div>}

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>SEO</h2>
        <div className={styles.grid2}>
          <label className={styles.field}>
            <span>Meta title</span>
            <input
              className={styles.input}
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              placeholder="Shown in Google results"
            />
          </label>
          <label className={styles.field}>
            <span>Meta keywords</span>
            <input
              className={styles.input}
              value={metaKeywords}
              onChange={(e) => setMetaKeywords(e.target.value)}
              placeholder="Comma-separated keywords"
            />
          </label>
        </div>
        <label className={styles.field}>
          <span>Meta description</span>
          <textarea
            className={styles.textarea}
            rows={3}
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            placeholder="Short summary for search engines"
          />
        </label>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Article</h2>
        <div className={styles.grid2}>
          <label className={styles.field}>
            <span>Title *</span>
            <input
              className={styles.input}
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Blog post headline"
            />
          </label>
          <label className={styles.field}>
            <span>URL slug</span>
            <input
              className={styles.input}
              value={slug}
              onChange={(e) => {
                setSlugTouched(true);
                setSlug(e.target.value);
              }}
              placeholder="auto-generated from title"
            />
            <span className={styles.hint}>Preview: /blogs/{previewSlug || "…"}</span>
          </label>
        </div>

        <label className={styles.field}>
          <span>Long description *</span>
          <div className={styles.editorWrap}>
            <TinyMCEEditor
              value={longDescription}
              onChange={setLongDescription}
              disabled={saving}
            />
          </div>
        </label>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Featured image</h2>
        <div className={styles.grid2}>
          <label className={styles.field}>
            <span>Image URL</span>
            <input
              className={styles.input}
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="/uploads/blogs/… or full URL"
            />
          </label>
          <label className={styles.field}>
            <span>Upload file</span>
            <input
              type="file"
              accept="image/*"
              className={styles.fileInput}
              disabled={uploading || saving}
              onChange={handleImageUpload}
            />
            {uploading && <span className={styles.hint}>Uploading…</span>}
          </label>
        </div>
        <label className={styles.field}>
          <span>Image alt text</span>
          <input
            className={styles.input}
            value={imageAlt}
            onChange={(e) => setImageAlt(e.target.value)}
            placeholder="Describe the image for accessibility"
          />
        </label>
        {image && (
          <div className={styles.imgPreview}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt={imageAlt || title || "Preview"} />
          </div>
        )}
      </section>

      <section className={styles.section}>
        <div className={styles.faqHeader}>
          <h2 className={styles.sectionTitle}>FAQ</h2>
          <button type="button" className={styles.addFaqBtn} onClick={addFaq}>
            + Add FAQ
          </button>
        </div>
        <div className={styles.faqList}>
          {faqs.map((row, idx) => (
            <div key={idx} className={styles.faqCard}>
              <div className={styles.faqCardHead}>
                <span className={styles.faqIndex}>#{idx + 1}</span>
                <button
                  type="button"
                  className={styles.removeFaqBtn}
                  onClick={() => removeFaq(idx)}
                  disabled={faqs.length <= 1}
                >
                  Remove
                </button>
              </div>
              <label className={styles.field}>
                <span>Question</span>
                <input
                  className={styles.input}
                  value={row.question}
                  onChange={(e) => updateFaq(idx, "question", e.target.value)}
                  placeholder="FAQ question"
                />
              </label>
              <label className={styles.field}>
                <span>Answer</span>
                <textarea
                  className={styles.textarea}
                  rows={3}
                  value={row.answer}
                  onChange={(e) => updateFaq(idx, "answer", e.target.value)}
                  placeholder="FAQ answer"
                />
              </label>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.actions}>
        <Link href="/admin-dashboard/blogs-management" className={styles.cancelBtn}>
          Cancel
        </Link>
        <button type="submit" className={styles.saveBtn} disabled={saving || !title}>
          {saving ? "Saving…" : isEdit ? "Update blog" : "Create blog"}
        </button>
      </div>
    </form>
  );
}
