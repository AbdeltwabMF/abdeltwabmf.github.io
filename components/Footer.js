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
      <div className='flex flex-col items-center mt-16'>
        <div className='flex mb-5 space-x-6'>
          <a
            className='text-sm text-gray-500 transition hover:text-gray-600'
            target='_blank'
            rel='noopener noreferrer'
            href={`mailto:${siteMetadata.email}`}
          >
            <Mail
              className={`fill-current text-yellow-600 hover:text-yellow-700 dark:text-yellow-600 dark:hover:text-yellow-700 h-${8} w-${8}`}
            />
          </a>
          <a
            className='text-sm text-gray-500 transition hover:text-gray-600'
            target='_blank'
            rel='noopener noreferrer'
            href={siteMetadata.twitter}
          >
            <Twitter
              className={`fill-current text-blue-500 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-600 h-${8} w-${8}`}
            />
          </a>
          <a
            className='text-sm text-gray-500 transition hover:text-gray-600'
            target='_blank'
            rel='noopener noreferrer'
            href={siteMetadata.youtube}
          >
            <Youtube
              className={`fill-current text-red-600 hover:text-red-800 dark:text-red-600 dark:hover:text-red-700 h-${8} w-${8}`}
            />
          </a>
          <a
            className='text-sm text-gray-500 transition hover:text-gray-600'
            target='_blank'
            rel='noopener noreferrer'
            href={siteMetadata.linkedin}
          >
            <Linkedin
              className={`fill-current text-blue-700 hover:text-blue-800 dark:text-blue-600 dark:hover:text-blue-700 h-${8} w-${8}`}
            />
          </a>
          <a
            className='text-sm text-gray-500 transition hover:text-gray-600'
            target='_blank'
            rel='noopener noreferrer'
            href={siteMetadata.github}
          >
            <GitHub
              className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${8} w-${8}`}
            />
          </a>
        </div>
        <div className='flex mb-5 font-mono text-sm text-gray-500 space-x-2 dark:text-gray-400'>
          <div>
            <Image src='/favicon-32x32.png' alt='logo' width='20px' height='20px' />
          </div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{' • '}</div>
          <Link href='/'>{siteMetadata.author}</Link>
        </div>
      </div>
    </footer>
  )
}
