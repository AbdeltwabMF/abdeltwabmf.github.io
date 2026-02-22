import { H1 } from '@/components/Form'
import Twemoji from '@/components/Twemoji'

export default function Philosophy () {
  return (
    <div className='flex flex-col items-center justify-center min-h-[60vh] text-center'>
      <H1 className='mb-4'>
        <span className='pr-4'>Philosophy</span>
        <Twemoji emoji="thinking-face" />
      </H1>
      <p className='text-xl text-gray-600 dark:text-gray-400'>
        Deep thoughts loading... (or maybe I'm just procrastinating)
      </p>
    </div>
  )
}
