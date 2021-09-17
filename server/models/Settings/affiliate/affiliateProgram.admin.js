const AdminBro = require('admin-bro')
const { AffiliateProgram } = require('./affiliateProgram.model')

/**@type {AdminBro.ResourceOptions} */
const options = {
  parent: {
    name: 'Settings',
  },
  properties: {
    _id: {
      isVisible: false
    }
  }
}

module.exports = {
  options,
  resource: AffiliateProgram
}
