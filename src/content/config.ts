import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    authorAvatar: z.string().optional(),
    authorRole: z.string().optional(),
    publishedAt: z.coerce.date(),
    excerpt: z.string().optional(),
    featuredImage: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    calloutAfterSection: z.number().optional(),
  }),
});

export const collections = { blog };
