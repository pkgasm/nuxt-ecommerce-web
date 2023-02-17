<template>
  <section class="store">
    <div class="store__container d-flex flex-column justify-start">
      <div class="d-flex flex-row justify-center">
        <div class="store__filters mx-5">
          <div class="text-h5 mb-3">Categorías</div>
          <v-chip-group class="mb-3" column>
            <v-chip size="small" closable>Categoria</v-chip>
            <v-chip size="small" closable>Categoria</v-chip>
            <v-chip size="small" closable>Categoria</v-chip>
          </v-chip-group>
          <div class="d-flex flex-column">
            <span class="text-subtitle-1">Categoria</span>
            <span class="text-subtitle-1">Categoria</span>
            <span class="text-subtitle-1">Categoria</span>
            <span class="text-subtitle-1">Categoria</span>
            <span class="text-subtitle-1">Categoria</span>
            <span class="text-subtitle-1">Categoria</span>
          </div>
        </div>
        <div class="store__produts mx-5">
          <cards-product-store class="mb-3" v-for="slide in 10" :key="slide" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style lang="scss" scope>
@import "@/assets/variables.scss";
.store {
  background-color: #f5f5f5;
  &__container {
    margin-left: 0;
    margin-right: 0;
    padding-top: 20px;
    @include screen(landscape) {
      margin-left: 15rem;
      margin-right: 15rem;
      padding-top: 60px;
    }
  }
  &__filters {
    display: none;
    @include screen(desktop) {
      width: 280px !important;
      display: block;
    }
  }
  &__products {
    width: 720px !important;
  }
}
</style>
