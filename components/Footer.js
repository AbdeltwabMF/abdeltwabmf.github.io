import Link from './Link'
import Image from './Image'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/SocialIcons'

export default function Footer () {
  return (
    <footer className='mt-12 border-t'>
      <div className='flex flex-col items-center mt-4'>
        <div className='flex flex-row items-center justify-center mb-4 space-x-6'>
          <SocialIcon kind='rss' href={siteMetadata.rss} size={6} />
          <SocialIcon kind='email' href={siteMetadata.email} size={6} />
          <SocialIcon kind='github' href={siteMetadata.github} size={6} />
          <SocialIcon kind='youtube' href={siteMetadata.youtube} size={6} />
          <SocialIcon kind='linkedin' href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind='twitter' href={siteMetadata.twitter} size={6} />
          <SocialIcon kind='telegram' href={siteMetadata.telegram} size={6} />
        </div>

        <div className='flex items-center mb-2 font-mono text-sm text-teal-700 space-x-2 dark:text-teal-600'>
          <div>
            <Image
              src={siteMetadata.siteLogo}
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
