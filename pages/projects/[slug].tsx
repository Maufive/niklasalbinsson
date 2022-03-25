/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// eslint-disable-next-line import/no-unresolved
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import { Project as ProjectType } from '.contentlayer/types';
import { allProjects } from '.contentlayer/data';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import PageHeader from 'components/page-header';
import Page from 'components/page/page';
import { CustomSeo } from 'components/seo';
import { ExternalLink } from 'components/links';
import MDX_COMPONENTS from 'components/mdx';

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

const Project: NextPage<{ project: ProjectType }> = ({ project }) => {
  const Component = useMDXComponent(project.body.code);
  const BLOG_TITLE = `${project.title} | Niklas Albinsson`;
  const BLOG_DESCRIPTION = `${project.summary}`;

  const STACK = project.stack.split(' ');

  return (
    <Page>
      <CustomSeo title={BLOG_TITLE} description={BLOG_DESCRIPTION} />
      <PageHeader title={project.title} compact description={project.summary} />
      <div className="flex flex-col space-y-4">
        <ProjectDetail title="Stack" column>
          <ul className="flex flex-wrap">
            {STACK.map((technology) => (
              <li key={technology} className="mr-4 mb-2 lg:mb-0">
                <p className="text-base text-zinc-700 dark:text-zinc-300">
                  {technology}
                </p>
              </li>
            ))}
          </ul>
        </ProjectDetail>
        <ProjectDetail title="Code">
          <ExternalLink
            className="ml-2 font-normal"
            href={project.repositoryUrl}
          >
            Repository
          </ExternalLink>
        </ProjectDetail>
        {project.projectUrl && (
          <ProjectDetail title="Demo">
            <ExternalLink
              className="ml-2 font-normal"
              href={project.projectUrl}
            >
              View Project
            </ExternalLink>
          </ProjectDetail>
        )}
      </div>

      <article className="prose prose-zinc mt-10 dark:prose-invert 2xl:prose-xl 2xl:my-20">
        <Component components={MDX_COMPONENTS} />
      </article>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = () => ({
  paths: allProjects.map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = ({ params }) => {
  const project = allProjects.find((p) => p.slug === params?.slug);
  return {
    props: {
      project,
    },
  };
};

export default Project;
