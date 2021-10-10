const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
	title: String,
	cover: JSON,
	description: String,
	tracks: JSON,
	tracksForFront: JSON,
});

module.exports = mongoose.model('album', albumSchema);
