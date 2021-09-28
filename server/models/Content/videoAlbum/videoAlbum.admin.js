const AdminBro = require('admin-bro');
const VideoAlbum = require('./videoAlbum.model');
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
    },
    requirements: {
      components: {
        edit: AdminBro.bundle('../../components/text-reqs.jsx'),
        show: AdminBro.bundle('../../components/text-reqs.jsx'),
      },
      isVisible: {
        show: true,
        edit: true,
        filter: false,
        list: true,
      },
      custom: {
        text: 'Чтобы видео работало, ссылка должна быть вида https://youtube.com/embed/kMZLPOgVkZM. Внимание на youtube.com ! И на /embed/ !'
      }
    },
  },
};

module.exports = {
  options,
  features: [
    uploadFeature({
      provider: { local: { bucket: path.join(__dirname + '../../../../../uploads') }},
      multiple: true,
      properties: {
        bucket: 'photos.folder',
        filesToDelete: `photos.filesToDelete`,
        key: `photos.key`,
        mimeType: `photos.mime`,
      },
      validation
    })
  ],
  resource: VideoAlbum,
};
