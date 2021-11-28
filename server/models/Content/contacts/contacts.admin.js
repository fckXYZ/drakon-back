const AdminBro = require('admin-bro')
const { Contacts } = require('./contacts.model')

/**@type {AdminBro.ResourceOptions} */
const options = {
	parent: {
		name: 'Settings',
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
