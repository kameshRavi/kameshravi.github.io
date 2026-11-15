import { getCollection } from 'astro:content';

// Highest `order` first, so new writing lands on top. Drafts show in dev only.
export const getPosts = async () =>
  (await getCollection('writing', ({ data }) => !import.meta.env.PROD || !data.draft)).sort(
    (a, b) => b.data.order - a.data.order,
  );
