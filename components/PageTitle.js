export default function PageTitle ({ children, font }) {
  return (
    <h1 className={'text-3xl font-extrabold tracking-tight text-gray-900 leading-9 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 bg-gradient-to-r from-sky-800 via-teal-400 to-violet-600 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-sky-800 dark:via-teal-400 dark:to-violet-600 dark:bg-clip-text dark:text-transparent ' + font}>
      {children}
    </h1>
  )
}
