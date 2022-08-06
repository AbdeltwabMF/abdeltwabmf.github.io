import React from 'react'
import Typed from 'typed.js'
import { GradientColor } from '@/components/GradientColor'

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
        <li>I'm a <GradientColor>Software Engineer</GradientColor></li>
        <li>I'm a <GradientColor from='lime' via='green'>Competitive Programmer</GradientColor></li>
        <li>I'm a <GradientColor from='sky'>dApp Developer</GradientColor></li>
        <li>I'm a <GradientColor from='rose'>Cryptographer</GradientColor></li>
      </ul>
      <span ref={el} className={'text-neutral-600 dark:text-slate-600 text-2xl font-bold ' + ' ' + className} />
    </div>
  )
}

export default TypedBios
