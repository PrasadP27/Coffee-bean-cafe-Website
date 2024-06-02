gsap.from('.booking-home h1, .booking-home p , .booking-home nav', {
    yPercent: 200,
    opacity: 0,
    stagger: true,
    duration: 1.5,
});

//flatpicker

flatpickr("#date", {
    altInput: true,
    altFormat: "F j, Y",
    minDate: "today",
    maxDate: new Date().fp_incr(7) 
})

flatpickr("#time", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "h : i  K",
    minTime: "10:00",
    maxTime: "23:00"
})