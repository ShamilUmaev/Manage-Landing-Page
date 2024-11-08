const swiper = new Swiper('.swiper', {
    spaceBetween: 20,
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    speed: 1000,

    breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1250: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
  });
  