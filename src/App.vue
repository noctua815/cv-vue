<script setup lang="ts">
import {nextTick} from 'vue'
import {gsap} from 'gsap'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
// import Splitting from 'splitting'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function initBlockAnimation() {
  const blocks = document.querySelectorAll('.block')

  console.log('?', document.querySelector('#block-1 .block__content'),)

  // ScrollTrigger.create({
  //   trigger: '#block-1',
  //   start: "top top",
  //   end: "bottom 100%",
  //   pin: '#block-2',
  //   markers: true
  // })


  for (const [i, block] of blocks.entries()) {
    block.style.zIndex = i

    // gsap.to(block.querySelector('.block__content'), {
    //   scale: 1,
    //   borderRadius: '0',
    //   scrollTrigger: {
    //     trigger: block,
    //     start: "top top",
    //     end: "top 150px",
    //     // pin: block,
    //     scrub: true,
    //     markers: true,
    //     invalidateOnRefresh: true
    //     // pinSpacing: false,
    //   },
    // })
    const tl = gsap.timeline();
    tl.from(block.querySelector('.block__content'), {scale: 0.9, borderRadius: '5rem'})
    tl.to(block.querySelector('.block__content'), {scale: 1, borderRadius: '0'})
    // tl.to(block.querySelector('.block__content'), {scale: 0, borderRadius: '0'})
    // const blockAnimation = gsap.to(block.querySelector('.block__content'), {scale: 0.7, borderRadius: '5rem'})

    ScrollTrigger.create({
      trigger: block,
      start: "top 25%",
      end: '+=50%',
      markers: true,
      animation: tl,
      scrub: 1,
      onLeave: (self) => {
        console.log('onLeave', self)
      },
      onLeaveBack: (self) => {
        console.log('onLeaveBack', self)
      },
    })

    ScrollTrigger.create({
      trigger: block,
      start: "top 100px",
      end: 'max',
      pin: true,
      pinSpacing: false
    })
  }
}

function initStickyTitle() {
  ScrollTrigger.create({
    trigger: document.querySelector('.block-title '),
    pin: true,
    start: 'top top',
    end: 'max',
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
  main
    section.hero
      .hero__wr
        .hero__links
          a(href="/") Github
          a(href="/") LinkedIn
          a(href="/") Github
          a(href="/") Github
        .hero__title
          span FRONTEND
          span DEVELOPER
        .hero__photo
        .hero__name
          span VIKTORIIA
          span DENISOVA
    .block-title
      h2 Experience
    section.block-experience
      #block-1.block.block-1
        .block__content
          .job
            .job__year 2019 - now
            .job__title Senior Frontend Developer
            .job__info
              p Development of web solutions for interaction with 19 blockchain networks: a web version of a cryptocurrency wallet with 1500+ crypto assets on the client side.
              ul
                li Developing Google Chrome Extensions with web3 functionality using Vue.js.
                li Creating a web widget on Vue.js for working with cryptocurrencies and authorization via the Google Drive API.
                li Creating open-source projects for working with blockchain networks.
                li Designed SSR websites on Nuxt.js, including automatic generation of more than 1000+ pages and their AMP copies.
                li Development of white-label solutions for cryptocurrency operations.
                li Working on creating an admin panel for interacting with the internal API.
                li Performing bug fixes and conducting code reviews.
                li Supervising junior developers and providing training.
      #block-2.block.block-2
        .block__content Block 2
      #block-3.block.block-3
        .block__content Block 3
      #block-4.block.block-4
        .block__content Block 4
    section.contact-section
      p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</template>

<style scoped lang="scss">
main {
  position: relative;
  min-height: 100vh;
  //overflow: auto;
}

.hero {
  position: sticky;
  top: 0;
  display: flex;
  min-height: 100vh;
  background-color: #E0DFDD;
  color: black;

  &__wr {
    height: 100vh;
    width: 100%;
    border: 1px solid black;
    padding: 2rem;
    display: grid;
    grid-template-areas: "links"
      "title"
      "photo"
      "name";
    grid-template-rows: fit-content(20%) auto auto auto;
    grid-row-gap: 1rem;

    & > div {
      border: 1px solid black;
    }
  }

  &__title {
    font-size: 5rem;
    align-self: center;
    //font-weight: bold;

    span {
      display: block;
    }
  }

  &__name {
    align-self: center;
    text-align: right;
    font-size: 5rem;
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
}

.job {
  display: grid;
  grid-template-areas: "year title"
  ". info";
  grid-template-columns: 40% 60%;
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
}

.block {
  //position: absolute;
  //top: 0;
  width: 100%;
  height: 100vh;
  border: 1px solid black;

  &__content {
    scale: 1;
    width: 100%;
    height: 100%;
    border-radius: 0;
    padding: 3rem;
  }

  &-1 {

    .block__content {
      background-color: #8e7a47;
    }
  }

  &-2 {
    .block__content {
      background-color: #7a306c;
    }
  }

  &-3 {
    .block__content {
      background-color: #8e8dbe;
    }
  }

  &-4 {
    .block__content {
      background-color: #9b2915;
    }
  }
}

.contact-section {
  position: relative;
  z-index: 10;
  height: 200vh;
  background-color: white;
}
</style>
