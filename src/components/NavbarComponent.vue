<template>
<div class="navigation">
  <div v-show="!mobile" class="navigation__btn">
    <div class="first__btn">
      <main-button class="main__btn"></main-button>
      <menu-button class="menu__btn" ></menu-button>
    </div>
    <div class="second__btn">
      <cart-button></cart-button>
    </div>
  </div>
  <button @click="toggleMobileNav" class="nav__mob__btn">
    <svg v-show="mobile" :class="{ 'nav__mob__active': mobileNav}" class="nav__mob" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
  </button>
  <transition name="fade">
    <ul v-show="mobileNav" class="dropdown__nav">
      <li><router-link class="link" to="/">Home</router-link></li>
      <li><router-link class="link" to="/menu">Menu</router-link></li>
      <li><router-link class="link" to="/menu">Cart</router-link></li>
    </ul>
  </transition>
</div>
</template>

<script setup lang="ts">

import MenuButton from '@/UI/buttons/menuButton.vue';

import MainButton from '@/UI/buttons/mainButton.vue';

import CartButton from '@/UI/buttons/cartButton.vue';

import { ref, computed } from 'vue';

const mobile = ref(false);
const mobileNav = ref(false);
const windowWidth = ref(0);

function toggleMobileNav() {
  if (mobileNav.value === true) {
    mobileNav.value = false;
    return;
  }
  mobileNav.value = true;
}

const adaptive = computed(() => function checkScreen() {
  windowWidth.value = window.innerWidth;
  if (window.innerWidth <= 768) {
    mobile.value = true;
    return;
  }
  mobile.value = false;
  mobileNav.value = false;
});

window.addEventListener('resize', adaptive.value);

</script>

<style scoped lang="scss">
.navigation {
  .dropdown__nav{
    position: absolute;
    background-color: whitesmoke;
    top: -2px;
    height: 100%;
    width: 100%;
    z-index: 2;
    .link{
      display: flex;
      text-decoration: none;
      color: whitesmoke;
      justify-content: center;
      margin-top: 100px;
      margin-right: auto;
      margin-left: auto;
      font-size: 25px;
      cursor: pointer;
      border: solid 1px black;
      background: black;
      border-radius: 15px;
      width: 100px;
      font-family: CodePro;
    }
  }
  .fade-enter-from,
  .fade-leave-to{
    opacity: 0;
  }
  .fade-enter-to,
  .fade-leave-from{
    opacity: 0.94;
  }
  .fade-enter-active,
  .fade-leave-active{
    transition: all .25s linear;
  }
  .nav__mob__btn {
    border: 0;
    background: none;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    z-index: 3;
    .nav__mob {
      fill: whitesmoke;
      width: 35px;
      height: 35px;
      transition: 0.5s all ease;
      cursor: pointer;
      z-index: 3;
    }
    .nav__mob__active{
      transform: rotate(180deg);
      fill: black;
      z-index: 3;
    }
  }
  .navigation__btn {
    display: flex;
    justify-content: space-around;
    width: 100%;

    .second__btn {
      margin-top: 13px;
    }

    .main__btn {
      margin-right: 15px;
      margin-top: 10px;
    }

    .menu__btn {
      margin-top: 10px;
    }
  }
}

</style>
