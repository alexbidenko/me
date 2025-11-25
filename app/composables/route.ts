import type { ZodType, infer as zInfer } from 'zod';
import type { RouteLocationNormalizedLoaded } from 'vue-router';

interface RouteSchema {
  params?: ZodType;
  query?: ZodType;
}

type ValidatedRoute<Schema extends RouteSchema> = Omit<RouteLocationNormalizedLoaded, 'params' | 'query'> & {
  params: Schema['params'] extends ZodType ? zInfer<Schema['params']> : {};
  query: Schema['query'] extends ZodType ? zInfer<Schema['query']> : {};
};

export const useValidatedRoute = <Schema extends RouteSchema>(schema: Schema): ValidatedRoute<Schema> => {
  const route = useRoute();

  const params = computed(() => {
    try {
      return schema.params?.parse(route.params) ?? {};
    } catch {
      throw createError({ statusCode: 404 });
    }
  });

  const query = computed(() => {
    try {
      return schema.query?.parse(route.query) ?? {};
    } catch {
      throw createError({ statusCode: 404 });
    }
  });

  definePageMeta({
    validate: (route) => {
      try {
        schema.params?.parse(route.params);
        return true;
      } catch {
        return false;
      }
    },
  });

  // возвращаем проксированный route с реактивными params/query
  return new Proxy(route, {
    get(target, prop, receiver) {
      if (prop === 'params') {
        return params.value;
      }
      if (prop === 'query') {
        return query.value;
      }
      return Reflect.get(target, prop, receiver);
    },
  }) as ValidatedRoute<Schema>;
};
