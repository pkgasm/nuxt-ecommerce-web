export default defineNuxtRouteMiddleware(async () => {
  const auth = useAuth();
  await auth.mount()
  if (auth.loggedIn) {
    return navigateTo('/')
  }
});
