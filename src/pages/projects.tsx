import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout/Layout';
import { MasterHead } from '../components/Head';

const ProjectsPage: React.FC<PageProps> = () => {
  return <Layout>Projects under construction</Layout>;
};

export default ProjectsPage;

export const Head: HeadFC = () => <MasterHead titleSuffix="Projects" />;
