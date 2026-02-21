import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import { ReactCusdis } from 'react-cusdis'
import siteMetadata from '@/data/siteMetadata'

export default function Cusdis({ frontMatter }) {
  const { theme, resolvedTheme } = useTheme()
  const [showComments, setShowComments] = useState(false)
  const currentTheme = theme === 'dark' || resolvedTheme === 'dark' ? 'dark' : 'light'

  const { appId, host } = siteMetadata?.comment?.cusdisConfig

  if (!appId) {
    return (
      <div className="mx-auto mt-12 max-w-2xl rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-800/50">
        <svg
          className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
          Comments Not Configured
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Please configure your Cusdis App ID in the environment variables to enable comments.
        </p>
        <a
          href="https://cusdis.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Get started with Cusdis →
        </a>
      </div>
    )
  }

  return (
    <div className="mx-auto mt-12 max-w-3xl">
      {/* Section Header */}
      <div className="mb-8 border-b border-gray-200 pb-4 dark:border-gray-700">
        <h2 className="flex items-center text-2xl font-bold text-gray-900 dark:text-gray-100">
          <svg
            className="mr-3 h-7 w-7 text-blue-600 dark:text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
          Comments
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Share your thoughts and join the discussion
        </p>
      </div>

      {/* Load Comments Button or Widget */}
      {!showComments ? (
        <button
          onClick={() => setShowComments(true)}
          className="group relative w-full overflow-hidden rounded-xl border-2 border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 text-center shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md dark:border-gray-700 dark:from-gray-800 dark:to-gray-900 dark:hover:border-blue-600"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-400/10 dark:to-indigo-400/10" />
          <div className="relative">
            <svg
              className="mx-auto h-12 w-12 text-blue-600 transition-transform duration-300 group-hover:scale-110 dark:text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="mt-4 block text-lg font-semibold text-gray-900 dark:text-gray-100">
              Load Comments
            </span>
            <span className="mt-1 block text-sm text-gray-600 dark:text-gray-400">
              Click to view and leave comments
            </span>
          </div>
        </button>
      ) : (
        <div className="cusdis-wrapper rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800/50">
          <ReactCusdis
            attrs={{
              host: host || 'https://cusdis.com',
              appId: appId,
              pageId: frontMatter.slug,
              pageUrl: `${siteMetadata.siteUrl}/blog/${frontMatter.slug}`,
              pageTitle: frontMatter.title,
              theme: currentTheme,
            }}
            lang="en"
          />
        </div>
      )}

      {/* Privacy Notice */}
      <div className="mt-6 flex items-start space-x-2 rounded-lg bg-gray-50 p-4 dark:bg-gray-800/30">
        <svg
          className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          This site uses Cusdis, a privacy-friendly commenting system. Your data stays private and
          is never shared with third parties. No tracking, no ads.{' '}
          <a
            href="https://cusdis.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            Learn more
          </a>
        </p>
      </div>
    </div>
  )
}
