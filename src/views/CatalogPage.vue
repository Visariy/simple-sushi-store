<template>
  <div class="container-menu">
    <catalog-component/>
  </div>
</template>

<script setup lang="ts">

import CatalogComponent from '@/components/catalog/CatalogComponent.vue';

import { useAdaptiveStore } from '@/pinia/store/adaptive/adaptiveStore';

</script>

<style lang="scss" scoped>
  .container-menu {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 100px;
  }
  @media screen and (max-width: 768px){
    .container-menu {
      max-width: 768px;
      padding-left: 40px;
    }
  }
  @media screen and (max-width: 425px){
    .container-menu {
      max-width: 425px;
      padding-left: 30px;
    }
  }
  @media screen and (max-width: 375px){
    .container-menu {
      max-width: 375px;
      padding-left: 5px;
    }
  }
  @media screen and (max-width: 320px){
    .container-menu {
      max-width: 768px;
    }
  }
</style>
