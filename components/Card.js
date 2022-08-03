import Image from './Image'
import Link from './Link'
import Conditional from '@/components/Conditional'
import { useState, useEffect } from 'react'

const getRepoStars = async (repo) => {
  const data = await fetch(`https://api.github.com/repos/AbdeltwabMF/${repo}`, {
    auth: { user: 'AbdeltwabMF', password: `${process.env.REPO_STARS_PERSONAL_ACCESS_TOKEN}` }
  })
  const json = await data.json()
  return json.stargazers_count
}

export default function Card (props) {
  const { banner, title, description, href, repository } = props
  const [stars, setStars] = useState(0)
  console.log(repository)

  useEffect(() => {
    const fetchData = async () => {
      const stars = await getRepoStars(repository)
      setStars(stars)
    }
    fetchData()
  }, [repository])

  return (
    <div className='p-4 md md:w-1/2' style={{ maxWidth: '544px' }}>
      <div
        className={`${
        banner && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        <Conditional condition={!!banner}>
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={banner}
              priority
              className='object-cover object-center md:h-36 lg:h-48'
              width={544}
              height={306}
            />
          </Link>
        </Conditional>
        <div className='p-6'>
          <h2 className='mb-3 text-2xl font-bold tracking-tight leading-8 line-clamp-1 '>
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          </h2>
          <p className='mb-3 text-gray-500 prose max-w-none line-clamp-2 dark:text-gray-400'>{description}</p>
          <p className='mb-3 text-gray-500 prose max-w-none line-clamp-2 dark:text-gray-400'>{stars}</p>
          <Link
            href={href}
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
