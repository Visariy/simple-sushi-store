<template>
  <div class="navigation">
    <div v-show="adaptiveStore.mobile === false" class="navigation-btn">
      <div class="first-btn">
        <main-button class="main-btn"></main-button>
        <catalog-button class="menu-btn"></catalog-button>
      </div>
      <div class="second-btn">
        <cart-component></cart-component>
      </div>
  </div>
    <div class="mobile-nav-container">
      <button @click="toggleMobileNav" class="mobile-nav-button">
        <svg v-show="adaptiveStore.mobile === true" :class="{ 'nav-mob-active': mobileNav }" class="nav-mob" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"><!-- eslint-disable-next-line -->
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
      <div v-show="adaptiveStore.mobile === true" class="second-btn">
        <cart-component></cart-component>
      </div>
    </div>
    <transition name="fade">
      <ul v-show="mobileNav" class="dropdown-nav">
        <li><router-link class="link" to="/">Home</router-link></li>
        <li><router-link class="link" to="/catalog">Catalog</router-link></li>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">

import CatalogButton from '@/UI/buttons/catalogButton.vue';

import MainButton from '@/UI/buttons/mainButton.vue';

import { ref } from 'vue';

import CartComponent from '@/components/cart/CartComponent.vue';

import { useAdaptiveStore } from '@/pinia/store/adaptive/adaptiveStore';

const mobileNav = ref(false);

const adaptiveStore = useAdaptiveStore();

function toggleMobileNav() {
  if (mobileNav.value === true) {
    mobileNav.value = false;
    return;
  }
  mobileNav.value = true;
}

window.addEventListener('resize', adaptiveStore.adaptive);

</script>

<style lang="scss" scoped>
.navigation {
  .dropdown-nav {
    position: absolute;
    background-color: whitesmoke;
    top: -2px;
    height: 100%;
    opacity: 0.9;
    width: 30%;
    z-index: 2;

    .link {
      display: flex;
      text-decoration: none;
      color: whitesmoke;
      justify-content: center;
      margin-top: 50px;
      margin-right: auto;
      margin-left: auto;
      font-size: 15px;
      cursor: pointer;
      border: solid 1px black;
      background: black;
      width: 100%;
      font-family: CodePro;
    }
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-to,
  .fade-leave-from {
    opacity: 0.94;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all .25s linear;
  }

  .mobile-nav-container {
      display: flex;
      justify-content: space-between;
      padding-right: 40px;
      padding-top: 5px;
      width: 100%;

      .mobile-nav-button{
        z-index: 3;
        background: none;
        border: none;
      }

      .nav-mob {
        fill: whitesmoke;
        width: 35px;
        height: 35px;
        transition: 0.5s all ease;
        cursor: pointer;
        z-index: 3;
      }

      .nav-mob-active {
        transform: rotate(180deg);
        fill: black;
        z-index: 3;
      }
  }

  .navigation-btn {
    display: flex;
    justify-content: space-around;
    width: 100%;

    .second-btn {
      margin-top: 13px;
    }

    .main-btn {
      margin-right: 15px;
      margin-top: 10px;
    }

    .menu-btn {
      margin-top: 10px;
    }
  }
}
</style>
