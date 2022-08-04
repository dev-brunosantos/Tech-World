const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 2500,
    },
    effect: 'cube',
    cubeEffect: {
    slideShadows: true,
  },
});