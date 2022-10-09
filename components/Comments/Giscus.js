import { useTheme } from 'next-themes'
import Giscus from '@giscus/react'

import siteMetadata from '@/data/siteMetadata'

export default function Comments ({ frontMatter }) {
  const { theme, resolvedTheme } = useTheme()
  const { locale } = frontMatter

  const lang = locale === 'ar-EG' ? 'ar' : 'en'

  const commentsTheme =
    siteMetadata.comment.giscusConfig.themeURL === ''
      ? theme === 'dark' || resolvedTheme === 'dark'
          ? siteMetadata.comment.giscusConfig.darkTheme
          : siteMetadata.comment.giscusConfig.theme
      : siteMetadata.comment.giscusConfig.themeURL

  const {
    repo,
    repositoryId,
    category,
    categoryId,
    mapping,
    reactions,
    loading,
    term,
    metadata,
    inputPosition
  } = siteMetadata?.comment?.giscusConfig

  return (
    <div className='pt-6 pb-6 text-center text-gray-700 dark:text-gray-300'>
      <Giscus
        id='comments'
        repo='AbdeltwabMF/abdeltwabmf.github.io'
        repoId={repositoryId}
        category={category}
        categoryId={categoryId}
        mapping={mapping}
        term={term}
        reactionsEnabled={reactions}
        emitMetadata={metadata}
        inputPosition={inputPosition}
        theme={commentsTheme}
        lang={lang}
        loading={loading}
      />
    </div>
  )
}
