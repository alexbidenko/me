export const assertNotEmpty = <Type>(value: Ref<Type | null | undefined>, error = () => createError({ statusCode: 500 })): asserts value is Ref<Type> => {
  if (value.value === null || value.value === undefined) {
    throw error();
  }
};
