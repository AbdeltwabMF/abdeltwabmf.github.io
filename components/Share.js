import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from 'react-share'
import SocialIcon from '@/components/SocialIcons'

export default function Share (props) {
  const { title, url } = props

  return (
    <div className='flex items-center justify-center pt-2'>
      <div className='flex items-center justify-between w-44'>
        <TwitterShareButton title={title} url={url}>
          <SocialIcon kind='twitter' size={6} color='blue' />
        </TwitterShareButton>
        <RedditShareButton title={title} url={url}>
          <SocialIcon kind='reddit' size={6} color='orange' />
        </RedditShareButton>
        <FacebookShareButton title={title} url={url}>
          <SocialIcon kind='facebook' size={6} color='blue' />
        </FacebookShareButton>
        <LinkedinShareButton title={title} url={url}>
          <SocialIcon kind='linkedin' size={6} color='blue' />
        </LinkedinShareButton>
        <WhatsappShareButton title={title} url={url}>
          <SocialIcon kind='whatsapp' size={6} color='green' />
        </WhatsappShareButton>
      </div>
    </div>
  )
}
