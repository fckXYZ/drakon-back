const AdminBro = require('admin-bro')
const { CompanyInfo } = require('./companyInfo.model')

const {
	after: uploadAfterHook,
	before: uploadBeforeHook
} = require('../../actions/upload-file.hook')

/**@type {AdminBro.ResourceOptions} */
const options = {
	parent: {
		name: 'Footer'
	},
	properties: {
		_id: {
			isVisible: false
		},
	},
	actions: {
		new: {
			after: uploadAfterHook,
			before: uploadBeforeHook,
		},
		edit: {
			after: uploadAfterHook,
			before: uploadBeforeHook,
		},
		show: {
			isVisible: false,
		},
	}
}

module.exports = {
	options,
	resource: CompanyInfo
}
