<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>
        <nuxt-link class="client__link" to="/"> Ecommerce </nuxt-link>
      </v-app-bar-title>

      <v-text-field
        v-if="!$device.isMobile"
        ref="refSearch"
        class="mt-5"
        label="Buscar"
        variant="solo"
        density="compact"
        append-inner-icon="mdi-magnify"
      ></v-text-field>

      <v-spacer v-if="!$device.isMobile"></v-spacer>

      <template v-slot:append>
        <v-btn icon="mdi-magnify" @click="iconSearch"></v-btn>
        <v-btn icon="mdi-cart"></v-btn>
        <v-menu location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-account" v-bind="props"></v-btn>
          </template>
          <v-list v-if="!auth.loggedIn">
            <v-list-item to="/login">
              <v-list-item-title>Iniciar sesión</v-list-item-title>
            </v-list-item>
            <v-list-item to="/registro">
              <v-list-item-title>Crear cuenta</v-list-item-title>
            </v-list-item>
          </v-list>
          <v-list v-else>
            <v-list-item to="/cuenta">
              <v-list-item-title>Mi cuenta</v-list-item-title>
            </v-list-item>
            <v-list-item @click="logout">
              <v-list-item-title>Cerrar sesión</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>

      <template v-if="$device.isMobile && searchBar" v-slot:extension>
        <div class="w-100 d-flex flex-row">
          <v-text-field
            class="my-5 ml-3"
            label="Buscar"
            variant="solo"
            density="compact"
            append-inner-icon="mdi-magnify"
          ></v-text-field>
          <v-btn
            class="my-5"
            icon="mdi-close-thick"
            @click="searchBar = false"
          ></v-btn>
        </div>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary color="primary">
      <v-list v-if="auth.loggedIn">
        <v-list-item
          :title="auth.user.profile.fullName"
          :subtitle="auth.user.phone"
        >
          <template v-slot:prepend>
            <v-avatar color="secondary">
              <v-icon icon="mdi-account"></v-icon>
            </v-avatar>
          </template>
        </v-list-item>
      </v-list>
      <v-list>
        <v-list-item v-for="(m, i) of menu" :value="i" :to="m.link">
          <template v-slot:prepend>
            <v-icon :icon="m.icon"></v-icon>
          </template>
          <v-list-item-title>{{ m.title }}</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="auth.loggedIn" value="salir" @click="logout">
          <template v-slot:prepend>
            <v-icon icon="mdi-exit-to-app"></v-icon>
          </template>
          <v-list-item-title>Cerrar sesión</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</template>
<script setup>
const client = [
  {
    title: "Inicio",
    icon: "mdi-home",
    link: "/",
  },
  {
    title: "Tienda",
    icon: "mdi-store",
    link: "/buscar",
  },
  {
    title: "Carrito",
    icon: "mdi-cart",
    link: "/carrito",
  },
  {
    title: "Favoritos",
    icon: "mdi-heart",
    link: "/favoritos",
  },
  {
    title: "Cuenta",
    icon: "mdi-account",
    link: "/cuenta",
  },
  {
    title: "Compras",
    icon: "mdi-shopping",
    link: "/compras",
  },
];
const guest = [
  {
    title: "Buscar",
    icon: "mdi-store",
    link: "/buscar",
  },
  {
    title: "Inicia sesión",
    icon: "mdi-account",
    link: "/login",
  },
  {
    title: "Registrate",
    icon: "mdi-account-plus",
    link: "/registro",
  },
];

const nuxtApp = useNuxtApp();
const auth = useAuth();

const refSearch = ref(null);

const drawer = useState("drawer", () => null);
const menu = useState("menu", () => []);
const searchBar = useState("searchBar", () => false);

watch(
  () => auth.loggedIn,
  () => {
    selectMenu();
  }
);

onMounted(() => {
  selectMenu();
});

const selectMenu = () => {
  if (auth.loggedIn) {
    menu.value = client;
  } else {
    menu.value = guest;
  }
};
const iconSearch = () => {
  if (!nuxtApp.$device.isMobile) refSearch.value.focus();
  else searchBar.value = true;
};
const logout = async () => {
  try {
    await auth.logout();
  } catch (error) {
    console.log("error", error);
  }
};
</script>
<style lang="scss" scope>
.client {
  &__link {
    cursor: pointer;
    text-decoration: none !important;
    color: white !important;
  }
}
</style>
