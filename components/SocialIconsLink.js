import SocialIcon from '@/components/SocialIcons'

export default function SocialIconLink (props) {
  const { href, rules } = props

  return (
    <a
      className={'text-sm text-gray-500 transition hover:text-gray-600 ' + rules}
      target='_blank'
      rel='noopener noreferrer'
      href={href}
    >
      <SocialIcon {...props} />
    </a>
  )
}
