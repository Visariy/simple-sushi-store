<template>
  <Carousel :items-to-show="itemsToShow" :wrap-around="true" :autoplay="2000">
    <Slide v-for="data in catalogStore.dataArray" :key="data.id">
      <div class="carousel-product-info-container">
        <img class="carousel-image" :src="data.image" alt="">
        <hr>
        <div class="carousel-title-container">
          <div class="carousel-title">
            {{ data.title }}
          </div>
        </div>
        <div class="carousel-price-and-button-container">
          <div class="carousel-price">
            {{ data.price + "$" }}
          </div>
          <div class="carousel-button-сontainer">
            <button class="carousel-button" @click="addOrder.addToOrdersList(data);">
              TO CART
            </button>
          </div>
        </div>
      </div>
    </Slide>

    <template>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup lang="ts">

import {
  Carousel,
  Navigation,
  Pagination,
  Slide,
} from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

import { computed } from 'vue';

import { useCatalogStore } from '@/pinia/store/catalog/state/catalogStore';

import { useAddOrder } from '@/pinia/store/catalog/actions/addToOrdersList';

import { useAdaptiveStore } from '@/pinia/store/adaptive/adaptiveStore';
import { catalogStoreType } from '@/interfaces/catalogStoreInterface';

const catalogStore: catalogStoreType = useCatalogStore();

const adaptiveStore = useAdaptiveStore();

const addOrder = useAddOrder();

const itemsToShow = computed(() => {
  if (adaptiveStore.mobile) {
    return 1;
  }
  return 3;
});

window.addEventListener('resize', adaptiveStore.adaptive);

</script>

<style lang="scss" scoped>
section.carousel {
  max-width: 800px;
  margin: 0 auto;
  cursor: pointer;
}

.carousel__item {
  min-height: 250px;
  width: 250px;
  background-color: white;
  color: black;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-image {
  width: 250px;
  height: 250px;
}

.carousel-title-container {
  color: whitesmoke;
}

.carousel-product-info-container {
  background-color: whitesmoke;
  border-radius: 20px;
  .carousel-image {
    width: 250px;
    height: 250px;
  }

  .carousel-title-container {
    display: flex;
    justify-content: center;
    .carousel-title{
      color: black;
      font-size: 25px;
      font-family: "Source Code Pro", monospace;
    }
  }

  .carousel-price-and-button-container{
    display: flex;
    justify-content: space-between;
    margin: 20px;
    .carousel-price{
      font-size: 25px;
      font-family: "Source Code Pro", monospace;
    }
    .carousel-button-сontainer{
      .carousel-button {
        font-size: 16px;
        padding: 5px;
        background: none;
        font-family: "Source Code Pro", monospace;
        cursor: pointer;
        transition: color .25s ease;
        border-radius: 5px;

        &:hover {
          background-color: black;
          color: whitesmoke;
        }
      }
    }
  }
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
