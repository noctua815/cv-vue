<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {TextAnimator} from '@/helpers/terminal-text-animation'

defineProps<{
  href: string
  text: string
}>()

const emit = defineEmits(['click'])
const link = ref(null)

const initAnimation = (linkEl) => {
  const spectilaLink = new TextAnimator(linkEl)

  linkEl.addEventListener('mouseenter', () => {
    spectilaLink.animate()
  })
}


onMounted(() => {
  initAnimation(link.value)
})
</script>

<template lang="pug">
  a.terminal-link(ref="link"
    :href="href"
    target="_blank"
    @click="emit('click')") {{ text }}
</template>

<style lang="scss" scoped>
.terminal-link {
  position: relative;
  font-kerning: none;
  white-space: nowrap;
  color: var(--c-black);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  cursor: pointer;

  :deep(.char) {
    position: relative;
    --opa: 0;

    &:after {
      content: '';
      position: absolute;
      width: 1ch;
      height: 100%;
      top: 0;
      left: 0;
      background: currentColor;
      opacity: var(--opa);
    }
  }
}
</style>
