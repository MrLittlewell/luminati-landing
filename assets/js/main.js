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
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    // autoplay: false,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });

  new Swiper(".сertificate_slider", {
    slidesPerView: 4,
    speed: 600,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    spaceBetween: 10,
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


  //Form Checker
  function checkFormControl() {
    $(".form-control").each(function () {
      var thisa = $(this);
      if (thisa.val().length) {
        thisa.parents(".form-field").addClass("focus");
        thisa.parents(".form-field").addClass("validate");
      }
    });
  }

  checkFormControl();
  var $formField = $(".form-field");
  $formField.on("focus", ".form-control", function () {
    $(this).parents(".form-field").addClass("focus");
    $(this).parents(".form-field .form-control").addClass("validate");
  });

  $formField.on("focusout", ".form-control", function () {
    if (!$(this).val().length) {
      $(this).parents(".form-field").removeClass("focus");
    } else {}
  });


  //Mask 
  $('input[type="tel"]').mask('+7 (000) 000-00-00');

  //Masonry
  const masonry = $('.works-gallery').masonry({
    // options
    itemSelector: '.gallery-item',
    singleMode: false,
    isResizable: true,
    isAnimated: true,
    animationOptions: {
      queue: false,
      duration: 500
    }
  });
  setTimeout(() => {
    $('.works-gallery').masonry()

  }, 1000)

  //Quiz
  $('.step-one .variable').click(function () {
    $('.step-one').fadeOut(500);

    const value = $(this).attr('data-value');
    $('input[name="system"]').val(value);

    setTimeout(() => {
      $('.step-two').fadeIn(500)
      $('.step-one').removeClass('active');
      $('.step-two').addClass('active')
      $('.step-one').removeClass('active')

    }, 500)
  })

  $('.step-two .variable').click(function () {

    const value = $(this).attr('data-value');
    $('input[name="project"]').val(value);

    $('.step-two').fadeOut(500);
    setTimeout(() => {
      $('.step-three').fadeIn(500)
      $('.step-two').removeClass('active');
      $('.step-three').addClass('active')
      $('.step-two').removeClass('active')
    }, 500)
  })

  $('.step-three .variable').click(function () {

    const value = $(this).attr('data-value');
    $('input[name="youAre"]').val(value);

    $('.step-three').fadeOut(500);
    setTimeout(() => {
      $('.step-four').fadeIn(500)
      $('.step-three').removeClass('active');
      $('.step-four').addClass('active')
      $('.step-three').removeClass('active')
    }, 500)
  })

  $('.step-four .variable').click(function () {

    const value = $(this).attr('data-value');
    $('input[name="contact"]').val(value);

    $('.step-four').fadeOut(500);
    setTimeout(() => {
      $('.step-five').fadeIn(500)
      $('.step-four').removeClass('active');
      $('.step-five').addClass('active')
      $('.step-four').removeClass('active')
    }, 500)
  })

  $('.last-step-form input[name="f-Name"]').change(function (e) {
    const value = $(this).val();
    $('input[name="userName"]').val(value)
  })

  $('.last-step-form input[name="f-Phone"]').change(function (e) {
    const value = $(this).val();
    $('input[name="userPhone"]').val(value)
  })


  $('.to-top').click(function () {
    window.scrollTo(0, 0);
  })


  $(window).scroll(function () {
    scroll = $(window).scrollTop();

    if (scroll >= 500) {
      $('.to-top').fadeIn(500)
    } else {
      $('.to-top').fadeOut(500)
    }
  });

  //Menu
  $('.flyout-trigger').click(function () {
    $('body').toggleClass('flyout-shown')
  });
});