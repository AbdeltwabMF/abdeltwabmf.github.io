import { PageSEO } from '@/components/SEO'
import { H1, H3 } from '@/components/Form'
import siteMetadata from '@/data/siteMetadata'
import Twemoji from '@/components/Twemoji'

export default function Credit () {
  return (
    <>
      <PageSEO title={`Credits - ${siteMetadata.author}`} description='Acknowledgements and Credits' />
      <div className='flex flex-col mt-12'>
        <H1 className='text-center text-neutral-600'>
          <span className='pr-4'>Acknowledgements</span>
          <Twemoji emoji='folded-hands' />
        </H1>
        <p className='text-xl text-center text-slate-600 dark:text-slate-500'>
          This website wouldn't be possible without the amazing work of these individuals and projects.
        </p>
        <ul className='mt-8 space-y-4 text-neutral-600 dark:text-neutral-500'>
          <li>
            <a
              href='https://www.timlrx.com/about'
              className='inline-block fill-current text-sky-600 dark:text-sky-400'
              rel='noopener noreferrer'
              target='_blank'
            >
              <H3>Timothy Lin</H3>
            </a>
            {' '}— for creating the excellent{' '}
            <a
              href='https://github.com/timlrx/tailwind-nextjs-starter-blog'
              className='inline-block fill-current text-sky-600 dark:text-sky-400'
              rel='noopener noreferrer'
              target='_blank'
            >
              Tailwind Next.js Starter Blog
            </a>
            , a lightweight and highly customizable blog template.
          </li>
          <li>
            <a
              href='https://github.com/abdennour'
              className='inline-block fill-current text-sky-600 dark:text-sky-400'
              rel='noopener noreferrer'
              target='_blank'
            >
              <H3>Abdennour</H3>
            </a>
            {' '}— for the{' '}
            <a
              href='https://github.com/abdennour/hijri-date'
              className='inline-block fill-current text-sky-600 dark:text-sky-400'
              rel='noopener noreferrer'
              target='_blank'
            >
              hijri-date
            </a>
            {' '}library, enabling seamless Hijri to Gregorian date conversion.
          </li>
        </ul>
      </div>
    </>
  )
}
