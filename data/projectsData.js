const projectsData = [
  {
    title: 'Next Prayer',
    description: 'I built this because I wanted prayer times in my dwm status bar without any Python dependencies or API calls. It pre-calculates a year of prayer times locally—startup takes less than 5ms, perfect for status bars.',
    imgSrc: '',
    href: 'https://github.com/AbdeltwabMF/next-prayer',
    tags: ['C++', 'Linux', 'CLI'],
    stats: {
      stars: '⭐',
      language: 'C++',
      license: 'GPL-3.0'
    },
    highlights: [
      'Blazing fast: < 5ms startup',
      'Just a 500KB binary',
      'Works completely offline',
      'Includes Hijri calendar'
    ]
  },
  {
    title: 'Loc',
    description: 'An Android app that reminds you to do things when you reach certain places. Built with Flutter and uses OpenStreetMap instead of Google Maps—because open data matters.',
    imgSrc: '',
    href: 'https://github.com/AbdeltwabMF/loc',
    tags: ['Flutter', 'Android', 'OpenStreetMap'],
    stats: {
      stars: '⭐',
      language: 'Dart',
      license: 'GPL-3.0'
    },
    highlights: [
      'Works offline',
      'No Google services needed',
      'Save favorite places',
      'Runs in background'
    ]
  },
  {
    title: 'Resume',
    description: 'My LaTeX resume template. Single-page, clean design that fits everything without looking cramped. Uses custom commands to keep things consistent.',
    imgSrc: '',
    href: 'https://github.com/AbdeltwabMF/resume',
    tags: ['LaTeX', 'Template'],
    stats: {
      stars: '⭐',
      language: 'TeX',
      license: 'MIT'
    },
    highlights: [
      'Single-page layout',
      'Clean, readable design',
      'Easy to customize',
      'Auto-generates preview'
    ]
  },
  {
    title: 'GoMeet',
    description: 'Got tired of manually opening meeting links, so I built this. It watches your calendar and opens meetings automatically. Works with Google Calendar or just a local config file.',
    imgSrc: '',
    href: 'https://github.com/AbdeltwabMF/gomeet',
    tags: ['Go', 'Automation', 'Calendar'],
    stats: {
      stars: '⭐',
      language: 'Go',
      license: 'GPL-3.0'
    },
    highlights: [
      'Auto-joins meetings',
      'Google Calendar sync',
      'Runs as background daemon',
      'Cross-platform support'
    ]
  },
  {
    title: 'Scripts',
    description: 'Random shell scripts I use daily. Stuff for dmenu, dunst notifications, status bar widgets—basically automating the boring parts of my workflow.',
    imgSrc: '',
    href: 'https://github.com/AbdeltwabMF/scripts',
    tags: ['Shell', 'Automation', 'Linux'],
    stats: {
      stars: '⭐',
      language: 'Shell',
      license: 'MIT'
    },
    highlights: [
      'dmenu integrations',
      'Status bar widgets',
      'Notification helpers',
      'Cron job scripts'
    ]
  },
  {
    title: 'Beamer Template',
    description: 'My go-to LaTeX presentation template. Based on Metropolis theme but tweaked with gruvbox colors. Has syntax highlighting for code blocks and a progress bar.',
    imgSrc: '',
    href: 'https://github.com/AbdeltwabMF/beamer-template',
    tags: ['LaTeX', 'Beamer', 'Template'],
    stats: {
      stars: '⭐',
      language: 'TeX',
      license: 'MIT'
    },
    highlights: [
      'Gruvbox color palette',
      'Syntax highlighting',
      'Progress bar',
      'Appendix slides support'
    ]
  }
]

export default projectsData
