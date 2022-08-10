export default defineNuxtRouteMiddleware(async (_to, _from) => {
  const user = useSupabaseUser()
  if (!user.value) {
    return await navigateTo('/somewhere-else')
  }
})
