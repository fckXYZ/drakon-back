const { Schema, model } = require('mongoose')

const cunstomFieldsSchema = new Schema({
	file: String,
})

const Logo = model('Logo', cunstomFieldsSchema)

module.exports = { cunstomFieldsSchema, Logo}
