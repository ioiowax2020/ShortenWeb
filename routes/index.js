const express = require('express')
const router = express.Router()


const home = require('./modules/home')
router.use('/', home)

const shorten = require('./modules/shorten')

router.use('/shorten', shorten)

module.exports = router