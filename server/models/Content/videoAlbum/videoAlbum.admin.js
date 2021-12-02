const AdminBro = require('admin-bro');
const VideoAlbum = require('./videoAlbum.model');

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
  },
};

module.exports = {
  options,
  resource: VideoAlbum,
};
