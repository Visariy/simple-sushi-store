<template>
  <input v-model="searchRequest">
  <div class="catalog__container">
    <div class="catalog">
      <div class="catalog__items" v-for="data in sortedArray" :key="data.id">
        <img :src="data.image" class="sushi__photo" alt="" />
        <div class="down__side">
          <div class="sushi__title">
            {{ data.title }}
          </div>
          <div class="sushi__price">
            {{ data.price }} р.
            <button class="buy__btn">
              <span class="add__plus">+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref, watch, toRaw } from 'vue';

import { useStore } from '@/pinia/store/index';

const store = useStore();

// console.log(toRaw(store.dataArray[0][0].title));

const sortedArray: any = ref([...store.dataArray[0]]);

// console.log(sortedArray.value[0][0].title);

const searchRequest = ref('');

const titleArray: Array<string> = [];

watch(searchRequest, () => {
  if (searchRequest.value.length > 0) {
    sortedArray.value.length = 0;
    store.dataArray[0].forEach((item: any) => {
      if (item.title.startsWith(searchRequest.value)) {
        sortedArray.value.push(item);
      }
    });
  }
  if (searchRequest.value === '') {
    sortedArray.value.length = 0;
    sortedArray.value.push(...store.dataArray[0]);
  }
});

</script>

<style scoped lang="scss">
.catalog__container {
  background-color: whitesmoke;
  height: 1250px;
  margin-top: 25px;

  .catalog {
    display: flex;
    width: 1200px;
    max-height: 400px;
    flex-wrap: wrap;

    .catalog__items {
      border: 3px solid lightgray;
      margin-left: 75px;
      margin-top: 70px;
      box-shadow: 0 0 20px black;
      width: 300px;
      transition: border .5s ease;
      border-radius: 20px;

      &:hover {
        border: 3px solid white;
      }

      .down__side {
        background-color: rgb(36, 35, 35);
        background-size: cover;
        height: 100px;
        border-radius: 20px;
      }

      .sushi__title {
        font-size: 20px;
        display: flex;
        justify-content: center;
        color: whitesmoke;
      }

      .sushi__subtitle {
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
      }

      .sushi__photo {
        display: flex;
        justify-content: center;
        width: 250px;
        height: 250px;
        z-index: 1;
        margin-left: 10px;
        margin-top: 10px;
        background-color: whitesmoke;
      }

      .sushi__price {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        padding-top: 25px;
        font-family: CodePro;
        font-size: 23px;
        color: whitesmoke;
        margin-top: 5px;
        margin-left: 15px;
      }

      .buy__btn {
        font-family: CodePro;
        width: 50px;
        margin-bottom: 4px;
        margin-right: 5px;
        display: flex;
        justify-content: center;
        font-size: 17px;
        align-items: center;
        background-color: whitesmoke;
        border: 1px solid darkgray;
        box-shadow: 0 0 5px darkgray;
        border-radius: 30px;
        cursor: pointer;
        height: 40px;
        transition: background-color, color, box-shadow .5s ease;

        &:hover {
          background-color: darkorange;
          color: whitesmoke;
          box-shadow: 0 0 5px black;
        }

        .add__plus {
          font-size: 35px;
        }
      }
    }
  }
}
</style>
