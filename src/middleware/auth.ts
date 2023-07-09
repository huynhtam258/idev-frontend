export default defineNuxtRouteMiddleware((from, to) => {
  if(to.name === 'auth') {
    return navigateTo({
      path: '/auth/login'
    })
  }
})