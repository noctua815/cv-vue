<script setup lang="ts">
defineProps<{
  title: string
  list: string[]
  fullWidth?: boolean
}>()
</script>

<template lang="pug">
.list(:class="{'list--full-width': fullWidth}")
  .list__title.s-text {{ title }}
  .list__body
    .list__item(v-for="(item, i) of list" :key="i") {{ item }}
</template>

<style scoped lang="scss">
.list {
  &--full-width {
    .list__item {
      width: 100%;
    }
  }

  &__title {
    margin: 0 1px 1rem;
    padding: 0 2px;
    line-height: 2rem;
  }

  &__body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__item {
    width: calc(50% - 2px);
    margin: 0 1px;
    padding: 0 2px;
    line-height: 1.5;
    font-size: 1rem;
    background-color: var(--c-background);
  }
}
</style>
