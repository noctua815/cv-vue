<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import ExperienceBlock from '@/components/home/ExperienceBlock.vue'
import FooterSection from '@/components/home/FooterSection.vue'
import { nextTick } from 'vue'
import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
</script>

<template lang="pug">
  main
    HeroSection
    ExperienceBlock
    FooterSection
</template>

<style scoped lang="scss">
main {
  position: relative;
  min-height: 100vh;
  //overflow: auto;
}
</style>
