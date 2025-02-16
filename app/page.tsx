import Link from "next/link";
import AnimatedLink from "./components/animated-link";
import AnimatedTitle from "./components/animated-title";
import { getCrafts, getBlogPosts } from "./utils/mdx-utils";
import PageLayout from "./components/page-layout";
import { baseUrl } from "./sitemap";

export default async function Page() {
  const [crafts, posts] = await Promise.all([getCrafts(), getBlogPosts()]);

  const recentCrafts = crafts
    .toSorted((a, b) => {
      return (
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
      );
    })
    .slice(0, 3);

  const recentPosts = posts
    .toSorted((a, b) => {
      return (
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
      );
    })
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": `${baseUrl}/#website`,
                url: baseUrl,
                name: "Niklas Albinsson",
                description:
                  "Software developer crafting web applications with a focus on user experience and clean code.",
                publisher: {
                  "@type": "Person",
                  "@id": `${baseUrl}/#person`,
                  name: "Niklas Albinsson",
                },
              },
              {
                "@type": "Person",
                "@id": `${baseUrl}/#person`,
                name: "Niklas Albinsson",
                url: baseUrl,
                image: `${baseUrl}/og?title=Niklas Albinsson`,
                jobTitle: "Software Developer",
                description:
                  "Software developer crafting web applications with a focus on user experience and clean code.",
                sameAs: ["https://github.com/Maufive"],
              },
            ],
          }),
        }}
      />
      <PageLayout
        title={<AnimatedTitle text="Niklas Albinsson" />}
        description="I'm a web developer who gets excited about the little things - like that perfect transition when you open a menu, or the satisfying bounce of a button press. I strive to become a little bit better every day."
      >
        <div className="flex flex-col gap-8 md:gap-16">
          <div className="flex-1">
            <div className="flex items-baseline justify-between">
              <h2 className="text-xl font-medium">Recent Crafts</h2>
              <Link href="/crafts" className="text-sm hover:opacity-70 transition-colors">
                view all →
              </Link>
            </div>
            <ul className="mt-4 space-y-3">
              {recentCrafts.map((craft) => (
                <li key={craft.slug}>
                  <AnimatedLink href={`/crafts/${craft.slug}`}>
                    {craft.metadata.title}
                  </AnimatedLink>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {craft.metadata.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <div className="flex items-baseline justify-between">
              <h2 className="text-xl font-medium">Recent Posts</h2>
              <Link href="/posts" className="text-sm hover:opacity-70 transition-colors">
                view all →
              </Link>
            </div>
            <ul className="mt-4 space-y-3">
              {recentPosts.map((post) => (
                <li key={post.slug}>
                  <AnimatedLink href={`/posts/${post.slug}`}>
                    {post.metadata.title}
                  </AnimatedLink>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {post.metadata.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
