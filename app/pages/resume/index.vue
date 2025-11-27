<script lang="ts" setup>
import asmyPreview from '~/assets/images/show_case/asmy/main.png?as=meta';
import aiRussiaPreview from '~/assets/images/show_case/ai_russia/main.png?as=meta';

const TITLE = 'Резюме и навыки – Александр Биденко';
const DESCRIPTION = 'Обзор ключевых навыков и проектов Александра Биденко. Специализации: Frontend, Backend, DevOps. Познакомьтесь с самыми интересными работами в портфолио.';

definePageMeta({
  name: Route.RESUME,
});

useSeoMeta({
  title: TITLE,
  description: DESCRIPTION,
  ogTitle: TITLE,
  ogDescription: DESCRIPTION,
});
</script>

<template>
  <UContainer>
    <UPageHeader title="Навыки и проекты" />
    <UPageBody>
      <UPageGrid>
        <UPageCard
          :title="`${CATEGORY_MAP[Category.FRONTEND]} разработчик`"
          description="Основная моя специализация, но&nbsp;не&nbsp;единственная. Я&nbsp;очень много работал с&nbsp;основной тройкой экосистем: Vue, React, Angular. Работал над огромным множеством проектов разной сложности. Получил опыт с&nbsp;большим количеством различных библиотек."
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
          description="С&nbsp;первых дней своей работы я&nbsp;развивался как FullStack разработчик, потому Backend является неотъемлемой частью меня. Nest для быстрой и&nbsp;качественной разработки. Golang где важна каждая миллисекунда производительности. Laravel для простоты поддержки."
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
          description="Я&nbsp;всегда стремился к&nbsp;профессиональной разработки от&nbsp;нуля до&nbsp;финального продукта. И&nbsp;этот путь невозможен без DevOps. На&nbsp;многих проектах мое видение картины целиком как специалист различных областей неоднократно приносило огромную полезность."
          :to="{ name: Route.RESUME_VIEW, params: { category: Category.DEVOPS } }"
        >
          <template #footer>
            <UButton trailing-icon="i-lucide-arrow-up-right" variant="soft" class="flex items-center gap-1">
              Подробнее
            </UButton>
          </template>
        </UPageCard>
      </UPageGrid>

      <UPageHeader>
        <h2 class="text-2xl sm:text-3xl text-pretty font-bold text-highlighted">
          Самое интересное
        </h2>
      </UPageHeader>
      <UPageGrid>
        <UPageCard
          title="Панель администрирования серверов Asmy"
          :to="{ name: Route.PROJECT_VIEW, params: { slug: ShowCase.ASMY } }"
        >
          <template #header>
            <NuxtImg :src="asmyPreview.src" :width="asmyPreview.width" :height="asmyPreview.height" sizes="576" format="webp" class="rounded-sm" alt="Превью панели управления сервером Asmy." />
          </template>

          <template #footer>
            <UButton trailing-icon="i-lucide-arrow-up-right" variant="soft" class="flex items-center gap-1">
              Подробнее
            </UButton>
          </template>
        </UPageCard>
        <UPageCard
          title="Сайт премии AI компаний от Mail.ru"
          :to="{ name: Route.PROJECT_VIEW, params: { slug: ShowCase.AI_RUSSIAN } }"
        >
          <template #header>
            <NuxtImg :src="aiRussiaPreview.src" :width="aiRussiaPreview.width" :height="aiRussiaPreview.height" sizes="576" format="webp" class="rounded-sm" alt="Превью сайта AI Russia от Mail.ru." />
          </template>

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
