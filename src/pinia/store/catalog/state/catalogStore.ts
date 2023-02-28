import { defineStore } from 'pinia';
import { orderType } from '@/interfaces/orderInterface';

export const useCatalogStore = defineStore('catalogStore', () => {
  const dataArray: Array<orderType> = [];
  return { dataArray };
});
