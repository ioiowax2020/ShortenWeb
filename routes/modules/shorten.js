const express = require('express')
const router = express.Router()


router.get('/show', (req, res) => {
  res.render('show')

})
router.post('/show', (req, res) => {

  res.render('show')
})

module.exports = router
