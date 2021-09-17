const { Schema, model } = require('mongoose')

const cunstomFieldsSchema = new Schema({
  firstLineMembers: {
    type: Number,
    required: true,
  },
  firstLinePercent: {
    type: Number,
    required: true
  },
  secondLineMembers: {
    type: Number,
    required: true,
  },
  secondLinePercent: {
    type: Number,
    required: true
  },
  thirdLineMembers: {
    type: Number,
    required: true,
  },
  thirdLinePercent: {
    type: Number,
    required: true
  }
})

const AffiliateProgram = model('AffiliateProgram', cunstomFieldsSchema)

module.exports = { cunstomFieldsSchema, AffiliateProgram}
