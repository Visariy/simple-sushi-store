<template>
  <div class="main__content">
    <div class="container">
      <div class="text__container">
        <h1 class="title">REAL SUSHI</h1>
        <p class="title">NEEDS GOOD MATERIAL</p>
        <p class="text">Our variety of sushi is carefully
          prepared for you with high quality of products
          specially imported from Japan and Norway for Sushiroom
        </p>
      </div>
    </div>
    <div class="container__text">
      <p class="slider__text">Most Popular</p>
    </div>
    <SliderComponent>
    </SliderComponent>
  </div>
  <footerComponent>
  </footerComponent>
</template>

<script setup lang="ts">

import { computed } from 'vue';

import SliderComponent from '@/components/SliderComponent.vue';

import footerComponent from '@/components/FooterComponent.vue';

</script>

<style lang="scss" scoped>
.main__content {
  .container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 0 auto;
    max-width: 1000px;
    //max-height: 300px;
    padding-top: 100px;
    padding-left: 30px;
    padding-right: -30px;

    .text__container {
      width: 500px;
      padding: 0 30px;
    }

    .title {
      color: whitesmoke;
      font-family: CodePro;
      font-size: 60px;
    }

    .text {
      color: whitesmoke;
      font-family: CodePro;
      font-size: 25px;
    }
  }

  .container__text {
    max-width: 160px;
    margin: 0 auto;
    display: flex;
    padding-top: 90px;

    .slider__text {
      max-width: 1200px;
      margin-left: 20px;
      color: white;
      font-family: CodePro;
    }
  }
}
</style>
