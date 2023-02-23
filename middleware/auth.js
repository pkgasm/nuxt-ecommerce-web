export default defineNuxtRouteMiddleware(async () => {
  const auth = useAuth();
  await auth.init();
  if (!auth.loggedIn) {
    return navigateTo("/");
  }
});
