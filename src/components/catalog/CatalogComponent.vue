<template>
  <div class="catalog-filters-container">
    <input class="filter-by-name" placeholder="Search..." v-model="searchRequest">
    <div class="filter-by-price-container">
      <span class="filter-tag">Filter:</span>
      <button
        class="filter-by-price-button"
        @click="priceFilter(); changeFilterStatus();"
        >By price</button>
      <svg v-if="!filterStatus" style="transform: rotate(180deg); fill: red;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="filter-by-price-button-arrow"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M182.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L128 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z"/></svg>
      <svg v-else style="fill: green;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="filter-by-price-button-arrow"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M182.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L128 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z"/></svg>
    </div>
  </div>
  <div class="catalog-container">
    <div class="catalog">
      <catalog-component-item
      v-for="data in sortedArray" :key="data.id"
      :sorted-data="data"
      >
      </catalog-component-item>
    </div>
  </div>
</template>

<script setup lang="ts">

import CatalogComponentItem from '@/components/catalog/CatalogComponentItem.vue';

import { ref, watch, onMounted } from 'vue';

import { useCatalogStore } from '@/pinia/store/catalog/state/catalogStore';

import { useFilterByPrice } from '@/pinia/store/catalog/actions/filterByPrice';

import { useAdaptiveStore } from '@/pinia/store/adaptive/adaptiveStore';

import { catalogStoreType } from '@/interfaces/catalogStoreInterface';

const catalogStore: catalogStoreType = useCatalogStore();

const adaptiveStore = useAdaptiveStore();

const filterByPrice = useFilterByPrice();

const filterStatus = ref(false);

const searchRequest = ref('');

const sortedArray: any = ref([]);

onMounted(() => {
  setTimeout(() => {
    sortedArray.value.push(...catalogStore.dataArray);
  }, 50);
});

function changeFilterStatus() {
  // eslint-disable-next-line no-unused-expressions
  filterStatus.value ? filterStatus.value = false : filterStatus.value = true;
}

function priceFilter() {
  if (filterStatus.value) {
    filterByPrice.filterArrayLowest(sortedArray.value);
  } else {
    filterByPrice.filterArrayHighest(sortedArray.value);
  }
  console.log(filterStatus);
}

watch(searchRequest, () => {
  const lowerCaseSearchRequest = ref(searchRequest.value.toLowerCase());
  if (lowerCaseSearchRequest.value.length > 0) {
    sortedArray.value.length = 0;
    catalogStore.dataArray.forEach((item: any) => {
      const itemTitleLowerCase = item.title.toLowerCase();
      if (itemTitleLowerCase.startsWith(lowerCaseSearchRequest.value)) {
        sortedArray.value.push(item);
      }
    });
  }
  if (lowerCaseSearchRequest.value === '') {
    sortedArray.value.length = 0;
    sortedArray.value.push(...catalogStore.dataArray);
  }
});

window.addEventListener('resize', adaptiveStore.adaptive);

</script>

<style lang="scss" scoped>

.catalog-filters-container {
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  justify-content: center;
  .filter-by-name {
    width: 300px;
    padding: 5px;
    font-size: 20px;
    font-family: CodePro;
    border-radius: 10px;
    height: 40px;
  }
  .filter-by-price-container{
    padding-top: 10px;
    padding-left: 50px;
    .filter-tag{
      color:whitesmoke;
      padding-right: 10px;
      font-size: 20px;
      font-family: CodePro;
    }
    .filter-by-price-button{
      background: none;
      border: none;
      color: whitesmoke;
      font-size: 20px;
      font-family: CodePro;
      cursor: pointer;
    }
    .filter-by-price-button-arrow{
      margin-left: 10px;
      height: 20px;
      fill: green;
      transition: fill .5s linear;
    }
  }
}

.catalog-container {
  height: 100%;
  margin-top: 10px;
  .catalog {
    display: flex;
    justify-items: center;
    max-width: 100%;
    max-height: 400px;
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 320px) {
  .catalog-filters-container {
    .filter-by-name {
      width: 100px;
      margin-top: 10px;
      height: 40px;
    }

    .filter-by-price-container {
      padding-left: 25px;
      .filter-tag {
        font-size: 15px;
      }

      .filter-by-price-button {
        font-size: 15px;
      }

      .filter-by-price-button-arrow {
        height: 15px;
      }
    }
  }
}
@media screen and (max-width: 375px) {
  .catalog-filters-container {
    .filter-by-name {
      width: 165px;
      margin-top: 15px;
      height: 40px;
    }

    .filter-by-price-container {
      .filter-tag {
        font-size: 17px;
      }

      .filter-by-price-button {
        font-size: 17px;
      }

      .filter-by-price-button-arrow {
        height: 15px;
      }
    }
  }
}
@media screen and (max-width: 425px) {
  .catalog-filters-container {
    .filter-by-name {
      width: 165px;
      margin-top: 15px;
      height: 40px;
    }

    .filter-by-price-container {
      padding-left: 25px;
      .filter-tag {
        font-size: 17px;
      }

      .filter-by-price-button {
        font-size: 17px;
      }

      .filter-by-price-button-arrow {
        height: 15px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .catalog-filters-container {
    .filter-by-name {
      margin-top: 15px;
    }
  }
}
</style>
