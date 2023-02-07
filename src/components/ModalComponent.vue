<template>
    <div v-if="isOpen" class="backdrop">
        <div class="popup">
           <div class="close-button-container">
                <button class="close-button" @click="close">
                    <span class="close-span">X</span>
                </button>
           </div>
           <div class="title">
                <h1>Корзина</h1>
            </div>
            <hr />
            <slot name="body">
            </slot>
            <hr />
            <div class="footer">
                <slot name="actions">
                </slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isOpen: Boolean,
});

const emits = defineEmits({
  close: null,
});

function close() {
  emits('close');
}

</script>

<style scoped lang="scss">
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 100;

    .popup {
        max-width: 1000px;
        max-height: 600px;
        top: 50px;
        padding: 20px;
        left: 50%;
        transform: translateX(-50%);
        position: fixed;
        z-index: 101;
        background-color: white;
        border-radius: 10px;

        .close-button-container{
            display: flex;
            justify-content: flex-end;
            .close-button {
                background: none;
                border: none;
                font-size: 20px;
                cursor: pointer;
            }
        }
        .title  {
            display: flex;
            justify-content: center;
            .popup h1 {
                margin: 0;
            }
        }

        .footer {
            text-align: center;
        }
    }
}
</style>
