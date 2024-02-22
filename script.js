//for navbar
window.addEventListener("scroll", function () {
  var navbar = document.querySelector("header");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

//for swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 3500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//gsap

//about img
// gsap.from("#about .about-container .about-img", {
//     scrollTrigger: {
//         trigger: '#about .about-container',
//         // markers: true,
//         start: 'top center',
//         end: 'end center',
//         scrub: true,
//     },
//     'border-radius': '0px',
//     x: '100px',
//     y: '100px',
//     opacity: 0,
// })

//menu
let menuTl = gsap.timeline();

menuTl.from("#menu .bg-img", {
  scrollTrigger: {
    trigger: "#menu .bg-img",
    start: "50% 80%",
    end: "50% 80%",
    scrub: true,
    // markers: true,
  },
  x: "30%",
});

//hero
let homeTo = ["#home img ", "#home h1", "#home p", "#home .btn"];
let homeFrom = ["#home img ", "#home h1", "#home p", "#home .btn"];

gsap.to(homeTo, {
  scrollTrigger: {
    trigger: "#home",
    start: "60% 40%",
    end: "60% 0%",
    // markers: true,
    scrub: 2,
  },
  yPercent: 80,
  opacity: 0,
  stagger: true,
});

gsap.from(homeFrom, {
  yPercent: 200,
  opacity: 0,
  stagger: true,
  duration: 2,
});



//review

gsap.from('#review .review-bg', {
  scrollTrigger: {
    trigger: "#review",
    start: "50% 60%",
    end: "50% 60%",
    // markers: true,
    scrub: 2,
  },
  x: '-500px'
})