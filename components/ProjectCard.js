import Image from './Image'
import Link from './Link'

const ProjectCard = ({ title, description, imgSrc, href, tags, stats, highlights }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500">
      {/* Project Image or Gradient Placeholder */}
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 dark:from-blue-600 dark:via-indigo-600 dark:to-purple-700">
        {imgSrc ? (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            width={544}
            height={306}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <svg
              className="h-20 w-20 text-white opacity-80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title and Stats */}
        <div className="mb-3 flex items-start justify-between">
          <h3 className="text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
            <Link
              href={href}
              className="hover:text-blue-600 dark:hover:text-blue-400"
              aria-label={`Link to ${title}`}
            >
              {title}
            </Link>
          </h3>
          {stats && (
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              {stats.stars && <span>{stats.stars}</span>}
            </div>
          )}
        </div>

        {/* Tags */}
        {tags && (
          <div className="mb-3 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Description */}
        <p className="prose mb-4 max-w-none text-gray-600 dark:text-gray-400">
          {description}
        </p>

        {/* Highlights */}
        {highlights && highlights.length > 0 && (
          <div className="mb-4 space-y-1">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start">
                <svg
                  className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-gray-700 dark:text-gray-300">{highlight}</span>
              </div>
            ))}
          </div>
        )}

        {/* Footer with badges */}
        {stats && (
          <div className="flex items-center space-x-4 border-t border-gray-200 pt-4 text-sm text-gray-600 dark:border-gray-700 dark:text-gray-400">
            {stats.language && (
              <span className="flex items-center">
                <span className="mr-1 h-3 w-3 rounded-full bg-blue-500"></span>
                {stats.language}
              </span>
            )}
            {stats.license && (
              <span className="flex items-center">
                <svg
                  className="mr-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
                {stats.license}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Hover Effect */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full"></div>
    </div>
  )
}

export default ProjectCard
