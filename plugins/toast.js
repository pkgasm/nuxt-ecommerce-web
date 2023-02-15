import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, options);
});
