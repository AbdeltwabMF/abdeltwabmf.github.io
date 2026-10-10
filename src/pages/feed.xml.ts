import rss from '@astrojs/rss';
import { getPublishedArticles, articleHref } from '../lib/content';
import { site } from '../data/site';
export async function GET() {
  const articles = await getPublishedArticles();
  return rss({
    title: `${site.name} — Writing`,
    description: site.description,
    site: site.url,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.publishedAt,
      link: articleHref(article),
      categories: article.data.tags
    }))
  });
}
