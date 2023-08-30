import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
  const blog = await getCollection('blog', ({data}) => {
    return data.draft === false;
  });
  return rss({
    title: 'Critical Action',
    description: 'Informative articles, opinion pieces, and general musings of questionable value',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}/`
    }))
  })
}