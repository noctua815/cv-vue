<script setup lang="ts">
import VButton from '@/components/ui/VButton.vue'
import {onMounted, reactive, watch} from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import { addStickySection } from '@/helpers/sticky-section'
import { wrapElement } from '@/helpers/utils'

const props = defineProps<{
  loading: boolean
}>()

const DOM = reactive({
  section: null,
  sectionWr: null,
  prevSectionWr: null
})

watch(
  () => props.loading,
  () => {
    console.log('2. INIT INTRO BLOCK ANIMATION')

    // loading done, init animation
    DOM.section = document.getElementById('intro-section')
    DOM.sectionWr = DOM.section.querySelector('.intro-section__wr'),
    DOM.prevSectionWr = document.querySelector('.hero__wr')
    DOM.btns = DOM.section.querySelectorAll('.button')
    prevBlockAnimation()
    introBlockAnimation()
  }
)


const prevBlockAnimation = () => {
  // 1. add sticky for main section
  addStickySection(DOM.section, true)

  // 2. add fade for prev section
  const tl = gsap.timeline()
  tl.fromTo(
    DOM.prevSectionWr,
    { opacity: 1 },
    {
      opacity: 0
    }
  )
  // tl.to(DOM.section, {
  //   borderRadius: 0
  // })
  // tl.fromTo(DOM.prevSection, {backgroundColor: '#DCCAE2'}, {backgroundColor: '#1f1f1f'})
  // tl.to(DOM.prevSectionWr,
  //
  // )
  // tl.to(DOM.prevSection, {backgroundColor: '#87D2D4'})

  ScrollTrigger.create({
    trigger: DOM.section,
    start: 'top 50%',
    end: 'top 10%',
    scrub: 1,
    animation: tl,
    pinSpacing: false
  })

  // ScrollTrigger.create({
  //   trigger: DOM.section,
  //   endTrigger: '#block-experience', // TODO
  //   pin: true,
  //   start: 'top top',
  //   end: 'bottom bottom',
  //   // scrub: 1,
  //   // animation: tl,
  //   // markers: true,
  //   pinSpacing: false,
  //   onEnter: () => {
  //     const prevStyle = getStyle(DOM.section, 'border-radius')
  //     DOM.section.dataset.borderRadius = prevStyle
  //     console.log('onEnter', prevStyle)
  //     gsap.to(DOM.section, {
  //       borderRadius: 0
  //     })
  //   },
  //   onLeaveBack: () => {
  //     const prevStyle = DOM.section.dataset.borderRadius
  //     if (prevStyle) {
  //       gsap.to(DOM.section, {
  //         borderRadius: prevStyle
  //       })
  //     }
  //     console.log('onLeaveBack')
  //   }
  // })
}

const introBlockAnimation = () => {
  console.log('introBlockAnimation')
  // 1. split text into lines
  const wordsIntro = new SplitType(DOM.section.querySelector('.intro-section__first .intro'), {
    types: 'lines'
  })
  const wordsIntroSecond = new SplitType(
    DOM.section.querySelector('.intro-section__second .intro'),
    { types: 'lines' }
  )
  if (wordsIntro.lines) {
    wrapElement(wordsIntro.lines, 'span', 'line-wrap')
  }
  if (wordsIntroSecond.lines) {
    wrapElement(wordsIntroSecond.lines, 'span', 'line-wrap')
  }
  wrapElement(DOM.btns, 'span', 'clear-wrap')

  // set basic value
  gsap.set(DOM.sectionWr, {opacity: 0})
  console.log('DOM.sectionWr', DOM.sectionWr)
  gsap.set([wordsIntro.lines, wordsIntroSecond.lines], {
    y: '100%',
    rotate: '4deg'
  })
  gsap.set(DOM.btns, { y: '100%' })

  // 3. add timeline
  const tl = gsap.timeline()
  tl.to(DOM.sectionWr, { opacity: 1 })
  tl.to(
    wordsIntro.lines,
    {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      stagger: {
        each: 0.1
      }
    },
    '>'
  )

  tl.to(
    wordsIntroSecond.lines,
    {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      stagger: {
        each: 0.15
      }
    },
    '>'
  )

  tl.to(
    DOM.btns,
    {
      y: 0,
      stagger: {
        each: 0.15
      }
    },
    '>'
  )

  ScrollTrigger.create({
    trigger: DOM.section,
    start: 'top 60%',
    end: 'top top',
    scrub: 1,
    animation: tl,
    markers: true,
    pinSpacing: false
  })
}
</script>

<template lang="pug">
  section.intro-section.round-block#intro-section
    .intro-section__wr
      .intro-section__title
        h2 Who Am I
      .intro-section__content
        .intro-section__first
          .intro.intro--big Hello, my name is Vika. I&rsquo;m a Frontend Developer currently based in Cyprus. I have a proven track record of developing web products for businesses across various fields
        .intro-section__second
          .intro.intro--small I am passionate about creating user-friendly and meaningful products that evoke emotions, and I love solving challenging problems. I am committed to continuously improving my programming skills to gain knowledge and experience.
        .intro-section__cv
          VButton(text="English CV")
          VButton(text="Russian CV")
</template>

<style scoped lang="scss">
.intro-section {
  position: relative;
  z-index: 3;
  min-height: 100vh;
  background-color: var(--c-tiffany-blue);
  margin-bottom: 50vh;

  &__wr {
    display: flex;
    height: 100%;
    flex-direction: column;
    padding: 1rem 2rem 2rem;
  }

  &__content {
    flex-grow: 1;
    display: grid;
    grid-template-areas:
      'intro-1 .'
      'cv intro-2';
    grid-template-rows: 2fr 1fr;
    grid-template-columns: 1.8fr 1fr;
    gap: 3rem;
  }

  &__title {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }

  &__first {
    grid-area: intro-1;
  }

  &__cv {
    display: flex;
    align-items: end;
    gap: 1rem;
    grid-area: cv;
  }

  &__second {
    grid-area: intro-2;
    display: flex;
    align-items: end;
  }
}

.intro {
  font-family: var(--font-secondary);

  &--big {
    font-size: 2rem;

    :deep(.line) {
      line-height: 1.3;
    }
  }

  &--small {
    font-size: 1rem;

    :deep(.line) {
      line-height: 1.33;
    }
  }
}
</style>
