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
  titleRu: {
    position: 2,
  },
  titleEn: {
    position: 3,
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
        list: false
      },
      custom: {
        propName: 'photos',
      }
    },
    file: {
      isVisible: {
        show: false,
        list: false,
        edit: true,
        filter: false
      }
    },
    url: {
      position: 6
    },
    videoReqs: {
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
        title: 'Требования к ссылке на видео',
        text: 'Чтобы видео работало, ссылка должна быть вида https://youtube.com/embed/kMZLPOgVkZM. Внимание на youtube.com ! И на /embed/ !'
      },
      position: 7,
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
        text: 'Формат: PNG, JPG/JPEG. Для лучшего отображения, ориентация фото - альбомная. Максимальное количество фото - 6.'
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
