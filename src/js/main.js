

/*=========== SWIPER CLASS ========== */
(function () {
  // Activate swipers
  const swips = new Swips();
  swips.addSwiper(".programs-slider", "min-width:1200px", {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 8,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',

    },

    // Navigation arrows
    navigation: {
      nextEl: '.program-slider-next',
      prevEl: '.program-slider-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      580: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 4,
      },
      1200: {

      }
    },
  });

  swips.addSwiper(".persons-slider", "min-width:1200px", {
    // Optional parameters
  slidesPerView: 4,
  spaceBetween: 20,

  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    480: {
      slidesPerView: 2,
    },
    580: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 4,
    },
  },
  });

  swips.addSwiper(".services-slider", "min-width:1200px", {

  // Optional parameters
  slidesPerView: 3,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    580: {
      slidesPerView: 3,
    },
  },
  });

  swips.addSwiper(".board-slider", "min-width:1200px", {

  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    480: {
      slidesPerView: 2,
    },
    580: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 4,
    },
  },
  });

  swips.addSwiper(".news-slider", "min-width:1200px", {
 
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    580: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 4,
    },
  },
  });


  swips.init();
})();


// Cases slider

const swiperCases = new Swiper('.cases-slider', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: '.program-slider-next',
    prevEl: '.program-slider-prev',
  },

    pagination: {
    el: '.swiper-pagination',
  },
});

// Partners slider

const swiperPartners = new Swiper('.partners-slider', {
  // Optional parameters
  slidesPerView: 5,
  spaceBetween: 20,

  breakpoints: {
    320: {
      slidesPerView: 3,
    },
    580: {
      slidesPerView: 4,
    },
    900: {
      slidesPerView: 5,
    },
  },
});

// Teachers slider

const swiperTeachers = new Swiper('.teachers-slider', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.program-slider-next',
    prevEl: '.program-slider-prev',
  },

    pagination: {
    el: '.swiper-pagination',
  },
});

// Documents slider

const swiperDocuments = new Swiper('.documents-slider', {
  // Optional parameters
  slidesPerView: 3.5,
  spaceBetween: 8,

  breakpoints: {
    320: {
      slidesPerView: 1.5,
    },
    570: {
      slidesPerView: 2,
    },
    712: {
      slidesPerView: 2.5,
    },
    846: {
      slidesPerView: 3,
    },
    970: {
      slidesPerView: 3.5,
    },
  },
});

// Reviews slider

const swiperReviews = new Swiper('.reviews-slider', {
  // Optional parameters
  slidesPerView: 2,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: '.program-slider-next',
    prevEl: '.program-slider-prev',
  },
});

// Thankyou Programs slider

const swiperThankyouPrograms = new Swiper('.thankyou-programs-slider', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 20,

  breakpoints: {
    320: {
      slidesPerView: 1.3,
    },
    480: {
      slidesPerView: 2,
    },
    712: {
      slidesPerView: 2.5,
    },
    846: {
      slidesPerView: 3,
    },
  },
});

// Thankyou Services slider

const swiperThankyouServices = new Swiper('.thankyou-services-slider', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 20,

  breakpoints: {
    320: {
      slidesPerView: 1.3,
    },
    480: {
      slidesPerView: 2,
    },
    712: {
      slidesPerView: 2.5,
    },
    846: {
      slidesPerView: 3,
    },
  },
});