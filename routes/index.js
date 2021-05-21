const express = require('express')
const router = express.Router()
const Shortenweb = require('../models/shortenweb')

const home = require('./modules/home')
router.use('/', home)

const shorten = require('./modules/shorten')
router.use('/shorten', shorten)


const mainURL = 'http://localhost:3000/shorten/'
const shortenURL = Shortenweb.findOne({name_short})
//redirect 
router.get('/:shorten', (req, res) => {

  const shortenName = req.params.shorten
  console.log(shortenName)
  Shortenweb.findOne({ name_short: shortenName })
    .lean()
    .then((web) => {
      if (web) {
        res.status(302).redirect(web.name)
      }
    })
    .catch(error => console.log('error'))
})


module.exports = router