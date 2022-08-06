import Conditional from '@/components/Conditional'
import { H1, H2, H3 } from '@/components/Form'
import { PageSEO } from '@/components/SEO'
import Image from '@/components/Image'
import React, { useCallback } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import projects, { defaultDimensions } from '@/data/projects'
import siteMetadata from '@/data/siteMetadata'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import SocialIcon from '@/components/SocialIcons'

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
    slug,
    title,
    description,
    banner,
    deployment,
    stack,
    keywords,
    screenshots,
    dimensions
  } = project

  const [width, height] = dimensions ?? defaultDimensions

  const renderScreenShotList = useCallback(
    (screenshot) => {
      const style = {
        height,
        width
      }

      console.log(screenshot)
      return (
        <div
          className='flex-shrink-0 mr-2 overflow-hidden rounded bg-placeholder-light dark:bg-placeholder-dark'
          style={style}
        >
          <Image
            loading='eager'
            src={screenshot}
            width={width}
            height={height}
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
      <H1 className='z-10 mt-12 text-center '>
        {title}
      </H1>
      <p className='mb-4 text-gray-600 dark:text-gray-400'>{description}</p>

      <H2 className=''>Stack</H2>
      <Conditional condition={stack.length > 0}>
        <div className='flex flex-wrap justify-start mb-4'>
          {stack.map((keyword, index) => (
            <p className='px-1 m-1 text-blue-700 bg-blue-100 border border-blue-300 rounded' key={index}>{keyword}</p>
          ))}
        </div>
      </Conditional>

      <H2 className=''>Keywords</H2>
      <Conditional condition={stack.length > 0}>
        <div className='flex flex-wrap justify-start mb-4'>
          {keywords.map((keyword, index) => (
            <p className='px-1 m-1 text-green-700 bg-green-100 border border-green-300 rounded' key={index}>{keyword}</p>
          ))}
        </div>
      </Conditional>

      <H2 className=''>Source Code</H2>
      <div className='mb-4'>
        <a
          className='text-blue-700 dark:text-blue-300'
          href={`${siteMetadata.github}/${slug}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <button
            className='inline-block px-5 py-1 no-underline border border-gray-500 rounded fill-current bg-neutral-200 text-slate-700 transition hover:text-gray-600 border-opacity-60 dark:border-gray-400'
          >
            <SocialIcon
              aria-label={`Link to ${slug} on GitHub`}
              kind='github'
              size='5'
              color='slate'
            />
            <span className='ml-2 font-mono'>GitHub</span>
          </button>
        </a>
      </div>

      <Conditional condition={!!deployment}>
        <H2 className=''>Deployments</H2>
        {Object.entries(deployment).map(deploy => {
          console.log(deploy)
          return (
            <div key={deploy[0]} className='mb-4'>
              <H3 className='text-slate-600 dark:text-neutral-300'>{deploy[0]}</H3>
              <ul>
                {deploy[1].map((url, index) => (
                  <li className='' key={index}>
                    <a
                      className='text-blue-700 dark:text-blue-300'
                      href={url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FontAwesomeIcon icon={faLink} size='2x' className='w-8 h-8' />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </Conditional>

      <Conditional condition={!!screenshots.length}>
        <H2 className=''>Screenshots</H2>
        <ScrollContainer className='flex mt-4 mb-1 overflow-auto list'>
          {React.Children.toArray(screenshots.map(renderScreenShotList))}
        </ScrollContainer>
      </Conditional>
    </>
  )
}
