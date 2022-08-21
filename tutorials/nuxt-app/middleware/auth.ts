export default defineNuxtRouteMiddleware(async (event) => {
  const user = useSupabaseUser()
  if (!user.value) {
    return navigateTo('/')
  }
})
