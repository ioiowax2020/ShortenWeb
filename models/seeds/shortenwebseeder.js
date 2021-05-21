const shortenweb = require('../shortenweb')
const db = require('../../config/mongoose')


db.once('open', () => {
  console.log('mongodb connected!')

  shortenweb.create(
    {
      "name": "1233",
      "name_short": "456"
    },
    {
      "name": "1233",
      "name_short": "456"
    })


    .then(() => {
      console.log('recordSeeds done!')
      db.close()
    }).then(() => {
      console.log('db done!')

    })
})