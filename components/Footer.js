import Link from './Link'
import Image from './Image'
import siteMetadata from '@/data/siteMetadata'
import SocialIconLink from '@/components/SocialIconsLink'

export default function Footer () {
  return (
    <footer className='mt-12'>
      <div className='flex flex-col items-center justify-center mt-4'>
        <div className='flex flex-row flex-wrap items-center justify-center mb-4 space-x-3'>
          <SocialIconLink kind='rss' href={siteMetadata.rss} size={6} color='yellow' />
          <SocialIconLink kind='email' href={`mailto:${siteMetadata.email}`} size={6} color='purple' />
          <SocialIconLink kind='telegram' href={siteMetadata.telegram} size={6} color='blue' />
          <SocialIconLink kind='github' href={siteMetadata.github} size={6} color='neutral' />
        </div>
        <div className='flex items-center mb-6 font-mono text-teal-700 text-md space-x-2 dark:text-teal-600'>
          <Image
            src={siteMetadata.siteLogo}
            alt='logo'
            width='32px'
            height='32px'
            className='align-middle'
          />
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div className='sr-only'>{' • '}</div>
          <Link href='/about'>{siteMetadata.author}</Link>
        </div>
      </div>
    </footer>
  )
}
