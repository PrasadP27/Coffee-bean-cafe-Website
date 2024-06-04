//for navbar
window.addEventListener("scroll", function () {
  var navbar = document.querySelector("header");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

//for loading 
const body = document.querySelector('body')
const loader = document.querySelector(".loader")

onload = () => {
  body.classList.remove('loading')
  loader.style.display = 'none'
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

//footer
gsap.from('footer .box-container ', {
  scrollTrigger: {
    trigger: 'footer',
    start: "50% 100%",
    end: "50% 80%",
    // markers: true,
    scrub: false,
  },
  ease: "none",
  yPercent: -120,
  opacity: 0
})