// const toggleMenu = document.querySelector('menu-toggle');

// if (toggleMenu){
//     toggleMenu.addEventListener('click', function(){
        
//         if(this.classList.contains('active')){
//             this.classList.remove('active');
//         }else{
//             this.classList.add('active');
//         }
//     })
// }



const swiper = new Swiper('#products-slider', {

  slidesPerView: 3,
  spaceBetween: 32,
  loop: true,

  pagination: {
    el: '#products-slider-pagination',
  },

  navigation: {
    nextEl: '#btn-next',
    prevEl: '#btn-prev',
  },
});


