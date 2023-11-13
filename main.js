$(document).ready(function() {
  
// Stars
const starrySky = document.querySelector('.starry-sky');

function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  star.style.animationDuration = `${Math.random() * 5 + 2}s`;
  starrySky.appendChild(star);
}

function generateStars(numStars) {
  for (let i = 0; i < numStars; i++) {
    createStar();
  }
}

generateStars(300);

// Angebot
const angebotBtn = $("#angebotBtn");
const mainContent = $(".maincontent, footer");
const angebotContent = $(".angebotnav");
const body = $("body");
let isMainContentVisible = true;

angebotBtn.click(function() {
  if (isMainContentVisible) {
    angebotBtn.addClass("activBtn")
    mainContent.addClass("fade");
    angebotContent.stop(true,true).fadeIn(800);
    body.addClass("fixed");
  } else {
    angebotBtn.removeClass("activBtn")
    mainContent.removeClass("fade");
    angebotContent.stop(true,true).fadeOut(800);
    body.removeClass("fixed");
  }
  isMainContentVisible = !isMainContentVisible;
});

/////////// Navigation ///////////
const nav = document.querySelector('nav');
let lastScrollTop = 0;
const navShowThreshold = 100;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop + navShowThreshold) {
    nav.style.top = '-108px';
    lastScrollTop = scrollTop;
    } else if (scrollTop < lastScrollTop - navShowThreshold) {
    nav.style.top = '0';
    lastScrollTop = scrollTop;
    }
});

// Nav responsiv
$(".burger-icon").click(function() {
  $(this).toggleClass("active");
  $(".nav-list-cont").stop(true,true).fadeToggle(800);
  $("body").toggleClass("fixed");
});

});
