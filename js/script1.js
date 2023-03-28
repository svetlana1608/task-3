import {Autoplay, Navigation, Pagination, Swiper} from "swiper/dist/js/swiper.esm";

Swiper.use([Pagination, Navigation, Autoplay]);

var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});