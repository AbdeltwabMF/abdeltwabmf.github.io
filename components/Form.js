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
        'lg:text-5x mb-4 text-3xl font-bold dark:text-white',
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
      className={clsx('mb-4 text-2xl font-semibold dark:text-white', className)}
    >
      {children}
    </h2>
  )
}

export function H3 (props) {
  const { className, children } = props

  return (
    <h3
      className={clsx('mb-1 text-lg font-semibold dark:text-white', className)}
    >
      {children}
    </h3>
  )
}
