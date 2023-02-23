<template>
  <section class="account w-100 d-flex flex-row">
    <div class="w-50 desktop">
      <img class="w-100 h-screen account__image" src="/img/image.png" />
    </div>
    <div v-if="!option" class="account__info d-flex flex-column align-center">
      <div class="my-5 text-center text-h4 font-weight-bold">Cuenta</div>
      <div
        v-for="opc of options"
        class="account__options d-flex align-center"
        @click="option = opc.value"
      >
        <div class="mt-3 text-center text-h5">{{ opc.label }}</div>
        <v-spacer></v-spacer>
        <v-icon class="mt-2" size="x-large">mdi-chevron-right</v-icon>
      </div>
    </div>
    <div v-if="option" class="account__info d-flex flex-column align-center">
      <div
        class="account__return my-5 d-flex align-center"
        @click="option = null"
      >
        <v-icon size="small">mdi-arrow-left</v-icon>
        <div class="ml-2 text-subtitle-1">Regresar</div>
      </div>
      <forms-account-information v-if="option === 'personal-information'" />
    </div>
  </section>
</template>
<script setup>
definePageMeta({
  middleware: ["auth"],
});

const options = [
  {
    label: "Información personal",
    value: "personal-information",
  },
  {
    label: "Métodos de pago",
    value: "payment-methods",
  },
];

const option = ref(null);
</script>
<style lang="scss">
@import "@/assets/variables.scss";
.account {
  background-color: #f5f5f5;
  height: 100%;
  @include screen(tablet) {
    height: 100vh;
  }
  &__info {
    width: 100%;
    @include screen(tablet) {
      width: 50%;
    }
  }
  &__options {
    cursor: pointer;
    width: 100%;
    padding: 1rem;
    background-color: white;
    @include screen(tablet) {
      width: 90%;
    }
  }
  &__image {
    @include screen(desktop) {
      object-fit: cover;
    }
  }
  &__return {
    width: 90%;
    cursor: pointer;
    @include screen(tablet) {
      width: 75%;
    }
  }
}
</style>
