gsap.from('.about-home h1, .about-home p , .about-home nav', {
    yPercent: 200,
    opacity: 0,
    stagger: true,
    duration: 1.5,
});

gsap.from('.about-home .scroll-down', {
    yPercent: -30,
    opacity: 0,
    delay: 1,
    duration: 1
})

let aboutPageTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-more",
        start: '20% 60%',
        end: '20% 60%',
        scrub: false,
        // markers: true,
    }
})

aboutPageTl.from('.about-more .about-container img', {
    xPercent: -50,
    opacity: 0
})

aboutPageTl.from('.about-more .about-container .about-content', {
    xPercent: 50,
    opacity: 0
})

gsap.from('.about-gallery .gallery-container .gallery', {
    scrollTrigger: {
        trigger: ".about-gallery",
        start: '20% 60%',
        end: '20% 60%',
        scrub: false,
        // markers: true,
    },
    opacity: 0,
    duration: 2
})