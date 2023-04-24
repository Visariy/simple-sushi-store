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
import { ref } from 'vue';

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
//.footer-container {
//  width: 100%;
//  display: flex;
//  flex-direction: column;
//  .footer-text {
//    background-color: teal;
//    display: flex;
//    width: 100px;
//    align-items: center;
//    padding-left: 4px;
//    padding-right: 4px;
//  }
//
//  .footer-title {
//    padding: 4px 2px;
//    background-color: black;
//    text-align: center;
//    width: 100px;
//  }
//
//  .footer-buttons {
//    margin-left: 4px;
//    margin-right: 4px;
//  }
//}
</style>
