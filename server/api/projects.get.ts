export default defineEventHandler(async (event) => {
  const { category } = await getValidatedQuery(event, zod.object({ category: zod.enum(Category) }).parse);

  return PROJECT_DATA.filter((item) => item.categories.includes(category));
});
