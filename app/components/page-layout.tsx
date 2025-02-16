import { ReactNode } from "react";
import { Metadata } from "next";
import Breadcrumb from "./breadcrumb";
import { baseUrl } from "../sitemap";

interface PageLayoutProps {
  title: string | ReactNode;
  description: string;
  children: ReactNode;
  backLink?: ReactNode;
  breadcrumbs?: Array<{ label: string; path: string }>;
  metadata?: Partial<Metadata>;
}

export default function PageLayout({
  title,
  description,
  children,
  backLink,
  breadcrumbs,
  metadata,
}: PageLayoutProps) {
  return (
    <section className="flex flex-col gap-6 sm:gap-8 md:gap-16">
      {metadata && (
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": `${baseUrl}${metadata?.openGraph?.url || ""}/#webpage`,
              url: `${baseUrl}${metadata?.openGraph?.url || ""}`,
              name: metadata?.title || title,
              description: metadata?.description || description,
              isPartOf: {
                "@id": `${baseUrl}/#website`,
              },
            }),
          }}
        />
      )}
      <header className="flex flex-col gap-2 sm:gap-3">
        {backLink && <div className="flex justify-start">{backLink}</div>}
        {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
        {typeof title === "string" ? (
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tighter">{title}</h1>
        ) : (
          title
        )}
        <p className="mt-2 sm:mt-4 text-sm sm:text-base text-zinc-400">{description}</p>
      </header>
      {children}
    </section>
  );
}
