import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/Comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Share from '@/components/Share'

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout ({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, date, title, tags, readingTime } = frontMatter
  const url = `${siteMetadata.siteUrl}/blog/${slug}`

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        <div className='xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700'>
          <header className='pt-6 xl:pb-6'>
            <div className='text-center space-y-1'>
              <dl className='space-y-10'>
                <div>
                  <dt className='sr-only'>Published on</dt>
                  <dd className='text-base font-medium text-gray-500 leading-6 dark:text-gray-400'>
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <p className='text-base text-gray-500 leading-6 dark:text-gray-400'>
                {readingTime?.text}
              </p>
              <Share title={title} url={url} />
            </div>
          </header>
          <div
            className='pb-8 divide-y divide-gray-200 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0'
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className='divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0'>
              <div className='pt-10 pb-8 prose max-w-none dark:prose-dark'>{children}</div>
              <Comments frontMatter={frontMatter} />
            </div>
            <footer>
              <div className='text-sm font-medium divide-gray-200 leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y'>
                {tags && (
                  <div className='py-4 xl:py-8'>
                    <h2 className='text-xs tracking-wide text-gray-500 dark:text-gray-400'>
                      Tags
                    </h2>
                    <div className='flex flex-wrap'>
                      {tags.map((tag, index) => (
                        <Tag key={index} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className='flex justify-between py-4 xl:block xl:space-y-8 xl:py-8'>
                    {prev && (
                      <div>
                        <h2 className='text-xs tracking-wide text-gray-500 dark:text-gray-400'>
                          Previous Article
                        </h2>
                        <div className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'>
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className='text-xs tracking-wide text-gray-500 dark:text-gray-400'>
                          Next Article
                        </h2>
                        <div className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'>
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className='pt-4 xl:pt-8'>
                <Link
                  href='/blog'
                  className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                >
                  &larr; Back to the blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
