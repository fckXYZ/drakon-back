const { Schema, model } = require('mongoose')

const MemberSchema = new Schema({
  nickname: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  perks: [
    {
      type: String,
      required: false
    }
  ],
  file: {
    type: String,
    required: false
  },
  birthday: {
    type: Date,
    default: Date.now
  }
})

const Member = model('Member', MemberSchema)

module.exports = { MemberSchema, Member}
