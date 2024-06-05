gsap.from('.booking-home h1, .booking-home p , .booking-home nav', {
    yPercent: 200,
    opacity: 0,
    stagger: true,
    duration: 1.5,
});

gsap.from('.booking-more .booking-container .booking-img', {
    scrollTrigger: {
        trigger: ".booking-more",
        start: '20% 70%',
        end: '20% 70%',
        scrub: false,
        // markers: true,
    },
    xPercent: -80,
    stagger: 0.5,
    ease: "back.out(1.7)",
    duration: 1,
    opacity: 0
})

gsap.from('.booking-more .booking-container .booking-form', {
    scrollTrigger: {
        trigger: ".booking-more",
        start: '20% 70%',
        end: '20% 70%',
        scrub: false,
        // markers: true,
    },
    xPercent: 80,
    stagger: 0.5,
    ease: "back.out(1)",
    duration: 1,
    opacity: 0
})

//flatpicker

flatpickr("#date", {
    altInput: true,
    altFormat: "F j, Y",
    minDate: "today",
    maxDate: new Date().fp_incr(7),
    //for date validation
    onChange: function (selectedDates, dateStr, instance) {
        date.classList.remove("error");
        date.parentElement.classList.remove("error");
    }
})

flatpickr("#time", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "h : i  K",
    minTime: "10:00",
    maxTime: "23:00",
    // for time validation
    onChange: function (selectedDates, dateStr, instance) {
        time.classList.remove("error");
        time.parentElement.classList.remove("error");
    }
})

//form validation 

const form = document.querySelector('form')
const fullName = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const loca = document.getElementById('location')
const date = document.getElementById('date')
const time = document.getElementById('time')
const mess = document.getElementById('message')
const popupEl = document.querySelector(".popup")
const popupContainerEl = document.querySelector(".popup-container")

//check if the email is valid format
function checkEmail() {
    const emailRegex = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTxtEmail = document.querySelector(".error-txt.email")

    if (!email.value.match(emailRegex)) {
        email.classList.add("error")
        email.parentElement.classList.add("error")

        if (email.value != "") {
            errorTxtEmail.innerText = "*Enter a valid email Address"
        } else {
            errorTxtEmail.innerText = "*Email Adderss can't be blank"
        }

    } else {
        email.classList.remove("error")
        email.parentElement.classList.remove("error")
    }
}

//check for number to be integer
function checkPhone() {

    const phoneregex = /^[2-9]\d{9}$/

    const errorTxtPhone = document.querySelector('.error-txt.number')

    if (!phone.value.match(phoneregex)) {
        phone.classList.add("error")
        phone.parentElement.classList.add("error")

        if (phone.value != "") {

            if (isNaN(phone.value)) {
                errorTxtPhone.innerText = "*Enter a valid Phone number"
            }
            else {
                errorTxtPhone.innerText = "*Phone number must contain 10 digits"
            }

        } else {
            errorTxtPhone.innerText = "*Phone Number can't be blank"
        }

    } else {
        phone.classList.remove("error")
        phone.parentElement.classList.remove("error")
    }
}

function checkLocation() {
    if (loca.value != "") {
        loca.classList.remove("error")
        loca.parentElement.classList.remove("error")
    } else {
        loca.classList.add("error")
        loca.parentElement.classList.add("error")
    }
}

function checkInputs() {
    const items = document.querySelectorAll(".item")

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error")
            item.parentElement.classList.add("error")
        }

        //if email is not blank check the email format
        if (items[1].value != "") {
            checkEmail()
        }
        //if any key is pressed in email check email format
        items[1].addEventListener("keyup", () => {
            checkEmail()
        })

        //if phone is not blank then check if its number
        if (items[2].value != "") {
            checkPhone()
        }
        //if any key is pressed in email check email format
        items[2].addEventListener("keyup", () => {
            checkPhone()
        })

        //if lcoation is not blank
        if (items[3].value != "") {
            checkLocation()
        }
        //if mouse click is pressed in location then check
        items[3].addEventListener("mouseup", () => {
            checkLocation()
        })
        //if touch click is pressed in location then check
        items[3].addEventListener("touchstart", () => {
            checkLocation()
        })

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error")
                item.parentElement.classList.remove("error")
            }
            else {
                item.classList.add("error")
                item.parentElement.classList.add("error")
            }
        })
    }

    mess.classList.remove("error")
    mess.parentElement.classList.remove("error")
}


function confirmationPage() {

    popupEl.style.display = "flex"

    gsap.to(popupContainerEl, {
        scale: 1,
        ease: "back.out(1.7)",
        opacity: 1,
        duration: 0.8
    })

    popupContainerEl.innerHTML = `
    <h1>confirmation page</h1>
    <p>Our team will contact you to confirm your registration.</p>
    <div class="confirm-container">
        <div class="confirm-items">
            <p class="item-label">Name:</p>
            <p class="item-value">${fullName.value}</p>
        </div>
        <div class="confirm-items">
            <p class="item-label">Email:</p>
            <p class="item-value">${email.value}</p>
        </div>
        <div class="confirm-items">
            <p class="item-label">phone number:</p>
            <p class="item-value">${phone.value}</p>
        </div>
        <div class="confirm-items">
            <p class="item-label">location of cafe:</p>
            <p class="item-value">${loca.value}</p>
        </div>
        <div class="confirm-items">
            <p class="item-label">date of registration:</p>
            <p class="item-value">${date.value}</p>
        </div>
        <div class="confirm-items">
            <p class="item-label">Time for registration:</p>
            <p class="item-value">${time.value}</p>
        </div>
        <div class="confirm-items">
            <p class="item-label">Any additional message:</p>
            <p class="item-value">${mess.value}</p>
        </div>
    </div>
    <button type="submit" class="btn deny">Need some changes</button>
    <button type="submit" class="btn done">Confirm</button>
    `
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    checkInputs()

    if (!fullName.classList.contains("error")) {
    // if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !loca.classList.contains("error") && !date.classList.contains("error") && !time.classList.contains("error")) {

        confirmationPage()

        // if confirm btn clicked then only clear the form else return to the form
        const confirmBtn = document.querySelector(".done")

        confirmBtn.onclick = () => {

            gsap.to(popupContainerEl, {
                scale: 0,
                opacity: 0,
                duration: 0.8
            })

            setTimeout(() => {
                popupEl.style.display = "none"
            }, 600)

            // console.log(fullName.value, email.value, phone.value, loca.value, date.value, time.value, mess.value);

            form.reset()
            return false
        }

        const denyBtn = document.querySelector(".deny")
        denyBtn.onclick = () => {

            gsap.to(popupContainerEl, {
                scale: 0,
                opacity: 0,
                duration: 0.5
            })

            setTimeout(() => {
                popupEl.style.display = "none"
            }, 500)

            return false
        }
    }
})