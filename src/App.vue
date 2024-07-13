<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import ExperienceBlock from '@/components/home/ExperienceBlock.vue'
import IntroSection from '@/components/home/IntroSection.vue'
import { gsap } from 'gsap'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
</script>

<template lang="pug">
  main
    HeroSection
    IntroSection
    ExperienceBlock
</template>

<style scoped lang="scss">
main {
  position: relative;
  min-height: 100vh;
  //overflow-x: hidden;
}
</style>
