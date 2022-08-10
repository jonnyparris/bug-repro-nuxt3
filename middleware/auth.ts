export default defineNuxtRouteMiddleware(async (_to, _from) => {
  // const user = useSupabaseUser()
  const user = { value: false }
  if (!user.value) {
    return await navigateTo('/somewhere-else')
  }
})
