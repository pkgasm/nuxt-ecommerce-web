<template>
  <v-container class="form">
    <v-form
      ref="formRegister"
      v-model="formRegisterValid"
      @submit.prevent="onSubmit"
    >
      <div class="d-flex flex-row justify-center">
        <div class="text-h4 mb-10">Crea tu cuenta</div>
      </div>
        <v-text-field
          v-model="formRegister.name"
          :readonly="loading.login"
          :rules="[$rules.required]"
          class="mb-2"
          label="Nombre(s)"
          variant="underlined"
          color="primary"
        ></v-text-field>
        <v-text-field
          v-model="formRegister.lastName"
          :readonly="loading.login"
          :rules="[$rules.required]"
          class="mb-2"
          label="Apellidos"
          variant="underlined"
          color="primary"
        ></v-text-field>
      <v-text-field
        v-model="formRegister.email"
        :readonly="loading.login"
        :rules="[$rules.required, $rules.email]"
        class="mb-2"
        label="Correo electronico"
        variant="underlined"
        color="primary"
        type="email"
      ></v-text-field>
      <v-text-field
        v-model="formRegister.password"
        :readonly="loading.login"
        :rules="[$rules.required]"
        class="mb-2"
        label="Contraseña"
        variant="underlined"
        color="primary"
        type="password"
      ></v-text-field>
      <v-text-field
        v-model="formRegister.password"
        :readonly="loading.login"
        :rules="[$rules.required]"
        class="mb-2"
        label="Confirmar contraseña"
        variant="underlined"
        color="primary"
        type="password"
      ></v-text-field>
      <div class="d-flex flex-row justify-center">
        <v-btn
          :disabled="!formRegisterValid"
          :loading="loading.register"
          color="primary"
          type="submit"
        >
          Crear cuenta
        </v-btn>
      </div>
    </v-form>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      formRegisterValid: false,
      formRegister: {
        name: null,
        lastName: null,
        email: null,
        password: null,
      },
      loading: { register: false },
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>
<style lang="scss" scoped>
.form {
  max-width: 400px;
}
</style>
