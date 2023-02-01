import * as React from 'react';
import { graphql, HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout/Layout';
import { MasterHead } from '../components/Head';
import * as projectsStyle from './projects.module.scss';
import Anchor from '../components/Anchor';

type ProjectEntryProps = {
  name: string;
  repoLink: string;
  description: string;
  children: React.ReactNode;
  demoLink?: string;
  status?: string;
};

const DemoLink = ({ url }: { url: string }) => (
  <div>
    <Anchor href={url}>Click here to see a demo!</Anchor>
  </div>
);

const ProjectEntry = ({ name, description, children, demoLink, repoLink, status }: ProjectEntryProps) => {
  const [hidden, setHidden] = React.useState(true);

  const toggleOpen = () => {
    setHidden(!hidden);
  };

  return (
    <section className={projectsStyle.projectEntry}>
      <div className={projectsStyle.projectTitle}>
        <h2>{name}</h2>
        <span>
          <Anchor href={repoLink}>Repo</Anchor>
        </span>
      </div>
      {demoLink && <DemoLink url={demoLink} />}
      {description}
      {status}

      <div className={hidden && projectsStyle.hidden}>{children}</div>
      <div onClick={toggleOpen} className={projectsStyle.toggleButton}>
        {hidden ? 'click here for more info' : 'click here to collapse'}
      </div>
    </section>
  );
};

const ProjectsPage = ({ data }: PageProps<Queries.GetProjectEntriesQuery>) => {
  return (
    <Layout>
      <hr />
      <div className={projectsStyle.projectEntryContainer}>
        {data.allMdx.nodes.map((node: any) => (
          <ProjectEntry key={node.id} {...node.frontmatter}>
            {node.body}
          </ProjectEntry>
        ))}
      </div>
    </Layout>
  );
};

export default ProjectsPage;

export const query = graphql`
  query GetProjectEntries {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/(/content/projects/)/" } } }
      sort: { frontmatter: { priority: ASC } }
    ) {
      nodes {
        frontmatter {
          demoLink
          description
          status
          repoLink
          name
        }
        id
        body
      }
    }
  }
`;

export const Head: HeadFC = () => <MasterHead titleSuffix="Projects" />;
