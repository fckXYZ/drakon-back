const AdminBro = require('admin-bro');
const PhotoAlbum = require('./photoAlbum.model');
const uploadFeature = require('@admin-bro/upload')
const path = require("path");

const validation = {
  mimeTypes: ['image/jpeg', 'image/png'],
}

const {
  after: uploadAfterHook,
} = require('../../actions/upload-photos.hook')


const options = {
  parent: {
    name: 'Content',
  },
  properties: {
    _id: {
      isVisible: false,
    },
    photos: {
      components: {
        list: AdminBro.bundle('../../components/photos-preview.list.jsx'),
        show: AdminBro.bundle('../../components/photos-preview.list.jsx'),
      },
      isVisible: {
        show: true,
        edit: false,
        filter: false,
        list: true
      },
      custom: {
        propName: 'photos',
      }
    },
    file: {
      isVisible: {
        edit: true,
        show: false,
        list: false,
        filter: false
      }
    },
    photosReqs: {
      components: {
        edit: AdminBro.bundle('../../components/text-reqs.jsx'),
        show: AdminBro.bundle('../../components/text-reqs.jsx'),
      },
      isVisible: {
        show: false,
        edit: true,
        filter: false,
        list: false,
      },
      custom: {
        title: 'Требования загружвемым фото',
        text: 'Формат: PNG, JPG/JPEG. Максимальный размер файла - 10mb'
      }
    },
  },
  actions: {
    new: {
      after: uploadAfterHook,
    },
    edit: {
      after: uploadAfterHook,
    },
  }
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
      },
    })
  ],
  resource: PhotoAlbum,
};
