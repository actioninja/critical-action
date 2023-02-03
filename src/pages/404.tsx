import * as React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';

export default function NotFoundPage(props) {
  return (
    <Layout>
      <Head>
        <title>404 - Critical Action</title>
      </Head>
      <span>404: Not Found</span>
      <section>The page you are looking for wasn't found.</section>
    </Layout>
  );
}
