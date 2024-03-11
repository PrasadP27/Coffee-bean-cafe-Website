gsap.from('.location-home h1, .location-home p , .location-home nav', {
    yPercent: 200,
    opacity: 0,
    stagger: true,
    duration: 1.5,
});

gsap.from('.location-more .location-container article', {
    scrollTrigger: {
        trigger: ".location-more",
        start: '20% 70%',
        end: '20% 70%',
        scrub: false,
        // markers: true,
    },
    ease: "back.out(1.7)",
    scale: 0,
    opacity: 0,
    stagger: 1
})
