export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useSupabaseUser()

  if (to.path == '/notes' && !user.value) {
    return navigateTo('/')
  } else if (to.path == '/' && user.value) {
    return navigateTo('/notes')
  }
})
