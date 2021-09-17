const AdminBro = require('admin-bro')
const { Logo } = require('./logo.model')

const {
	after: uploadAfterHook,
	before: uploadBeforeHook
} = require('../actions/upload-file.hook')


/**@type {AdminBro.ResourceOptions} */
const options = {
	parent: {
		name: 'Branding'
	},
	properties: {
		_id: {
			isVisible: false
		},
		uploadFile: {
			components: {
				edit: AdminBro.bundle('../components/upload-file.edit.tsx'),
				list: AdminBro.bundle('../components/upload-file.list.tsx'),
			},
			isVisible: {
				show: true,
				edit: true,
				filter: false,
				list: true
			},
			custom: {
				size: 'Размер логотипа - 183 на 30 пикселей',
				format: 'Поддерживаемые файлы: PNG, SVG, JPG'
			},
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
	resource: Logo
}
