const { Settings } = require('../server/models/Settings/basicSettings/settings.model');
const mongoose = require('mongoose')
require('dotenv').config();
const dbAddress = process.env.NODE_ENV === 'production' ? process.env.MONGO_DB_ADDRESS_PROD : process.env.MONGO_DB_ADDRESS;

const settingsInit = {
    maintenance: false,
    visibility: {
        magazines: false,
    },
    buttonsUrl: {
        ru: {
            start: "",
            login: "",
            signup: "",
            homePage: "",
            topUpWallet: "",
        },
        en: {
            start: "",
            login: "",
            signup: "",
            homePage: "",
            topUpWallet: "",
        },
        fr: {
            start: "",
            login: "",
            signup: "",
            homePage: "",
            topUpWallet: "",
        },
        sp: {
            start: "",
            login: "",
            signup: "",
            homePage: "",
            topUpWallet: "",
        },
        id: {
            start: "",
            login: "",
            signup: "",
            homePage: "",
            topUpWallet: "",
        },
    }
}


module.exports.up = function (next) {
  mongoose.connect(dbAddress, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    Settings.create(settingsInit)
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
