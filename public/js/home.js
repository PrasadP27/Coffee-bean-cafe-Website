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
  duration: 1.5,
});


// about 
let aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#about',
    start: '50% 100%',
    end: '50% 70%',
    scrub: false,
    // markers: true
  }
})

aboutTl.from('#about .about-container .content', {
  duration: 0.5,
  ease: "none",
  yPercent: 70,
  opacity: 0,
}, 'about')

aboutTl.from('#about .about-container .about-video', {
  duration: 0.5,
  ease: "none",
  yPercent: 70,
  opacity: 0
}, 'about')


//dYK 

gsap.from('#didYouKnow .dYK-container .dYK-content', {
  scrollTrigger: {
    trigger: '#didYouKnow',
    start: '50% 85%',
    end: '50% 60%',
    scrub: false,
    // markers: true
  },
  xPercent: -80,
  stagger: .2,
  opacity: 0
})

//menu

gsap.from("#menu .bg-img", {
  scrollTrigger: {
    trigger: "#menu",
    start: '50% 70%',
    end: '50% 70%',
    scrub: true,
    // markers: true,
  },
  x: "50%",
  opacity: 0
})

gsap.from("#menu .menu-container .menu-content", {
  scrollTrigger: {
    trigger: "#menu",
    start: '20% 70%',
    end: '20% 70%',
    scrub: false,
    // markers: true,
  },
  ease: "none",
  y: "70%",
  opacity: 0,
})

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