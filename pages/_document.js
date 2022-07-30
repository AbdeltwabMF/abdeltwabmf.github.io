import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render () {
    return (
      <Html lang='en' className='scroll-smooth'>
        <Head>
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
          <link rel='manifest' href='/favicons/site.webmanifest' />
          <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#5bbad5' />
          <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
          <meta content='width=device-width, initial-scale=1' name='viewport' />
          <meta name='msapplication-TileColor' content='#00aba9' />
          <meta name='theme-color' content='#ffffff' />
          <meta name='msapplication-TileColor' content='#000000' />
          <meta name='theme-color' media='(prefers-color-scheme: light)' content='#fff' />
          <meta name='theme-color' media='(prefers-color-scheme: dark)' content='#000' />
        </Head>
        <body className='antialiased text-black bg-white dark:bg-gray-900 dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
