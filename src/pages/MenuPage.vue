<template>
  <div class="container__menu">
    <CatalogComponent></CatalogComponent>
  </div>
</template>

<script setup lang="ts">

import CatalogComponent from '@/components/CatalogComponent.vue';

const data = 'privet';

</script>

<style lang="scss" scoped>
  .container__menu {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 100px;
  }
</style>
