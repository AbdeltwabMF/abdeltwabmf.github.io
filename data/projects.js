export const defaultDimensions = [450, 220]

const projects = [
  {
    slug: 'devault',
    title: 'Devault',
    banner: '/images/projects/banners/devault.png',
    description:
      'A Blockchain-based, decentralized, self-hosted, and end-to-end encrypted alternative to proprietary and centralized cloud storage.',
    stack: ['Next.js', 'HardHat', 'Ethers.js', 'Docker'],
    keywords: [
      'Blockchain',
      'Cryptography',
      'Decentralization',
      'Self-hosting',
      'Cloud Storage',
      'Peer-to-Peer Network'
    ],
    screenshots: ['/images/projects/banners/devault.png'],
    deployment: {
      web: ['https://devault.vercel.app', 'https://devault.on.fleek.co'],
      docker: ['https://hub.docker.com/r/abdeltwabmf/devault', '']
    }
  },
  {
    slug: 'next-prayer',
    title: 'next-prayer',
    banner: '/images/projects/banners/next-prayer.png',
    description: 'Islamic prayers reminder for your *nix status bar.',
    stack: ['C++', 'Python', 'Docker', 'Make'],
    keywords: ['Prayer Times', 'Status Bar', 'Hijri Date'],
    screenshots: ['/images/projects/banners/next-prayer.png'],
    deployment: {
      package: ['https://aur.archlinux.org/packages/next-prayer', ''],
      docker: ['https://hub.docker.com/r/abdeltwabmf/next-prayer', '']
    }
  },
  {
    slug: 'anthology-of-algorithms-and-data-structures',
    title: 'Anthology of Algorithms and Data structures',
    banner: '/images/projects/banners/anthology-of-algorithms-and-data-structures.png',
    description: 'Common Code for Competitive Programming in C++',
    stack: ['C++'],
    keywords: [
      'Graph Theory',
      'Mathematics',
      'Geometry',
      'Game Theory',
      'Data Structures',
      'Ad-hoc',
      'String Processing'
    ],
    screenshots: ['/images/projects/banners/anthology-of-algorithms-and-data-structures.png'],
    deployment: {
      package: ['https://abdeltwabmf.github.io/anthology-of-algorithms-and-data-structures', '']
    }
  },
  {
    slug: 'queueing-modelsim',
    title: 'Queueing ModelSim',
    banner: '/images/projects/banners/queueing-modelsim.png',
    description:
      'A software created for the calculation of characteristics of different queues having the BMAP (batch Markovian Arrival Process) as input, and the deterministic queues characterized by units of input (i.e. customers) arrive at known points in time and the service times are fixed intervals.',
    stack: ['Python', 'Tkinter'],
    keywords: ['Queueing Theory', 'BMAP', 'Deterministic Queue', 'Stochastic Queue'],
    screenshots: ['/images/projects/banners/queueing-modelsim.png'],
    deployment: {
      package: ['https://abdeltwabmf.github.io/queueing-modelsim', '']
    }
  }
]

export default projects
