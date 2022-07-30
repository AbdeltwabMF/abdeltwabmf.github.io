import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/SocialIcons'
import Image from 'next/image'

export default function Footer () {
  return (
    <footer>
      <div className='flex flex-col items-center mt-16'>
        <div className='flex mb-5 space-x-8'>
          <SocialIcon kind='mail' href={`mailto:${siteMetadata.email}`} size='6' />
          <SocialIcon kind='github' href={siteMetadata.github} size='6' />
          <SocialIcon kind='facebook' href={siteMetadata.facebook} size='6' />
          <SocialIcon kind='youtube' href={siteMetadata.youtube} size='6' />
          <SocialIcon kind='linkedin' href={siteMetadata.linkedin} size='6' />
          <SocialIcon kind='twitter' href={siteMetadata.twitter} size='6' />
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
