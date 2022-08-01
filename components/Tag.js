import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className='mr-3 font-medium text-md text-sky-600 hover:text-sky-800 dark:hover:text-sky-400'>
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
