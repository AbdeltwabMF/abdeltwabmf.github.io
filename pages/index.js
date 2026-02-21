import SocialIcon from '@/components/SocialIcons'
import siteMetadata from '@/data/siteMetadata'
import { H1, H2, H3 } from '@/components/Form'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'
import Twemoji from '@/components/Twemoji'
import formatDate from '@/lib/utils/formatDate'
import { getAllFilesFrontMatter } from '@/lib/mdx'

const MAX_DISPLAY = 5
export async function getStaticProps () {
  const tags = await getAllTags('blog')
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { tags, posts } }
}

export default function Home ({ tags, posts }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={`Home - ${siteMetadata.author}`} description='Who am I' />
      <div className='flex flex-col mt-12'>
        <H1 className='mt-8 mb-4'>Abdeltwab M. Fakhry</H1>

        <p className='mt-6 text-lg text-gray-700 dark:text-gray-300'>
          I make stuff and sometimes write about it.
        </p>

        <div className='divide-y divide-gray-200 dark:divide-gray-700'>
          <H2 className='mt-12 mb-3'>Recent articles</H2>
          <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { slug, date, title, summary, tags, locale } = frontMatter
              const headerFont = locale === 'ar-EG' ? 'font-baloob' : ''
              return (
                <li key={slug} className='py-8'>
                  <article>
                    <div className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
                      <dl>
                        <dt className='sr-only'>Published on</dt>
                        <dd className='text-base font-medium text-gray-500 leading-6 dark:text-gray-400'>
                          <time dateTime={date}>{formatDate(date)}</time>
                        </dd>
                      </dl>
                      <div className='space-y-5 xl:col-span-3'>
                        <div className='space-y-6'>
                          <div>
                            <H3 className='font-bold tracking-tight leading-8'>
                              <Link
                                href={`/blog/${slug}`}
                                className={'text-gray-900 dark:text-gray-100 ' + headerFont}
                              >
                                {title}
                              </Link>
                            </H3>
                            <div className='flex flex-wrap'>
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className='text-gray-500 prose max-w-none dark:text-gray-400'>
                            {summary}
                          </div>
                        </div>
                        <div className='text-base font-medium leading-6'>
                          <Link
                            href={`/blog/${slug}`}
                            className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                            aria-label={`Read "${title}"`}
                          >
                            Read more &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
        {posts.length > MAX_DISPLAY && (
          <div className='flex justify-end text-base font-medium leading-6'>
            <Link
              href='/blog'
              className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
              aria-label='all posts'
            >
              All Posts &rarr;
            </Link>
          </div>
        )}

      </div>
    </>
  )
}
