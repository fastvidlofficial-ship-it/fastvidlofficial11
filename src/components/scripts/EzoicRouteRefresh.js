"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function EzoicRouteRefresh() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.ezstandalone?.cmd) return;

    window.ezstandalone.cmd.push(function () {
      window.ezstandalone.showAds();
    });
  }, [pathname]);

  return null;
}
