import type { Job } from '@/types'

export const Jobs: Job[] = [
  {
    position: 'Senior Frontend Developer',
    employer: 'Noone',
    country: 'Cyprus, Limassol',
    period: '2021 - 2024',
    intro:
      'Development of web solutions for interaction with 19 blockchain networks: a web version of a cryptocurrency wallet with 1500+ crypto assets on the client side.',
    experience: [
      'Developing <a class="highlight" href="https://chromewebstore.google.com/detail/noone-wallet/bgfhmafjampalkbjicjcjiikhlaggdnm" target="_blank">Google Chrome Extensions</a> with web3 functionality using Vue.js.',
      'Creating a <a class="highlight" href="https://noone.io/widget" target="_blank">web widget</a> on Vue.js for working with cryptocurrencies and authorization via the Google Drive API.',
      'Development of admin panels for more convenient interaction with internal APIs using React and Redux.',
      'Creating <a class="highlight" href="https://github.com/noonewallet" target="_blank">open-source projects</a> for working with blockchain networks.',
      'Designed SSR websites on Nuxt.js, including automatic generation of more than 1000+ pages and their AMP copies.',
      'Development of white-label solutions for cryptocurrency operations.',
      'Working on creating an admin panel for interacting with the internal API.',
      'Performing bug fixes and conducting code reviews.',
      'Supervising junior developers and providing training.'
    ],
    skills: [
      { text: 'JavaScript' },
      { text: 'TypeScript' },
      { text: 'NuxtJS 2-3' },
      { text: 'Vue.js 2-3' },
      { text: 'React 16-18' },
      { text: 'Redux 6-9' },
      { text: 'Next.js' },
      { text: 'PostCSS' },
      { text: 'GSAP' },
      { text: 'Webpack' },
      { text: 'Vite' },
      { text: 'Parcel.js' },
      { text: 'Astro' },
      { text: 'Babel.js' },
      { text: 'Git' },
      { text: 'Jira' },
      { text: 'Sentry' },
      { text: 'web3' },
      { text: 'Docker' }
    ]
  },
  {
    position: 'Middle Frontend Developer',
    employer: 'Fintech | NDA',
    country: 'Russia',
    period: '2018 - 2021',
    intro: 'Developed a fintech application that helped users manage their finances.',
    experience: [
      'Created an mobile application using Vue.js 2',
      'Created an SSR web application on NuxtJS 2',
      'Perform bug fixes and code reviews.'
    ],
    skills: [
      { text: 'JavaScript' },
      { text: 'NuxtJS 2' },
      { text: 'Vue.js 2' },
      { text: 'Vuex' },
      { text: 'TypeScript' },
      { text: 'PostCSS' },
      { text: 'Webpack' },
      { text: 'Jira' },
      { text: 'Git' },
      { text: 'Docker' }
    ]
  },
  {
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
      { text: 'JavaScript' },
      { text: 'NuxtJS 2' },
      { text: 'Vue.js 2' },
      { text: 'PostCSS' },
      { text: 'Webpack' },
      { text: 'Gulp' },
      { text: 'Jira' },
      { text: 'Git' }
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
    text: 'Github (personal)',
    href: 'https://github.com/noctua815'
  },
  {
    text: 'Github (work)',
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
