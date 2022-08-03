const siteMetadata = {
  title: 'Abd El-Twab M. Fakhry | Personal Website',
  author: 'Abd El-Twab M. Fakhry',
  headerTitle: 'AbdeltwabMF',
  description: 'Abd El-Twab M. Fakhry | Personal Website',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://abdeltwabmf.github.io',
  siteRepo: 'https://github.com/AbdeltwabMF/abdeltwabmf.github.io.git',
  siteLogo: 'https://abdeltwabmf.github.io/images/logo.png',
  avatar: 'https://abdeltwabmf.github.io/images/avatar.png',
  socialBanner: '/images/social-banner.png',
  email: 'abdeltwab.m.fakhry@protonmail.com',
  github: 'https://github.com/AbdeltwabMF',
  twitter: 'https://twitter.com/AbdeltwabMF',
  youtube: 'https://www.youtube.com/channel/UCyenpZrfrwtgCGXut-t5AYg',
  linkedin: 'https://www.linkedin.com/in/abdeltwabmf/',
  telegram: 'https://t.me/AbdeltwabMF',
  researchgate: 'https://www.researchgate.net/profile/Abd-El-Twab-Fakhry',
  docker: 'https://hub.docker.com/u/abdeltwabmf',
  rss: 'https://abdeltwabmf.github.io/feed.xml',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
    posthogAnalyticsId: '' // posthog.init e.g. phc_5yXvArzvRdqtZIsHkEm3Fkkhm3d0bEYUXCaFISzqPSQ
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'convertkit'
  },
  comment: {
    // If you want to use a commenting system other than giscus you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // Place the comment box above the comments. options: bottom, top
      inputPosition: 'bottom',
      // Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
      lang: 'en',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: ''
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: ''
    },
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME
    }
  }
}

module.exports = siteMetadata
