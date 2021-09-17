const { Schema, model } = require('mongoose')

const cunstomFieldsSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	address_line_one: {
		type: String,
		required: false
	},
	address_line_two: {
		type: String,
		required: false
	}
})

const CompanyInfo = model('CompanyInfo', cunstomFieldsSchema)

module.exports = { cunstomFieldsSchema, CompanyInfo}
