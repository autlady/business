// const toggleMenu = document.querySelector('menu-burger');

// if (toggleMenu){
//     toggleMenu.addEventListener('click', function(){
        
//         if(this.classList.contains('active')){
//             this.classList.remove('active');
//         }else{
//             this.classList.add('active');
//         }
//     })
// }

  // Programs slider

/*=========== SWIPER CLASS ========== */
(function () {
  // Activate swipers
  const swips = new Swips();
  swips.addSwiper(".programs-slider", "min-width:1200px", {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 20,
    // loop: true,

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
  swips.init();
})();

// const swiperPrograms = new Swiper('.programs-slider', {

//   slidesPerView: 4,
//   spaceBetween: 20,


  
//   pagination: {
//     el: '.swiper-pagination',
//   },


//   navigation: {
//     nextEl: '.program-slider-next',
//     prevEl: '.program-slider-prev',
//   },

//   breakpoints: {
//     320: {
//       slidesPerView: 2,
//     },
//     580: {
//       slidesPerView: 3,
//     },
//     900: {
//       slidesPerView: 4,
//     },
//   },
// });

  // Persons slider
const swiperPersons = new Swiper('.persons-slider', {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 20,
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.program-slider-next',
    prevEl: '.program-slider-prev',
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

// Board slider
const swiperBoard = new Swiper('.board-slider', {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 20,
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.program-slider-next',
    prevEl: '.program-slider-prev',
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

// News slider

const swiperNews = new Swiper('.news-slider', {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 20,
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.program-slider-next',
    prevEl: '.program-slider-prev',
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

// Cases slider

const swiperCases = new Swiper('.cases-slider', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 20,
  // loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.program-slider-next',
    prevEl: '.program-slider-prev',
  },
});

// Partners slider

const swiperPartners = new Swiper('.partners-slider', {
  // Optional parameters
  slidesPerView: 5,
  spaceBetween: 20,
  // loop: true,

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