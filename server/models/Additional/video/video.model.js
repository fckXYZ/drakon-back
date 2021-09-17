const { Schema, model } = require('mongoose')

const cunstomFieldsSchema = new Schema({
  link: {
    type: String,
    required: true
  },
  language: {
    type: Schema.Types.ObjectId,
    ref: 'Language',
    required: true
  }
})

const Video = model('Video', cunstomFieldsSchema)

module.exports = { cunstomFieldsSchema, Video}