<script setup lang="ts">
import { ref, onMounted, defineEmits } from 'vue'
import { gsap } from 'gsap'

const rows = ref(1)
const cols = ref(6)
const emit = defineEmits(['animationDone'])

const calcGrid = () => {
  if (!document || !document.body) return
  const bg = document.getElementById('bg')
  const height = bg.offsetHeight
  const width = document.body.offsetWidth

  let fontSize = (1.2 * width) / 100
  if (fontSize < 16) fontSize = 16

  const rowHeight = 2 * fontSize - 1
  rows.value = Math.ceil(height / rowHeight) - 1
}

const animateGrid = () => {
  const rows = document.querySelectorAll('#rows .line')
  const cols = document.querySelectorAll('#cols .line')

  const tl = gsap.timeline({ paused: true, ease: 'linear' })

  tl.to(cols, { height: '100%', delay: 0.5, duration: 2 }).to(
    rows,
    {
      width: '100%',
      duration: 2,
      onComplete: () => {
        emit('animationDone')
      }
    },
    '-=1'
  )

  tl.play()
}
onMounted(() => {
  setTimeout(() => {
    calcGrid()
  }, 0)

  setTimeout(() => {
    animateGrid()
  }, 100)
})
</script>

<template lang="pug">
  .bg#bg
    .cols#cols(:style="{gridTemplateColumns: `repeat(${cols}, max-content)`}")
      .line(v-for="el of cols" :key="el")
    .rows#rows
      .line(v-for="el of rows" :key="el" :data-id="el")
</template>

<style scoped lang="scss">
.bg {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  opacity: 0.2;
}

.cols,
.rows {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: grid;
}

.cols {
  justify-content: space-between;

  .line {
    height: 0%;
    width: 1px;
    background-color: black;
  }
}

.rows {
  grid-auto-rows: 2rem;
  display: none;

  .line {
    width: 0;
    height: 1px;
    background-color: black;

    @include for-phone-only {
      display: none;
    }
  }
}
</style>
