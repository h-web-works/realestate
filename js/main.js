$(window).on("scroll", function () {
  if ($(window).width() >= 768) {
    if ($(window).scrollTop() > 800) {
      $(".header").addClass("is__scrolled");
    } else {
      $(".header").removeClass("is__scrolled");
    }
  }
  else {
    if ($(window).scrollTop() > 601) {
      $(".header").addClass("is__scrolled");
    } else {
      $(".header").removeClass("is__scrolled");
    }
  }
});

$("#js-hamburger").click(function () {
  $(".hamburger").toggleClass("is__active");
  $(".hamburger__menu").toggleClass("is__open");
});

// const swiper = new Swiper(".swiper", {
//   loop: true, 
//   speed: 1500, 
//   autoplay: { 
//     delay: 1500, 
//   },
// });