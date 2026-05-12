import AdminShell from "./AdminShell";

export const metadata = {
  title: "Admin · FastVidl",
  robots: { index: false, follow: false },
};

export default function AdminDashboardLayout({ children }) {
  return <AdminShell>{children}</AdminShell>;
}
