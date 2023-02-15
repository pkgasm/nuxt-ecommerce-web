import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    auth: {
      user: null,
      loggedIn: false,
    },
  }),
  
  actions: {},
});
