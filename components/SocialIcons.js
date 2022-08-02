import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faYoutube,
  faLinkedin,
  faTwitter,
  faTelegram,
  faReddit,
  faFacebook,
  faWhatsapp,
  faInstagram,
  faPinterest,
  faDocker,
  faResearchgate
} from '@fortawesome/free-brands-svg-icons'
import { faRss, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function SocialIcon (props) {
  const { kind, size, color } = props
  const sizeClass = size > 0 ? `h-${size} w-${size}` : 'h-6 w-6'
  let icon
  switch (kind) {
    case 'rss':
      icon = faRss
      break
    case 'email':
      icon = faEnvelope
      break
    case 'whatsapp':
      icon = faWhatsapp
      break
    case 'facebook':
      icon = faFacebook
      break
    case 'github':
      icon = faGithub
      break
    case 'researchgate':
      icon = faResearchgate
      break
    case 'docker':
      icon = faDocker
      break
    case 'youtube':
      icon = faYoutube
      break
    case 'linkedin':
      icon = faLinkedin
      break
    case 'reddit':
      icon = faReddit
      break
    case 'twitter':
      icon = faTwitter
      break
    case 'telegram':
      icon = faTelegram
      break
    default:
      icon = faGithub
      break
  }

  let colorClass
  switch (color) {
    case 'blue':
      colorClass = 'text-blue-500 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-700'
      break
    case 'red':
      colorClass = 'text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300'
      break
    case 'green':
      colorClass =
        'text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300'
      break
    case 'yellow':
      colorClass =
        'text-yellow-500 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300'
      break
    case 'purple':
      colorClass =
        'text-purple-500 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300'
      break
    case 'orange':
      colorClass =
        'text-orange-500 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300'
      break
    case 'pink':
      colorClass = 'text-pink-500 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300'
      break
    case 'indigo':
      colorClass =
        'text-indigo-500 hover:text-indigo-700 dark:text-indigo-600 dark:hover:text-indigo-800'
      break
    case 'teal':
      colorClass = 'text-teal-500 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300'
      break
    case 'gray':
      colorClass = 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
      break
    case 'slate':
      colorClass =
        'text-slate-700 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-300'
      break
    default:
      colorClass = 'text-teal-500 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300'
      break
  }

  return (
    <FontAwesomeIcon
      icon={icon}
      className={`${sizeClass} fill-current ${colorClass} inline-block align-middle`}
      size='2x'
    />
  )
}
