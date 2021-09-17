const mongoose = require('mongoose');

const photoAlbumSchema = new mongoose.Schema({
  name: String,
  photos: JSON
});

module.exports = mongoose.model('photoAlbum', photoAlbumSchema);
