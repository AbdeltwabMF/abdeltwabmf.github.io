import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import Mail from '../public/icons/mail.svg'
import Twitter from '../public/icons/twitter.svg'
import Youtube from '../public/icons/youtube.svg'
import Linkedin from '../public/icons/linkedin.svg'
import GitHub from '../public/icons/github.svg'

export default function Footer () {
  return (
    <footer>
      <div className='flex flex-col items-center mt-12'>
        <div className='flex mb-3 space-x-6'>
          <a
            className='text-sm text-gray-500 transition hover:text-gray-600'
            target='_blank'
            rel='noopener noreferrer'
            href={`mailto:${siteMetadata.email}`}
          >
            <Mail
              className={`fill-current text-gray-700 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-600 h-${8} w-${8}`}
            />
          </a>
          <a
            className='text-sm text-gray-500 transition hover:text-gray-600'
            target='_blank'
            rel='noopener noreferrer'
            href={siteMetadata.twitter}
          >
            <Twitter
              className={`fill-current text-gray-700 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-600 h-${8} w-${8}`}
            />
          </a>
          <a
            className='text-sm text-gray-500 transition hover:text-gray-600'
            target='_blank'
            rel='noopener noreferrer'
            href={siteMetadata.youtube}
          >
            <Youtube
              className={`fill-current text-gray-700 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-600 h-${8} w-${8}`}
            />
          </a>
          <a
            className='text-sm text-gray-500 transition hover:text-gray-600'
            target='_blank'
            rel='noopener noreferrer'
            href={siteMetadata.linkedin}
          >
            <Linkedin
              className={`fill-current text-gray-700 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-600 h-${8} w-${8}`}
            />
          </a>
          <a
            className='text-sm text-gray-500 transition hover:text-gray-600'
            target='_blank'
            rel='noopener noreferrer'
            href={siteMetadata.github}
          >
            <GitHub
              className={`fill-current text-gray-700 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-600 h-${8} w-${8}`}
            />
          </a>
        </div>
        <div className='flex items-center mb-2 font-mono text-sm text-teal-700 space-x-2 dark:text-teal-600'>
          <div>
            <Image
              src='/favicon-32x32.png'
              alt='logo'
              width='24px'
              height='24px'
              className='align-middle'
            />
          </div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{' • '}</div>
          <Link href='/'>{siteMetadata.author}</Link>
        </div>
      </div>
    </footer>
  )
}
