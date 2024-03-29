import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import SocialIconLink from '@/components/SocialIconsLink'
import { H2, H3, H4 } from '@/components/Form'
import Twemoji from '@/components/Twemoji'

export default function AuthorLayout ({ children, frontMatter }) {
  const { name, occupation, company } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className='divide-y divide-gray-200 dark:divide-gray-700'>
        <div className='pt-4 pb-4 space-y-2 md:space-y-5'>
          <h1 className='font-extrabold tracking-tight text-gray-900 leading-9 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
            About
          </h1>
        </div>
        <div className='items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
          <div className='flex flex-col items-center pt-8'>
            <Image
              src={siteMetadata.avatar}
              alt='avatar'
              width='256px'
              height='256px'
              className='w-48 h-48 rounded-full'
            />
            <H4 className='pt-4 pb-2'>
              {name}
            </H4>
            <div className='flex flex-col items-center justify-center text-gray-500 dark:text-gray-400'>
              {occupation.map((item, index) => (
                <span className={`text-${index + 1}x`} key={index}>{item}</span>
              ))}
            </div>
            <div className='text-gray-500 dark:text-gray-400'>{company}</div>
          </div>
          <div className='pt-8 pb-8 prose max-w-none dark:prose-dark xl:col-span-2'>
            <H2 className='mt-8 mb-4 text-center'>Hi, As-salamu alaykum {'   '}
              <Twemoji emoji='waving-hand' className='pl-4 mt-4' />
            </H2>
            {children}

            <H3 className='pt-8 pb-2 text-2xl font-bold tracking-tight leading-8'>
              Social
            </H3>
            <div className=''>
              <SocialIconLink
                href={siteMetadata.twitter}
                rules='no-underline mx-2'
                kind='twitter'
                color='neutral'
                size='8'
              />
              <SocialIconLink
                href={siteMetadata.linkedin}
                rules='no-underline mx-2'
                kind='linkedin'
                color='neutral'
                size='8'
              />
              <SocialIconLink
                href={siteMetadata.github}
                rules='no-underline mx-2'
                kind='github'
                color='neutral'
                size='8'
              />
              <SocialIconLink
                href={`mailto:${siteMetadata.email}`}
                rules='no-underline mx-2'
                kind='email'
                color='neutral'
                size='8'
              />
              <SocialIconLink
                href={siteMetadata.telegram}
                rules='no-underline mx-2'
                kind='telegram'
                color='neutral'
                size='8'
              />
              <SocialIconLink
                href={siteMetadata.youtube}
                rules='no-underline mx-2'
                kind='youtube'
                color='neutral'
                size='8'
              />
              <SocialIconLink
                href={siteMetadata.researchgate}
                rules='no-underline mx-2'
                kind='researchgate'
                color='neutral'
                size='8'
              />
              <SocialIconLink
                href={siteMetadata.docker}
                rules='no-underline mx-2'
                kind='docker'
                color='neutral'
                size='8'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
