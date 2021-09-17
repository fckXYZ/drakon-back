const { Schema, model } = require('mongoose')

const PostSchema = new Schema({
  languageName: {
    type: String,
    required: true,
  },
  languageLocale: {
    type: String,
    required: true
  }
})

const Language = model('Language', PostSchema)

module.exports = { PostSchema, Language}