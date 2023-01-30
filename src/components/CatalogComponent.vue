<template>
  <div class="catalog__container">
    <div class="catalog">
      <div class="catalog__item">
        <div class="sushi__photo">
        <img class="sushi__image" src="../../public/assets/sushiPhoto.png" alt="">
        </div>
        <div class="sushi__title">
          <p class="sushi_name">Суши</p>
        </div>
        <div class="sushi__subtitle">
          <p class="sushi__price">1000 р.</p>
          <button class="buy__btn">В КОРЗИНУ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.catalog__container {
  background-color: whitesmoke;
  height: 1250px;
  margin-top: 25px;
  .catalog {
    display: flex;
    width: 1200px;
    max-height: 400px;
    flex-wrap: wrap;
    .catalog__item {
      border: 3px solid lightgray;
      margin-left: 55px;
      margin-top: 70px;
      box-shadow: 0 0 20px black;
      width: 400px;
      transition: border .5s ease;
      border-radius: 20px;
      &:hover{
        border: 3px solid gray;
      }
      .sushi__title{
        display: flex;
        justify-content: center;
      }
      .sushi__subtitle{
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
      }
      .sushi__photo{
        display: flex;
        justify-content: center;
        .sushi__image {
          width: 300px;
          height: 300px;
          z-index: 1;
          margin-left: 0;
          background-color: whitesmoke;
        }
      }
      .sushi_name {
        color: black;
        font-size: 30px;
      }
      .sushi__price{
        font-family: CodePro;
        font-size: 23px;
        color: black;
        margin-top: 5px;
        margin-left: 15px;
      }
      .buy__btn{
        font-family: CodePro;
        width: 175px;
        margin-bottom: 4px;
        margin-right: 5px;
        display: flex;
        justify-content: center;
        font-size: 17px;
        align-items: center;
        background-color: whitesmoke;
        border: 1px solid darkgray;
        box-shadow: 0  0 5px darkgray;
        border-radius: 30px;
        cursor: pointer;
        height: 40px;
        transition: background-color,color,box-shadow .5s ease;
        &:hover{
          background-color: black;
          color: whitesmoke;
          box-shadow: 0 0 5px black;
        }
      }
    }
  }
}
</style>
