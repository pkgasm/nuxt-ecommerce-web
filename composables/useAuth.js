import Auth from "~/services/auth";

export const useAuth = () => {
  const nuxtApp = useNuxtApp();
  const user = ref(null)
  const loggedIn = ref(false);

  const config = {
    reactiveState: {
      user: {
        set: (value) => {
          user.value = value;
        },
        get: () => {
          return user.value;
        },
      },
      loggedIn: {
        set: (value) => {
          loggedIn.value = value;
        },
        get: () => {
          return loggedIn.value;
        },
      },
    },
  };

  const authService = new Auth(nuxtApp.$config.public.API_URL, config);
  return authService;
};
