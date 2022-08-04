import SocialIcon from '@/components/SocialIcons'
import siteMetadata from '@/data/siteMetadata'
import { H1, H2 } from '@/components/Form'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'
import NewsletterForm from '@/components/NewsletterForm'
import Twemoji from '@/components/Twemoji'
import TypedBios from '@/components/TypedBios'

export async function getStaticProps () {
  const tags = await getAllTags('blog')

  return { props: { tags } }
}

export default function Home ({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={`Home - ${siteMetadata.author}`} description='Who am I' />
      <div className='flex flex-col mt-12'>
        <H1 className='text-center text-sky-800'>Hi, I'm Abd El-Twab M. Fakhry (aka AMF) {'   '}
          <Twemoji emoji='waving-hand' className='pl-4' />
        </H1>
        <TypedBios className='mt-2 text-gray-600 me-2 dark:text-gray-400' />
        <p className='mt-3 text-gray-600 me-2 dark:text-gray-400'>
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
        <p className='mt-2 text-gray-600 me-2 dark:text-gray-400'>
          I am an experienced C/C++, Java, Python programmer with working knowledge of Linux and
          advanced knowledge of data structures and algorithms. I am Free Software Enthusiast. Just
          another programmer with too many opinions. I am not the best, but I’m pretty good.
        </p>
        <p className='mt-2 text-gray-600 me-2 dark:text-gray-400'>
          I love reading history books, camping in a remote place, playing football. In my copious
          free time I enjoy configuring my GNU/linux, solving algorithmic problems, and giving back
          to the free and open-source community through engaging in their projects or even
          developing new ones.
        </p>

        <p className='mt-2 text-gray-600 me-2 dark:text-gray-400'>
          I’m reachable through
          <a className='inline-block px-1 text-sky-600 dark:text-sky-500 text-md' href={`mailto:${siteMetadata.email}`}>
            <SocialIcon kind='email' color='blue' size='4' /> E-Mail
          </a>
          ; You can use my
          <a href='/documents/amf-key.gpg' className='inline-block px-1 text-sky-600 dark:text-sky-500'> PGP-Key</a>
          if it’s top-secret.
        </p>

        <H2 className='mt-6 mb-3 text-sky-800'>Why this webpage exist?</H2>
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

        <H2 className='mt-6 mb-3 text-sky-800'>My articles by topics</H2>
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
        {siteMetadata.newsletter.provider !== '' && (
          <div className='flex items-center justify-center mt-12'>
            <NewsletterForm />
          </div>
        )}
      </div>
    </>
  )
}
