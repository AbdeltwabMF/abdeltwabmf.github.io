import siteMetadata from '@/data/siteMetadata'
import dynamic from 'next/dynamic'

const CusdisComponent = dynamic(
  () => {
    return import('@/components/Comments/Cusdis')
  },
  { ssr: false }
)

const Comments = ({ frontMatter }) => {
  const comment = siteMetadata?.comment
  if (!comment || Object.keys(comment).length === 0) return <></>
  return (
    <div id='comment'>
      <CusdisComponent frontMatter={frontMatter} />
    </div>
  )
}

export default Comments
