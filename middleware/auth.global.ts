// the .global suffix on this file means it will run on every request

export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser()

  const isAtAuthPage = to.name === 'signin' || to.name === 'signup'

  if (!user.value && !isAtAuthPage) {
    return navigateTo('/signin')
  }
})
