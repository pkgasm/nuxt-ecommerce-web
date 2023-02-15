import Auth from "~/services/auth";

export const useAuth = () => {
  const nuxtApp = useNuxtApp();
  const authService = new Auth(nuxtApp.$config.public.API_URL);
  return authService;
};
