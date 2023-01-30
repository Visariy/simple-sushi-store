<template>
  <div class="container__menu">
    <SearchComponent></SearchComponent>
    <FilterComponent></FilterComponent>
    <CatalogComponent></CatalogComponent>
  </div>
</template>

<script setup lang="ts">

import FilterComponent from '@/components/seacrhField/Filter.vue';

import SearchComponent from '@/components/seacrhField/Search.vue';

import CatalogComponent from '@/components/CatalogComponent.vue';

</script>

<style lang="scss" scoped>
  .container__menu {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 100px;
  }
</style>
