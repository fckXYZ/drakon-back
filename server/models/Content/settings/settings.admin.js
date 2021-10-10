const AdminBro = require('admin-bro')
const { Settings } = require('./settings.model')

/**@type {AdminBro.ResourceOptions} */
const options = {
	parent: {
		name: 'Настройки'
	},
	properties: {
		_id: {
			isVisible: false
		},
	},
}

module.exports = {
	options,
	resource: Settings
}
