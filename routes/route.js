const express = require('express')
const menuItems = require('../data/menuData')
const reviewData = require('../data/reviewData')

const router = express.Router()

const homeNavData = [{ navLoc: '#home', nav: 'home' }, { navLoc: '#about', nav: "about" }, { navLoc: '#menu', nav: 'menu' }, { navLoc: 'location', nav: 'location' }, { navLoc: 'booking', nav: 'Book table' }]

router.get('/', (req, res) => {
    res.render('home', {
        menuItems: menuItems.slice(0, 6),
        reviewData,
        navData: homeNavData
    })
})

const errordata = [{ navLoc: '/', nav: 'Home' }, { navLoc: 'menu', nav: 'menu' }, { navLoc: 'location', nav: 'location' }, { navLoc: 'booking', nav: 'Book table' }]

router.all('*', (req, res) => {
    res.status(404).render('404', {
        is404: true,
        navData: errordata
    })
})

const menudata = [{ navLoc: '/', nav: 'Home' }, { navLoc: 'location', nav: 'location' }, { navLoc: 'booking', nav: 'Book table' }]

router.get('/menu', (req, res) => {
    res.render('menu', {
        // menuItems,
        // navData: homeNavData
    })
})


module.exports = router