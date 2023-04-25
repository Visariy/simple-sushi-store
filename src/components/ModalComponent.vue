<template>
  <transition name="popup">
    <div v-if="publicStore.showOrder" class="backdrop" @click="close">
        <div class="popup" @click.stop>
           <div class="close-button-container">
                <button class="close-button" @click.prevent="close">
                    <span class="close-span">X</span>
                </button>
           </div>
           <slot name="title">
            </slot>
            <slot name="body">
            </slot>
            <div class="footer">
                <slot name="actions">
                </slot>
            </div>
        </div>
    </div>
  </transition>
</template>

<script setup lang="ts">

import { defineEmits } from 'vue';

import { usePublicStore } from '@/pinia/store/publicStore';

const publicStore = usePublicStore();

const emits = defineEmits({
  close: null,
});

function close() {
  emits('close');
}

</script>

<style lang="scss" scoped>
.backdrop {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 100;

    .popup {
        max-width: 1000px;
        max-height: 50vh;
        margin: 0 auto;
        padding: 20px;
        z-index: 101;
        background-color: white;
        overflow-y: auto;
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
.popup-enter-from,
.popup-leave-to {
  opacity: 0;
}

.popup-enter-active,
.popup-leave-from {
  opacity: 0.94;
}

.popup-enter-active,
.popup-leave-active {
  transition: all .25s linear;
}

@media screen and (max-width: 425px) {
  .backdrop{
    .popup{
      width: 425px;
    }
  }
}
@media screen and (max-width: 375px) {
  .backdrop{
    .popup{
      width: 375px;
    }
  }
}
@media screen and (max-width: 320px) {
  .backdrop{
    .popup{
      width: 320px;
    }
  }
}
</style>
