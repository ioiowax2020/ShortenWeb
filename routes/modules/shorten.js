const express = require('express')
const router = express.Router()

const Shortenweb = require('../../models/shortenweb')
const generateShortenweb = require('../../public/javascripts/generate_Shortenweb')


router.get('/show', (req, res) => {
  res.render('show')

})

/// READ
router.post('/show', (req, res) => {

  const shortenNum =
    'https://shortenWebsite.herokuapp.com/' + generateShortenweb()
  let name = req.body.name
  console.log(typeof shortenNum)

  return Shortenweb.create({ name })
    .then(item =>
      res.render('show', ({ item, name, shortenNum })))
    .catch(error => console.log('error'))

})

module.exports = router
