import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout/Layout';
import { MasterHead } from '../components/Head';

const NotFoundPage = (props: PageProps) => {
  return (
    <Layout>
      <span>404: Not Found</span>
      <section>The page you are looking for wasn't found.</section>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <MasterHead titleSuffix="404: Not Found" />;
