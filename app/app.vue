<script lang="ts" setup>
import type {NavigationMenuItem} from "#ui/types";
import avatar from '~/assets/images/avatar.jpeg?as=meta';

const OG_IMAGE_WIDTH = 640;

const NAVIGATION_ITEMS: NavigationMenuItem[] = [
  {
    label: 'Резюме',
    to: { name: Route.RESUME },
  },
  ...Object.entries(CATEGORY_MAP).map(([key, value]) => ({
    label: value,
    to: { name: Route.RESUME_VIEW, params: { category: key } },
  })),
];

const route = useRoute();
const router = useRouter();
const img = useImage();

const ogImage = img.getImage(avatar.src, { modifiers: { width: OG_IMAGE_WIDTH }, sizes: `${OG_IMAGE_WIDTH}` });

const isContactModalVisible = computed(() => route.hash === RouteHash.CONTACT);

useSeoMeta({
  title: 'Александр Биденко – Senior Full-Stack разработчик, DevOps и архитектор',
  description: 'Портфолио и резюме Александра Биденко, опытного full-stack разработчика, DevOps-инженера и архитектора с опытом в VK, Yandex, Альфа-Банке. Проектирование и разработка сложных систем, frontend- и backend-разработка, оптимизация и автоматизация.',
  ogTitle: 'Александр Биденко – Senior Full-Stack разработчик, DevOps и архитектор',
  ogDescription: 'Портфолио и резюме Александра Биденко, опытного full-stack разработчика, DevOps-инженера и архитектора с опытом в VK, Yandex, Альфа-Банке.',
  ogImage: ogImage.url,
  ogImageWidth: OG_IMAGE_WIDTH,
  ogImageHeight: Math.round(OG_IMAGE_WIDTH * (avatar.height / avatar.width)),
  twitterCard: 'summary',
});
</script>

<template>
  <Html lang="ru" />
  <Head>
    <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  </Head>

  <UApp>
    <UHeader>
      <template #title>
        Александр Биденко
      </template>

      <UNavigationMenu :items="NAVIGATION_ITEMS" />

      <template #right>
        <UButton :to="{ hash: RouteHash.CONTACT }" color="neutral" variant="ghost" icon="i-lucide-message-circle-more" />
        <UColorModeButton />
      </template>

      <template #body>
        <UNavigationMenu :items="NAVIGATION_ITEMS" orientation="vertical" />
      </template>
    </UHeader>

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <UFooter>
      <template #left>
        <p class="text-muted text-sm">
          Copyright © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UButton
          icon="i-simple-icons-telegram"
          color="neutral"
          variant="ghost"
          to="https://t.me/alexbidenko"
          target="_blank"
          aria-label="Telegram"
        />
        <UButton
          icon="i-simple-icons-x"
          color="neutral"
          variant="ghost"
          to="https://x.com/alexbidenko"
          target="_blank"
          aria-label="X"
        />
        <UButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/alexbidenko"
          target="_blank"
          aria-label="GitHub"
        />
      </template>
    </UFooter>

    <UModal
      @update:open="router.push({ hash: undefined })"
      :open="isContactModalVisible"
      title="Связаться со мной"
    >
      <template #body>
        <div class="grid grid-cols-2 gap-3">
          <UPageCard
            icon="i-simple-icons-telegram"
            title="Telegram"
            to="https://t.me/alexbidenko"
            target="_blank"
            spotlight
          />
          <UPageCard
            icon="i-simple-icons-gmail"
            title="E-Mail"
            to="mailto:alexbidenko1998@gmail.com"
            spotlight
          />
        </div>
      </template>
    </UModal>

    <NuxtLoadingIndicator color="var(--ui-primary)" />
  </UApp>
</template>
