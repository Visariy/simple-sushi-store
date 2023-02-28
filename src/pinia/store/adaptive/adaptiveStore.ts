import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useAdaptiveStore = defineStore('adaptiveStore', () => {
  const mobile = ref(false);

  const adaptive = computed(() => function checkScreen() {
    if (window.innerWidth <= 768) {
      mobile.value = true;
      return;
    }
    mobile.value = false;
  });

  return { mobile, adaptive };
});
