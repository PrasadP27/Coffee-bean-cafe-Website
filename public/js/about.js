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

let t1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-gallery .gallery-container ",
        start: '0% 60%',
        end: '0% 60%',
        scrub: false,
        markers: true,
    },
})

t1.fromTo('.about-gallery .gallery-container .gallery img', {
    opacity: 0,
    yPercent: 30,
    rotation: 60,
}, {
    yPercent: 0,
    rotation: 0,
    opacity: 1,
    stagger: 0.2,
    ease: "power1.out"
})