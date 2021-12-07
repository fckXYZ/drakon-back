const AdminBro = require('admin-bro')
const { Contacts } = require('./contacts.model')

/**@type {AdminBro.ResourceOptions} */
const options = {
	parent: {
		name: 'Настройки',
	},
	properties: {
		_id: {
			isVisible: false
		},
	}
}

module.exports = {
	options,
	resource: Contacts
}
