import Link from "next/link";
import AnimatedLink from "../components/animated-link";
import PageLayout from "../components/page-layout";
import { getCrafts } from "../utils/mdx-utils";
import { Metadata } from "next";
import { baseUrl } from "../sitemap";

type CraftMetadata = {
  title: string;
  publishedAt: string;
  description: string;
  stack?: string;
  image?: string;
  github?: string;
  projectUrl?: string;
};

export const metadata: Metadata = {
  title: "Crafts & Projects",
  description:
    "A collection of web projects, interactive demos, and experiments showcasing modern web development techniques and creative coding.",
  openGraph: {
    title: "Crafts & Projects | Niklas Albinsson",
    description:
      "A collection of web projects, interactive demos, and experiments showcasing modern web development techniques and creative coding.",
    url: "/crafts",
    type: "website",
  },
  alternates: {
    canonical: `${baseUrl}/crafts`,
  },
};

export default async function CraftsPage() {
  const crafts = (await getCrafts()).toSorted(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );

  return (
    <PageLayout
      title="Crafts"
      description="Things I've made."
      metadata={metadata}
      breadcrumbs={[{ label: "Crafts & Projects", path: "/crafts" }]}
      backLink={
        <Link
          href="/"
          className="text-xs text-zinc-400 hover:text-zinc-300 transition-colors"
        >
          ← Home
        </Link>
      }
    >
      <ul className="flex flex-col gap-8">
        {crafts.map((craft) => {
          const metadata = craft.metadata as CraftMetadata;
          return (
            <li key={craft.slug} className="group">
              <article>
                <AnimatedLink href={`/crafts/${craft.slug}`}>
                  <h2 className="text-lg font-medium">{metadata.title}</h2>
                </AnimatedLink>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {metadata.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {metadata.stack && (
                    <span className="text-zinc-500">Built with: {metadata.stack}</span>
                  )}
                  <time className="block">
                    {new Date(metadata.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </PageLayout>
  );
}
