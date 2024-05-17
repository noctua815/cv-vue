<script setup lang="ts">
import FilesSection from '@/components/home/FileSection.vue'
import ScribbleLink from '@/components/ui/ScribbleLink.vue'
import DropdownItem from '@/components/ui/DropdownItem.vue'
import SkillItem from '@/components/ui/SkillItem.vue'
import SimpleList from '@/components/ui/SimpleList.vue'
import { Jobs, Education, Footer } from '@/content/home'
</script>

<template lang="pug">
  section.head
    .head__name
      h3 Viktoriia Denisova
    .head__info
      .head__info-pos
        p Senior Frontend Developer
      .head__info-contacts
        .link
          ScribbleLink(href="mailto:vikadenisova.cy@gmail.com" text="vikadenisova.cy@gmail.com")
        .link
          ScribbleLink(href="tel: +357 94 208 715" text="+357 94 208 715")
        .link
          ScribbleLink(href="vikadenisova.cy@gmail.com" text="LinkedIn")
  section.resume
    .resume__head
      h1(data-splitting) Resume
    .resume__body
      FilesSection(:num="1" title="Experience")
        DropdownItem(v-for="(item, i) of Jobs" :item="item" :key="i")
          template(v-slot:more)
            .skills
              SkillItem(v-if="item.skills" v-for="(skill, i) of item.skills" :key="i" :skill="skill")
      FilesSection(:num="2" title="Education")
        DropdownItem(v-for="(item, i) of Education" :item="item" :key="i")
    .resume__body
      .footer
        .footer__photo
          img(src="@/assets/images/gradient-2.jpeg" alt="selfie")
        .footer__skills
          SimpleList(:title="Footer.skills.title" :list="Footer.skills.list")
        .footer__lang
          SimpleList(:title="Footer.lang.title" :list="Footer.lang.list" :full-width="true")
        .footer__tools
          SimpleList(:title="Footer.tools.title" :list="Footer.tools.list")
</template>

<style scoped lang="scss">
.footer {
  margin-top: 14rem;
  display: grid;
  grid-template-areas:
    'photo . skills skills lang'
    'photo . tools tools lang';
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 14rem);
  //gap: 1rem;

  @include for-phone-only {
    grid-template-areas:
    'skills skills lang'
    'tools tools lang'
    'photo photo photo';
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 1rem
  }

  &__photo {
    grid-area: photo;
    background-color: var(--c-black);
    overflow: hidden;

    @include for-phone-only {
      aspect-ratio: 3;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__skills {
    grid-area: skills;
  }

  &__lang {
    grid-area: lang;
  }

  &__tools {
    grid-area: tools;
  }
}

.head {
  display: grid;
  grid-template-columns: 3fr 1fr;
  justify-content: space-between;
  align-items: baseline;
  height: 10rem;
  font-family: var(--font-secondary);

  @include for-phone-only {
    grid-template-columns: 1fr;
    height: auto;
  }

  &__name {
    width: 60%;
    margin-top: -0.9rem;

    @include for-phone-only {
      width: 100%;
      margin: 0 0 toRem(32);
    }
  }

  &__info {
    text-align: right;

    &-pos {
      margin-bottom: 2rem;
    }
  }
}

.link {
  margin: 1rem 0;

  @include for-phone-only {
    margin: 0.8rem 0;
  }
}

.resume {
  &__head {
    margin-left: -1.3rem;
    margin-top: 3.2rem;
    margin-bottom: 6.5rem;

    @include for-phone-only {
      margin: 2.15rem 0 4.3rem -0.3rem;
    }
  }
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
