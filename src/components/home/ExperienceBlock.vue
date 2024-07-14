<script setup lang="ts">
import SkillList from '@/components/ui/SkillList.vue'

import { reactive, watch } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Jobs } from '@/content/home'
import { getStyle } from '@/helpers/utils'

const props = defineProps<{
  loading: boolean
  resize: boolean
}>()
const DOM = reactive({
  section: null,
  sectionWr: null,
  sectionTitle: null
})

watch(
  () => props.loading,
  (newVal) => {
    console.log('3. INIT EXPERIENCE BLOCK ANIMATION')
    // loading done, init animation
    // initBlockAnimation()
    // initInnerBlocksAnimation()
    DOM.section = document.getElementById('block-experience')
    DOM.sectionWr = DOM.section.querySelector('.block-experience__wr')
    DOM.sectionTitle = DOM.section.querySelector('.block-title')
    DOM.prevSectionWr = document.querySelector('.intro-section__wr')
    initStickyTitle()
    iniPrevBlockAnimation()
    initInnerBlocksAnimation()
    initJobBlocksAnimation()
  }
)

// resize page listener
watch(() => props.resize, (val) => {
  if (val) {
    onResize()
  }
})
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
    // animation: tl,
    pinSpacing: false,
    onEnter: () => {
      console.log('onEnter')
    },
    onLeave: () => {
      console.log('onLeave')
    }
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
    // markers: true,
    pinSpacing: false
  })
}

const initJobBlocksAnimation = () => {
  const blocks = DOM.section.querySelectorAll('.block')
  const topIndent = DOM.sectionTitle.getBoundingClientRect().height
  for (const [i, block] of blocks.entries()) {
    block.style.zIndex = i

    const title = block.querySelector('.job__title')
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
      // pin: title,
      // markers: true,
      scrub: 1,
      pinSpacing: false,
      animation: tl
    })

    // gsap.to(title, {
    //   scale: 0.5,
    //   scrub: 1,
    //   pin: true,
    //   scrollTrigger: {
    //     trigger: block,
    //     pin: title,
    //     start: `top ${topIndent}px`,
    //     end: 'bottom bottom+=500px',
    //     markers: true,
    //   }
    // })
    // ScrollTrigger.create({
    //   trigger: block,
    //   pin: true,
    //   start: `top ${topIndent}px`,
    //   end: 'bottom bottom+=500px',
    //   pinSpacing: false,
    //   markers: true,
    //   onEnter: () => {
    //     console.log('enter!!!')
    //   }
    // })
  }
}
const initStickyTitle = () => {
  ScrollTrigger.create({
    trigger: DOM.sectionTitle,
    endTrigger: '#block-experience',
    pin: true,
    start: 'top top',
    end: 'bottom 100%-=100px',
    // markers: true,
    pinSpacing: false,
    onEnter: () => {
      const prevStyle = getStyle(DOM.section, 'border-radius')
      DOM.section.dataset.borderRadius = prevStyle
      gsap.to(DOM.section, {
        borderRadius: 0
      })
    },
    onLeaveBack: () => {
      const prevStyle = DOM.section.dataset.borderRadius
      if (prevStyle) {
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
    .block-experience__wr
      .block-title
        h2 Experience
      .block-list
        .block(v-for="(job, i) of Jobs"
          :key="i"
          :id="`block-${i + 1}`"
          :class="`block-${i + 1}`"
          :data-bg-color="job.bgColor"
        )
          //.block__content(:style="{backgroundColor: job.bgColor, color: job.textColor}")
          .block__content
            .job
              //.job__index {{ '#0' + (i + 1) }}
              .job__title
                .job__title-year {{ job.period }}
                .job__title-pos {{ job.position }}
              .job__skills
                SkillList(:skills="job.skills")
                //.skill(v-for="(skill, i) of job.skills" :key="i") {{ skill.text }}
              .job__info.text-content
                p {{ job.intro }}
                ul
                  li(v-for="(item, i) of job.experience" v-html="item")
</template>

<style scoped lang="scss">
.block-experience {
  position: relative;
  z-index: 3;
  padding: 0 1rem 2rem;
  background-color: var(--c-green);
  color: var(--c-black);
}

.block-title {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  margin: 0 2rem 2rem;
  background-color: var(--c-green);
  border-bottom: 1px solid black;
}

.job {
  display: grid;
  grid-template-areas:
    'title title'
    'skills info';
  grid-template-columns: 35% auto;
  align-items: baseline;
  gap: 3rem;
  border: 1px solid black;
  padding: 2rem;

  &__title {
    display: flex;
    grid-area: title;
    gap: 3rem;

    &-year {
      position: relative;
      flex-shrink: 0;
      font-size: 3rem;
      width: 35%;
    }

    &-pos {
      font-family: var(--font-secondary);
      font-size: 3rem;
      margin-bottom: 1rem;
      font-weight: bold;
    }
  }

  &__info {
    grid-area: info;
  }

  &__skills {
    position: relative;
    grid-area: skills;
  }
}

.skill {
  padding: 0.5rem;
  border-radius: 0.7rem;
  color: var(--c-black);
  border: 1px solid var(--c-black);
}

.block {
  position: relative;
  width: 100%;
  //height: 100vh;

  &__content {
    width: 100%;
    height: 100%;
    padding: 0.5rem 2rem;
    color: var(--c-black);
  }
}
</style>
