// the .global suffix on this file means it will run on every request

export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser()

  const authPages = ['login', 'signup', 'account-recovery']

  const isAtAuthPage = authPages.includes(to.name as string)

  if (!user.value && !isAtAuthPage) {
    return navigateTo('/login')
  }
})
