"use client";

import { usePathname } from "next/navigation";

/**
 * Renders the wrapped public-site chrome (Header / Footer) on every route
 * EXCEPT the admin dashboard, which paints its own shell. Using a tiny
 * client wrapper lets us keep the children as server components.
 */
export default function ConditionalChrome({ children }) {
  const pathname = usePathname() || "";
  const isAdmin = pathname.startsWith("/admin-dashboard");
  if (isAdmin) return null;
  return <>{children}</>;
}
