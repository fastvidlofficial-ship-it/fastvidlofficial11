import { Suspense } from "react";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "Admin login · FastVidl",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  // LoginForm uses useSearchParams() to honor the ?from= return URL.
  // Next.js requires that hook to live under a Suspense boundary during
  // static prerendering — otherwise `next build` bails out with a CSR error.
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
