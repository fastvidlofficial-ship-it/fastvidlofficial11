"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./Login.module.css";

export default function LoginForm() {
  const router = useRouter();
  const search = useSearchParams();
  const next = search.get("from") || "/admin-dashboard/blogs-management";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (submitting) return;
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Login failed");
      }
      router.replace(next.startsWith("/admin-dashboard") ? next : "/admin-dashboard/blogs-management");
      router.refresh();
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <div className={styles.logoMark}>FV</div>
        <h1 className={styles.title}>Admin Sign in</h1>
        <p className={styles.subtitle}>
          Use your administrator credentials to access the blog management
          dashboard.
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <label className={styles.field}>
          <span className={styles.label}>Email</span>
          <input
            type="email"
            autoComplete="username"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@fastvidl.com"
            className={styles.input}
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Password</span>
          <div className={styles.pwWrap}>
            <input
              type={showPw ? "text" : "password"}
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              className={styles.input}
            />
            <button
              type="button"
              className={styles.pwToggle}
              onClick={() => setShowPw((v) => !v)}
              aria-label={showPw ? "Hide password" : "Show password"}
            >
              {showPw ? "Hide" : "Show"}
            </button>
          </div>
        </label>

        {error && <div className={styles.error}>{error}</div>}

        <button
          type="submit"
          className={styles.submit}
          disabled={submitting || !email || !password}
        >
          {submitting ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}
