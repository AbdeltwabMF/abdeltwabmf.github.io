import Conditional from '@/components/Conditional'
import { H1, H2, H3 } from '@/components/Form'
import { PageSEO } from '@/components/SEO'
import Image from '@/components/Image'
import React, { useCallback } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import projects, { defaultDimensions } from '@/data/projects'
import Link from '@/components/Link'

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
    banner,
    deployment,
    stack,
    keywords,
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

  return (
    <>
      <PageSEO
        title={title}
        description={description}
        imageUrl={banner}
      />
      <H1 className='mt-12 mb-4 text-3xl font-bold text-slate-600 lg:text-5x dark:text-neutral-300'>
        {title}
      </H1>
      <p className='mb-4 text-gray-600 dark:text-gray-400'>{description}</p>

      <H2 className='text-slate-600 dark:text-neutral-300'>Stack</H2>
      <Conditional condition={stack.length > 0}>
        <div className='flex flex-wrap justify-start mb-4'>
          {stack.map((keyword, index) => (
            <p className='px-1 m-1 text-blue-700 bg-blue-100 border border-blue-300 rounded' key={index}>{keyword}</p>
          ))}
        </div>
      </Conditional>

      <H2 className='text-slate-600 dark:text-neutral-300'>Keywords</H2>
      <Conditional condition={stack.length > 0}>
        <div className='flex flex-wrap justify-start mb-4'>
          {keywords.map((keyword, index) => (
            <p className='px-1 m-1 text-green-700 bg-green-100 border border-green-300 rounded' key={index}>{keyword}</p>
          ))}
        </div>
      </Conditional>

      <Conditional condition={!!deployment}>
        <H2 className='text-slate-600 dark:text-neutral-300'>Deployments</H2>
        {Object.entries(deployment).map(deploy => {
          console.log(deploy)
          return (
            <div key={deploy[0]} className='mb-4'>
              <H3 className='text-slate-600 dark:text-neutral-300'>{deploy[0]}</H3>
              <ul>
                {deploy[1].map((url, index) => (
                  <li className='' key={index}>
                    <a
                      className='text-blue-700 dark:text-neutral-300'
                      href={url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {url}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </Conditional>

      <Conditional condition={!!screenshots.length}>
        <H2 className='text-slate-600 dark:text-neutral-300'>Screenshots</H2>
        <ScrollContainer className='flex flex-wrap justify-start mb-4'>
          {React.Children.toArray(screenshots.map(renderScreenShotList))}
        </ScrollContainer>
      </Conditional>
    </>
  )
}
