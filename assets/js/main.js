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
    speed: 600,
    centeredSlides: true,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false,
    // },
    autoplay: false,
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

  new Swiper(".сertificate_slider", {
    slidesPerView: 4,
    speed: 600,
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false,
    // },
    autoplay: false,
    allowTouchMove: false,
    spaceBetween: 50,
    navigation: {
      nextEl: ".swiper-button-next-сertificate",
      prevEl: ".swiper-button-prev-сertificate",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // breakpoints: {
    //   550: {
    //
    //   },
    //   890: {
    //
    //   },
    //   1100: {
    //     slidesPerView: 'auto',
    //   }
    // }
  });
});