const express = require('express')
const router = express.Router()

const Shortenweb = require('../../models/shortenweb')
const generateShortenweb = require('../../public/javascripts/generate_Shortenweb')


router.get('/', (req, res) => {
  res.render('show')

})

/// READ
router.post('/show', (req, res) => {

  const mainURL = 'http://whispering-peak-36649.herokuapp.com/'
  // const name_short = generateShortenweb()
  let newshortenURL = ''

  const name = req.body.name

  Shortenweb.find()
    .lean()
    .then((userURL) => {
      newshortenURL = userURL.find((existed) => existed.name === name)
      //確認有沒有存在的原網址
      if (newshortenURL) {
        newshortenURL = mainURL + newshortenURL.name_short
        return res.render('show', { newshortenURL, name })
      }


      let name_short = generateShortenweb()
      newshortenURL = mainURL + name_short

      while (userURL.some((existed) => existed.name_short === name_short)) { name_short = generateShortenweb() }
      //用while來比對所有的資料，有重複就再新增一個短網址

      return Shortenweb.create({
        name: name,
        name_short: name_short
      })
        .then(() => res.render('show', { newshortenURL, name }))
        .catch(error => console.log('error'))
    }
    )
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
