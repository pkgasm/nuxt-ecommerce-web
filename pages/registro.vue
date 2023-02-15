<template>
  <section class="register w-100 d-flex flex-row">
    <div class="register__banner">
      <img class="w-100 h-screen register__image" src="/img/image.png" />
    </div>
    <div class="register__form d-flex flex-column justify-center">
      <forms-auth-register />
    </div>
  </section>
</template>
<script setup>
definePageMeta({
  middleware: ["guest"],
});
</script>
<style lang="scss">
.register {
  height: 100vh;
  @media only screen and (max-width: 769px) {
    height: 75%;
  }
  &__banner {
    width: 50%;
    @media only screen and (max-width: 769px) {
      display: none;
    }
  }
  &__form {
    width: 50%;
    @media only screen and (max-width: 769px) {
      width: 100%;
    }
  }
  &__image {
    object-fit: cover;
  }
}
</style>
