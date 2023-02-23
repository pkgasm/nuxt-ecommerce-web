import Auth from "~/services/auth";
import { useAuthStore } from "~/store/auth";

export const useAuth = () => {
  const authStore = useAuthStore();
  const nuxtApp = useNuxtApp();

  const config = {
    reactiveState: {
      user: {
        set: (value) => {
          authStore.auth.user = value;
        },
        get: () => {
          return authStore.auth.user;
        },
      },
      loggedIn: {
        set: (value) => {
          authStore.auth.loggedIn = value;
        },
        get: () => {
          return authStore.auth.loggedIn;
        },
      },
    },
  };

  const authService = new Auth(nuxtApp.$config.public.API_URL, config);
  return authService;
};
