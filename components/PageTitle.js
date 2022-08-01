export default function PageTitle ({ children, font }) {
  return (
    <h1 className={'text-3xl font-extrabold tracking-tight text-gray-900 leading-9 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 ' + font}>
      {children}
    </h1>
  )
}
