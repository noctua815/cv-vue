# Personal Resume Website

This project is a single-page application (SPA) that showcases my resume and portfolio. The site is built using Vue.js, Vite, and TypeScript, with a focus on animations and a smooth user interface.

## Demo
A live demo is available at https://noctua815.github.io/cv-vue/.
![project-preview](./public/project-preview.gif)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Running](#installation-and-running)
- [Deployment](#deployment)
- [Contact](#contact)

## Features

- Single-page application (SPA)
- Interactive animations using [gsap](https://github.com/greensock/GSAP)
- Smooth scrolling with the [lenis](https://github.com/darkroomengineering/lenis) library
- Text animation using [split-type](https://github.com/lukePeavey/SplitType) and gsap
- Color manipulation and shade generation with [chroma-js](https://github.com/gka/chroma.js)

## Technologies Used

- 🎁 **Project:** Vite, Vue 3, Typescript, Composition API
- 🌟 **Animation:** GSAP (timeline, scrollTrigger and basic gsap),
  split-type for splitting text into lines and characters, Lenis for smooth scrolling
- 🛠️ **Tools:** npm, eslint, scss, pug, prettier, conventional commits
- 💎 **Others**: mobile first approach, composition api
   
## Installation and Running

1. Install Node.js (the project uses Node.js version 18.12.0.).
2. Install npm.
3. Clone the repository.
4. Type and run: `npm i` in the root directory.
5. Type and run: `npm run dev` in the root directory.
6. Open `http://localhost:5173` in your browser to see the app.

## Deployment
The project is deployed on GitHub Pages using GitHub Actions. To deploy updates, simply push commits to the main branch, and GitHub Actions will automatically update the page.
