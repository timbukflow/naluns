$(document).ready(function() {

/////////// Navigation ///////////// 
$(".navbar").click(function() {
  $(this).children().toggleClass("spread");
  $(".nav").stop(true,true).fadeToggle(800);
  $("body").toggleClass("fixed");
});

$(".navcont li a").mouseenter(function() {
  var targetImageId = $(this).attr("href").replace("#", "") + "-image";
  var targetLink = $(this).attr("href");
  var backgroundColor = "";

  if (targetLink === "vizokel") {
    backgroundColor = "#CF9173";
  } else if (targetLink === "spaetzli") {
    backgroundColor = "#D2B569";
  } else if (targetLink === "manufaktur") {
    backgroundColor = "#B0A294";
  } else if (targetLink === "daniel-hiederer") {
    backgroundColor = "#B0A294";
  } 

  $(".nav").css("background-color", backgroundColor);
  $(".image").not("#" + targetImageId).css({ opacity: 0 });
  $("#" + targetImageId).css({ opacity: 1 });
});

$(".navcont li a").mouseleave(function() {
  $(".image").css({ opacity: 0 });
  $(".nav").css("background-color", "");
});

/////////// Accordion ///////////// 
$(".accordion-item").click(function() {
  var $clickacc = $(this);

  if (!$clickacc.hasClass("open")) {
    var $activacc = $(".accordion-item.open");

    if ($activacc.length > 0) {
      $activacc.removeClass("open");
      $activacc.find(".accordion-content").slideUp(500, function() {
        var scrollTo = $clickacc.offset().top - 20;
        $("html, body").animate({ scrollTop: scrollTo }, 500);
      });
    }

    $clickacc.addClass("open");
    $clickacc.find(".accordion-content").slideDown();
  } else {
    $clickacc.removeClass("open");
    $clickacc.find(".accordion-content").slideUp();
  }
});

/////////// Fadin Function /////////////  
const fadeInElements = $('.fadein');
  
function checkFadeIn() {
  const windowHeight = $(window).height();

  fadeInElements.each(function() {
    const elementTop = $(this).offset().top;
    const scrollPosition = $(window).scrollTop();

    if (elementTop < windowHeight * 1 + scrollPosition) {
      $(this).css({transform: 'translateY(0)'});
    } else {
      $(this).css({transform: 'translateY(100px)'});
    }
  });
}

$(window).on('scroll', checkFadeIn);
checkFadeIn();

});
