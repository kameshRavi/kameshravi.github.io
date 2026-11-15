import rss from '@astrojs/rss';
import { getPosts } from '../posts';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: 'Kameshwaran Ravichandran · Writing',
    description: 'Decision records from frontend platform and agentic systems work.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.date,
      link: `/writing/${post.id}/`,
    })),
  });
}
