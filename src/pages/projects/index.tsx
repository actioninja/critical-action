import * as React from 'react';
import Layout from '../../components/layout/Layout';
import projectsStyle from './projects.module.scss';
import Anchor from '../../components/Anchor';
import SplitHeader from '../../components/SplitHeader';
import { getAllFromContentDir } from '../../lib/mdxHelpers';

type ProjectEntryProps = {
  name: string;
  repoLink: string;
  description: string;
  children: React.ReactNode;
  demoLink?: string;
};

const DemoLink = ({ url }: { url: string }) => (
  <div>
    <Anchor href={url}>Click here to see a demo!</Anchor>
  </div>
);

const ProjectEntry = ({ slug, name, description, children, demoLink, repoLink }: ProjectEntryProps) => {
  const [hidden, setHidden] = React.useState(true);

  const toggleOpen = () => {
    setHidden(!hidden);
  };

  return (
    <section className={projectsStyle.projectEntry}>
      <SplitHeader rightSide={<Anchor href={repoLink}>Repo</Anchor>}>{name}</SplitHeader>
      {demoLink && <DemoLink url={demoLink} />}
      {description}

      <div className={hidden ? projectsStyle.hidden : undefined}>{children}</div>
      <div className={projectsStyle.toggleButton}>
        <Anchor href={`/projects/${slug}`}>Click here for more info</Anchor>
      </div>
    </section>
  );
};

export default function ProjectsPage({ projects }) {
  return (
    <Layout>
      Here's projects I've created or worked on.
      <hr />
      <div className={projectsStyle.projectEntryContainer}>
        {projects.map((node: any) => (
          <ProjectEntry key={node.id} slug={node.slug} {...node.frontmatter} />
        ))}
      </div>
    </Layout>
  );
}

export const projectsDir = 'projects';

export async function getStaticProps() {
  const projects = getAllFromContentDir(projectsDir);
  const sortedProjects = projects.sort((a, b) => a.frontmatter.priority - b.frontmatter.priority);

  return {
    props: {
      projects: sortedProjects,
    },
  };
}
