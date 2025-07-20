import type { CollectionEntry } from 'astro:content';

import { getCollection } from 'astro:content';

export const prerender = false;

export async function GET() {
  const quotes = await getCollection('quotes');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  return new Response(JSON.stringify(randomQuote));
}

export type Quote = CollectionEntry<'quotes'>;
