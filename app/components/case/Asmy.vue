<script lang="ts" setup>
import asmyPreview from '~/assets/images/show_case/asmy/main.png?as=meta';
</script>

<template>
  <UPageHero
    title="Admire Server Manager"
    headline="Полный контроль над сервером с максимум удобства"
    description="Сколько первоклассных специалистов нужно, чтобы разработать с нуля полноценную панель администрирования для серверов? - достаточно лишь одного с золотыми руками. Управление Docker, настройка Web-сервера, файловый менеджер и многое другое. Даже этот сайт не обходится без моего творения."
    :links="[
      { label: 'Сайт', trailingIcon: 'i-lucide-arrow-right', to: { path: 'https://asmy.pro' }, external: true, target: '_blank' },
      { label: 'Документация', icon: 'i-lucide-book-marked', to: { path: 'https://docs.asmy.pro' }, variant: 'subtle', external: true, target: '_blank' },
    ]"
    orientation="horizontal"
  >
    <NuxtImg :src="asmyPreview.src" :width="asmyPreview.width" :height="asmyPreview.height" sizes="928" format="webp" class="rounded-xl" alt="Интерфейс панели управления сервером Asmy, показывающий дашборд с контейнерами и настройками." />
  </UPageHero>
</template>
