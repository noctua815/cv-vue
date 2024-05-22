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
      'Developing web applications for interactions with the most popular blockchain networks.',
    experience: [
      'Develop Google Chrome Extensions with web3 functionality on <a class="highlight-link" href="/" target="_blank">Vue.js.</a>',
      'Create open-source projects for work with blockchain networks.',
      'Created an SSR web application on NuxtJS (automatic generation of more than 1000+ pages) with AMP support.',
      'Work on creating an admin panel for interacting with the internal API.',
      'Perform bug fixes and code reviews.'
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
      'Developed web products (from the beginning till the end) for large industrial companies, restaurant businesses, and local brands.',
    experience: [
      'Performed front-end <span class="highlight">development</span> for all projects.',
      'Developed SPA and SSR on Vue.js/NuxtJS.',
      'Optimized applications for PageSpeed Insights, and rewrote a code to new standards.',
      'Mentored junior engineers, code review.'
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
