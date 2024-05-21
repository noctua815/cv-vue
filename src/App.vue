<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import ExperienceBlock from '@/components/home/ExperienceBlock.vue'
import { nextTick } from 'vue'
import { gsap } from 'gsap'
// import 'splitting/dist/splitting.css'
// import 'splitting/dist/splitting-cells.css'
// import Splitting from 'splitting'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
</script>

<template lang="pug">
  main
    HeroSection
    ExperienceBlock
    section.contact-section
      p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</template>

<style scoped lang="scss">
main {
  position: relative;
  min-height: 100vh;
  //overflow: auto;
}

.contact-section {
  position: relative;
  z-index: 10;
  height: 100vh;
  background-color: #0A122A;
  color: white;
}
</style>
