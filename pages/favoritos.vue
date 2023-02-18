<template>
  <section class="favorite">
    <p class="text-center text-h4 font-weight-bold">Favoritos</p>
    <div class="favorite__products d-flex flex-column align-center">
      <cards-product-store class="mb-3" v-for="slide in 10" :key="slide" />
    </div>
  </section>
</template>
<style lang="scss" scope>
@import "@/assets/variables.scss";
.favorite {
  margin-top: 1rem;
  @include screen(landscape) {
    margin-left: 15rem;
    margin-right: 15rem;
  }
  &__products {
    margin-top: 1rem;
  }
}
</style>
