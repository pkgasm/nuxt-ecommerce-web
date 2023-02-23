<template>
  <section class="cart d-flex flex-column align-center">
    <div class="cart__total__mobile d-flex flex-column">
      <div class="w-100 px-14 d-flex">
        <div class="text-h6">Total:</div>
        <v-spacer></v-spacer>
        <div class="text-h6">$7,500</div>
      </div>
      <v-btn class="mt-5 mx-14" color="primary">Continuar comprar</v-btn>
    </div>
    <v-card class="cart__content">
      <div
        class="cart__items mb-5 mt-10 d-flex flex-column align-center justify-center"
      >
        <cards-cart-item class="mb-3" v-for="slide in 1" :key="slide" />
      </div>
      <v-divider></v-divider>
      <div class="cart__total__desktop">
        <div class="d-flex justify-end">
          <div class="text-h5 mr-5">Total:</div>
          <div class="text-h5">$7,500</div>
        </div>
        <div class="mt-3 d-flex justify-end">
          <v-btn color="primary">Continuar comprar</v-btn>
        </div>
      </div>
    </v-card>
  </section>
</template>
<script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>
<style lang="scss" scope>
@import "@/assets/variables.scss";
.cart {
  height: 100vh;
  background-color: #f5f5f5;
  padding-bottom: 2rem;
  @include screen(tablet) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    height: 100%;
    margin: 1rem, 10rem, 10rem;
  }
  &__content {
    margin-bottom: 7rem;
    @include screen(landscape) {
      width: 800px !important;
    }
  }
  &__items {
    padding-left: 2rem;
    padding-right: 2rem;
    @include screen(landscape) {
      padding-right: 1rem;
    }
  }
  &__total {
    &__desktop {
      display: none;
      width: auto;
      padding-right: 3rem;
      @include screen(landscape) {
        display: block;
        padding-right: 0;
        width: 720px !important;
      }
    }
    &__mobile {
      position: fixed;
      width: 100%;
      background-color: white;
      z-index: 999;
      bottom: 0;
      padding-bottom: 1rem;
      padding-top: 1rem;
    }
  }
}
</style>
