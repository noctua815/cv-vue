<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template lang="pug">
  .button(@click="$emit('click')")
    .button__bg
    .button__text {{ text }}
</template>

<style scoped lang="scss">
.button {
  position: relative;
  display: inline-block;
  //background-color: var(--c-light-violet);
  border-radius: 0.5rem;
  cursor: pointer;
  color: var(--c-white);

  &:hover {
    .button__bg {
      transform: scale3d(1.2, 1.2, 1);

      &:before {
        transition: transform 0.5s cubic-bezier(0.1, 0, 0.3, 1);
        transform: translate3d(-50%, -50%, 0) scale3d(1, 1, 1);
      }

      &:after {
        opacity: 1;
        transition-duration: 0.3s;
        transition-delay: 0.2s;
      }
    }
  }

  &__text {
    font-family: var(--font-secondary);
    font-size: 1rem;
    //font-weight: 700;
    mix-blend-mode: difference;
    padding: 1rem;
  }

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:var(--c-white);
    border-radius: 0.85rem;
    overflow: hidden;
    transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);

    &:before,
    &:after {
      content: '';
      position: absolute;
      background: var(--c-violet);
    }

    &:before {
      width: 110%;
      height: 0;
      padding-bottom: 110%;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 1);
    }

    &:after {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.3s;
    }
  }
}


</style>
