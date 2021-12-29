const mongoose = require('mongoose');

const photoAlbumSchema = new mongoose.Schema({
  name: String,
  photos: JSON,
  photosForFront: JSON
});

module.exports = mongoose.model('photoAlbum', photoAlbumSchema);
