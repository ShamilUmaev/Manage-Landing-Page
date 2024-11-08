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

const hamburgerBtn = document.querySelector('.hamburger-btn');
const closeBtn = document.querySelector('.close-mobile-menu-btn');
const mobileNav = document.querySelector('.main-nav-list');
const pageContainer = document.querySelector('.page-outer-container');

const showMobileNav = function () {
    hamburgerBtn.classList.remove('visible');
    hamburgerBtn.classList.add('hidden');
    closeBtn.classList.remove('hidden');
    closeBtn.classList.add('visible');
    mobileNav.classList.remove('hide-mobile-menu');
    mobileNav.classList.add('show-mobile-menu');
    pageContainer.classList.add('overlay');
}

const hideMobileNav = function () {
    hamburgerBtn.classList.remove('hidden');
    hamburgerBtn.classList.add('visible');
    closeBtn.classList.remove('visible');
    closeBtn.classList.add('hidden');
    mobileNav.classList.remove('show-mobile-menu');
    mobileNav.classList.add('hide-mobile-menu');
    pageContainer.classList.remove('overlay');
}

hamburgerBtn.addEventListener('click', showMobileNav);
closeBtn.addEventListener('click', hideMobileNav);