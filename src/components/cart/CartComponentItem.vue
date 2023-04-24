<template>
  <div v-if="adaptiveStore.mobile === false" class="orders-list-container">
    <div class="orders-list">
      <div class="order-image-container">
        <img class="order-image" :src=orderData.image alt="">
      </div>
      <div class="order-title">
        {{ orderData.title }}
      </div>
      <div class="add-remove-buttons">
        <button class="add-button" @click="incrementQuntity">
          +
        </button>
        <span style="font-size: 20px; font-family: 'Source Code Pro', monospace">
          {{ orderData.quantity }}
        </span>
        <button class="remove-button" @click="dicrementQuantity">
          -
        </button>
      </div>
      <div class="order-price">
        {{ orderData.price * orderData.quantity + "$"}}
      </div>
      <div class="delete-button-container">
        <v-btn icon
               size="small"
               @click="removeOrderByClick">
          <v-icon color="red">mdi-delete</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="orders-list-mobile">
      <div class="order-image-container-mobile">
        <img class="order-image-mobile" :src=orderData.image alt="">
        <div class="delete-button-container-mobile">
          <v-btn icon
                 size="small"
                 @click="removeOrderByClick">
            <v-icon color="red">mdi-delete</v-icon>
          </v-btn>
        </div>
      </div>
      <div class="order-title-container-mobile">
        <div class="order-title-mobile">
          {{ orderData.title }}
        </div>
      </div>
      <div class="actions-container-mobile">
        <div class="add-remove-buttons-mobile">
          <button class="add-button-mobile" @click="incrementQuntity">
            +
          </button>
          <span style="font-size: 20px; font-family: 'Source Code Pro', monospace">
            {{ orderData.quantity }}
          </span>
          <button class="remove-button-mobile" @click="dicrementQuantity">
            -
          </button>
        </div>
        <div class="order-price-mobile">
          {{ orderData.price * orderData.quantity + "$"}}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {
  defineProps, defineEmits,
} from 'vue';

import { useRemoveOrder } from '@/pinia/store/cart/actions/removeFromOrderList';

import { usePublicStore } from '@/pinia/store/publicStore';

import { publicStoreType } from '@/interfaces/publicStoreInterface';

import { useAdaptiveStore } from '@/pinia/store/adaptive/adaptiveStore';

const publicStore: publicStoreType = usePublicStore();

const removeOrder: any = useRemoveOrder();

const adaptiveStore = useAdaptiveStore();

const props = defineProps({
  orderData: Object,
});

const removeOrderByClick = () => {
  removeOrder.removeFromOrderList(props.orderData);
};

const emits = defineEmits([
  'dicrement',
  'increment',
  'maxDicrement',
  'maxIncrement',
]);

function dicrementQuantity() {
  emits('dicrement');
  // eslint-disable-next-line no-plusplus
  publicStore.totalQuantity--;
  if (props.orderData?.quantity <= 1) {
    // eslint-disable-next-line no-plusplus
    emits('maxDicrement');
  }
}

function incrementQuntity() {
  emits('increment');
  // eslint-disable-next-line no-plusplus
  publicStore.totalQuantity++;
  if (props.orderData?.quantity >= 9) {
    emits('maxIncrement');
  }
}

</script>

<style lang="scss" scoped>
.orders-list {
  display: flex;
  justify-content: space-between;
  height: 100px;
  width: 600px;

  .order-title {
    font-family: "Source Code Pro", monospace;
    font-size: 23px;
    margin-top: 40px;
    margin-right: 10px;
    margin-left: 10px;
  }

  .order-image {
    width: 150px;
    height: 150px;
  }

  .order-price {
    font-family: "Source Code Pro", monospace;
    margin-top: 40px;
    font-size: 25px;
  }

  .delete-button-container {
    display: flex;
    align-items: baseline;
    margin-top: 10px;
    .delete-button{
      font-size: 21px;
      color:red;
      border: none;
      cursor: pointer;
      background: none;
    }
  }

  .add-remove-buttons {
    margin-top: 40px;
    border: 1px solid gray;
    max-height: 30px;
    border-radius: 5px;
    font-size: 25px;
    display: flex;
    justify-content: space-between;

    .add-button {
      font-size: 20px;
      margin-right: 15px;
      padding-left: 15px;
      cursor: pointer;
      border: none;
      background: none;
    }

    .remove-button {
      font-size: 20px;
      margin-left: 15px;
      padding-right: 15px;
      cursor: pointer;
      background: none;
      border: none;
    }

    .item-amount {
      font-size: 20px;
      margin-top: 2px;
    }
  }
}

.orders-list-mobile{
  .order-image-container-mobile{
    display: flex;
    justify-content: center;
    .order-image-mobile{
      display: flex;
      max-width: 100%;
      width: 200px;
    }
  }
  .order-title-container-mobile{
    display: flex;
    justify-content: center;
    .order-title-mobile{
      font-family: "Source Code Pro", monospace;
    }
  }
  .actions-container-mobile{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    .add-remove-buttons-mobile{
      border: 1px solid gray;
      max-height: 30px;
      border-radius: 5px;
      font-size: 25px;
      display: flex;
      justify-content: space-between;
      .add-button-mobile{
        font-size: 20px;
        margin-right: 15px;
        padding-left: 15px;
        cursor: pointer;
        border: none;
        background: none;
      }
      .remove-button-mobile{
        font-size: 20px;
        margin-left: 15px;
        padding-right: 15px;
        cursor: pointer;
        background: none;
        border: none;
      }
    }
    .order-price-mobile{
      font-family: "Source Code Pro", monospace;
      font-size: 20px;
    }
    .delete-button-container-mobile{

    }
  }
}

</style>
