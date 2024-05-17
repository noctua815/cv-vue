<script setup lang="ts">
import { computed } from 'vue'

const prop = defineProps<{
  num: number
  title: string
}>()

const computedNum = computed(() => {
  return prop.num >= 10 ? `(${prop.num})` : `(0${prop.num})`
})
</script>

<template lang="pug">
  .section
    .section__num
      h4.font-decor {{ computedNum }}
    .section__title {{ title }}
    .section__info
      slot
</template>

<style scoped lang="scss">
.section {
  display: grid;
  grid-template-areas:
    'num title'
    '. content';
  grid-template-columns: 16rem 1fr;
  gap: 1px;

  @include for-phone-only {
    grid-template-areas:
    'num'
    'title'
    'content';
    grid-template-columns: 1fr;
  }

  & + & {
    margin-top: 4.55rem;
  }

  &__num {
    grid-area: num;
    align-self: baseline;
    margin-right: 1px;

    @include for-phone-only {
      h4 {
        font-size: 0.8rem;
        line-height: 1;
        margin-bottom: 0.5rem;
        opacity: 0.5;
      }
    }
  }

  &__title {
    grid-area: title;
    align-self: baseline;
    margin-left: -0.3rem;
    margin-bottom: 1.35rem;
    @extend .xl-text;

    @include for-phone-only {
      margin: 0;
    }
  }

  &__info {
    grid-area: content;
    background-color: var(--c-background);
    margin: 0 1px;
  }
}
</style>
