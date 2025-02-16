import { notFound } from "next/navigation";
import { CustomMDX } from "@/app/components/mdx/mdx-components";
import { baseUrl } from "app/sitemap";
import { getCrafts } from "app/utils/mdx-utils";
import Link from "next/link";
import PageLayout from "@/app/components/page-layout";
import { generateCraftSchema } from "@/app/utils/structured-data";

export async function generateStaticParams() {
  const crafts = await getCrafts();

  return crafts.map((craft) => ({
    slug: craft.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const crafts = await getCrafts();
  const craft = crafts.find((craft) => craft.slug === slug);

  if (!craft) {
    return null;
  }

  const { title, publishedAt: publishedTime, description } = craft.metadata;
  const ogImage = `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/crafts/${craft.slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} - Project by Niklas Albinsson`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function CraftPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const crafts = await getCrafts();
  const craft = crafts.find((craft) => craft.slug === slug);

  if (!craft) {
    notFound();
  }

  const structuredData = generateCraftSchema(craft);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageLayout
        title={craft.metadata.title}
        description={craft.metadata.description}
        backLink={
          <Link href="/crafts" className="text-sm hover:opacity-70 transition-colors">
            ← back to crafts
          </Link>
        }
        breadcrumbs={[
          { label: "Crafts", path: "/crafts" },
          { label: craft.metadata.title, path: `/crafts/${slug}` },
        ]}
      >
        <article className="prose prose-zinc dark:prose-invert">
          <CustomMDX source={craft.content} />
        </article>
      </PageLayout>
    </>
  );
}
