<script lang="ts" setup>
import zod from "zod";
import { LazyCaseAsmy, LazyCaseAiRussia } from '#components';

const route = useValidatedRoute({ params: zod.object({ slug: zod.enum(ShowCase) }) });

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
