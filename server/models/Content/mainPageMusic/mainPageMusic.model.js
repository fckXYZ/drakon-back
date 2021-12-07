const mongoose = require('mongoose');

const mainPageMusicSchema = new mongoose.Schema({
	file: String,
	name: {
		type: String,
		required: true,
	},
	index: {
		type: String,
		required: true,
		enum: ['1', '2', '3']
	},
});

module.exports = mongoose.model('mainPageMusic', mainPageMusicSchema);
