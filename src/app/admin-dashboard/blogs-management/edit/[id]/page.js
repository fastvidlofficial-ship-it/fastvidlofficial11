import BlogForm from "../../BlogForm";

export const metadata = {
  title: "Edit blog · FastVidl Admin",
  robots: { index: false, follow: false },
};

export default async function EditBlogPage({ params }) {
  const { id } = await params;
  return <BlogForm mode="edit" blogId={id} />;
}
