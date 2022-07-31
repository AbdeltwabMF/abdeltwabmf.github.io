import Image from './Image'
import Link from './Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Conditional from '@/components/Conditional'

export default function Card (props) {
  const { slug, banner, title, description, stack, keywords, repository, website, deployment } = props

  return (
    <div className='p-4 md md:w-1/2' style={{ maxWidth: '544px' }}>
      <div
        className={`${
        banner && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        <Conditional condition={!!banner}>
          <Link href={`/projects/${slug}`} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={banner}
              className='object-cover object-center md:h-36 lg:h-48'
              width={544}
              height={306}
            />
          </Link>
        </Conditional>
        <div className='p-6'>
          <h2 className='mb-3 text-2xl font-bold tracking-tight leading-8'>
            <Link href={`/projects/${slug}`} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          </h2>
          <p className='mb-3 text-gray-500 prose max-w-none dark:text-gray-400'>{description}</p>
          <Conditional condition={stack.length > 0}>
            <div className='flex flex-wrap justify-start mb-4'>
              {stack.map((keyword, index) => (
                <p className='px-1 m-1 text-blue-700 bg-blue-100 border border-blue-300 rounded' key={index}>{keyword}</p>
              ))}
            </div>
          </Conditional>
          <Conditional condition={keywords.length > 0}>
            <div className='flex flex-wrap justify-start mb-4'>
              {keywords.map((keyword, index) => (
                <p className='px-1 m-1 text-green-700 bg-green-100 border border-green-300 rounded dark:text-green-700 dark:border-green-400 dark:bg-green-100' key={index}>{keyword}</p>
              ))}
            </div>
          </Conditional>
          <div className='flex flex-row mb-4'>
            <Conditional condition={!!repository}>
              <p className='px-4 py-1 mr-2 text-center text-gray-600 bg-gray-100 border border-gray-200 dark:bg-gray-900 rounded-md dark:border-gray-700 dark:text-gray-100'>
                <a
                  href={repository}
                  aria-label={`Link to ${repository}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center'
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className='inline-block w-5 h-5 mr-2 align-middle fill-current'
                  />
                  <span>Source Code</span>
                </a>
              </p>
            </Conditional>
            <Conditional condition={!!website}>
              <p className='px-4 py-1 text-center text-gray-600 bg-gray-100 border border-gray-200 dark:bg-gray-900 rounded-md dark:border-gray-700 dark:text-gray-100'>
                <a
                  href={website}
                  aria-label={`Link to ${website}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center'
                >
                  <FontAwesomeIcon
                    icon={faUpRightFromSquare}
                    className='inline-block w-5 h-5 mr-2 align-middle fill-current'
                  />
                  <span>Live</span>
                </a>
              </p>
            </Conditional>
          </div>
          <Link
            href={`/projects/${slug}`}
            className='text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
