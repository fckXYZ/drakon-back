const AdminBro = require('admin-bro')
const { Video } = require('./video.model')

/**@type {AdminBro.ResourceOptions} */
const options = {
  parent: {
    name: 'Additional'
  },
  properties: {
    _id: {
      isVisible: false
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
  }
}

module.exports = {
  options,
  resource: Video
}
