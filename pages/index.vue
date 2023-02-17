<template>
  <section class="home">
    <v-carousel class="home__carousel">
      <v-carousel-item src="/img/image.png" cover></v-carousel-item>
      <v-carousel-item src="/img/image.png" cover></v-carousel-item>
      <v-carousel-item src="/img/image.png" cover></v-carousel-item>
    </v-carousel>
    <div class="home__products mt-15">
      <sliders-categories class="mb-15" />
      <div class="text-h4 ml-15 mb-5">Productos</div>
      <sliders-products class="mb-15" />
      <div class="text-h4 ml-15 mb-5">Ofertas</div>
      <sliders-products />
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
@import "@/assets/variables.scss";
.home {
  background-color: #f5f5f5;
  &__carousel {
    height: 300px !important;
    @include screen(desktop) {
      height: 400px !important;
    }
  }
  &__products {
    margin-left: 0;
    margin-right: 0;
    @include screen(desktop) {
      margin-left: 5rem;
      margin-right: 5rem;
    }
  }
}
</style>
