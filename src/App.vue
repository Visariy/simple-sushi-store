<template>
    <v-app>
      <div id="app">
        <the-navbar-component-second />
        <router-view></router-view>
        <the-footer-component-second />
      </div>
    </v-app>
</template>

<script setup lang="ts">
import TheNavbarComponentSecond from '@/components/TheNavbarComponent.vue';
import TheFooterComponentSecond from '@/components/TheFooterComponent.vue';
import { onMounted } from 'vue';
import { useGetApi } from '@/pinia/store/catalog/actions/getAPI';
import { useCatalogStore } from '@/pinia/store/catalog/state/catalogStore';
import { orderType } from '@/interfaces/orderInterface';
import { useAdaptiveStore } from '@/pinia/store/adaptive/adaptiveStore';

const api = useGetApi();

const adaptiveStore = useAdaptiveStore();

const catalogStore = useCatalogStore();

window.addEventListener('resize', adaptiveStore.adaptive);

onMounted(async () => {
  await api.GET_PRODUCTS_FROM_API();
  catalogStore.dataArray.forEach((item: orderType) => {
    // eslint-disable-next-line no-param-reassign
    item.quantity = 1;
  });
  localStorage.setItem('data', JSON.stringify(catalogStore.dataArray));
});

</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  overflow-y: auto;
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
