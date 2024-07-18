<script setup lang="ts">
defineProps<{
  href: string
  text: string
}>()
const emit = defineEmits(['click'])
</script>

<template lang="pug">
  a.scribble-link(:href="href" target="_blank" @click="emit('click')") {{ text }}
    svg(class="scribble-link__svg" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 101 9")
      path(d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1")
</template>

<style scoped lang="scss">
.scribble-link {
  position: relative;
  width: fit-content;
  text-decoration: none;
  color: var(--c-link);
  font-size: 1rem;
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-bold);
  transition: color 0.25s ease;

  &:hover {
    color: var(--c-link-hover);

    path {
      stroke-dashoffset: 0;
      transition-timing-function: cubic-bezier(0.8, 1, 0.7, 1);
      transition-duration: 0.3s;
    }
  }

  &__svg {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 0.5em;
    pointer-events: none;
    fill: none;
    stroke: currentColor;
    stroke-width: 1px;

    path {
      stroke-dasharray: 1;
      stroke-dashoffset: 1;
      transition: stroke-dashoffset 0.6s cubic-bezier(0.7, 0, 0.3, 1);
    }
  }
}
</style>
