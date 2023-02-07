<template>
  <button class="cart__btn" @click="openOrdersPopup">
    <svg class="shopping__cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z"/></svg>
  </button>
  <div class="count-circle" v-if="store.ordersList.length > 0">
    <span class="buy-count">{{ store.ordersList.length }}</span>
  </div>
  <modal-component
    :is-open="showOrder"
    @close="showOrder = false"
    >
    <template #body>
      <div v-for="data in store.ordersList" :key="data.id">
        <div class="order-list" >
           <div class="order-image-container">
              <img class="order-image" :src="data.image" alt="">
           </div>
           <div class="order-title">
              {{ data.title }}
           </div>
        </div>
        <div class="order-price-container">
          <span class="order-price">
          Стоимость - {{ data.price }} р.
          </span>
        </div>
        <div class="totalPrice-container">
          <span class="totalPrice">{{ totalPrice }}</span>
        </div>
      </div>
    </template>
    <template #actions>
      <button class="actions-button">Подтвердить заказ</button>
    </template>
  </modal-component>
</template>

<script setup lang="ts">

import { ref, computed } from 'vue';

import { useStore } from '@/pinia/store';

import ModalComponent from '@/components/ModalComponent.vue';

const showOrder = ref(false);

const store = useStore();

let totalPrice = ref(0);

function openOrdersPopup() {
  // eslint-disable-next-line
  return showOrder.value === false ? showOrder.value = true : showOrder.value = false;
}

totalPrice = computed(() => store.ordersList.reduce((item) => item.price + item.price));

console.log(totalPrice);

</script>

<style scoped lang="scss">
  .cart__btn {
    border: 0;
    position: absolute;
    background: none;
    margin-top: 0;
    .shopping__cart {
      width: 35px;
      height: 35px;
      padding: 3px;
      border-radius: 6px;
      fill: white;
      transition: fill,background 0.5s linear;
      &:hover{
        fill: black;
        background: whitesmoke;
      }
    }
  }
  .count-circle{
    position: relative;
    margin-top: 15px;
    margin-left: 20px;
    width: 25px;
    height: 25px;
    background-color: darkorange;
    border-radius: 20px;
    .buy-count{
      display: flex;
      justify-content: center;
      font-size: 20px;
      padding-top: 1px;
      color:black
    }
  }
  .order-list {
    display: flex;
    justify-content: space-between;
    .order-title{
      font-size: 40px;
      margin-left: 200px;
      margin-top: 75px;
    }
    .order-image {
      width: 300px;
      height: 300px;
    }
  }

  .totalPrice-container{
      display: flex;
      justify-content: right;
      .totalPrice{
        z-index: 99;
        font-size: 40px;
      }
    }

  .actions-button{
    margin-top: 20px;
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
  .order-price-container{
    display: flex;
    justify-content: right;
    padding-bottom: 30px;
    .order-price{
      font-size: 30px;
    }
}
</style>
