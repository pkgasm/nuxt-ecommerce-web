import Api from "~/services/api";

export const useApi = () => {
  const nuxtApp = useNuxtApp();

  const api = new Api(nuxtApp.$config.public.API_URL);

  return api;
};
