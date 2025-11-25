<script lang="ts" setup>
definePageMeta({
  name: Route.RESUME,
});
</script>

<template>
  <UContainer as="main">
    <UPageHeader title="Вас интересует" />
    <UPageBody>
      <UPageGrid>
        <UPageCard
          :title="`${CATEGORY_MAP[Category.FRONTEND]} разработчик`"
          description="Основная моя специализация, но не единственная. Я очень много работал с основной тройкой экосистем: Vue, React, Angular. Работал над огромным множеством проектов разной сложности. Получил опыт с большим количеством различных библиотек."
          :to="{ name: Route.RESUME_VIEW, params: { category: Category.FRONTEND } }"
        >
          <template #footer>
            <UButton trailing-icon="i-lucide-arrow-up-right" variant="soft" class="flex items-center gap-1">
              Подробнее
            </UButton>
          </template>
        </UPageCard>
        <UPageCard
          :title="`${CATEGORY_MAP[Category.BACKEND]} разработчик`"
          description="С первых дней своей работы я развивался как FullStack разработчик, потому Backend является неотъемлемой частью меня. Nest для быстрой и качественной разработки. Golang где важна каждая миллисекунда производительности. Laravel для простоты поддержки."
          :to="{ name: Route.RESUME_VIEW, params: { category: Category.BACKEND } }"
        >
          <template #footer>
            <UButton trailing-icon="i-lucide-arrow-up-right" variant="soft" class="flex items-center gap-1">
              Подробнее
            </UButton>
          </template>
        </UPageCard>
        <UPageCard
          :title="`${CATEGORY_MAP[Category.DEVOPS]} инженер`"
          description="Я всегда стремился к профессиональной разработки от нуля до финального продукта. И этот путь невозможен без DevOps. На многих проектах мое видение картины целиком как специалист различных областей неоднократно приносило огромную полезность."
          :to="{ name: Route.RESUME_VIEW, params: { category: Category.DEVOPS } }"
        >
          <template #footer>
            <UButton trailing-icon="i-lucide-arrow-up-right" variant="soft" class="flex items-center gap-1">
              Подробнее
            </UButton>
          </template>
        </UPageCard>
      </UPageGrid>
    </UPageBody>
  </UContainer>
</template>
