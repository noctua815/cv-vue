import { Job, Skill } from '@/types'

export const Jobs: Job[] = [
  {
    bgColor: '#AFC6B9',
    textColor: 'black',
    position: 'Senior Frontend Developer',
    employer: 'Noone',
    country: 'Cyprus, Limassol',
    period: '2021 - now',
    intro:
      'Development of web solutions for interaction with 19 blockchain networks: a web version of a cryptocurrency wallet with 1500+ crypto assets on the client side.',
    experience: [
      'Developing <a class="highlight" href="/" target="_blank">Google Chrome Extensions</a> with web3 functionality using Vue.js.',
      'Creating a <a class="highlight" href="/" target="_blank">web widget</a> on Vue.js for working with cryptocurrencies and authorization via the Google Drive API.',
      'Creating <a class="highlight" href="/" target="_blank">open-source projects</a> for working with blockchain networks.',
      'Designed SSR websites on Nuxt.js, including automatic generation of more than 1000+ pages and their AMP copies.',
      'Development of white-label solutions for cryptocurrency operations.',
      'Working on creating an admin panel for interacting with the internal API.',
      'Performing bug fixes and conducting code reviews.',
      'Supervising junior developers and providing training.',
    ],
    skills: [
      { color: 'blue', text: 'JavaScript' },
      { color: 'blue', text: 'TypeScript' },
      { color: 'blue', text: 'NuxtJS 2-3' },
      { color: 'blue', text: 'Vue.js 2-3' },
      { color: 'blue', text: 'PostCSS' },
      { color: 'blue', text: 'GSAP' },
      { color: 'blue', text: 'Webpack' },
      { color: 'blue', text: 'Vite' },
      { color: 'blue', text: 'Parcel.js' },
      { color: 'blue', text: 'Astro' },
      { color: 'blue', text: 'Babel.js' },
      { color: 'blue', text: 'Git' },
      { color: 'blue', text: 'Jira' },
      { color: 'blue', text: 'Sentry' },
      { color: 'blue', text: 'web3' }
    ]
  },
  {
    bgColor: '#9FAABC',
    textColor: 'black',
    position: 'Middle Frontend Developer',
    employer: 'Fintech | NDA',
    period: '2018 - 2021',
    experience: [
      'Created an mobile application using Vue.js 2',
      'Created an SSR web application on NuxtJS 2',
      'Perform bug fixes and code reviews.'
    ],
    skills: [
      { color: 'blue', text: 'JavaScript' },
      { color: 'blue', text: 'NuxtJS 2' },
      { color: 'blue', text: 'Vue.js 2' },
      { color: 'blue', text: 'PostCSS' },
      { color: 'blue', text: 'Webpack' }
    ]
  },
  {
    bgColor: '#8E8DBE',
    // bgColor: '#8e8dbe',
    textColor: 'black',
    position: 'Middle Frontend Developer',
    employer: 'Studio of Alexander Lebedev',
    country: 'Russia, Saint-Petersburg',
    period: '2016 - 2018',
    intro:
      'Developed web products from inception to completion for large industrial companies, restaurant businesses, and local brands.',
    experience: [
      'Conducted front-end development for all projects.',
      'Built Single Page Applications (SPA) and Server-Side Rendered (SSR) applications using Vue.js/NuxtJS.',
      'Optimized applications for PageSpeed Insights and refactored code to meet new standards.',
      'Mentored junior engineers and conducted code reviews.'
    ],
    skills: [
      { color: 'blue', text: 'JavaScript' },
      { color: 'blue', text: 'NuxtJS 2' },
      { color: 'blue', text: 'Vue.js 2' },
      { color: 'blue', text: 'PostCSS' },
      { color: 'blue', text: 'Webpack' },
      { color: 'blue', text: 'Gulp' }
    ]
  }
]
export const Education = [
  {
    position: 'Engineer Programmer',
    employer: 'Plekhanov Russian University of Economics',
    country: 'Russia',
    period: '2010 - 2015',
    intro: 'Developing web applications for interactions with the most popular blockchain networks.'
  }
]
export const Contacts = [
  {
    text: 'Github',
    href: 'https://github.com/noonewallet'
  },
  {
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/viktoriia-denisova-743a9a260/'
  },
  {
    text: 'Telegram',
    href: 'https://t.me/vikasova'
  },
  {
    text: 'Gmail',
    href: 'mailto:vikadenisova.cy@gmail.com'
  }
]
export const Footer = {
  skills: {
    title: 'Skills',
    list: [
      'TypeScript',
      'JavaScript',
      'Vue.js',
      'Nuxt.js 2-3',
      'GSAP',
      'Webpack',
      'Vite',
      'CSS3',
      'PostCSS',
      'Babel.js'
    ]
  },
  tools: {
    title: 'Tools',
    list: [
      'Figma',
      'Zeplin',
      'Sketch',
      'Jira',
      'Slack',
      'Git',
      'Docker',
      'npm',
      'nvm',
      'yarn',
      'pnpm',
      ''
    ]
  },
  lang: {
    title: 'Language',
    list: ['Russian - Native', 'English - B1']
  }
}
