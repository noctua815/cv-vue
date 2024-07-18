<script setup lang="ts">
import VButton from '@/components/ui/VButton.vue'
import { addStickySection } from '@/helpers/sticky-section'
import { WrappedTextSplitter } from '@/helpers/text-splitter'
import { watch } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const props = defineProps<{
  loading: boolean
  resize: boolean
}>()

type DOMType = {
  section: HTMLElement | null;
  sectionWr: HTMLElement | null;
  prevSectionWr: HTMLElement | null;
  btns: NodeListOf<HTMLElement> | null;
  firstIntro: HTMLElement | null;
  secondIntro: HTMLElement | null;
};

const DOM: DOMType = {
  section: null,
  sectionWr: null,
  prevSectionWr: null,
  btns: null,
  firstIntro: null,
  secondIntro: null,
};

// const componentsLoaded = ():boolean => {
//   return Object.values(DOM).every(el => el !== null && el instanceof HTMLElement);
// };

watch(
  () => props.loading,
  () => {
    DOM.section = document.getElementById('intro-section')

    if (!DOM.section) return

    DOM.sectionWr = DOM.section.querySelector('.intro-section__wr')
    DOM.btns = DOM.section.querySelectorAll('.button')
    DOM.firstIntro = DOM.section.querySelector('.intro-section__first .intro')
    DOM.secondIntro = DOM.section.querySelector('.intro-section__second .intro')
    DOM.prevSectionWr = document.querySelector('.hero__wr')
    prevBlockAnimation()
    introBlockAnimation()
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

// const resizeCallback = () => {
//   console.log('resizeCallback', resizeCallback)
// }

const introBlockAnimation = () => {
  // if (!componentsLoaded()) return
  // 1. split text into lines
  const wordsIntro = new WrappedTextSplitter(DOM.firstIntro, {
    splitTypes: 'lines',
    wrap: 'lines',
    wrapClass: 'line-wrap',
    resizeCallback() {
      console.log('wordsIntro resize')
    }
  })
  const wordsIntroSecond = new WrappedTextSplitter(DOM.secondIntro, {
    splitTypes: 'lines',
    wrap: 'lines',
    wrapClass: 'line-wrap',
    resizeCallback() {
      console.log('wordsIntroSecond resize')
    }
  })

  // set initial value
  if (DOM.sectionWr)    gsap.set(DOM.sectionWr, { opacity: 0 })

  gsap.set([wordsIntro.lines, wordsIntroSecond.lines], {
    y: '100%',
    rotate: '4deg'
  })
  if (DOM.btns) gsap.set(DOM.btns, { y: '100%' })

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
    '>+0.5'
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
    '>+1.5'
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
          .intro.intro--big Hello, my name is Vika. I&rsquo;m a Frontend Developer currently based in Cyprus. I have a proven track record of developing web products for businesses across various fields.
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
  margin-bottom: 30vh;

  &__wr {
    display: flex;
    height: 100%;
    flex-direction: column;
    padding: 0.5rem 0;

    @include for-tablet {
      padding: 1rem 2rem 2rem;
    }
  }

  &__content {
    flex-grow: 1;
    display: grid;
    grid-template-areas:
      'intro-1'
      'intro-2'
      'cv';
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    gap: 3rem;

    @include for-tablet {
      grid-template-areas:
        'intro-1 .'
        'cv intro-2';
      grid-template-rows: 2fr 1fr;
      grid-template-columns: 1.8fr 1fr;
    }
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
    font-size: 1.5rem;
    line-height: 1.5;

    @include for-tablet {
      font-size: 2rem;
    }

    :deep(.line) {
      line-height: 1.3;
    }
  }

  &--small {
    font-size: 1.2rem;
    line-height: 1.33;

    @include for-tablet {
      font-size: 1rem;
    }

    :deep(.line) {
      line-height: 1.33;
    }
  }
}
</style>
