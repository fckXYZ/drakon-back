const AdminBro = require('admin-bro')
const { SocialList } = require('./socialList.model')

/**@type {AdminBro.ResourceOptions} */
const options = {
  parent: {
    name: 'Footer'
  },
  properties: {
    _id: {
      isVisible: false
    },
  }
}

module.exports = {
  options,
  resource: SocialList
}
