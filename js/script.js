let menuBtn = document.querySelector('.menubtn');
let navbar = document.querySelector('.header .flex .nav');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
  });