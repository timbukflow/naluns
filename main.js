$(document).ready(function() {
  

/////////// Navigation ///////////
// const nav = document.querySelector('nav');
// let lastScrollTop = 0;
// const navShowThreshold = 100;

// window.addEventListener('scroll', () => {
//     const scrollTop = window.scrollY || document.documentElement.scrollTop;

//     if (scrollTop > lastScrollTop + navShowThreshold) {
//     nav.style.top = '-108px';
//     lastScrollTop = scrollTop;
//     } else if (scrollTop < lastScrollTop - navShowThreshold) {
//     nav.style.top = '30px';
//     lastScrollTop = scrollTop;
//     }
// });

// Navigation
$(".navbar").click(function() {
  $(this).children().toggleClass("spread");
  $(".nav").stop(true,true).fadeToggle(800);
  $("body").toggleClass("fixed");
});

$(".navcont li a").mouseenter(function() {
  var targetImageId = $(this).attr("href").replace("#", "") + "-image";
  $(".image").not("#" + targetImageId).css({ opacity: 0 });
  $("#" + targetImageId).css({ opacity: 1 });
});

$(".navcont li a").mouseleave(function() {
  $(".image").css({ opacity: 0 });
});

// Accordion
$(".accordion-item").click(function() {
  if (!$(this).hasClass("open")) {
    $(".accordion-item").removeClass("open");
    $(this).addClass("open");
    $(".accordion-content").slideUp();
    $(this).find(".accordion-content").slideDown();
  } else {
    $(this).removeClass("open");
    $(this).find(".accordion-content").slideUp();
  }
});

});
