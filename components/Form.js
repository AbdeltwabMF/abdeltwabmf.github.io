import clsx from 'clsx'

export function Header (props) {
  const { title, subtitle, children } = props

  return (
    <div className='pt-6 pb-8 space-y-2 md:space-y-5'>
      <h1 className='text-3xl font-extrabold tracking-tight text-gray-900 leading-9 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
        {title}
      </h1>
      {subtitle && (
        <p className='text-lg text-gray-500 leading-7 dark:text-gray-400'>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  )
}

export function H1 (props) {
  const { className, children } = props

  return (
    <h1
      className={clsx(
        'lg:text-5xl xl:text-6xl sm:text-3xl text-3xl mb-4 md:text-4xl font-bold text-transparent dark:text-transparent bg-gradient-to-r dark:bg-gradient-to-r from-sky-800 via-teal-400 to-violet-600 dark:from-sky-800 dark:via-teal-400 dark:to-violet-600 bg-clip-text dark:bg-clip-text',
        className
      )}
    >
      {children}
    </h1>
  )
}

export function H2 (props) {
  const { className, children } = props

  return (
    <h2
      className={clsx('lg:text-4xl xl:text-4xl text-2xl sm:text-2xl mb-4 md:text-3xl font-semibold text-transparent dark:text-transparent bg-gradient-to-r dark:bg-gradient-to-r from-lime-800 via-cyan-400 to-red-600 dark:from-lime-800 dark:via-cyan-400 dark:to-red-600 bg-clip-text dark:bg-clip-text', className)}
    >
      {children}
    </h2>
  )
}

export function H3 (props) {
  const { className, children } = props

  return (
    <h3
      className={clsx('lg:text-3xl xl:text-3xl text-xl sm:text-xl mb-4 md:text-2xl font-semibold text-transparent dark:text-transparent bg-gradient-to-r dark:bg-gradient-to-r from-rose-800 via-fuchsia-400 to-violet-600 dark:from-rose-800 dark:via-fuchsia-400 dark:to-violet-600 bg-clip-text dark:bg-clip-text', className)}
    >
      {children}
    </h3>
  )
}

export function H4 (props) {
  const { className, children } = props

  return (
    <h4
      className={clsx('lg:text-2xl xl:text-2xl text-lg sm:text-lg mb-4 md:text-xl font-semibold text-transparent dark:text-transparent bg-gradient-to-r dark:bg-gradient-to-r from-rose-800 via-fuchsia-400 to-violet-600 dark:from-rose-800 dark:via-fuchsia-400 dark:to-violet-600 bg-clip-text dark:bg-clip-text', className)}
    >
      {children}
    </h4>
  )
}
