import clsx from 'clsx'

export function GradientColor (props) {
  let { className, children, from, via, to } = props
  from = from || 'rose'
  via = via || 'blue'
  to = to || 'violet'
  className = className || ''

  const gradientColor = `text-transparent dark:text-transparent bg-gradient-to-r dark:bg-gradient-to-r from-${from}-800 via-${via}-400 to-${to}-600 dark:from-${from}-800 dark:via-${via}-400 dark:to-${to}-600 bg-clip-text dark:bg-clip-text`

  return (
    <span className={clsx(gradientColor, className)}>
      {children}
    </span>
  )
}
