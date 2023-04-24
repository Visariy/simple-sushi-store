import { defineStore } from 'pinia';
import { orderType } from '@/interfaces/orderInterface';
import {useLocalStorage} from "@vueuse/core";

export const useCartStore = defineStore('cartStore', () => {
  const ordersList = useLocalStorage('orderList', [] as Array<orderType>);
  return { ordersList };
});
