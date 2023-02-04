/* eslint-disable */
import { defineStore } from 'pinia';
import dataBase from '@/db/database.json'

export const useStore = defineStore('store', {
    state: () => ({ 
        count: 0, 
        name: 'Oleg',
        productData: [dataBase], 
    }),
    getters: {
        plusCount: (state) => state.count + 1
    },
    actions: {
        sayHello() {
            console.log('idi nahuy')
        }
    }
})


