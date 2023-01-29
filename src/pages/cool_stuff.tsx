import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import { MasterHead } from '../components/Head';

const CoolStuffPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      Cool Stuff under construction. This will be a place I'll show some cool stuff that I didn't necessarily make
    </Layout>
  );
};

export default CoolStuffPage;

export const Head: HeadFC = () => <MasterHead titleSuffix="Cool Stuff" />;
