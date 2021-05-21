const mongoose = require('mongoose')
const Schema = mongoose.Schema

const generate_shortenwebSchema = new Schema({

  name: String,
  name_short: String
})

module.exports = mongoose.model('shortenweb', generate_shortenwebSchema)
