gsap.from('.menu-home h1, .menu-home p , .menu-home nav', {
    yPercent: 200,
    opacity: 0,
    stagger: true,
    duration: 1.5,
});

gsap.from('.menu-home .scroll-down', {
    yPercent: -30,
    opacity: 0,
    delay: 1,
    duration: 1
})


let t1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".menu-more",
        start: '20% 60%',
        end: '20% 60%',
        scrub: false,
        markers: true,
    }
})

t1.fromTo('.menu-more .menu-fullmenu .menu-content', {
    y: "100%",
    autoAlpha: 0
}, {
    y: 0,
    autoAlpha: 1,
    // opacity: 1,
    stagger: 0.2,
    delay: 0.2
})

t1.from('.menu-more .menu-fullmenu .menu-content .info', {
    // autoAlpha: 0,
    opacity: 0,
    yPercent: 30,
    stagger: 0.2
}, "-=0.8")