import * as React from 'react';
import Layout from '../../components/layout/Layout';
import { MasterHead } from '../../components/Head';
import * as blogIndexStyle from './index.module.scss';
import SplitHeader from '../../components/SplitHeader';
import { getAllFromContentDir, slugToPostData } from '../../lib/mdxHelpers';
import Link from 'next/link';

type BlogProps = {
  title?: string | null;
  date?: string | null;
  excerpt?: string | null;
  slug?: string | null;
};

const BlogEntry = ({ title, date, excerpt, slug }: BlogProps) => {
  return (
    <Link href={'/blog/' + slug} className={blogIndexStyle.entryContainer}>
      <SplitHeader
        rightSide={date}
        className={blogIndexStyle.entryHeader}
        rightClassName={blogIndexStyle.entryDate}
        titleClassName={blogIndexStyle.entryTitle}
      >
        {title}
      </SplitHeader>
      <div className={blogIndexStyle.entryExcerpt}>{excerpt}</div>
      <div className={blogIndexStyle.underlineOnHover}>Read more...</div>
    </Link>
  );
};

export default function BlogPage({ posts }) {
  const entries = posts.map((node) => {
    return <BlogEntry key={node.slug} slug={node.slug} excerpt={node.excerpt} {...node.frontmatter} />;
  });
  return (
    <Layout>
      <header>
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
}

const postsDir = 'blog';

export async function getStaticProps() {
  const posts = getAllFromContentDir(postsDir);
  const filtered = posts.filter((post) => !post.frontmatter.draft);

  return {
    props: {
      posts: filtered,
    },
  };
}
