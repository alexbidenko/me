<script lang="ts" setup>
import type {NavigationMenuItem} from "#ui/types";

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
</script>

<template>
  <UApp>
    <UHeader>
      <template #title>
        Александр Биденко
      </template>

      <UNavigationMenu :items="NAVIGATION_ITEMS" />
    </UHeader>

    <NuxtPage />

    <NuxtLoadingIndicator color="var(--ui-primary)" />
  </UApp>
</template>
