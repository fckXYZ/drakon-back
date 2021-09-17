const { Schema, model } = require('mongoose')

const cunstomFieldsSchema = new Schema({
	file: String,
})

const FavIcon = model('FavIcon', cunstomFieldsSchema)

module.exports = { cunstomFieldsSchema, FavIcon}
