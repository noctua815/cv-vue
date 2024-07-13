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

preloadFonts().then(() => {
  loading.value = false
  console.log('loading', loading)
})
</script>

<template lang="pug">
  main
    HeroSection(:loading="loading")
    IntroSection(:loading="loading")
    ExperienceBlock(:loading="loading")
</template>

<style scoped lang="scss">
main {
  position: relative;
  min-height: 100vh;
}
</style>
