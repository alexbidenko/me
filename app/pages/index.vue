<script lang="ts" setup>
import avatar from '~/assets/images/avatar.jpeg?as=meta';

definePageMeta({
  name: Route.MAIN,
});
</script>

<template>
  <UPageHero
    title="Александр Биденко"
    headline="Senior Full-Stack developer and DevOps engineer"
    description="Опытный и старательный разработчик обожающий технологии и делать лучшие продукты на свете"
    :links="[
      { label: 'Связаться', to: { hash: RouteHash.CONTACT }, trailingIcon: 'i-lucide-message-circle-more' },
      { label: 'Резюме', to: { name: Route.RESUME }, variant: 'subtle', trailingIcon: 'i-lucide-arrow-right' },
    ]"
    orientation="horizontal"
  >
    <template #body>
      <div class="flex flex-wrap gap-3">
        <UBadge color="secondary" variant="soft">8+ лет опыта</UBadge>
        <UBadge color="secondary" variant="soft">50+ завершенных проектов</UBadge>
        <UBadge color="secondary" variant="soft">27 лет</UBadge>
        <UBadge color="secondary" variant="soft">Высшее образование</UBadge>
        <UBadge color="secondary" variant="soft">English B2</UBadge>
        <UBadge color="secondary" variant="soft">Новороссийск</UBadge>
      </div>
    </template>

    <NuxtImg
      :src="avatar.src"
      :width="avatar.width"
      :height="avatar.height"
      :sizes="IMAGE_SIZES.HERO"
      alt="Аватар Биденко Александра"
      format="webp"
      fetchpriority=high
      class="rounded-xl"
    />
  </UPageHero>
</template>
