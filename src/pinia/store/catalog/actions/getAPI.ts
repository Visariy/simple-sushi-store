import { defineStore } from 'pinia';
import axios from 'axios';
import { useCatalogStore } from '@/pinia/store/catalog/state/catalogStore';
import { catalogStoreType } from '@/interfaces/catalogStoreInterface';

const url = 'http://localhost:3000/products';

export const useGetApi = defineStore('api', () => {
  const catalogStore: catalogStoreType = useCatalogStore();

  async function GET_PRODUCTS_FROM_API() {
    try {
      const response = await axios.get(url);
      catalogStore.dataArray = response.data;
    } catch (e) {
      console.log(e);
    }
  }

  return { GET_PRODUCTS_FROM_API };
});
