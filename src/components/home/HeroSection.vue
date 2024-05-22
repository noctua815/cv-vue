<script setup lang="ts">
import ScribbleLink from '@/components/ui/ScribbleLink.vue'
import {nextTick } from 'vue'

import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import Splitting from 'splitting'
import { gsap } from 'gsap'
import {charsAnimation} from '@/helpers/utils'
import {Contacts} from '@/content/home'

const heroAnimation = () => {
  const tl = gsap.timeline()
  const hero = document.getElementById('hero')
  const DOM = {
    wrapper: hero.querySelector('.hero__wr'),
    links: hero.querySelectorAll('.hero__links .scribble-link'),
    title: hero.querySelector('.hero__title'),
    name: hero.querySelector('.hero__name')
  }
  const charsTitle = new Splitting({ target: DOM.title, type: 'chars' })[0]
  const charsName = new Splitting({ target: DOM.name, type: 'chars' })[0]
  tl.set([DOM.links, ...charsTitle.chars, ...charsName.chars], { opacity: 0 })
  tl.to(DOM.wrapper, { opacity: 1 }, 0.5)
  tl.to(
    [DOM.links],
    {
      opacity: 1,
      stagger: {
        each: 0.25
      }
    },
    '<'
  )
  tl.eventCallback('onComplete', () => {
    charsAnimation(DOM.title)
    setTimeout(() => {
      charsAnimation(DOM.name)
    }, 1300)
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
        .hero__link(v-for="(item, i) of Contacts" :key="i")
          ScribbleLink(v-bind="item")
      .hero__title
        span FRONTEND
        span DEVELOPER
      .hero__image
        .image
          //img(src="@/assets/images/gradient-1.jpeg" alt="selfie")
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
  background-color: var(--c-light-violet);
  color: var(--c-black);

  &__wr {
    height: 100vh;
    width: 100%;
    padding: 2rem;
    display: grid;
    grid-template-areas:
      'links'
      'title'
      'image'
      'name';
    grid-template-rows: 1fr 3fr 1fr 2fr;
    grid-row-gap: 1rem;
  }

  &__title {
    font-size: 7rem;
    align-self: center;
    @extend .h1;

    span {
      display: block;
    }
  }

  &__name {
    align-self: center;
    text-align: right;
    @extend .h2;
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

  &__image {
  }

  .image {
    width: 48%;
    height: 15vh;
    //background-color: var(--c-black);
    background: rgb(70,89,183);
    background: linear-gradient(90deg, black 0%, #DCCAE2 43%, #DCCAE2 60%, black 100%);
    //background: linear-gradient(90deg, rgba(70,89,183,1) 0%, rgba(220,202,226,1) 43%, rgba(135,210,212,1) 100%);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;
      //box-
    }
  }
}

.hide {
  opacity: 0;
}
</style>
