"use client";

import { useLayoutEffect } from "react";
import { useLocaleCatalog } from "@/contexts/LocaleContext";

export function useToolDocumentTitle(toolKey) {
  const { locale, t } = useLocaleCatalog();
  useLayoutEffect(() => {
    document.title = t(`tools.${toolKey}.docTitle`);
  }, [locale, t, toolKey]);
}
