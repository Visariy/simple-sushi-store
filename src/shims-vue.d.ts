/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "swiper/vue" {
  import { DefineComponent } from "vue";

  export const Swiper: DefineComponent<any, any, any>;
  export const SwiperSlide: DefineComponent<any, any, any>;
}

declare module "swiper/core" {
  import { DefineComponent } from "vue";

  export const Autoplay: DefineComponent<any, any, any>;
  export const Pagination: DefineComponent<any, any, any>;
  export const Navigation: DefineComponent<any, any, any>;
}

