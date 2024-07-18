<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Contact } from '@/types'
import TerminalLink from '@/components/ui/TerminalLink.vue'

defineProps<{
  contacts: Contact[]
}>()

const toggleMenu = ref(false)
const openMenu = () => {
  toggleMenu.value = !toggleMenu.value
  if (toggleMenu.value) {
    document.addEventListener('click', initCloseByClick)
  } else {
    document.removeEventListener('click', initCloseByClick)
  }
}

const initCloseByClick = (event: Event) => {
  if (!event || !event.target) return
  event.stopPropagation()
  const { target } = event
  const isHeaderContainer = (target as HTMLElement).closest('.header')
  if (!isHeaderContainer) {
    toggleMenu.value = false
    // document.removeEventListener('click', initOutsideClick) // TODO fix
  }
}

const linkClick = () => {
  if (toggleMenu.value) toggleMenu.value = false
}

onMounted(() => {})
</script>

<template lang="pug">
  header.header
    .header__list(:class="{'is-opened': toggleMenu}")
      .header__link(
        v-for="(item, i) of contacts"
        :key="i")
        TerminalLink(v-bind="item"  @click="linkClick")
    .header__btn
      .btn(@click="openMenu" :class="{'is-opened': toggleMenu}")
        span
        span
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  display: grid;
  grid-template-areas: 'btn';

  @include for-tablet {
    grid-template-areas: 'list';
  }

  &__list {
    position: absolute;
    display: grid;
    grid-template-areas: 'links';
    grid-template-columns: auto;
    z-index: 5;
    width: 100%;
    top: calc(100% - 1px);
    left: 0;
    gap: 0;

    @include for-tablet {
      position: relative;
      grid-area: list;
      grid-template-areas: 'links';
      grid-template-columns: repeat(5, min-content);
      justify-content: space-between;
      gap: 2rem;
      top: 0;
    }

    &.is-opened {
      .header__link {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
    }
  }

  &__link {
    padding: 1rem 0;
    border-bottom: 1px solid var(--c-black);
    transform: translateY(-1rem);
    opacity: 0;
    visibility: hidden;
    background-color: var(--c-light-violet);
    transition: all 0.3s ease;

    @include for-tablet {
      transition: none;
    }

    &:first-child {
      border-top: 1px solid var(--c-black);

      @include for-tablet {
        border-top: none;
      }
    }

    @include for-tablet {
      padding: 0;
      border: none;
      transform: none;
      opacity: 1;
      visibility: visible;
    }
  }

  @for $i from 1 through 5 {
    .header__link:nth-child(#{$i}n) {
      transition-delay: #{$i * 0.1}s;
    }
  }

  &__btn {
    grid-area: btn;
    justify-self: end;

    @include for-tablet {
      display: none;
    }
  }
}

.btn {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 2rem;
  aspect-ratio: 1;
  border: 1px solid var(--c-black);

  &.is-opened {
    span {
      &:nth-child(1) {
        transform: rotate(-45deg) translate(-3px, 3px);
      }

      &:nth-child(2) {
        width: 100%;
        transform: rotate(45deg) translate(-4px, -4px);
      }
    }
  }

  span {
    display: block;
    height: 1px;
    background-color: var(--c-black);
    transform-origin: center center;
    transition: all 0.2s cubic-bezier(0.5, 0.72, 0.79, 0.55);

    &:nth-child(1) {
      width: 100%;
      margin-bottom: 8px;
    }

    &:nth-child(2) {
      width: 80%;
    }
  }
}
</style>
