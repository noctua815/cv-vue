<script setup lang="ts">
import ScribbleLink from '@/components/ui/ScribbleLink.vue'
import {reactive, nextTick} from 'vue'

import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import Splitting from 'splitting'
import {gsap} from 'gsap'

const contacts = reactive([
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
])

const heroAnimation = () => {
  const tl = gsap.timeline()
  const hero = document.getElementById('hero')
  const DOM = {
    wrapper: hero.querySelector('.hero__wr'),
    links: hero.querySelectorAll('.hero__links .scribble-link'),
    title: hero.querySelector('.hero__title'),
    name: hero.querySelector('.hero__name')
  }
  const charsTitle = new Splitting({target: DOM.title, type: 'chars'})[0]
  const charsName = new Splitting({target: DOM.name, type: 'chars'})[0]
  tl.set([DOM.links, ...charsTitle.chars, ...charsName.chars], {opacity: 0})
  tl.to(DOM.wrapper, {opacity: 1}, 0.5)
  tl.to([DOM.links], {
    opacity: 1,
    stagger: {
      each: 0.25,
    }
  }, '<')
  tl.eventCallback("onComplete", () => {
    charsAnimation(DOM.title)
    setTimeout(() => {
      charsAnimation(DOM.name)
    }, 500)
  })
}

const charsAnimation = (title) => {
  const lettersAndSymbols = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "-",
    "_",
    "+",
    "=",
    ";",
    ":",
    "<",
    ">",
    ","
  ]
  const chars = title.querySelectorAll('.char')

  chars.forEach((char, position) => {
    let innerHTML = char.innerHTML

    gsap.to(char, {
      duration: 0.015,
      innerHTML: lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
      repeat: 1,
      repeatRefresh: true,
      opacity: 1,
      repeatDelay: 0.02,
      delay: (position + 1) * 0.09,
      onComplete: (self) => {
        gsap.set(char, {
          innerHTML,
          delay: 0.01
        })
      }
    })
  })
}
nextTick(() => {
  heroAnimation()
})
</script>

<template lang="pug">
  section.hero#hero
    .hero__wr.hide
      .hero__links
        ScribbleLink(v-for="(item, i) of contacts" :key="i" v-bind="item")
      .hero__title
        span FRONTEND
        span DEVELOPER
      .hero__photo
      .hero__name
        span VIKTORIIA
        span DENISOVA
</template>

<style scoped lang="scss">
.hero {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  min-height: 100vh;
  background-color: #B3BDA9;
  color: black;

  &__wr {
    height: 100vh;
    width: 100%;
    border: 1px solid black;
    padding: 2rem;
    display: grid;
    grid-template-areas:
      'links'
      'title'
      'photo'
      'name';
    grid-template-rows: fit-content(20%) 3fr 1fr 2fr;
    grid-row-gap: 1rem;

    //& > div {
    //  border: 1px solid black;
    //}
  }

  &__title {
    font-size: 6rem;
    align-self: center;
    //font-weight: bold;

    span {
      display: block;
    }
  }

  &__name {
    align-self: center;
    text-align: right;
    font-size: 6rem;
    //font-weight: bold;

    span {
      display: block;
    }
  }

  &__links {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }
}

.hide {
  opacity: 0;
}
</style>
