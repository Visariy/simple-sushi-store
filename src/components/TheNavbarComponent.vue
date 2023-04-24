<template>
  <div class="navigation">
    <div v-show="adaptiveStore.mobile === false" class="navigation-btn">
      <div class="navigation-pages-button-container">
        <v-btn @click="$router.push('/')"
                 class="navigation-button"
                 variant="tonal">
            <span class="button-text">Home</span>
        </v-btn>
        <router-link to="/catalog">
          <v-btn class="navigation-button" variant="text">
            <span class="button-text">Catalog</span>
          </v-btn>
        </router-link>
      </div>
      <div class="navigation-cart-button-container">
        <cart-component></cart-component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import CatalogButton from '@/UI/buttons/CatalogButton.vue';

import MainButton from '@/UI/buttons/MainButton.vue';

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
      font-family: "Source Code Pro", monospace;
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

    .navigation-pages-button-container {
      justify-content: space-around;

      .button-text {
        color: white;
        text-decoration: none;
        font-size: 17px;
        font-family: "Source Code Pro", monospace;
      }
    }

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
