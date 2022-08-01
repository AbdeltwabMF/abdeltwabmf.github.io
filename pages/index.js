import SocialIcon from '@/components/SocialIcons'
import siteMetadata from '@/data/siteMetadata'
import { H2, H3 } from '@/components/Form'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'

export async function getStaticProps () {
  const tags = await getAllTags('blog')

  return { props: { tags } }
}

export default function Home ({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={`Home - ${siteMetadata.author}`} description='Who am I' />
      <div className='flex flex-col mt-8'>
        <H2 className='text-center text-sky-800'>Hi, my name is Abd El-Twab M. Fakhry (amf) 👋 </H2>

        <p className='mt-3 me-2'>
          <span className='text-4xl text-blue-700'>A</span>nd this is my little corner on the web. I
          am Egyptian,{' '}
          <a
            target='_blank'
            href='https://en.wikipedia.org/wiki/Al-Azhar_University'
            rel='noopener noreferrer'
            className='text-indigo-400'
          >
            Azhari
          </a>
          , and live in Egypt
        </p>
        <p className='mt-2'>
          I am an experienced C/C++, Java, Python programmer with working knowledge of Linux and
          advanced knowledge of data structures and algorithms. I am Free Software Enthusiast. Just
          another programmer with too many opinions. I am not the best, but I’m pretty good.
        </p>
        <p className='mt-2'>
          I love reading history books, camping in a remote place, playing football. In my copious
          free time I enjoy configuring my GNU/linux, solving algorithmic problems, and giving back
          to the free and open-source community through engaging in their projects or even
          developing new ones.
        </p>

        <p className='mt-2'>
          <a className='inline-block px-1 text-sky-600' href={`mailto:${siteMetadata.email}`}>
            <SocialIcon kind='email' color='indigo' /> E-Mail
          </a>
          ; You can use my
          <a href='/documents/amf-key.gpg'> PGP-key</a>
          if it’s top-secret. I’m also reachable through my
          <a className='inline-block px-1 text-sky-600' href={siteMetadata.telegram}>
            <SocialIcon kind='telegram' /> Telegram
          </a>
          and
          <a className='inline-block px-1 text-sky-600' href={siteMetadata.twitter}>
            <SocialIcon kind='twitter' color='blue' /> Twitter
          </a>
          .
        </p>

        <H3 className='mt-6 mb-3 text-sky-800'>Why this webpage exist?</H3>
        <ul className='list-disc list-inside'>
          <li>
            This place is a home for all my thoughts, philosophy, publications, experiences and also
            work.
          </li>
          <li>
            A place where I am in control, no tracking, no censorship, no manipulations, no nudity
            ads.
          </li>
          <li>A place where my words don't get mixed up with noise.</li>
        </ul>

        <H3 className='mt-6 mb-3 text-sky-800'>My articles by topics</H3>
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
      </div>
    </>
  )
}
