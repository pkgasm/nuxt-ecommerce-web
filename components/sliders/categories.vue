<template>
  <carousel :breakpoints="breakpoints" :wrap-around="true">
    <slide v-for="slide in 10" :key="slide">
      <div>
        <v-avatar size="100">
          <v-img src="/img/image.png" width="200px" cover></v-img>
        </v-avatar>
        <p>Categoria</p>
      </div>
    </slide>
    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>
<script setup>
const breakpoints = {
  320: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  360: {
    itemsToShow: 3,
    snapAlign: "start",
  },
  480: {
    itemsToShow: 4,
    snapAlign: "start",
  },
  640: {
    itemsToShow: 5,
    snapAlign: "start",
  },
  769: {
    itemsToShow: 6,
    snapAlign: "start",
  },
  1024: {
    itemsToShow: 6,
    snapAlign: "start",
  },
  1200: {
    itemsToShow: 7,
    snapAlign: "start",
  },
  1440: {
    itemsToShow: 8,
    snapAlign: "start",
  },
};
</script>
