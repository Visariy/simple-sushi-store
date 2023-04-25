<template>
  <v-footer app class="pa-0 d-flex flex-column">
    <div class="bg-black justify-center d-flex w-100 align-center">

      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="plain"
        size="small"
      >
       <v-icon @click="openURL(icon.URL)">{{ icon.name }}</v-icon>
      </v-btn>
    </div>

  </v-footer>
</template>

<script setup lang="ts">

const openURL = (URL: string) => {
  window.open(URL, '_blank');
};

const icons = [
  { name: 'mdi-facebook', URL: 'https://ru-ru.facebook.com/' },
  { name: 'mdi-twitter', URL: 'https://twitter.com/?lang=ru' },
  { name: 'mdi-instagram', URL: 'https://www.instagram.com' },
];

</script>

<style lang="scss" scoped>

</style>
