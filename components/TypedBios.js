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
        <li>I'm a <span className='text-sky-500 dark:text-sky-600'>Cryptographer</span></li>
        <li>I'm a <span className='text-purple-500 dark:text-purple-600'>Software Engineer</span></li>
        <li>I'm a <span className='text-blue-500 dark:text-blue-600'>dApp Developer</span></li>
        <li>I'm a <span className='text-green-500 dark:text-green-600'>Competitive Programmer</span></li>
      </ul>
      <span ref={el} className={'text-slate-500 dark:text-slate-600 text-2xl font-bold ' + ' ' + className} />
    </div>
  )
}

export default TypedBios
