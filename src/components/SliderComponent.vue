<template>
    <Carousel v-if="!mobile" :items-to-show="3" :wrap-around="true" :autoplay="2000">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">{{ slide }}</div>
      </Slide>

      <template>
        <Navigation/>
        <Pagination />
      </template>
    </Carousel>

    <Carousel v-if="mobile" :items-to-show="1" :wrap-around="true" :autoplay="2000">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">{{ slide }}</div>
      </Slide>

      <template>
        <Navigation/>
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

import { ref, computed } from 'vue';

const mobile = ref(false);
const windowWidth = ref(0);

const adaptive = computed(() => function checkScreen() {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value <= 768) {
    mobile.value = true;
    return;
  }
  mobile.value = false;
});

window.addEventListener('resize', adaptive.value);

</script>

<style lang="scss" scoped>

section.carousel{
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

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

</style>
