import * as React from 'react';
import Layout from '../components/layout/Layout';
import { MasterHead } from '../components/Head';

export default function NotFoundPage(props) {
  return (
    <Layout>
      <span>404: Not Found</span>
      <section>The page you are looking for wasn't found.</section>
    </Layout>
  );
}
