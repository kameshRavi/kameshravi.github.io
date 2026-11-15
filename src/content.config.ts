import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    role: z.string(),
    stack: z.array(z.string()),
    draft: z.boolean().default(false),
    personal: z.boolean().default(false),
    order: z.number().default(0), // higher shows first; give a new post the next number up
  }),
});

export const collections = { writing };
