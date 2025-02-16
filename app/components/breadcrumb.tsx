import Link from "next/link";
import { baseUrl } from "../sitemap";

type BreadcrumbItem = {
  label: string;
  path: string;
};

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const breadcrumbList = [{ label: "Home", path: "/" }, ...items];

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbList.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@id": `${baseUrl}${item.path}`,
                name: item.label,
              },
            })),
          }),
        }}
      />
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex text-sm gap-2 text-zinc-400">
          {breadcrumbList.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              {index === breadcrumbList.length - 1 ? (
                <span className="text-zinc-200">{item.label}</span>
              ) : (
                <Link href={item.path} className="hover:text-zinc-200 transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
