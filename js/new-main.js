$(document).ready(function () {
  // инициализация библиотеки анимации
  AOS.init();

  //слайдер Отзывы
  const reviewsSlider = new Swiper(".reviews__swiper-container", {
    // slidesPerView: 4,
    loop: true,
    navigation: {
      nextEl: ".reviews__button-next",
      prevEl: ".reviews__button-prev",
    },
    speed: 1000,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    breakpoints: {
      455: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 2,
      },
      1600: {
        slidesPerView: 3,
      },
    },
  });
});
