<script lang="ts" setup>
import aiRussiaPreview from '~/assets/images/show_case/ai_russia/main.png?as=meta';
</script>

<template>
  <UPageHero
    title="AI Russia от Mail.ru"
    headline="Сайт премии в области AI технологии с незабываемым визуалом"
    description="Нет смысла много говорить о самом сайте. Вместо этого предлагаю посмотреть шоу-кейсы сделанные моими руками. Это не видео, это исключительно бесподобная верстка сделанная с душой."
    :links="[
      { label: 'Шоу-кейс 1', icon: 'i-lucide-square-play', to: { path: 'https://ai-russia.ru/library/20/show' }, external: true, target: '_blank' },
      { label: 'Шоу-кейс 2', icon: 'i-lucide-square-play', to: { path: 'https://ai-russia.ru/library/17/show' }, external: true, target: '_blank' },
      { label: 'Сайт', trailingIcon: 'i-lucide-arrow-right', to: { path: 'https://ai-russia.ru' }, variant: 'subtle', external: true, target: '_blank' },
    ]"
    orientation="horizontal"
  >
    <NuxtImg :src="aiRussiaPreview.src" :width="aiRussiaPreview.width" :height="aiRussiaPreview.height" sizes="928" format="webp" class="rounded-xl" alt="Скриншот первого шоу-кейса сайта AI Russia, демонстрирующий дизайн и функционал проекта." />
  </UPageHero>
</template>
