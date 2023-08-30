// eslint-disable-next-line import/no-unresolved
import type { Metadata } from 'next';
import PageHeader from 'components/page-header';
import Page from 'components/page';
import { ExternalLink } from 'components/links';
import { Mdx } from 'components/mdx';
import BlurImage from 'components/image';
import { allProjects } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

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
      <Link
        passHref
        href="/"
        className="flex w-fit items-center text-zinc-400 transition-colors hover:text-zinc-300 lg:mb-6 lg:px-6"
      >
        <ArrowLeftIcon className="mr-2 h-4 w-4" />
        Home
      </Link>

      <BlurImage alt="Project Image" src={project.image} />

      <div className="mb-12 mt-6 lg:mb-24 lg:px-6 2xl:mb-32">
        <h1 className="mb-4 font-serif text-4xl font-bold">{project.title}</h1>
        <p className="mb-6 text-base text-zinc-400">{project.summary}</p>
        <div className="flex flex-col space-y-4">
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
      </div>
      <article className="prose prose-invert mt-10 px-2 sm:prose-invert lg:prose-lg sm:px-0 lg:px-6 2xl:my-20">
        <Mdx code={project.body.code} />
      </article>
    </Page>
  );
}
