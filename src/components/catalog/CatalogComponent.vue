<template>
  <div class="catalog-filters-container">
    <v-card
      color="grey"
      max-width="400"
      min-width="200"
    >
      <div class="filter-input-container">
        <v-card-text>
          <v-text-field single-line
                        clearable
                        append-inner-icon="mdi-magnify"
                        variant="solo"
                        density="compact"
                        class="filter-by-name"
                        label="Search"
                        v-model="searchRequest" />
        </v-card-text>
      </div>
      <div class="filter-list-container">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn
              color="black"
              v-bind="props"
            >
              <span class="filter-button-text">Filters</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item) in items"
              :key="item.id"
              :value="item"
            >
              <v-list-item-title @click="priceFilter(item.id)">
                <span
                  style="font-family: 'Source Code Pro', monospace">
                  {{ item.title }}
                </span>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-card>
  </div>
  <div class="catalog-container">
    <div class="catalog">
      <catalog-component-item
      v-for="data in catalogStore.sortedArray" :key="data.id"
      :sorted-data="data"
      >
      </catalog-component-item>
    </div>
  </div>
</template>

<script setup lang="ts">

import CatalogComponentItem from '@/components/catalog/CatalogComponentItem.vue';

import { ref, watch } from 'vue';

import { useCatalogStore } from '@/pinia/store/catalog/state/catalogStore';

import { useFilterByPrice } from '@/pinia/store/catalog/actions/filterByPrice';

import { useAdaptiveStore } from '@/pinia/store/adaptive/adaptiveStore';

import { catalogStoreType } from '@/interfaces/catalogStoreInterface';

const catalogStore: catalogStoreType = useCatalogStore();

const adaptiveStore = useAdaptiveStore();

const filterByPrice = useFilterByPrice();

const searchRequest = ref('');

watch(() => catalogStore.dataArray, (value) => {
  if (value) {
    catalogStore.sortedArray.push(...catalogStore.dataArray);
  }
});

const items = [
  { id: 1, title: 'By Price: Highest' },
  { id: 2, title: 'By Price: Lowest' },
];

function priceFilter(id: number) {
  if (id === 2) {
    filterByPrice.filterArrayLowest(catalogStore.sortedArray);
  } else {
    filterByPrice.filterArrayHighest(catalogStore.sortedArray);
  }
}

watch(searchRequest, () => {
  const lowerCaseSearchRequest = ref(searchRequest.value.toLowerCase());
  if (lowerCaseSearchRequest.value.length > 0) {
    catalogStore.sortedArray.length = 0;
    catalogStore.dataArray.forEach((item: any) => {
      const itemTitleLowerCase = item.title.toLowerCase();
      if (itemTitleLowerCase.startsWith(lowerCaseSearchRequest.value)) {
        catalogStore.sortedArray.push(item);
      }
    });
  }
  if (lowerCaseSearchRequest.value === '') {
    catalogStore.sortedArray.length = 0;
    catalogStore.sortedArray.push(...catalogStore.dataArray);
  }
});

window.addEventListener('resize', adaptiveStore.adaptive);

</script>

<style lang="scss" scoped>

.catalog-filters-container {
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  justify-content: space-around;
  .filter-by-name {
    width: 300px;
    padding: 5px;
    font-size: 20px;
    font-family: "Source Code Pro", monospace;
    border-radius: 10px;
    height: 40px;
  }
  .filter-list-container{
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
    .filter-button-text{
      font-family: "Source Code Pro", monospace;
    }
  }
}

.catalog-container {
  .catalog {
    display: flex;
    justify-content: center;
    max-width: 100%;
    margin-bottom: 75px;
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 320px) {
  .catalog-filters-container {
    .filter-by-name {
      width: 100px;
      margin-top: 10px;
      height: 20px;
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
