import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    locale: z.enum(['en', 'ar']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false)
  })
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().int().default(100),
    featured: z.boolean().default(false),
    status: z.enum(['active', 'maintained', 'archived', 'experimental']),
    stack: z.array(z.string()).default([]),
    repository: z.url().optional(),
    homepage: z.url().optional(),
    license: z.string().optional(),
    highlights: z.array(z.string()).default([]),
    legacyPath: z.string().optional()
  })
});

const tools = defineCollection({
  loader: glob({ base: './src/content/tools', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    name: z.string(),
    category: z.enum(['languages', 'systems', 'workflow', 'writing']),
    description: z.string(),
    order: z.number().int().default(100),
    url: z.url().optional()
  })
});

export const collections = { articles, projects, tools };
