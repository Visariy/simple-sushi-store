<template>
    <div class="catalog-items">
        <img :src="sortedData?.image" class="sushi-photo" alt="" />
        <div class="down-side">
            <div class="sushi-title">
                {{ sortedData?.title }}
            </div>
            <div class="sushi-price">
                {{ sortedData?.price + "$" }}
                <button class="buy-btn"
                        @click="addProduct">
                    <span class="add-plus">+</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang=ts>

import { defineProps, onMounted } from 'vue';

import { useAddOrder } from '@/pinia/store/catalog/actions/addToOrdersList';

const addOrder: any = useAddOrder();

const props = defineProps({
  sortedData: Object,
});

function addProduct() {
  addOrder.addToOrdersList(props.sortedData);
}
</script>

<style lang="scss" scoped>
.catalog-items {
    border: 3px solid lightgray;
    background-color: whitesmoke;
    margin-left: 30px;
    margin-top: 70px;
    box-shadow: 0 0 20px black;
    width: 300px;
    transition: border .5s ease;
    border-radius: 20px;

    &:hover {
        border: 3px solid white;
    }

    .down-side {
        background-size: cover;
        background-color: whitesmoke;
        height: 100px;
        border-radius: 20px;
    }

    .sushi-title {
        font-size: 20px;
        display: flex;
        justify-content: center;
        color: black;
    }

    .sushi-subtitle {
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
    }

    .sushi-photo {
        display: flex;
        justify-content: center;
        margin-left: 20px;
        margin-top: 10px;
        width: 250px;
        height: 250px;
        z-index: 1;
        background-color: whitesmoke;
    }

    .sushi-price {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        padding-top: 25px;
        font-family: "Source Code Pro", monospace;
        font-size: 23px;
        color: black;
        margin-top: 5px;
        margin-left: 15px;
    }

    .buy-btn {
        font-family: "Source Code Pro", monospace;
        width: 50px;
        margin-bottom: 4px;
        margin-right: 5px;
        display: flex;
        justify-content: center;
        font-size: 17px;
        align-items: center;
        background-color: whitesmoke;
        border: 1px solid darkgray;
        box-shadow: 0 0 5px darkgray;
        border-radius: 30px;
        cursor: pointer;
        height: 40px;
        transition: background-color, color, box-shadow .5s ease;

        &:hover {
            background-color: darkorange;
            color: whitesmoke;
            box-shadow: 0 0 5px black;
        }

        .add-plus {
            font-size: 35px;
        }
    }
}

@media screen and (max-width: 320px){
  .catalog-items {
    margin-left: 0;
  }
}
</style>
