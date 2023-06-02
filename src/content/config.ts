import {z, defineCollection} from "astro:content";

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    date: z.date(),
    draft: z.boolean(),
    tags: z.array(z.string()).optional(),
  })
})

export const collections = {
  'blog': blogCollection,
}