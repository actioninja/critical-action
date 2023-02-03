import Layout from '../../components/layout/Layout';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { getAllFromContentDir, options, slugToPostData } from '../../lib/mdxHelpers';
import SplitHeader from '../../components/SplitHeader';

export default function BlogPage({ content, frontmatter, slug }) {
  return (
    <Layout>
      <SplitHeader rightSide={frontmatter.date}>{frontmatter.title}</SplitHeader>
      <MDXRemote {...content} />
    </Layout>
  );
}

const postsDir = 'blog';

export async function getStaticProps({ params }) {
  const post = await slugToPostData(postsDir, params.slug);

  const serializedMdx = await serialize(post.content, options);

  return {
    props: {
      ...post,
      content: serializedMdx,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllFromContentDir(postsDir);

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}
