const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const aboutSchema = new mongoose.Schema({
	about: {
		type: String,
	},
	language: {
		type: Schema.Types.ObjectId,
		ref: 'Language',
		required: true
	},
});

module.exports = mongoose.model('about', aboutSchema);
