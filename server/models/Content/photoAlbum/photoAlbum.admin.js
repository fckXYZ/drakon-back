const AdminBro = require('admin-bro');
const PhotoAlbum = require('./photoAlbum.model');
const uploadFeature = require('@admin-bro/upload')
const path = require("path");

const validation = {
  mimeTypes: ['image/jpeg', 'image/png'],
}

const options = {
  parent: {
    name: 'Content',
  },
  properties: {
    _id: {
      isVisible: false,
    },
    photos: {
      isVisible: false,
    }
  },
};

module.exports = {
  options,
  features: [
    uploadFeature({
      provider: { local: { bucket: path.join(__dirname + '../../../../../uploads') }},
      multiple: true,
      validation,
      properties: {
        bucket: 'photos.folder',
        filesToDelete: `photos.filesToDelete`,
        key: `photos.key`,
        mimeType: `photos.mime`,
      }
    })
  ],
  resource: PhotoAlbum,
};
