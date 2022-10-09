import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function FourZeroFour () {
  return (
    <>
      <PageSEO title={`Page Not Found - ${siteMetadata.title}`} />
      <div className='flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6'>
        <div className='pt-6 pb-8 space-x-2 md:space-y-5'>
          <h1 className='text-6xl font-extrabold tracking-tight text-gray-900 leading-9 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14'>
            404
          </h1>
        </div>
        <div className='max-w-md'>
          <p className='mb-4 text-xl font-bold leading-normal md:text-2xl'>
            Sorry we couldn't find this page.
          </p>
          <Link href='/'>
            <button className='inline px-4 py-2 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-lg shadow focus:shadow-outline-teal leading-5 transition-colors duration-150 hover:bg-teal-700 focus:outline-none dark:hover:bg-teal-500'>
              Back to homepage
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
