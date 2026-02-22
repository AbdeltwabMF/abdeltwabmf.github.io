import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import ProjectCard from '@/components/ProjectCard'
import { H1 } from '@/components/Form'
import Twemoji from '@/components/Twemoji'

export default function Projects() {
  return (
    <>
      <PageSEO
        title={`Projects - ${siteMetadata.author}`}
        description="A showcase of my open-source projects and contributions"
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* Header */}
        <div className="space-y-4 pb-8 pt-6 md:space-y-5">
          <H1>
            <span className="pr-4">Projects</span>
            <Twemoji emoji="rocket" />
          </H1>
          <p className="text-lg leading-7 text-gray-600 dark:text-gray-400">
            Stuff I've built and actually use. Mostly tools that scratch my own itch.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          {/* Empty State / Coming Soon */}
          {projectsData.length === 0 && (
            <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/50">
              <Twemoji emoji="hammer-and-wrench" size="4xl" />
              <h3 className="mt-4 text-xl font-semibold text-gray-700 dark:text-gray-300">
                More Coming Soon
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Working on some new stuff. Will update this when they're ready.
              </p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="py-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Got an idea or want to collaborate?{' '}
            <a
              href={`mailto:${siteMetadata.email}`}
              className="font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Drop me an email
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
