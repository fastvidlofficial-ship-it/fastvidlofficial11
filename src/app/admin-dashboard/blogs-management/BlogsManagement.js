"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./BlogsManagement.module.css";

const ROWS_OPTIONS = [10, 25, 50, 100];
const DEFAULT_LIMIT = 10;

/**
 * Blogs management table.
 *
 * Pagination rules (per spec):
 *   - Default: 10 rows per page, paginated with prev/next.
 *   - When a search query is active: pagination disabled, all matches shown.
 *   - When rows-per-page is 25 / 50 / 100 (and no search): first N rows only,
 *     no pagination controls.
 *   - Selecting 10 again restores normal pagination.
 */
export default function BlogsManagement() {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_LIMIT);
  const [page, setPage] = useState(1);

  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [deleteFor, setDeleteFor] = useState(null); // { id, title }
  const [deleting, setDeleting] = useState(false);

  const reqRef = useRef(0);

  // Debounce search input.
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query.trim()), 300);
    return () => clearTimeout(t);
  }, [query]);

  // Reset to first page whenever search/rows change.
  useEffect(() => {
    setPage(1);
  }, [debouncedQuery, rowsPerPage]);

  const isPaginated = !debouncedQuery && rowsPerPage === DEFAULT_LIMIT;

  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    setError("");
    const reqId = ++reqRef.current;

    const params = new URLSearchParams();
    if (debouncedQuery) {
      params.set("q", debouncedQuery);
      params.set("all", "1");
    } else if (isPaginated) {
      params.set("page", String(page));
      params.set("limit", String(rowsPerPage));
    } else {
      params.set("page", "1");
      params.set("limit", String(rowsPerPage));
    }

    try {
      const res = await fetch(`/api/admin/blogs?${params.toString()}`, {
        cache: "no-store",
      });
      const data = await res.json();
      if (reqRef.current !== reqId) return; // stale response

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to load blogs");
      }

      const list = data.items || [];

      setItems(list);
      setTotal(data.total || 0);
      setPages(data.pages || 1);
    } catch (err) {
      if (reqRef.current !== reqId) return;
      setError(err.message || "Failed to load blogs");
      setItems([]);
      setTotal(0);
      setPages(1);
    } finally {
      if (reqRef.current === reqId) setLoading(false);
    }
  }, [debouncedQuery, isPaginated, page, rowsPerPage]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const showing = useMemo(() => {
    if (!items.length) return "0 of 0";
    if (debouncedQuery) return `${items.length} match${items.length === 1 ? "" : "es"}`;
    if (!isPaginated) return `${items.length} of ${total} (top ${rowsPerPage})`;
    const start = (page - 1) * rowsPerPage + 1;
    const end = start + items.length - 1;
    return `${start}, ${end} of ${total}`;
  }, [debouncedQuery, items, isPaginated, page, rowsPerPage, total]);

  async function confirmDelete() {
    if (!deleteFor) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/admin/blogs/${deleteFor.id}`, {
        method: "DELETE",
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Delete failed");
      setDeleteFor(null);
      fetchBlogs();
    } catch (err) {
      setError(err.message || "Delete failed");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div className={styles.wrap}>
      {/* --- Toolbar ---------------------------------------------------- */}
      <div className={styles.toolbar}>
        <div className={styles.searchWrap}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden>
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
            className={styles.search}
            placeholder="Search by title, slug, keywords…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className={styles.toolbarRight}>
          <label className={styles.rowsLabel}>
            Rows
            <select
              className={styles.rowsSelect}
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
            >
              {ROWS_OPTIONS.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>

          <Link href="/admin-dashboard/blogs-management/new" className={styles.newBtn}>
            <span aria-hidden>+</span> New Blog
          </Link>
        </div>
      </div>

      {/* --- Table ------------------------------------------------------ */}
      <div className={styles.tableCard}>
        <div className={styles.tableScroll}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thumbCol}>Image</th>
                <th>Title</th>
                <th>Slug</th>
                <th className={styles.dateCol}>Created</th>
                <th className={styles.statusCol}>Status</th>
                <th className={styles.actionCol}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={6} className={styles.empty}>
                    Loading…
                  </td>
                </tr>
              )}

              {!loading && error && (
                <tr>
                  <td colSpan={6} className={styles.empty}>
                    <span className={styles.errorText}>{error}</span>
                  </td>
                </tr>
              )}

              {!loading && !error && items.length === 0 && (
                <tr>
                  <td colSpan={6} className={styles.empty}>
                    <div className={styles.emptyState}>
                      <div className={styles.emptyIcon} aria-hidden>
                        <svg
                          viewBox="0 0 64 64"
                          width="56"
                          height="56"
                          fill="none"
                        >
                          <rect
                            x="8"
                            y="10"
                            width="42"
                            height="48"
                            rx="6"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          />
                          <path
                            d="M18 22h22M18 30h22M18 38h14"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                          <circle
                            cx="48"
                            cy="48"
                            r="11"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            fill="var(--card-bg)"
                          />
                          <path
                            d="M44 48l3 3 5-6"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <h3 className={styles.emptyTitle}>No blogs found</h3>
                      <p className={styles.emptySubtitle}>
                        {debouncedQuery
                          ? `No blogs match "${debouncedQuery}". Try a different search term.`
                          : "You haven't created any blog posts yet. Get started by adding your first one."}
                      </p>
                      {!debouncedQuery && (
                        <Link
                          href="/admin-dashboard/blogs-management/new"
                          className={styles.emptyCta}
                        >
                          + Create your first blog
                        </Link>
                      )}
                    </div>
                  </td>
                </tr>
              )}

              {!loading &&
                !error &&
                items.map((b) => (
                  <tr key={b._id}>
                    <td>
                      {b.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={b.image}
                          alt={b.imageAlt || b.title}
                          className={styles.thumb}
                        />
                      ) : (
                        <div className={styles.thumbPlaceholder}>, </div>
                      )}
                    </td>
                    <td>
                      <div className={styles.titleCell}>
                        <span className={styles.titleText}>{b.title}</span>
                        {b.metaTitle && (
                          <span className={styles.metaText}>{b.metaTitle}</span>
                        )}
                      </div>
                    </td>
                    <td className={styles.slugCell}>{b.slug}</td>
                    <td className={styles.dateCol}>
                      {b.createdAt
                        ? new Date(b.createdAt).toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })
                        : ", "}
                    </td>
                    <td>
                      <span
                        className={`${styles.badge} ${
                          b.published ? styles.badgeOn : styles.badgeOff
                        }`}
                      >
                        {b.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td>
                      <div className={styles.rowActions}>
                        <a
                          href={`/blogs/${b.slug}`}
                          target="_blank"
                          rel="noopener"
                          className={styles.actionLink}
                          title="View on site"
                        >
                          View
                        </a>
                        <button
                          type="button"
                          onClick={() =>
                            router.push(
                              `/admin-dashboard/blogs-management/edit/${b._id}`
                            )
                          }
                          className={styles.actionEdit}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeleteFor({ id: b._id, title: b.title })}
                          className={styles.actionDelete}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* --- Footer / pagination ------------------------------------- */}
        <div className={styles.tableFoot}>
          <span className={styles.showing}>Showing {showing}</span>

          {isPaginated && pages > 1 && (
            <div className={styles.pager}>
              <button
                type="button"
                className={styles.pagerBtn}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
              >
                ← Prev
              </button>
              <span className={styles.pagerInfo}>
                Page <strong>{page}</strong> of {pages}
              </span>
              <button
                type="button"
                className={styles.pagerBtn}
                onClick={() => setPage((p) => Math.min(pages, p + 1))}
                disabled={page >= pages}
              >
                Next →
              </button>
            </div>
          )}

          {!isPaginated && (
            <span className={styles.pagerHint}>
              {debouncedQuery
                ? "Showing all search matches"
                : `Showing newest ${rowsPerPage} (pagination off)`}
            </span>
          )}
        </div>
      </div>

      {/* --- Delete confirm modal -------------------------------------- */}
      {deleteFor && (
        <div
          className={styles.modalBackdrop}
          role="dialog"
          aria-modal="true"
          onClick={() => !deleting && setDeleteFor(null)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3 className={styles.modalTitle}>Delete this blog?</h3>
            <p className={styles.modalBody}>
              <strong>{deleteFor.title}</strong> will be permanently removed.
              This cannot be undone.
            </p>
            <div className={styles.modalActions}>
              <button
                type="button"
                className={styles.btnGhost}
                onClick={() => setDeleteFor(null)}
                disabled={deleting}
              >
                Cancel
              </button>
              <button
                type="button"
                className={styles.btnDanger}
                onClick={confirmDelete}
                disabled={deleting}
              >
                {deleting ? "Deleting…" : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
