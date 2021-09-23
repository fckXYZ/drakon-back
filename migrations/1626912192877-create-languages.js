const { Language } = require('../server/models/Content/language/language.model');
const mongoose = require('mongoose')
require('dotenv').config();

const dbAddress = process.env.NODE_ENV === 'production' ? process.env.MONGO_DB_ADDRESS_PROD : process.env.MONGO_DB_ADDRESS;

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
  mongoose.connect('mongodb://localhost:27017/drakon-db', {
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
