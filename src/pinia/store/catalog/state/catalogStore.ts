import { defineStore } from 'pinia';
import { orderType } from '@/interfaces/orderInterface';
import { ref } from 'vue';


export const useCatalogStore = defineStore('catalogStore', () => {
  const dataArray: Array<orderType> = [];
  const sortedArray: Array<orderType> = [];
  return { dataArray, sortedArray };
});
