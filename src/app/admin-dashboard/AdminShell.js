"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "./AdminShell.module.css";

const NAV_ITEMS = [
  {
    href: "/admin-dashboard/blogs-management",
    label: "Blogs",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
        <path
          d="M4 5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M14 3v6h6" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function AdminShell({ children }) {
  const pathname = usePathname() || "";
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const isLogin = pathname === "/admin-dashboard/login";

  // Login screen renders without the shell.
  if (isLogin) {
    return <div className={styles.bareRoot}>{children}</div>;
  }

  async function handleLogout() {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } catch {
      // ignore network errors, cookie may already be gone
    }
    router.replace("/admin-dashboard/login");
    router.refresh();
  }

  return (
    <div className={styles.root}>
      <aside className={`${styles.sidebar} ${open ? styles.sidebarOpen : ""}`}>
        <div className={styles.brand}>
          <Link href="/admin-dashboard/blogs-management" className={styles.brandLink}>
            <span className={styles.brandMark}>FV</span>
            <span className={styles.brandText}>FastVidl Admin</span>
          </Link>
        </div>

        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navItem} ${active ? styles.navItemActive : ""}`}
                onClick={() => setOpen(false)}
              >
                <span className={styles.navIcon}>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className={styles.sidebarFoot}>
          <Link href="/" className={styles.foreignLink} target="_blank" rel="noopener">
            View site ↗
          </Link>
          <button type="button" className={styles.logoutBtn} onClick={handleLogout}>
            Log out
          </button>
        </div>
      </aside>

      <div className={styles.main}>
        <header className={styles.topbar}>
          <button
            type="button"
            className={styles.menuBtn}
            aria-label="Toggle sidebar"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
          <div className={styles.topbarTitle}>
            {pathname.includes("/blogs-management/new") && "New Blog Post"}
            {pathname.match(/\/blogs-management\/edit\//) && "Edit Blog Post"}
            {pathname.endsWith("/blogs-management") && "Blogs Management"}
            {pathname === "/admin-dashboard" && "Dashboard"}
          </div>
        </header>

        <main className={styles.content}>{children}</main>
      </div>

      {open && <div className={styles.backdrop} onClick={() => setOpen(false)} />}
    </div>
  );
}
