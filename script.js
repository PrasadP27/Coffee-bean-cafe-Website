//for navbar
window.addEventListener("scroll", function () {
  var navbar = document.querySelector("header");
  navbar.classList.toggle("sticky", window.scrollY > 0);
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
let t1 = gsap.timeline()

t1.from('#menu .bg-img', {
    scrollTrigger:{
        trigger: "#menu .bg-img",
        start: '50% 80%',
        end: '50% 80%',
        scrub: true,
        // markers: true,
    },
    x: '30%',
})