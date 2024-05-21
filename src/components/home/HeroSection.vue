<script setup lang="ts">
import { reactive } from 'vue'
import ScribbleLink from '@/components/ui/ScribbleLink.vue'

const contacts = reactive([
  {
    text: 'Github',
    href: 'https://github.com/noonewallet'
  },
  {
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/viktoriia-denisova-743a9a260/'
  },
  {
    text: 'Telegram',
    href: 'https://t.me/vikasova'
  },
  {
    text: 'Gmail',
    href: 'mailto:vikadenisova.cy@gmail.com'
  }
])
</script>

<template lang="pug">
  section.hero
    .hero__wr
      .hero__links
        ScribbleLink(v-for="(item, i) of contacts" :key="i" v-bind="item")
      .hero__title
        span FRONTEND
        span DEVELOPER
      .hero__photo
      .hero__name
        span VIKTORIIA
        span DENISOVA
</template>

<style scoped lang="scss">
.hero {
  position: sticky;
  top: 0;
  display: flex;
  min-height: 100vh;
  background-color: #e0dfdd;
  color: black;

  &__wr {
    height: 100vh;
    width: 100%;
    border: 1px solid black;
    padding: 2rem;
    display: grid;
    grid-template-areas:
      'links'
      'title'
      'photo'
      'name';
    grid-template-rows: fit-content(20%) auto auto auto;
    grid-row-gap: 1rem;

    //& > div {
    //  border: 1px solid black;
    //}
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
</style>
