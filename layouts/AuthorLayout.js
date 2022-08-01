import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

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
            <h3 className='pt-4 pb-2 text-2xl font-bold tracking-tight leading-8'>
              {name}
            </h3>
            <div className='flex flex-col items-center justify-center text-gray-500 dark:text-gray-400'>
              {occupation.map((item, index) => (
                <span className={`text-${index + 1}x`} key={index}>{item}</span>
              ))}
            </div>
            <div className='text-gray-500 dark:text-gray-400'>{company}</div>
          </div>
          <div className='pt-8 pb-8 prose max-w-none dark:prose-dark xl:col-span-2'>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
