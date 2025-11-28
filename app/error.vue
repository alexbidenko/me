<script lang="ts" setup>
import type {NuxtError} from "#app";
import type {EmptyProps} from "#ui/types";

const props = defineProps<{
  error: NuxtError;
}>();

const data = computed<Required<Pick<EmptyProps, 'title' | 'description' | 'icon'>>>(() => {
  if (props.error.statusCode === 404) {
    return {
      title: 'Ой, кажется вы заблудились...',
      description: 'Но ничего, вернуться назад никогда не поздно!',
      icon: 'i-lucide-radar',
    };
  }

  return {
    title: 'Что-то сломалось!?',
    description: 'Ну что же, бывает... Попробуйте еще раз!',
    icon: 'i-lucide-server-crash',
  };
});
</script>

<template>
  <UEmpty
    :actions="[
      {
        trailingIcon: 'i-lucide-house',
        label: 'Вернуться',
        color: 'neutral',
        variant: 'subtle',
        onClick: () => clearError({ redirect: '/' }),
      }
    ]"
    variant="naked"
    size="xl"
    class="h-screen"
    v-bind="data"
  />
</template>
