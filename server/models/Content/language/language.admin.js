const AdminBro = require('admin-bro')
const { Language } = require('./language.model')

/**@type {AdminBro.ResourceOptions} */
const options = {
	parent: {
		name: 'Content',
	},
	properties: {
		_id: {
			isVisible: false
		},
	}
}

module.exports = {
	options,
	resource: Language
}
