const AdminBro = require('admin-bro')
const { Faq } = require('./faq.model')

/**@type {AdminBro.ResourceOptions} */
const options = {
  parent: {
    name: 'Content',
  },
  properties: {
    _id: {
      isVisible: false
    },
    answer: {
      type: 'richtext',
      isVisible: {
        show: true,
        edit: true,
        filter: false,
        list: false
      }
    }
  }
}

module.exports = {
  options,
  resource: Faq
}
