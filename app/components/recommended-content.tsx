import Link from "next/link";
import AnimatedLink from "./animated-link";

type ContentMetadata = {
  title: string;
  description: string;
  publishedAt: string;
};

type Content = {
  slug: string;
  metadata: ContentMetadata;
  type: "post" | "craft";
};

interface RecommendedContentProps {
  currentSlug: string;
  currentType: "post" | "craft";
  items: Content[];
}

export default function RecommendedContent({
  currentSlug,
  currentType,
  items,
}: RecommendedContentProps) {
  // Filter out current content and get 2 most recent related items
  const recommendations = items
    .filter((item) => item.slug !== currentSlug && item.type === currentType)
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime(),
    )
    .slice(0, 2);

  if (recommendations.length === 0) return null;

  return (
    <section className="mt-16 border-t border-zinc-800 pt-8">
      <h2 className="text-xl font-medium mb-6">Continue Reading</h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {recommendations.map((item) => (
          <article key={item.slug} className="group">
            <AnimatedLink
              href={`/${item.type === "post" ? "posts" : "crafts"}/${item.slug}`}
            >
              <h3 className="text-lg font-medium">{item.metadata.title}</h3>
            </AnimatedLink>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {item.metadata.description}
            </p>
            <time className="mt-2 block text-sm text-zinc-600 dark:text-zinc-400">
              {new Date(item.metadata.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </article>
        ))}
      </div>
    </section>
  );
}
