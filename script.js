// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
    
// });
// let navbar = document.querySelector(".navbar");
// let main1 =  document.querySelector(".main");
// window.addEventListener("scroll",(navbar)=>{
//     navbar.style.top = "100px";
// });
const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      dynamicBullets: true,
      clickable: true,
    },
    
    effect: 'slide',
    keyboardControl: {
        enabled: true,
        onlyInViewport: true,
    },
    grabCursor: true,
    intialSlide: 1,
    watchSlidesProgress: true,
    slidesPerView: 3,

  
    autoplay: {
        delay: 6000,
    },
  });
   const swiper1 = new Swiper('.mySwiper2', {
    loop: true,
    effect: 'slide',
    keyboardControl: {
        enabled: true,
        onlyInViewport: true,
    },
    rewind: true,
    intialSlide: 5,
    watchSlidesProgress: true,
    slidesPerView: 7,
    centeredSlides: true,
    spaceBetween: 120,
    autoplay: {
        delay: 2000,
    },
  
   });
   const swiper2 = new Swiper('.mySwiper3', {
    loop: true,
    effect: 'slide',
    keyboardControl: {
        enabled: true,
        onlyInViewport: true,
    },
    rewind: true,
    intialSlide: 1,
    watchSlidesProgress: true,
    slidesPerView: 7,
    centeredSlides: true,
    spaceBetween: 120,
    autoplay: {
        delay: 3000,
    },
  
   });