
function sample(array) {

  const index = Math.floor(Math.random() * array.length)
  return array[index]
}
//define generateShortweb element
function generateShortenweb() {
  //define condition

  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'


  //create a collection to picked up
  let collection = []
  collection = collection.concat(lowerCaseLetters.split(''))
  collection = collection.concat(upperCaseLetters.split(''))
  collection = collection.concat(numbers.split(''))

  //pick 5 

  let shortenWeb = ''
  for (let i = 0; i < 5; i++) {
    shortenWeb += sample(collection)
  }

  return shortenWeb
}

module.exports = generateShortenweb



