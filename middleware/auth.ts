export default defineNuxtRouteMiddleware(async (_to, _from) => {
  if (true) {
    return await navigateTo('/somewhere-else');
  }
});
