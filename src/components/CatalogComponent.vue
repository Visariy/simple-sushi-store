<template>
  <input class="search" placeholder="Поиск...." v-model="searchRequest">
  <div class="catalog__container">
    <div class="catalog">
      <catalog-list :product-data="data" v-for="data in sortedArray" :key="data.id">
      </catalog-list>
    </div>
  </div>
</template>

<script setup lang="ts">

import catalogList from '@/components/CatalogList.vue';

import { ref, watch } from 'vue';

import { useStore } from '@/pinia/store/index';

const searchRequest = ref('');

const store = useStore();

const sortedArray: any = ref([...store.dataArray[0]]);

watch(searchRequest, () => {
  if (searchRequest.value.length > 0) {
    sortedArray.value.length = 0;
    store.dataArray[0].forEach((item: any) => {
      if (item.title.startsWith(searchRequest.value)) {
        sortedArray.value.push(item);
      }
    });
  }
  if (searchRequest.value === '') {
    sortedArray.value.length = 0;
    sortedArray.value.push(...store.dataArray[0]);
  }
});

</script>

<style scoped lang="scss">
.search {
  width: 1200px;
  height: 40px;
}

.catalog__container {
  background-color: whitesmoke;
  height: 1250px;
  margin-top: 25px;

  .catalog {
    display: flex;
    max-width: 1200px;
    max-height: 400px;
    flex-wrap: wrap;
  }
}
</style>
