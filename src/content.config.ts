import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const releases = defineCollection({
  loader: file('src/content/releases.json'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      type: z.string(),
      date: z.coerce.date(),
      cover: image(),
      url: z.string().url(),
      id: z.string(),
      orderRank: z.number(),
    }),
});

export const collections = { releases };
