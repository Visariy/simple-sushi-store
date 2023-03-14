<template>
  <div class="orders-list-container">
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
        <span class="order-quantity">
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
        <button class="delete-button" @click="removeOrderByClick">
          x
        </button>
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

const publicStore: publicStoreType = usePublicStore();

const removeOrder: any = useRemoveOrder();

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

@media screen and (max-width: 425px) {
  .orders-list-container{
    .orders-list{
      max-width: 375px;
      .order-image-container{
        .order-image{
          width: 100px;
          height: 100px;
        }
      }
      .order-title {
        max-width: 80px;
        font-size: 15px;
        margin-right: 25px;
        margin-left: 15px;
      }
      .add-remove-buttons{
        width: 45px;
        margin-top: 35px;
        .add-button {
          font-size: 15px;
          margin-right: 5px;
          padding-left: 5px;
          cursor: pointer;
          border: none;
          background: none;
        }

        .remove-button {
          font-size: 15px;
          margin-left: 5px;
          padding-right: 5px;
          cursor: pointer;
          background: none;
          border: none;
        }

        .order-quantity{
          margin-top: 8px;
          font-size: 12px;
        }
        .item-amount {
          font-size: 15px;
          margin-top: 2px;
        }
      }
      .order-price {
        font-size: 15px;
        margin-right: 20px;
      }
    }
  }
}

@media screen and (max-width: 375px) {
  .orders-list-container{
    .orders-list{
      max-width: 360px;
      .order-image-container{
        .order-image{
          width: 100px;
          height: 100px;
        }
      }
      .order-title {
        max-width: 80px;
        font-size: 15px;
        margin-right: 25px;
        margin-left: 15px;
      }
      .add-remove-buttons{
        width: 45px;
        margin-top: 35px;
        .add-button {
          font-size: 15px;
          margin-right: 5px;
          padding-left: 5px;
          cursor: pointer;
          border: none;
          background: none;
        }

        .remove-button {
          font-size: 15px;
          margin-left: 5px;
          padding-right: 5px;
          cursor: pointer;
          background: none;
          border: none;
        }

        .order-quantity{
          margin-top: 8px;
          font-size: 12px;
        }
        .item-amount {
          font-size: 15px;
          margin-top: 2px;
        }
      }
      .order-price {
        font-size: 15px;
        margin-right: 20px;
      }
    }
  }
}
@media screen and (max-width: 320px) {
  .orders-list-container{
    .orders-list{
      max-width: 285px;
      .order-image-container{
        .order-image{
          width: 90px;
          height: 90px;
        }
      }
      .order-title {
        max-width: 80px;
        margin-right: 30px;
        margin-left: 2px;
        font-size: 15px;
      }
      .add-remove-buttons{
        width: 45px;
        margin-top: 35px;
        margin-right: 10px;
        .add-button {
          font-size: 15px;
          margin-right: 5px;
          padding-left: 5px;
          cursor: pointer;
          border: none;
          background: none;
        }

        .remove-button {
          font-size: 15px;
          margin-left: 5px;
          padding-right: 5px;
          cursor: pointer;
          background: none;
          border: none;
        }

        .order-quantity{
          margin-top: 8px;
          font-size: 12px;
        }
        .item-amount {
          font-size: 15px;
          margin-top: 2px;
        }
      }
      .order-price {
        font-size: 15px;
        margin-right: 20px;
      }
    }
  }
}
</style>
