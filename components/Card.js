import Image from './Image'
import Link from './Link'
import GitHub from '../public/icons/github.svg'

export default function Card (props) {
  const { banner, title, description, tools, keywords, source, link, href } = props

  return (
    <div className='p-4 md md:w-1/2' style={{ maxWidth: '544px' }}>
      <div
        className={`${
        banner && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        {banner &&
        (href
          ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={banner}
                className='object-cover object-center md:h-36 lg:h-48'
                width={544}
                height={306}
              />
            </Link>
            )
          : (
            <Image
              alt={title}
              src={banner}
              className='object-cover object-center md:h-36 lg:h-48'
              width={544}
              height={306}
            />
            ))}
        <div className='p-6'>
          <h2 className='mb-3 text-2xl font-bold tracking-tight leading-8'>
            {href
              ? (
                <Link href={href} aria-label={`Link to ${title}`}>
                  {title}
                </Link>
                )
              : (
                  title
                )}
          </h2>
          <p className='mb-3 text-gray-500 prose max-w-none dark:text-gray-400'>{description}</p>
          {tools && (
            <div className='flex flex-wrap justify-start mb-4'>
              {tools.map((keyword, index) => (
                <p className='px-1 m-1 text-blue-700 bg-blue-100 border border-blue-300 rounded' key={index}>{keyword}</p>
              ))}
            </div>
          )}
          {keywords && (
            <div className='flex flex-wrap justify-start mb-4'>
              {keywords.map((keyword, index) => (
                <p className='px-1 m-1 text-green-700 bg-green-100 border border-green-300 rounded dark:text-green-700 dark:border-green-400 dark:bg-green-100' key={index}>{keyword}</p>
              ))}
            </div>
          )}
          <div className='flex flex-row mb-4'>
            {source &&
              <p className='px-4 py-1 mr-2 text-center text-gray-600 bg-gray-100 border border-gray-200 dark:bg-gray-900 rounded-md dark:border-gray-700 dark:text-gray-100'>
                <a
                  href={source}
                  aria-label={`Link to ${source}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center'
                >
                  <GitHub className='inline-block w-5 h-5 mr-2 align-middle fill-current' />
                  <span>Source Code</span>
                </a>
              </p>}
            {link &&
              <p className='px-4 py-1 text-center text-gray-600 bg-gray-100 border border-gray-200 dark:bg-gray-900 rounded-md dark:border-gray-700 dark:text-gray-100'>
                <a
                  href={link}
                  aria-label={`Link to ${link}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center'
                >
                  <span>Live &rarr;</span>
                </a>
              </p>}
          </div>
          {href && (
            <Link
              href={href}
              className='text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
              aria-label={`Link to ${title}`}
            >
              Learn more &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
