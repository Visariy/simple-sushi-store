<template>
  <div class="container__footer">
    <div class="container__footer__content">
        <div class="footer__text">
          <span>Thanks for visit</span>
        </div>
      <div class="footer__links">
        <div class="footer__link">
          <facebook-icon></facebook-icon>
        </div>
        <div class="footer__link">
          <twitter-icon></twitter-icon>
        </div>
        <div class="footer__link">
          <instagram-icon></instagram-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import facebookIcon from '@/UI/buttons/facebookIcon.vue';

import instagramIcon from '@/UI/buttons/instagramIcon.vue';

import twitterIcon from '@/UI/buttons/twitterIcon.vue';

</script>

<style scoped lang="scss">
.container__footer{
  padding-top: 0;
  span{
    color:white;
  }
  .container__footer__content{
    max-width: 1200px;
    height: 100px;
    margin: 0 auto;
  }
  &:before{
    content: "";
    display: block;
    height: 1px;
    width: 100%;
    background-color: whitesmoke;
    margin-top: 200px;
    margin-bottom: 10px;
  }
  .footer__text{
    display: flex;
    justify-content: center;
    font-family: CodePro;
    font-size: 20px;
  }
  .footer__links{
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 200px;
    padding-right: 32px;
    padding-top: 10px;
      .footer__link{
        display: inline-block;
        padding-left: 30px;
      }
  }
}

</style>
