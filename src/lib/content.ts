import { getCollection, type CollectionEntry } from 'astro:content';

export const slugFromId = (id: string) =>
  id
    .split('/')
    .at(-1)
    ?.replace(/\.(md|mdx)$/, '') ?? id;
export const localeFromId = (id: string) => (id.split('/')[0] === 'ar' ? 'ar' : 'en');
export const articleHref = (entry: CollectionEntry<'articles'>) =>
  `/blog/${entry.data.locale}/${slugFromId(entry.id)}/`;
export const projectHref = (entry: CollectionEntry<'projects'>) =>
  `/projects/${slugFromId(entry.id)}/`;
export const projectPrimaryHref = (entry: CollectionEntry<'projects'>) =>
  entry.data.homepage ?? entry.data.repository ?? projectHref(entry);

export async function getPublishedArticles(locale?: 'en' | 'ar') {
  const entries = await getCollection(
    'articles',
    ({ data }) => !data.draft && (!locale || data.locale === locale)
  );
  return entries.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}

export async function getProjects() {
  const entries = await getCollection('projects');
  return entries.sort(
    (a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title)
  );
}

export const formatDate = (date: Date, locale: 'en' | 'ar' = 'en') =>
  new Intl.DateTimeFormat(locale === 'ar' ? 'ar-EG' : 'en-US', { dateStyle: 'medium' }).format(
    date
  );
