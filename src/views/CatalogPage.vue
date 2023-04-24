<template>
  <div class="container-menu">
    <catalog-component/>
  </div>
</template>

<script setup lang="ts">

import CatalogComponent from '@/components/catalog/CatalogComponent.vue';

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
    }
  }
  @media screen and (max-width: 425px){
    .container-menu {
      max-width: 425px;
    }
  }
  @media screen and (max-width: 375px){
    .container-menu {
      max-width: 375px;
    }
  }
  @media screen and (max-width: 320px){
    .container-menu {
      max-width: 768px;
    }
  }
</style>
