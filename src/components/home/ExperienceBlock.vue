<script setup lang="ts">
import {nextTick} from 'vue'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {Jobs} from '@/content/home'
import {addStickySection} from '@/helpers/sticky-section'

let section

const initBlockAnimation = () => {
  section = document.getElementById('block-experience')

  // 1. add sticky for main section
  addStickySection(section)

  // 2. add fade for prev section
  const DOM = {
    prevSection: document.getElementById('intro-section'),
    prevSectionWr: ''
  }
  DOM.prevSectionWr = DOM.prevSection.querySelector('.intro-section__wr')
  console.log('DOM', DOM)
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
    // endTrigger: '#block-experience',
    // pin: true,
    start: 'top 50%',
    end: 'top 10%',
    scrub: 1,
    animation: tl,
    markers: true,
    pinSpacing: false
  })

  //
  // const blocks = document.querySelectorAll('.block')
  // // const wrapper = document.getElementById('block-experience')
  // // const scaleFactor = 0.9
  // const length = blocks.length
  // const scaleFactor = 0.8
  // const scaleIndent = 0.05
  //
  // for (const [i, block] of blocks.entries()) {
  //   block.style.zIndex = i
  //
  //   // const bgColor = block.dataset.bgColor
  //   const scale = scaleFactor + scaleIndent * (length - i)
  //   const tl = gsap.timeline()
  //   tl.set(block.querySelector('.block__content'), {scale: 0.8, borderRadius: '5rem'})
  //   tl.to(block.querySelector('.block__content'), {scale: scale, borderRadius: '2rem'})
  //
  //   ScrollTrigger.create({
  //     trigger: block,
  //     start: 'top 50%',
  //     end: '+=50%',
  //     // markers: true,
  //     animation: tl,
  //     scrub: 1,
  //     // onScrubComplete: (self) => {
  //     //   // console.log('onScrubComplete', self)
  //     //   if (self.progress === 1) {
  //     //     console.log('fix title', i)
  //     //   } else {
  //     //     console.log('hide title', i)
  //     //   }
  //     // }
  //   })
  //
  //   const startIndent = i * 25 + 100
  //
  //   ScrollTrigger.create({
  //     trigger: block,
  //     start: `top ${startIndent}`,
  //     end: `bottom 100%-=100px`,
  //     endTrigger: '#block-experience',
  //     pin: true,
  //     pinSpacing: false
  //   })
  // }
}

const initStickyTitle = () => {
  ScrollTrigger.create({
    trigger: document.querySelector('.block-title '),
    endTrigger: '#block-experience',
    pin: true,
    start: 'top top',
    end: 'bottom 100%-=100px',
    // markers: true,
    pinSpacing: false
  })
}

nextTick(() => {
  initBlockAnimation()
  // initStickyTitle()
})
</script>

<template lang="pug">
  section.block-experience.round-block#block-experience
    .block-title
      h2 Experience
    .block-list
      .block(v-for="(job, i) of Jobs"
        :key="i"
        :id="`block-${i + 1}`"
        :class="`block-${i + 1}`"
        :data-bg-color="job.bgColor"
      )
        .block__content(:style="{backgroundColor: job.bgColor, color: job.textColor}")
          .job
            //.job__index {{ '#0' + (i + 1) }}
            .job__year {{ job.period }}
            .job__title {{ job.position }}
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
  background-color: var(--c-green);
  color: var(--c-black);
}

.block-title {
  display: flex;
  align-items: center;
  height: 7em;
  padding: 1rem 2rem;
}

.job {
  display: grid;
  grid-template-areas:
    'year title'
    'skills info';
  grid-template-columns: 35% auto;
  align-items: baseline;
  gap: 3rem;

  &__year {
    position: relative;
    grid-area: year;
    font-size: 3rem;
  }

  &__title {
    font-family: var(--font-secondary);
    grid-area: title;
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: bold;
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
  width: 100%;
  height: 100vh;

  &__content {
    scale: 1;
    width: 100%;
    height: 100%;
    padding: 3rem;
    color: var(--c-black);
  }
}
</style>
