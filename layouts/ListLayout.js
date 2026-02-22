import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import { H1 } from '@/components/Form'
import Twemoji from '@/components/Twemoji'

export default function ListLayout ({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className='divide-y divide-gray-200 dark:divide-gray-700'>
        <div className='pt-6 pb-8 space-y-4 md:space-y-5'>
          <H1>
            <span className='pr-4'>{title}</span>
            <Twemoji emoji="pencil" />
          </H1>
          <div className='relative w-full'>
            <input
              aria-label='Search articles'
              type='text'
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder='Search articles'
              className='block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100'
            />
            <svg
              className='absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </div>
        </div>
        <ul>
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags, locale } = frontMatter
            const headerFont = locale === 'ar-EG' ? 'font-baloob' : ''
            const contentFont = locale === 'ar-EG' ? 'font-kufi' : ''

            return (
              <li key={slug} className='py-4'>
                <article className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
                  <dl>
                    <dt className='sr-only'>Published on</dt>
                    <dd className='text-base font-medium text-gray-500 leading-6 dark:text-gray-400'>
                      <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                  </dl>
                  <div className='space-y-3 xl:col-span-3'>
                    <div>
                      <h3 className={'text-2xl font-bold tracking-tight leading-8 ' + headerFont}>
                        <Link href={`/blog/${slug}`} className='text-gray-900 dark:text-gray-100'>
                          {title}
                        </Link>
                      </h3>
                      <div className='flex flex-wrap'>
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                    <div className='text-gray-500 prose max-w-none dark:text-gray-400'>
                      {summary}
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
