// eslint-disable-next-line import/no-unresolved
import { useMDXComponent } from 'next-contentlayer/hooks';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import PageHeader from 'components/page-header';
import Page from 'components/page/page';
import { CustomSeo } from 'components/seo';
import { ExternalLink } from 'components/links';
import MDX_COMPONENTS from 'components/mdx';
import BlurImage from 'components/image';
import { BreadcrumbLink } from 'components/navigation/breadcrumb-link';
import { allProjects, type Project } from 'contentlayer/generated';

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

const ProjectPage: NextPage<{ project: Project }> = ({ project }) => {
  const Component = useMDXComponent(project.body.code);
  const PROJECT_META_TITLE = `${project.title} - a project by Niklas Albinsson`;
  const PROJECT_META_DESCRIPTION = `${project.summary}`;

  const STACK = project.stack.split(' ');

  return (
    <Page>
      <CustomSeo
        title={PROJECT_META_TITLE}
        description={PROJECT_META_DESCRIPTION}
      />
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
  if (!params) {
    return {
      props: {
        project: allProjects[0],
      },
    };
  }

  const project = allProjects.find((p) => p.slug === params.slug);

  return {
    props: {
      project,
    },
  };
};

export default ProjectPage;
