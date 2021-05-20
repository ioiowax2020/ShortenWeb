const express = require('express')
const router = express.Router()


router.get('/shorten', (req, res) => {
  res.send('123')

})

module.exports = router
