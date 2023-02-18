<template>
  <v-card>
    <v-toolbar flat dark color="primary">
      <v-btn icon dark @click="$emit('close')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Filtros</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn variant="text" @click="$emit('close')">Aplicar</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-card-text>
      <div class="text-h5 mb-3">Categorías</div>
      <v-chip-group class="mb-3" column>
        <v-chip closable>Categoria</v-chip>
        <v-chip closable>Categoria</v-chip>
        <v-chip closable>Categoria</v-chip>
      </v-chip-group>
      <div class="d-flex flex-column mx-0">
        <v-btn variant="text">Categoria</v-btn>
        <v-btn variant="text">Categoria</v-btn>
        <v-btn variant="text">Categoria</v-btn>
        <v-btn variant="text">Categoria</v-btn>
        <v-btn variant="text">Categoria</v-btn>
        <v-btn variant="text">Categoria</v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>
