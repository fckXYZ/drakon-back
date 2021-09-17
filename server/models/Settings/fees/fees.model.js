const { Schema, model } = require('mongoose')

const cunstomFieldsSchema = new Schema({
  depositFee: {
    type: Number,
    required: true
  },
  withdrawalFee: {
    btc: {
      type: Number,
      required: true
    },
    eth: {
      type: Number,
      required: true
    },
    usdt: {
      type: Number,
      required: true
    },
    ltc: {
      type: Number,
      required: true
    },
  },
})

const Fees = model('Fees', cunstomFieldsSchema)

module.exports = { cunstomFieldsSchema, Fees}
