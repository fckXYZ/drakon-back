const { Schema, model } = require('mongoose')

const cunstomFieldsSchema = new Schema({
	name: String,
})

const CompanyName = model('CompanyName', cunstomFieldsSchema)

module.exports = { cunstomFieldsSchema, CompanyName}
