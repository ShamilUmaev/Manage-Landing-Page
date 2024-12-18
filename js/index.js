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
const overlay = document.querySelector('.page-outer-container');
const headerTop = document.querySelector('.header-top');
const desktopNav = document.querySelector('.main-nav');
const breakpoint = window.matchMedia("(min-width: 992px)");

const showMobileNav = function () {
    hamburgerBtn.classList.remove('visible');
    hamburgerBtn.classList.add('hidden');
    closeBtn.classList.remove('hidden');
    closeBtn.classList.add('visible');
    mobileNav.classList.remove('hide-mobile-menu');
    mobileNav.classList.add('show-mobile-menu');
    pageContainer.classList.add('overlay');
    // headerTop.style.backgroundColor = "transparent";
}

const hideMobileNav = function () {
    hamburgerBtn.classList.remove('hidden');
    hamburgerBtn.classList.add('visible');
    closeBtn.classList.remove('visible');
    closeBtn.classList.add('hidden');
    mobileNav.classList.remove('show-mobile-menu');
    mobileNav.classList.add('hide-mobile-menu');
    pageContainer.classList.remove('overlay');
    // headerTop.style.backgroundColor = "#fff";
}

const stickHeaderToTop = function () {
  if(window.scrollY > 20) {
    headerTop.classList.add('sticky-header');
    desktopNav.style.padding = "2.5rem 0";
  } else {
    headerTop.classList.remove('sticky-header');
    desktopNav.style.padding = "5rem 0 0 0";
  }
}

const init = function () {
  hamburgerBtn.addEventListener('click', showMobileNav);
  closeBtn.addEventListener('click', hideMobileNav);
  window.addEventListener('scroll', () => {
    if(breakpoint.matches) {
      stickHeaderToTop();
    }
  });
  document.body.addEventListener('click', (e) => {
    if(e.target.classList.contains('overlay')) {
      hideMobileNav();
    }
  });
}

init();