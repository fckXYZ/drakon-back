const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const discographyTextSchema = new mongoose.Schema({
	text: String,
	language: {
		type: Schema.Types.ObjectId,
		ref: 'Language',
		required: true
	},
});

module.exports = mongoose.model('discographyText', discographyTextSchema);
