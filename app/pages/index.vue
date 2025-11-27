<script lang="ts" setup>
import avatar from '~/assets/images/avatar.jpeg?as=meta';

definePageMeta({
  name: Route.MAIN,
});
</script>

<template>
  <UContainer as="main">
    <UPageHero
      title="Александр Биденко"
      headline="Senior Full-Stack developer and DevOps engineer"
      description="Опытный и старательный разработчик обожающий технологии и делать лучшие продукты на свете"
      :links="[{ label: 'Резюме', to: { name: Route.RESUME }, trailingIcon: 'i-lucide-arrow-right' }]"
      orientation="horizontal"
    >
      <NuxtImg
        :src="avatar.src"
        :width="avatar.width"
        :height="avatar.height"
        sizes="928"
        alt="Аватар Биденко Александра"
        format="webp"
        class="rounded-xl"
      />
    </UPageHero>
  </UContainer>
</template>
