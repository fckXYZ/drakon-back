const mongoose = require('mongoose');

const UploadedFile = new mongoose.Schema({
	name: String,
	path: String,
	type: String,
	size: Number,
	folder: String,
	filename: String
})

const albumSchema = new mongoose.Schema({
	title: String,
	cover: UploadedFile,
	description: String,
	tracks: JSON,
});

module.exports = mongoose.model('album', albumSchema);
