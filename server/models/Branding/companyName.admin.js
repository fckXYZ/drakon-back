const AdminBro = require('admin-bro')
const { CompanyName } = require('./companyName.model')

/**@type {AdminBro.ResourceOptions} */
const options = {
	parent: {
		name: 'Branding'
	},
	properties: {
		_id: {
			isVisible: false
		},
	},
}

module.exports = {
	options,
	resource: CompanyName,
}
