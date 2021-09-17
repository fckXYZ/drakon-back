const { Schema, model } = require('mongoose')

const cunstomFieldsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  file: {
    type: String,
    required: false
  },
  language: {
    type: Schema.Types.ObjectId,
    ref: 'Language',
    required: true
  }
})

const Docs = model('Docs', cunstomFieldsSchema)

module.exports = { cunstomFieldsSchema, Docs}