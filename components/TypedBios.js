import React from 'react'
import Typed from 'typed.js'
import Twemoji from '@/components/Twemoji'

const TypedBios = ({ className }) => {
  const el = React.useRef(null)
  const typed = React.useRef(null)

  React.useEffect(() => {
    const options = {
      stringsElement: '#bios',
      typeSpeed: 60,
      backSpeed: 10,
      loop: true,
      backDelay: 1000
      // shuffle: true,
    }
    typed.current = new Typed(el.current, options)
    return () => typed.current.destroy()
  }, [])

  return (
    <div className='mx-4 text-center'>
      <ul id='bios' className='hidden'>
        <li>I'm a Cryptographer</li>
        <li>I'm a Software Engineer</li>
        <li>I'm a dApp Developer</li>
      </ul>
      <span ref={el} className={'text-neutral-500 dark:text-neutral-200 text-lg ' + ' ' + className} />
    </div>
  )
}

export default TypedBios
