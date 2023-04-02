// eslint-disable-next-line import/no-unresolved
import type { Metadata } from 'next';
import PageHeader from 'components/page-header';
import Page from 'components/page';
import { ExternalLink } from 'components/links';
import { Mdx } from 'components/mdx';
import BlurImage from 'components/image';
import { BreadcrumbLink } from 'components/navigation/breadcrumb-link';
import { allProjects } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

type Params = {
  slug: string;
};

type Props = {
  params: Params;
};

export async function generateStaticParams(): Promise<Params[]> {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const project = allProjects.find((p) => p.slug === params.slug);
  if (!project) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    slug,
  } = project;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://www.niklasalbinsson.dev/blog/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

const ProjectDetail: React.FC<{ title: string; column?: boolean }> = ({
  title,
  children,
  column,
}) => (
  <div className={`flex ${column ? 'flex-col' : 'flex-start'}`}>
    <h3 className="mb-2 text-base font-bold">{title}:</h3>
    {children}
  </div>
);

export default async function Project({ params }: Props) {
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const STACK = project.stack.split(' ');

  return (
    <Page>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
      <BlurImage alt="Project Image" src={project.image} className="mb-10" />
      <PageHeader title={project.title} compact description={project.summary} />
      <div className="flex flex-col space-y-4 sm:px-4">
        <ProjectDetail title="Stack" column>
          <ul className="flex flex-wrap">
            {STACK.map((technology) => (
              <li key={technology} className="mb-2 mr-4 lg:mb-0">
                <p className="text-base text-zinc-300">{technology}</p>
              </li>
            ))}
          </ul>
        </ProjectDetail>
        <ProjectDetail title="Code">
          <ExternalLink
            className="ml-2 font-normal"
            href={project.repositoryUrl}
          >
            View Repository
          </ExternalLink>
        </ProjectDetail>
        {project.projectUrl && !project.downloadable && (
          <ProjectDetail title="Demo">
            <ExternalLink
              className="ml-2 font-normal"
              href={project.projectUrl}
            >
              View Project
            </ExternalLink>
          </ProjectDetail>
        )}
        {project.projectUrl && project.downloadable && (
          <ProjectDetail title="Download">
            <ExternalLink
              className="ml-2 font-normal"
              href={project.projectUrl}
            >
              Download .zip (macOS only)
            </ExternalLink>
          </ProjectDetail>
        )}
      </div>

      <article className="prose prose-invert mt-10 sm:prose-invert lg:prose-lg sm:px-4 2xl:my-20">
        <Mdx code={project.body.code} />
      </article>
    </Page>
  );
}
