import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube, faLinkedin, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faRss, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function SocialIcon (props) {
  const { kind, href, size } = props

  return (
    <a
      className='text-sm text-gray-500 transition hover:text-gray-600 h-6 w-6'
      target='_blank'
      rel='noopener noreferrer'
      href={href}
    >
      <FontAwesomeIcon
        icon={kind === 'rss' ? faRss : kind === 'email' ? faEnvelope : kind === 'github' ? faGithub : kind === 'youtube' ? faYoutube : kind === 'linkedin' ? faLinkedin : kind === 'twitter' ? faTwitter : kind === 'telegram' ? faTelegram : faTelegram}
        className='text-teal-600 fill-current hover:text-teal-900 dark:text-teal-400 dark:hover:text-teal-300'
        size='2x'
      />
    </a>
  )
}
