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
        <ol className="flex flex-wrap text-sm gap-2 text-zinc-400">
          {breadcrumbList.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && <span className="mx-2 shrink-0">/</span>}
              {index === breadcrumbList.length - 1 ? (
                <span className="text-zinc-200 truncate max-w-[200px] sm:max-w-[300px]">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="hover:text-zinc-200 transition-colors truncate max-w-[200px] sm:max-w-[300px]"
                >
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
