<script setup lang="ts">
import ScribbleLink from '@/components/ui/ScribbleLink.vue'
import { Contacts } from '@/content/home'
import { watch } from 'vue'
import Splitting from 'splitting'
import { gsap } from 'gsap'
import { charsAnimation } from '@/helpers/utils'

const emit = defineEmits(['heroAnimationFinished'])
const props = defineProps<{
  loading: boolean
}>()

watch(() => props.loading, (newVal) => {
  // loading done, init animation
  heroAnimation()
})

const heroAnimation = () => {
  const tl = gsap.timeline()
  const hero = document.getElementById('hero-section')
  const DOM = {
    wrapper: hero.querySelector('.hero__wr'),
    links: hero.querySelectorAll('.hero__links .scribble-link'),
    title: hero.querySelector('.hero__title'),
    name: hero.querySelector('.hero__name'),
    imageWr: hero.querySelector('.hero__image'),
    image: hero.querySelector('.hero__image .fixed-image')
  }
  const charsTitle = new Splitting({ target: DOM.title, type: 'chars' })[0]
  const charsName = new Splitting({ target: DOM.name, type: 'chars' })[0]
  tl.set([DOM.links, ...charsTitle.chars, ...charsName.chars], { opacity: 0 })
  // tl.set(DOM.image, {width: 0})
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
  const imageRect = DOM.imageWr.getBoundingClientRect()
  tl.to(DOM.image, {
    left: imageRect.left,
    top: imageRect.top,
    width: '48vw',
    height: '15vh',
    backgroundColor: 'transparent',
    // background: 'linear-gradient(90deg, black 0%, #DCCAE2 43%, #DCCAE2 60%, black 100%)',
    onComplete: () => {
      DOM.image.classList.add('make-abs')
    }
  })
  tl.eventCallback('onComplete', () => {
    charsAnimation(DOM.title)
    setTimeout(() => {
      charsAnimation(DOM.name)
      emit('heroAnimationFinished')
    }, 1000)

    // setTimeout(() => {
    //   tl.to(DOM.image, {width: '100%', duration: 2})
    // }, 2000)
  })
}
</script>

<template lang="pug">
  section.hero#hero-section
    .hero__wr.hide
      .hero__links
        .hero__link(v-for="(item, i) of Contacts" :key="i")
          ScribbleLink(v-bind="item")
      .hero__title.animate-title
        span FRONTEND
        span DEVELOPER
      .hero__image
         .fixed-image
      .hero__name.animate-title
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
    align-self: center;
  }

  &__name {
    align-self: center;
    text-align: right;
  }

  &__links {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }

  &__image {
    width: 48vw;
    height: 15vh;
    position: relative;
    overflow: hidden;
  }

  //.image {
  //  width: 48vw;
  //  height: 15vh;
  //  background: #DCCAE2;
  //  background: linear-gradient(90deg, black 0%, #DCCAE2 43%, #DCCAE2 60%, black 100%);
  //  opacity: 0.6;
  //}
}

.fixed-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  //background: black;
  //background: linear-gradient(90deg, black 0%, #DCCAE2 43%, #DCCAE2 60%, black 100%);
  opacity: 1;
  transform-origin: left center;
  background-image: url('@/assets/images/dotted-pattern-1.png');
  //background-color: black;
  background-color: #DCCAE1;
  background-repeat: repeat;
  background-attachment: fixed;
  background-position: center;

  &.make-abs {
    position: absolute;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
  }
}

.animate-title {
  @extend .h1;

  span {
    display: block;

    &:first-line {
    }
  }

  //:deep(span:nth-child(1) .word) {
  //  .char {
  //    background-color: var(--c-violet);
  //    color: var(--c-white);
  //  }
  //}
}

.hide {
  opacity: 0;
}
</style>
