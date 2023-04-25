<template>
    <v-app-bar density="compact" style="background-color: black">
        <v-app-bar-nav-icon
                            rounded="0"
                            style="color: whitesmoke"
                            @click.stop="drawer = !drawer">
        </v-app-bar-nav-icon>

        <v-spacer></v-spacer>

        <v-btn @click="publicStore.openOrdersPopup()"
               icons
               color="white"
        >
          <v-badge :content="totalQuantity">
            <v-icon icon="mdi-cart" size="x-large"></v-icon>
          </v-badge>
        </v-btn>

    </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        location="left"
        temporary
      >
        <v-list>
          <v-list-item @click="$router.push('/')"
                       prepend-icon="mdi-home"
                       title="Home"
                       value="home"></v-list-item>

          <v-list-item @click="$router.push('/catalog')"
                       prepend-icon="mdi-list-box"
                       title="Catalog"
                       value="catalog"></v-list-item>
        </v-list>
      </v-navigation-drawer>

    <cart-component></cart-component>
</template>

<script setup lang="ts">
import { watch, ref, computed } from 'vue';
import { usePublicStore } from '@/pinia/store/publicStore';
import { useCartStore } from '@/pinia/store/cart/state/cartStore';
import CartComponent from '@/components/cart/CartComponent.vue';
import { orderType } from '@/interfaces/orderInterface';

const drawer = ref(true);

const group = ref(null);

const publicStore = usePublicStore();

const cartStore = useCartStore();

let totalQuantity;

// eslint-disable-next-line
const quantityReducer = (accumulator: number, currentValue: orderType) => accumulator + currentValue.quantity;

// eslint-disable-next-line
totalQuantity = computed(() => cartStore.ordersList.reduce(quantityReducer, 0));

watch(group, () => {
  drawer.value = false;
});

</script>

<style lang="scss" scoped>

</style>
