import SocialIcon from '@/components/SocialIcons'
import siteMetadata from '@/data/siteMetadata'
import { H1, H2, H3 } from '@/components/Form'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'
import NewsletterForm from '@/components/NewsletterForm'
import Twemoji from '@/components/Twemoji'
import TypedBios from '@/components/TypedBios'
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
        <h1 className='mt-8 mb-4 font-bold text-center text-transparent text-sky-800 dark:text-transparent bg-gradient-to-r dark:bg-gradient-to-r from-sky-800 via-teal-400 to-violet-600 dark:from-sky-800 dark:via-teal-400 dark:to-violet-600 bg-clip-text lg:text-4xl sm:text-2xl'>Hi, I'm Abd El-Twab M. Fakhry (aka AMF) {'   '}
          <Twemoji emoji='waving-hand' className='pl-4 mt-4' />
        </h1>
        <TypedBios className='mt-2 text-gray-600 me-2 dark:text-gray-400' />
        <p className='mt-4 text-gray-600 me-2 dark:text-gray-400'>
          <span className='text-2xl'>A</span>nd this is my little corner on the web. I
          am Egyptian,{' '}
          <a
            target='_blank'
            href='https://en.wikipedia.org/wiki/Al-Azhar_University'
            rel='noopener noreferrer'
            className='text-sky-400 dark:text-sky-400'
          >
            Azhari
          </a>
          , and live in Egypt
        </p>
        <p className='mt-6 text-gray-600 me-2 dark:text-gray-400'>
          I am an experienced C/C++, Java, Python programmer with working knowledge of Linux and
          advanced knowledge of data structures and algorithms. I am Free Software Enthusiast. Just
          another programmer with too many opinions. I am not the best, but I’m pretty good.
        </p>
        <p className='mt-6 text-gray-600 me-2 dark:text-gray-400'>
          I love reading history books, camping in a remote place, playing football. In my copious
          free time I enjoy configuring my GNU/linux, solving algorithmic problems, and giving back
          to the free and open-source community through engaging in their projects or even
          developing new ones.
        </p>

        <p className='mt-6 text-gray-600 me-2 dark:text-gray-400'>
          I’m reachable through
          <a className='inline-block px-1 text-sky-600 dark:text-sky-500 text-md' href={`mailto:${siteMetadata.email}`}>
            <SocialIcon kind='email' color='blue' size='4' /> E-Mail
          </a>
          ; You can use my
          <a href='/documents/amf-key.gpg' className='inline-block px-1 text-sky-600 dark:text-sky-500'> PGP-Key</a>
          if it’s top-secret.
        </p>

        <H2 className='mt-12 mb-3 text-sky-800'>Why this webpage exist?</H2>
        <ul className='text-gray-600 list-disc list-inside me-2 dark:text-gray-400'>
          <li>
            This place is a home for all my thoughts, philosophy, publications, experiences, and
            work.
          </li>
          <li>
            A place where I am in control, no tracking, no censorship, no manipulations, no nudity
            ads.
          </li>
          <li>A place where my words don't get mixed up with noise.</li>
        </ul>

        <H2 className='mt-12 mb-3 text-sky-800'>My articles by topics</H2>
        <div className='flex flex-wrap'>
          {Object.keys(tags).length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            return (
              <div key={t} className='mr-3'>
                <Tag text={t} />
                <Link
                  href={`/tags/${kebabCase(t)}`}
                  className='-ml-2 text-sm font-semibold text-gray-600 dark:text-gray-300'
                >
                  {/* {` (${tags[t]})`} */}
                </Link>
              </div>
            )
          })}
        </div>

        <div className='divide-y divide-gray-200 dark:divide-gray-700'>
          <H2 className='mt-12 mb-3 text-sky-800'>Recent articles</H2>
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

        {siteMetadata.newsletter.provider !== '' && (
          <div className='flex items-center justify-center mt-12'>
            <NewsletterForm />
          </div>
        )}

      </div>
    </>
  )
}
