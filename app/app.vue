<script lang="ts" setup>
import type {NavigationMenuItem} from "#ui/types";
import avatar from '~/assets/images/avatar.jpeg?as=meta';

const OG_IMAGE_WIDTH = 640;

const NAVIGATION_ITEMS: NavigationMenuItem[] = [
  {
    label: 'Резюме',
    to: { name: Route.RESUME },
  },
  {
    label: 'Frontend',
    to: { name: Route.RESUME_VIEW, params: { category: Category.FRONTEND } },
  },
  {
    label: 'Backend',
    to: { name: Route.RESUME_VIEW, params: { category: Category.BACKEND } },
  },
  {
    label: 'DevOps',
    to: { name: Route.RESUME_VIEW, params: { category: Category.DEVOPS } },
  },
];

const img = useImage();

const ogImage = img.getImage(avatar.src, { modifiers: { width: OG_IMAGE_WIDTH }, sizes: `${OG_IMAGE_WIDTH}` });

useSeoMeta({
  title: 'Александр Биденко – Senior Full-Stack разработчик, DevOps и архитектор',
  description: 'Портфолио и резюме Александра Биденко, опытного full-stack разработчика, DevOps-инженера и архитектора с опытом в VK, Yandex, Альфа-Банке. Проектирование и разработка сложных систем, frontend- и backend-разработка, оптимизация и автоматизация.',
  ogTitle: 'Александр Биденко – Senior Full-Stack разработчик, DevOps и архитектор',
  ogDescription: 'Портфолио и резюме Александра Биденко, опытного full-stack разработчика, DevOps-инженера и архитектора с опытом в VK, Yandex, Альфа-Банке.',
  ogImage: ogImage.url,
  ogImageWidth: OG_IMAGE_WIDTH,
  ogImageHeight: Math.round(OG_IMAGE_WIDTH * (avatar.height / avatar.width)),
});
</script>

<template>
  <Html lang="ru" />
  <UApp>
    <UHeader>
      <template #title>
        Александр Биденко
      </template>

      <UNavigationMenu :items="NAVIGATION_ITEMS" />

      <template #right>
        <UBadge icon="i-lucide-binary" color="warning" size="xl">WIP</UBadge>
      </template>

      <template #body>
        <UNavigationMenu :items="NAVIGATION_ITEMS" orientation="vertical" />
      </template>
    </UHeader>

    <NuxtPage />

    <NuxtLoadingIndicator color="var(--ui-primary)" />
  </UApp>
</template>
