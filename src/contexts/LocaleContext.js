"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import en from "@/messages/locale/en/site.json";
import ar from "@/messages/locale/ar/site.json";
import arHomeArticle from "@/messages/locale/ar/homeArticle.json";
import arToolStory from "@/messages/locale/ar/toolStory.json";
import arToolPhoto from "@/messages/locale/ar/toolPhoto.json";
import arToolFacebook from "@/messages/locale/ar/toolFacebook.json";
import arToolPinterest from "@/messages/locale/ar/toolPinterest.json";
import arAboutContactFaqs from "@/messages/locale/ar/aboutContactFaqs.json";
import arLegalStaticHtml from "@/messages/locale/ar/legalStaticHtml.json";

const STORAGE_KEY = "fastvidl-locale";

const CATALOGS = {
  en,
  ar: {
    ...ar,
    homeArticle: arHomeArticle,
    toolReel: arHomeArticle,
    toolStory: arToolStory,
    toolPhoto: arToolPhoto,
    toolFacebook: arToolFacebook,
    toolPinterest: arToolPinterest,
    staticPages: { ...arAboutContactFaqs, ...arLegalStaticHtml },
  },
};

const LocaleContext = createContext(null);

function getByPath(obj, path) {
  if (!obj || !path) return undefined;
  const parts = path.split(".");
  let cur = obj;
  for (const p of parts) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = cur[p];
  }
  return cur;
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState("en");

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ar" || stored === "en") {
      setLocaleState(stored);
    }
  }, []);

  useLayoutEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.lang = locale === "ar" ? "ar" : "en";
    root.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const setLocale = useCallback((next) => {
    const v = next === "ar" ? "ar" : "en";
    setLocaleState(v);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, v);
    }
  }, []);

  const catalog = CATALOGS[locale] || CATALOGS.en;

  const t = useCallback(
    (path, fallback) => {
      const v = getByPath(catalog, path);
      if (v !== undefined && v !== null && v !== "") return v;
      if (fallback !== undefined) return fallback;
      const enVal = getByPath(CATALOGS.en, path);
      if (enVal !== undefined && enVal !== null) return enVal;
      return path;
    },
    [catalog]
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      catalog,
    }),
    [locale, setLocale, t, catalog]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocaleCatalog() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocaleCatalog must be used within LocaleProvider");
  }
  return ctx;
}
