const { Schema, model } = require('mongoose')

const cunstomFieldsSchema = new Schema({
	name: {
		type: String,
		required: true,
		enum: [
			'Users agreement',
			'Privacy policy'
		]
	},
	file: {
		type: String,
		required: false,
	},
	language: {
		type: Schema.Types.ObjectId,
		ref: 'Language',
		required: true
	}
})

const BottomDocs = model('BottomDocs', cunstomFieldsSchema)

module.exports = { cunstomFieldsSchema, BottomDocs}
