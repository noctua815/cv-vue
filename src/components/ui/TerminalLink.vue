<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { TextAnimator } from '@/helpers/terminal-text-animation'

defineProps<{
  href: string
  text: string
}>()

const emit = defineEmits(['click'])
const link = ref<HTMLElement>()

const initAnimation = (linkEl: HTMLElement) => {
  if (!linkEl) return
  const spectilaLink = new TextAnimator(linkEl)

  linkEl.addEventListener('mouseenter', () => {
    spectilaLink.animate()
  })
}

onMounted(() => {
  if (link.value) initAnimation(link.value)
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
  display: inline-block;
  font-kerning: none;
  white-space: nowrap;
  color: var(--c-black);
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-bold);
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
      background: var(--c-black);
      opacity: var(--opa);
    }
  }
}
</style>
