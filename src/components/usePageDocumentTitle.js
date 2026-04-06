"use client";

import { useLayoutEffect } from "react";
import { useLocaleCatalog } from "@/contexts/LocaleContext";

/** Sets document.title from site.json: pages.{pageKey}.docTitle */
export function usePageDocumentTitle(pageKey) {
  const { t } = useLocaleCatalog();
  useLayoutEffect(() => {
    document.title = t(`pages.${pageKey}.docTitle`);
  }, [t, pageKey]);
}
