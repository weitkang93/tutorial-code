export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()

  if (!user.value && to.path === '/notes') {
    navigateTo('/')
  } else if (user.value && to.path === '/') {
    navigateTo('notes')
  }
})
