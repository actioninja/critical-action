import * as React from 'react';
import Layout from '../../components/Layout';
import { HeadFC, PageProps } from 'gatsby';
import { MasterHead } from '../../components/Head';

const BlogPage: React.FC<PageProps> = () => {
  return <Layout>Blog currently under construction</Layout>;
};

export default BlogPage;

export const Head: HeadFC = () => <MasterHead titleSuffix="Blog" />;
