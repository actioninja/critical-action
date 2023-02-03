import * as React from 'react';
import Layout from '../../components/layout/Layout';
import { MasterHead } from '../../components/Head';
import * as projectsStyle from './projects.module.scss';
import Anchor from '../../components/Anchor';
import SplitHeader from '../../components/SplitHeader';

type ProjectEntryProps = {
  slug: string;
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

export default function ProjectsPage({ data }) {
  return (
    <Layout>
      Rebuild in progress
      <hr />
      {/*
      <div className={projectsStyle.projectEntryContainer}>
        {data.allMdx.nodes.map((node: any) => (
          <ProjectEntry key={node.id} {...node.frontmatter} />
        ))}
      </div>
      */}
    </Layout>
  );
}
