const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const aboutSchema = new mongoose.Schema({
	main_page: {
		type: String,
	},
	video: String,
	about_page: {
		type: String,
	},
	language: {
		type: Schema.Types.ObjectId,
		ref: 'Language',
		required: true
	},
});

module.exports = mongoose.model('about', aboutSchema);
