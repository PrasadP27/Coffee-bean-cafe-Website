const express = require('express')
const menuItems = require('../data/menuData')
const reviewData = require('../data/reviewData')

const router = express.Router()

// for home
const homeNavData = [{ navLoc: '#home', nav: 'home' }, { navLoc: '#about', nav: "about" }, { navLoc: '#menu', nav: 'menu' }, { navLoc: 'location', nav: 'location' }, { navLoc: 'booking', nav: 'Book table' }]

router.get('/', (req, res) => {
    res.render('home', {
        menuItems: menuItems.slice(0, 4),
        reviewData,
        navData: homeNavData,
        jsFile: "home"
    })
})

//for about
const aboutNavData = [{ navLoc: '/', nav: 'home' }, { navLoc: 'menu', nav: 'menu' }, { navLoc: 'location', nav: 'location' }, { navLoc: 'booking', nav: 'Book table' }]

router.get('/about', (req, res) => {
    res.render('about', {
        navData: aboutNavData,
        jsFile: "about"
    })
})

//for menu
const menuNavdata = [{ navLoc: '/', nav: 'Home' }, { navLoc: 'about', nav: "about" }, { navLoc: 'location', nav: 'location' }, { navLoc: 'booking', nav: 'Book table' }]

router.get('/menu', (req, res) => {
    res.render('menu', {
        menuItems,
        navData: menuNavdata,
        jsFile: "menu"
    })
})

//for location
const locationNavdata = [{ navLoc: '/', nav: 'Home' }, { navLoc: 'about', nav: "about" }, { navLoc: 'menu', nav: 'menu' }, { navLoc: 'booking', nav: 'Book table' }]

router.get('/location', (req, res) => {
    res.render('location', {
        navData: locationNavdata,
        jsFile: "location"
    })
})

//for 404
const errorNavdata = [{ navLoc: '/', nav: 'Home' }, { navLoc: 'about', nav: "about" }, { navLoc: 'menu', nav: 'menu' }, { navLoc: 'location', nav: 'location' }, { navLoc: 'booking', nav: 'Book table' }]

router.all('*', (req, res) => {
    res.status(404).render('404', {
        is404: true,
        navData: errorNavdata,
        jsFile: "404"
    })
})


module.exports = router