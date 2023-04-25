<template>
  <div class="main-content">
    <div class="container">
      <div class="text-container">
        <h1 class="title">REAL SUSHI</h1>
        <p class="title">NEEDS GOOD MATERIAL</p>
        <p class="text">Our variety of sushi is carefully
          prepared for you with high quality of products
          specially imported from Japan and Norway for Sushiroom
        </p>
      </div>
    </div>
    <div class="container-text">
      <p class="slider-text">Most Popular</p>
    </div>
    <SliderComponent>
    </SliderComponent>
  </div>
</template>

<script setup lang="ts">

import SliderComponent from '@/components/TheSliderComponent.vue';

</script>

<style lang="scss" scoped>
.main-content {
  .container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 0 auto;
    max-width: 1000px;
    padding-top: 100px;
    padding-left: 30px;
    padding-right: -30px;

    .text-container {
      width: 500px;
      padding: 0 30px;
    }

    .title {
      color: whitesmoke;
      font-family: "Source Code Pro", monospace;
      font-size: 60px;
    }

    .text {
      color: whitesmoke;
      font-family: "Source Code Pro", monospace;
      font-size: 25px;
    }
  }

  .container-text {
    max-width: 160px;
    margin: 0 auto;
    display: flex;
    padding-top: 90px;

    .slider-text {
      max-width: 1200px;
      margin-left: 20px;
      color: white;
      font-family: "Source Code Pro", monospace;
    }
  }
}
</style>
