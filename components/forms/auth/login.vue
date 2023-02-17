<template>
  <v-container class="form">
    <v-form ref="formLogin" v-model="formLoginValid" @submit.prevent="onSubmit">
      <div class="d-flex flex-row justify-center">
        <div class="text-h4 mb-10">Inicia sesión</div>
      </div>
      <v-text-field
        v-model="email"
        :readonly="loading.login"
        :rules="[$rules.required, $rules.email]"
        class="mb-2"
        label="Correo electronico"
        variant="underlined"
        color="primary"
        type="email"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :readonly="loading.login"
        :rules="[$rules.required]"
        :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:appendInner="showPassword = !showPassword"
        class="mb-2"
        label="Contraseña"
        variant="underlined"
        color="primary"
        :type="!showPassword ? 'password' : 'text'"
      ></v-text-field>
      <div class="d-flex flex-row justify-center">
        <v-btn
          :disabled="!formLoginValid"
          :loading="loading.login"
          color="primary"
          type="submit"
        >
          Iniciar sesión
        </v-btn>
      </div>
    </v-form>
  </v-container>
</template>
<script setup>
import { useToast } from "vue-toastification";

const nuxtApp = useNuxtApp();
const toast = useToast();
const auth = useAuth();

const formLoginValid = ref(false);
const email = ref(null);
const password = ref(null);
const showPassword = ref(false);
const loading = reactive({ login: false });

const onSubmit = async () => {
  loading.login = true;
  try {
    await auth.login({
      email: email.value,
      password: password.value,
    });
    nuxtApp.$router.replace("/");
  } catch (error) {
    if (error?.response?.data) {
      toast.error(error.response.data.message);
    }
  }
  loading.login = false;
};
</script>
<style lang="scss" scoped>
.form {
  max-width: 400px;
}
</style>
