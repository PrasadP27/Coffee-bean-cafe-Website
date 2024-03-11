gsap.from('.menu-home h1, .menu-home p , .menu-home nav', {
    yPercent: 200,
    opacity: 0,
    stagger: true,
    duration: 1.5,
});


gsap.from('.menu-more .menu-fullmenu .menu-content', {
    scrollTrigger: {
        trigger: ".menu-more",
        start: '20% 70%',
        end: '20% 70%',
        scrub: false,
        // markers: true,
    },
    y: "80%",
    opacity: 0,
})