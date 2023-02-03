import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { format } from 'date-fns';
import remarkGfm from 'remark-gfm';

export const contentDir = join(process.cwd(), 'content');

export interface BlogFrontmatter {
  title: string;
  date: string;
  draft: boolean;
}

export interface ProjectsFrontmatter {
  name: string;
  description: string;
  repoLink: string;
  demoLink?: string;
  priority: string;
}

export interface PostData {
  slug: string;
  frontmatter: any;
  excerpt: string;
  content: string;
}

export function slugToPostData(dir: string, slug: string): PostData {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(contentDir, dir, `${realSlug}.mdx`);
  const fileContent = fs.readFileSync(fullPath, 'utf-8');
  const { data, content, excerpt } = matter(fileContent, { excerpt: true });

  let formatted = data;
  if (data.date != null) {
    formatted = {
      ...data,
      date: format(data.date, 'yyyy-mm-dd'),
    };
  }

  return {
    slug: realSlug,
    frontmatter: formatted,
    content,
    excerpt,
  };
}

export function getAllFromContentDir(dir: string): PostData[] {
  const slugs = fs.readdirSync(join(contentDir, dir));
  const posts = slugs.map((slug) => slugToPostData(dir, slug));

  return posts;
}

export const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
  },
};
