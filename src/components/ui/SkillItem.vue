<script setup lang="ts">
import type { Skill } from '@/types.ts'
import { computed } from 'vue'

const props = defineProps<{
  skill: Skill
  color?: string
}>()

const computedStyles = computed(() => {
  return {
    backgroundColor: props.color,
    color: 'black'
  }
})
</script>

<template lang="pug">
  //.skill(:class="[`is-${skill.color || 'black'}`]")
  .skill(:style="computedStyles")
    .skill__text {{ skill.text }}
    .skill__bg
</template>

<style scoped lang="scss">
.skill {
  display: inline-flex;
  padding: 0.4rem 1rem 0.5rem;
  border-radius: var(--border-radius-normal);

  @include for-phone {
    padding: 0.2rem 0.5rem 0.3rem;
  }

  &.is-black {
    background-color: var(--c-black);
    color: var(--c-white);
  }

  &.is-blue {
    background-color: var(--c-blue);
    color: var(--c-white);
  }

  &.is-yellow {
    background-color: var(--c-yellow);
    color: var(--c-black);
  }

  & + .skill {
    //margin-left: 0.5rem;
  }

  &__text {
    font-size: 0.75rem;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
  }
}
</style>
