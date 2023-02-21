<template>
  <v-card class="card" variant="text">
    <div class="d-flex">
      <div>
        <v-img class="card__img" src="/img/image.png" cover></v-img>
      </div>
      <div class="d-flex flex-column">
        <v-card-title class="w-100 d-flex align-center">
          Nombre del producto
        </v-card-title>
        <v-card-subtitle class="text-left"> $1,000 </v-card-subtitle>
        <v-card-actions class="card__quantity__desktop">
          <v-btn variant="text" size="x-small">Eliminar</v-btn>
        </v-card-actions>
      </div>
      <v-spacer></v-spacer>
      <div
        class="card__quantity__desktop mt-5 mx-5 d-flex flex-row align-center"
      >
        <v-text-field
          v-model="quantity"
          class="centered-input"
          variant="outlined"
          density="compact"
          readonly
          append-inner-icon="mdi-plus"
          prepend-inner-icon="mdi-minus"
          @click:append-inner="quantity++"
          @click:prepend-inner="quantity--"
        ></v-text-field>
      </div>
      <v-spacer></v-spacer>
      <div class="card__total desktop mr-10 d-flex flex-row align-center">
        <div class="text-h5">$2,500</div>
      </div>
    </div>
    <div class="card__quantity__mobile d-flex flex-row justify-end">
      <div>
        <v-text-field
          v-model="quantity"
          class="centered-input"
          variant="outlined"
          density="compact"
          readonly
          append-inner-icon="mdi-plus"
          prepend-inner-icon="mdi-minus"
          @click:append-inner="quantity++"
          @click:prepend-inner="quantity--"
        ></v-text-field>
      </div>
      <div class="mt-1 ml-5 text-h6">$2,500</div>
    </div>
  </v-card>
</template>
<script setup>
const quantity = ref(1);
</script>
<style lang="scss">
@import "@/assets/variables.scss";
.card {
  width: auto !important;
  @include screen(landscape) {
    width: 720px !important;
  }
  &__img {
    width: 100px !important;
    height: 100%;
    @include screen(desktop) {
      width: 150px;
    }
  }
  &__quantity {
    &__desktop {
      display: none !important;
      @include screen(tablet) {
        display: flex !important;
      }
    }
    &__mobile {
      @include screen(tablet) {
        display: none !important;
      }
    }
  }
  &__total {
    display: none !important;
    @include screen(tablet) {
      display: flex !important;
    }
  }
}
.centered-input input {
  text-align: center;
}
</style>
