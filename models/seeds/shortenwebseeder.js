const shortenweb = require('../shortenweb')
const db = require('../../config/monggose')


db.once('open', () => {
  console.log('mongodb connected!')

  shortenweb.create(
    { "name": "1233" },
    { "name": "1233" })


    .then(() => {
      console.log('recordSeeds done!')
      db.close()
    }).then(() => {
      console.log('db done!')

    })
})