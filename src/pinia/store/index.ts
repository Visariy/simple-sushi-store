import { createStore } from 'vuex';
import productData from '@/db/database.json';

const store = createStore({
  state: {
    data: 123,
    dataArray: [...productData],
  },
  getters: {
    getData(state) {
      return state.data;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});

export default store;
