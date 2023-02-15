import { rules } from "~~/utils/rules";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("rules", rules);
});
