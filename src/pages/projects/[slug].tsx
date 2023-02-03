import { getAllFromContentDir, options, slugToPostData } from '../../lib/mdxHelpers';
import { projectsDir } from './index';
import { serialize } from 'next-mdx-remote/serialize';
import React from 'react';
import Layout from '../../components/layout/Layout';
import Anchor from '../../components/Anchor';
import SplitHeader from '../../components/SplitHeader';
import { MDXRemote } from 'next-mdx-remote';

export default function ProjectPage({ content, frontmatter }) {
  const { name, description, repoLink, demoLink } = frontmatter;
  return (
    <Layout>
      <Anchor href="/projects">Go back to projects</Anchor>
      <header>
        <SplitHeader rightSide={<Anchor href={repoLink}>Repo</Anchor>}>{name}</SplitHeader>
        <div></div>
        {demoLink}
        {description}
      </header>
      <article>
        <MDXRemote {...content} />
      </article>
      <Anchor href="/projects">Go back to projects</Anchor>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const project = await slugToPostData(projectsDir, params.slug);

  const serializedMdx = await serialize(project.content, options);

  return {
    props: {
      ...project,
      content: serializedMdx,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllFromContentDir(projectsDir);

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}
