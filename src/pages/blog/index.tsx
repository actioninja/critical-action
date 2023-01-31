import * as React from 'react';
import Layout from '../../components/layout/Layout';
import { HeadFC, Link, PageProps, graphql } from 'gatsby';
import { MasterHead } from '../../components/Head';
import * as blogIndexStyle from './index.module.css';

type BlogProps = {
  title?: string | null;
  date?: string | null;
  excerpt?: string | null;
  slug?: string | null;
};

const BlogEntry = ({ title, date, excerpt, slug }: BlogProps) => {
  return (
    <Link to={'/blog/' + slug} className={blogIndexStyle.entryContainer}>
      <div className={blogIndexStyle.entryHeader}>
        <span className={blogIndexStyle.entryTitle}>{title}</span>
        <span className={blogIndexStyle.entryDate}>{date}</span>
      </div>
      <div className={blogIndexStyle.entryExcerpt}>{excerpt}...</div>
      <div>Read more...</div>
    </Link>
  );
};

const BlogPage = ({ data }: PageProps<Queries.GetBlogEntriesQuery>) => {
  console.log(data);
  const entries = data.allMdx.nodes.map((node) => {
    return <BlogEntry key={node.id} excerpt={node.excerpt} {...node.frontmatter} />;
  });
  return (
    <Layout>
      <header className={blogIndexStyle.header}>
        <h1>Blog</h1>
        <section>
          Here's where I put informative articles, opinion pieces, and general musings of questionable value.
        </section>
      </header>
      <h2 className={blogIndexStyle.recentHeader}>
        <span>Recent Posts</span>
        {/* TODO: Browsing
        <span className={blogIndexStyle.recentHeaderBrowse}>
          <Link to="/blog/browse/">Browse All</Link>
        </span>
        */}
      </h2>
      {entries.length ? entries : 'Nothing yet! Check back later.'}
    </Layout>
  );
};

export const query = graphql`
  query GetBlogEntries {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/(/blog/)/" } }, frontmatter: { draft: { eq: false } } }
      sort: { frontmatter: { date: DESC } }
      limit: 10
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "LLL")
          slug
        }
        excerpt
        id
      }
    }
  }
`;

export default BlogPage;

export const Head: HeadFC = () => <MasterHead titleSuffix="Blog" />;
