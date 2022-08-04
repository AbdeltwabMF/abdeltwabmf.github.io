import Link from '@/components/Link'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import SocialIconLink from '@/components/SocialIconsLink'

export default function Footer () {
  return (
    <footer className='mt-12'>
      <div className='flex flex-col items-center justify-center mt-4'>
        <div className='flex flex-row flex-wrap items-center justify-center mb-4 space-x-3'>
          <SocialIconLink kind='rss' href={siteMetadata.rss} size={6} color='neutral' />
          <SocialIconLink kind='email' href={`mailto:${siteMetadata.email}`} size={6} color='neutral' />
          <SocialIconLink kind='telegram' href={siteMetadata.telegram} size={6} color='neutral' />
          <SocialIconLink kind='github' href={siteMetadata.github} size={6} color='neutral' />
        </div>
        <div className='flex items-center mb-4 font-mono text-neutral-700 text-md space-x-2 dark:text-neutral-600'>
          <Link
            href='/'
          >
            <Image
              src={siteMetadata.siteLogo}
              alt='logo'
              width='32px'
              height='32px'
              className='align-middle'
            />
          </Link>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div className='sr-only'>{' • '}</div>
          <Link href='/about'>{siteMetadata.author}</Link>
          <div className=''>{' • '}</div>
          <Link href='/credit' className='text-sky-600'>Credit</Link>
        </div>
      </div>
    </footer>
  )
}
