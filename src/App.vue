<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import ExperienceBlock from '@/components/home/ExperienceBlock.vue'
import IntroSection from '@/components/home/IntroSection.vue'
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { preloadFonts } from '@/helpers/preload-fonts'
import {debounce} from "@/helpers/debounce"
import { initSmoothScrolling } from '@/helpers/smooth-scroll'
gsap.registerPlugin(ScrollTrigger)

const loading = ref(true)
const animationFinished = ref(false)
const resize = ref(false)
const heroAnimationFinished = () => {
  animationFinished.value = true
}

const resizeContent = () => {
  resize.value = true
  setTimeout(() => {
    resize.value = false
  }, 100)
}
preloadFonts().then(() => {
  loading.value = false
  initSmoothScrolling()
  window.addEventListener('resize', debounce(resizeContent, 150))
})
</script>

<template lang="pug">
  main(:class="{'loading': !animationFinished}")
    HeroSection(:loading="loading" :resize="resize"
     @heroAnimationFinished="heroAnimationFinished")
    IntroSection(:loading="loading" :resize="resize")
    ExperienceBlock(:loading="loading" :resize="resize")
</template>

<style scoped lang="scss">
main {
  position: relative;
  min-height: 100vh;

  &.loading {
    height: 100vh;
    overflow: hidden;
  }
}
</style>
