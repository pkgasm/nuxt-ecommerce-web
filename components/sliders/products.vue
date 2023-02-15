<template>
  <carousel :items-to-show="5" :breakpoints="breakpoints">
    <slide v-for="slide in 10" :key="slide">
      <cards-product-desktop />
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>
<script setup>
const breakpoints = {
  320: {
    itemsToShow: 1,
    snapAlign: "start",
  },
  360: {
    itemsToShow: 1,
    snapAlign: "start",
  },
  640: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  769: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  960: {
    itemsToShow: 3,
    snapAlign: "start",
  },
  1024: {
    itemsToShow: 3,
    snapAlign: "start",
  },
  1200: {
    itemsToShow: 4,
    snapAlign: "start",
  },
  1440: {
    itemsToShow: 4,
    snapAlign: "start",
  },
};
</script>
