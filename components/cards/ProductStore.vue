<template>
  <v-card class="card">
    <div class="d-flex">
      <v-img class="card__img" src="/img/image.png" cover></v-img>
      <div class="card__detail d-flex flex-column">
        <v-card-title class="w-100 d-flex align-center">
          Nombre del producto
          <v-spacer></v-spacer>
          <v-icon size="x-small">mdi-heart-outline</v-icon>
        </v-card-title>
        <v-card-subtitle class="text-left"> $1,000 </v-card-subtitle>
        <v-card-text class="text-left">
          {{ cDescription }}
        </v-card-text>
        <v-card-actions class="mt-auto">
          <v-spacer></v-spacer>
          <v-btn text size="x-small">Ver más</v-btn>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>
<script setup>
const description =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const nuxtApp = useNuxtApp();
const cDescription = computed(() => {
  if (nuxtApp.$device.isMobile) return description.slice(0, 60) + "...";
  return description.slice(0, 145) + "...";
});
</script>
<style lang="scss" scoped>
.card {
  width: 720px !important;
  @media only screen and (max-width: 769px) {
    width: auto !important;
  }
  &__img {
    width: 200px;
    @media only screen and (max-width: 769px) {
      width: 150px !important;
    }
  }
  &__detail {
    width: 520px !important;
    @media only screen and (max-width: 769px) {
      width: auto !important;
    }
  }
}
</style>
