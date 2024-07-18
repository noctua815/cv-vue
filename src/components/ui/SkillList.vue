<script setup lang="ts">
import type { Skill } from '@/types.ts'
import SkillItem from '@/components/ui/SkillItem.vue'
import { onMounted, reactive } from 'vue'
import chroma from 'chroma-js'

const props = defineProps<{
  skills: Skill[]
}>()

let colors = reactive<string[]>([])

const scaleColors = (start: string, end: string) => {
  const arr = chroma.scale([start, end]).mode('lch').colors(props.skills.length)
  for (let i = 0; i < arr.length; i++) {
    const color = arr[i] as string
    colors.push(color)
  }
}

onMounted(() => {
  scaleColors('#dccae2', '#87d2d4')
})
</script>

<template lang="pug">
  .skill-list(v-if="skills")
    SkillItem(v-for="(skill, i) of skills"
      :key="i"
      :color="colors[i]"
      :skill="skill")
</template>

<style scoped lang="scss">
.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
