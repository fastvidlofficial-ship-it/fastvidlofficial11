"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import styles from "./BlogsPage.module.css";

export default function BlogSearch({ initialQuery = "" }) {
  const router = useRouter();
  const [q, setQ] = useState(initialQuery);
  const [pending, startTransition] = useTransition();

  function submit(e) {
    e.preventDefault();
    const trimmed = q.trim();
    const url = trimmed ? `/blogs?q=${encodeURIComponent(trimmed)}` : "/blogs";
    startTransition(() => router.push(url));
  }

  return (
    <form className={styles.searchForm} onSubmit={submit} role="search">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M20 20l-3.5-3.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
      <input
        type="search"
        className={styles.searchInput}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search articles…"
        aria-label="Search blog articles"
      />
      <button type="submit" className={styles.searchBtn} disabled={pending}>
        {pending ? "…" : "Search"}
      </button>
    </form>
  );
}
