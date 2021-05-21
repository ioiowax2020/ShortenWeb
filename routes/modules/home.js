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