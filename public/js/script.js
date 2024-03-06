//for navbar
window.addEventListener("scroll", function () {
  var navbar = document.querySelector("header");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

//for swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 80,
  autoplay: {
    delay: 3500,
  }
});

//for loading 
const body = document.querySelector('body')
const loader = document.querySelector(".loader")

onload = () => {
  loader.style.display = "none"
  body.classList.remove('loading')
}

//for bars animation
const bars = document.querySelector(".barIcon")
const dropdown = document.querySelector(".dropdown-navbar")
const dropdownLinks = document.querySelectorAll(".dropdown-navbar a")

bars.onclick = () => {
  bars.classList.toggle("xmark")
  isOpen = bars.classList.contains("xmark")

  if (isOpen) {
    dropdown.classList.add("open")
    gsap.from(dropdown, {
      // yPercent: -100,
      opacity: 0,
      height: 0
    })
  } else {
    dropdown.classList.remove("open")
  }

  window.onclick = (event) => {
    if (!bars.contains(event.target)) {
      bars.classList.remove("xmark")
      dropdown.classList.remove("open")
    }
  }
}

//gsap

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

//footer
gsap.from('footer .box-container ', {
  scrollTrigger: {
    trigger: 'footer',
    start: "50% 100%",
    end: "50% 90%",
    // markers: true,
    scrub: false,
  },
  ease: "none",
  yPercent: -120,
  opacity: 0
})