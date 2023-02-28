import { defineStore } from 'pinia';
import { useCartStore } from '@/pinia/store/cart/state/cartStore';
import { orderType } from '@/interfaces/orderInterface';

export const useRemoveOrder = defineStore('removeOrder', () => {
  const cartStore = useCartStore();

  const removeFromOrderList = (product: orderType) => {
    const index = cartStore.ordersList.indexOf(product);
    cartStore.ordersList.splice(index, 1);
    // eslint-disable-next-line no-param-reassign
    product.quantity = 1;
  };

  return { removeFromOrderList };
});
