import BlogForm from "../BlogForm";

export const metadata = {
  title: "New blog · FastVidl Admin",
  robots: { index: false, follow: false },
};

export default function NewBlogPage() {
  return <BlogForm mode="create" />;
}
