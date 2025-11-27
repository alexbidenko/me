<script lang="ts" setup>
import zod from "zod";
import { LazyCaseAsmy, LazyCaseAiRussia } from '#components';

const SEO_MAP: Record<ShowCase, { title: string; description: string }> = {
  [ShowCase.ASMY]: {
    title: 'Проект Asmy – Панель управления сервером – Александр Биденко',
    description: 'Подробное описание проекта Asmy (Admire Server Manager) – панели администрирования серверов. Управление Docker, настройка Web-сервера, файловый менеджер и многое другое. Разработано Александром Биденко.',
  },
  [ShowCase.AI_RUSSIAN]: {
    title: 'Проект AI Russia от Mail.ru – Александр Биденко',
    description: 'Кейс проекта AI Russia от Mail.ru, разработанного Александром Биденко. Сайт премии в области AI-технологий с уникальным визуальным оформлением и сложной версткой.',
  },
};

const route = useValidatedRoute({ params: zod.object({ slug: zod.enum(ShowCase) }) });

useSeoMeta({
  title: SEO_MAP[route.params.slug].title,
  description: SEO_MAP[route.params.slug].description,
  ogTitle: SEO_MAP[route.params.slug].title,
  ogDescription: SEO_MAP[route.params.slug].description,
});

const CaseComponent = computed(() => {
  switch (route.params.slug) {
    case ShowCase.ASMY: return LazyCaseAsmy;
    case ShowCase.AI_RUSSIAN: return LazyCaseAiRussia;
    default: return <never>route.params.slug;
  }
});

definePageMeta({
  name: Route.PROJECT_VIEW,
});
</script>

<template>
  <UContainer as="main">
    <component :is="CaseComponent" />
  </UContainer>
</template>
