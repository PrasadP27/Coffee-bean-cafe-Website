//for navbar
window.addEventListener("scroll", function () {
    var navbar = document.querySelector("header")
    navbar.classList.toggle("sticky", window.scrollY > 0)
})


//gsap

gsap.from("#about .about-container .about-img", {
    scrollTrigger: {
        trigger: '#about .about-container',
        // markers: true,
        start: 'top center',
        end: 'end center',
        scrub: true,
    },
    'border-radius': '0px',
    x: '100px',
    y: '100px',
    opacity: 0,
})
