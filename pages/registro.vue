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
@import "@/assets/variables.scss";
.register {
  height: 100%;
  @include screen(desktop) {
    height: 100vh;
  }
  &__banner {
    display: none;
    @include screen(desktop) {
      width: 50%;
    }
  }
  &__form {
    width: 100%;
    @include screen(desktop) {
      width: 50%;
    }
  }
  &__image {
    @include screen(desktop) {
      object-fit: cover;
    }
  }
}
</style>
