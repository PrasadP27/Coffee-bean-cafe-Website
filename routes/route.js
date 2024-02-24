const express = require('express')
const menuItems = require('../data/menuData')
const reviewData = require('../data/reviewData')

const router = express.Router()


router.get('/', (req, res) => {
    res.render('home', {
        menuItems: menuItems.slice(0, 6),
        reviewData
    })
})

module.exports = router