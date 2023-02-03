import * as React from 'react';
import Layout from '../components/layout/Layout';
import { MDXProvider } from '@mdx-js/react';
import Anchor from '../components/Anchor';
import SplitHeader from '../components/SplitHeader';
/*

type ProjectTemplateData = {
  mdx: {
    frontmatter: {
      name: string;
      description: string;
      repoLink: string;
      demoLink?: string;
    };
  };
};

const ProjectTemplate = ({ children, data }: PageProps<ProjectTemplateData>) => {
  const { name, description, repoLink, demoLink } = data.mdx.frontmatter;
  return (
    <Layout>
      <Anchor to="/projects">Go back to projects</Anchor>
      <header>
        <SplitHeader rightSide={<Anchor href={repoLink}>Repo</Anchor>}>{name}</SplitHeader>
        <div></div>
        {demoLink}
        {description}
      </header>
      <article>
        <MDXProvider>{children}</MDXProvider>
      </article>
      <Anchor to="/projects">Go back to projects</Anchor>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        name
        description
        repoLink
        demoLink
      }
    }
  }
`;

export default ProjectTemplate;
*/
