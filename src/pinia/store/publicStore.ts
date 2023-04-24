import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePublicStore = defineStore('publicStore', () => {
  const count = ref(0);
  const showOrder = ref(false);
  function openOrdersPopup() {
    // eslint-disable-next-line
    return showOrder.value === false ? showOrder.value = true : showOrder.value = false;
  }
  const totalQuantity = 0;
  return {
    totalQuantity, count, showOrder, openOrdersPopup,
  };
});
