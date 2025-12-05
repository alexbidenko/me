export const useModalVisible = (hash: RouteHash) => {
  const route = useRoute();
  const router = useRouter();

  const isModalVisible = ref(route.hash === hash);

  watch(() => route.hash, (value) => {
    if (value === hash) isModalVisible.value = true;
  });

  watch(isModalVisible, (value) => {
    if (!value) router.replace({ hash: undefined });
  });

  return isModalVisible;
};
