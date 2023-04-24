<template>
  <modal-component
    @close="publicStore.showOrder = false"
    >
    <template #title>
      <div class="title-container">
        <h1 class="title">Cart</h1>
        <hr/>
      </div>
    </template>
    <template #body>
      <cart-component-item
                   class="orders"
                   :order-data="data"
                   @dicrement = "data.quantity--"
                   @maxDicrement ="data.quantity = 1"
                   @increment = "data.quantity++"
                   @maxIncrement = "data.quantity = 9"
                   v-for="data in cartStore.ordersList" :key="data.id"
      >
      </cart-component-item>
      <span class="cart-empty" v-if="cartStore.ordersList.length === 0">Cart empty</span>
      <hr class="after-orders-line" />
      <div class="totalPrice-container">
        <span
        v-if="cartStore.ordersList.length >= 1" class="totalPrice">
        Total - {{ totalPrice + "$"}}
        </span>
      </div>
    </template>
    <template #actions>
      <v-btn
        v-show="cartStore.ordersList.length > 0"
        class="bg-black"
        prepend-icon="mdi-check-bold"
        rounded="rounded"
      >
        <span style="font-family: 'Source Code Pro', monospace">Confirm order</span>
      </v-btn>
    </template>
  </modal-component>
</template>

<script setup lang="ts">

import CartComponentItem from '@/components/cart/CartComponentItem.vue';

import { computed } from 'vue';

import { orderType } from '@/interfaces/orderInterface';

import { useCartStore } from '@/pinia/store/cart/state/cartStore';

import { usePublicStore } from '@/pinia/store/publicStore';

import ModalComponent from '@/components/ModalComponent.vue';

import { cartStoreType } from '@/interfaces/cartStoreInterface';

const cartStore: cartStoreType = useCartStore();

let totalPrice;

const publicStore = usePublicStore();

// eslint-disable-next-line
const priceReducer = (accumulator: number, currentValue: orderType) => accumulator + currentValue.price * currentValue.quantity;

// eslint-disable-next-line
totalPrice = computed(() => cartStore.ordersList.reduce(priceReducer, 0))

</script>

<style lang="scss" scoped>
  .cart-btn {
    border: 0;
    position: absolute;
    background: none;
    margin-top: 0;
    margin-right: 10px;
    .shopping-cart {
      width: 35px;
      height: 35px;
      padding: 3px;
      border-radius: 6px;
      fill: white;
      transition: fill,background 0.5s linear;
      &:hover {
        fill: black;
        background: whitesmoke;
      }
    }
  }
  .count-circle {
    position: relative;
    margin-top: 15px;
    margin-left: 20px;
    width: 25px;
    height: 25px;
    background-color: darkorange;
    border-radius: 20px;
    .orders-length-count {
      display: flex;
      justify-content: center;
      font-size: 20px;
      padding-top: 1px;
      color:black
    }
  }
  .title-container {
    padding-bottom: 30px;
    .title {
      padding-bottom: 10px;
      display: flex;
      justify-content: center;
      font-family: "Source Code Pro", monospace;
    }
  }

  .orders {
    margin-bottom: 30px;
  }

  .actions-button {
    margin-top: 20px;
    font-family: "Source Code Pro", monospace;
    background-color: whitesmoke;
    color: black;
    font-size: 20px;
    border-radius: 20px;
    padding: 10px;
    transition: color, background-color .25s linear;
    cursor: pointer;
    &:hover {
      color: whitesmoke;
      background-color: black;
    }
  }

  .cart-empty {
    font-size: 30px;
    padding-top: 40px;
    display: flex;
    justify-content: center;
    font-family: "Source Code Pro", monospace;
  }

  .after-orders-line {
    margin-top: 75px;
  }

  .totalPrice-container {
      display: flex;
      justify-content: right;
      .totalPrice {
        font-family: "Source Code Pro", monospace;
        z-index: 99;
        font-size: 40px;
      }
  }

  @media screen and (max-width: 425px) {
    .title-container{
      padding-bottom: 30px;
      .title{
        font-size: 23px;
        padding-bottom: 10px;
        display: flex;
        justify-content: center;
        font-family: "Source Code Pro", monospace;
      }
    }
    .actions-button{
      margin-top: 20px;
      background-color: whitesmoke;
      color: black;
      font-size: 15px;
      border-radius: 15px;
      padding: 10px;
      transition: color, background-color .25s linear;
      cursor: pointer;
      &:hover {
        color: whitesmoke;
        background-color: black;
      }
    }
    .totalPrice-container{
      .totalPrice{
        padding: 20px 0;
        font-size: 25px;
      }
    }
  }
</style>
