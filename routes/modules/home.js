const express = require('express')
const router = express.Router()

const Shortenweb = require('../../models/shortenweb')

router.get('/', (req, res) => {

  return Shortenweb.find()
    .lean()
    .then(shorten => {
      res.render('index', { shorten })
    })
    .catch(error => console.log('error'))

})


module.exports = router