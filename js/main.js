$(window).on("scroll", function () {
  const aboutHeight = $(".about").offset().top;

  if ($(window).scrollTop() > aboutHeight) {
    $(".header").addClass("is__scrolled");
    $(".to__top").addClass("is__show");
  } else {
    $(".header").removeClass("is__scrolled");
    $(".to__top").removeClass("is__show");
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

$(".modal-open").click(function() {
    const target = $(this).data("modal");
    const modal = $("#" + target);
    modal.show();
    $("body").addClass("is__modal-open");
  }
);

$(".works-modal__close").click(function() {
    $(this).closest(".works-modal").hide();
    $("body").removeClass("is__modal-open");
  }
);

$(".works-modal").click(function(event) {
  if ($(event.target).is(".works-modal")) {
    $(this).hide();
    $("body").removeClass("is__modal-open");  
  }
});

