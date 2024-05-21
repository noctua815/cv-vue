<script setup lang="ts">
import { nextTick } from 'vue'
import { gsap } from 'gsap'
// import 'splitting/dist/splitting.css'
// import 'splitting/dist/splitting-cells.css'
// import Splitting from 'splitting'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Jobs } from '@/content/home'

function initBlockAnimation() {
  const blocks = document.querySelectorAll('.block')
  const wrapper = document.getElementById('block-experience')
  const scaleFactor = 0.9
  const length = blocks.length

  for (const [i, block] of blocks.entries()) {
    block.style.zIndex = i

    const bgColor = block.dataset.bgColor
    const scale = 0.8 + (length - i) * 0.05
    const tl = gsap.timeline()
    tl.set(block.querySelector('.block__content'), { scale: 0.8, borderRadius: '5rem' })
    tl.to(block.querySelector('.block__content'), { scale:scale, borderRadius: '2rem'})
    // tl.to(wrapper, { backgroundColor: bgColor }, '<')

    // tl.to(block.querySelector('.block__content'), {scale: 0, borderRadius: '0'})
    // const blockAnimation = gsap.to(block.querySelector('.block__content'), {scale: 0.7, borderRadius: '5rem'})

    ScrollTrigger.create({
      trigger: block,
      start: 'top 50%',
      end: '+=50%',
      markers: true,
      animation: tl,
      scrub: 1,
      onScrubComplete: (self) => {
        // console.log('onScrubComplete', self)
        if (self.progress === 1) {
          console.log('fix title', i)
        } else {
          console.log('hide title' , i)
        }
      },
      // onSnapComplete: (self) => {
      //   console.log('onSnapComplete', self)
      // }
    })

    const startIndent = i * 25 + 100

    ScrollTrigger.create({
      trigger: block,
      start: `top ${startIndent}`,
      end: `bottom 100%-=100px`,
      endTrigger: '#block-experience',
      pin: true,
      pinSpacing: false,
      // onLeave: (self) => {
      //   console.log('onLeave')
      // },
      // onLeaveBack: (self) => {
      //   console.log('onLeaveBack')
      // },
      // onEnter: (self) => {
      //   console.log('onEnter', self)
      // },
      // onEnterBack: (self) => {
      //   console.log('onEnterBack', self)
      // }
      // markers: true
    })
  }
}

function initStickyTitle() {
  ScrollTrigger.create({
    trigger: document.querySelector('.block-title '),
    endTrigger: '#block-experience',
    pin: true,
    start: 'top top',
    end: 'bottom 100%-=100px',
    scrub: true,
    // markers: true,
    pinSpacing: false
  })
}

nextTick(() => {
  initBlockAnimation()
  initStickyTitle()
})
</script>

<template lang="pug">
section.block-experience#block-experience
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
          .job__year {{ job.period }}
          .job__title {{ job.position }}
          .job__skills
            .skill(v-for="(skill, i) of job.skills" :key="i") {{ skill.text }}
          .job__info
            p {{ job.intro }}
            ul
              li(v-for="(item, i) of job.experience" v-html="item")
    //#block-1.block.block-1
    //  .block__content
    //    .job
    //      .job__year 2019 - now
    //      .job__title Senior Frontend Developer
    //      .job__info
    //        p Development of web solutions for interaction with 19 blockchain networks: a web version of a cryptocurrency wallet with 1500+ crypto assets on the client side.
    //        ul
    //          li Developing Google Chrome Extensions with web3 functionality using Vue.js.
    //          li Creating a web widget on Vue.js for working with cryptocurrencies and authorization via the Google Drive API.
    //          li Creating open-source projects for working with blockchain networks.
    //          li Designed SSR websites on Nuxt.js, including automatic generation of more than 1000+ pages and their AMP copies.
    //          li Development of white-label solutions for cryptocurrency operations.
    //          li Working on creating an admin panel for interacting with the internal API.
    //          li Performing bug fixes and conducting code reviews.
    //          li Supervising junior developers and providing training.
    //#block-2.block.block-2
    //  .block__content Block 2
    //#block-3.block.block-3
    //  .block__content Block 3
    //#block-4.block.block-4
    //      .block__content Block 4
</template>

<style scoped lang="scss">
.block-experience {
  position: relative;
  z-index: 2;
  background-color: #0A122A;
  color: white;
  border-top-left-radius: 5rem;
  border-top-right-radius: 5rem;
}

.block-title {
  height: 8em;
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
    grid-area: year;
    font-size: 3rem;
  }

  &__title {
    grid-area: title;
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  &__info {
    grid-area: info;
  }

  &__skills {
    grid-area: skills;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
}

.skill {
  padding: 0.5rem;
  background-color: #A61C3C;
}

.block {
  //position: absolute;
  //top: 0;
  width: 100%;
  height: 100vh;

  &__content {
    scale: 1;
    width: 100%;
    height: 100%;
    //border-radius: 0;
    padding: 3rem;
  }

  &-1 {
    .block__content {
      //background-color: #8e7a47;
    }
  }

  &-2 {
    .block__content {
      //background-color: #7a306c;
    }
  }

  &-3 {
    .block__content {
      //background-color: #8e8dbe;
    }
  }

  &-4 {
    .block__content {
      //background-color: #9b2915;
    }
  }
}
</style>
