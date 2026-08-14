import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

/**
 * Research papers are copied verbatim from ~/memory, so their frontmatter is the
 * hive's schema, not a web schema. Accept it as-is rather than rewriting the
 * files — the stored record is the source of truth and a second, drifting copy
 * is exactly the failure mode these papers are about.
 */
const research = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/research' }),
  schema: z.object({
    name: z.string(),
    type: z.string(),
    timestamp: z.coerce.date(),
    spirit: z.number().optional(),
    importance: z.number().optional(),
    anchor: z.boolean().optional(),
    source: z.string().optional(),
  }),
});

export const collections = { research };
