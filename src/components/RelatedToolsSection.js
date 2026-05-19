import Link from "next/link";

export default function RelatedToolsSection({ heading, tools }) {
  if (!Array.isArray(tools) || tools.length === 0) return null;

  return (
    <div className="container-blog">
      <section className="home-blog-article" aria-labelledby="related-tools-heading">
        <h2 id="related-tools-heading" className="home-blog-article-h2">
          {heading}
        </h2>
        <ul className="home-blog-article-ul">
          {tools.map((tool) => (
            <li key={tool.href}>
              <Link href={tool.href} className="home-blog-article-link">
                {tool.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
