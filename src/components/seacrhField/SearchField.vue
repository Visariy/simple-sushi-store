<template>
  <input class="search" placeholder="Поиск...." >
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  dataArray: Array,
  data: String,
});

</script>

<style scoped lang="scss">
  .search{
  width: 1200px;
  height: 40px;
  }
</style>
