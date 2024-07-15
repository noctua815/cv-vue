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
  grid-template-areas:
    'title title'
    'skills info';
  grid-template-columns: 35% auto;
  align-items: baseline;
  gap: 2rem 3rem;
  border: 1px solid black;
  padding: 2rem;

  @include for-phone {
    grid-template-areas:
    'title'
    'skills'
    'info';
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 1rem;
  }

  &__title {
    display: flex;
    grid-area: title;
    gap: 3rem;

    @include for-phone {
      flex-direction: row-reverse;
      gap: 1rem;
    }
  }

  &__left {
    flex-shrink: 0;
    width: 35%;

    @include for-phone {
      width: 50%;
      flex-shrink: 0;
    }
  }

  &__right {
    @include for-phone {
      width: 50%;
    }
  }

  &__year {
    position: relative;
    font-size: 3rem;
    margin-bottom: 1rem;

    @include for-phone {
      font-size: 1.5rem;
      font-weight: var(--font-weight-bold);
      margin-bottom: 0.5rem;
    }
  }

  &__pos {
    font-family: var(--font-secondary);
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: bold;

    @include for-phone {
     font-size: 1.5rem;
      margin-bottom: 0;
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

//.skill {
//  padding: 0.5rem;
//  border-radius: 0.7rem;
//  color: var(--c-black);
//  border: 1px solid var(--c-black);
//}
</style>
