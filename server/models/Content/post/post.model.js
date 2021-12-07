const { Schema, model } = require('mongoose')

const PostSchema = new Schema({
  language: {
    type: Schema.Types.ObjectId,
    ref: 'Language',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  preview: {
    type: String,
    required: true
  },
  file: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Post = model('Post', PostSchema)

module.exports = { PostSchema, Post}
