<script setup lang="ts">
import VHeader from '@/components/home/VHeader.vue'
import { Contacts } from '@/content/home'
import { watch } from 'vue'
import { gsap } from 'gsap'
import { TextSplitter } from '@/helpers/text-splitter'
import { charsAnimation, getStyle } from '@/helpers/utils'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const emit = defineEmits(['heroAnimationFinished'])
const props = defineProps<{
  loading: boolean
  resize: boolean
}>()

type DOMType = {
  section: HTMLElement | null
  wrapper: HTMLElement | null
  title: HTMLElement | null
  name: HTMLElement | null
  imageWr: HTMLElement | null
  image: HTMLElement | null
  links: NodeListOf<HTMLElement> | null
}

const DOM: DOMType = {
  section: null,
  wrapper: null,
  title: null,
  name: null,
  imageWr: null,
  image: null,
  links: null
}

watch(
  () => props.loading,
  () => {
    // loading done, init animation
    const hero = document.getElementById('hero-section')
    if (!hero) return
    DOM.section = hero
    DOM.wrapper = hero.querySelector('.hero__wr')
    DOM.title = hero.querySelector('.hero__title')
    DOM.name = hero.querySelector('.hero__name')
    DOM.imageWr = hero.querySelector('.hero__image')
    DOM.image = hero.querySelector('.hero__image .fixed-image')
    DOM.links = document.querySelectorAll('.header__link')

    initStickyHero()
    heroAnimation()
  }
)

// resize page listener
watch(
  () => props.resize,
  (val) => {
    if (val) {
      onResize()
    }
  }
)
const onResize = () => {}

const heroAnimation = () => {
  const tl = gsap.timeline()
  const charsTitle = new TextSplitter(DOM.title, {
    splitTypes: 'chars'
  })
  const charsName = new TextSplitter(DOM.name, {
    splitTypes: 'chars'
  })
  tl.set([DOM.links, ...charsTitle.chars, ...charsName.chars], { opacity: 0 })

  const imageRect = DOM.imageWr?.getBoundingClientRect()

  tl.to(
    DOM.image,
    {
      left: imageRect?.left,
      top: imageRect?.top,
      width: imageRect?.width,
      height: imageRect?.height,
      backgroundColor: 'transparent',
      onComplete: () => {
        DOM.image?.classList.add('make-abs')
      }
    },
    0.4
  )
  tl.to(
    [DOM.links],
    {
      opacity: 1,
      stagger: {
        each: 0.15
      }
    },
    '>'
  )
  tl.eventCallback('onComplete', () => {
    charsAnimation(DOM.title)
    setTimeout(() => {
      charsAnimation(DOM.name)
      emit('heroAnimationFinished')
    }, 1000)
  })
}

const initStickyHero = () => {
  if (!DOM.section) return
  ScrollTrigger.create({
    trigger: DOM.section,
    endTrigger: '#block-experience',
    pin: true,
    start: 'top top',
    end: 'bottom bottom',
    // markers: true,
    pinSpacing: false
  })
}
</script>

<template lang="pug">
  section.hero#hero-section
    .hero__wr
      .hero__links
        VHeader(:contacts="Contacts")
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
  position: relative;
  z-index: 1;
  display: flex;
  min-height: 100vh;
  background-color: var(--c-light-violet);
  color: var(--c-black);

  &__wr {
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-areas:
      'links'
      'title'
      'image'
      'name';
    grid-template-rows: 0.5fr 2fr 1fr 2fr;
    grid-gap: 1.5rem 1rem;
    padding: 1rem;

    @include for-tablet {
      grid-template-rows: 0.5fr 2fr 2fr 1.5fr;
      padding: 2rem;
    }

    @include for-laptop {
      grid-template-rows: 1fr 3fr 1fr 2fr;
    }
  }

  &__title {
    align-self: end;

    @include for-tablet {
      margin-left: -0.4rem;
    }
  }

  &__name {
    align-self: center;
    text-align: right;
  }

  &__links {
    position: relative;
    z-index: 1;
  }

  &__image {
    width: 80vw;
    height: 15vh;
    position: relative;
    overflow: hidden;

    @include for-tablet {
      width: 48vw;
    }
  }
}

.fixed-image {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 10;
  transform-origin: left center;
  background-image: url('@/assets/images/dotted-pattern-1.png');
  background-color: var(--c-light-violet);
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
    display: block !important;
  }
}

.hide {
  opacity: 0;
}
</style>
