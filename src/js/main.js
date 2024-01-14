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


const swiper = new Swiper('.programs-slider', {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.program-slider-prev',
    prevEl: '.program-slider-next',
  },

  breakpoints: {
    350: {
      slidesPerView: 2,
    },
    580: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 4,
    },
    // 1200: {
    //   slidesPerView: 4,
    // },
  },
});


