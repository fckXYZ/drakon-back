const { Schema, model } = require('mongoose')

const cunstomFieldsSchema = new Schema({
  type: {
    type: String,
    required: true,
    enum: [
        'twitter',
        'youtube',
        'facebook',
        'telegram'
    ]
  },
  link: {
    type: String,
    required: true
  }
})

const SocialList = model('SocialList', cunstomFieldsSchema)

module.exports = { cunstomFieldsSchema, SocialList}
