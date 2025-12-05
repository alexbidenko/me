<script lang="ts" setup>
const route = useValidatedRoute({ params: zod.object({ category: zod.enum(Category) }) });

const TITLE = `Опыт в ${CATEGORY_MAP[route.params.category]} – Александр Биденко`;
const DESCRIPTION = `Портфолио проектов и достижений Александра Биденко в области ${CATEGORY_MAP[route.params.category]}. Ознакомьтесь с опытом работы, используемыми технологиями и выполненными задачами.`;

const { data: projects } = await useFetch('/api/projects', { query: { category: route.params.category } });

assertNotEmpty(projects);

useSeoMeta({
  title: TITLE,
  description: DESCRIPTION,
  ogTitle: TITLE,
  ogDescription: DESCRIPTION,
});

definePageMeta({
  name: Route.RESUME_VIEW,
});
</script>

<template>
  <UContainer>
    <UPageHeader :title="`Резюме категории ${CATEGORY_MAP[route.params.category]}`" />

    <UPageBody>
      <section class="flex flex-col gap-8">
        <UCard v-for="project in projects" :key="project.id" variant="subtle">
          <template #header>
            {{ project.title }}
          </template>

          {{ project.description }}
          <div class="flex flex-wrap gap-3">
            <UBadge v-for="role in project.roles" :key="role" size="lg" color="neutral" variant="soft" class="block w-fit my-3">{{ ROLE_MAP[role] }}</UBadge>
          </div>
          <ul class="list-inside list-disc">
            <li v-for="item in project.tasks" :key="item">{{ item }}</li>
          </ul>

          <template #footer>
            <div class="flex flex-wrap gap-3">
              <UBadge v-for="item in project.stack" :key="item" color="neutral" variant="outline">
                {{ TECHNOLOGY_MAP[item] }}
              </UBadge>
            </div>
          </template>
        </UCard>
      </section>
    </UPageBody>
  </UContainer>
</template>
