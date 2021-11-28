const { Language } = require('../server/models/Content/language/language.model');
const mongoose = require('mongoose')
require('dotenv').config()

const config = require('../server/config');

const langs = [
  {
    languageName: 'Русский',
    languageLocale: 'ru'
  },
  {
    languageName: 'English',
    languageLocale: 'en'
  },
]

console.log(process.env)

module.exports.up = function (next) {
  mongoose.connect(config.MONGO_DB_ADDRESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    Language.insertMany(langs)
        .then((res) => {
          next()
        })
        .catch((err) => {
          console.log(err)
        })
  })
      .catch((err) => {
        console.log(err)
      })
}

module.exports.down = function (next) {
  next()
}
