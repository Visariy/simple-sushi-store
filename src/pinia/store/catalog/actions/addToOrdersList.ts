import { defineStore } from 'pinia';
import { useCartStore } from '@/pinia/store/cart/state/cartStore';
import { orderType } from '@/interfaces/orderInterface';
import { cartStoreType } from '@/interfaces/cartStoreInterface';

export const useAddOrder = defineStore('addOrder', () => {
  const cartStore: cartStoreType = useCartStore();
  const addToOrdersList = (product: orderType): void => {
    let isProductExists = false;
    cartStore.ordersList.forEach((item: orderType) => {
      if (item.id === product.id) {
        isProductExists = true;
        // eslint-disable-next-line
        item.quantity++;
        if (item.quantity >= 9) {
          // eslint-disable-next-line
          item.quantity = 9;
        }
      }
    });
    if (!isProductExists) {
      cartStore.ordersList.push(product);
      // eslint-disable-next-line no-plusplus
    }
  };

  return { addToOrdersList };
});
