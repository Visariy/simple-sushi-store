<template>
  <div class="catalog-items-container">
    <div class="catalog-items">
        <img :src="sortedData?.image" class="sushi-photo" alt="" />
        <div class="down-side">
            <div class="sushi-title">
              <span style="font-family: 'Source Code Pro', monospace">{{ sortedData?.title }}</span>
            </div>
            <div class="sushi-price">
                {{ sortedData?.price + "$" }}
                <v-btn color='black' @click="addProduct">
                  <span style="font-family: 'Source Code Pro', monospace">TO CART</span>
                </v-btn>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang=ts>

import { defineProps } from 'vue';

import { useAddOrder } from '@/pinia/store/catalog/actions/addToOrdersList';

const addOrder: any = useAddOrder();

const props = defineProps({
  sortedData: Object,
});

function addProduct() {
  addOrder.addToOrdersList(props.sortedData);
}
</script>

<style lang="scss" scoped>
.catalog-items-container {
  padding: 60px 10px 20px 10px;
  .catalog-items {
    border: 3px solid lightgray;
    background-color: whitesmoke;
    box-shadow: 0 0 20px black;
    width: 300px;
    transition: border .5s ease;
    border-radius: 20px;

    &:hover {
      border: 3px solid white;
    }

    .down-side {
      background-size: cover;
      background-color: whitesmoke;
      height: 100px;
      border-radius: 20px;
    }

    .sushi-title {
      font-size: 20px;
      display: flex;
      justify-content: center;
      color: black;
    }

    .sushi-subtitle {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
    }

    .sushi-photo {
      display: flex;
      justify-content: center;
      margin-left: 20px;
      margin-top: 10px;
      width: 250px;
      height: 250px;
      z-index: 1;
      background-color: whitesmoke;
    }

    .sushi-price {
      display: flex;
      justify-content: space-around;
      align-items: baseline;
      padding-top: 25px;
      font-family: "Source Code Pro", monospace;
      font-size: 23px;
      color: black;
      margin-top: 5px;
      margin-left: 15px;
    }

    .buy-button {
      font-size: 16px;
      padding: 5px;

      .add-plus {
        font-size: 35px;
      }
    }
  }
}

@media screen and (max-width: 320px) {
  .catalog-items-container {
    .catalog-items {
      margin-left: 0;
    }
  }
}
</style>
