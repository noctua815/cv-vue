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
  z-index: 1;
  display: flex;
  min-height: 100vh;
  background-color: #B3BDA9;
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
    grid-template-rows: fit-content(20%) 3fr 1fr 2fr;
    grid-row-gap: 1rem;

    //& > div {
    //  border: 1px solid black;
    //}
  }

  &__title {
    font-size: 6rem;
    align-self: center;
    //font-weight: bold;

    span {
      display: block;
    }
  }

  &__name {
    align-self: center;
    text-align: right;
    font-size: 6rem;
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
