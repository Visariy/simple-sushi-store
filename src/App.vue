<template>
  <div id="app">
    <div class="routing">
      <nav-bar class="navbar"></nav-bar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import navBar from '@/components/TheNavbarComponent.vue';
import { onMounted } from 'vue';
import { useGetApi } from '@/pinia/store/catalog/actions/getAPI';
import { useCatalogStore } from '@/pinia/store/catalog/state/catalogStore';
import { orderType } from '@/interfaces/orderInterface';

const api = useGetApi();

const catalogStore = useCatalogStore();

onMounted(async () => {
  await api.GET_PRODUCTS_FROM_API();
  catalogStore.dataArray.forEach((item: orderType) => {
    // eslint-disable-next-line no-param-reassign
    item.quantity = 1;
  });
});

</script>

<style lang="scss">
@font-face {
  font-family: 'CodePro';
  src: local('CodePro'),
    url("UI/fonts/Code_pro font/SourceCodePro-Italic-VariableFont_wght.ttf");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  position: relative;
  min-height: 100vh;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #000000;
  background: -webkit-linear-gradient(60deg, #434343, #000000);
  background: linear-gradient(60deg, #434343, #000000);
  background-size: 150% 150%;
  animation: gradient 5s ease infinite;
  overflow-y: auto;
  overflow-x: hidden;
}

@keyframes gradient {
  0% {
    background-position: 25% 100%;
  }

  50% {
    background-position: 100% 100%;
  }

  100% {
    background-position: 25% 100%;
  }
}
</style>
