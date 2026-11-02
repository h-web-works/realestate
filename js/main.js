var toTop = $(".to__top");

$(window).on("scroll", function () {
  const aboutHeight = $(".fv").offset().top;

  if ($(window).scrollTop() > aboutHeight) {
    $(".header").addClass("is__scrolled");
    toTop.addClass("is__show");
  } else {
    $(".header").removeClass("is__scrolled");
    toTop.removeClass("is__show");
  }
});

$("#js-hamburger").click(function () {
  $(".hamburger").toggleClass("is__active");
  $(".hamburger__menu").toggleClass("is__open");
});

$(".hamburger__menu nav li").click(function () {
  $(".hamburger").toggleClass("is__active");
  $(".hamburger__menu").toggleClass("is__open");
});


const swiper = new Swiper(".swiper", {
  loop: true, 
  speed: 1500, 
  autoplay: { 
    delay: 1500, 
  },
});

$(".modal-open").click(function() {
    const target = $(this).data("modal");
    const modal = $("#" + target);
    modal.fadeIn();
    $("body").addClass("is__modal-open");
    $(".to__top").addClass("hide__by__modal");
  }
);

$(".works-modal__close").click(function() {
    $(this).closest(".works-modal").fadeOut();
    $("body").removeClass("is__modal-open");
    $(".to__top").removeClass("hide__by__modal");
  }
);

$(".works-modal").click(function(event) {
  if ($(event.target).is(".works-modal")) {
    $(this).fadeOut();
    $("body").removeClass("is__modal-open");  
    $(".to__top").removeClass("hide__by__modal");
  }
});

AOS.init({
  duration: 1000,
  delay: 100,
  easing: "ease-out",
  once: true,
});
