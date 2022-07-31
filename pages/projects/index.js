import siteMetadata from '@/data/siteMetadata'
import projects from '@/data/projects'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Projects () {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className='divide-y divide-gray-200 dark:divide-gray-700'>
        <div className='pt-6 pb-8 space-y-2 md:space-y-5'>
          <h1 className='text-3xl font-extrabold tracking-tight text-gray-900 leading-9 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
            Projects
          </h1>
        </div>
        <div className='container py-12'>
          <div className='flex flex-wrap -m-4'>
            {projects.map((d) => (
              <Card
                key={d.title}
                slug={d.slug}
                title={d.title}
                description={d.description}
                banner={d.banner}
                stack={d.stack}
                keywords={d.keywords}
                screenshots={d.screenshots}
                repository={d.repository}
                website={d.website}
                deployment={d.deployment}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
