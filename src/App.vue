<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import ExperienceBlock from '@/components/home/ExperienceBlock.vue'
import IntroSection from '@/components/home/IntroSection.vue'
import {ref} from 'vue'
import { gsap } from 'gsap'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {preloadFonts} from "@/helpers/preload-fonts";
gsap.registerPlugin(ScrollTrigger)

const loading = ref(true)
const animationFinished = ref(false)

const heroAnimationFinished = () => {
  console.log('APP heroAnimationFinished')
  animationFinished.value = true
}
preloadFonts().then(() => {
  loading.value = false
  console.log('loading', loading)
})
</script>

<template lang="pug">
  main(:class="{'loading': !animationFinished}")
    HeroSection(:loading="loading" @heroAnimationFinished="heroAnimationFinished")
    IntroSection(:loading="loading")
    ExperienceBlock(:loading="loading")
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
