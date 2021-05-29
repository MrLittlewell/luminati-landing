$(document).ready(function () {

  wow = new WOW({
    boxClass: 'animate__animated', // default
    animateClass: 'animate__animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
  })
  wow.init();

  new Swiper(".front-slider", {
    slidesPerView: 1,
    speed: 3000,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      550: {

      },
      890: {

      },
      1100: {
        slidesPerView: 'auto',
      }
    }
  });
});