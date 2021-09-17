const { Schema, model } = require('mongoose')

const FaqSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  language: {
    type: Schema.Types.ObjectId,
    ref: 'Language',
    required: true
  }
})

const Faq = model('Faq', FaqSchema)

module.exports = { FaqSchema, Faq}