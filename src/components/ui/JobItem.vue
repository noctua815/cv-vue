<script setup lang="ts">
import type { Job } from '@/types'
import SkillList from '@/components/ui/SkillList.vue'

defineProps<{
  job: Job
}>()
</script>

<template lang="pug">
  .job
    .job__title
      .job__left
        .job__year {{ job.period }}
        .job__company
          span {{ job.employer }}
          span ({{ job.country }})
      .job__right
        .job__pos {{ job.position }}
    .job__skills
      SkillList(:skills="job.skills")
    .job__info.text-content
      p {{ job.intro }}
      ul
        li(v-for="(item, i) of job.experience" v-html="item")
</template>

<style scoped lang="scss">
.job {
  display: grid;
  align-items: baseline;
  grid-template-areas:
    'title'
    'skills'
    'info';
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid black;

  @include for-tablet {
    grid-template-areas:
      'title title'
      'skills info';
    grid-template-columns: 35% auto;
    gap: 2rem 3rem;
    padding: 2rem;
  }

  &__title {
    display: flex;
    grid-area: title;
    flex-direction: row-reverse;
    gap: 1rem;

    @include for-tablet {
      gap: 3rem;
      flex-direction: row;
    }
  }

  &__left {
    width: 50%;
    flex-shrink: 0;

    @include for-tablet {
      width: 35%;
    }
  }

  &__right {
    width: 50%;

    @include for-tablet {
      width: 100%;
    }
  }

  &__year {
    position: relative;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    font-weight: var(--font-weight-bold);

    @include for-tablet {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
  }

  &__pos {
    font-family: var(--font-secondary);
    font-size: 1.5rem;
    font-weight: bold;

    @include for-tablet {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
  }

  &__company {
    font-size: 1rem;
    line-height: 1.33;

    span:first-child {
      font-weight: var(--font-weight-bold);
      margin-right: 0.5rem;
    }
  }

  &__info {
    grid-area: info;
  }

  &__skills {
    position: relative;
    grid-area: skills;
  }
}
</style>
