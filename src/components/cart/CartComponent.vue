<template>
  <button class="cart-btn" @click="openOrdersPopup">
    <svg class="shopping-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z"/></svg>
  </button>
  <div class="count-circle" v-if="cartStore.ordersList.length">
    <span class="orders-length-count">{{ totalQuantity }}</span>
  </div>
  <modal-component
    :is-open="showOrder"
    @close="showOrder = false"
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
                   v-for="data in cartStore.ordersList" :key="data.id">
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
      <button
        v-show="cartStore.ordersList.length > 0"
        class="actions-button">
        Confirm order
      </button>
    </template>
  </modal-component>
</template>

<script setup lang="ts">

import CartComponentItem from '@/components/cart/CartComponentItem.vue';

import { ref, computed } from 'vue';

import { orderType } from '@/interfaces/orderInterface';

import { useCartStore } from '@/pinia/store/cart/state/cartStore';

import ModalComponent from '@/components/ModalComponent.vue';

import { cartStoreType } from '@/interfaces/cartStoreInterface';

const showOrder = ref(false);

const cartStore: cartStoreType = useCartStore();

let totalPrice = ref(0);

let totalQuantity = ref(0);

// eslint-disable-next-line
const priceReducer = (accumulator: number, currentValue: orderType) => accumulator + currentValue.price * currentValue.quantity;

// eslint-disable-next-line
const quantityReducer = (accumular: number, currentValue: orderType) => accumular + currentValue.quantity;

// eslint-disable-next-line
totalPrice = computed(() => cartStore.ordersList.reduce(priceReducer, 0))

totalQuantity = computed(() => cartStore.ordersList.reduce(quantityReducer, 0));

function openOrdersPopup() {
  // eslint-disable-next-line
  return showOrder.value === false ? showOrder.value = true : showOrder.value = false;
}

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
      font-family: CodePro;
    }
  }

  .orders {
    margin-bottom: 30px;
  }

  .actions-button {
    margin-top: 20px;
    font-family: CodePro;
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
    font-family: CodePro;
  }

  .after-orders-line {
    margin-top: 75px;
  }

  .totalPrice-container {
      display: flex;
      justify-content: right;
      .totalPrice {
        font-family: CodePro;
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
        font-family: CodePro;
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
        font-size: 30px;
      }
    }
  }
</style>
