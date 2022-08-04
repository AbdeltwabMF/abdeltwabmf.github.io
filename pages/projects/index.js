import siteMetadata from '@/data/siteMetadata'
import projects from '@/data/projects'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

const projectRepo = projects.map(project => {
  return {
    slug: project.repository
  }
})

export const getStaticProps = async () => {
  const reposStars = await projectRepo.map(async project => {
    const data = await fetch(`https://api.github.com/repos/AbdeltwabMF/${project.slug}`, {
      auth: { user: 'AbdeltwabMF', password: `${process.env.PAT_GITHUB_REPO}` }
    })
    const json = await data.json()
    const repoStars = json.stargazers_count
    return {
      slug: project.slug,
      repoStars
    }
  })
  const reposStarsData = await Promise.all(reposStars)
  return {
    props: {
      reposStarsData
    }
  }
}

export default function Projects ({ reposStarsData }) {
  console.log(reposStarsData)
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
            {projects.map((d, index) => {
              const stars = reposStarsData.find(repo => repo.slug === d.repository)
              return (
                <Card
                  key={index}
                  title={d.title}
                  repository={d.repository}
                  stars={stars.repoStars}
                  description={d.description}
                  banner={d.banner}
                  href={`/projects/${d.slug}`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
