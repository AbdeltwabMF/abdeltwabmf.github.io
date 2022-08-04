import { PageSEO } from '@/components/SEO'
import { H1 } from '@/components/Form'
import siteMetadata from '@/data/siteMetadata'

export default function Credit () {
  return (
    <>
      <PageSEO title={`Credit - ${siteMetadata.author}`} description='Acknowledgement' />
      <div className='flex flex-col mt-12'>
        <H1 className='text-center text-neutral-600'>Acknowledgement 🤝</H1>
        <p className='text-xl text-center text-slate-600 dark:text-slate-500'>
          I would like to thank the all the people who have helped me to create this website.
        </p>
        <ul className='mt-8 text-neutral-600 dark:text-neutral-500'>
          <li>
            <a
              href='https://unsplash.com/'
              className='inline-block fill-current text-sky-600 dark:text-sky-400'
              rel='noopener noreferrer'
              target='_blank'
            >Unsplash
            </a>, {' '}
            <a
              href='https://wallhaven.cc/'
              className='inline-block fill-current text-sky-600 dark:text-sky-400'
              rel='noopener noreferrer'
              target='_blank'
            >Wallhaven
            </a> - for the images used on this website.
          </li>
          <li>
            <a
              href='https://www.timlrx.com/about'
              className='inline-block fill-current text-sky-600 dark:text-sky-400'
              rel='noopener noreferrer'
              target='_blank'
            >Timothy Lin
            </a> - for the lightweight and easy-to-customize {' '}
            <a
              href='https://github.com/timlrx/tailwind-nextjs-starter-blog'
              className='inline-block fill-current text-sky-600 dark:text-sky-400'
              rel='noopener noreferrer'
              target='_blank'
            >blog starter
            </a>.
          </li>
          <li>
            <a
              href='https://github.com/abdennour'
              className='inline-block fill-current text-sky-600 dark:text-sky-400'
              rel='noopener noreferrer'
              target='_blank'
            >Abdennour
            </a> - for {' '}
            <a
              href='https://github.com/abdennour/hijri-date'
              className='inline-block fill-current text-sky-600 dark:text-sky-400'
              rel='noopener noreferrer'
              target='_blank'
            >hijri-date
            </a>
            {' '} to gregorian converter.
          </li>

        </ul>
      </div>
    </>
  )
}
