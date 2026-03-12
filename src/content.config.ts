import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const releases = defineCollection({
  loader: file('src/content/releases.json'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      type: z.string(),
      date: z.coerce.date(),
      cover: image(),
      url: z.url(),
      id: z.string(),
      orderRank: z.number(),
    }),
});

const quotes = defineCollection({
  loader: file('src/content/quotes.json'),
  schema: z.object({
    text: z.string(),
    url: z.url(),
    id: z.string(),
  }),
});

export const collections = { releases, quotes };
