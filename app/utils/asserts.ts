export const assertNotEmpty = <Type>(
  value: Ref<Type | null | undefined>,
  error = () => createError({ statusCode: 500 }),
): asserts value is Ref<Type> => {
  if (value.value === null || value.value === undefined) {
    throw error();
  }
};

export type SameUnion<Target, Source> = Exclude<Source, Target> extends never ? true : false;

export type AssertTrue<Type extends true> = Type;
