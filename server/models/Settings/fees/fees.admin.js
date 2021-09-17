const AdminBro = require('admin-bro')
const { Fees } = require('./fees.model')

/**@type {AdminBro.ResourceOptions} */
const options = {
  parent: {
    name: 'Settings'
  },
  properties: {
    _id: {
      isVisible: false
    }
  }
}

module.exports = {
  options,
  resource: Fees
}
