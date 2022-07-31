import Conditional from '@/components/Conditional'
import { H1, H2 } from '@/components/Form'
import { PageSEO } from '@/components/SEO'
import Image from '@/components/Image'
import React, { useCallback } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import projects, { defaultDimensions } from '@/data/projects'

export async function getStaticPaths () {
  return {
    paths: projects.map(({ slug }) => ({ params: { slug } })),
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const project = projects.find(project => project.slug === params.slug)

  return {
    props: {
      project
    }
  }
}

export default function Project ({ project }) {
  const {
    title,
    description,
    shortDescription,
    banner,
    deployment,
    stack,
    keywords,
    repository,
    website,
    slug,
    screenshots
  } = project

  const [height, width] = defaultDimensions

  const renderScreenShotList = useCallback(
    (screenshot) => {
      const style = {
        height,
        width
      }

      return (
        <div
          className='flex-shrink-0 mr-2 overflow-hidden rounded bg-placeholder-light dark:bg-placeholder-dark'
          style={style}
        >
          <Image
            loading='eager'
            src={screenshot}
            height={height}
            width={width}
            objectFit='cover'
            alt=''
          />
        </div>
      )
    },
    [height, width]
  )

  const hasDeployments = !!deployment
  const hasScreenshots = !!screenshots.length

  return (
    <>
      <PageSEO
        title={title}
        description={shortDescription || description}
        imageUrl={banner}
      />
      <H1 className='mt-12 mb-4 text-3xl font-bold lg:text-5x dark:text-white'>
        {title}
      </H1>
      <p className='mb-4 font-light'>{description}</p>

      <H2>Stack</H2>
      <Conditional condition={stack.length > 0}>
        <div className='flex flex-wrap justify-start mb-4'>
          {stack.map((keyword, index) => (
            <p className='px-1 m-1 text-blue-700 bg-blue-100 border border-blue-300 rounded' key={index}>{keyword}</p>
          ))}
        </div>
      </Conditional>

      <H2>Keywords</H2>
      <Conditional condition={stack.length > 0}>
        <div className='flex flex-wrap justify-start mb-4'>
          {keywords.map((keyword, index) => (
            <p className='px-1 m-1 text-green-700 bg-green-100 border border-green-300 rounded' key={index}>{keyword}</p>
          ))}
        </div>
      </Conditional>

      <H2>Deployments</H2>

      <Conditional condition={hasScreenshots}>
        <H2 className='my-4'>Screenshots</H2>
        <ScrollContainer
          className='flex mt-4 mb-1 overflow-auto list'
          hideScrollbars={false}
        >
          {React.Children.toArray(screenshots.map(renderScreenShotList))}
        </ScrollContainer>
      </Conditional>
    </>
  )
}
