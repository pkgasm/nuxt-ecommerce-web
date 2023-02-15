<template>
  <section class="login w-100 d-flex flex-row">
    <div class="login__banner">
      <img class="w-100 h-screen login__image" src="/img/image.png" />
    </div>
    <div class="login__form d-flex flex-column justify-center">
      <forms-auth-login />
    </div>
  </section>
</template>
<script setup>
definePageMeta({
  middleware: ["guest"],
});
</script>
<style lang="scss">
.login {
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
