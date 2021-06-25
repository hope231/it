const swiper = new Swiper('.swiper-container',{
	pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
  1153: {
  	slidesPerView: 3,
  },
  767: {
   slidesPerView: 2,
  },
},
});