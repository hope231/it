const swiper = new Swiper('.swiper-container',{
	pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
  767: {
   slidesPerView: 2,
  },
},
});