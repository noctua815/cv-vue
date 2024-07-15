<script setup lang="ts">
import type { Job } from '@/types.ts'
import { ref, useSlots } from 'vue'

defineProps<{
  item: Job
}>()

const slots = useSlots()
const opened = ref(false)
const toggleItem = () => {
  opened.value = !opened.value
}
</script>

<template lang="pug">
  .item(:class="{'item--opened': opened}")
    .item__head(@click="toggleItem")
      .item__head-left {{ item.position }} —
        b {{ item.employer }}
      .item__head-right
        b {{ item.period }}
    .item__body
      .item__body-inner
        .item__body-content
          .item__country(v-if="item.country")
            h5 Location: {{ item.country }}
          .text-content
            p(v-if="item.intro") {{ item.intro }}
            ul(v-if="item.experience")
              li(v-for="(li, i) of item.experience" :key="i" v-html="li" )
          .item__body-more(v-if="slots.more")
            slot(name="more")
</template>

<style scoped lang="scss">
.item {
  &--opened {
    .item__head:before {
      opacity: 0.5;
      filter: hue-rotate(360deg);
    }

    .item__body {
      grid-template-rows: 1fr;
    }

    .item__body-inner {
      border-color: var(--c-black);
    }
  }

  &__head {
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: calc(1.5rem - 1px) 0;
    border-bottom: 1px solid var(--c-black);
    user-select: none;
    cursor: pointer;
    overflow: hidden;

    @include for-phone {
      display: block;
      padding: 1rem 0;
    }

    &:before {
      content: '';
      position: absolute;
      z-index: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50vh;
      background: radial-gradient(red, blue, yellow);
      opacity: 0;
      transition: all 3s ease;
      pointer-events: none;
    }

    &:hover {
      &:before {
        transition: all 3s ease;
        opacity: 0.5;
        filter: hue-rotate(360deg);
      }
    }

    //&:hover {
    //  &:after {
    //    transform: scaleY(1);
    //    transform-origin: left top;
    //  }
    //}

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-color: var(--c-blue);
      mix-blend-mode: exclusion;
      transform: scaleY(0);
      transform-origin: left bottom;
      transition: transform 0.3s ease;
    }

    &-left {
      position: relative;
      z-index: 1;

      b {
        margin-left: 0.5rem;
      }

      @include for-phone {
        margin-bottom: 0.5rem;
      }
    }

    &-right {
      position: relative;
      z-index: 1;
      @include for-phone {
        transform: scale(0.8);
        transform-origin: left bottom;
      }
    }
  }

  &__body {
    display: grid;
    grid-template-rows: 0fr;
    width: 100%;
    transition: grid-template-rows 0.3s ease-in;

    &--opened {
    }

    &-inner {
      position: relative;
      overflow: hidden;
      border-bottom: 1px solid transparent;
    }

    &-content {
      padding: 1.15rem 0 3rem;
      width: 70%;

      @include for-phone {
        width: 100%;
      }
    }

    &-more {
      margin-top: 2rem;
    }
  }

  &__country {
    //position: absolute;
    //top: 1rem;
    //right: 0;
    //font-weight: var(--font-weight-bold);
    //line-height: 1.5;
    margin-bottom: 1rem;
  }
}
</style>
