import { defineStore } from 'pinia';
import { orderType } from '@/interfaces/orderInterface';

export const useCartStore = defineStore('cartStore', () => {
  const ordersList: Array<orderType> = [];
  return { ordersList };
});
