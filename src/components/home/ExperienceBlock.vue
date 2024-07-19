<script setup lang="ts">
import JobItem from '@/components/ui/JobItem.vue'

import { watch } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Jobs } from '@/content/home'
import { getStyle } from '@/helpers/utils'

const props = defineProps<{
  loading: boolean
  resize: boolean
}>()

type DOMType = {
  section: HTMLElement | null
  sectionWr: HTMLElement | null
  sectionTitle: HTMLElement | null
  prevSectionWr: HTMLElement | null
}

const DOM: DOMType = {
  section: null,
  sectionWr: null,
  sectionTitle: null,
  prevSectionWr: null
}

watch(
  () => props.loading,
  (newVal) => {
    // loading done, init animation
    DOM.section = document.getElementById('block-experience')
    if (!DOM.section) return
    DOM.sectionWr = DOM.section.querySelector('.block-experience__wr')
    DOM.sectionTitle = DOM.section.querySelector('.block-experience__title')
    DOM.prevSectionWr = document.querySelector('.intro-section__wr')
    initStickyTitle()
    iniPrevBlockAnimation()
    initInnerBlocksAnimation()
    // initJobBlocksAnimation()
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
const onResize = () => {
  console.log('---- onResize - EXPE')
}

const iniPrevBlockAnimation = () => {
  const tl = gsap.timeline()
  tl.fromTo(DOM.prevSectionWr, { opacity: 1 }, { opacity: 0 })

  ScrollTrigger.create({
    trigger: DOM.section,
    start: 'top 50%',
    end: 'top 10%',
    scrub: 1,
    pinSpacing: false
  })
}

const initInnerBlocksAnimation = () => {
  const tl = gsap.timeline()

  tl.set(DOM.sectionWr, {
    opacity: 0
  })

  tl.to(DOM.sectionWr, {
    opacity: 1
  })

  ScrollTrigger.create({
    trigger: DOM.section,
    start: 'top 50%',
    end: 'top top',
    scrub: 1,
    animation: tl,
    pinSpacing: false
  })
}

const initJobBlocksAnimation = () => {
  if (!DOM.section || !DOM.sectionTitle) return

  const blocks = DOM.section.querySelectorAll('.block')

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i] as HTMLElement
    block.style.zIndex = `${i}`

    const tl = gsap.timeline()
    tl.to(block, {
      scale: 0.5,
      opacity: 0
    })

    ScrollTrigger.create({
      trigger: block,
      start: `top 0`,
      end: `bottom bottom`,
      endTrigger: '#block-experience',
      scrub: 1,
      pinSpacing: false,
      animation: tl
    })
  }
}
const initStickyTitle = () => {
  ScrollTrigger.create({
    trigger: DOM.section,
    endTrigger: '#block-experience',
    pin: DOM.sectionTitle,
    start: 'top top',
    end: 'bottom bottom',
    // markers: true,
    pinSpacing: false,
    onEnter: () => {
      if (!DOM.section) return
      DOM.section.dataset.borderRadius = getStyle(DOM.section, 'border-radius')
      gsap.to(DOM.section, {
        borderRadius: 0
      })
    },
    onLeaveBack: () => {
      const prevStyle = DOM.section?.dataset?.borderRadius
      if (prevStyle && DOM.section) {
        gsap.to(DOM.section, {
          borderRadius: prevStyle
        })
      }
    }
  })
}
</script>

<template lang="pug">
  section.block-experience.round-block#block-experience
    .block-experience__wr.wr
      .block-experience__title
        h2 Experience
      .block-list
        .block(v-for="(job, i) of Jobs"
          :key="i"
          :id="`block-${i + 1}`"
          :class="`block-${i + 1}`"
          :data-bg-color="job.bgColor"
        )
          .block__content
            JobItem(:job="job")
</template>

<style scoped lang="scss">
.block-experience {
  position: relative;
  z-index: 3;
  background-color: var(--c-green);
  color: var(--c-black);
  overflow: hidden;
  padding-top: 0;
  padding-bottom: 10vh;

  &__title {
    position: relative;
    z-index: 10;
    background-color: var(--c-green);
    border-bottom: 1px solid black;
    margin-bottom: 1rem;
    padding-top: 1.5rem;

    @include for-tablet {
      margin-bottom: 2rem;
      padding-top: 2rem;
    }
  }

  &__wr {
    padding-top: 0;
  }
}

.block {
  position: relative;
  width: 100%;

  &__content {
    width: 100%;
    height: 100%;
    padding: 0.5rem 0;
    color: var(--c-black);

    @include for-tablet {
      padding: 0.5rem 0;
    }
  }
}
</style>
