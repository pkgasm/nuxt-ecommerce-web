<template>
  <v-container class="form">
    <v-form ref="formUser" @submit.prevent="onSubmit">
      <div class="d-flex flex-row justify-center">
        <div class="text-h4 mb-10">Información personal</div>
      </div>
      <v-text-field
        v-model="form.name"
        :readonly="loading.save"
        :rules="[$rules.required]"
        class="mb-2"
        label="Nombre(s)"
        variant="underlined"
        color="primary"
        type="email"
      ></v-text-field>
      <v-text-field
        v-model="form.lastName"
        :readonly="loading.save"
        :rules="[$rules.required]"
        class="mb-2"
        label="Apellidos"
        variant="underlined"
        color="primary"
      ></v-text-field>
      <div class="d-flex flex-row justify-center">
        <v-btn :loading="loading.save" color="primary" type="submit">
          Guardar
        </v-btn>
      </div>
    </v-form>
  </v-container>
</template>
<script setup>
import { useToast } from "vue-toastification";

const toast = useToast();
const auth = useAuth();
const api = useApi();

const form = reactive({
  valid: true,
  name: auth.user.profile.name,
  lastName: auth.user.profile.lastName,
});
const loading = reactive({ save: false });

const formUser = ref(null);

const onSubmit = async () => {
  loading.save = true;
  try {
    const valid = await formUser.value.validate();
    if (valid) {
      await api.users.update(auth.user.id, {
        name: form.name,
        lastName: form.lastName,
      });
      await auth.fetchUser();
    }
  } catch (error) {
    console.log(error);
    if (error?.response?.data) {
      toast.error(error.response.data.message);
    }
  }
  loading.save = false;
};
</script>
<style lang="scss" scoped>
.form {
  padding: 1.5rem;
  max-width: 400px;
  background-color: white;
}
</style>
