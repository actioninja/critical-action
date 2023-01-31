import * as React from 'react';
import Layout from '../components/layout/Layout';
import { HeadFC, graphql, PageProps } from 'gatsby';
import { MasterHead } from '../components/Head';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as blogPostStyle from './blog-post.module.css';
import { MDXProvider } from '@mdx-js/react';
import CodeContainer from '../components/mdx/CodeContainer';
import BlockQuote from '../components/mdx/BlockQuote';

type TitleArgs = {
  title: string;
  date: string;
};

const BlogTitle = ({ title, date }: TitleArgs) => {
  return (
    <div className={blogPostStyle.titleContainer}>
      <span className={blogPostStyle.title}>{title}</span>
      <span className={blogPostStyle.date}>{date}</span>
    </div>
  );
};

type BlogEntryData = {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
    };
  };
};

const blogComponents = {
  code: CodeContainer,
  blockquote: BlockQuote,
};

const BlogEntryPage = ({ children, data }: PageProps<BlogEntryData>) => {
  return (
    <Layout>
      <BlogTitle title={data.mdx.frontmatter.title} date={data.mdx.frontmatter.date} />
      <article>
        <MDXProvider components={blogComponents}>{children}</MDXProvider>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "LLL")
      }
    }
  }
`;

export default BlogEntryPage;

export const Head: HeadFC = () => <MasterHead titleSuffix="Blog" />;
