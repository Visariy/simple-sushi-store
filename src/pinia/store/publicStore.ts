import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePublicStore = defineStore('publicStore', () => {
  const count = ref(0);
  const totalQuantity = 0;
  return {
    totalQuantity, count,
  };
});
