/* eslint-disable */
import { defineStore } from 'pinia';
import productData from '@/db/database.json';

export const useStore = defineStore('store', {
  state: () => ({
    count: 0,
    name: 'Oleg',
    dataArray: [productData],
    ordersList: [productData[0]],
  }),
})


