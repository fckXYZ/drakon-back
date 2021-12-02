const mongoose = require('mongoose');

const videoAlbumSchema = new mongoose.Schema({
	title_ru: String,
	title_en: String,
	url: String,
});

module.exports = mongoose.model('videoAlbum', videoAlbumSchema);
