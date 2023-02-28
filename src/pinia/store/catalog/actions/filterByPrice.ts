import { defineStore } from 'pinia';
import { orderType } from '@/interfaces/orderInterface';

export const useFilterByPrice = defineStore('filterByPrcie', () => {
  // eslint-disable-next-line max-len
  const filterArrayLowest = (value: Array<orderType>) => value.sort((a: orderType, b: orderType) => { return a.price - b.price; });

  // eslint-disable-next-line max-len
  const filterArrayHighest = (value: Array<orderType>) => value.sort((a: orderType, b: orderType) => { return b.price - a.price; });

  return { filterArrayLowest, filterArrayHighest };
});
