<script setup lang="ts">
import {watch} from 'vue'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {Jobs} from '@/content/home'
import {addStickySection} from '@/helpers/sticky-section'
import {getStyle} from "@/helpers/utils";

const props = defineProps<{
  loading: boolean
}>()
let section
let sectionTitle

watch(() => props.loading, (newVal) => {
  // loading done, init animation
  // initBlockAnimation()
  // initInnerBlocksAnimation()
  section = document.getElementById('block-experience')
  sectionTitle = section.querySelector('.block-title ')
  initStickyTitle()
  initJobBlocksAnimation()
})


const initBlockAnimation = () => {
  section = document.getElementById('block-experience')

  // 1. add sticky for main section
  addStickySection(section, false)

  // 2. add fade for prev section
  const DOM = {
    prevSection: document.getElementById('intro-section'),
    prevSectionWr: ''
  }
  DOM.prevSectionWr = DOM.prevSection.querySelector('.intro-section__wr')
  const tl = gsap.timeline()

  tl.fromTo(
      DOM.prevSectionWr,
      {opacity: 1},
      {
        opacity: 0
      }
  )

  ScrollTrigger.create({
    trigger: section,
    start: 'top 50%',
    end: 'top 10%',
    scrub: 1,
    animation: tl,
    // markers: true,
    pinSpacing: false
  })
}

const initInnerBlocksAnimation = () => {
  const blocks = section.querySelectorAll('.block')
  const length = blocks.length
  const scaleFactor = 0.8
  const scaleIndent = 0.05

  for (const [i, block] of blocks.entries()) {
    block.style.zIndex = i

    // const bgColor = block.dataset.bgColor
    const scale = scaleFactor + scaleIndent * (length - i)
    const tl = gsap.timeline()
    tl.set(block.querySelector('.block__content'), {scale: 0.8, borderRadius: '5rem'})
    tl.to(block.querySelector('.block__content'), {scale: scale, borderRadius: '2rem'})

    ScrollTrigger.create({
      trigger: block,
      start: 'top 50%',
      end: '+=50%',
      markers: true,
      animation: tl,
      scrub: 1,
      // onScrubComplete: (self) => {
      //   // console.log('onScrubComplete', self)
      //   if (self.progress === 1) {
      //     console.log('fix title', i)
      //   } else {
      //     console.log('hide title', i)
      //   }
      // }
    })

    const startIndent = i * 25 + 100

    ScrollTrigger.create({
      trigger: block,
      start: `top ${startIndent}`,
      end: `bottom 100%-=100px`,
      endTrigger: '#block-experience',
      pin: true,
      pinSpacing: false
    })
  }
}

const initJobBlocksAnimation = () => {
  const blocks = section.querySelectorAll('.block')
  const topIndent = sectionTitle.getBoundingClientRect().height
  console.log('topIndent', topIndent)
  for (const [i, block] of blocks.entries()) {
    block.style.zIndex = i
    const title = block.querySelector('.job__title')
    console.log('title', block, i, title)

    const tl = gsap.timeline()
    tl.to(title, {
      scale: 0.7,
      borderBottom: '1px solid black'
    })
    ScrollTrigger.create({
      trigger: block,
      start: `top ${topIndent}`,
      end: `bottom bottom`,
      endTrigger: '#block-experience',
      pin: title,
      pinSpacing: false,
      animation: tl,
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
    trigger: sectionTitle,
    endTrigger: '#block-experience',
    pin: true,
    start: 'top top',
    end: 'bottom 100%-=100px',
    // markers: true,
    pinSpacing: false,
    onEnter: () => {
      const prevStyle = getStyle(section, 'border-radius')
      section.dataset.borderRadius = prevStyle
      gsap.to(section, {
        borderRadius: 0
      })
    },
    onLeaveBack: () => {
      const prevStyle = section.dataset.borderRadius
      if (prevStyle) {
        gsap.to(section, {
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
                .skill(v-for="(skill, i) of job.skills" :key="i") {{ skill.text }}
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
  overflow: hidden;


  //&__wr {
  //}
}

.block-title {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  //height: 7em;
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
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    font-family: var(--font-secondary);
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
  height: 100vh;

  &__content {
    width: 100%;
    height: 100%;
    padding: 2rem;
    color: var(--c-black);
  }
}
</style>
